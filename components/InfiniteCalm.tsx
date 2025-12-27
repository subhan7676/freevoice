
import React from 'react';

const InfiniteCalm: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="horizonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#CCFBF1" />
        <stop offset="50%" stopColor="#2DD4BF" />
        <stop offset="100%" stopColor="#134E4A" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#horizonGrad)" rx="40" />
    <path d="M0 100 L200 100" stroke="white" strokeWidth="0.5" opacity="0.3" />
    <g transform="translate(0, 100)">
      {Array.from({ length: 5 }).map((_, i) => (
        <path 
          key={i}
          d={`M0 ${i * 20} Q100 ${i * 20 - 10} 200 ${i * 20}`} 
          stroke="white" 
          strokeWidth="0.5" 
          fill="none" 
          opacity={0.3 - (i * 0.05)}
        >
          <animate attributeName="d" 
            values={`M0 ${i * 20} Q100 ${i * 20 - 10} 200 ${i * 20}; M0 ${i * 20} Q100 ${i * 20 + 10} 200 ${i * 20}; M0 ${i * 20} Q100 ${i * 20 - 10} 200 ${i * 20}`} 
            dur={`${5 + i}s`} 
            repeatCount="indefinite" 
          />
        </path>
      ))}
    </g>
    <circle cx="100" cy="80" r="30" fill="white" opacity="0.1" filter="url(#auricGlow)">
      <animate attributeName="opacity" values="0.05;0.2;0.05" dur="8s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default InfiniteCalm;
