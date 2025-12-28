
import React from 'react';

const DeepEssence: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="rockCore">
        <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="3" result="noise" />
        <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="2">
          <feDistantLight azimuth="45" elevation="45" />
        </feDiffuseLighting>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
    <rect width="200" height="200" fill="#1C1917" rx="40" />
    <circle cx="100" cy="100" r="70" fill="#44403C" filter="url(#rockCore)" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="#F97316" strokeWidth="0.5" opacity="0.2">
      <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
    </circle>
    <path d="M100 40 L100 160" stroke="#78716C" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
    <circle cx="100" cy="100" r="20" fill="#F97316" filter="url(#auricGlow)">
       <animate attributeName="r" values="18;24;18" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="100" r="8" fill="#FFF7ED" />
  </svg>
);

export default DeepEssence;
