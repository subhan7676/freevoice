
import React from 'react';

const MidnightSoul: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="nebulaGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4338CA" />
        <stop offset="60%" stopColor="#1E1B4B" />
        <stop offset="100%" stopColor="#020617" />
      </radialGradient>
      <filter id="starTwinkle">
        <feGaussianBlur stdDeviation="0.5" />
      </filter>
    </defs>
    <rect width="200" height="200" fill="#020617" rx="40" />
    <circle cx="100" cy="100" r="80" fill="url(#nebulaGrad)" opacity="0.6">
      <animate attributeName="r" values="70;85;70" dur="10s" repeatCount="indefinite" />
    </circle>
    
    {/* Dynamic Stars */}
    {Array.from({ length: 15 }).map((_, i) => (
      <circle 
        key={i} 
        cx={Math.random() * 160 + 20} 
        cy={Math.random() * 160 + 20} 
        r={Math.random() * 1 + 0.5} 
        fill="white" 
        filter="url(#starTwinkle)"
      >
        <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2 + Math.random() * 3}s`} begin={`${Math.random() * 5}s`} repeatCount="indefinite" />
      </circle>
    ))}

    <path d="M100 50 Q150 100 100 150 Q50 100 100 50" fill="white" opacity="0.03">
      <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="40s" repeatCount="indefinite" />
    </path>
    
    <circle cx="100" cy="100" r="20" fill="#818CF8" opacity="0.2" filter="url(#auricGlow)">
      <animate attributeName="r" values="15;25;15" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="100" r="5" fill="white">
       <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default MidnightSoul;
