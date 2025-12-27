
import React from 'react';

const CalmInfinity: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1E1B4B" rx="40" />
    <g transform="translate(100, 100)">
      {[80, 60, 40, 20].map((r, i) => (
        <circle key={r} r={r} stroke="#818CF8" strokeWidth="0.5" fill="none" opacity={0.6 - (i * 0.15)}>
          <animate attributeName="r" values={`${r};${r+10};${r}`} dur={`${10 + i * 5}s`} repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur={`${20 + i * 10}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <circle r="5" fill="white" filter="url(#auricGlow)" />
    </g>
    <g opacity="0.2" fill="white">
       <circle cx="50" cy="50" r="1"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" /></circle>
       <circle cx="150" cy="150" r="1"><animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" /></circle>
    </g>
  </svg>
);

export default CalmInfinity;
