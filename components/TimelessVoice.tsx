
import React from 'react';

const TimelessVoice: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="parchment" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="100%" stopColor="#D97706" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#parchment)" stroke="#78350F" strokeWidth="4" />
    <circle cx="100" cy="100" r="85" fill="none" stroke="#78350F" strokeWidth="0.5" strokeDasharray="2,2" />
    
    {Array.from({ length: 12 }).map((_, i) => (
      <rect 
        key={i} 
        x="98" y="15" width="4" height="10" 
        fill="#78350F" 
        transform={`rotate(${i * 30} 100 100)`} 
      />
    ))}

    <g stroke="#451A03" strokeWidth="4" strokeLinecap="round">
      <line x1="100" y1="100" x2="100" y2="40">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="60s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="100" x2="140" y2="100">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="3600s" repeatCount="indefinite" />
      </line>
    </g>
    <circle cx="100" cy="100" r="6" fill="#78350F" />
  </svg>
);

export default TimelessVoice;
