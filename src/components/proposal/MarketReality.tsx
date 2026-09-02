import React from 'react';
import { Check, X, Layers, ArrowRight } from 'lucide-react';

export const MarketReality: React.FC = () => {
  const basicWebsiteFeatures = [
    'Static business information & about text',
    'Static product showcase images',
    'General contact form or single phone link',
    'Basic WhatsApp click-to-chat CTA',
    'Basic meta-tag SEO',
  ];

  const digitalCommerceFeatures = [
    'Dynamic, searchable product catalogue (60+ items)',
    'Structured product data (IDs, specs, condition)',
    'Real-time keyword search & category filtration',
    'Live price & reference MRP comparison',
    'Automated discount & savings calculations',
    'Multi-item persistent shopping cart',
    'Structured cart-to-WhatsApp direct ordering payload',
    'Backend administration & stock toggles',
    'Granular analytics event tracking',
    'Deep schema SEO architecture for Google Shopping',
    'Scalable growth foundation for future payment & CRM',
  ];

  return (
    <section id="market-reality" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 03 · MARKET REALITY & SCOPE
        </span>
      </div>

      {/* Main Headline */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
          YES. A WEBSITE CAN COST ₹10,000–₹30,000.
        </h2>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-400 font-heading mt-2">
          AND THAT'S NOT THE PROBLEM.
        </h3>
      </div>

      {/* Narrative Framing */}
      <div className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed space-y-4 mb-14">
        <p>
          A simple business website can absolutely be built at a low cost. If the goal is simply to have a digital business card with a phone number, standard templates and basic site builders are readily available.
        </p>
        <p className="text-white font-medium">
          However, a static brochure website and an active commerce system solve entirely different business problems.
        </p>
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        {/* Left: Basic Website */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  CATEGORY A
                </span>
                <h4 className="text-xl font-bold text-slate-200 font-heading">BASIC WEBSITE</h4>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                Brochure & Presence
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Designed as a static digital signpost to verify that a business exists and display basic contact details.
            </p>

            <ul className="space-y-3 mb-6">
              {basicWebsiteFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-slate-400" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
            Outcome: Informs visitors, but relies on manual external inquiry for every transaction.
          </div>
        </div>

        {/* Right: Digital Commerce System (Highlighted) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0A1628] to-[#050C1A] border-2 border-blue-500/40 shadow-2xl shadow-blue-500/10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Corner Badge */}
          <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider">
            OPERATIONAL ENGINE
          </div>

          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-500/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  CATEGORY B
                </span>
                <h4 className="text-xl font-bold text-white font-heading">DIGITAL COMMERCE SYSTEM</h4>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-900/40 text-blue-300 border border-blue-500/30">
                Revenue & Operations
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Designed as an active sales channel that organizes inventory, displays real savings, and streamlines the buying journey.
            </p>

            <ul className="space-y-2.5 mb-6">
              {digitalCommerceFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                  <span className="font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-blue-500/20 text-xs text-blue-300 font-mono">
            Outcome: Converts browsing intent into structured, itemized WhatsApp purchase orders.
          </div>
        </div>
      </div>

      {/* Closing Statement Card */}
      <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 text-center max-w-4xl mx-auto">
        <p className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-2">
          THE FUNDAMENTAL DISTINCTION
        </p>
        <p className="text-xl sm:text-3xl font-extrabold text-white font-heading">
          THE DIFFERENCE ISN'T THE NUMBER OF PAGES.
        </p>
        <p className="text-xl sm:text-3xl font-extrabold text-amber-400 font-heading mt-1">
          IT'S WHAT THE SYSTEM IS DESIGNED TO DO.
        </p>
      </div>
    </section>
  );
};
