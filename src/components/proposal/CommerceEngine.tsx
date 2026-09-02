import React from 'react';
import { Database, Cpu, LayoutDashboard, LineChart, TrendingUp, Smartphone, ArrowDown, Check } from 'lucide-react';

export const CommerceEngine: React.FC = () => {
  const layers = [
    {
      title: '01 · CUSTOMER EXPERIENCE',
      tag: 'Storefront & UX',
      icon: Smartphone,
      desc: 'Mobile-first responsive interface, category navigation, live search, 3D showcases, and friction-free product exploration.',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    },
    {
      title: '02 · PRODUCT DATA LAYER',
      tag: 'Structured Inventory',
      icon: Database,
      desc: 'Organized schema storing products, categories, pricing, reference MRPs, high-resolution imagery, technical specifications, and condition tags.',
      color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
    },
    {
      title: '03 · COMMERCE LOGIC',
      tag: 'Transaction Rules',
      icon: Cpu,
      desc: 'Automated discount calculations, multi-item cart state, structured WhatsApp quotation generator, and readiness for future online payment gateways.',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    },
    {
      title: '04 · ADMINISTRATION',
      tag: 'Staff Operations',
      icon: LayoutDashboard,
      desc: 'Operational portal to add new arrivals, update real-time pricing, adjust stock flags, edit categories, and pin Deal-of-the-Day highlights.',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    },
    {
      title: '05 · ANALYTICS FOUNDATION',
      tag: 'Intelligence & Insights',
      icon: LineChart,
      desc: 'Tracks discovery sources, high-intent product views, search queries, cart-adds, and outbound WhatsApp checkout triggers.',
      color: 'border-teal-500/40 text-teal-400 bg-teal-500/10',
    },
    {
      title: '06 · GROWTH & RETENTION',
      tag: 'Scalability',
      icon: TrendingUp,
      desc: 'Search engine schema optimization, seasonal campaign landing pages, broadcast WhatsApp promotions, and recurring customer retention loops.',
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    },
  ];

  return (
    <section id="commerce-engine" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 07 · SYSTEM ARCHITECTURE
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        BEHIND THE EXPERIENCE IS THE ENGINE.
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-14 leading-relaxed">
        A sustainable commerce system is not just visual pages. It is an interconnected stack of data structures, business logic, administrative tooling, and measurement frameworks.
      </p>

      {/* Layered Architectural Stack */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {layers.map((layer, idx) => {
          const Icon = layer.icon;
          return (
            <div key={idx} className="relative">
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group">
                <div className="flex items-start sm:items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${layer.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="text-xs font-mono font-bold text-white tracking-wide font-heading">
                        {layer.title}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {layer.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                      {layer.desc}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-500 uppercase flex-shrink-0 self-end sm:self-center">
                  LAYER 0{idx + 1}
                </div>
              </div>

              {idx < layers.length - 1 && (
                <div className="flex justify-center my-1.5">
                  <div className="w-0.5 h-3 bg-slate-800" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
