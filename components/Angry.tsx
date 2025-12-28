
import React from 'react';

const Angry: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="angerCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </radialGradient>
        <filter id="heatGlow">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 1 -1; -1 1; 0 0" dur="0.1s" repeatCount="indefinite" />
        
        {/* Steam vents */}
        <g opacity="0.5" fill="#D1D5DB">
          <circle cx="50" cy="70" r="8">
             <animate attributeName="cy" values="70;30" dur="1s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.5;0" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="70" r="8">
             <animate attributeName="cy" values="70;30" dur="1s" begin="0.5s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.5;0" dur="1s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Head */}
        <circle cx="100" cy="110" r="65" fill="url(#angerCore)" />
        
        {/* Vascular veins detail */}
        <path d="M140 70 Q145 60 155 65" stroke="#B91C1C" strokeWidth="2" fill="none" opacity="0.8">
           <animate attributeName="opacity" values="0.4;1;0.4" dur="0.5s" repeatCount="indefinite" />
        </path>

        {/* Furrowed Brow */}
        <path d="M60 85 L90 100 M140 85 L110 100" stroke="#450A0A" strokeWidth="8" strokeLinecap="round" />

        {/* Glowing Intense Eyes */}
        <g filter="url(#heatGlow)">
          <circle cx="80" cy="115" r="10" fill="white" />
          <circle cx="80" cy="115" r="5" fill="#450A0A" />
          <circle cx="120" cy="115" r="10" fill="white" />
          <circle cx="120" cy="115" r="5" fill="#450A0A" />
        </g>

        {/* Tense Jagged Mouth */}
        <path d="M70 145 L80 135 L90 145 L100 135 L110 145 L120 135 L130 145" fill="none" stroke="#450A0A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

export default Angry;
