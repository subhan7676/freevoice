
import React from 'react';

const CalmDominion: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#083344" rx="40" />
    <g transform="translate(100, 100)">
      <rect x="-60" y="-60" width="120" height="120" rx="10" fill="#164E63" stroke="#22D3EE" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" />
      </rect>
      <rect x="-40" y="-40" width="80" height="80" rx="5" fill="#155E75" />
      <g stroke="#22D3EE" strokeWidth="0.5" opacity="0.4">
         <line x1="-40" y1="-40" x2="40" y2="40" />
         <line x1="40" y1="-40" x2="-40" y2="40" />
      </g>
      <circle r="10" fill="#22D3EE" filter="url(#auricGlow)">
         <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
    <path d="M0 40 L200 40 M0 160 L200 160" stroke="#06B6D4" strokeWidth="0.2" opacity="0.5" />
  </svg>
);

export default CalmDominion;
