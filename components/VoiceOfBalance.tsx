
import React from 'react';

const VoiceOfBalance: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#FAFAFA" rx="40" />
    <circle cx="100" cy="100" r="80" stroke="#E5E5E5" strokeWidth="1" fill="none" />
    <circle cx="100" cy="100" r="60" stroke="#D4D4D4" strokeWidth="0.5" fill="none" strokeDasharray="5,5" />
    <g transform="translate(100, 100)">
      <rect x="-15" y="-15" width="30" height="30" fill="#737373" rx="5" />
      <path d="M-10 0 L10 0 M0 -10 L0 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle r="40" fill="none" stroke="#A3A3A3" strokeWidth="0.5">
         <animate attributeName="r" values="40;50;40" dur="6s" repeatCount="indefinite" />
      </circle>
    </g>
    <text x="100" y="30" textAnchor="middle" fill="#A3A3A3" fontSize="6" fontWeight="black" opacity="0.5">NEUTRAL SYNC 1.0</text>
  </svg>
);

export default VoiceOfBalance;
