import React, { useState, useEffect } from 'react';
import { TODAYS_BIG_DEALS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { Sparkles, Clock, Flame, Zap, ArrowRight } from 'lucide-react';

interface FeaturedDealsProps {
  onQuickView: (product: Product) => void;
  onExploreMore: () => void;
}

export const FeaturedDeals: React.FC<FeaturedDealsProps> = ({ onQuickView, onExploreMore }) => {
  // Countdown Timer for daily deal cycle
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 35, seconds: 22 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="todays-deals" className="py-20 bg-[#050B17] relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/40 text-[#E5A919] text-xs font-black uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>DEAL SPOTLIGHT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
              TODAY&apos;S BIG <span className="text-[#E5A919]">DEALS</span>
            </h2>
            <p className="mt-2 text-base text-slate-300">
              The prices worth checking twice. Hand-picked open-box & surplus products offering maximum cash savings.
            </p>
          </div>

          {/* Daily Batch Countdown Timer */}
          <div className="flex items-center gap-3 bg-[#0B1528] p-3 rounded-2xl border border-slate-700/80 shadow-lg self-start md:self-auto">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <Clock className="w-4 h-4 text-[#E5A919]" />
              <span className="hidden sm:inline">Daily Batch Refresh:</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono-price text-sm font-black text-white">
              <span className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[#FFE27A]">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[#FFE27A]">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[#FFE27A]">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TODAYS_BIG_DEALS.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
          ))}
        </div>

        {/* Bottom Explore Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreMore}
            className="px-8 py-4 rounded-xl bg-[#172554] hover:bg-[#1E3A8A] text-white font-bold text-sm uppercase tracking-wider border border-[#3B82F6]/50 shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer hover:border-[#E5A919]"
          >
            <span>Explore Full Catalog (64 Products)</span>
            <ArrowRight className="w-4 h-4 text-[#E5A919]" />
          </button>
        </div>
      </div>
    </section>
  );
};
