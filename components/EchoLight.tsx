
import React from 'react';

const EchoLight: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="lensflare">
        <feGaussianBlur stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" type="saturate" values="2" />
        <feComposite in="SourceGraphic" operator="over" />
      </filter>
    </defs>
    <rect width="200" height="200" fill="#FFF7ED" rx="40" />
    <g filter="url(#lensflare)">
      <circle cx="100" cy="100" r="40" fill="#FDE68A">
        <animate attributeName="r" values="35;45;35" dur="3s" repeatCount="indefinite" />
      </circle>
      <g transform="translate(100, 100)">
        {Array.from({ length: 12 }).map((_, i) => (
          <line 
            key={i} 
            x1="0" y1="-80" x2="0" y2="-40" 
            stroke="#F59E0B" 
            strokeWidth="1" 
            transform={`rotate(${i * 30})`}
            opacity="0.4"
          >
            <animate attributeName="y1" values="-80;-100;-80" dur="2s" repeatCount="indefinite" />
          </line>
        ))}
      </g>
    </g>
    <circle cx="100" cy="100" r="10" fill="white" />
    {Array.from({ length: 10 }).map((_, i) => (
      <circle 
        key={i}
        cx={Math.random() * 140 + 30}
        cy={Math.random() * 140 + 30}
        r="1"
        fill="#FDE68A"
      >
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
      </circle>
    ))}
  </svg>
);

export default EchoLight;
