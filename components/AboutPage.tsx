
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Header Section */}
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
          The <span className="text-indigo-600">Architect</span>
        </h2>
        <div className="inline-block px-8 py-3 bg-indigo-50 border border-indigo-100 rounded-2xl">
          <p className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px]">Subhan Ahmad | Lead Developer & Owner</p>
        </div>
      </div>

      <div className="space-y-32">
        {/* Section 1: The Vision */}
        <section className="relative">
          <div className="absolute -left-12 top-0 text-[12rem] font-black text-slate-100/50 -z-10 leading-none select-none">01</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-8">The Neural Vision</h3>
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              FreeVoice Pro wasn't just built; it was envisioned by <span className="font-bold text-slate-900">Subhan Ahmad</span> as the definitive bridge between human expression and digital identity. In an era where digital presence is as significant as physical reality, Subhan recognized the need for a tool that offers both creative liberation and uncompromising privacy.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Under the leadership of Subhan Ahmad, FreeVoice has evolved from an experimental audio filter into a full-scale Neural Identity Studio. The core philosophy is simple: technology should amplify human potential without compromising security.
            </p>
          </div>
        </section>

        {/* Section 2: Technical Engineering */}
        <section className="relative">
          <div className="absolute -right-12 top-0 text-[12rem] font-black text-slate-100/50 -z-10 leading-none select-none">02</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-8 text-right">Engineering Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                The technical architecture of FreeVoice Pro, personally overseen by Subhan Ahmad, utilizes high-frequency neural synchronization and an automated archival system for legal transparency.
              </p>
              <div className="p-6 bg-slate-900 rounded-[2.5rem] text-white">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-400 font-bold">»</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">16kHz Input Biometric Sampling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-400 font-bold">»</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Drive Cloud Archival Sync</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-400 font-bold">»</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Latent Pattern Synthesis</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-indigo-600 h-64 rounded-[3.5rem] flex items-center justify-center shadow-2xl shadow-indigo-200">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
               </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
