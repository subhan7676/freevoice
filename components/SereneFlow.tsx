
import React from 'react';

const SereneFlow: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="liquidAzure" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="50%" stopColor="#7DD3FC" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    <path d="M0 100 C50 20 150 180 200 100 L200 200 L0 200 Z" fill="url(#liquidAzure)" opacity="0.6">
      <animate attributeName="d" 
        values="M0 100 C50 20 150 180 200 100 L200 200 L0 200 Z; M0 100 C50 180 150 20 200 100 L200 200 L0 200 Z; M0 100 C50 20 150 180 200 100 L200 200 L0 200 Z" 
        dur="8s" repeatCount="indefinite" />
    </path>
    <circle cx="100" cy="80" r="25" fill="white" opacity="0.8" filter="url(#auricGlow)">
      <animate attributeName="cy" values="80;75;80" dur="4s" repeatCount="indefinite" />
    </circle>
    <g opacity="0.3">
       <circle cx="40" cy="120" r="2" fill="white"><animate attributeName="cy" values="120;100" dur="2s" repeatCount="indefinite" /></circle>
       <circle cx="160" cy="140" r="3" fill="white"><animate attributeName="cy" values="140;110" dur="3s" repeatCount="indefinite" /></circle>
    </g>
  </svg>
);

export default SereneFlow;
