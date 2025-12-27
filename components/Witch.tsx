
import React from 'react';

const Witch: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="witchSkinHyper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
        <radialGradient id="eyeGlowWitch" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#581C87" />
        </radialGradient>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="4s" repeatCount="indefinite" />
          
          {/* Hair (Back) */}
          <path d="M40 100 Q30 140 50 170 M160 100 Q170 140 150 170" stroke="#94A3B8" strokeWidth="4" opacity="0.4" strokeLinecap="round" />

          {/* Face */}
          <path d="M60 100 Q60 160 100 175 Q140 160 140 100 Z" fill="url(#witchSkinHyper)" />
          
          {/* Hooked Nose */}
          <path d="M100 110 L120 145 Q125 152 110 150 L100 135" fill="#064E3B" opacity="0.8" />
          
          {/* Eyes */}
          <g>
            <circle cx="80" cy="115" r="7" fill="url(#eyeGlowWitch)">
               <animate attributeName="r" values="7;8;7" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="120" cy="115" r="7" fill="url(#eyeGlowWitch)">
               <animate attributeName="r" values="7;8;7" dur="2s" repeatCount="indefinite" />
            </circle>
            <path d="M70 110 Q80 100 90 110 M110 110 Q120 100 130 110" stroke="#064E3B" strokeWidth="3" fill="none" />
          </g>

          {/* Wrinkles */}
          <g stroke="#064E3B" strokeWidth="1" opacity="0.3" fill="none">
            <path d="M85 85 Q100 80 115 85" />
            <path d="M70 125 L65 130" />
            <path d="M130 125 L135 130" />
          </g>

          {/* Hat */}
          <path d="M30 100 L100 10 L170 100 Z" fill="#1E293B" stroke="#020617" strokeWidth="2" />
          <ellipse cx="100" cy="105" rx="90" ry="18" fill="#1E293B" stroke="#020617" strokeWidth="1" />
          
          {/* Magical Sparks */}
          <g fill="#A855F7">
             <circle cx="40" cy="50" r="2"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" /></circle>
             <circle cx="160" cy="80" r="1.5"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" /></circle>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Witch;
