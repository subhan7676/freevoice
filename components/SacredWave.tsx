
import React from 'react';

const SacredWave: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="zenGlow">
        <feGaussianBlur stdDeviation="3" />
      </filter>
    </defs>
    <circle cx="100" cy="100" r="90" stroke="#818CF8" strokeWidth="0.5" fill="none" opacity="0.3" />
    {[70, 50, 30].map((r, i) => (
      <path 
        key={r}
        d={`M${100-r} 100 Q100 ${100-r-10} ${100+r} 100 T${100-r} 100`}
        stroke="#6366F1"
        strokeWidth="1"
        fill="none"
        opacity={0.6 - (i * 0.1)}
      >
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur={`${10 + i * 5}s`} repeatCount="indefinite" />
      </path>
    ))}
    <circle cx="100" cy="100" r="8" fill="#4F46E5" filter="url(#zenGlow)">
       <animate attributeName="r" values="7;10;7" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="100" r="2" fill="white" />
  </svg>
);

export default SacredWave;
