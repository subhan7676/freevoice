
import React from 'react';

const SoulWhisper: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#FFF1F2" rx="40" />
    <g transform="translate(100, 100)">
      {Array.from({ length: 5 }).map((_, i) => (
        <path 
          key={i}
          d="M0 0 Q30 -40 0 -80 Q-30 -40 0 0" 
          fill="#FDA4AF" 
          opacity="0.3"
          transform={`rotate(${i * 72})`}
        >
          <animateTransform attributeName="transform" type="rotate" from={`${i * 72}`} to={`${i * 72 + 360}`} dur="20s" repeatCount="indefinite" />
        </path>
      ))}
      <circle r="15" fill="#E11D48" opacity="0.6" filter="url(#auricGlow)" />
      <circle r="5" fill="white" />
    </g>
  </svg>
);

export default SoulWhisper;
