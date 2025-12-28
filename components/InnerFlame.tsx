
import React from 'react';

const InnerFlame: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="fireBlur">
        <feGaussianBlur stdDeviation="5" />
      </filter>
    </defs>
    <g filter="url(#fireBlur)">
      <path d="M100 180 Q60 140 60 100 Q60 40 100 20 Q140 40 140 100 Q140 140 100 180" fill="#EF4444" opacity="0.6">
        <animate attributeName="d" 
          values="M100 180 Q60 140 60 100 Q60 40 100 20 Q140 40 140 100 Q140 140 100 180; M100 180 Q70 140 70 100 Q70 30 100 20 Q130 30 130 100 Q130 140 100 180; M100 180 Q60 140 60 100 Q60 40 100 20 Q140 40 140 100 Q140 140 100 180" 
          dur="0.5s" repeatCount="indefinite" />
      </path>
    </g>
    <path d="M100 160 Q80 130 80 100 Q80 60 100 45 Q120 60 120 100 Q120 130 100 160" fill="#F97316" />
    <circle cx="100" cy="110" r="15" fill="#FDE047" filter="url(#auricGlow)">
      <animate attributeName="r" values="12;18;12" dur="0.2s" repeatCount="indefinite" />
    </circle>
    <g opacity="0.4" fill="white">
       <circle cx="90" cy="140" r="2"><animate attributeName="cy" values="140;80" dur="1s" repeatCount="indefinite" /></circle>
       <circle cx="110" cy="130" r="1.5"><animate attributeName="cy" values="130;70" dur="1.2s" repeatCount="indefinite" /></circle>
    </g>
  </svg>
);

export default InnerFlame;
