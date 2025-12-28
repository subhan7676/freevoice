
import React from 'react';

const Ghost: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="etherealGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </filter>
        <linearGradient id="ghostGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
      </defs>

      <g>
        {/* Floating motion */}
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -15; 0 0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
        
        {/* Aura */}
        <path d="M60 100 Q60 30 100 30 Q140 30 140 100 L140 170 Q100 150 60 170 Z" fill="#BFDBFE" opacity="0.2" filter="url(#etherealGlow)">
           <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Body */}
        <path d="M65 100 Q65 40 100 40 Q135 40 135 100 L135 160 Q118 150 108 160 Q100 170 92 160 Q82 150 65 160 Z" fill="url(#ghostGrad)" opacity="0.7">
           <animate attributeName="opacity" values="0.6;0.8;0.6" dur="5s" repeatCount="indefinite" />
        </path>

        {/* Eyes */}
        <g>
          <ellipse cx="85" cy="95" rx="9" ry="14" fill="#0F172A">
             <animate attributeName="ry" values="14;2;14" dur="5s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="115" cy="95" rx="9" ry="14" fill="#0F172A">
             <animate attributeName="ry" values="14;2;14" dur="5s" repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* Floating Particles */}
        <circle cx="50" cy="140" r="2" fill="white" opacity="0.5">
           <animate attributeName="cy" values="140;100" dur="2s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="120" r="2.5" fill="white" opacity="0.3">
           <animate attributeName="cy" values="120;80" dur="2.5s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="0.3;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default Ghost;
