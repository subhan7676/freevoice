
import React from 'react';

const SoftAuthority: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="granite" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
    <path d="M40 40 Q100 20 160 40 L160 160 Q100 180 40 160 Z" fill="url(#granite)" stroke="#1E293B" strokeWidth="2" />
    <path d="M40 40 Q100 20 160 40 L160 160 Q100 180 40 160 Z" fill="white" opacity="0.05" filter="url(#woodGrain)" />
    
    <g transform="translate(100, 100)">
       <rect x="-40" y="-30" width="80" height="2" fill="white" opacity="0.3" />
       <rect x="-30" y="-10" width="60" height="2" fill="white" opacity="0.3" />
       <rect x="-20" y="10" width="40" height="2" fill="white" opacity="0.3" />
    </g>
    
    <circle cx="100" cy="140" r="10" fill="#1E293B" opacity="0.8">
       <animate attributeName="opacity" values="0.6;0.9;0.6" dur="5s" repeatCount="indefinite" />
    </circle>
    <path d="M95 140 L105 140" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default SoftAuthority;
