
import React from 'react';

const Baby: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="babySkinHyper" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF3E0" />
          <stop offset="60%" stopColor="#FFE0BD" />
          <stop offset="100%" stopColor="#FFCD94" />
        </radialGradient>
        <filter id="softGlowBaby">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="4s" repeatCount="indefinite" />
          
          {/* Tuft of hair */}
          <path d="M95 50 Q100 30 110 45" stroke="#8D6E63" strokeWidth="4" fill="none" strokeLinecap="round">
             <animateTransform attributeName="transform" type="rotate" values="-2 100 50; 2 100 50; -2 100 50" dur="2s" repeatCount="indefinite" />
          </path>
          
          {/* Face */}
          <circle cx="100" cy="115" r="65" fill="url(#babySkinHyper)" />
          
          {/* Rosy Cheeks */}
          <circle cx="65" cy="135" r="15" fill="#FF8A65" opacity="0.2">
             <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="135" cy="135" r="15" fill="#FF8A65" opacity="0.2">
             <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* Eyes */}
          <g>
            <circle cx="75" cy="110" r="12" fill="white" />
            <circle cx="75" cy="110" r="7" fill="#5D4037" />
            <circle cx="71" cy="106" r="3.5" fill="white" opacity="0.8" />
            <rect x="63" y="100" width="24" height="20" fill="url(#babySkinHyper)" opacity="0">
               <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.5;0.55;0.6;1" dur="6s" repeatCount="indefinite" />
            </rect>

            <circle cx="125" cy="110" r="12" fill="white" />
            <circle cx="125" cy="110" r="7" fill="#5D4037" />
            <circle cx="121" cy="106" r="3.5" fill="white" opacity="0.8" />
            <rect x="113" y="100" width="24" height="20" fill="url(#babySkinHyper)" opacity="0">
               <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.5;0.55;0.6;1" dur="6s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Pacifier with Sucking Motion */}
          <g transform="translate(100, 150)">
            <circle r="18" fill="#4FC3F7" stroke="#0288D1" strokeWidth="1" />
            <circle r="12" fill="#03A9F4">
               <animate attributeName="r" values="12;14;12" dur="1s" repeatCount="indefinite" />
            </circle>
            <path d="M-10 -5 Q0 -15 10 -5" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Baby;
