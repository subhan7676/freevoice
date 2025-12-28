
import React from 'react';

const GoldenEcho: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="20%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#B45309" />
        <stop offset="80%" stopColor="#FDE68A" />
        <stop offset="100%" stopColor="#78350F" />
      </linearGradient>
      <filter id="echoBloom">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <g filter="url(#echoBloom)">
      {[80, 60, 40].map((r, i) => (
        <circle key={r} cx="100" cy="100" r={r} stroke="url(#goldMetal)" strokeWidth="2" fill="none" opacity={0.6 - (i * 0.2)}>
          <animate attributeName="r" values={`${r};${r+10};${r}`} dur={`${3 + i}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur={`${2 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <circle cx="100" cy="100" r="25" fill="url(#goldMetal)" />
      <path d="M100 75 Q125 100 100 125 Q75 100 100 75" fill="white" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="5s" repeatCount="indefinite" />
      </path>
      <g stroke="#FDE68A" strokeWidth="0.5" opacity="0.4">
        <line x1="100" y1="20" x2="100" y2="180"><animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite" /></line>
        <line x1="20" y1="100" x2="180" y2="100"><animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite" /></line>
      </g>
    </g>
  </svg>
);

export default GoldenEcho;
