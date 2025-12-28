
import React from 'react';

const YoungBoy: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="boySkinHyper" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF4E0" />
          <stop offset="70%" stopColor="#F1C27D" />
          <stop offset="100%" stopColor="#D29964" />
        </radialGradient>
        <linearGradient id="boyHairHyper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#2D1B13" />
        </linearGradient>
        <filter id="ultraSoftShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1.5; 0 0" dur="4s" repeatCount="indefinite" />
          
          {/* Back Hair */}
          <path d="M45 110 Q45 40 100 40 Q155 40 155 110 L160 130 L40 130 Z" fill="url(#boyHairHyper)" />

          {/* Neck */}
          <rect x="85" y="145" width="30" height="15" fill="#D29964" rx="5" />

          {/* Face */}
          <circle cx="100" cy="105" r="58" fill="url(#boySkinHyper)" />
          
          {/* Eyes */}
          <g transform="translate(0, 5)">
            <ellipse cx="78" cy="98" rx="9" ry="6.5" fill="white" />
            <circle cx="78" cy="98" r="4.5" fill="#3E2723">
               <animate attributeName="cx" values="77.5;78.5;77.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="76" cy="95" r="2" fill="white" />
            {/* Blink */}
            <rect x="68" y="90" width="20" height="15" fill="url(#boySkinHyper)" opacity="0">
               <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.7;0.75;0.8;1" dur="5s" repeatCount="indefinite" />
            </rect>

            <ellipse cx="122" cy="98" rx="9" ry="6.5" fill="white" />
            <circle cx="122" cy="98" r="4.5" fill="#3E2723">
               <animate attributeName="cx" values="121.5;122.5;121.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="120" cy="95" r="2" fill="white" />
            {/* Blink */}
            <rect x="112" y="90" width="20" height="15" fill="url(#boySkinHyper)" opacity="0">
               <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.7;0.75;0.8;1" dur="5s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Mouth */}
          <path d="M82 132 Q100 145 118 132" stroke="#8D6E63" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Messy Front Hair */}
          <path d="M48 85 Q48 40 100 35 Q152 40 152 85 Q135 75 115 80 Q100 85 85 80 Q60 75 48 85" fill="url(#boyHairHyper)" />
          
          {/* Freckles */}
          <g fill="#A67C52" opacity="0.3">
            <circle cx="70" cy="120" r="1.5" />
            <circle cx="75" cy="125" r="1" />
            <circle cx="130" cy="120" r="1.5" />
            <circle cx="125" cy="125" r="1" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default YoungBoy;
