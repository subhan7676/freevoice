
import React from 'react';

const SilentCrown: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="obsidianGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <filter id="etching">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise" />
        <feComponentTransfer in="noise" result="alpha">
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feComposite in="SourceGraphic" in2="alpha" operator="in" />
      </filter>
    </defs>
    <g transform="translate(0, 10)">
      <path d="M40 140 L160 140 L180 60 L140 100 L100 20 L60 100 L20 60 Z" fill="url(#obsidianGrad)" stroke="#1E293B" strokeWidth="1" />
      <path d="M40 140 L160 140 L180 60 L140 100 L100 20 L60 100 L20 60 Z" fill="white" opacity="0.05" filter="url(#etching)" />
      
      <circle cx="100" cy="20" r="4" fill="#6366F1" filter="url(#auricGlow)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="60" r="3" fill="#6366F1" opacity="0.6" />
      <circle cx="180" cy="60" r="3" fill="#6366F1" opacity="0.6" />
      
      <rect x="40" y="145" width="120" height="8" rx="4" fill="#020617" />
      <g stroke="#6366F1" strokeWidth="1" opacity="0.2" fill="none">
        <path d="M70 120 Q100 110 130 120" />
        <path d="M80 130 Q100 125 120 130" />
      </g>
    </g>
  </svg>
);

export default SilentCrown;
