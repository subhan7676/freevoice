
import React from 'react';

const ShadowHarmony: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="#09090B" />
    <g filter="url(#graceSmoke)">
      <circle cx="70" cy="100" r="40" fill="#27272A" opacity="0.6">
         <animate attributeName="cx" values="70;80;70" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="100" r="40" fill="#27272A" opacity="0.6">
         <animate attributeName="cx" values="130;120;130" dur="5s" repeatCount="indefinite" />
      </circle>
    </g>
    <path d="M100 40 L100 160" stroke="white" strokeWidth="0.5" opacity="0.1" strokeDasharray="5,5" />
    <circle cx="100" cy="100" r="12" fill="#52525B" />
    <circle cx="100" cy="100" r="4" fill="white">
       <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default ShadowHarmony;
