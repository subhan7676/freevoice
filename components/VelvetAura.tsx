
import React from 'react';

const VelvetAura: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="velvetDeep" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="40%" stopColor="#4C1D95" />
        <stop offset="100%" stopColor="#1E1B4B" />
      </radialGradient>
      <filter id="silkTexture" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
      </filter>
      <filter id="auricGlow">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <g filter="url(#auricGlow)">
      <circle cx="100" cy="100" r="85" fill="url(#velvetDeep)" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
      </circle>
      <path d="M40 100 Q100 20 160 100 Q100 180 40 100" fill="white" opacity="0.05" filter="url(#silkTexture)">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
      </path>
      <path d="M60 100 Q100 50 140 100 Q100 150 60 100" fill="#DDD6FE" opacity="0.2" filter="url(#silkTexture)">
        <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="15s" repeatCount="indefinite" />
      </path>
      <circle cx="100" cy="100" r="45" fill="url(#velvetDeep)" stroke="#A78BFA" strokeWidth="0.5">
        <animate attributeName="r" values="42;48;42" dur="4s" repeatCount="indefinite" />
      </circle>
      <g fill="white" opacity="0.3">
        <circle cx="80" cy="80" r="1"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" /></circle>
        <circle cx="120" cy="120" r="1.5"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" /></circle>
        <circle cx="100" cy="60" r="0.8"><animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" /></circle>
      </g>
    </g>
  </svg>
);

export default VelvetAura;
