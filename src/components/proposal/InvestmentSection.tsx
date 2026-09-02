import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { INVESTMENT_TIERS } from '../../data/proposalData';

interface InvestmentSectionProps {
  onSelectTier?: (tierId: string) => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="investment" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 09 · COMMERCIAL TRANSPARENCY
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        THREE WAYS TO START.
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-4 leading-relaxed">
        Transparent, fixed one-time project tiers tailored to Big Deals' operational readiness. No hidden charges, no fabricated discount gimmicks, and no lock-in.
      </p>

      {/* Honest Advisory Sentence */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs sm:text-sm text-blue-300 mb-12">
        <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
        <span>INNITYX recommends choosing the level that matches Big Deals' current operational readiness — not simply the largest package.</span>
      </div>

      {/* Three Tier Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {INVESTMENT_TIERS.map((tier) => {
          const isRec = tier.isRecommended;
          return (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                isRec
                  ? 'bg-gradient-to-b from-[#0C1833] via-[#081226] to-[#050C1A] border-2 border-amber-500/60 shadow-2xl shadow-amber-500/10 lg:-translate-y-2'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Recommended Badge */}
              {isRec && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-mono text-xs font-black uppercase px-4 py-1 rounded-full tracking-wider shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>RECOMMENDED STARTING POINT</span>
                </div>
              )}

              <div>
                {/* Stage & Option Label */}
                <div className="flex items-center justify-between gap-2 mb-2 font-mono">
                  <span className="text-xs font-bold text-slate-400">{tier.optionLabel}</span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                    isRec ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20' : 'bg-white/5 text-slate-300'
                  }`}>
                    {tier.stageLabel}
                  </span>
                </div>

                {/* Package Name */}
                <h3 className="text-xl font-extrabold text-white font-heading tracking-wide mb-2">
                  {tier.name}
                </h3>

                <p className="text-xs text-slate-400 min-h-[36px] mb-6 leading-relaxed">
                  {tier.purpose}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
                      {tier.price}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Included Deliverables:
                  </div>
                  <ul className="space-y-2.5">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isRec
                              ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={feat.startsWith('Everything') ? 'font-semibold text-white' : ''}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="pt-6 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Full code & asset ownership handed over upon launch.</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
