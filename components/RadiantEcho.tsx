
import React from 'react';

const RadiantEcho: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#FFFBEB" rx="40" />
    <circle cx="100" cy="100" r="80" fill="#FDE68A" opacity="0.2" filter="url(#auricGlow)" />
    <g transform="translate(100, 100)">
      {Array.from({ length: 24 }).map((_, i) => (
        <rect 
          key={i} 
          x="-1" y="-90" width="2" height="20" 
          fill="#F59E0B" 
          transform={`rotate(${i * 15})`} 
          opacity="0.3"
        >
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
        </rect>
      ))}
      <circle r="25" fill="#EAB308" stroke="white" strokeWidth="4" />
      <circle r="10" fill="white" filter="url(#auricGlow)">
        <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

export default RadiantEcho;
