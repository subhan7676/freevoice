
import React from 'react';

const NobleSound: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mahogany" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#451A03" />
        <stop offset="50%" stopColor="#78350F" />
        <stop offset="100%" stopColor="#451A03" />
      </linearGradient>
      <filter id="woodGrain">
        <feTurbulence type="fractalNoise" baseFrequency="0.1 0.01" numOctaves="2" result="noise" />
        <feColorMatrix in="noise" type="saturate" values="0" />
        <feComponentTransfer><feFuncA type="linear" slope="0.1" /></feComponentTransfer>
        <feComposite in="SourceGraphic" operator="in" />
      </filter>
    </defs>
    <path d="M50 30 L150 30 L160 140 Q100 190 40 140 Z" fill="url(#mahogany)" stroke="#1C1917" strokeWidth="2" />
    <path d="M50 30 L150 30 L160 140 Q100 190 40 140 Z" fill="white" opacity="0.2" filter="url(#woodGrain)" />
    
    <g transform="translate(100, 80)">
       <path d="M-30 0 L30 0 L0 50 Z" fill="url(#goldMetal)" stroke="#92400E" strokeWidth="1" />
       <circle r="4" fill="white" opacity="0.4" cx="-5" cy="5" />
    </g>
    
    <rect x="60" y="35" width="80" height="2" fill="#FDE68A" opacity="0.3" />
    <rect x="60" y="45" width="80" height="2" fill="#FDE68A" opacity="0.3" />
    <circle cx="100" cy="155" r="6" fill="url(#goldMetal)" />
  </svg>
);

export default NobleSound;
