
import React from 'react';

const BalancedEcho: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#F0FDFA" rx="40" />
    <circle cx="100" cy="100" r="80" stroke="#5EEAD4" strokeWidth="0.5" fill="none" strokeDasharray="10,5" />
    <g transform="translate(100, 100)">
      {Array.from({ length: 4 }).map((_, i) => (
        <circle 
          key={i} 
          cx={Math.cos(i * Math.PI/2) * 50} 
          cy={Math.sin(i * Math.PI/2) * 50} 
          r="10" 
          fill="#0D9488" 
          opacity="0.6"
        >
          <animate attributeName="r" values="8;12;8" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <rect x="-40" y="-0.5" width="80" height="1" fill="#0D9488" opacity="0.3" />
      <rect x="-0.5" y="-40" width="1" height="80" fill="#0D9488" opacity="0.3" />
      <circle r="15" fill="#14B8A6" filter="url(#auricGlow)" />
    </g>
  </svg>
);

export default BalancedEcho;
