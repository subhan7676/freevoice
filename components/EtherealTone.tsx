
import React from 'react';

const EtherealTone: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#F8FAFC" rx="40" />
    <g filter="url(#silkTexture)">
      <path d="M100 30 L140 100 L100 170 L60 100 Z" fill="#BAE6FD" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0 -5; 0 5; 0 -5" dur="4s" repeatCount="indefinite" />
      </path>
    </g>
    <circle cx="100" cy="100" r="6" fill="#0EA5E9" filter="url(#auricGlow)">
       <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
    </circle>
    <path d="M100 60 L100 140 M60 100 L140 100" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

export default EtherealTone;
