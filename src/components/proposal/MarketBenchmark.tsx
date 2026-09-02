import React from 'react';
import { Info, CheckCircle2, Shield, Layers } from 'lucide-react';

export const MarketBenchmark: React.FC = () => {
  const marketTiers = [
    {
      label: 'Standard Freelance Template',
      range: '₹15,000 – ₹35,000',
      typicalScope: 'Pre-made WordPress / Shopify theme setup with generic layout, limited custom deal logic, and manual order handling.',
      fit: 'Good for basic online presence, limited for specialized inventory deal operations.',
    },
    {
      label: 'Custom Agency Digital Commerce',
      range: '₹1,50,000 – ₹4,00,000+',
      typicalScope: 'Agency custom web application with custom database, bespoke UI/UX design, multiple stakeholder reviews, and extended delivery cycles.',
      fit: 'High enterprise overhead, often includes unnecessary complexity for growing regional retailers.',
    },
    {
      label: 'INNITYX Right-Sized Engineering',
      range: '₹49,900 – ₹89,900',
      typicalScope: 'Purpose-built React commerce engine, tailored WhatsApp checkout, reference price savings calculations, 3D showroom, and optional direct admin controls.',
      fit: 'Engineered specifically for Big Deals: high-touch commerce capabilities without enterprise cost bloat.',
      highlight: true,
    },
  ];

  return (
    <section id="benchmark" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 11 · MARKET CONTEXT & BENCHMARKS
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        WHERE DOES THIS INVESTMENT SIT?
      </h2>

      {/* Subhead & Disclaimer Note */}
      <div className="text-base sm:text-lg text-slate-300 max-w-3xl space-y-3 mb-12 leading-relaxed">
        <p>
          Ecommerce development costs across the industry vary significantly depending on architecture, customization, third-party integrations, and operational complexity.
        </p>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
          <Info className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          <span>Indicative 2026 market references — not fixed universal prices.</span>
        </div>
      </div>

      {/* Benchmark Comparison Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {marketTiers.map((tier, idx) => (
          <div
            key={idx}
            className={`p-7 rounded-2xl flex flex-col justify-between transition-all ${
              tier.highlight
                ? 'bg-gradient-to-b from-[#0C1B38] to-[#061021] border-2 border-blue-500/50 shadow-2xl shadow-blue-500/15'
                : 'bg-slate-900/50 border border-slate-800'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  MARKET SCOPE
                </span>
                {tier.highlight && (
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                    OUR PROPOSAL
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white font-heading mb-2">
                {tier.label}
              </h3>

              <div className={`text-2xl font-extrabold font-heading mb-4 ${tier.highlight ? 'text-amber-400' : 'text-slate-300'}`}>
                {tier.range}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {tier.typicalScope}
              </p>
            </div>

            <div className={`pt-4 border-t ${tier.highlight ? 'border-blue-500/20 text-blue-200' : 'border-slate-800 text-slate-400'} text-xs font-sans leading-snug`}>
              <strong>Context: </strong>{tier.fit}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Rationale */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
        <strong className="text-white">The Bottom Line: </strong>
        A basic template website and a bespoke digital commerce system belong to fundamentally different scopes. INNITYX engineers directly for retail velocity: delivering custom e-commerce functionality without bloated agency retainers.
      </div>
    </section>
  );
};
