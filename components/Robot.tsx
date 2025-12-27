
import React from 'react';

const Robot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chromeRobot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="50%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <filter id="energyGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>

      <g>
        {/* Hovering Motion */}
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="3s" repeatCount="indefinite" />
        
        {/* Body Panel */}
        <rect x="40" y="140" width="120" height="60" rx="20" fill="url(#chromeRobot)" />
        
        {/* Neck Hub */}
        <rect x="85" y="130" width="30" height="20" fill="#334155" />

        {/* Head Unit */}
        <rect x="50" y="40" width="100" height="100" rx="25" fill="url(#chromeRobot)" stroke="#0F172A" strokeWidth="2" />
        
        {/* Visor Area */}
        <rect x="60" y="65" width="80" height="40" rx="10" fill="#0F172A" />
        
        {/* Pulsating Core Eyes */}
        <g filter="url(#energyGlow)">
          <circle cx="82" cy="85" r="8" fill="url(#coreGrad)">
             <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="118" cy="85" r="8" fill="url(#coreGrad)">
             <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Data Stream lines */}
        <g stroke="#22D3EE" strokeWidth="1" opacity="0.3">
          <line x1="65" y1="95" x2="135" y2="95">
             <animate attributeName="opacity" values="0.1;0.6;0.1" dur="0.5s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Antenna */}
        <line x1="100" y1="40" x2="100" y2="15" stroke="#475569" strokeWidth="4" />
        <circle cx="100" cy="12" r="6" fill="#F43F5E" filter="url(#energyGlow)">
           <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
        </circle>

        {/* Panel Detail Bolts */}
        <circle cx="58" cy="50" r="3" fill="#0F172A" />
        <circle cx="142" cy="50" r="3" fill="#0F172A" />
        <circle cx="58" cy="130" r="3" fill="#0F172A" />
        <circle cx="142" cy="130" r="3" fill="#0F172A" />
      </g>
    </svg>
  );
};

export default Robot;
