
import React from 'react';

const Owl: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="owlBodyHyper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <linearGradient id="spectacleGlare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="5s" repeatCount="indefinite" />
        
        {/* Ear Tufts */}
        <g>
          <path d="M55 70 L30 30 L80 60 Z" fill="#451A03">
             <animateTransform attributeName="transform" type="rotate" values="0 55 70; -10 55 70; 0 55 70" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M145 70 L170 30 L120 60 Z" fill="#451A03">
             <animateTransform attributeName="transform" type="rotate" values="0 145 70; 10 145 70; 0 145 70" dur="4.2s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Body */}
        <circle cx="100" cy="115" r="70" fill="url(#owlBodyHyper)" />
        
        {/* Face Disks */}
        <ellipse cx="72" cy="100" rx="35" ry="42" fill="#FEF3C7" opacity="0.9" />
        <ellipse cx="128" cy="100" rx="35" ry="42" fill="#FEF3C7" opacity="0.9" />

        {/* Eyes */}
        <g>
          <circle cx="72" cy="100" r="22" fill="white" />
          <circle cx="72" cy="100" r="14" fill="#0F172A" />
          <circle cx="68" cy="95" r="4" fill="white" opacity="0.4" />
          <rect x="50" y="75" width="45" height="50" fill="#FEF3C7" opacity="0">
             <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.5;0.55;0.6;1" dur="6s" repeatCount="indefinite" />
          </rect>

          <circle cx="128" cy="100" r="22" fill="white" />
          <circle cx="128" cy="100" r="14" fill="#0F172A" />
          <circle cx="124" cy="95" r="4" fill="white" opacity="0.4" />
          <rect x="105" y="75" width="45" height="50" fill="#FEF3C7" opacity="0">
             <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.5;0.55;0.6;1" dur="6s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Spectacles */}
        <g stroke="#FBBF24" strokeWidth="4" fill="none">
           <circle cx="72" cy="100" r="26" />
           <circle cx="128" cy="100" r="26" />
           <line x1="98" y1="100" x2="102" y2="100" />
           <circle cx="72" cy="100" r="26" fill="url(#spectacleGlare)" stroke="none" />
           <circle cx="128" cy="100" r="26" fill="url(#spectacleGlare)" stroke="none" />
        </g>

        {/* Beak */}
        <path d="M94 115 L106 115 L100 135 Z" fill="#D97706" />
      </g>
    </svg>
  );
};

export default Owl;
