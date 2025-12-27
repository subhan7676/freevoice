
import React from 'react';

const SilentStrength: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#0F172A" rx="40" />
    <g transform="translate(100, 100)">
      <rect x="-50" y="-70" width="100" height="140" fill="#1E293B" stroke="#334155" strokeWidth="2" />
      <rect x="-30" y="-50" width="60" height="100" fill="#0F172A" />
      <g stroke="#475569" strokeWidth="1" opacity="0.3">
         <path d="M-30 -20 L30 -20 M-30 20 L30 20" />
      </g>
      <circle r="4" fill="#38BDF8" filter="url(#auricGlow)">
         <animate attributeName="opacity" values="0.2;1;0.2" dur="4s" repeatCount="indefinite" />
      </circle>
    </g>
    <path d="M0 50 L200 50 M0 150 L200 150" stroke="white" strokeWidth="0.1" opacity="0.2" />
  </svg>
);

export default SilentStrength;
