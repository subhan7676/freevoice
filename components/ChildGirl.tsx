
import React from 'react';

const ChildGirl: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="childSkinHyper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3E0" />
          <stop offset="40%" stopColor="#FFCCBC" />
          <stop offset="100%" stopColor="#D8A48F" />
        </linearGradient>
        <linearGradient id="childHairHyper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6D4C41" />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
        <radialGradient id="cheekBlush" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF80AB" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF80AB" stopOpacity="0" />
        </radialGradient>
        <filter id="ultraSoftShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        {/* Breathing Animation Wrapper */}
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1; 0 0" dur="4s" repeatCount="indefinite" />
          
          {/* Pigtails with Swaying Motion */}
          <g>
            <path d="M45 70 Q25 60 30 110 Q35 130 55 120" fill="url(#childHairHyper)">
              <animateTransform attributeName="transform" type="rotate" values="0 45 70; -5 45 70; 0 45 70" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M155 70 Q175 60 170 110 Q165 130 145 120" fill="url(#childHairHyper)">
              <animateTransform attributeName="transform" type="rotate" values="0 155 70; 5 155 70; 0 155 70" dur="3s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Face Base */}
          <circle cx="100" cy="100" r="58" fill="url(#childSkinHyper)" />
          
          {/* Detailed Hair / Bangs */}
          <path d="M48 85 Q48 45 100 45 Q152 45 152 85 Q135 70 120 65 Q100 60 80 65 Q60 70 48 85" fill="url(#childHairHyper)" />

          {/* Eyes with Depth */}
          <g transform="translate(0, 5)">
            {/* Left Eye */}
            <ellipse cx="80" cy="95" rx="10" ry="7" fill="white" />
            <circle cx="80" cy="95" r="5.5" fill="#5D4037">
               <animate attributeName="cx" values="79;81;79" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="78" cy="93" r="2.5" fill="white" />
            {/* Lid */}
            <path d="M70 95 Q80 84 90 95" fill="none" stroke="#4E342E" strokeWidth="0.5" />
            <rect x="70" y="85" width="20" height="15" fill="url(#childSkinHyper)" opacity="0">
              <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.7;0.75;0.8;1" dur="4s" repeatCount="indefinite" />
            </rect>

            {/* Right Eye */}
            <ellipse cx="120" cy="95" rx="10" ry="7" fill="white" />
            <circle cx="120" cy="95" r="5.5" fill="#5D4037">
               <animate attributeName="cx" values="119;121;119" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="118" cy="93" r="2.5" fill="white" />
            {/* Lid */}
            <path d="M110 95 Q120 84 130 95" fill="none" stroke="#4E342E" strokeWidth="0.5" />
            <rect x="110" y="85" width="20" height="15" fill="url(#childSkinHyper)" opacity="0">
              <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.7;0.75;0.8;1" dur="4s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Cheeks */}
          <circle cx="70" cy="120" r="10" fill="url(#cheekBlush)" />
          <circle cx="130" cy="120" r="10" fill="url(#cheekBlush)" />

          {/* Detailed Lips */}
          <path d="M85 132 Q100 145 115 132 Q100 138 85 132" fill="#E91E63" opacity="0.6">
             <animate attributeName="d" values="M85 132 Q100 145 115 132 Q100 138 85 132; M85 132 Q100 142 115 132 Q100 136 85 132; M85 132 Q100 145 115 132" dur="4s" repeatCount="indefinite" />
          </path>
        </g>
      </g>
    </svg>
  );
};

export default ChildGirl;
