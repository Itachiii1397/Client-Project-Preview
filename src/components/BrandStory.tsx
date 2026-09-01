import React from 'react';
import { ShieldCheck, Award, Sparkles, MessageCircle, ArrowDown, CheckCircle, RefreshCcw, PackageCheck } from 'lucide-react';
import { DISPLAY_WHATSAPP, PRIMARY_WHATSAPP_NUMBER } from '../data/products';

export const BrandStory: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SOURCE',
      desc: 'Carefully curating open-box, overstock, and surplus inventory from recognized brands.',
      icon: PackageCheck,
    },
    {
      num: '02',
      title: 'QUALITY CHECK',
      desc: 'Each physical product is inspected, tested for complete functionality, and verified.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'DEAL PRICE',
      desc: 'Priced with transparent markdown directly passing savings to retail customers.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'YOU SAVE',
      desc: 'Enjoy authentic branded appliances and essentials far below standard online market prices.',
      icon: Award,
    },
  ];

  const pillars = [
    {
      title: 'QUALITY CHECKED',
      desc: 'Products are physically inspected and tested before being offered on our floor.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
    {
      title: 'BRANDED INVENTORY',
      desc: 'Shop recognizable, leading brands across multiple consumer categories with confidence.',
      icon: Award,
      color: 'text-[#E5A919]',
    },
    {
      title: 'VALUE FIRST',
      desc: 'Every single price is engineered around real, tangible cash savings for your household.',
      icon: Sparkles,
      color: 'text-[#93C5FD]',
    },
    {
      title: 'WHATSAPP SUPPORT',
      desc: 'Talk directly with our team before ordering to confirm stock, pictures, and delivery.',
      icon: MessageCircle,
      color: 'text-[#25D366]',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#070F22] relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Story Pitch */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E40AF]/20 border border-[#3B82F6]/40 text-[#93C5FD] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A919]" />
            <span>The Big Deals Concept</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            WHY <span className="text-[#E5A919]">BIG DEALS?</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-200 font-medium">
            &ldquo;Good products shouldn&apos;t always come with big prices.&rdquo;
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Big Deals brings branded products, open-box inventory, and special-value merchandise together in one place, giving Indian customers direct access to premier items at aggressively competitive prices.
          </p>
        </div>

        {/* 4-Step Visual Process (SOURCE -> QUALITY CHECK -> DEAL PRICE -> YOU SAVE) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#0B172E] p-6 rounded-2xl border border-slate-800 relative flex flex-col justify-between hover:border-[#1E40AF] transition-all group"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-600 font-mono-price group-hover:text-[#E5A919] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#E5A919]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white font-heading tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#1E40AF] border border-[#3B82F6] flex items-center justify-center text-white text-xs">
                      →
                    </div>
                  )}
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
