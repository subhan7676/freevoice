
import React from 'react';

const QuietMajesty: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#312E81" rx="40" />
    <path d="M50 160 L100 40 L150 160 Z" fill="#4338CA" />
    <path d="M70 160 L100 90 L130 160 Z" fill="#6366F1" opacity="0.6" />
    <path d="M100 40 L110 70 L90 70 Z" fill="white" opacity="0.3" />
    <circle cx="100" cy="160" r="10" fill="white" opacity="0.2" filter="url(#auricGlow)">
       <animate attributeName="r" values="10;15;10" dur="4s" repeatCount="indefinite" />
    </circle>
    <g fill="white" opacity="0.1">
       <circle cx="40" cy="40" r="1" />
       <circle cx="160" cy="50" r="1" />
       <circle cx="180" cy="140" r="1.5" />
    </g>
  </svg>
);

export default QuietMajesty;
