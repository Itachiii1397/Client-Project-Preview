import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = false, size = 'md' }) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon Badge */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1E40AF] via-[#172554] to-[#0A1329] border border-[#3B82F6]/30 shadow-lg shadow-[#1D4ED8]/20 flex-shrink-0 ${
          isSmall ? 'w-8 h-8 rounded-lg' : isLarge ? 'w-12 h-12 rounded-2xl' : 'w-10 h-10'
        }`}
      >
        {/* Glow backdrop */}
        <div className="absolute inset-0 rounded-xl bg-[#E5A919]/10 blur-sm pointer-events-none" />

        {/* Dynamic Graphic: Bold B with Gold Spark / Discount Tag slash */}
        <svg
          viewBox="0 0 40 40"
          className={isSmall ? 'w-5 h-5' : isLarge ? 'w-7 h-7' : 'w-6 h-6'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized B with retail price cut */}
          <path
            d="M9 8C9 6.89543 9.89543 6 11 6H23C26.866 6 30 9.13401 30 13C30 15.6586 28.5195 17.9717 26.3541 19.1413C29.1719 20.2526 31.1818 22.9912 31.1818 26.2C31.1818 30.5078 27.6896 34 23.3818 34H11C9.89543 34 9 33.1046 9 32V8Z"
            fill="#1D4ED8"
          />
          <path
            d="M14 11H22C23.6569 11 25 12.3431 25 14C25 15.6569 23.6569 17 22 17H14V11Z"
            fill="#FFFFFF"
          />
          <path
            d="M14 21H23C24.6569 21 26 22.3431 26 24C26 25.6569 24.6569 27 23 27H14V21Z"
            fill="#FFFFFF"
          />
          {/* Gold Lightning / Spark Tag Accent */}
          <path
            d="M26 4L22 15H29L20 30L23 18H17L26 4Z"
            fill="#E5A919"
            stroke="#0A1329"
            strokeWidth="1.2"
          />
        </svg>

        {/* Gold Corner Notch */}
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E5A919] ring-2 ring-[#050B17]" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight text-white font-heading ${
              isSmall ? 'text-lg' : isLarge ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            }`}
          >
            BIG <span className="text-[#E5A919]">DEALS</span>
          </span>
          <span className="hidden sm:inline-block text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#E5A919]/15 text-[#E5A919] border border-[#E5A919]/30 tracking-wider">
            RETAIL
          </span>
        </div>
        {showTagline && (
          <span
            className={`font-semibold tracking-wider uppercase text-slate-400 font-heading mt-0.5 ${
              isSmall ? 'text-[9px]' : 'text-[10px]'
            }`}
          >
            Branded Products. Open-Box Prices.
          </span>
        )}
      </div>
    </div>
  );
};
