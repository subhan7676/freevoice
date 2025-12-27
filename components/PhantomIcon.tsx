
import React from 'react';

const PhantomIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="phantomGlow">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="3s" repeatCount="indefinite" />
        <path d="M60 180 Q40 100 100 20 Q160 100 140 180 Q100 160 60 180" fill="#2D004F" opacity="0.8" />
        <g filter="url(#phantomGlow)">
          <circle cx="85" cy="80" r="8" fill="#A855F7" />
          <circle cx="115" cy="80" r="8" fill="#A855F7" />
        </g>
        <path d="M85 130 Q100 110 115 130" fill="none" stroke="#A855F7" strokeWidth="2" opacity="0.5" />
      </g>
    </svg>
  );
};

export default PhantomIcon;
