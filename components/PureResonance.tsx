
import React from 'react';

const PureResonance: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brushedAlu" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F1F5F9" />
        <stop offset="50%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#F1F5F9" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#brushedAlu)" stroke="#94A3B8" strokeWidth="0.5" />
    {[80, 60, 40].map((r, i) => (
      <circle key={r} cx="100" cy="100" r={r} stroke="#64748B" strokeWidth="1" fill="none" opacity={0.2}>
         <animate attributeName="r" values={`${r};${r+5};${r}`} dur={`${2+i}s`} repeatCount="indefinite" />
      </circle>
    ))}
    <g stroke="#334155" strokeWidth="0.5">
       <line x1="100" y1="10" x2="100" y2="190" opacity="0.1" />
       <line x1="10" y1="100" x2="190" y2="100" opacity="0.1" />
    </g>
    <circle cx="100" cy="100" r="12" fill="#475569">
       <animate attributeName="r" values="10;14;10" dur="1s" repeatCount="indefinite" />
    </circle>
    <path d="M100 92 L100 108 M92 100 L108 100" stroke="white" strokeWidth="1.5" />
  </svg>
);

export default PureResonance;
