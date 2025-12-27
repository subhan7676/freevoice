
import React from 'react';

const Dog: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="dogFurHyper" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D7A068" />
          <stop offset="100%" stopColor="#A67C52" />
        </radialGradient>
        <linearGradient id="noseGlint" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="3s" repeatCount="indefinite" />
          
          {/* Floppy Ears */}
          <g>
            <path d="M45 70 Q20 70 25 120 Q30 150 60 130 Z" fill="#8D6E63">
               <animateTransform attributeName="transform" type="rotate" values="0 45 70; -5 45 70; 0 45 70" dur="1.5s" repeatCount="indefinite" />
            </path>
            <path d="M155 70 Q180 70 175 120 Q170 150 140 130 Z" fill="#8D6E63">
               <animateTransform attributeName="transform" type="rotate" values="0 155 70; 5 155 70; 0 155 70" dur="1.5s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Face */}
          <path d="M55 85 Q55 160 100 175 Q145 160 145 85 Q145 50 100 50 Q55 50 55 85" fill="url(#dogFurHyper)" />
          
          {/* Muzzle */}
          <ellipse cx="100" cy="135" rx="38" ry="28" fill="#F3D5B5" opacity="0.9" />

          {/* Eyes */}
          <g>
            <circle cx="80" cy="100" r="10" fill="white" />
            <circle cx="80" cy="100" r="5" fill="#3E2723">
               <animate attributeName="r" values="5;4;5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="77" cy="97" r="2" fill="white" />
            
            <circle cx="120" cy="100" r="10" fill="white" />
            <circle cx="120" cy="100" r="5" fill="#3E2723">
               <animate attributeName="r" values="5;4;5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="117" cy="97" r="2" fill="white" />
          </g>

          {/* Wet Nose */}
          <path d="M92 125 Q100 115 108 125 Q108 138 100 142 Q92 138 92 125" fill="url(#noseGlint)" />
          <circle cx="96" cy="122" r="2" fill="white" opacity="0.3" />

          {/* Mouth & Tongue */}
          <g transform="translate(100, 150)">
             <path d="M-5 0 Q0 15 5 0" fill="#FF80AB">
                <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="0.2s" repeatCount="indefinite" />
             </path>
             <path d="M-15 -5 Q0 5 15 -5" stroke="#8D6E63" strokeWidth="2" fill="none" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Dog;
