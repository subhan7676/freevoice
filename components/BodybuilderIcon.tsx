
import React from 'react';

const BodybuilderIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="muscleSkin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D29964" />
          <stop offset="100%" stopColor="#5D4037" />
        </linearGradient>
      </defs>
      <g>
        {/* Fixed: Removed non-standard pivot attribute and used transformOrigin style to center the scaling */}
        <g style={{ transformOrigin: '100px 100px' }}>
          <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" />
        </g>
        <path d="M50 120 Q50 40 100 40 Q150 40 150 120 Q150 180 100 180 Q50 180 50 120" fill="url(#muscleSkin)" />
        <path d="M20 120 Q20 80 50 80 L50 140 Q20 140 20 120" fill="#8D6E63" />
        <path d="M180 120 Q180 80 150 80 L150 140 Q180 140 180 120" fill="#8D6E63" />
        <rect x="70" y="80" width="15" height="10" rx="5" fill="#1A1A1A" />
        <rect x="115" y="80" width="15" height="10" rx="5" fill="#1A1A1A" />
        <path d="M80 140 Q100 155 120 140" stroke="#1A1A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default BodybuilderIcon;