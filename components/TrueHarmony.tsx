
import React from 'react';

const TrueHarmony: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="emeraldOrb" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#BBF7D0" />
        <stop offset="100%" stopColor="#166534" />
      </radialGradient>
    </defs>
    <g transform="translate(100, 100)">
      <circle cx="-40" r="45" fill="url(#emeraldOrb)" opacity="0.7">
         <animate attributeName="cx" values="-40;-30;-40" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" r="45" fill="url(#emeraldOrb)" opacity="0.7">
         <animate attributeName="cx" values="40;30;40" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle r="15" fill="white" filter="url(#auricGlow)">
         <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
      <g stroke="white" strokeWidth="0.5" opacity="0.4">
         <path d="M-30 -30 L30 30" />
         <path d="M30 -30 L-30 30" />
      </g>
    </g>
    <circle cx="100" cy="100" r="85" stroke="#4ADE80" strokeWidth="0.2" fill="none" strokeDasharray="4,2" />
  </svg>
);

export default TrueHarmony;
