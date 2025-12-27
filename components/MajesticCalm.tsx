
import React from 'react';

const MajesticCalm: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="majestyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#312E81" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="#EEF2FF" rx="40" />
    <path d="M0 180 L80 40 L130 120 L180 60 L200 180 Z" fill="url(#majestyGrad)" />
    <path d="M80 40 L100 80 L60 80 Z" fill="white" opacity="0.3" />
    <circle cx="150" cy="50" r="15" fill="#FDE68A" filter="url(#auricGlow)">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
    </circle>
    <g stroke="white" strokeWidth="0.5" opacity="0.2">
       <path d="M0 160 Q100 150 200 160" fill="none" />
       <path d="M0 170 Q100 165 200 170" fill="none" />
    </g>
  </svg>
);

export default MajesticCalm;
