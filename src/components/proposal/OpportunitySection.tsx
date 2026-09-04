import React from 'react';
import { Check, ArrowRight, Store, Tag, Users, Search, ShoppingBag } from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  const offlineAssets = [
    {
      label: 'Physical Retail Presence',
      detail: 'An active physical retail store giving customers direct, hands-on inventory access and tangible trust.',
      icon: Store,
    },
    {
      label: 'Branded & Open-Box Range',
      detail: 'A curated inventory across kitchen appliances, sports gear, personal care, and household essentials.',
      icon: Tag,
    },
    {
      label: 'Competitive Price Advantage',
      detail: 'Substantial savings compared to standard online reference prices, providing real consumer value.',
      icon: ShoppingBag,
    },
    {
      label: 'Direct Customer Trust',
      detail: 'Established customer relationships built through responsive offline service and word of mouth.',
      icon: Users,
    },
  ];

  return (
    <section id="business-understanding" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 02 · BUSINESS UNDERSTANDING & POSITIONING
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-3xl">
        Big Deals already has the offline foundation.
      </h2>

      {/* Narrative Lead: Simple & Clear */}
      <div className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed space-y-4 mb-10">
        <p>
          Big Deals is a value-focused retail business whose proposition is built around branded and open-box products at competitive prices.
        </p>
        <p>
          The business already has a physical/offline proposition that customers value. The digital opportunity is not about inventing a new brand—it is about making that existing advantage easier to discover, browse, compare, and act on.
        </p>
      </div>

      {/* Existing Offline Strengths Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {offlineAssets.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white font-heading mb-1.5">{item.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Opportunity Card */}
      <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-[#0A1628] border-2 border-blue-500/40 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            THE DIGITAL OPPORTUNITY
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-snug">
            Big Deals already competes on price and value. <br />
            <span className="text-amber-400">
              The digital opportunity is to make that advantage easier for customers to discover, browse, compare and act on.
            </span>
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed pt-2">
            Today, discovering a deal requires visiting the store or asking over chat. A modern digital sales channel lets shoppers search the inventory on their phone, see the transparent savings compared to reference MRP, assemble their cart, and order directly.
          </p>
        </div>
      </div>
    </section>
  );
};
