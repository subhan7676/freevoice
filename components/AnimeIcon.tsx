
import React from 'react';

const AnimeIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="animeHair" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
      </defs>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="2s" repeatCount="indefinite" />
        <circle cx="100" cy="110" r="60" fill="#FFE4E6" />
        <path d="M40 100 Q40 40 100 40 Q160 40 160 100 Q160 130 130 90 Q100 80 70 90 Q40 130 40 100" fill="url(#animeHair)" />
        <g>
          <ellipse cx="80" cy="115" rx="8" ry="12" fill="#1E293B" />
          <ellipse cx="120" cy="115" rx="8" ry="12" fill="#1E293B" />
          <circle cx="82" cy="110" r="3" fill="white" />
          <circle cx="122" cy="110" r="3" fill="white" />
        </g>
        <path d="M90 145 Q100 155 110 145" stroke="#BE185D" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="65" cy="130" r="8" fill="#FDA4AF" opacity="0.6" />
        <circle cx="135" cy="130" r="8" fill="#FDA4AF" opacity="0.6" />
      </g>
    </svg>
  );
};

export default AnimeIcon;
