
import React from 'react';

const ShadowGrace: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="graceSmoke">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
      </filter>
    </defs>
    <circle cx="100" cy="100" r="80" fill="#18181B" />
    <g filter="url(#graceSmoke)">
      <circle cx="100" cy="100" r="60" fill="#3F3F46" opacity="0.5">
        <animate attributeName="r" values="55;65;55" dur="6s" repeatCount="indefinite" />
      </circle>
      <path d="M50 100 Q100 20 150 100 Q100 180 50 100" fill="white" opacity="0.05">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
      </path>
    </g>
    <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.2" fill="none" opacity="0.2" />
    <path d="M70 100 C70 80 130 80 130 100 S70 120 70 100" stroke="#D4D4D8" strokeWidth="1" fill="none" opacity="0.6">
       <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="-360 100 100" dur="10s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default ShadowGrace;
