
import React from 'react';

const LucidTone: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="white" rx="40" />
    <circle cx="100" cy="100" r="80" stroke="#E2E8F0" strokeWidth="1" fill="none" />
    <circle cx="100" cy="100" r="70" stroke="#CBD5E1" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
    <g transform="translate(100, 100)">
      <rect x="-30" y="-30" width="60" height="60" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
      <g stroke="#38BDF8" strokeWidth="1.5">
         <line x1="-20" y1="0" x2="20" y2="0"><animate attributeName="stroke-width" values="1.5;4;1.5" dur="0.8s" repeatCount="indefinite" /></line>
         <line x1="0" y1="-20" x2="0" y2="20" />
      </g>
    </g>
    <g fill="#94A3B8" fontSize="6" fontWeight="black" opacity="0.5">
       <text x="100" y="35" textAnchor="middle">LUCID ENGINE</text>
       <text x="100" y="175" textAnchor="middle">SYNC STATUS: ACTIVE</text>
    </g>
  </svg>
);

export default LucidTone;
