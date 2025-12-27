
import React, { useState } from 'react';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  updateProfile 
} from 'firebase/auth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  auth: Auth | null;
  setErrorMessage: (msg: string | null) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, auth, setErrorMessage }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    if (!auth) {
      setErrorMessage("Neural Auth Service not initialized.");
      return;
    }
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onClose();
    } catch (error: any) {
      console.error("Google Auth Error:", error);
      if (error.code === 'auth/popup-blocked') {
        setErrorMessage("Popup blocked by browser. Please allow popups.");
      } else if (error.code === 'auth/cancelled-by-user') {
        // Normal behavior, user closed the window
      } else {
        setErrorMessage(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    setLoading(true);

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (error: any) {
      console.error("Email Auth Error:", error);
      let msg = "Neural Access Denied.";
      if (error.code === 'auth/user-not-found') msg = "No identity found with this email.";
      else if (error.code === 'auth/wrong-password') msg = "Incorrect security credentials.";
      else if (error.code === 'auth/email-already-in-use') msg = "Identity already exists.";
      else if (error.code === 'auth/invalid-email') msg = "Malformed email address.";
      else msg = error.message;
      
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-[3rem] w-full max-w-md p-10 shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 20c4.478 0 8.268-2.943 9.542-7m-1.274-4.01C18.813 5.703 15.633 4 12 4c-1.18 0-2.304.182-3.36.519m-3.36 1.154A9.972 9.972 0 004 10c0 1.054.165 2.07.47 3.024m3.479 3.074A11.454 11.454 0 0110 11.235V11" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">
            {isSignUp ? 'Initialize Identity' : 'Neural Access'}
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mt-2">
            {isSignUp ? 'Create your biometric profile' : 'Reconnect to the matrix'}
          </p>
        </div>

        <form onSubmit={handleEmailAuth} className="space-y-4 mb-8">
          {isSignUp && (
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="Agent Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-bold focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
              />
            </div>
          )}
          <div className="space-y-1.5">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="agent@matrix.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-bold focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Secure Password</label>
            <input 
              required
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-bold focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:scale-[1.02] transition-all disabled:opacity-50"
          >
            {loading ? 'Processing...' : isSignUp ? 'Sign Up Now' : 'Sign In'}
          </button>
        </form>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <div className="relative flex justify-center"><span className="bg-white px-4 text-[9px] font-black uppercase text-slate-300 tracking-widest">Or Continue With</span></div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-4 border border-slate-200 rounded-2xl flex items-center justify-center space-x-3 hover:bg-slate-50 transition-all active:scale-95"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Sync Google Identity</span>
        </button>

        <p className="text-center mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {isSignUp ? 'Already in the matrix?' : 'New identity required?'}
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-2 text-indigo-600 hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
