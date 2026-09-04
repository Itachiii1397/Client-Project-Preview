import React from 'react';
import { ArrowDown, ArrowRight, Compass, Search, ShoppingBag, Eye, Scale, MessageSquare, CheckCircle, Repeat } from 'lucide-react';

export const CustomerJourney: React.FC = () => {
  const channelSources = ['Google Search', 'Instagram', 'Facebook', 'WhatsApp Direct / Shares'];

  const journeySteps = [
    { title: 'Discover', desc: 'Customer encounters deals via local search or social showcases', icon: Search },
    { title: 'Browse', desc: 'Explores the dynamic catalogue across departments', icon: Eye },
    { title: 'Compare', desc: 'Inspects transparent price vs genuine reference MRP', icon: Scale },
    { title: 'Cart', desc: 'Assembles multiple items into a persistent order', icon: ShoppingBag },
    { title: 'WhatsApp Order', desc: 'Transfers itemized list directly to store chat with one tap', icon: MessageSquare },
    { title: 'Purchase', desc: 'Fulfills order in-store or through local dispatch', icon: CheckCircle },
    { title: 'Return / Repeat', desc: 'Checks back regularly for daily arrivals and seasonal batches', icon: Repeat },
  ];

  return (
    <section id="customer-journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 10 · CUSTOMER JOURNEY
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        Simple Customer Conversion Flow.
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-12 leading-relaxed">
        How an everyday shopper moves from discovering Big Deals online to sending an itemized WhatsApp order and becoming a repeat customer.
      </p>

      {/* Visually Simple Linear Pipeline */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0B152B] via-[#070E1E] to-[#040812] border border-white/10 shadow-2xl space-y-8">
        {/* Top: Channels Level */}
        <div className="text-center space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
            ACQUISITION & TRAFFIC CHANNELS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {channelSources.map((ch, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm font-mono font-bold text-slate-200 shadow-sm"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Down Arrow Indicator */}
        <div className="flex justify-center text-blue-400">
          <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Destination: Big Deals */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-amber-400 text-slate-950 font-black font-heading text-lg sm:text-xl tracking-wide shadow-lg shadow-amber-500/20">
            <span>BIG DEALS DIGITAL COMMERCE</span>
          </div>
        </div>

        {/* Down Arrow Indicator */}
        <div className="flex justify-center text-amber-400">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Customer Steps: Discover -> Browse -> Compare -> Cart -> WhatsApp Order -> Purchase -> Return / Repeat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 pt-2">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            const isOrder = step.title.includes('WhatsApp');
            const isPurchase = step.title === 'Purchase';
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border flex flex-col justify-between text-center relative ${
                  isOrder
                    ? 'bg-emerald-950/40 border-emerald-500/40'
                    : isPurchase
                    ? 'bg-blue-950/40 border-blue-500/40'
                    : 'bg-slate-900/70 border-slate-800'
                }`}
              >
                <div>
                  <div className="w-8 h-8 rounded-xl mx-auto flex items-center justify-center mb-2 bg-white/5 text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-mono text-slate-500 mb-1">0{idx + 1}</div>
                  <h4
                    className={`font-bold text-xs sm:text-sm font-heading mb-1 ${
                      isOrder ? 'text-emerald-300' : isPurchase ? 'text-blue-300' : 'text-white'
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
