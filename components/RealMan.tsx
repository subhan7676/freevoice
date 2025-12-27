
import React from 'react';

const RealMan: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skinManDeep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFDBAC" />
          <stop offset="100%" stopColor="#E0AC69" />
        </linearGradient>
        <filter id="stubbleTexture">
           <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" />
           <feColorMatrix type="saturate" values="0" />
           <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
           <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1.5; 0 0" dur="5s" repeatCount="indefinite" />
        
        {/* Shoulders */}
        <path d="M25 185 Q25 145 100 145 Q175 145 175 185 L180 200 L20 200 Z" fill="#1E293B" />
        
        {/* Neck */}
        <path d="M82 135 L118 135 L118 155 Q100 165 82 155 Z" fill="#D29964" />

        {/* Head */}
        <path d="M55 85 Q55 155 100 165 Q145 155 145 85 Q145 40 100 40 Q55 40 55 85" fill="url(#skinManDeep)" />
        
        {/* Stubble Area */}
        <path d="M60 125 Q60 155 100 162 Q140 155 140 125 L140 145 Q140 158 100 165 Q60 158 60 145 Z" fill="#3D2B1F" opacity="0.3" filter="url(#stubbleTexture)" />

        {/* Hair */}
        <path d="M52 85 Q52 35 100 30 Q148 35 148 85 Q125 75 100 78 Q75 75 52 85" fill="#2D1B13" />

        {/* Eyes */}
        <g>
          <ellipse cx="80" cy="98" rx="8" ry="5.5" fill="white" />
          <circle cx="80" cy="98" r="4" fill="#2C3E50">
             <animate attributeName="cx" values="79;81;79" dur="4s" repeatCount="indefinite" />
          </circle>
          <rect x="72" y="90" width="16" height="12" fill="url(#skinManDeep)" opacity="0">
             <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.8;0.85;0.9;1" dur="5s" repeatCount="indefinite" />
          </rect>

          <ellipse cx="120" cy="98" rx="8" ry="5.5" fill="white" />
          <circle cx="120" cy="98" r="4" fill="#2C3E50">
             <animate attributeName="cx" values="119;121;119" dur="4s" repeatCount="indefinite" />
          </circle>
          <rect x="112" y="90" width="16" height="12" fill="url(#skinManDeep)" opacity="0">
             <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.8;0.85;0.9;1" dur="5s" repeatCount="indefinite" />
          </rect>
        </g>
        
        {/* Mouth */}
        <path d="M88 140 Q100 144 112 140" stroke="#7E5D4B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default RealMan;
