import React from 'react';
import { Sparkles, Check, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import { INVESTMENT_TIERS, MARKETING_PLANS, PAYMENT_MILESTONES } from '../../data/proposalData';

export const InvestmentSummary: React.FC = () => {
  return (
    <section id="investment-summary" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 12 · INVESTMENT SUMMARY
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        Complete Commercial Summary.
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-12 leading-relaxed">
        A clear, structured breakdown separating one-time digital commerce engineering from ongoing monthly growth execution.
      </p>

      {/* Side-by-Side Split Architecture: Commerce vs Marketing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left: Website / Digital Commerce (One-Time) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0B172E] to-[#060E1D] border-2 border-blue-500/40 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
                  ONE-TIME PLATFORM ASSET
                </span>
                <h3 className="text-2xl font-extrabold text-white font-heading mt-0.5">
                  WEBSITE / DIGITAL COMMERCE
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-blue-500/20 text-blue-300 font-bold">
                Fixed Cost
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Builds and deploys the permanent digital store infrastructure owned 100% by Big Deals upon launch.
            </p>

            <div className="space-y-4 mb-8">
              {INVESTMENT_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`p-4 rounded-2xl border flex items-center justify-between ${
                    tier.isRecommended
                      ? 'bg-amber-950/20 border-amber-500/40'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white font-heading">{tier.name}</span>
                      {tier.isRecommended && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{tier.stageLabel}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-xl font-extrabold text-white font-heading">{tier.price}</span>
                    <span className="text-[10px] text-slate-500 font-mono block">one-time</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
            No recurring license fees. Codebase and assets transferred upon handover.
          </div>
        </div>

        {/* Right: Digital Growth & Marketing (Monthly Retainer) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0F1E3D] to-[#071021] border-2 border-slate-700 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                  OPTIONAL RECURRING SERVICE
                </span>
                <h3 className="text-2xl font-extrabold text-white font-heading mt-0.5">
                  MARKETING
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-white/10 text-slate-300 font-bold font-mono">
                Monthly Retainer
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Drives consistent discovery, local search traffic, and regular deal campaigns around the store.
            </p>

            <div className="space-y-4 mb-8">
              {MARKETING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-4 rounded-2xl border flex items-center justify-between ${
                    plan.isRecommended
                      ? 'bg-blue-950/40 border-blue-500/40'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white font-heading">{plan.name}</span>
                      {plan.isRecommended && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500 text-white font-black">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono truncate max-w-[200px] block">
                      {plan.description}
                    </span>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="text-xl font-extrabold text-white font-heading">{plan.price}</span>
                    <span className="text-[10px] text-slate-500 font-mono block">/month</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-amber-300 font-mono font-bold">
            Notice: Advertising spend is separate and paid directly to ad platforms.
          </div>
        </div>
      </div>

      {/* Structured Milestone Breakdown for Option 03 */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <span className="text-xs font-mono uppercase text-amber-400 font-bold">
              PAYMENT STRUCTURE (OPTION 03 · ₹89,900)
            </span>
            <h4 className="text-lg font-bold text-white font-heading">
              3-Stage Milestone Payment Schedule
            </h4>
          </div>
          <span className="text-xs font-mono text-slate-400">Tied to concrete deliverables</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PAYMENT_MILESTONES.map((m) => (
            <div key={m.stage} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center justify-between mb-1 text-xs font-mono">
                <span className="text-amber-400 font-bold">Stage {m.stage} ({m.percentage})</span>
                <span className="text-white font-bold text-base font-heading">{m.amount}</span>
              </div>
              <div className="text-xs font-bold text-slate-200 font-heading mb-1">{m.name}</div>
              <p className="text-[11px] text-slate-400 leading-snug">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
