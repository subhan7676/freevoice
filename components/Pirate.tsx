
import React from 'react';

const Pirate: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="skinPirate" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F1C27D" />
          <stop offset="100%" stopColor="#A67C52" />
        </radialGradient>
        <filter id="skinWeathered">
           <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
           <feColorMatrix type="saturate" values="0" />
           <feComponentTransfer><feFuncA type="linear" slope="0.1" /></feComponentTransfer>
           <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <filter id="earringGlowPirate">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="5s" repeatCount="indefinite" />
          
          {/* Face */}
          <path d="M50 100 Q50 165 100 175 Q150 165 150 100 Z" fill="url(#skinPirate)" />
          <path d="M50 100 Q50 165 100 175 Q150 165 150 100 Z" fill="white" opacity="0.1" filter="url(#skinWeathered)" />

          {/* Stubble */}
          <path d="M55 135 Q100 175 145 135 L145 160 Q100 178 55 160 Z" fill="#3D2B1F" opacity="0.3" />

          {/* Tricorn Hat */}
          <path d="M20 95 Q100 15 180 95 L195 120 Q100 95 5 120 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
          <path d="M90 40 L110 40 L100 25 Z" fill="#FDE047" opacity="0.2" />

          {/* Eye Patch */}
          <circle cx="75" cy="115" r="10" fill="#0F172A" />
          <path d="M35 100 L115 125" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />

          {/* Good Eye */}
          <g transform="translate(125, 115)">
            <ellipse cx="0" cy="0" rx="10" ry="7" fill="white" />
            <circle cx="0" cy="0" r="5" fill="#451A03" />
            <circle cx="-3" cy="-3" r="1.5" fill="white" opacity="0.6" />
            {/* Blinking */}
            <rect x="-12" y="-10" width="24" height="20" fill="url(#skinPirate)" opacity="0">
               <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.8;0.85;0.9;1" dur="4s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Gold Earring */}
          <circle cx="152" cy="120" r="6" fill="#FBBF24" filter="url(#earringGlowPirate)">
             <animate attributeName="fill" values="#FBBF24;#FDE047;#FBBF24" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Mouth */}
          <path d="M85 155 Q100 162 115 155" stroke="#451A03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

export default Pirate;
