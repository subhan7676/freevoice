
import React from 'react';

const DarkVelvet: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1E1B4B" rx="40" />
    <path d="M0 50 Q100 0 200 50 L200 200 L0 200 Z" fill="#312E81" opacity="0.5">
       <animate attributeName="d" values="M0 50 Q100 0 200 50 L200 200 L0 200 Z; M0 60 Q100 20 200 60 L200 200 L0 200 Z; M0 50 Q100 0 200 50 L200 200 L0 200 Z" dur="10s" repeatCount="indefinite" />
    </path>
    <path d="M20 100 Q100 20 180 100 Q100 180 20 100" fill="#4338CA" opacity="0.3" filter="url(#silkTexture)">
       <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="30s" repeatCount="indefinite" />
    </path>
    <circle cx="100" cy="100" r="15" fill="#C084FC" opacity="0.6" filter="url(#auricGlow)">
       <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
    </circle>
    <path d="M80 100 L120 100" stroke="white" strokeWidth="0.5" opacity="0.5" />
  </svg>
);

export default DarkVelvet;
