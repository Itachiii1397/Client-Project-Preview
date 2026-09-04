import React from 'react';
import { ArrowDown, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { InnityxLogo } from './InnityxLogo';

interface ProposalHeroProps {
  onExploreClick: () => void;
  onPreviewClick: () => void;
}

export const ProposalHero: React.FC<ProposalHeroProps> = ({ onExploreClick, onPreviewClick }) => {
  return (
    <section
      id="cover"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Subtle Radial Lighting */}
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
        {/* Prominent INNITYX Studio Branding */}
        <div className="mb-8">
          <InnityxLogo size="lg" showSubtitle={true} className="justify-center" />
        </div>

        {/* Co-Branded Lockup Banner */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-6 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-semibold">
          <span className="text-white tracking-normal font-bold">INNITYX</span>
          <span className="text-blue-500 font-bold">×</span>
          <span className="text-amber-400 tracking-normal font-bold">BIG DEALS</span>
          <span className="text-slate-600">·</span>
          <span className="uppercase text-slate-300 font-normal">Digital Commerce & Growth Proposal</span>
        </div>

        {/* Exact Headline as Specified */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-heading mb-6 max-w-4xl">
          Make the Big Deals advantage{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300 bg-clip-text text-transparent">
            easier to discover.
          </span>
        </h1>

        {/* Exact Supporting Message as Specified */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-3xl leading-relaxed mb-10">
          An interactive proposal showing how Big Deals can move from digital presence to digital commerce — at the right stage for the business.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE THE PROPOSAL</span>
            <ArrowDown className="w-4 h-4 text-blue-200" />
          </button>

          <button
            onClick={onPreviewClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-100 font-bold text-sm tracking-wide border border-white/15 hover:border-amber-400/50 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>VIEW LIVE BIG DEALS PREVIEW</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
          </button>
        </div>

        {/* Reading Guidance Microcopy */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
          <span>Self-contained interactive sales presentation & product demonstration</span>
        </div>
      </div>
    </section>
  );
};
