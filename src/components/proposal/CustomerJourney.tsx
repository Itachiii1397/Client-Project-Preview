import React from 'react';
import { Search, Compass, Eye, Scale, Sparkles, ShoppingBag, MessageSquare, CheckCircle, Repeat, RotateCcw, ArrowRight, ArrowDown } from 'lucide-react';

export const CustomerJourney: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Google / IG / FB / WhatsApp',
      desc: 'Customer encounters a deal spotlight, local search result, or shared link.',
      icon: Search,
      accent: 'border-blue-500/40 text-blue-400',
    },
    {
      num: '02',
      title: 'LAND',
      subtitle: 'Instant Mobile Page Load',
      desc: 'Direct destination into the specific product or curated category without lag.',
      icon: Compass,
      accent: 'border-blue-500/40 text-blue-400',
    },
    {
      num: '03',
      title: 'BROWSE',
      subtitle: 'Live Dynamic Catalogue',
      desc: 'Explores 60+ catalogue items with real photos, condition tags, and specifications.',
      icon: Eye,
      accent: 'border-indigo-500/40 text-indigo-400',
    },
    {
      num: '04',
      title: 'COMPARE',
      subtitle: 'Market Reference Pricing',
      desc: 'Customer transparently validates Big Deals price vs genuine MRP / market price.',
      icon: Scale,
      accent: 'border-amber-500/40 text-amber-400',
    },
    {
      num: '05',
      title: 'SEE SAVINGS',
      subtitle: 'Real-Time Discount Tally',
      desc: 'Exact rupee and percentage savings are computed and highlighted immediately.',
      icon: Sparkles,
      accent: 'border-amber-500/40 text-amber-400',
    },
    {
      num: '06',
      title: 'ADD TO CART',
      subtitle: 'Multi-Product Assembly',
      desc: 'Customer combines multiple household, sports, or appliance bargains in one cart.',
      icon: ShoppingBag,
      accent: 'border-emerald-500/40 text-emerald-400',
    },
    {
      num: '07',
      title: 'ORDER ON WHATSAPP',
      subtitle: 'Structured Order Payload',
      desc: 'One tap dispatches an itemized quotation with product IDs directly to Big Deals.',
      icon: MessageSquare,
      accent: 'border-emerald-500/40 text-emerald-400',
    },
    {
      num: '08',
      title: 'PURCHASE',
      subtitle: 'Direct Fulfillment',
      desc: 'Big Deals team confirms availability, payment mode (UPI/Store), and dispatch timeline.',
      icon: CheckCircle,
      accent: 'border-teal-500/40 text-teal-400',
    },
    {
      num: '09',
      title: 'RETURN',
      subtitle: 'Daily Deal Radar',
      desc: 'Customer revisits the digital storefront to check new inventory and weekly arrivals.',
      icon: RotateCcw,
      accent: 'border-blue-500/40 text-blue-400',
    },
    {
      num: '10',
      title: 'REPEAT',
      subtitle: 'Customer Loyalty Loop',
      desc: 'Word-of-mouth recommendations and repeat purchases establish long-term value.',
      icon: Repeat,
      accent: 'border-indigo-500/40 text-indigo-400',
    },
  ];

  return (
    <section id="customer-journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 05 · CONVERSION PIPELINE
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        WHAT SHOULD HAPPEN WHEN SOMEONE SEES A BIG DEAL?
      </h2>

      {/* Strategic Explanation */}
      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-12 leading-relaxed">
        Value-focused shoppers prioritize speed and clarity. The proposed digital platform creates the technical infrastructure to guide a visitor effortlessly from curiosity to a confirmed WhatsApp purchase order.
      </p>

      {/* 10-Step Interactive Visual Flow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    STEP {step.num}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 border ${step.accent}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white font-heading tracking-wide mb-1">
                  {step.title}
                </h4>
                <div className="text-[11px] font-mono text-amber-400/90 mb-2.5">
                  {step.subtitle}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-700 pointer-events-none">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Credibility & Expectation Setting Notice */}
      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-slate-400 flex items-start sm:items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-1 sm:mt-0" />
        <div>
          <span className="font-semibold text-slate-300">Infrastructure Note: </span>
          The proposed system provides the technical foundation and frictionless user experience required for this sequence. Final customer conversion and volume depend on marketing reach, offer relevance, and local retail operations.
        </div>
      </div>
    </section>
  );
};
