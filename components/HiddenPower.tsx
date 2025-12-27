
import React from 'react';

const HiddenPower: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#020617" rx="40" />
    <g transform="translate(100, 100)">
      <circle r="60" fill="none" stroke="#1E293B" strokeWidth="1" opacity="0.2" />
      <path d="M-10 -70 L10 -70 L0 0 Z" fill="#6366F1" opacity="0.1">
         <animate attributeName="opacity" values="0;0.3;0" dur="0.2s" begin="2s" repeatCount="indefinite" />
      </path>
      <circle r="2" fill="white" filter="url(#auricGlow)">
        <animate attributeName="r" values="1;15;1" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.2;1" dur="4s" repeatCount="indefinite" />
      </circle>
    </g>
    <g opacity="0.1" stroke="white" strokeWidth="0.2">
      {Array.from({ length: 20 }).map((_, i) => (
        <circle key={i} cx={Math.random()*200} cy={Math.random()*200} r={Math.random()*5} fill="none" />
      ))}
    </g>
  </svg>
);

export default HiddenPower;
