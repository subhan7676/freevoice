
import React from 'react';

const RealGirl: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="skinBase" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFDBAC" />
          <stop offset="70%" stopColor="#F1C27D" />
          <stop offset="100%" stopColor="#E0AC69" />
        </radialGradient>
        <linearGradient id="hairFlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4B2C20" />
          <stop offset="100%" stopColor="#1A110A" />
        </linearGradient>
        <filter id="skinTexture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="1">
            <feDistantLight azimuth="45" elevation="45" />
          </feDiffuseLighting>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <filter id="softGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      
      <g>
        {/* Breathing Animation */}
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="4s" repeatCount="indefinite" />
        
        {/* Back Hair */}
        <path d="M30 110 Q30 30 100 30 Q170 30 170 110 L185 180 Q100 190 15 180 Z" fill="url(#hairFlow)">
           <animateTransform attributeName="transform" type="rotate" values="-0.5 100 100; 0.5 100 100; -0.5 100 100" dur="5s" repeatCount="indefinite" />
        </path>

        {/* Neck */}
        <path d="M85 140 L115 140 L115 165 Q100 175 85 165 Z" fill="#E8B075" />

        {/* Face Shape */}
        <path d="M55 95 Q55 160 100 160 Q145 160 145 95 Q145 40 100 40 Q55 40 55 95" fill="url(#skinBase)" />
        <path d="M55 95 Q55 160 100 160 Q145 160 145 95 Q145 40 100 40 Q55 40 55 95" fill="white" opacity="0.05" filter="url(#skinTexture)" />

        {/* Eyes */}
        <g>
          {/* Left Eye */}
          <ellipse cx="80" cy="98" rx="10" ry="7" fill="white" />
          <circle cx="80" cy="98" r="5" fill="#3E2723" />
          <circle cx="78" cy="96" r="2" fill="white" opacity="0.8" />
          <path d="M70 98 Q80 88 90 98" fill="none" stroke="#2D1B13" strokeWidth="0.5" />
          <rect x="70" y="88" width="20" height="15" fill="url(#skinBase)" opacity="0">
             <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.7;0.75;0.8;1" dur="4s" repeatCount="indefinite" />
          </rect>

          {/* Right Eye */}
          <ellipse cx="120" cy="98" rx="10" ry="7" fill="white" />
          <circle cx="120" cy="98" r="5" fill="#3E2723" />
          <circle cx="118" cy="96" r="2" fill="white" opacity="0.8" />
          <path d="M110 98 Q120 88 130 98" fill="none" stroke="#2D1B13" strokeWidth="0.5" />
          <rect x="110" y="88" width="20" height="15" fill="url(#skinBase)" opacity="0">
             <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.7;0.75;0.8;1" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Lips */}
        <path d="M85 135 Q100 148 115 135 Q100 142 85 135" fill="#D81B60" opacity="0.8">
           <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Front Hair / Bangs */}
        <path d="M50 95 Q50 35 100 35 Q150 35 150 95 Q150 75 125 60 Q100 50 75 60 Q50 75 50 95" fill="url(#hairFlow)" />
      </g>
    </svg>
  );
};

export default RealGirl;
