
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Hero Section */}
      <div className="text-center mb-32">
        <h2 className="text-7xl md:text-9xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Establishing a direct neural link with the Architect. Response times vary based on matrix stability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
        {/* Left Column: Direct Access */}
        <div className="lg:col-span-1 space-y-12">
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-[60px] group-hover:bg-indigo-600/40 transition-all"></div>
            <h3 className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-8">Primary Channel</h3>
            <p className="text-2xl font-black italic tracking-tighter mb-4">Direct Intelligence</p>
            <a href="mailto:jobsofficial786@gmail.com" className="text-lg font-bold text-slate-300 hover:text-white transition-colors underline decoration-indigo-500 underline-offset-8">
              jobsofficial786@gmail.com
            </a>
            <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Typical Latency</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold">12 - 24 Hours Sync Time</span>
              </div>
            </div>
          </div>

          <div className="p-10 border border-slate-200 rounded-[3rem] bg-white shadow-xl">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-8 italic">The Architect</h3>
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-black text-slate-900 uppercase tracking-tighter italic">Subhan Ahmad</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lead System Designer</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              "Every line of code in FreeVoice Pro is written with the intent to bridge the gap between imagination and digital reality. If you have a vision for a new neural mask, reach out."
            </p>
          </div>
        </div>

        {/* Middle/Right Column: Informational Matrix */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-10 flex items-center">
              <span className="w-10 h-0.5 bg-indigo-600 mr-4"></span>
              Platform Mission
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600">Identity Freedom</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  We believe that your digital voice should be as fluid as your imagination. FreeVoice Pro provides the tools to decouple your biological identity from your online presence, ensuring absolute creative sovereignty.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600">Technical Purity</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Using state-of-the-art Neural Core architecture, we achieve latencies previously thought impossible for high-fidelity neural voice shifting. Our engine doesn't just change pitch; it rebuilds resonance.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-indigo-50 border border-indigo-100 rounded-[3.5rem] p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-64 h-64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <h3 className="text-xl font-black uppercase italic tracking-tighter text-indigo-900 mb-8">Technical Intelligence FAQ</h3>
             <div className="space-y-8 relative z-10">
               <div>
                 <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">How secure is my voice data?</p>
                 <p className="text-sm text-slate-600 leading-relaxed">Subhan Ahmad has engineered a 'Zero-Log' protocol. Your original audio never touches a persistent disk—it is processed in a temporary RAM buffer and immediately shredded post-transformation.</p>
               </div>
               <div>
                 <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">Can I use this for professional recording?</p>
                 <p className="text-sm text-slate-600 leading-relaxed">Yes. Our Studio Morph engine exports at 24kHz, providing broadcast-quality audio suitable for podcasts, game dev, and cinematic content creation.</p>
               </div>
               <div>
                 <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">Is a GPU required for Live Sync?</p>
                 <p className="text-sm text-slate-600 leading-relaxed">No. The neural heavy-lifting is performed by our distributed server-side matrix, meaning you can run Live Sync on almost any modern browser without local performance hits.</p>
               </div>
             </div>
          </section>

          <section>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-10">Global Lab Sync</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Primary Node</p>
                <p className="font-bold text-slate-900 italic">Islamabad, PK</p>
                <p className="text-[9px] text-slate-400 uppercase mt-2">Architecture & Logic</p>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Neural Node 01</p>
                <p className="font-bold text-slate-900 italic">Global Distribution</p>
                <p className="text-[9px] text-slate-400 uppercase mt-2">Edge Computing</p>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Storage Node</p>
                <p className="font-bold text-slate-900 italic">Distributed Neural Cloud</p>
                <p className="text-[9px] text-slate-400 uppercase mt-2">Persistence Layer</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Massive Footer-like Contact Block */}
      <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay pointer-events-none"></div>
        <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-12">Initialize Neural Request</h3>
        <p className="max-w-xl mx-auto text-slate-400 mb-16 text-lg">
          For business inquiries, API partnership proposals, or reporting matrix anomalies, use the dedicated developer channel below.
        </p>
        <div className="inline-flex flex-col md:flex-row items-center gap-6">
          <a 
            href="mailto:jobsofficial786@gmail.com" 
            className="px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-indigo-500/20 hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95"
          >
            Launch Email Client
          </a>
          <button className="px-12 py-6 bg-white/5 text-slate-400 border border-white/10 rounded-[2rem] font-black uppercase tracking-[0.3em] text-sm hover:bg-white/10 transition-all">
            Download Tech Specs
          </button>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-20 filter grayscale group-hover:grayscale-0 transition-all">
          <div className="text-[10px] font-black uppercase tracking-widest text-white italic">Neural Processing</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white italic">Identity Sync</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white italic">Privacy Firewall</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white italic">Direct Logic</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
