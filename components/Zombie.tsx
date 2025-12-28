
import React from 'react';

const Zombie: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zombieDecay" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0.5 1; 0 0" dur="0.2s" repeatCount="indefinite" />
          
          {/* Decaying Head */}
          <path d="M60 100 Q60 35 100 35 Q140 35 140 100 Q140 165 100 175 Q60 165 60 100" fill="url(#zombieDecay)" stroke="#064E3B" strokeWidth="2" />
          
          {/* Skin Lesions */}
          <circle cx="85" cy="65" r="8" fill="#4D7C0F" opacity="0.4" />
          <circle cx="120" cy="145" r="10" fill="#4D7C0F" opacity="0.4" />

          {/* Vacant Eyes */}
          <g>
            <circle cx="80" cy="95" r="14" fill="#F1F5F9" opacity="0.6" />
            <circle cx="80" cy="95" r="4" fill="#020617" opacity="0.3">
               <animate attributeName="opacity" values="0.1;0.4;0.1" dur="5s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="120" cy="95" r="12" fill="#F1F5F9" opacity="0.8" />
            <circle cx="120" cy="95" r="3" fill="#020617" opacity="0.2" />
          </g>

          {/* Exposed Jaw Teeth */}
          <g transform="translate(85, 140)">
            <rect width="32" height="15" fill="#F1F5F9" rx="2" stroke="#CBD5E1" strokeWidth="0.5" />
            <line x1="8" y1="0" x2="8" y2="15" stroke="#94A3B8" strokeWidth="1" />
            <line x1="16" y1="0" x2="16" y2="15" stroke="#94A3B8" strokeWidth="1" />
            <line x1="24" y1="0" x2="24" y2="15" stroke="#94A3B8" strokeWidth="1" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </g>

          {/* Sunken Cheeks */}
          <path d="M75 125 Q80 140 70 155 M125 125 Q120 140 130 155" stroke="#064E3B" strokeWidth="2" opacity="0.4" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export default Zombie;
