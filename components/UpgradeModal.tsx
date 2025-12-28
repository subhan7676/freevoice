
import React, { useState } from 'react';
import { logPurchaseToHF } from '../services/huggingFaceApi';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId?: string;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, userId }) => {
  const [testing, setTesting] = useState(false);
  if (!isOpen) return null;

  const handleSimulatePurchase = async (plan: string) => {
    if (!userId) { alert("Please sign in first!"); return; }
    setTesting(true);
    const success = await logPurchaseToHF(userId, plan);
    setTesting(false);
    if (success) {
      alert("HF Neural Sync Successful! Your account is now PRO. Please wait a few seconds for the pulse update.");
      onClose();
    } else {
      alert("HF Sync Failed. Make sure your Space is 'Running'.");
    }
  };

  const plans = [
    { 
      id: 'monthly', 
      name: 'Monthly Plan', 
      price: '$4.99', 
      duration: 'Valid for 30 Days',
      url: 'https://buy.stripe.com/cNi00i8Y84sZeGI80IgjC03',
      features: [
        'Unlock 50+ Premium Voices',
        'Real-time Live Sync Access',
        'Unlimited Studio Morphs',
        'High-Fidelity 24kHz Export'
      ]
    },
    { 
      id: 'yearly', 
      name: 'Yearly Plan', 
      price: '$24.99', 
      duration: 'Valid for 365 Days',
      url: 'https://buy.stripe.com/6oUcN45LW1gN8ikgxegjC01', 
      highlight: true,
      features: [
        'Everything in Monthly',
        'Priority Neural Processing',
        'Save 60% (Best Value)',
        'Early Access to New Masks'
      ]
    },
    { 
      id: 'lifetime', 
      name: 'Lifetime Access', 
      price: '$49.99', 
      duration: 'Access Forever',
      url: 'https://buy.stripe.com/eVq9AS7U4aRnfKM5SAgjC02',
      features: [
        'One-time Payment Only',
        'Unlimited Everything Forever',
        'Commercial Usage License',
        'Dedicated Neural Support'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white rounded-[4rem] w-full max-w-6xl p-10 md:p-16 shadow-2xl animate-in zoom-in-95 duration-300 overflow-y-auto max-h-[90vh]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">Upgrade Your Identity</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Join the Pro Matrix for Unlimited Neural Capabilities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map(plan => (
            <div key={plan.id} className={`p-10 rounded-[3.5rem] border flex flex-col transition-all hover:scale-[1.02] ${plan.highlight ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200 border-transparent ring-4 ring-indigo-100' : 'bg-slate-50 border-slate-100'}`}>
              <div className="mb-8">
                <h4 className={`text-[10px] font-black uppercase tracking-widest mb-2 ${plan.highlight ? 'text-indigo-200' : 'text-slate-400'}`}>{plan.name}</h4>
                <div className="text-5xl font-black tracking-tighter mb-1">{plan.price}</div>
                <p className={`text-[9px] font-bold uppercase tracking-widest ${plan.highlight ? 'text-indigo-100' : 'text-indigo-600'}`}>{plan.duration}</p>
              </div>

              <div className="flex-1 space-y-4 mb-12">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white/20' : 'bg-indigo-100'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-2.5 w-2.5 ${plan.highlight ? 'text-white' : 'text-indigo-600'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.location.href = plan.url}
                className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all mb-4 ${plan.highlight ? 'bg-white text-indigo-600 shadow-xl shadow-black/10 hover:bg-slate-50' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700'}`}
              >
                Get Started
              </button>
              
              <button 
                disabled={testing}
                onClick={() => handleSimulatePurchase(plan.id)}
                className={`w-full py-2 text-[8px] font-black uppercase tracking-[0.2em] transition-opacity ${plan.highlight ? 'text-indigo-200 hover:text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {testing ? 'Linking Neural Space...' : 'Force HF Sync (Testing)'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Neural Database Provider: subhan-75/freevoice (Hugging Face)</p>
          <div className="flex justify-center items-center space-x-12 opacity-30 grayscale">
             <div className="text-[10px] font-black italic">STRIPE SECURE</div>
             <div className="text-[10px] font-black italic">E2E ENCRYPTED</div>
             <div className="text-[10px] font-black italic">NO DATA LOGGING</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
