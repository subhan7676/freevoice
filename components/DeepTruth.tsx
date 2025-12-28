
import React from 'react';

const DeepTruth: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#292524" rx="40" />
    <g transform="translate(100, 100)">
      <rect x="-40" y="-60" width="80" height="120" fill="#44403C" stroke="#78716C" strokeWidth="2" />
      <path d="M-40 -60 L40 -60 L20 -80 L-20 -80 Z" fill="#57534E" />
      <g stroke="#F97316" strokeWidth="1" opacity="0.6">
         <line x1="-30" y1="0" x2="30" y2="0">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
         </line>
      </g>
      <circle r="5" fill="#F97316" filter="url(#auricGlow)">
         <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
    <path d="M40 180 Q100 170 160 180" stroke="#78716C" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

export default DeepTruth;
