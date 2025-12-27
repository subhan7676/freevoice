
import React from 'react';

const Alien: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="alienSkinHyper" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DCEDC8" />
          <stop offset="70%" stopColor="#AED581" />
          <stop offset="100%" stopColor="#689F38" />
        </radialGradient>
        <filter id="alienInternalGlow">
           <feGaussianBlur stdDeviation="5" result="blur" />
           <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1.5; 0 0" dur="6s" repeatCount="indefinite" />
          
          {/* Translucent Head */}
          <path d="M50 100 Q50 20 100 20 Q150 20 150 100 Q150 175 100 190 Q50 175 50 100" fill="url(#alienSkinHyper)" opacity="0.9" />
          
          {/* Pulsating Brain Logic */}
          <g filter="url(#alienInternalGlow)" opacity="0.3">
             {/* Fixed: Removed non-standard pivot attribute and used transformOrigin style on the path */}
             <path d="M75 50 Q100 35 125 50 Q130 80 100 90 Q70 80 75 50" fill="#F0F4C3" style={{ transformOrigin: '100px 60px' }}>
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="4s" repeatCount="indefinite" />
             </path>
          </g>

          {/* Giant Void Eyes */}
          <g transform="rotate(-15, 75, 105)">
            <ellipse cx="75" cy="105" rx="22" ry="35" fill="#1B1F23" />
            <circle cx="70" cy="90" r="4" fill="white" opacity="0.3" />
            <circle cx="80" cy="115" r="2" fill="#DCEDC8" opacity="0.2">
               <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
          <g transform="rotate(15, 125, 105)">
            <ellipse cx="125" cy="105" rx="22" ry="35" fill="#1B1F23" />
            <circle cx="120" cy="90" r="4" fill="white" opacity="0.3" />
            <circle cx="115" cy="115" r="2" fill="#DCEDC8" opacity="0.2">
               <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Small Mouth */}
          <path d="M92 165 Q100 170 108 165" stroke="#33691E" strokeWidth="2" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export default Alien;