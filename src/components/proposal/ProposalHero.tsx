import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';

interface ProposalHeroProps {
  onExploreClick: () => void;
  onPreviewClick: () => void;
}

export const ProposalHero: React.FC<ProposalHeroProps> = ({ onExploreClick, onPreviewClick }) => {
  return (
    <section
      id="cover"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(229,169,25,0.06),transparent)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Metadata Badges */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-300">
            INNITYX SOLUTIONS PVT. LTD.
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-xs font-mono text-amber-400 font-medium">PRIVATE PROPOSAL · 2026</span>
        </div>

        {/* Co-Branded Lockup Banner */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-semibold">
          <span className="text-white tracking-normal font-bold">INNITYX</span>
          <span className="text-blue-500 font-bold text-base">×</span>
          <span className="text-amber-400 tracking-normal font-bold">BIG DEALS</span>
          <span className="text-slate-600">·</span>
          <span className="uppercase text-slate-400 font-normal tracking-wider">Digital Commerce Blueprint</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-heading mb-6 max-w-4xl">
          FROM LOCAL DEALS <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300 bg-clip-text text-transparent">
            TO DIGITAL DISCOVERY.
          </span>
        </h1>

        {/* Subheadline - Credible & Clear */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed mb-4">
          An online sales channel designed around discovery, conversion and repeat business.
        </p>

        {/* Reading Guidance Microcopy */}
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed mb-10 font-mono">
          This proposal separates what can be launched today from capabilities that can be added as Big Deals grows.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE THE BLUEPRINT</span>
            <ArrowDown className="w-4 h-4 text-blue-200" />
          </button>

          <button
            onClick={onPreviewClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-100 font-semibold text-sm tracking-wide border border-white/15 hover:border-amber-400/50 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>VIEW LIVE PREVIEW</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* Defensible Credibility Line */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>A working customer experience built around Big Deals' current catalogue is already available to explore.</span>
        </div>
      </div>
    </section>
  );
};
