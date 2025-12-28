import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Header Section */}
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
          Neural <span className="text-indigo-600">Sovereignty</span>
        </h2>
        <div className="inline-block px-8 py-3 bg-slate-900 border border-slate-800 rounded-2xl">
          <p className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Privacy Protocol v4.0 | Controlled by Subhan Ahmad</p>
        </div>
      </div>

      <div className="space-y-32">
        {/* Section 1: Introduction */}
        <section className="relative">
          <div className="absolute -left-12 top-0 text-[12rem] font-black text-slate-100/30 -z-10 leading-none select-none">DATA</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-8">The Manifesto of Identity</h3>
          <div className="prose prose-slate max-w-none space-y-8">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              In the architectural vision of <span className="font-bold text-slate-900 text-indigo-600">Subhan Ahmad</span>, privacy is not a feature—it is the foundational layer of human dignity in the digital age. FreeVoice Pro is engineered with the "Identity Decoupling" principle, ensuring that your biological voice never remains a permanent record.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              This Privacy Policy outlines the extreme measures taken to protect your neural biometric data. As the developer and owner, Subhan Ahmad has implemented a "Zero-Persistence" architecture where your audio streams exist only in RAM for the duration of the transformation. We do not just protect data; we eradicate the need for it.
            </p>
          </div>
        </section>

        {/* Legal Disclaimer Integration */}
        <section className="relative bg-slate-50 border border-slate-200 rounded-[3rem] p-12">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-6">Compliance & Responsibility</h4>
          <p className="text-slate-600 leading-relaxed font-bold italic mb-6">
            "By utilizing this platform, I confirm that I have legal authorization to transform vocal signatures and have obtained consent from all parties involved. I absolve Subhan Ahmad of all liability for misuse."
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Legal integrity is paramount. FreeVoice Pro operates under the assumption that all neural synthesis sessions are conducted with proper authorization. We do not monitor conversation content, reinforcing our commitment to privacy, but this places the full burden of legal compliance on the individual user.
          </p>
        </section>

        {/* Section 2: Biometric Shredding */}
        <section className="relative">
          <div className="absolute -right-12 top-0 text-[12rem] font-black text-slate-100/30 -z-10 leading-none select-none text-right">001</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-10 text-right">Biometric Shredding Protocol</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-6">How It Works</h4>
              <p className="text-slate-500 text-sm leading-loose mb-8">
                When you initiate a "Studio Morph" or "Live Sync" session, your raw PCM audio data is encrypted locally on your device before being transmitted to the transformation engine. Once the transformation is completed, the original source biometric signature is immediately overwritten with random noise at the memory level. 
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">A</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Ephemeral Buffer Allocation</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">B</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Real-time Entropy Injection</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">C</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Non-retrievable Memory Purge</span>
                </div>
              </div>
            </div>
            <div className="space-y-8 py-8">
              <h4 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Why Shredding?</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Traditional voice changers often log samples to improve their "AI models." Under Subhan Ahmad's direction, FreeVoice Pro operates on pre-trained neural masks. This means we do not need your voice to learn. Your session is a unique, one-time mathematical transformation that disappears the moment you close the application.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Deep Data Usage */}
        <section className="relative">
          <div className="absolute -left-12 top-0 text-[12rem] font-black text-slate-100/30 -z-10 leading-none select-none">VOX</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-8">Global Data Distribution</h3>
          <div className="bg-slate-900 rounded-[4rem] p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[100px]"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <h4 className="text-4xl font-black italic uppercase tracking-tighter">No Databases. No Leaks.</h4>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    FreeVoice Pro does not utilize any persistent storage for audio content. While your identity (Email and Name) is managed via Firebase for membership tracking, your <span className="text-indigo-400">Audio Identity</span> is treated as a separate, untouchable entity. Subhan Ahmad has implemented a strict "Firewall of Silence" between your account details and your audio streams.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div>
                      <h5 className="text-indigo-400 font-black uppercase tracking-widest text-[10px] mb-2">Collected Data</h5>
                      <ul className="text-xs space-y-2 text-slate-400 font-bold uppercase tracking-widest">
                        <li>» Google Profile Identity</li>
                        <li>» Pro Membership Status</li>
                        <li>» Interaction Timestamps</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-rose-400 font-black uppercase tracking-widest text-[10px] mb-2">NEVER Collected</h5>
                      <ul className="text-xs space-y-2 text-slate-400 font-bold uppercase tracking-widest">
                        <li>» Raw Voice Samples</li>
                        <li>» Transformed Output Files</li>
                        <li>» Conversation Content</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 flex flex-col justify-center text-center">
                  <div className="text-5xl font-black text-indigo-500 mb-4">0%</div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Persistence Rate of Voice Data</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Sovereignty Rights */}
        <section className="relative">
          <div className="absolute -right-12 top-0 text-[12rem] font-black text-slate-100/30 -z-10 leading-none select-none text-right">GDPR+</div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-12">Universal Sovereignty Rights</h3>
          <div className="space-y-12">
            <div className="border-l-4 border-indigo-600 pl-8 py-4">
              <h4 className="text-xl font-black uppercase italic text-slate-900 mb-2">Right to Erasure</h4>
              <p className="text-slate-500 font-medium">Every user has the absolute right to purge their identity from our matrix. By clicking "Request Data Purge" in your profile, Subhan Ahmad's automated scripts will immediately scrub all Firebase metadata associated with your UID.</p>
            </div>
            <div className="border-l-4 border-slate-200 pl-8 py-4">
              <h4 className="text-xl font-black uppercase italic text-slate-900 mb-2">Right to Portability</h4>
              <p className="text-slate-500 font-medium">Your neural settings are your own. We provide the protocol to export your profile configurations for use in any future Subhan Ahmad Identity projects.</p>
            </div>
            <div className="border-l-4 border-slate-200 pl-8 py-4">
              <h4 className="text-xl font-black uppercase italic text-slate-900 mb-2">The Transparency Clause</h4>
              <p className="text-slate-500 font-medium">Subhan Ahmad pledges total transparency. Any change to the neural processing engine that affects privacy will be announced via a System-Wide Broadcast 30 days prior to implementation.</p>
            </div>
          </div>
        </section>

        {/* Section 5: The Subhan Ahmad Guarantee */}
        <section className="text-center py-20 bg-indigo-50/50 rounded-[4rem] border border-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5">
             <svg viewBox="0 0 100 100" className="w-full h-full"><text x="0" y="50" fontSize="10" fill="currentColor">SECURE SECURE SECURE</text></svg>
          </div>
          <h3 className="text-4xl font-black uppercase italic tracking-tighter text-indigo-900 mb-6">Owner's Personal Guarantee</h3>
          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed text-lg font-medium mb-12 italic">
            "I built FreeVoice Pro because I believe that in the digital world, your voice is your soul. I will never sell your data, I will never store your conversations, and I will personally oversee the security architecture of this platform until the end of its lifecycle."
          </p>
          <div className="flex flex-col items-center">
            <div className="h-0.5 w-24 bg-indigo-600 mb-4"></div>
            <p className="font-black text-slate-900 uppercase tracking-widest text-[10px]">Subhan Ahmad</p>
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em]">Founder & Chief Architect</p>
          </div>
        </section>

        {/* Closing Contact */}
        <div className="text-center pb-24 border-t border-slate-100 pt-24">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Data Privacy Inquiry Channel</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
             <a href="mailto:jobsofficial786@gmail.com" className="text-xl font-black italic tracking-tighter text-slate-900 hover:text-indigo-600 transition-colors">jobsofficial786@gmail.com</a>
             <div className="hidden md:block w-2 h-2 rounded-full bg-slate-200"></div>
             <a href="mailto:jobsofficial786@gmail.com" className="text-xl font-black italic tracking-tighter text-slate-900 hover:text-indigo-600 transition-colors">Support Lab</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;