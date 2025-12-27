
import React from 'react';

const FastRunner: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="speedHelmet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="visorYellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 2 0; 0 0" dur="0.1s" repeatCount="indefinite" />
          
          {/* Speed Lines */}
          <g stroke="#DDD6FE" strokeWidth="4" strokeLinecap="round" opacity="0.6">
             <line x1="10" y1="80" x2="40" y2="80"><animate attributeName="x1" values="10;-20;10" dur="0.2s" repeatCount="indefinite" /></line>
             <line x1="15" y1="110" x2="45" y2="110"><animate attributeName="x1" values="15;-15;15" dur="0.15s" repeatCount="indefinite" /></line>
             <line x1="20" y1="140" x2="50" y2="140"><animate attributeName="x1" values="20;-10;20" dur="0.25s" repeatCount="indefinite" /></line>
          </g>

          {/* Helmet */}
          <path d="M60 115 Q60 50 110 50 Q160 50 160 115 L160 150 Q160 160 150 160 L70 160 Q60 160 60 150 Z" fill="url(#speedHelmet)" />
          <path d="M110 50 L140 30 L150 50 Z" fill="#4C1D95" />

          {/* Visor */}
          <rect x="70" y="85" width="80" height="35" rx="17" fill="#1E1B4B" />
          <rect x="75" y="90" width="70" height="25" rx="12" fill="url(#visorYellow)" />
          <path d="M85 96 L110 96" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

          {/* Lightning Bolt */}
          <path d="M140 125 L132 140 L145 140 L135 155" fill="#FDE047">
             <animate attributeName="opacity" values="1;0.5;1" dur="0.1s" repeatCount="indefinite" />
          </path>
          
          {/* Mouth */}
          <path d="M95 140 L125 140" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

export default FastRunner;
