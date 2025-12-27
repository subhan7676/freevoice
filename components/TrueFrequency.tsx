
import React from 'react';

const TrueFrequency: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#F0FDF4" rx="40" />
    <path d="M0 100 L200 100" stroke="#DCFCE7" strokeWidth="20" opacity="0.5" />
    <path d="M0 100 Q25 40 50 100 T100 100 T150 100 T200 100" fill="none" stroke="#22C55E" strokeWidth="2">
       <animate attributeName="stroke-dashoffset" from="200" to="0" dur="4s" repeatCount="indefinite" />
       <path d="M0 100 Q25 40 50 100 T100 100 T150 100 T200 100" fill="none" stroke="#22C55E" strokeWidth="2" strokeDasharray="10,5" />
    </path>
    <circle cx="100" cy="100" r="15" fill="#15803D" stroke="white" strokeWidth="4" />
    <circle cx="100" cy="100" r="4" fill="white" filter="url(#auricGlow)">
       <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default TrueFrequency;
