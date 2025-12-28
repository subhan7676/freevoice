
import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  setActivePage: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActivePage('HOME')}>
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tighter text-slate-900 uppercase italic">FreeVoice</span>
            </div>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">
              Leading the neural identity revolution. Transform your voice with biometric precision and zero latency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setActivePage('HOME')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">Studio Interface</button></li>
              <li>
                <button onClick={() => setActivePage('LIVE_VOICE_CHANGER')} className="group flex items-center space-x-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">
                  <span>Live Voice Changer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 transition-transform group-hover:scale-110 drop-shadow-[0_0_4px_rgba(245,158,11,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V18H19V19Z" />
                  </svg>
                </button>
              </li>
              <li><button onClick={() => setActivePage('ABOUT')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">The Architect</button></li>
              <li><button onClick={() => setActivePage('PROTOCOL')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">System Protocol</button></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Legality</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setActivePage('PRIVACY')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">Privacy Sovereignty</button></li>
              <li><button onClick={() => setActivePage('TERMS')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">Terms of Synthesis</button></li>
              <li><button onClick={() => setActivePage('PROTOCOL')} className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">Safety Guidelines</button></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="md:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Contact</h4>
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500">Subhan Ahmad | Owner</p>
              <a href="mailto:jobsofficial786@gmail.com" className="text-xs font-black text-indigo-600 underline underline-offset-4">jobsofficial786@gmail.com</a>
              <p className="text-[10px] font-bold text-slate-400 italic">"Engineering the future of identity."</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} FreeVoice Pro. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 italic">Designed by Subhan Ahmad</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
