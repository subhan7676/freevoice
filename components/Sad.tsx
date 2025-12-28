
import React from 'react';

const Sad: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sadCloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <radialGradient id="sadFaceGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1E40AF" />
        </radialGradient>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          {/* Hovering Cloud */}
          <g transform="translate(100, 45)">
            <path d="M-30 0 Q-45 -20 -20 -25 Q-5 -35 15 -25 Q35 -30 35 -5 Q45 10 20 15 L-20 15 Q-45 15 -30 0" fill="url(#sadCloudGrad)" opacity="0.9">
               <animateTransform attributeName="transform" type="translate" values="0 0; 5 0; 0 0" dur="4s" repeatCount="indefinite" />
            </path>
            {/* Rain */}
            <circle cx="-15" cy="20" r="1.5" fill="#60A5FA">
               <animate attributeName="cy" values="20;50" dur="1s" repeatCount="indefinite" />
               <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="15" cy="25" r="1.5" fill="#60A5FA">
               <animate attributeName="cy" values="25;55" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
               <animate attributeName="opacity" values="1;0" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Sad Face */}
          <circle cx="100" cy="115" r="65" fill="url(#sadFaceGrad)" />
          
          {/* Eyes */}
          <g>
            <path d="M65 100 Q80 95 95 110" stroke="#1E3A8A" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M105 110 Q120 95 135 100" stroke="#1E3A8A" strokeWidth="5" fill="none" strokeLinecap="round" />
            
            <circle cx="80" cy="120" r="8" fill="white" />
            <circle cx="80" cy="122" r="4" fill="#1E3A8A" />
            
            <circle cx="120" cy="120" r="8" fill="white" />
            <circle cx="120" cy="122" r="4" fill="#1E3A8A" />
          </g>

          {/* Teardrop */}
          <path d="M72 130 Q72 150 80 150 Q88 150 88 130 L80 115 Z" fill="#BFDBFE" opacity="0.8">
             <animate attributeName="d" values="M72 130 Q72 150 80 150 Q88 150 88 130 L80 115 Z; M72 145 Q72 165 80 165 Q88 165 88 145 L80 130 Z; M72 130 Q72 150 80 150 Q88 150 88 130 L80 115 Z" dur="3s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
          </path>

          {/* Quivering Mouth */}
          <path d="M85 152 Q100 142 115 152" stroke="#1E3A8A" strokeWidth="3" fill="none" strokeLinecap="round">
             <animate attributeName="d" values="M85 152 Q100 142 115 152; M85 153 Q100 143 115 153; M85 152 Q100 142 115 152" dur="0.15s" repeatCount="indefinite" />
          </path>
        </g>
      </g>
    </svg>
  );
};

export default Sad;
