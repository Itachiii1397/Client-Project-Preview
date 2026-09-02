import React from 'react';
import { ShieldCheck, Award, Sparkles, MessageCircle, ArrowDown, CheckCircle, RefreshCcw, PackageCheck } from 'lucide-react';
import { DISPLAY_WHATSAPP, PRIMARY_WHATSAPP_NUMBER } from '../data/products';

export const BrandStory: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SOURCE',
      desc: 'Curating open-box, overstock, and surplus inventory from recognized brands.',
      icon: PackageCheck,
    },
    {
      num: '02',
      title: 'CHECK',
      desc: 'Every physical product is inspected, tested for full functionality, and authenticated.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'PRICE',
      desc: 'Transparent markdown calculated against verified market reference benchmarks.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'DEAL',
      desc: 'Direct WhatsApp order confirmation with real photos and stock reservation.',
      icon: MessageCircle,
    },
    {
      num: '05',
      title: 'YOU SAVE',
      desc: 'Enjoy authentic branded appliances and essentials with maximum cash in your pocket.',
      icon: Award,
    },
  ];

  const pillars = [
    {
      title: 'REAL CATALOG PRODUCTS',
      desc: 'Every single listed item corresponds to authentic physical inventory.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
    {
      title: 'TRANSPARENT PRICING',
      desc: 'No hidden conditions. Clear Big Deals price alongside honest reference values.',
      icon: Award,
      color: 'text-[#E5A919]',
    },
    {
      title: 'DIRECT WHATSAPP SUPPORT',
      desc: 'Direct communication with our team before ordering to confirm stock, pictures, and delivery.',
      icon: MessageCircle,
      color: 'text-[#25D366]',
    },
    {
      title: 'PRODUCT-LEVEL SAVINGS',
      desc: 'Real, mathematical savings calculated on each deal to guarantee consumer value.',
      icon: Sparkles,
      color: 'text-[#93C5FD]',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#070F22] relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Story Pitch */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E40AF]/20 border border-[#3B82F6]/40 text-[#93C5FD] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A919]" />
            <span>THE BIG DEALS PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            HOW <span className="text-[#E5A919]">BIG DEALS WORK</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-200 font-medium">
            &ldquo;Before you buy online, check Big Deals.&rdquo;
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We bring genuine branded products, surplus inventory, and special-value merchandise directly to customers with honest reference pricing and fast WhatsApp ordering.
          </p>
        </div>

        {/* 5-Step Visual Process (SOURCE -> CHECK -> PRICE -> DEAL -> YOU SAVE) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#0B172E] p-5 rounded-2xl border border-slate-800 relative flex flex-col justify-between hover:border-[#1E40AF] transition-all group"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-slate-600 font-mono-price group-hover:text-[#E5A919] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#E5A919]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white font-heading tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Trust Pillars */}
        <div className="bg-[#0A1428] rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              BUILT ON <span className="text-[#E5A919]">TRANSPARENCY</span> & TRUST
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Our core commitments to every customer shopping open-box and surplus inventory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-start"
                >
                  <div className={`p-3 rounded-xl bg-slate-800 mb-4 ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">{pillar.title}</h4>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct WhatsApp Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#172554] via-[#0F1E3D] to-[#1E3A8A] rounded-3xl border border-[#3B82F6]/40 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#E5A919]">
              Instant Direct Enquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
              Have questions about an item?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-md">
              Send us a direct message on WhatsApp at <strong className="text-white">{DISPLAY_WHATSAPP}</strong> for live photos and stock checks.
            </p>
          </div>

          <a
            href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Big Deals, I would like to ask a question about your inventory.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all flex-shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat With Big Deals</span>
          </a>
        </div>
      </div>
    </section>
  );
};
