import React from 'react';
import { ArrowDown, Check, Store, ShieldCheck, Tag, Users, Zap, Search, ArrowRight } from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  const assets = [
    { label: 'Real Products', detail: 'Curated physical inventory across kitchen appliances, sports, personal care, and essentials.' },
    { label: 'Real Deals', detail: 'Substantial, transparent price differences compared to standard market reference prices.' },
    { label: 'Physical Retail Presence', detail: 'An established footprint providing tangible inventory credibility and local customer access.' },
    { label: 'Local Customer Trust', detail: 'Existing direct customer relationships built on authentic retail value and responsiveness.' },
    { label: 'Attention Advantage', detail: 'Tangible discount savings that give value-conscious shoppers an immediate reason to pause and browse.' },
  ];

  const discoveryChannels = [
    { label: 'GOOGLE SEARCH', sub: 'High intent local queries' },
    { label: 'INSTAGRAM', sub: 'Visual deal showcase' },
    { label: 'FACEBOOK', sub: 'Community & groups' },
    { label: 'WHATSAPP', sub: 'Broadcasts & shares' },
    { label: 'REFERRALS', sub: 'Word-of-mouth' },
  ];

  const conversionFunnel = [
    { step: 'DISCOVER', desc: 'Find deals on mobile or desktop' },
    { step: 'COMPARE', desc: 'Inspect market MRP vs Big Deals' },
    { step: 'SAVE', desc: 'Clear real-time savings tally' },
    { step: 'ORDER', desc: 'Direct WhatsApp checkout flow' },
    { step: 'RETURN', desc: 'Check back for daily arrivals' },
  ];

  return (
    <section id="opportunity" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 02 · STRATEGIC THESIS
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-3xl">
        BIG DEALS ALREADY HAS THE HARD PART.
      </h2>

      {/* Narrative Lead */}
      <div className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed space-y-4 mb-10">
        <p>
          Big Deals already has something many new online businesses spend months and substantial capital trying to establish:
        </p>

        {/* Existing Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {assets.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="font-bold text-sm text-white font-heading">{item.label}</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Central Strategic Positioning Callout */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-amber-950/30 border border-white/10 mb-14">
        <div className="space-y-3 max-w-3xl">
          <p className="text-xl sm:text-2xl font-bold text-white font-heading">
            Big Deals already competes on price.
          </p>
          <p className="text-xl sm:text-2xl font-extrabold text-amber-400 font-heading">
            The opportunity is to make that advantage visible wherever customers are looking.
          </p>
          <div className="pt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-bold text-blue-300">
            <span>Google</span>
            <span className="text-slate-500">→</span>
            <span>Social</span>
            <span className="text-slate-500">→</span>
            <span className="text-amber-400">Big Deals</span>
            <span className="text-slate-500">→</span>
            <span className="text-emerald-400">WhatsApp</span>
            <span className="text-slate-500">→</span>
            <span className="text-white">Purchase</span>
          </div>
        </div>
      </div>

      {/* Visual Funnel / Flow Diagram */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0B132B]/80 border border-white/10 shadow-2xl">
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
            DIGITAL DISCOVERY & COMMERCE ARCHITECTURE
          </span>
          <h3 className="text-xl font-bold text-white mt-1 font-heading">
            Connecting Acquisition Channels to Direct Orders
          </h3>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Top Level: Acquisition Feeds */}
          <div className="w-full">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-3 text-center">
              Customer Acquisition Channels
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {discoveryChannels.map((chan, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-xs font-bold font-mono text-blue-300">{chan.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{chan.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Central Down Arrow */}
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>

          {/* Core Hub: Big Deals Digital Engine */}
          <div className="w-full max-w-xl p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-amber-900/30 border border-amber-500/40 text-center shadow-xl">
            <div className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-semibold">
              THE CENTRAL PLATFORM
            </div>
            <div className="text-2xl font-extrabold text-white font-heading mt-1">
              BIG DEALS DIGITAL COMMERCE
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Current catalogue · Reference price savings · Instant WhatsApp cart dispatch
            </div>
          </div>

          {/* Down Arrow */}
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Level: Continuous Conversion Loop */}
          <div className="w-full">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-3 text-center">
              Customer Conversion Sequence
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {conversionFunnel.map((step, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-center relative overflow-hidden"
                >
                  <div className="text-[10px] font-mono text-amber-400 font-bold mb-1">
                    0{i + 1}
                  </div>
                  <div className="text-xs font-bold text-white font-heading">{step.step}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
