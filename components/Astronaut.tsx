
import React from 'react';

const Astronaut: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="visorHyper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <filter id="innerGlowVisor">
           <feGaussianBlur stdDeviation="5" result="blur" />
           <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g>
        {/* Floating Animation */}
        <animateTransform attributeName="transform" type="translate" values="0 0; 5 -10; 0 0" dur="7s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
        
        {/* Suit Body */}
        <rect x="40" y="150" width="120" height="50" rx="20" fill="url(#suitGrad)" />
        <rect x="70" y="160" width="60" height="25" rx="5" fill="#1E293B" /> {/* Chest pack */}
        <circle cx="100" cy="172" r="4" fill="#EF4444">
           <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
        </circle>

        {/* Helmet */}
        <rect x="45" y="45" width="110" height="115" rx="45" fill="url(#suitGrad)" stroke="#CBD5E1" strokeWidth="2" />
        
        {/* Visor Area */}
        <rect x="52" y="60" width="96" height="75" rx="35" fill="url(#visorHyper)" stroke="#0F172A" strokeWidth="4" />
        
        {/* Glass Glare */}
        <path d="M65 70 Q100 60 135 70" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.1" />
        
        {/* Moving reflection */}
        <ellipse cx="100" cy="97" rx="40" ry="30" fill="white" opacity="0.05">
           <animate attributeName="cx" values="80;120;80" dur="15s" repeatCount="indefinite" />
        </ellipse>

        {/* Side Comms Unit */}
        <rect x="145" y="90" width="10" height="30" rx="3" fill="#64748B" />
        <circle cx="152" cy="100" r="2" fill="#22D3EE">
           <animate attributeName="opacity" values="1;0;1" dur="0.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Background Star Particles */}
      <g opacity="0.6">
        <circle cx="20" cy="30" r="1" fill="white"><animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" /></circle>
        <circle cx="180" cy="50" r="1.5" fill="white"><animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" /></circle>
        <circle cx="30" cy="170" r="1" fill="white"><animate attributeName="opacity" values="0.2;1;0.2" dur="4s" repeatCount="indefinite" /></circle>
      </g>
    </svg>
  );
};

export default Astronaut;
