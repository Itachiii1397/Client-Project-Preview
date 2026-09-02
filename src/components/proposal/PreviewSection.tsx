import React from 'react';
import { ArrowUpRight, CheckCircle2, ShoppingBag, Sparkles, Smartphone, Layers, Eye } from 'lucide-react';

interface PreviewSectionProps {
  onExplorePreview: () => void;
}

export const PreviewSection: React.FC<PreviewSectionProps> = ({ onExplorePreview }) => {
  const highlights = [
    { value: '64', label: 'PRODUCTS', desc: 'Active sports, appliances, personal care, and essentials inventory.' },
    { value: 'DATA', label: 'CURRENT CATALOGUE', desc: 'Reference MRPs, condition tags, descriptions, and photo assets.' },
    { value: '3D', label: 'INTERACTIVE EXPERIENCE', desc: 'Virtual 3D Deal Vault and interactive savings calculator.' },
    { value: 'DIRECT', label: 'WHATSAPP COMMERCE', desc: 'Working cart-to-WhatsApp order dispatch with itemized receipt formatting.' },
  ];

  return (
    <section id="working-proof" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400">
          SECTION 06 · WORKING PROOF
        </span>
      </div>

      {/* Main Headline & Subheadline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        WE DIDN'T WANT TO JUST DESCRIBE IT.
      </h2>

      <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
        So the proposed customer experience is already built and available as a live, working pre-production preview.
      </p>

      {/* Heroic Working Proof Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0B172E] via-[#071021] to-[#040914] border-2 border-amber-500/40 p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              INTERACTIVE PRE-PRODUCTION PREVIEW
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-4">
              Test the Big Deals Store Experience Today.
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Browse the live 64-product catalogue, filter categories, inspect price comparisons, test the interactive 3D Deal Vault, and send a test order to WhatsApp.
            </p>

            {/* Metric Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                    {h.value}
                  </div>
                  <div className="text-[11px] font-mono font-bold text-white mt-1">
                    {h.label}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-snug">
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Main Action Trigger */}
            <button
              onClick={onExplorePreview}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base tracking-wide shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0 group"
            >
              <ShoppingBag className="w-5 h-5 text-slate-950" />
              <span>EXPLORE THE BIG DEALS EXPERIENCE →</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Visual Teaser Panel */}
          <div className="w-full lg:w-80 p-6 rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl flex flex-col gap-3 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-slate-400">
              <span>ACTIVE SYSTEM AUDIT</span>
              <span className="text-emerald-400">● LIVE</span>
            </div>

            <div className="space-y-2 text-slate-300 font-mono text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">Catalogue Items:</span>
                <span className="text-white font-bold">64 Items Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Price Comparison:</span>
                <span className="text-white font-bold">Reference MRP Tally</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cart WhatsApp Dispatch:</span>
                <span className="text-white font-bold">Structured (+91)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">3D Deal Vault Room:</span>
                <span className="text-white font-bold">WebGL / Three.js</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Responsiveness:</span>
                <span className="text-white font-bold">Mobile / Tablet / Desktop</span>
              </div>
            </div>

            <button
              onClick={onExplorePreview}
              className="mt-3 w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Launch Live View</span>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-slate-400 font-mono">
          Note: Product catalogue, pricing and reference pricing shown in the preview should be confirmed by Big Deals before production launch. Final production functionality will depend on the selected scope and implementation phase.
        </div>
      </div>
    </section>
  );
};
