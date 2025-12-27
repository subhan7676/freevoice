
import React from 'react';

const InnerEcho: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#FFF1F2" rx="40" />
    <g transform="translate(100, 100)">
      {[80, 60, 40].map((r, i) => (
        <circle key={r} r={r} stroke="#FDA4AF" strokeWidth="1" fill="none" opacity={0.6 - (i * 0.2)}>
           <animate attributeName="r" values={`${r};${r+10};${r}`} dur="4s" repeatCount="indefinite" />
        </circle>
      ))}
      <path d="M-20 -30 Q0 -60 20 -30 T-20 -30" fill="#E11D48" opacity="0.8">
         <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </path>
      <circle r="8" fill="white" filter="url(#auricGlow)" />
    </g>
  </svg>
);

export default InnerEcho;
