
import React from 'react';

const MysticFlow: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#2E1065" rx="40" />
    <g filter="url(#graceSmoke)">
      <path d="M50 100 Q100 20 150 100 Q100 180 50 100" fill="none" stroke="#A855F7" strokeWidth="4" opacity="0.6">
         <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite" />
      </path>
      <path d="M70 100 Q100 50 130 100 Q100 150 70 100" fill="none" stroke="#D8B4FE" strokeWidth="2" opacity="0.4">
         <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="15s" repeatCount="indefinite" />
      </path>
    </g>
    <circle cx="100" cy="100" r="15" fill="#FAE8FF" filter="url(#auricGlow)">
       <animate attributeName="r" values="12;18;12" dur="4s" repeatCount="indefinite" />
    </circle>
    <g fill="white" fontSize="4" opacity="0.3">
       <text x="100" y="140" textAnchor="middle">ARCANE SYNC</text>
    </g>
  </svg>
);

export default MysticFlow;
