
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
  const [hasExpired, setHasExpired] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const manualSync = async () => {
    setIsRefreshing(true);
    try {
      await syncUserWithHF(user.id, user.email);
      // Logic triggers pulse in App.tsx, but visual feedback is key
      setTimeout(() => setIsRefreshing(false), 1500);
    } catch (e) {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (!isPro) {
      setTimeLeft('Free Account');
      setProgress(0);
      return;
    }

    if (!user.proExpiry) {
      setTimeLeft('Lifetime Access');
      setProgress(100);
      return;
    }

    const updateCountdown = () => {
      const now = Date.now();
      const diff = user.proExpiry! - now;
      
      if (diff <= 0) {
        setTimeLeft('Identity Expired');
        setProgress(0);
        setHasExpired(true);
        return;
      }

      setHasExpired(false);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const timeString = days > 0 
        ? `${days}d ${hours}h ${minutes}m` 
        : `${hours}h ${minutes}m ${seconds}s`;
      
      setTimeLeft(timeString);
      
      const maxTime = 30 * 24 * 60 * 60 * 1000;
      setProgress(Math.min(100, (diff / maxTime) * 100));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [isPro, user.proExpiry]);

  return (
    <div className="max-w-4xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Identity Token */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40 text-center relative overflow-hidden">
            {isPro && (
               <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 animate-pulse"></div>
            )}
            <div className="relative inline-block mb-6">
              <img 
                src={user.picture} 
                className={`w-32 h-32 rounded-[2.5rem] border-4 border-white shadow-xl mx-auto ${isPro ? 'ring-4 ring-indigo-50' : ''}`} 
                alt={user.name} 
              />
              {isPro && (
                <div className="absolute -top-2 -right-2 bg-indigo-600 text-white p-2 rounded-xl shadow-lg border-2 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-black tracking-tighter uppercase italic text-slate-900">{user.name}</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mt-1">{user.email}</p>
            
            <div className="mt-8 pt-8 border-t border-slate-50 space-y-4">
              <button 
                onClick={manualSync}
                disabled={isRefreshing}
                className="w-full py-3 bg-slate-50 hover:bg-slate-100 rounded-xl flex items-center justify-center space-x-2 transition-all group"
              >
                <div className={`w-3 h-3 rounded-full border-2 border-indigo-600 border-t-transparent ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`}></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">Sync with Neural Space</span>
              </button>
              <div className="flex justify-between items-center text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">UID Signature</span>
                <span className="text-[8px] font-mono font-bold text-slate-400 truncate max-w-[80px]">{user.id}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Neural Plan Stats */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-3xl font-black tracking-tighter uppercase italic text-slate-900">Neural Plan</h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Matrix Subscription Status</p>
              </div>
              <div className={`px-6 py-2 rounded-2xl font-black uppercase tracking-widest text-[10px] border ${
                isPro ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-400 border-slate-100'
              }`}>
                {isPro ? 'PRO ACCESS ACTIVE' : 'BASIC FREE'}
              </div>
            </div>

            <div className="space-y-8">
              <div className={`p-8 rounded-[2.5rem] border transition-all ${isPro ? 'bg-indigo-50/50 border-indigo-100' : 'bg-slate-50 border-slate-100'}`}>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className={`font-black uppercase tracking-[0.2em] text-[10px] mb-1 ${isPro ? 'text-indigo-600' : 'text-slate-400'}`}>
                      {isPro ? 'Remaining Identity Validity' : 'Free Plan Limitation'}
                    </p>
                    <div className={`text-4xl font-black tracking-tighter italic uppercase ${isPro ? 'text-indigo-900' : 'text-slate-400'}`}>
                      {timeLeft}
                    </div>
                  </div>
                </div>
                
                {isPro && (
                  <div className="w-full bg-indigo-100 h-3 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="bg-indigo-600 h-full rounded-full transition-all duration-1000 ease-linear shadow-lg" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
              
              {!isPro ? (
                <button 
                  onClick={() => setShowUpgradeModal(true)}
                  className="w-full py-6 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-indigo-100 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Unlock Unlimited Neural Access
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Expiry Timestamp</p>
                    <p className="text-xs font-bold text-slate-900">
                      {user.proExpiry ? new Date(user.proExpiry).toLocaleString() : 'LIFETIME'}
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Neural Brain Link</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <p className="text-xs font-bold text-slate-900 uppercase">Synchronized</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px]"></div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">Anti-Hacking Protocol</h3>
            <p className="text-slate-400 text-[10px] font-bold leading-relaxed mb-6 uppercase tracking-widest">
              Identity verification is performed on our neural servers. Manipulation of local system time or bypass of the Pro check will result in immediate suspension of your UID.
            </p>
            <div className="flex items-center space-x-2 text-[9px] font-black uppercase text-indigo-400">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
               </svg>
               <span>Secured by HF Subhan-Core</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
