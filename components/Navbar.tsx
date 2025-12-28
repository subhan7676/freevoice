
import React from 'react';
import { User, PageType } from '../types';

interface NavbarProps {
  user: User | null;
  activePage: PageType;
  isPro: boolean;
  setActivePage: (page: PageType) => void;
  setShowUpgradeModal: (show: boolean) => void;
  handleLogout: () => void;
  handleLogin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  activePage, 
  isPro, 
  setActivePage, 
  setShowUpgradeModal, 
  handleLogout, 
  handleLogin 
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200 h-20 px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActivePage('HOME')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 uppercase italic">FreeVoice</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setActivePage('HOME')} className={`text-xs font-bold uppercase tracking-widest transition-colors ${activePage === 'HOME' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}>Studio</button>
            <button onClick={() => setActivePage('LIVE_VOICE_CHANGER')} className={`group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest transition-colors ${activePage === 'LIVE_VOICE_CHANGER' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}>
              <span>Live Voice Changer</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-amber-500 transition-all duration-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)] ${activePage === 'LIVE_VOICE_CHANGER' ? 'scale-125' : 'group-hover:scale-125'}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V18H19V19Z" />
              </svg>
            </button>
            <button onClick={() => setActivePage('ABOUT')} className={`text-xs font-bold uppercase tracking-widest transition-colors ${activePage === 'ABOUT' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}>About</button>
            <button onClick={() => setActivePage('CONTACT')} className={`text-xs font-bold uppercase tracking-widest transition-colors ${activePage === 'CONTACT' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}>Contact</button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {!isPro && (
            <button 
              onClick={() => setShowUpgradeModal(true)}
              className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-amber-50 text-amber-600 border border-amber-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-100 hover:shadow-lg hover:shadow-amber-100/50 transition-all group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V18H19V19Z" />
              </svg>
              <span>Upgrade</span>
            </button>
          )}

          {user ? (
            <div 
              onClick={() => setActivePage('PROFILE')}
              className={`flex items-center space-x-4 p-1.5 pl-4 bg-slate-100 rounded-2xl border transition-all cursor-pointer ${activePage === 'PROFILE' ? 'border-indigo-300 ring-2 ring-indigo-50' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900 leading-none">{user.name}</p>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${isPro ? 'text-indigo-600' : 'text-slate-400'}`}>{isPro ? 'Pro Member' : 'Free Plan'}</p>
              </div>
              <img src={user.picture} className="w-10 h-10 rounded-xl border-2 border-white shadow-sm" alt="User" />
            </div>
          ) : (
            <button onClick={handleLogin} className="bg-indigo-600 text-white px-8 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">Sign In</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
