
import React from 'react';

const GoldenSilence: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#FEFCE8" rx="40" />
    <circle cx="100" cy="100" r="80" stroke="#FDE68A" strokeWidth="0.5" fill="none" />
    <circle cx="100" cy="100" r="60" fill="#FEF08A" opacity="0.2">
       <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" />
    </circle>
    <rect x="98" y="40" width="4" height="120" fill="#EAB308" rx="2" />
    <circle cx="100" cy="100" r="25" fill="#EAB308" stroke="#FEFCE8" strokeWidth="5" />
    <circle cx="100" cy="100" r="10" fill="white" />
  </svg>
);

export default GoldenSilence;
