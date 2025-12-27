
import React from 'react';

const PureDepth: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="abyss" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#172554" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#abyss)" rx="40" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1">
       <animate attributeName="r" values="70;90;70" dur="10s" repeatCount="indefinite" />
    </circle>
    <g transform="translate(100, 100)">
      <circle r="40" fill="#1E40AF" opacity="0.5" filter="url(#auricGlow)">
         <animate attributeName="r" values="35;45;35" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle r="10" fill="white" opacity="0.2">
         <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>
    <g stroke="white" strokeWidth="0.2" opacity="0.1">
       {Array.from({ length: 10 }).map((_, i) => (
         <line key={i} x1="0" y1={i*20} x2="200" y2={i*20} />
       ))}
    </g>
  </svg>
);

export default PureDepth;
