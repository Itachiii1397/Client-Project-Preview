import React from 'react';
import { Flame, Zap, Sparkles, TrendingDown, ArrowUpRight } from 'lucide-react';
import { Category } from '../types';

interface DealRadarProps {
  onSelectCategory: (category: Category) => void;
}

export const DealRadar: React.FC<DealRadarProps> = ({ onSelectCategory }) => {
  const radarItems = [
    { label: 'PIGEON HEALTHIFRY AIR FRYER', discount: 'SAVE ₹516', icon: Flame, color: 'text-amber-400', category: 'Kitchen Appliances' as Category },
    { label: 'BRAUN SERIES 9 TRIMMER', discount: '54% OFF', icon: Zap, color: 'text-yellow-400', category: 'Personal Care' as Category },
    { label: 'YONEX GRAPHITE RACQUETS', discount: '50% OFF', icon: Sparkles, color: 'text-sky-400', category: 'Sports' as Category },
    { label: 'PREETHI ZODIAC MIXER', discount: 'SAVE ₹3,548', icon: TrendingDown, color: 'text-emerald-400', category: 'Kitchen Appliances' as Category },
    { label: 'HAVELLS INSTANT GEYSER', discount: 'SAVE ₹5,631', icon: Flame, color: 'text-amber-400', category: 'Household' as Category },
    { label: 'SMARTWATCH JET BLACK', discount: '₹1,049 ONLY', icon: Zap, color: 'text-purple-400', category: 'Personal Care' as Category },
    { label: 'HUGGIES WONDER PANTS', discount: 'SAVE ₹182', icon: Sparkles, color: 'text-pink-400', category: 'Baby Care' as Category },
    { label: 'RUPA TOPMAN MENS VEST', discount: 'SAVE ₹24', icon: TrendingDown, color: 'text-blue-400', category: 'Undergarments' as Category },
  ];

  // Repeat twice for seamless infinite marquee loop
  const displayItems = [...radarItems, ...radarItems];

  return (
    <div className="relative w-full bg-[#081024] border-y border-[#1E3A8A]/40 overflow-hidden py-3 select-none">
      {/* Glow sides for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050B17] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050B17] to-transparent z-10 pointer-events-none" />

      {/* Label Badge */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#172554] border border-[#3B82F6]/40 shadow-md">
        <span className="w-2 h-2 rounded-full bg-[#E5A919] animate-ping" />
        <span className="text-[11px] font-black uppercase tracking-wider text-white">DEAL RADAR</span>
      </div>

      <div className="animate-ticker flex items-center gap-6 pl-4 md:pl-32">
        {displayItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={`${item.label}-${idx}`}
              onClick={() => onSelectCategory(item.category)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1D3D]/80 hover:bg-[#1E3A8A] border border-slate-800 hover:border-[#E5A919]/50 transition-all text-xs font-semibold text-slate-200 hover:text-white cursor-pointer group flex-shrink-0"
            >
              <Icon className={`w-3.5 h-3.5 ${item.color}`} />
              <span className="tracking-wide uppercase font-bold">{item.label}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#E5A919]/20 text-[#E5A919] border border-[#E5A919]/30">
                {item.discount}
              </span>
              <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
