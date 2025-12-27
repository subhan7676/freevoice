
import React from 'react';

const Cat: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="catFurHyper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="50%" stopColor="#E0E0E0" />
          <stop offset="100%" stopColor="#BDBDBD" />
        </linearGradient>
        <filter id="furTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        <radialGradient id="catEyeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E6EE9C" />
          <stop offset="80%" stopColor="#AFB42B" />
          <stop offset="100%" stopColor="#827717" />
        </radialGradient>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          {/* Subtle Breathing */}
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1; 0 0" dur="3s" repeatCount="indefinite" />
          
          {/* Ears with Twitching */}
          <g>
             <path d="M60 70 L40 20 L90 55 Z" fill="#E0E0E0">
                <animateTransform attributeName="transform" type="rotate" values="0 60 70; -3 60 70; 0 60 70" dur="5s" repeatCount="indefinite" />
             </path>
             <path d="M140 70 L160 20 L110 55 Z" fill="#E0E0E0">
                <animateTransform attributeName="transform" type="rotate" values="0 140 70; 3 140 70; 0 140 70" dur="4.5s" repeatCount="indefinite" />
             </path>
          </g>

          {/* Main Face */}
          <circle cx="100" cy="110" r="62" fill="url(#catFurHyper)" />
          
          {/* Eyes with Slit Pupil Animation */}
          <g>
            <circle cx="75" cy="100" r="14" fill="url(#catEyeGrad)" />
            <rect x="73.5" y="90" width="3" height="20" rx="1.5" fill="#1B1F23">
               <animate attributeName="width" values="3;1;3" dur="6s" repeatCount="indefinite" />
            </rect>
            
            <circle cx="125" cy="100" r="14" fill="url(#catEyeGrad)" />
            <rect x="123.5" y="90" width="3" height="20" rx="1.5" fill="#1B1F23">
               <animate attributeName="width" values="3;1;3" dur="6s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Whiskers with Vibration */}
          <g stroke="#9E9E9E" strokeWidth="1" opacity="0.6">
            <line x1="60" y1="120" x2="20" y2="110"><animate attributeName="x2" values="20;22;20" dur="0.1s" repeatCount="indefinite" /></line>
            <line x1="60" y1="130" x2="20" y2="130"><animate attributeName="x2" values="20;21;20" dur="0.12s" repeatCount="indefinite" /></line>
            <line x1="140" y1="120" x2="180" y2="110"><animate attributeName="x2" values="180;178;180" dur="0.1s" repeatCount="indefinite" /></line>
            <line x1="140" y1="130" x2="180" y2="130"><animate attributeName="x2" values="180;179;180" dur="0.12s" repeatCount="indefinite" /></line>
          </g>

          {/* Nose & Mouth */}
          <path d="M96 125 L104 125 L100 132 Z" fill="#FFAB91" />
          <path d="M100 132 Q100 142 90 142 M100 132 Q100 142 110 142" stroke="#9E9E9E" strokeWidth="2" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export default Cat;
