
import React from 'react';

const Vampire: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vampSkin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="silkCape" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BE123C" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <filter id="bloodGlow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="4s" repeatCount="indefinite" />
        
        {/* High-collared Cape */}
        <path d="M30 120 L100 20 L170 120 L185 200 L15 200 Z" fill="url(#silkCape)">
           <animate attributeName="d" values="M30 120 L100 20 L170 120 L185 200 L15 200 Z; M30 120 L100 20 L170 120 L180 205 L20 205 Z; M30 120 L100 20 L170 120 L185 200 L15 200 Z" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Face Shape */}
        <path d="M65 85 Q65 160 100 175 Q135 160 135 85 Q135 45 100 45 Q65 45 65 85" fill="url(#vampSkin)" />
        
        {/* Hair - Widow's Peak */}
        <path d="M65 85 Q65 50 100 50 Q135 50 135 85 Q100 75 65 85" fill="#020617" />

        {/* Eyes */}
        <g filter="url(#bloodGlow)">
          <circle cx="82" cy="100" r="7" fill="white" stroke="#E11D48" strokeWidth="0.5" />
          <circle cx="82" cy="100" r="3.5" fill="#E11D48">
             <animate attributeName="r" values="3.5;2;3.5" dur="4s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="118" cy="100" r="7" fill="white" stroke="#E11D48" strokeWidth="0.5" />
          <circle cx="118" cy="100" r="3.5" fill="#E11D48">
             <animate attributeName="r" values="3.5;2;3.5" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Mouth with Glinting Fangs */}
        <path d="M85 145 Q100 152 115 145" stroke="#450A0A" strokeWidth="2" fill="none" />
        <g fill="white">
           <path d="M90 146 L93 158 L96 146 Z" />
           <path d="M104 146 L107 158 L110 146 Z" />
           <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
        </g>

        {/* Elegant Shirt Details */}
        <path d="M85 175 L115 175 L100 195 Z" fill="#F1F5F9" />
      </g>
    </svg>
  );
};

export default Vampire;
