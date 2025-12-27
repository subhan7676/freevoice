
import React from 'react';

const Wizard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wizardHatHyper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </linearGradient>
        <filter id="wizardMagicGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="5s" repeatCount="indefinite" />
          
          {/* Beard */}
          <path d="M70 120 Q100 200 130 120 L130 160 Q100 190 70 160 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5">
             <animate attributeName="d" values="M70 120 Q100 200 130 120 L130 160 Q100 190 70 160 Z; M70 120 Q100 205 130 120 L130 165 Q100 195 70 165 Z; M70 120 Q100 200 130 120 L130 160 Q100 190 70 160 Z" dur="4s" repeatCount="indefinite" />
          </path>

          {/* Face */}
          <circle cx="100" cy="110" r="40" fill="#FDE68A" />
          
          {/* Eyebrows */}
          <path d="M75 95 Q85 88 95 95 M105 95 Q115 88 125 95" stroke="#F8FAFC" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Eyes */}
          <g>
            <circle cx="85" cy="112" r="4" fill="#1E1B4B" />
            <circle cx="115" cy="112" r="4" fill="#1E1B4B" />
            <animate attributeName="opacity" values="1;0.7;1" dur="5s" repeatCount="indefinite" />
          </g>

          {/* Hat */}
          <path d="M40 100 L100 10 L160 100 Z" fill="url(#wizardHatHyper)" />
          <path d="M70 50 L75 45 L80 50 Z M120 70 L125 65 L130 70 Z" fill="#FDE047" filter="url(#wizardMagicGlow)" opacity="0.6">
             <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Magic Particles */}
          <g fill="#FDE047" filter="url(#wizardMagicGlow)">
             <circle cx="60" cy="170" r="2"><animate attributeName="cy" values="170;140" dur="2s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" /></circle>
             <circle cx="140" cy="180" r="1.5"><animate attributeName="cy" values="180;150" dur="2.5s" begin="0.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" /></circle>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Wizard;
