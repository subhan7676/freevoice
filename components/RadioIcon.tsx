
import React from 'react';

const RadioIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="40" width="100" height="120" rx="20" fill="#334155" stroke="#0F172A" strokeWidth="4" />
      <circle cx="100" cy="80" r="30" fill="#1E293B" />
      <rect x="70" y="120" width="60" height="10" rx="5" fill="#EF4444">
         <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
      </rect>
      <g stroke="#94A3B8" strokeWidth="2">
        <line x1="80" y1="70" x2="120" y2="90" />
        <line x1="80" y1="90" x2="120" y2="70" />
      </g>
    </svg>
  );
};

export default RadioIcon;
