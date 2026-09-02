import React from 'react';
import { Check, Sparkles, TrendingUp, Megaphone, AlertCircle } from 'lucide-react';
import { MARKETING_PLANS } from '../../data/proposalData';

export const MarketingSection: React.FC = () => {
  return (
    <section id="marketing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 13 · DEMAND GENERATION
        </span>
      </div>

      {/* Main Headline & Subheadline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-3 max-w-3xl">
        BUILDING THE STORE IS ONLY HALF THE JOB.
      </h2>

      <p className="text-lg sm:text-xl text-blue-300 font-medium max-w-3xl mb-4 font-heading">
        A commerce platform without discovery is an empty storefront.
      </p>

      <p className="text-base text-slate-300 max-w-3xl mb-12 leading-relaxed">
        To turn the Big Deals digital catalogue into consistent customer traffic, we offer optional monthly growth retainers covering local SEO, social media deal creatives, and WhatsApp campaign management.
      </p>

      {/* Three Marketing Retainer Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
        {MARKETING_PLANS.map((plan) => {
          const isRec = plan.isRecommended;
          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                isRec
                  ? 'bg-gradient-to-b from-[#0F1E3D] via-[#0A152C] to-[#060D1D] border-2 border-blue-500/60 shadow-2xl shadow-blue-500/15 lg:-translate-y-2'
                  : 'bg-slate-900/60 border border-slate-800'
              }`}
            >
              {isRec && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-mono text-xs font-extrabold uppercase px-4 py-1 rounded-full tracking-wider shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>RECOMMENDED STARTING POINT</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-white font-heading tracking-wide">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 min-h-[32px] mb-6 leading-relaxed">
                  {plan.purpose}
                </p>

                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Included Growth Services:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isRec
                              ? 'bg-blue-400/20 text-blue-400 border border-blue-400/30'
                              : 'bg-slate-800 text-slate-400'
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

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Cancel or adjust anytime with 30 days notice.
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparent Conditions Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2 max-w-4xl">
        <div className="flex items-center gap-2 font-bold text-white text-sm">
          <AlertCircle className="w-4 h-4 text-blue-400" />
          <span>Transparent Growth Terms</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-slate-300">
          <div>
            <strong className="text-slate-200">1. Marketing is completely optional: </strong>
            Big Deals can launch the digital commerce platform standalone without committing to any ongoing retainer.
          </div>
          <div>
            <strong className="text-slate-200">2. Advertising spend is separate: </strong>
            Any direct ad spend (Meta Ads, Google Ads) is paid directly by the client to advertising platforms at actuals.
          </div>
        </div>
      </div>
    </section>
  );
};
