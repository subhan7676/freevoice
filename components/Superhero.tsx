
import React from 'react';

const Superhero: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroCowl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <filter id="heroEyeGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="3s" repeatCount="indefinite" />
          
          {/* Cowl */}
          <path d="M50 80 Q50 25 100 25 Q150 25 150 80 L165 165 L35 165 Z" fill="url(#heroCowl)" />
          
          {/* Eye Mask */}
          <path d="M55 75 Q100 115 145 75 L145 115 Q100 150 55 115 Z" fill="#DC2626" />
          
          {/* Glowing Eyes */}
          <g filter="url(#heroEyeGlow)">
            <path d="M70 95 L90 95 L85 110 L75 110 Z" fill="white">
               <animate attributeName="fill" values="white;#93C5FD;white" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M110 95 L130 95 L125 110 L115 110 Z" fill="white">
               <animate attributeName="fill" values="white;#93C5FD;white" dur="3s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Strong Jaw */}
          <path d="M75 135 Q100 170 125 135 L120 155 Q100 175 80 155 Z" fill="#FDE68A" />
          <path d="M92 148 L108 148" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />

          {/* Emblem */}
          <g transform="translate(100, 175)">
            <path d="M-22 0 L22 0 L15 25 L0 40 L-15 25 Z" fill="#FDE047" stroke="#DC2626" strokeWidth="2" />
            <text y="22" textAnchor="middle" fill="#DC2626" fontSize="22" fontWeight="900" fontStyle="italic">V</text>
          </g>

          {/* Glossy Reflection */}
          <path d="M70 40 Q100 30 130 40" stroke="white" strokeWidth="4" opacity="0.15" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

export default Superhero;
