
import React from 'react';

const Dragon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#991B1B" />
          <stop offset="100%" stopColor="#450A0A" />
        </linearGradient>
        <radialGradient id="eyeFire" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="60%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </radialGradient>
        <filter id="heatBlur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3; 0 0" dur="4s" repeatCount="indefinite" />
        
        {/* Main Head Structure */}
        <path d="M40 100 Q40 30 100 30 Q160 30 160 100 L180 180 Q100 190 20 180 Z" fill="url(#scaleGrad)" />
        
        {/* Scale Texture Overlay */}
        <path d="M40 100 Q40 30 100 30 Q160 30 160 100 L180 180 Q100 190 20 180 Z" fill="white" opacity="0.05" />

        {/* Horns */}
        <path d="M60 45 L30 10 L80 60 Z" fill="#1C1917" />
        <path d="M140 45 L170 10 L120 60 Z" fill="#1C1917" />

        {/* Eyes */}
        <g>
          <circle cx="75" cy="95" r="12" fill="url(#eyeFire)">
             <animate attributeName="r" values="12;13;12" dur="2s" repeatCount="indefinite" />
          </circle>
          <rect x="74" y="88" width="2" height="14" rx="1" fill="#0C0A09" />
          
          <circle cx="125" cy="95" r="12" fill="url(#eyeFire)">
             <animate attributeName="r" values="12;13;12" dur="2s" repeatCount="indefinite" />
          </circle>
          <rect x="124" y="88" width="2" height="14" rx="1" fill="#0C0A09" />
        </g>

        {/* Nostrils with Smoke */}
        <g>
          <circle cx="90" cy="155" r="4" fill="#0C0A09" />
          <circle cx="110" cy="155" r="4" fill="#0C0A09" />
          
          <circle cx="90" cy="155" r="2" fill="#D1D5DB" opacity="0.4">
             <animate attributeName="cy" values="155;120" dur="1.5s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.4;0" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="110" cy="155" r="2" fill="#D1D5DB" opacity="0.4">
             <animate attributeName="cy" values="155;120" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.4;0" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Lower Snout */}
        <path d="M60 140 Q100 170 140 140" stroke="#450A0A" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
};

export default Dragon;
