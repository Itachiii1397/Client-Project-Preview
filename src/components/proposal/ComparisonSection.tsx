import React, { useState } from 'react';
import { Check, X, Sparkles, Filter } from 'lucide-react';
import { CAPABILITY_MATRIX, CapabilityItem } from '../../data/proposalData';

export const ComparisonSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Core Web', 'Catalogue', 'Commerce', 'Operations', 'Growth', 'Experience', 'Delivery'];

  const filteredItems =
    selectedFilter === 'All'
      ? CAPABILITY_MATRIX
      : CAPABILITY_MATRIX.filter((item) => item.category === selectedFilter);

  const renderCell = (val: boolean | string, isRecommendedCol: boolean = false) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
          isRecommendedCol ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
        }`}>
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-800/40 text-slate-600">
          <X className="w-3 h-3" />
        </div>
      );
    }
    return (
      <span className={`text-xs font-mono font-medium px-2 py-0.5 rounded ${
        isRecommendedCol ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20' : 'bg-slate-800 text-slate-300'
      }`}>
        {val}
      </span>
    );
  };

  return (
    <section id="capability-matrix" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 04 · CAPABILITY ARCHITECTURE
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        INTERACTIVE CAPABILITY MATRIX
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-8 leading-relaxed">
        A clear, structured breakdown of system features across the three operational tiers. Compare capabilities directly to determine the appropriate starting level for Big Deals.
      </p>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6 pb-2">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2 font-mono">
          <Filter className="w-3.5 h-3.5" />
          <span>FILTER:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
              selectedFilter === cat
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Matrix Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/60 shadow-2xl backdrop-blur-sm">
        <table className="w-full text-left border-collapse min-w-[720px]">
          <thead>
            <tr className="border-b border-white/10 bg-slate-900/80">
              <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold w-2/5">
                System Capability / Feature
              </th>
              <th className="p-4 sm:p-5 text-center w-1/5">
                <div className="text-xs font-bold text-slate-300 font-heading">DIGITAL PRESENCE</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">₹24,900</div>
              </th>
              <th className="p-4 sm:p-5 text-center w-1/5">
                <div className="text-xs font-bold text-slate-200 font-heading">ECOMMERCE STARTER</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">₹49,900</div>
              </th>
              <th className="p-4 sm:p-5 text-center w-1/5 bg-amber-500/10 border-l border-r border-amber-500/30 relative">
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-b tracking-wider">
                  RECOMMENDED
                </div>
                <div className="text-xs font-extrabold text-amber-300 font-heading pt-1">
                  BIG DEALS COMMERCE
                </div>
                <div className="text-[10px] font-mono text-amber-400/80 mt-0.5">₹89,900</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {filteredItems.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-white/[0.02] transition-colors group"
              >
                <td className="p-4 sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-slate-400 text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
                      {item.category}
                    </span>
                    <span className="text-slate-200 font-medium text-xs sm:text-sm">
                      {item.feature}
                    </span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  {renderCell(item.digitalPresence)}
                </td>
                <td className="p-4 sm:p-5 text-center">
                  {renderCell(item.ecommerceStarter)}
                </td>
                <td className="p-4 sm:p-5 text-center bg-amber-500/[0.04] border-l border-r border-amber-500/20">
                  {renderCell(item.bigDealsCommerce, true)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
        <span>* Showing {filteredItems.length} of {CAPABILITY_MATRIX.length} system capabilities</span>
        <span className="text-amber-400/80">Big Deals Commerce represents the complete operational launch stack.</span>
      </div>
    </section>
  );
};
