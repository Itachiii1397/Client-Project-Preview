import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Check } from 'lucide-react';

export const DeRiskSection: React.FC = () => {
  const deriskStages = [
    {
      phase: '01 · START',
      cost: '₹49,900',
      title: 'Commerce Foundation',
      desc: 'Launch the active digital storefront, 60+ dynamic products, reference savings, and direct cart-to-WhatsApp order flow.',
      highlight: 'Immediate market presence & sales channel',
      badge: 'Immediate Launch',
    },
    {
      phase: '02 · OPERATE',
      cost: 'Optional Next Step',
      title: 'Operational Controls',
      desc: 'Add the administrative portal, live stock toggles, dynamic Deal-of-the-Day manager, and staff management workflows.',
      highlight: 'Empowers store team without developer dependency',
      badge: 'Operational Scale',
    },
    {
      phase: '03 · GROW',
      cost: 'Flexible Retainer',
      title: 'Traffic & Content Engine',
      desc: 'Systematic Google local search optimization, Instagram/Facebook deal creatives, and WhatsApp customer broadcast campaigns.',
      highlight: 'Builds consistent inbound shopper discovery',
      badge: 'Demand Generation',
    },
    {
      phase: '04 · SCALE',
      cost: 'Future Roadmap',
      title: 'Enterprise & Automation',
      desc: 'Instant payment gateways (UPI/Cards), customer retention CRM, competitor price intelligence, and AI shopping assistance.',
      highlight: 'Implemented only when transaction volume demands it',
      badge: 'Advanced Expansion',
    },
  ];

  return (
    <section id="derisk" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
          SECTION 10 · RISK MITIGATION
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        YOU DON'T HAVE TO BUILD EVERYTHING ON DAY ONE.
      </h2>

      {/* Narrative Lead */}
      <div className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed space-y-4 mb-12">
        <p>
          Prudent digital investment should always follow business readiness. We engineer modular architectures that allow Big Deals to begin at a sensible entry point and expand only as customer traction validates the demand.
        </p>
        <p className="text-emerald-400 font-semibold italic text-base">
          "The roadmap allows Big Deals to begin at the right investment level without closing the door to future capabilities."
        </p>
      </div>

      {/* Phased Pathway Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {deriskStages.map((stage, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono">
                <span className="text-xs font-bold text-white tracking-wider">
                  {stage.phase}
                </span>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-white/5 text-emerald-300 border border-emerald-500/20">
                  {stage.badge}
                </span>
              </div>

              <div className="text-xs font-mono text-amber-400 font-bold mb-1">
                {stage.cost}
              </div>
              <h4 className="text-base font-bold text-white font-heading mb-2">
                {stage.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {stage.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] text-slate-400 font-mono">
              ★ {stage.highlight}
            </div>
          </div>
        ))}
      </div>

      {/* Reassurance Banner */}
      <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200/90 flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span>
          <strong className="text-white">Zero Lock-In Commitment: </strong>
          There is no obligation to purchase future phases. Every layer is built on clean, modern standards so your team retains complete freedom and control.
        </span>
      </div>
    </section>
  );
};
