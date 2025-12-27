
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { VoiceConfig, ConnectionStatus, User } from '../types';
import Visualizer from './Visualizer';
import { encodeBase64, decodeBase64 } from '../services/audioUtils';
import { NEURAL_CORE_LIVE } from '../services/geminiConfig';
import { syncUserWithHF } from '../services/huggingFaceApi';

interface RealTimeSectionProps {
  selectedVoice: VoiceConfig;
  setErrorMessage: (msg: string | null) => void;
  isPro: boolean;
  user: User | null;
  handleLogin: () => void;
  setShowUpgradeModal: (show: boolean) => void;
}

const RealTimeSection: React.FC<RealTimeSectionProps> = ({ 
  selectedVoice, 
  setErrorMessage, 
  isPro,
  user, 
  handleLogin,
  setShowUpgradeModal
}) => {
  const [status, setStatus] = useState<ConnectionStatus>(ConnectionStatus.DISCONNECTED);
  const [isMuted, setIsMuted] = useState(false);
  const [monitorSelf, setMonitorSelf] = useState(true);
  const [speakerVolume, setSpeakerVolume] = useState(1.0);
  
  const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedInputId, setSelectedInputId] = useState<string>('');

  const audioContextInRef = useRef<AudioContext | null>(null);
  const audioContextOutRef = useRef<AudioContext | null>(null);
  const inputAnalyserRef = useRef<AnalyserNode | null>(null);
  const outputAnalyserRef = useRef<AnalyserNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // --- AUTO-KILL PROTOCOL ---
  // If the user's Pro status disappears (e.g., expiry hits) while the session is active, kill it.
  useEffect(() => {
    if (selectedVoice.isPremium && !isPro && status === ConnectionStatus.CONNECTED) {
      setErrorMessage("Identity validity expired. Terminating premium sync.");
      stopSession();
    }
  }, [isPro, status, selectedVoice.isPremium]);

  useEffect(() => {
    refreshDevices();
    return () => stopSession();
  }, []);

  const refreshDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setInputDevices(devices.filter(d => d.kind === 'audioinput'));
    } catch (e) {}
  };

  const createAudioBlob = (data: Float32Array) => {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      int16[i] = data[i] * 32768;
    }
    return {
      data: encodeBase64(new Uint8Array(int16.buffer)),
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  async function decodeAudioData(data: Uint8Array, ctx: AudioContext): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length;
    const buffer = ctx.createBuffer(1, frameCount, 24000);
    const channelData = buffer.getChannelData(0);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i] / 32768.0;
    }
    return buffer;
  }

  const startSession = async () => {
    if (selectedVoice.isPremium) {
      if (!user) {
        setErrorMessage("Identity Required: Please Sign In to use Premium Voices.");
        handleLogin();
        return;
      }
      
      setStatus(ConnectionStatus.CONNECTING);
      // Double verify with HF Server before opening stream
      const serverCheck = await syncUserWithHF(user.id, user.email);
      if (!serverCheck.isPro) {
        setErrorMessage("Neural Access Denied: Pro Subscription Required.");
        setStatus(ConnectionStatus.DISCONNECTED);
        setShowUpgradeModal(true);
        return;
      }
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) return setErrorMessage("Neural API Key Missing");

    setStatus(ConnectionStatus.CONNECTING);
    try {
      const ai = new GoogleGenAI({ apiKey });
      audioContextInRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextOutRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      const inputAn = audioContextInRef.current.createAnalyser();
      inputAnalyserRef.current = inputAn;
      const outputAn = audioContextOutRef.current.createAnalyser();
      outputAnalyserRef.current = outputAn;

      const gainNode = audioContextOutRef.current.createGain();
      gainNode.gain.value = monitorSelf ? speakerVolume : 0;
      gainNodeRef.current = gainNode;
      outputAn.connect(gainNode);
      gainNode.connect(audioContextOutRef.current.destination);

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          deviceId: selectedInputId ? { exact: selectedInputId } : undefined,
          echoCancellation: true,
          noiseSuppression: true
        } 
      });
      streamRef.current = stream;

      sessionPromiseRef.current = ai.live.connect({
        model: NEURAL_CORE_LIVE,
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: selectedVoice.geminiVoice } } },
          systemInstruction: `Identity: ${selectedVoice.instruction}. Instructions: You are a real-time voice transformer. Listen to the user's input and repeat it immediately in your assigned voice. Maintain the same emotion and intensity but change the biometric signature to match ${selectedVoice.name}. Do not add any conversational filler.`,
        },
        callbacks: {
          onopen: () => {
            setStatus(ConnectionStatus.CONNECTED);
            const source = audioContextInRef.current!.createMediaStreamSource(streamRef.current!);
            const processor = audioContextInRef.current!.createScriptProcessor(4096, 1, 1);
            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createAudioBlob(inputData);
              sessionPromiseRef.current?.then(session => {
                if (!isMuted) session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            source.connect(inputAn);
            inputAn.connect(processor);
            processor.connect(audioContextInRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && audioContextOutRef.current) {
              const buffer = await decodeAudioData(decodeBase64(base64Audio), audioContextOutRef.current);
              const source = audioContextOutRef.current.createBufferSource();
              source.buffer = buffer;
              source.connect(outputAnalyserRef.current!);
              
              const now = audioContextOutRef.current.currentTime;
              const startTime = Math.max(now, nextStartTimeRef.current);
              source.start(startTime);
              nextStartTimeRef.current = startTime + buffer.duration;
              activeSourcesRef.current.add(source);
              source.onended = () => activeSourcesRef.current.delete(source);
            }
          },
          onerror: (err) => {
            console.error("Live Error:", err);
            setErrorMessage("Neural Sync Interrupted.");
            setStatus(ConnectionStatus.ERROR);
            stopSession();
          },
          onclose: () => {
            setStatus(ConnectionStatus.DISCONNECTED);
            stopSession();
          },
        }
      });
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to initialize Neural Link.");
      setStatus(ConnectionStatus.ERROR);
    }
  };

  const stopSession = () => {
    setStatus(ConnectionStatus.DISCONNECTED);
    streamRef.current?.getTracks().forEach(t => t.stop());
    audioContextInRef.current?.close();
    audioContextOutRef.current?.close();
    activeSourcesRef.current.forEach(s => { try { s.stop(); } catch(e){} });
    activeSourcesRef.current.clear();
    nextStartTimeRef.current = 0;
  };

  return (
    <div className="bg-white/95 backdrop-blur-3xl rounded-[3rem] border border-white p-10 shadow-2xl relative overflow-hidden">
      {selectedVoice.isPremium && !isPro && (
        <div className="absolute inset-0 z-50 bg-slate-900/10 backdrop-blur-md flex items-center justify-center p-8 text-center">
           <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-sm">
             <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.75 1.5a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V1.5zM7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.75 6a.75.75 0 00-.75.75V9h-1.5V6.75a2.25 2.25 0 00-4.5 0V9h-1.5V6.75a2.25 2.25 0 00-4.5 0V9H4.5V6.75a.75.75 0 00-1.5 0V9c0 .414.336.75.75.75H4.5v3a5.25 5.25 0 0010.5 0v-3h.75c.414 0 .75-.336.75-.75V6.75z" />
                </svg>
             </div>
             <h4 className="text-xl font-black uppercase italic tracking-tighter mb-2">Premium Neural Mask</h4>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8 leading-relaxed">Upgrade your identity to unlock live synchronization for this voice.</p>
             <button 
               onClick={() => setShowUpgradeModal(true)}
               className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]"
             >
               Go Pro Now
             </button>
           </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className={`w-3 h-3 rounded-full ${status === ConnectionStatus.CONNECTED ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]' : 'bg-slate-300'}`}></div>
          <div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter leading-none">Neural Live Link</h3>
            <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 mt-1 block">Voice: {selectedVoice.name}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
           <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-xl transition-all ${isMuted ? 'bg-rose-100 text-rose-600' : 'bg-slate-50 text-slate-400'}`}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            )}
          </button>
          <button 
            onClick={() => setMonitorSelf(!monitorSelf)}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${monitorSelf ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-slate-100 text-slate-400'}`}
          >
            {monitorSelf ? 'Speaker ON' : 'Speaker OFF'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-3">
          <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 ml-4">Input Signal (You)</span>
          <Visualizer analyser={inputAnalyserRef.current} isActive={status === ConnectionStatus.CONNECTED} color="#6366f1" />
        </div>
        <div className="space-y-3">
          <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 ml-4">Output Stream (Morphed)</span>
          <Visualizer analyser={outputAnalyserRef.current} isActive={status === ConnectionStatus.CONNECTED} color="#10b981" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <select 
            value={selectedInputId} 
            onChange={(e) => setSelectedInputId(e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-indigo-500/20"
          >
            <option value="">Default Neural Input</option>
            {inputDevices.map(d => (
              <option key={d.deviceId} value={d.deviceId}>{d.label || 'Biometric Mic'}</option>
            ))}
          </select>
        </div>
        <button 
          onClick={status === ConnectionStatus.CONNECTED ? stopSession : startSession}
          disabled={status === ConnectionStatus.CONNECTING}
          className={`flex-[2] py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl ${
            status === ConnectionStatus.CONNECTED 
              ? 'bg-rose-500 text-white shadow-rose-100 hover:bg-rose-600' 
              : 'bg-indigo-600 text-white shadow-indigo-100 hover:scale-[1.02] active:scale-95'
          } disabled:opacity-50`}
        >
          {status === ConnectionStatus.CONNECTING ? 'Latching Signal...' : 
           status === ConnectionStatus.CONNECTED ? 'Disconnect Neural Link' : 'Initialize Live Sync'}
        </button>
      </div>

      {status === ConnectionStatus.CONNECTED && (
        <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
           <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
              <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Zero Latency E2E Pipeline Active</span>
           </div>
           <div className="text-[8px] font-black uppercase tracking-widest text-indigo-500 italic">Powered by Subhan-Core 4.0</div>
        </div>
      )}
    </div>
  );
};

export default RealTimeSection;
