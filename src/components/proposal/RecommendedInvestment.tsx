import React from 'react';
import { Sparkles, Check, ShieldCheck, CreditCard, Lock, ArrowRight, Layers } from 'lucide-react';
import { PAYMENT_MILESTONES } from '../../data/proposalData';

export const RecommendedInvestment: React.FC = () => {
  return (
    <section id="recommended" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400">
          SECTION 15 · EXECUTIVE RECOMMENDATION
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        THE RECOMMENDED STARTING POINT
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-12 leading-relaxed">
        For Big Deals to achieve full inventory flexibility and staff operational independence, we recommend launching with the complete Big Deals Commerce scope structured on milestone-based delivery.
      </p>

      {/* Recommended Master Package Showcase Card */}
      <div className="rounded-3xl bg-gradient-to-b from-[#0F1E3D] via-[#09152C] to-[#050C1A] border-2 border-amber-500/60 p-8 sm:p-12 shadow-2xl shadow-amber-500/10 mb-12 relative overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-extrabold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRIMARY COMMERCIAL PROPOSAL</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              BIG DEALS COMMERCE
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Turnkey digital commerce platform including the 60+ catalogue, reference savings engine, 3D showroom, WhatsApp ordering, and staff administration portal.
            </p>
          </div>

          <div className="text-left lg:text-right flex-shrink-0">
            <div className="text-4xl sm:text-6xl font-extrabold text-white font-heading">
              ₹89,900
            </div>
            <div className="text-xs font-mono text-amber-400/90 uppercase tracking-wider mt-1 font-bold">
              ONE-TIME PROJECT INVESTMENT
            </div>
          </div>
        </div>

        {/* Milestone Payment Structure */}
        <div className="mt-10">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold mb-6">
            Structured 3-Stage Milestone Payment Schedule:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAYMENT_MILESTONES.map((m) => (
              <div
                key={m.stage}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      STAGE {m.stage}
                    </span>
                    <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-white/10 text-white">
                      {m.percentage}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white font-heading mb-1">
                    {m.name}
                  </h4>
                  <div className="text-2xl font-extrabold text-white font-heading mb-3">
                    {m.amount}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staged Implementation Option Note */}
        <div className="mt-10 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white">Flexible Entry Option: </strong>
          If preferred, a staged implementation can also begin with <strong>Ecommerce Starter at ₹49,900</strong> to launch the front-end sales channel first, upgrading to the administrative backend as inventory turnover scales.
        </div>
      </div>

      {/* Commercial Terms & Ownership Transparency */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Third-party costs */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 font-bold text-white text-sm mb-3">
            <CreditCard className="w-4 h-4 text-blue-400" />
            <span>Third-Party Direct Costs</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Domain registration, cloud hosting/infrastructure (Vercel/Cloudflare/AWS), official WhatsApp Cloud API, payment gateway merchant fees, and SMS services are billed directly by their respective providers at actuals where applicable.
          </p>
        </div>

        {/* Client Ownership */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 font-bold text-white text-sm mb-3">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>100% Client Asset Ownership</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            All code repositories, registered domain names, admin credentials, data structures, and digital assets remain 100% under direct Big Deals ownership upon completion and handover.
          </p>
        </div>
      </div>
    </section>
  );
};
