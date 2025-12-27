
import { GoogleGenAI, Modality } from "@google/genai";
import React, { useState, useRef } from 'react';
import { VoiceConfig, User } from '../types';
import { AUDIO_SAMPLE_RATE_OUTPUT } from '../constants';
import { blobToBase64, decodeBase64, createWavBlob } from '../services/audioUtils';
import { NEURAL_CORE_STUDIO, NEURAL_CORE_SYNTHESIS } from '../services/geminiConfig';
import { syncUserWithHF } from '../services/huggingFaceApi';

interface StudioSectionProps {
  selectedVoice: VoiceConfig;
  setErrorMessage: (msg: string | null) => void;
  isPro: boolean;
  user: User | null;
  handleLogin: () => void;
}

type StudioStage = 'IDLE' | 'RECORDING' | 'REVIEW' | 'PROCESSING' | 'DONE';

const StudioSection: React.FC<StudioSectionProps> = ({ selectedVoice, setErrorMessage, isPro, user, handleLogin }) => {
  const [stage, setStage] = useState<StudioStage>('IDLE');
  const [recordTime, setRecordTime] = useState(0);
  const [originalBlob, setOriginalBlob] = useState<Blob | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        setOriginalBlob(new Blob(chunksRef.current, { type: 'audio/webm' }));
        setStage('REVIEW');
        stream.getTracks().forEach(t => t.stop());
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setStage('RECORDING');
      setRecordTime(0);
      timerRef.current = window.setInterval(() => setRecordTime(p => p + 1), 1000);
    } catch (err) { 
      setErrorMessage("Microphone access denied. Neural capture failed."); 
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const transformVoice = async () => {
    if (!originalBlob) return;
    
    // --- ANTI-HACKING VERIFICATION ---
    if (selectedVoice.isPremium) {
      if (!user) {
        setErrorMessage("Biometric identification required for Premium Synthesis.");
        handleLogin();
        setStage('REVIEW');
        return;
      }
      
      setStage('PROCESSING');
      // Deep server sync at point of impact
      const serverCheck = await syncUserWithHF(user.id, user.email);
      if (!serverCheck.isPro) {
        setErrorMessage("Neural authorization failed. Premium identity required.");
        setStage('REVIEW');
        return;
      }
    } else {
      setStage('PROCESSING');
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      const base64Audio = await blobToBase64(originalBlob);
      
      const analysisResponse = await ai.models.generateContent({
        model: NEURAL_CORE_STUDIO,
        contents: [
          {
            parts: [
              { inlineData: { data: base64Audio, mimeType: 'audio/webm' } },
              { text: "Analyze the tone and transcribe exactly. Output transcription ONLY." }
            ]
          }
        ]
      });

      const transcript = analysisResponse.text?.trim();
      if (!transcript) throw new Error("Voice analysis failed.");

      const synthesisResponse = await ai.models.generateContent({
        model: NEURAL_CORE_SYNTHESIS,
        contents: [{ parts: [{ text: `Persona: ${selectedVoice.instruction}. Speak: ${transcript}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: selectedVoice.geminiVoice } } }
        }
      });

      const audioPart = synthesisResponse.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
      if (audioPart && audioPart.inlineData) {
        const pcmData = decodeBase64(audioPart.inlineData.data);
        const wavBlob = createWavBlob(pcmData, AUDIO_SAMPLE_RATE_OUTPUT);
        setProcessedUrl(URL.createObjectURL(wavBlob));
        setStage('DONE');
      } else {
        throw new Error("Synthesis node timed out.");
      }
    } catch (err: any) { 
      setErrorMessage(`Neural Core Exception: ${err.message}`); 
      setStage('REVIEW'); 
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] border border-white shadow-2xl p-12 min-h-[450px] flex flex-col justify-center transition-all relative">
      <div className="mb-12 text-center">
        <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 italic">Neural Studio Interface</h3>
        <p className={`text-[9px] font-black uppercase tracking-[0.4em] mt-2 ${selectedVoice.isPremium ? 'text-amber-500' : 'text-slate-400'}`}>
          {selectedVoice.isPremium ? 'Latching Premium Identity Core' : 'Standard Core Initialized'}
        </p>
      </div>

      {stage === 'IDLE' && (
        <div className="text-center animate-in zoom-in-95 duration-500">
          <button onClick={startRecording} className="w-40 h-40 bg-indigo-600 hover:scale-105 rounded-[3rem] flex items-center justify-center mx-auto transition-all active:scale-95 shadow-2xl shadow-indigo-100 group relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-[3rem] animate-ping opacity-10 group-hover:opacity-20"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
          </button>
          <p className="mt-10 font-black text-slate-400 uppercase tracking-[0.3em] text-[10px]">Initiate Biometric Capture</p>
        </div>
      )}

      {stage === 'RECORDING' && (
        <div className="text-center animate-in fade-in duration-300">
          <div className="text-9xl font-black text-slate-900 mb-12 tracking-tighter tabular-nums flex items-center justify-center space-x-8">
            <div className="w-6 h-6 bg-rose-500 rounded-full animate-pulse shadow-[0_0_15px_#f43f5e]"></div>
            <span>{recordTime}s</span>
          </div>
          <button onClick={stopRecording} className="px-16 py-6 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl transition-all hover:bg-black active:scale-95">End Capture</button>
        </div>
      )}

      {stage === 'REVIEW' && (
        <div className="space-y-10 w-full animate-in zoom-in-95 duration-300">
          <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
            <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-6 text-center">Identity Source Analysis</p>
            <audio src={originalBlob ? URL.createObjectURL(originalBlob) : ''} controls className="w-full" />
          </div>
          <div className="flex space-x-4">
            <button onClick={() => setStage('IDLE')} className="flex-1 py-6 bg-white border border-slate-200 rounded-2xl font-black text-[10px] uppercase text-slate-400 hover:text-slate-900 transition-colors">Discard Buffer</button>
            <button onClick={transformVoice} className="flex-[2] py-6 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-indigo-100 hover:scale-[1.02] active:scale-95 transition-all">Initialize Synthesis</button>
          </div>
        </div>
      )}

      {stage === 'PROCESSING' && (
        <div className="text-center py-20">
          <div className="relative w-24 h-24 mx-auto mb-10">
             <div className="absolute inset-0 border-[6px] border-indigo-100 rounded-full"></div>
             <div className="absolute inset-0 border-[6px] border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h4 className="text-xl font-black uppercase italic text-slate-900 tracking-tighter">Neural Re-Mapping</h4>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Shifting Latent Space Vectors...</p>
        </div>
      )}

      {stage === 'DONE' && (
        <div className="w-full space-y-12 animate-in zoom-in-95 duration-500">
          <div className="p-12 bg-indigo-50/50 rounded-[3rem] border border-indigo-100 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-600 font-black text-6xl">SYNTH</div>
            <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-8">Synthesized Identity Result</p>
            <audio src={processedUrl!} controls autoPlay className="w-full mb-12 shadow-2xl rounded-full" />
            <div className="flex space-x-4 relative z-10">
              <button 
                onClick={() => { const a = document.createElement('a'); a.href = processedUrl!; a.download = `neural_export_${Date.now()}.wav`; a.click(); }} 
                className="flex-1 bg-indigo-600 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all"
              >
                Export Master WAV
              </button>
              <button onClick={() => setStage('IDLE')} className="px-10 bg-white border border-slate-200 text-slate-400 py-6 rounded-2xl font-black text-[10px] uppercase hover:bg-slate-50 hover:text-slate-900 transition-all">Clear Session</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudioSection;
