import React from 'react';

interface GoldCoinProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export const GoldCoin: React.FC<GoldCoinProps> = ({ size = 48, className = '', glow = true }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-full blur-md bg-[#F59E0B]/30 animate-pulse-glow"
          style={{ width: size * 1.1, height: size * 1.1, left: '-5%', top: '-5%' }}
        />
      )}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Outer Rim Gradient */}
          <linearGradient id="coinGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="30%" stopColor="#EAB308" />
            <stop offset="70%" stopColor="#CA8A04" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Inner Surface Gradient */}
          <radialGradient id="coinGoldFace" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </radialGradient>

          {/* Bevel Highlight */}
          <linearGradient id="coinHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer Coin Body */}
        <circle cx="50" cy="50" r="48" fill="url(#coinGoldRim)" stroke="#FEF08A" strokeWidth="1" />
        
        {/* Recessed Inner Rim */}
        <circle cx="50" cy="50" r="41" fill="url(#coinGoldFace)" stroke="#78350F" strokeWidth="1" />

        {/* Traditional Imperial Square Cut-Out with Rounded Corners */}
        <rect
          x="36"
          y="36"
          width="28"
          height="28"
          rx="3"
          fill="#1C0306"
          stroke="url(#coinGoldRim)"
          strokeWidth="2.5"
        />

        {/* Decorative Subtle Auspicious Dots (4 Cardinal Points) */}
        <circle cx="50" cy="18" r="2.5" fill="#FEF08A" />
        <circle cx="50" cy="82" r="2.5" fill="#FEF08A" />
        <circle cx="18" cy="50" r="2.5" fill="#FEF08A" />
        <circle cx="82" cy="50" r="2.5" fill="#FEF08A" />

        {/* Diagonal Bevel Highlight */}
        <circle cx="50" cy="50" r="46" fill="url(#coinHighlight)" />
      </svg>
    </div>
  );
};
