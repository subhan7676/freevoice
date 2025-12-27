
import React from 'react';

const ProtocolPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
          System <span className="text-indigo-600">Protocol</span>
        </h2>
        <div className="inline-block px-8 py-3 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-100">
          <p className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Neural Architecture v4.0 | Engineered by Subhan Ahmad</p>
        </div>
      </div>

      <div className="space-y-32">
        {/* Layer 1: The Engine */}
        <section className="relative">
          <div className="absolute -left-12 top-0 text-[12rem] font-black text-slate-100 -z-10 select-none leading-none">01</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-10 flex items-center">
            <span className="w-2 h-10 bg-indigo-600 mr-4"></span>
            Neural Sampling Layer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6 text-slate-500 leading-relaxed font-medium">
              <p>The foundation of FreeVoice Pro lies in our high-fidelity sampling engine. We capture raw audio via a <span className="text-slate-900 font-bold">ScriptProcessorNode</span>, processing chunks of 4096 samples at a base rate of 16kHz.</p>
              <p>This data is then normalized and converted into <span className="text-slate-900 font-bold">16-bit Signed Integer PCM</span>. This specific bit-depth ensures that the internal neural matrix receives a clean, high-dynamic-range representation of the user's vocal vibrations.</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-xl">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Inbound Sample Rate</span>
                  <span className="font-bold text-slate-900 italic">16,000 Hz</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Outbound Sample Rate</span>
                  <span className="font-bold text-indigo-600 italic">24,000 Hz</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Latency Target</span>
                  <span className="font-bold text-emerald-500 italic">&lt; 150ms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layer 2: Transformation Logic */}
        <section className="relative">
          <div className="absolute -right-12 top-0 text-[12rem] font-black text-slate-100 -z-10 select-none leading-none text-right">02</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-10 text-right flex items-center justify-end">
            Neural Transformation Matrix
            <span className="w-2 h-10 bg-indigo-600 ml-4"></span>
          </h3>
          <div className="bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <h4 className="text-4xl font-black uppercase italic tracking-tighter">Neural Vector v4 Sync</h4>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">
                  We utilize a proprietary implementation of the <span className="text-white italic">Vector Native Audio</span> protocol. Unlike traditional DSP (Digital Signal Processing) which uses mathematical filters, our system performs a <span className="text-indigo-400">latent-space shift</span>.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-2">Inference Mode</p>
                    <p className="text-xs text-slate-300">Wave-to-Wave Biometric Re-mapping</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-2">Memory Logic</p>
                    <p className="text-xs text-slate-300">Non-Persistent Neural Context</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-indigo-500 animate-pulse"></div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-indigo-500 animate-pulse delay-700"></div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-indigo-500 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layer 3: Security & Archival */}
        <section className="relative">
          <div className="absolute -left-12 top-0 text-[12rem] font-black text-slate-100 -z-10 select-none leading-none">03</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-10 flex items-center">
            <span className="w-2 h-10 bg-indigo-600 mr-4"></span>
            Security & Archival Protocol
          </h3>
          <div className="space-y-12">
            <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] shadow-xl space-y-8">
              <p className="text-slate-500 leading-relaxed font-medium text-lg">
                The most critical component of the FreeVoice protocol is the <span className="text-slate-900 font-black italic">Biometric Shredder</span>. As audio flows through our RAM buffers, it is flagged for immediate erasure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl text-center">
                  <div className="text-3xl font-black text-indigo-600 mb-2 italic">ZERO</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Disk Writes of Audio</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl text-center">
                  <div className="text-3xl font-black text-indigo-600 mb-2 italic">NV12</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Neural Verification v12</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl text-center">
                  <div className="text-3xl font-black text-indigo-600 mb-2 italic">E2E</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Socket Encryption</p>
                </div>
              </div>
            </div>

            <div className="p-12 bg-indigo-600 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="1" /></svg>
               </div>
               <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">Identity Notarization (Drive Sync)</h4>
               <p className="text-indigo-100 leading-relaxed font-medium mb-8">
                 To facilitate legal accountability, the system utilizes a background <span className="text-white underline decoration-indigo-300">Drive Cloud Synchronization</span>. Upon initial login, a cryptographically signed document is pushed to the user's Google Drive. This document maps the user's identifier to their legal declaration of consent, providing a permanent record for the developer, Subhan Ahmad.
               </p>
               <div className="flex items-center space-x-3">
                 <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">Active Archival Monitoring Enabled</span>
               </div>
            </div>
          </div>
        </section>

        {/* Layer 4: Ethical Safety Guidelines */}
        <section className="relative">
          <div className="absolute -right-12 top-0 text-[12rem] font-black text-slate-100 -z-10 select-none leading-none text-right">04</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-10 text-right flex items-center justify-end">
            Ethical Safety Guidelines
            <span className="w-2 h-10 bg-rose-600 ml-4"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-lg">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-4">Directive 4.1: Non-Malicious Use</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Transformation of voice for the purpose of fraud, deception, or financial gain is strictly prohibited. Users must not use the neural masks to impersonate public officials, corporate executives, or any person without their explicit written consent.
                </p>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-lg">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-4">Directive 4.2: Harassment Protection</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The matrix must not be used to cyberbully, stalk, or harass individuals. Using transformed voices to bypass blocking filters or to remain anonymous while violating community standards will result in an immediate permanent ban.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-8 bg-rose-50 border border-rose-100 rounded-[2.5rem] shadow-lg">
                <h4 className="text-xs font-black uppercase tracking-widest text-rose-600 mb-4">Directive 4.3: Transparency Disclosure</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  If the morphed audio is being used in content creation (YouTube, TikTok, etc.), Subhan Ahmad strongly recommends adding a <span className="font-bold uppercase tracking-tighter">"Voice Transformed by FreeVoice"</span> disclaimer. This maintains digital trust within the community.
                </p>
              </div>
              <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-4">Directive 4.4: Age Compliance</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Usage by minors must be strictly supervised by a legal guardian. The neural engine creates high-fidelity results that can be confusing to young users or vulnerable populations. Guardian oversight is mandatory for all accounts under age 18.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-10 bg-emerald-50 border border-emerald-100 rounded-[3rem] text-center">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-4">The Golden Rule of Synthesis</h4>
            <p className="text-lg font-bold text-emerald-900 italic max-w-2xl mx-auto leading-relaxed">
              "Create for joy, express for art, and transform for play. Never use technology to diminish another person's reality or security."
            </p>
          </div>
        </section>

        {/* Footer Manifest */}
        <div className="text-center pb-32">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Engineering Manifest</p>
          <div className="max-w-2xl mx-auto p-12 bg-white border border-slate-100 rounded-[3rem] shadow-inner">
             <p className="text-sm font-bold text-slate-600 italic leading-loose">
               "The FreeVoice Pro System Protocol is a living document. As our neural architecture adapts, we maintain the precarious balance between absolute creative freedom and total legal responsibility. This is the Architect's Promise."
             </p>
             <div className="mt-8 pt-8 border-t border-slate-50">
               <p className="font-black text-slate-900 uppercase tracking-widest text-xs italic">Subhan Ahmad</p>
               <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Lead System Designer | February 2025</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolPage;
