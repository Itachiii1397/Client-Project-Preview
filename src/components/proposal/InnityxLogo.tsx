import React from 'react';

interface InnityxLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const InnityxLogo: React.FC<InnityxLogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';
  const isXLarge = size === 'xl';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official INNITYX Logo Mark */}
      <div
        className={`relative flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 bg-[#061022] ring-1 ring-blue-500/30 shadow-lg shadow-blue-950/50 ${
          isSmall
            ? 'w-8 h-8'
            : isLarge
            ? 'w-14 h-14'
            : isXLarge
            ? 'w-16 h-16'
            : 'w-10 h-10'
        }`}
      >
        <img
          src="/assets/innityx-logo.jpg"
          alt="INNITYX"
          className="w-full h-full object-cover rounded-full select-none"
          loading="eager"
        />
      </div>

      {/* Brand Typographic Lockup */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2 leading-none">
          <span
            className={`font-black tracking-wider text-white font-heading ${
              isSmall ? 'text-base' : isLarge ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
            }`}
          >
            INNITYX
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`font-medium tracking-wide text-slate-400 font-mono mt-0.5 ${
              isSmall ? 'text-[9px]' : isLarge ? 'text-xs' : 'text-[10px]'
            }`}
          >
            Digital Product & Growth Studio
          </span>
        )}
      </div>
    </div>
  );
};

