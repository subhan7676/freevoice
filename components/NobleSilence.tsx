
import React from 'react';

const NobleSilence: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#064E3B" rx="40" />
    <g transform="translate(100, 100)">
      <rect x="-40" y="-70" width="80" height="140" fill="#065F46" stroke="#059669" strokeWidth="2" />
      <g fill="white" opacity="0.2">
         <rect x="-30" y="-50" width="60" height="1" />
         <rect x="-30" y="-30" width="60" height="1" />
         <rect x="-30" y="-10" width="60" height="1" />
      </g>
      <circle r="5" fill="#FDE68A" filter="url(#auricGlow)">
         <animate attributeName="opacity" values="0.4;1;0.4" dur="5s" repeatCount="indefinite" />
      </circle>
    </g>
    <path d="M60 180 Q100 170 140 180" stroke="#059669" strokeWidth="2" fill="none" opacity="0.5" />
  </svg>
);

export default NobleSilence;
