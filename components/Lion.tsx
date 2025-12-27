
import React from 'react';

const Lion: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="maneDeep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <radialGradient id="faceLionHyper" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
      </defs>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="4s" repeatCount="indefinite" />
        
        {/* Mane Layers */}
        <path d="M100 20 Q150 20 175 60 Q200 110 185 150 Q160 190 100 190 Q40 190 15 150 Q0 110 25 60 Q50 20 100 20" fill="url(#maneDeep)">
           <animate attributeName="d" values="M100 20 Q150 20 175 60 Q200 110 185 150 Q160 190 100 190 Q40 190 15 150 Q0 110 25 60 Q50 20 100 20; M100 22 Q152 22 177 62 Q202 112 187 152 Q162 192 100 192 Q38 192 13 152 Q-2 112 23 62 Q48 22 100 22; M100 20 Q150 20 175 60 Q200 110 185 150 Q160 190 100 190 Q40 190 15 150 Q0 110 25 60 Q50 20 100 20" dur="6s" repeatCount="indefinite" />
        </path>

        {/* Face Structure */}
        <path d="M65 80 Q65 45 100 45 Q135 45 135 80 Q135 150 100 165 Q65 150 65 80" fill="url(#faceLionHyper)" />
        
        {/* Nose */}
        <path d="M92 110 L108 110 L100 122 Z" fill="#451A03" />

        {/* Eyes */}
        <g>
          <circle cx="82" cy="88" r="10" fill="white" />
          <circle cx="82" cy="88" r="5" fill="#451A03">
             <animate attributeName="r" values="5;3.5;5" dur="4s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="118" cy="88" r="10" fill="white" />
          <circle cx="118" cy="88" r="5" fill="#451A03">
             <animate attributeName="r" values="5;3.5;5" dur="4s" repeatCount="indefinite" />
          </circle>
          
          <rect x="70" y="78" width="60" height="20" fill="url(#faceLionHyper)" opacity="0">
             <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.9;0.95;0.98;1" dur="7s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Whiskers Area */}
        <circle cx="85" cy="135" r="3" fill="#451A03" opacity="0.2" />
        <circle cx="115" cy="135" r="3" fill="#451A03" opacity="0.2" />
      </g>
    </svg>
  );
};

export default Lion;
