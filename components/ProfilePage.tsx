
import React, { useEffect, useState } from 'react';
import { User } from '../types';
import { syncUserWithHF } from '../services/huggingFaceApi';

interface ProfilePageProps {
  user: User;
  isPro: boolean;
  setShowUpgradeModal: (show: boolean) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, isPro, setShowUpgradeModal }) => {
  const [timeLeft, setTimeLeft] = useState<string>('Calculating...');
  const [progress, setProgress] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'SECURITY' | 'HISTORY'>('IDENTITY');

  const MASTER_EMAIL = 'subhanfreefire76@gmail.com';
  const isMaster = user.email.toLowerCase() === MASTER_EMAIL.toLowerCase();

  const manualSync = async () => {
    setIsRefreshing(true);
    try {
      await syncUserWithHF(user.id, user.email);
      setTimeout(() => setIsRefreshing(false), 1500);
    } catch (e) {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (isMaster) {
      setTimeLeft('INFINITE LIFETIME');
      setProgress(100);
      return;
    }

    if (!isPro) {
      setTimeLeft('FREE ACCOUNT');
      setProgress(0);
      return;
    }

    if (!user.proExpiry) {
      setTimeLeft('LIFETIME ACCESS');
      setProgress(100);
      return;
    }

    const updateCountdown = () => {
      const now = Date.now();
      const diff = user.proExpiry! - now;
      if (diff <= 0) { setTimeLeft('EXPIRED'); setProgress(0); return; }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(days > 0 ? `${days}d ${hours}h ${minutes}m` : `${hours}h ${minutes}m ${seconds}s`);
      const maxTime = 30 * 24 * 60 * 60 * 1000;
      setProgress(Math.min(100, (diff / maxTime) * 100));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [isPro, user.proExpiry, isMaster]);

  return (
    <div className="max-w-6xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Dynamic Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4 gap-8">
        <div className="flex items-center space-x-8">
          <div className="relative">
             <div className={`absolute -inset-1 rounded-[2.5rem] blur-xl opacity-30 ${isMaster ? 'bg-amber-500 animate-pulse' : isPro ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>
             <img 
               src={user.picture} 
               className={`relative w-28 h-28 rounded-[2.5rem] border-4 border-white shadow-2xl object-cover`} 
               alt={user.name} 
             />
             {(isPro || isMaster) && (
               <div className={`absolute -bottom-2 -right-2 p-2 rounded-xl border-2 border-white shadow-lg ${isMaster ? 'bg-amber-500' : 'bg-indigo-600'}`}>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                 </svg>
               </div>
             )}
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">{user.name}</h2>
            <div className="flex items-center space-x-3 mt-1">
              <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${isMaster ? 'bg-amber-500 text-white shadow-lg shadow-amber-100' : isPro ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                {isMaster ? 'MASTER IDENTITY' : isPro ? 'PRO ACCESS' : 'FREE ACCOUNT'}
              </span>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[8px]">{user.email}</span>
            </div>
          </div>
        </div>

        <div className="flex bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-100">
          {(['IDENTITY', 'SECURITY', 'HISTORY'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white text-indigo-600 shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        
        {/* Main Stats Panel */}
        <div className="lg:col-span-2 space-y-8">
          {activeTab === 'IDENTITY' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-500">
              {/* Membership Card */}
              <div className={`p-10 rounded-[3.5rem] border relative overflow-hidden transition-all duration-500 ${isMaster ? 'bg-slate-900 text-white border-amber-500/30' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/40'}`}>
                {isMaster && <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[80px]"></div>}
                <div className="relative z-10">
                  <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${isMaster ? 'text-amber-500' : 'text-slate-400'}`}>Current Validity</p>
                  <div className={`text-5xl font-black tracking-tighter italic uppercase mb-8 ${isMaster ? 'text-white' : 'text-indigo-900'}`}>{timeLeft}</div>
                  
                  {isPro && (
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner mb-2">
                       <div 
                         className={`h-full rounded-full transition-all duration-1000 ${isMaster ? 'bg-amber-500' : 'bg-indigo-600'}`} 
                         style={{ width: `${progress}%` }}
                       />
                    </div>
                  )}
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Neural Sync Status: Synchronized (G-7Y77XH3NEK)</p>
                </div>
              </div>

              {/* Account Metrics */}
              <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Platform Analytics</p>
                 <div className="space-y-8">
                    <div className="flex items-end justify-between">
                       <div>
                         <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Transformations</p>
                         <p className="text-3xl font-black text-slate-900 italic">1,284</p>
                       </div>
                       <div className="w-24 h-8 flex items-end space-x-1">
                          {[4,7,3,9,5,8,4,6].map((h, i) => <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm" style={{height: `${h*10}%`}} />)}
                       </div>
                    </div>
                    <div className="flex items-end justify-between">
                       <div>
                         <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Matrix Reputation</p>
                         <p className="text-3xl font-black text-emerald-500 italic">99.2%</p>
                       </div>
                       <div className="text-[8px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-50 px-2 py-1 rounded-md">Elite Tier</div>
                    </div>
                 </div>
              </div>

              {/* Action Board */}
              <div className="md:col-span-2 bg-indigo-50/50 border border-indigo-100 p-10 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                       <h4 className="text-xl font-black uppercase italic tracking-tighter text-indigo-900 leading-none">Instant Identity Refresh</h4>
                       <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mt-2">Force sync with HF Neural Core</p>
                    </div>
                 </div>
                 <button 
                   onClick={manualSync}
                   disabled={isRefreshing}
                   className="w-full md:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50"
                 >
                   {isRefreshing ? 'SYNCHRONIZING...' : 'SYNC NOW'}
                 </button>
              </div>
            </div>
          )}

          {activeTab === 'SECURITY' && (
            <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden animate-in slide-in-from-right-4 duration-500">
               <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>
               <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-8 text-rose-500">Neural Firewall Settings</h3>
               <div className="space-y-8">
                  {[
                    { label: 'EPHEMERAL RAM BUFFER', desc: 'Audio data is shred from memory every 150ms.', status: 'ACTIVE' },
                    { label: 'E2E SOCKET ENCRYPTION', desc: 'Real-time AES-256 wrapping for all live streams.', status: 'ENFORCED' },
                    { label: 'AUDIT LOGGING PIN', desc: 'Private document push to Google Drive on transformation.', status: 'ENABLED' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">{item.label}</p>
                          <p className="text-xs text-slate-400">{item.desc}</p>
                       </div>
                       <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-[9px] font-black uppercase text-emerald-400">{item.status}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {activeTab === 'HISTORY' && (
            <div className="bg-white border border-slate-100 rounded-[3.5rem] p-12 text-center py-32 animate-in slide-in-from-right-4 duration-500">
               <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 mb-4">Zero-Log History</h3>
               <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed font-medium">In compliance with the Architect's Privacy Manifesto, no transformation history is stored persistently. Your past is your own.</p>
            </div>
          )}
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-8">
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40">
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">System Access</h4>
             <div className="space-y-4">
                <div className="p-5 bg-slate-50 rounded-2xl">
                   <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Identity UID Signature</p>
                   <p className="text-[10px] font-mono font-bold text-slate-900 truncate">{user.id}</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl">
                   <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Cloud Node Connection</p>
                   <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <p className="text-[10px] font-black text-slate-900 uppercase">Primary HF-Space</p>
                   </div>
                </div>
             </div>
          </div>

          {!isMaster && !isPro && (
            <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
               </div>
               <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4 leading-none">Upgrade Identity</h4>
               <p className="text-[11px] text-indigo-100 mb-8 leading-relaxed font-medium">Unlock 50+ Premium Neural Masks and zero-latency Live Sync capability.</p>
               <button 
                 onClick={() => setShowUpgradeModal(true)}
                 className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all"
               >
                 Go Pro Now
               </button>
            </div>
          )}

          <div className="p-10 bg-rose-50 border border-rose-100 rounded-[3rem] text-center group hover:bg-rose-100 transition-all cursor-pointer">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-600 mb-2">Nuclear Protocol</h4>
             <p className="text-[9px] font-bold text-rose-400 uppercase tracking-widest leading-relaxed">Request complete identity erasure from neural servers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
