import React from 'react';
import { ArrowUpRight, MessageSquare, ShoppingBag, CheckCircle, ShieldCheck } from 'lucide-react';
import { INNITYX_DISCUSS_URL } from '../../data/proposalData';

interface ProposalFinalCTAProps {
  onExplorePreview: () => void;
}

export const ProposalFinalCTA: React.FC<ProposalFinalCTAProps> = ({ onExplorePreview }) => {
  return (
    <section id="final-cta" className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center relative overflow-hidden">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.12),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold uppercase text-slate-300 mb-8">
          <span>INNITYX SOLUTIONS × BIG DEALS</span>
        </div>

        {/* Main Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-heading leading-[1.1] mb-6">
          BIG DEALS DOESN'T NEED <br />
          TO STOP AT A WEBSITE. <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-white bg-clip-text text-transparent">
            IT NEEDS A BETTER WAY TO BE DISCOVERED.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-slate-300 font-medium font-heading mb-10 max-w-2xl">
          Let's build the next stage — properly, and when the business is ready for it.
        </p>

        {/* Dual Primary Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onExplorePreview}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base tracking-wide shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0 group"
          >
            <ShoppingBag className="w-5 h-5 text-slate-950" />
            <span>EXPLORE THE BIG DEALS PREVIEW</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={INNITYX_DISCUSS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>DISCUSS THE PROJECT</span>
          </a>
        </div>

        {/* Footer Credit & Verification Notes */}
        <div className="pt-10 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">INNITYX SOLUTIONS PVT. LTD.</span>
            <span>· Digital Commerce & Product Engineering</span>
          </div>
          <div>
            Prepared for Big Deals Leadership · 2026
          </div>
        </div>
      </div>
    </section>
  );
};
