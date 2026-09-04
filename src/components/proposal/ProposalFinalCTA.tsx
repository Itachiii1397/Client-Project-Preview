import React from 'react';
import { Calendar, Mail, ArrowUpRight, ShoppingBag } from 'lucide-react';
import {
  INNITYX_CONTACT_EMAIL,
  INNITYX_DISCUSS_MAILTO,
  INNITYX_SCHEDULE_URL,
  INNITYX_STUDIO_NAME,
  INNITYX_TAGLINE,
  INNITYX_FOUNDER,
} from '../../data/proposalData';
import { InnityxLogo } from './InnityxLogo';

interface ProposalFinalCTAProps {
  onExplorePreview: () => void;
}

export const ProposalFinalCTA: React.FC<ProposalFinalCTAProps> = ({ onExplorePreview }) => {

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center relative overflow-hidden">
      {/* Subtle Background Architectural Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.12),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Prominent INNITYX Branding */}
        <div className="mb-8">
          <InnityxLogo size="lg" showSubtitle={true} className="justify-center" />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold uppercase text-slate-300 mb-8">
          <span>INNITYX × BIG DEALS</span>
        </div>

        {/* Main Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight mb-6">
          Let&apos;s build the next stage —{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300 bg-clip-text text-transparent">
            properly, and when the business is ready for it.
          </span>
        </h2>

        {/* Contact Email & Founder Reference */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm font-mono text-slate-300 mb-10">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <a
              href={`mailto:${INNITYX_CONTACT_EMAIL}`}
              className="text-white hover:text-blue-400 underline underline-offset-4 font-bold transition-colors"
            >
              {INNITYX_CONTACT_EMAIL}
            </a>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-400">{INNITYX_FOUNDER}</span>
        </div>

        {/* Action Buttons: DISCUSS WITH INNITYX & SCHEDULE A MEETING */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* Discuss with INNITYX */}
          <a
            href={INNITYX_DISCUSS_MAILTO}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-4 h-4" />
            <span>DISCUSS WITH INNITYX</span>
          </a>

          {/* Schedule a Meeting */}
          <a
            href={INNITYX_SCHEDULE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base tracking-wide border border-white/20 hover:border-amber-400/50 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>SCHEDULE A MEETING</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Preview Jump Button */}
        <div className="pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white font-heading">{INNITYX_STUDIO_NAME}</span>
            <span>· {INNITYX_TAGLINE}</span>
          </div>

          <button
            onClick={onExplorePreview}
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Switch to Big Deals Storefront Preview →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
