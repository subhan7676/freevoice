
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
    { id: 'monthly', name: 'Monthly', price: '$4.99', url: 'https://buy.stripe.com/cNi00i8Y84sZeGI80IgjC03' },
    { id: 'yearly', name: 'Yearly', price: '$24.99', url: 'https://buy.stripe.com/6oUcN45LW1gN8ikgxegjC01', highlight: true },
    { id: 'lifetime', name: 'Lifetime', price: '$49.99', url: 'https://buy.stripe.com/eVq9AS7U4aRnfKM5SAgjC02' }
  ];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white rounded-[3rem] w-full max-w-4xl p-12 shadow-2xl animate-in zoom-in-95 duration-300">
        <h2 className="text-4xl font-black text-center uppercase italic tracking-tighter mb-12">Upgrade Identity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {plans.map(plan => (
            <div key={plan.id} className={`p-8 rounded-[2.5rem] border ${plan.highlight ? 'bg-indigo-600 text-white' : 'bg-slate-50 border-slate-100'}`}>
              <h4 className="text-xs font-black uppercase mb-4 opacity-70">{plan.name}</h4>
              <div className="text-3xl font-black mb-8">{plan.price}</div>
              <button 
                onClick={() => window.location.href = plan.url}
                className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest mb-4 ${plan.highlight ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'}`}
              >
                Buy Now
              </button>
              <button 
                disabled={testing}
                onClick={() => handleSimulatePurchase(plan.id)}
                className="w-full py-2 text-[8px] font-black uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity"
              >
                {testing ? 'Linking...' : 'Test HF Sync (Free)'}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Neural Database: subhan-75/freevoice (Hugging Face)</p>
      </div>
    </div>
  );
};

export default UpgradeModal;
