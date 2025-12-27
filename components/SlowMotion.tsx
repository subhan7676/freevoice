
import React from 'react';

const SlowMotion: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="slowFaceGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4338CA" />
        </radialGradient>
      </defs>

      <g filter="url(#ultraSoftShadow)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 5; 0 0" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
          
          {/* Main Face */}
          <path d="M40 120 Q40 55 100 55 Q160 55 160 120 Q160 170 100 175 Q40 170 40 120" fill="url(#slowFaceGrad)" />
          
          {/* Heavy Eyelids */}
          <g transform="translate(0, 5)">
            <path d="M65 95 Q80 85 95 95" stroke="#312E81" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M105 95 Q120 85 135 95" stroke="#312E81" strokeWidth="8" fill="none" strokeLinecap="round" />
            
            <circle cx="80" cy="110" r="8" fill="white" />
            <circle cx="80" cy="112" r="4" fill="#1E1B4B">
               <animate attributeName="cy" values="112;114;112" dur="10s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="120" cy="110" r="8" fill="white" />
            <circle cx="120" cy="112" r="4" fill="#1E1B4B">
               <animate attributeName="cy" values="112;114;112" dur="10s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Melting Clock */}
          <g transform="translate(140, 140) rotate(15)">
            <path d="M-15 -15 Q15 -25 30 0 L30 50 Q15 65 -15 50 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="2" opacity="0.9" />
            <line x1="5" y1="15" x2="5" y2="0" stroke="#1E1B4B" strokeWidth="2" strokeLinecap="round">
               <animateTransform attributeName="transform" type="rotate" from="0 5 15" to="360 5 15" dur="30s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Yawn Mouth */}
          <ellipse cx="100" cy="150" rx="18" ry="8" fill="#1E1B4B" opacity="0.3">
             <animate attributeName="ry" values="8;12;8" dur="6s" repeatCount="indefinite" />
          </ellipse>

          {/* Sleep Particles */}
          <g fill="#C7D2FE" fontStyle="italic" fontWeight="900">
             <text x="165" y="60" fontSize="16">Z<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" /><animate attributeName="y" values="60;40" dur="4s" repeatCount="indefinite" /></text>
             <text x="180" y="45" fontSize="22">Z<animate attributeName="opacity" values="0;1;0" dur="4s" begin="2s" repeatCount="indefinite" /><animate attributeName="y" values="45;25" dur="4s" begin="2s" repeatCount="indefinite" /></text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SlowMotion;
