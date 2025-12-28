
import React from 'react';

const Cave: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <filter id="caveGlow">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <linearGradient id="mistGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g>
        {/* Ambient Mist */}
        <rect x="0" y="140" width="200" height="60" fill="url(#mistGrad)">
           <animate attributeName="x" values="-100;100;-100" dur="10s" repeatCount="indefinite" />
        </rect>

        {/* Mountain Base */}
        <path d="M10 180 L40 80 L90 40 L120 45 L170 90 L190 180 Z" fill="url(#rockGrad)" stroke="#1E293B" strokeWidth="2" />
        
        {/* Interior Shadows */}
        <path d="M40 80 L100 90 L170 90" stroke="#0F172A" strokeWidth="1" fill="none" opacity="0.5" />

        {/* The Cave Opening */}
        <g>
          <path d="M70 180 Q70 110 100 110 Q130 110 130 180 Z" fill="#020617" />
          <path d="M70 180 Q70 110 100 110 Q130 110 130 180 Z" fill="#38BDF8" opacity="0.1" filter="url(#caveGlow)">
             <animate attributeName="opacity" values="0.05;0.15;0.05" dur="3s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Stalactites Detail */}
        <path d="M75 110 L80 125 L85 110 M115 110 L120 125 L125 110" fill="#1E293B" />

        {/* Base Rock Pebbles */}
        <circle cx="45" cy="185" r="5" fill="#475569" />
        <circle cx="155" cy="188" r="4" fill="#475569" />
      </g>
    </svg>
  );
};

export default Cave;
