
import React from 'react';

const SoftCommand: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1E1B4B" rx="40" />
    <path d="M40 40 L160 40 L160 160 L40 160 Z" fill="#312E81" stroke="#4338CA" strokeWidth="2" />
    <rect x="60" y="100" width="80" height="4" fill="#6366F1" rx="2" opacity="0.4">
       <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
    </rect>
    <circle cx="100" cy="80" r="15" fill="#818CF8" opacity="0.2" filter="url(#auricGlow)" />
    <circle cx="100" cy="80" r="4" fill="white">
       <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
    </circle>
    <g fill="#818CF8" fontSize="6" fontWeight="black" opacity="0.6">
       <text x="100" y="150" textAnchor="middle">COMMAND PROTOCOL</text>
    </g>
  </svg>
);

export default SoftCommand;
