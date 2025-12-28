
import React from 'react';

const Ninja: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ninjaMask" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <filter id="fabricTexture">
           <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
           <feColorMatrix type="saturate" values="0" />
           <feComponentTransfer><feFuncA type="linear" slope="0.1" /></feComponentTransfer>
           <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1; 0 0" dur="3s" repeatCount="indefinite" />
          
          {/* Main Cowl */}
          <path d="M50 45 Q50 25 100 25 Q150 25 150 45 L165 165 L35 165 Z" fill="url(#ninjaMask)" />
          <path d="M50 45 Q50 25 100 25 Q150 25 150 45 L165 165 L35 165 Z" fill="white" opacity="0.05" filter="url(#fabricTexture)" />

          {/* Eye Opening */}
          <path d="M60 85 L140 85 L145 118 L55 118 Z" fill="#FDE68A" />
          
          {/* Eyes */}
          <g>
            <circle cx="82" cy="102" r="5" fill="#020617">
               <animate attributeName="r" values="5;4;5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="118" cy="102" r="5" fill="#020617">
               <animate attributeName="r" values="5;4;5" dur="4s" repeatCount="indefinite" />
            </circle>
            {/* Eye Sheen */}
            <path d="M65 92 Q100 85 135 92" stroke="#020617" strokeWidth="2" fill="none" opacity="0.2" />
          </g>

          {/* Mask Folds */}
          <g stroke="#334155" strokeWidth="1" opacity="0.3">
            <path d="M60 135 Q100 125 140 135" fill="none" />
            <path d="M65 150 Q100 140 135 150" fill="none" />
          </g>

          {/* Headband Plate */}
          <rect x="85" y="55" width="30" height="12" rx="2" fill="#94A3B8" />
          <circle cx="100" cy="61" r="2" fill="#1E293B" />
        </g>
      </g>
    </svg>
  );
};

export default Ninja;
