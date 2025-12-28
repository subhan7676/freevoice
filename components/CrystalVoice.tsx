
import React from 'react';

const CrystalVoice: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crystalMain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#BAE6FD" />
        <stop offset="50%" stopColor="#7DD3FC" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
      <filter id="crystalRefraction">
        <feSpecularLighting surfaceScale="5" specularConstant="1" specularExponent="40" lightingColor="#white" result="spec">
          <fePointLight x="50" y="50" z="100" />
        </feSpecularLighting>
        <feComposite in="SourceGraphic" in2="spec" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
      </filter>
    </defs>
    <g filter="url(#crystalRefraction)">
      <path d="M100 20 L160 60 L160 140 L100 180 L40 140 L40 60 Z" fill="url(#crystalMain)" stroke="white" strokeWidth="0.5" />
      <path d="M100 20 L100 180 M160 60 L40 140 M40 60 L160 140" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <path d="M100 20 L70 100 L100 180 L130 100 Z" fill="white" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
      </path>
      <circle cx="100" cy="100" r="10" fill="white" filter="url(#auricGlow)">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
    <g fill="#7DD3FC" opacity="0.5">
       <rect x="60" y="60" width="2" height="2" transform="rotate(45 60 60)"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" /></rect>
       <rect x="140" y="130" width="3" height="3" transform="rotate(45 140 130)"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" /></rect>
    </g>
  </svg>
);

export default CrystalVoice;
