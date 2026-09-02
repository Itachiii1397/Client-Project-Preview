import React from 'react';
import { Sparkles, Bell, Zap, MessageCircle, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { DISPLAY_WHATSAPP, PRIMARY_WHATSAPP_NUMBER } from '../data/products';

export const FutureGrowth: React.FC = () => {
  const roadmapCards = [
    {
      title: 'WhatsApp VIP Deal Club',
      desc: 'Exclusive early access to limited open-box batches, unboxing videos, and flash liquidation drops before public release.',
      tag: 'COMING SOON',
      icon: MessageCircle,
      color: 'text-[#25D366]',
    },
    {
      title: 'Instant Price Check Engine',
      desc: 'Automated deal lookup that compares your desired branded product against verified market reference benchmarks.',
      tag: 'COMING SOON',
      icon: Zap,
      color: 'text-[#E5A919]',
    },
    {
      title: 'Personalized Brand Alerts',
      desc: 'Subscribe to instant WhatsApp notifications whenever fresh inventory from Braun, Pigeon, Yonex, or Havells arrives.',
      tag: 'COMING SOON',
      icon: Bell,
      color: 'text-[#93C5FD]',
    },
    {
      title: 'Direct Store Pickup & Express Dispatch',
      desc: 'Reserve items via WhatsApp with one-touch payment and pickup directly from our retail floor or get expedited courier.',
      tag: 'COMING SOON',
      icon: TrendingUp,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="future-vision" className="py-20 bg-[#040813] relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E40AF]/20 border border-[#3B82F6]/40 text-[#93C5FD] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A919]" />
            <span>THE FUTURE ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            MORE THAN <span className="text-[#E5A919]">A STORE.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Building a modern digital retail ecosystem that connects smart shoppers directly to physical retail savings.
          </p>
        </div>

        {/* 4 Feature Roadmap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roadmapCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-[#081124] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-[#1E40AF] transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-800 text-[#E5A919] border border-[#E5A919]/30">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading">{card.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center text-[11px] font-semibold text-slate-500">
                  <span>Phase 3 Roadmap Feature</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Model Flowchart Banner for Client */}
        <div className="bg-[#0A1630] rounded-3xl border border-slate-700/80 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#93C5FD] block mb-3">
            THE DIGITAL RETAIL FORMULA
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-black text-white font-heading">
            <span className="px-3 py-1.5 rounded-lg bg-[#0F224D] border border-slate-700">YOUR PRODUCTS</span>
            <span className="text-[#E5A919]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#0F224D] border border-slate-700">YOUR PRICES</span>
            <span className="text-[#E5A919]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#0F224D] border border-slate-700">DIGITAL STORE</span>
            <span className="text-[#E5A919]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366]">WHATSAPP</span>
            <span className="text-[#E5A919]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#E5A919] text-[#050B17]">YOUR GROWTH</span>
          </div>
        </div>
      </div>
    </section>
  );
};
