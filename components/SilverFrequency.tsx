
import React from 'react';

const SilverFrequency: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chrome" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F8FAFC" />
        <stop offset="50%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#chrome)" opacity="0.1" rx="40" />
    <path d="M0 100 L200 100" stroke="#CBD5E1" strokeWidth="1" />
    <g stroke="#94A3B8" strokeWidth="2" fill="none">
       <path d="M0 100 Q25 40 50 100 Q75 160 100 100 Q125 40 150 100 Q175 160 200 100">
         <animate attributeName="d" 
           values="M0 100 Q25 40 50 100 Q75 160 100 100 Q125 40 150 100 Q175 160 200 100; M0 100 Q25 160 50 100 Q75 40 100 100 Q125 160 150 100 Q175 40 200 100; M0 100 Q25 40 50 100 Q75 160 100 100 Q125 40 150 100 Q175 160 200 100" 
           dur="2s" repeatCount="indefinite" />
       </path>
    </g>
    <circle cx="100" cy="100" r="10" fill="url(#chrome)" stroke="#1E293B" strokeWidth="1" />
    <circle cx="100" cy="100" r="3" fill="#38BDF8" filter="url(#auricGlow)">
       <animate attributeName="opacity" values="1;0.4;1" dur="0.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default SilverFrequency;
