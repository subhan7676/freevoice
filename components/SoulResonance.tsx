
import React from 'react';

const SoulResonance: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="vascular">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
      </filter>
    </defs>
    <circle cx="100" cy="100" r="90" fill="#FFF1F2" rx="40" />
    <g filter="url(#vascular)">
      {/* Fixed: Removed non-standard transformOrigin property on animateTransform and wrapped path in a g with transformOrigin style to center the scaling animation */}
      <g style={{ transformOrigin: '100px 100px' }}>
        <path d="M100 40 C100 40 150 40 150 90 C150 140 100 180 100 180 C100 180 50 140 50 90 C50 40 100 40" fill="#E11D48" opacity="0.8">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </path>
        <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" />
      </g>
    </g>
    <circle cx="100" cy="90" r="15" fill="white" opacity="0.2" filter="url(#auricGlow)" />
    <path d="M80 90 Q100 70 120 90" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
  </svg>
);

export default SoulResonance;
