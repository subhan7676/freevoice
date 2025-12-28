import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
          Terms of <span className="text-indigo-600">Synthesis</span>
        </h2>
        <div className="inline-block px-8 py-3 bg-slate-900 rounded-2xl">
          <p className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Legal Binding v4.5 | Architect: Subhan Ahmad</p>
        </div>
      </div>

      <div className="space-y-20">
        <section className="bg-white border border-slate-100 p-12 rounded-[3.5rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-xs mr-4 not-italic">01</span>
            Neural Consent Protocol
          </h3>
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-lg text-slate-600 font-bold italic border-l-4 border-indigo-600 pl-6 leading-relaxed">
              "By accessing the FreeVoice Pro matrix, the user declares absolute legal authority over the vocal signatures being processed. Unauthorized transformation of third-party identities without explicit, recorded consent is a violation of this protocol."
            </p>
            <p className="text-slate-500 leading-relaxed text-sm">
              Users are solely responsible for ensuring that their use of Neural Voice Transformation (NVT) technology complies with local, national, and international laws regarding privacy, identity, and deep-media creation. Subhan Ahmad and FreeVoice Pro provide these tools as a medium for creative expression; the moral and legal weight of the output rests entirely on the user's shoulders.
            </p>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] group-hover:bg-indigo-500/20 transition-all"></div>
          <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-8 flex items-center">
            <span className="w-8 h-8 bg-indigo-400 text-slate-900 rounded-lg flex items-center justify-center text-xs mr-4 not-italic">02</span>
            Automated Drive Archival
          </h3>
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed">
              To maintain the integrity of our platform and provide a verifiable audit trail, FreeVoice Pro implements an <span className="text-indigo-400 font-black italic">Archival Lock</span>. Upon acceptance of these terms and subsequent authentication, our system automatically generates a digital manifest.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Archived Metadata Includes:</h4>
              <ul className="text-xs space-y-2 text-slate-400 font-bold uppercase tracking-widest">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <span>Immutable Legal Declaration Hash</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <span>User Identity & Auth-Token Verification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <span>Temporal Sync (Global Timestamp)</span>
                </li>
              </ul>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              *This document is stored exclusively in your private Google Drive and acts as your 'Neural Passport' for FreeVoice Pro.
            </p>
          </div>
        </section>

        <section className="bg-white border border-slate-100 p-12 rounded-[3.5rem] shadow-xl">
          <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-slate-200 text-slate-600 rounded-lg flex items-center justify-center text-xs mr-4 not-italic">03</span>
            Limitation of Liability
          </h3>
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-slate-500 leading-relaxed text-sm">
              Subhan Ahmad explicitly disclaims all liability for damages—direct, indirect, or consequential—arising from the use or inability to use the neural engine. We do not guarantee 100% uptime for the Live Sync protocol, as it relies on external cloud infrastructure.
            </p>
            <p className="text-slate-900 font-black uppercase text-[10px] tracking-[0.2em] bg-slate-50 p-4 rounded-xl border border-slate-100">
              User acknowledges that voice synthesis can be used to generate deceptive content and agrees to hold Subhan Ahmad harmless against any claims of defamation or identity theft.
            </p>
          </div>
        </section>

        <section className="bg-rose-50 border border-rose-100 p-12 rounded-[3.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-900 font-black text-9xl">!</div>
          <h3 className="text-2xl font-black uppercase italic tracking-tighter text-rose-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center text-xs mr-4 not-italic">04</span>
            Termination Protocol
          </h3>
          <p className="text-rose-700/70 text-sm leading-relaxed font-medium">
            Any violation of the "Ethical Usage" clause—including the attempted bypass of the Google Drive archival process or the use of automated scrapers—will result in an immediate and permanent ban of the user's UID and associated IP range. Subhan Ahmad reserves the right to terminate access at any time without prior notice if the security of the Neural Matrix is threatened.
          </p>
        </section>
        
        <div className="text-center pb-24 border-t border-slate-100 pt-16">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Direct Compliance Channel</p>
          <a href="mailto:jobsofficial786@gmail.com" className="text-2xl font-black italic tracking-tighter text-indigo-600 hover:scale-105 transition-transform inline-block underline decoration-indigo-100 underline-offset-8">jobsofficial786@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;