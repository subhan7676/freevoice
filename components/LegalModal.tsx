import React from 'react';

interface LegalModalProps {
  onAccept: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-3xl"></div>
      
      <div className="relative bg-white rounded-[3.5rem] w-full max-w-2xl p-12 shadow-2xl border border-white/20 animate-in zoom-in-95 duration-500">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 mb-4 leading-none">Legal Compliance Protocol</h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Verification of Ethical Usage</p>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 mb-10 max-h-[300px] overflow-y-auto">
          <div className="prose prose-slate prose-sm space-y-4">
            <p className="font-bold text-slate-700 leading-relaxed italic">
              "I hereby declare that I possess valid <span className="text-indigo-600">legal permission</span> to utilize neural voice transformation technology on my own vocal identity."
            </p>
            <p className="font-bold text-slate-700 leading-relaxed italic">
              "I further confirm that I have obtained <span className="text-indigo-600">explicit, verifiable consent</span> from any third-party whose voice may be subjected to transformation through this platform."
            </p>
            <p className="text-slate-500 leading-relaxed font-medium">
              I acknowledge that <span className="font-black text-slate-900">Subhan Ahmad</span> and <span className="font-black text-slate-900">FreeVoice Pro</span> are providing this technology for creative and experimental purposes only. Any misuse, illegal activity, or unauthorized impersonation is the <span className="text-rose-600">sole responsibility of the user</span>.
            </p>
            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
              <p className="text-[10px] font-black uppercase text-indigo-600 tracking-widest mb-2">Automated Archival Protocol</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                By accepting and signing in, a <span className="font-bold">legally binding digital document</span> will be automatically archived in your <span className="font-bold">Google Drive</span>. This serves as a permanent record of your consent for legal verification purposes.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => window.location.href = 'https://google.com'}
            className="flex-1 py-5 rounded-2xl border border-slate-200 text-slate-400 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all"
          >
            Deny & Exit
          </button>
          <button 
            onClick={onAccept}
            className="flex-[2] py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:scale-[1.02] transition-all"
          >
            Accept & Initialize Protocol
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;