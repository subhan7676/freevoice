
import React from 'react';

const GoldenDepth: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="amberAbyss" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#451A03" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#amberAbyss)" rx="40" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="#FBBF24" strokeWidth="0.5" opacity="0.2">
       <animate attributeName="r" values="70;90;70" dur="12s" repeatCount="indefinite" />
    </circle>
    <g transform="translate(100, 100)">
       <path d="M-40 0 Q0 -60 40 0 Q0 60 -40 0" fill="#F59E0B" opacity="0.4" filter="url(#auricGlow)" />
       <circle r="12" fill="#FEF3C7" />
       <path d="M-8 0 L8 0" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

export default GoldenDepth;
