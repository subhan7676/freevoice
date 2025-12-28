
import React from 'react';

const ClearSpirit: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ghostlyGlass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="#BAE6FD" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="#F0F9FF" rx="40" />
    <g filter="url(#silkTexture)">
      <path d="M100 20 Q140 20 150 100 Q140 180 100 180 Q60 180 50 100 Q60 20 100 20" fill="url(#ghostlyGlass)" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0 -5; 0 5; 0 -5" dur="6s" repeatCount="indefinite" />
      </path>
    </g>
    <circle cx="100" cy="80" r="10" fill="white" filter="url(#auricGlow)">
       <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
    </circle>
    <g fill="#7DD3FC" opacity="0.4">
       <circle cx="80" cy="150" r="2"><animate attributeName="cy" values="150;100" dur="3s" repeatCount="indefinite" /></circle>
       <circle cx="120" cy="130" r="1.5"><animate attributeName="cy" values="130;90" dur="4s" repeatCount="indefinite" /></circle>
    </g>
  </svg>
);

export default ClearSpirit;
