
import React from 'react';

const DeepSerenity: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#020617" rx="40" />
    <path d="M0 150 Q100 130 200 150 L200 200 L0 200 Z" fill="#1E1B4B" />
    <circle cx="100" cy="80" r="40" fill="#312E81" opacity="0.3" filter="url(#auricGlow)">
       <animate attributeName="opacity" values="0.1;0.4;0.1" dur="10s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="150" r="4" fill="#38BDF8" filter="url(#auricGlow)">
       <animate attributeName="opacity" values="1;0;1" dur="5s" repeatCount="indefinite" />
    </circle>
    <g stroke="white" strokeWidth="0.1" opacity="0.1">
       {Array.from({ length: 5 }).map((_, i) => (
         <circle key={i} cx="100" cy="150" r={i * 30} fill="none" />
       ))}
    </g>
  </svg>
);

export default DeepSerenity;
