
import React from 'react';

const Happy: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="joySun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>
        <filter id="sparkleBlur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      <g>
        {/* Fixed: Removed non-standard pivot attribute and used transformOrigin style for centering the scale animation */}
        <g style={{ transformOrigin: '100px 110px' }}>
          <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="3s" repeatCount="indefinite" />
        </g>
        
        {/* Floating Joy Particles */}
        <g fill="#FDE047" filter="url(#sparkleBlur)">
          <path d="M40 50 L42 45 L45 50 L40 52 Z">
             <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M160 40 L162 35 L165 40 L160 42 Z">
             <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
          </path>
          <circle cx="170" cy="120" r="2">
             <animate attributeName="cy" values="120;100" dur="2s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Head */}
        <circle cx="100" cy="110" r="65" fill="url(#joySun)" />
        
        {/* Rosy Cheeks */}
        <circle cx="65" cy="125" r="15" fill="#F87171" opacity="0.3">
           <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="135" cy="125" r="15" fill="#F87171" opacity="0.3">
           <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Eyes */}
        <g>
          <path d="M70 95 Q80 85 90 95" stroke="#78350F" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M110 95 Q120 85 130 95" stroke="#78350F" strokeWidth="6" fill="none" strokeLinecap="round" />
          
          <circle cx="80" cy="112" r="8" fill="#78350F" />
          <circle cx="83" cy="109" r="2.5" fill="white" />
          
          <circle cx="120" cy="112" r="8" fill="#78350F" />
          <circle cx="123" cy="109" r="2.5" fill="white" />
        </g>

        {/* Wide Laughing Smile */}
        <path d="M65 135 Q100 165 135 135 Q100 155 65 135" fill="#78350F" />
      </g>
    </svg>
  );
};

export default Happy;