
import React from 'react';

const TitanIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rockyTitan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3; 0 0" dur="4s" repeatCount="indefinite" />
        <path d="M40 180 L40 60 Q40 20 100 20 Q160 20 160 60 L160 180 Q100 190 40 180 Z" fill="url(#rockyTitan)" />
        <path d="M40 80 Q100 90 160 80" stroke="#000" strokeWidth="2" opacity="0.3" fill="none" />
        <g fill="#FACC15">
           <circle cx="75" cy="70" r="10">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
           </circle>
           <circle cx="125" cy="70" r="10">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
           </circle>
        </g>
        <path d="M80 130 Q100 145 120 130" stroke="#000" strokeWidth="5" fill="none" />
      </g>
    </svg>
  );
};

export default TitanIcon;
