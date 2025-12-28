
import React from 'react';

const DivineTone: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="divineLight" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="40%" stopColor="#FEF3C7" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="100" fill="url(#divineLight)" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
    </circle>
    <g transform="translate(100, 100)">
      {Array.from({ length: 8 }).map((_, i) => (
        <path 
          key={i}
          d="M0 -90 L10 0 L-10 0 Z" 
          fill="#FDE68A" 
          opacity="0.2"
          transform={`rotate(${i * 45})`}
        >
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
        </path>
      ))}
    </g>
    <circle cx="100" cy="100" r="45" fill="white" filter="url(#auricGlow)" />
    <path d="M75 100 Q100 60 125 100" stroke="#F59E0B" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8">
       <animate attributeName="d" values="M75 100 Q100 60 125 100; M75 100 Q100 50 125 100; M75 100 Q100 60 125 100" dur="4s" repeatCount="indefinite" />
    </path>
    <circle cx="100" cy="85" r="3" fill="#F59E0B">
      <animate attributeName="cy" values="85;80;85" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default DivineTone;
