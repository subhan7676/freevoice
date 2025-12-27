
import React from 'react';

const QuietThunder: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1E293B" rx="40" />
    <path d="M20 100 Q100 20 180 100 Q100 180 20 100" fill="#334155" opacity="0.8" />
    <g stroke="#94A3B8" strokeWidth="2" fill="none" opacity="0.4">
       <path d="M50 40 L150 40 L120 100 L160 100 L80 180 L100 120 L40 120 Z">
          <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" />
       </path>
    </g>
    <circle cx="100" cy="100" r="30" fill="#020617" opacity="0.8" />
    <path d="M85 100 L115 100" stroke="#38BDF8" strokeWidth="1" opacity="0.6">
       <animate attributeName="stroke-width" values="1;3;1" dur="0.1s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default QuietThunder;
