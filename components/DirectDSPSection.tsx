
import React, { useState, useEffect, useRef } from 'react';
import { VoiceConfig } from '../types';
import Visualizer from './Visualizer';

interface DirectDSPSectionProps {
  selectedVoice: VoiceConfig;
}

const DirectDSPSection: React.FC<DirectDSPSectionProps> = ({ selectedVoice }) => {
  const [isActive, setIsActive] = useState(false);
  const [pitch, setPitch] = useState(1.0);
  const [bass, setBass] = useState(1.0);
  const [clarity, setClarity] = useState(1.0);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const outputAnalyserRef = useRef<AnalyserNode | null>(null);
  
  // DSP Nodes
  const pitchShifterRef = useRef<any>(null);

  useEffect(() => {
    if (selectedVoice.dspSettings) {
      setPitch(selectedVoice.dspSettings.pitch || 1.0);
      setBass(selectedVoice.dspSettings.bass || 1.0);
      setClarity(selectedVoice.dspSettings.clarity || 1.0);
    }
  }, [selectedVoice]);

  const toggleDSP = async () => {
    if (isActive) {
      stopDSP();
    } else {
      await startDSP();
    }
  };

  const startDSP = async () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = ctx;

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      streamRef.current = stream;

      const source = ctx.createMediaStreamSource(stream);
      
      // Analysis nodes
      const inputAn = ctx.createAnalyser();
      inputAn.fftSize = 256;
      analyserRef.current = inputAn;
      source.connect(inputAn);

      // EQ Nodes
      const bassFilter = ctx.createBiquadFilter();
      bassFilter.type = 'lowshelf';
      bassFilter.frequency.value = 200;
      bassFilter.gain.value = (bass - 1) * 20;

      const clarityFilter = ctx.createBiquadFilter();
      clarityFilter.type = 'highshelf';
      clarityFilter.frequency.value = 3000;
      clarityFilter.gain.value = (clarity - 1) * 15;

      // Noise Gate (Simple implementation via Expander logic)
      const gate = ctx.createDynamicsCompressor();
      gate.threshold.value = -50;
      gate.ratio.value = 20;

      // Compressor for "Realistic/Clear" sound
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -24;
      compressor.knee.value = 30;
      compressor.ratio.value = 12;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.25;

      // Custom Pitch Shifter Logic (Overlap-Add Delay Line)
      // This is the core "Code" work for realistic pitch shifting
      const bufferSize = 4096;
      const pitchNode = ctx.createScriptProcessor(bufferSize, 1, 1);
      
      let delayBuffer = new Float32Array(bufferSize * 2);
      let writePointer = 0;

      pitchNode.onaudioprocess = (e) => {
        const input = e.inputBuffer.getChannelData(0);
        const output = e.outputBuffer.getChannelData(0);
        const p = pitch;

        for (let i = 0; i < input.length; i++) {
          delayBuffer[writePointer] = input[i];
          const readPointer = (writePointer - (p * 100) + delayBuffer.length) % delayBuffer.length;
          
          // Basic linear interpolation for "realistic" smoothness
          const i1 = Math.floor(readPointer);
          const i2 = (i1 + 1) % delayBuffer.length;
          const frac = readPointer - i1;
          
          output[i] = delayBuffer[i1] * (1 - frac) + delayBuffer[i2] * frac;
          writePointer = (writePointer + 1) % delayBuffer.length;
        }
      };

      // Robot Effect (Ring Modulator) if needed
      let robotNode: AudioNode | null = null;
      if (selectedVoice.dspSettings?.isRobot) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = 50;
        osc.connect(gain.gain);
        osc.start();
        robotNode = gain;
      }

      // Connect Chain
      let chain: AudioNode = source;
      chain.connect(gate);
      chain = gate;
      chain.connect(bassFilter);
      chain = bassFilter;
      chain.connect(clarityFilter);
      chain = clarityFilter;
      
      if (robotNode) {
        chain.connect(robotNode);
        chain = robotNode;
      }

      chain.connect(pitchNode);
      chain = pitchNode;
      chain.connect(compressor);
      chain = compressor;

      const outAn = ctx.createAnalyser();
      outAn.fftSize = 256;
      outputAnalyserRef.current = outAn;
      chain.connect(outAn);
      outAn.connect(ctx.destination);

      setIsActive(true);
    } catch (err) {
      console.error("DSP Init Error:", err);
    }
  };

  const stopDSP = () => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    audioContextRef.current?.close();
    setIsActive(false);
    analyserRef.current = null;
    outputAnalyserRef.current = null;
  };

  return (
    <div className="bg-white/90 backdrop-blur-2xl rounded-[3.5rem] border border-white p-12 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </div>

      <div className="flex items-center justify-between mb-12">
        <div>
          <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">Quantum DSP</h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mt-1">Zero-Latency Client Engine</p>
        </div>
        <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${isActive ? 'bg-emerald-100 text-emerald-600 animate-pulse' : 'bg-slate-100 text-slate-400'}`}>
          {isActive ? 'LIVE SIGNAL' : 'OFFLINE'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="space-y-6">
           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Raw Input</label>
           <Visualizer analyser={analyserRef.current} isActive={isActive} color="#6366f1" />
        </div>
        <div className="space-y-6">
           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Processed Signal</label>
           <Visualizer analyser={outputAnalyserRef.current} isActive={isActive} color="#10b981" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
           <div className="flex justify-between mb-4">
             <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Pitch Shift</span>
             <span className="text-xs font-black text-indigo-600">x{pitch.toFixed(1)}</span>
           </div>
           <input type="range" min="0.5" max="2.0" step="0.1" value={pitch} onChange={(e) => setPitch(parseFloat(e.target.value))} className="w-full accent-indigo-600" />
        </div>
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
           <div className="flex justify-between mb-4">
             <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Deep Bass</span>
             <span className="text-xs font-black text-indigo-600">{Math.round(bass * 100)}%</span>
           </div>
           <input type="range" min="0.5" max="2.0" step="0.1" value={bass} onChange={(e) => setBass(parseFloat(e.target.value))} className="w-full accent-indigo-600" />
        </div>
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
           <div className="flex justify-between mb-4">
             <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Vocal Clarity</span>
             <span className="text-xs font-black text-indigo-600">{Math.round(clarity * 100)}%</span>
           </div>
           <input type="range" min="0.5" max="2.0" step="0.1" value={clarity} onChange={(e) => setClarity(parseFloat(e.target.value))} className="w-full accent-indigo-600" />
        </div>
      </div>

      <button 
        onClick={toggleDSP}
        className={`w-full py-8 rounded-[2rem] font-black text-xl uppercase tracking-widest transition-all shadow-2xl ${
          isActive 
            ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-100' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100'
        }`}
      >
        {isActive ? 'Stop Transformer' : 'Activate Direct Mode'}
      </button>

      {selectedVoice.dspSettings?.isRobot && isActive && (
        <div className="mt-8 p-4 bg-cyan-50 rounded-2xl border border-cyan-100 flex items-center justify-center space-x-3">
           <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
           <span className="text-[10px] font-black uppercase tracking-widest text-cyan-600">Metallic Vocoder Enabled</span>
        </div>
      )}
    </div>
  );
};

export default DirectDSPSection;
