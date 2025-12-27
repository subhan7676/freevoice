
import React from 'react';

const WolfIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wolfFur" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4B5563" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <radialGradient id="wolfEye" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>
      </defs>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="3s" repeatCount="indefinite" />
        <path d="M40 80 L100 20 L160 80 L160 160 Q100 180 40 160 Z" fill="url(#wolfFur)" />
        <path d="M70 40 L85 20 L95 45 Z M130 40 L115 20 L105 45 Z" fill="#111827" />
        <g>
          <circle cx="75" cy="85" r="8" fill="url(#wolfEye)">
            <animate attributeName="r" values="8;9;8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="125" cy="85" r="8" fill="url(#wolfEye)">
            <animate attributeName="r" values="8;9;8" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
        <path d="M85 120 L115 120 L100 135 Z" fill="#000" />
        <path d="M70 145 Q100 165 130 145" stroke="#F87171" strokeWidth="2" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
};

export default WolfIcon;
