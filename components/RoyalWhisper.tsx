
import React from 'react';

const RoyalWhisper: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="velvetRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#991B1B" />
        <stop offset="100%" stopColor="#450A0A" />
      </linearGradient>
      <pattern id="damask" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M10 0 Q15 5 10 10 Q5 15 10 20" stroke="#7F1D1D" fill="none" strokeWidth="0.5" />
      </pattern>
    </defs>
    <path d="M40 30 Q160 30 170 100 Q160 170 100 180 Q40 170 30 100 Q40 30 40 30" fill="url(#velvetRed)" />
    <path d="M40 30 Q160 30 170 100 Q160 170 100 180 Q40 170 30 100 Q40 30 40 30" fill="url(#damask)" opacity="0.4" />
    
    <g transform="translate(100, 100)">
      <circle r="30" fill="url(#goldEchoGrad)" opacity="0.1" filter="url(#auricGlow)">
        <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3s" repeatCount="indefinite" />
      </circle>
      <path d="M-15 -20 L15 -20 L0 25 Z" fill="#FDE68A" opacity="0.8">
         <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="4s" repeatCount="indefinite" />
      </path>
    </g>
    
    <path d="M50 40 Q100 35 150 40" stroke="white" strokeWidth="2" opacity="0.1" fill="none" strokeLinecap="round" />
  </svg>
);

export default RoyalWhisper;
