import React from 'react';
import { ArrowUpRight, ShoppingBag, Sparkles, Smartphone, Search, Filter, ShoppingCart, MessageSquare, Percent, Eye } from 'lucide-react';

interface PreviewSectionProps {
  onExplorePreview: () => void;
}

export const PreviewSection: React.FC<PreviewSectionProps> = ({ onExplorePreview }) => {
  const ecommerceFeatures = [
    {
      icon: Search,
      title: 'Dynamic Catalogue & Live Search',
      desc: 'Customers search across 64 active products instantly by keyword or brand without page reloads.',
    },
    {
      icon: Filter,
      title: 'Multi-Category Filtering',
      desc: 'Instant filtering across Kitchen Appliances, Sports, Personal Care, and Household goods.',
    },
    {
      icon: Eye,
      title: 'Rich Product Cards & Detail Views',
      desc: 'Inspect high-resolution imagery, exact condition notes (open-box/surplus), and full specifications.',
    },
    {
      icon: Percent,
      title: 'Savings & Reference Price UX',
      desc: 'Transparent MRP reference comparison highlights exact rupee savings on every single product.',
    },
    {
      icon: ShoppingCart,
      title: 'Interactive Multi-Item Cart',
      desc: 'Customers assemble orders across multiple departments into a persistent shopping bag.',
    },
    {
      icon: MessageSquare,
      title: 'Direct Cart-to-WhatsApp Checkout',
      desc: 'Dispatches structured, itemized order payloads directly to Big Deals staff with one tap.',
    },
  ];

  return (
    <section id="ecommerce-demo" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400">
          SECTION 06 · ECOMMERCE DEMO (OPTION 02 · ₹49,900)
        </span>
      </div>

      {/* Main Headline & Context */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold mb-3">
          <span>PROPOSED CURRENT PREVIEW</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
          This is where the website becomes a digital storefront.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-3xl leading-relaxed">
          See what changes when Big Deals moves beyond a static brochure website into an active, customer-facing commerce experience with live search, reference savings, and WhatsApp cart checkout.
        </p>
      </div>

      {/* Heroic Interactive Experience Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0B172E] via-[#071021] to-[#040914] border-2 border-amber-500/40 p-8 sm:p-12 shadow-2xl overflow-hidden mb-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Interactive Product Experience
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mt-1 mb-4">
              Explore the Working Big Deals Preview Today.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              The proposed customer experience is already built with 64 real products, live category filters, savings comparison calculation, and WhatsApp order dispatch. Open the preview to test it end-to-end.
            </p>

            {/* Main Action Trigger Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePreview}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base tracking-wide shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <ShoppingBag className="w-5 h-5 text-slate-950" />
                <span>OPEN WORKING BIG DEALS STOREFRONT</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Snapshot */}
          <div className="w-full lg:w-72 p-6 rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl space-y-3 text-xs font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
              <span>STORE PREVIEW STATUS</span>
              <span className="text-emerald-400 font-bold">● ACTIVE PREVIEW</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Inventory Items:</span>
              <span className="text-white font-bold">64 Items Loaded</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Price Comparisons:</span>
              <span className="text-amber-400 font-bold">Live Reference MRP</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Checkout Channel:</span>
              <span className="text-emerald-400 font-bold">WhatsApp Direct</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Virtual Showroom:</span>
              <span className="text-blue-400 font-bold">3D WebGL Vault</span>
            </div>
          </div>
        </div>

        {/* Required Proposal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-slate-400 font-mono leading-relaxed">
          Product catalogue, pricing and reference pricing shown in the preview should be confirmed by Big Deals before production launch.
        </div>
      </div>

      {/* Grid of What Changes in Ecommerce */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ecommerceFeatures.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white font-heading mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
