
import React from 'react';

const EternalWhisper: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#F8FAFC" rx="40" />
    <g transform="translate(100, 100)">
      <path d="M-50 0 Q0 -80 50 0 Q0 80 -50 0" fill="#CBD5E1" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
      </path>
      <path d="M-30 0 Q0 -60 30 0 Q0 60 -30 0" fill="#94A3B8" opacity="0.2">
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="15s" repeatCount="indefinite" />
      </path>
    </g>
    <circle cx="100" cy="100" r="5" fill="#64748B">
       <animate attributeName="opacity" values="1;0;1" dur="4s" repeatCount="indefinite" />
    </circle>
    <text x="100" y="140" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="black" opacity="0.5">FOREVER</text>
  </svg>
);

export default EternalWhisper;
