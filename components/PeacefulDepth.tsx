
import React from 'react';

const PeacefulDepth: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#172554" rx="40" />
    <path d="M0 120 Q100 80 200 120 L200 200 L0 200 Z" fill="#1E3A8A" opacity="0.6">
      <animate attributeName="d" values="M0 120 Q100 80 200 120 L200 200 L0 200 Z; M0 110 Q100 100 200 110 L200 200 L0 200 Z; M0 120 Q100 80 200 120 L200 200 L0 200 Z" dur="10s" repeatCount="indefinite" />
    </path>
    <circle cx="100" cy="70" r="40" fill="white" opacity="0.05" filter="url(#auricGlow)">
       <animate attributeName="opacity" values="0.02;0.08;0.02" dur="5s" repeatCount="indefinite" />
    </circle>
    {Array.from({ length: 8 }).map((_, i) => (
      <circle key={i} cx={Math.random()*200} cy={Math.random()*200} r="1.5" fill="#38BDF8" opacity="0.6">
        <animate attributeName="opacity" values="0.2;1;0.2" dur={`${3+i}s`} repeatCount="indefinite" />
        <animate attributeName="cy" values={`${Math.random()*200};${Math.random()*200-20}`} dur={`${10+i}s`} repeatCount="indefinite" />
      </circle>
    ))}
  </svg>
);

export default PeacefulDepth;
