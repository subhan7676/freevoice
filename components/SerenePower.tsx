
import React from 'react';

const SerenePower: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#164E63" rx="40" />
    <rect x="40" y="40" width="120" height="120" rx="20" fill="#0891B2" opacity="0.4" />
    <g transform="translate(100, 100)">
       <path d="M-60 0 L60 0" stroke="white" strokeWidth="20" strokeLinecap="round" opacity="0.1" />
       <circle r="40" fill="none" stroke="#22D3EE" strokeWidth="0.5" opacity="0.5">
          <animate attributeName="r" values="40;60;40" dur="6s" repeatCount="indefinite" />
       </circle>
       <circle r="20" fill="white" filter="url(#auricGlow)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
       </circle>
       <circle r="5" fill="#0891B2" />
    </g>
  </svg>
);

export default SerenePower;
