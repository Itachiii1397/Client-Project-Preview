import React, { useState } from 'react';
import { Check, X, ArrowRight, Layers, Sparkles, Filter, ChevronDown, ChevronUp, ShoppingBag, Globe, Database } from 'lucide-react';
import { CAPABILITY_MATRIX } from '../../data/proposalData';

export const ComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basic' | 'ecommerce' | 'commerce-ops'>('ecommerce');
  const [showFullMatrix, setShowFullMatrix] = useState(false);
  const [matrixFilter, setMatrixFilter] = useState('All');

  const tiers = [
    {
      id: 'basic',
      title: 'BASIC WEBSITE',
      badge: 'OPTION 01 · ₹24,900',
      subtitle: 'Digital Brochure',
      icon: Globe,
      color: 'from-slate-800 to-slate-900 border-slate-700',
      activeBorder: 'border-blue-500 shadow-blue-500/10',
      customerJourney: ['Discover', 'Learn', 'Contact'],
      businessFocus: 'Informational presence without active online transaction tools.',
      summary: 'Establishes credibility and shares basic store information and phone/WhatsApp links.',
      pros: ['Lowest initial investment', 'No inventory management required', 'Immediate digital footprint'],
      limitations: ['Cannot search or filter inventory', 'No cart or order assembly', 'Manual customer inquiries for every item'],
    },
    {
      id: 'ecommerce',
      title: 'ECOMMERCE',
      badge: 'OPTION 02 · ₹49,900',
      subtitle: 'Digital Storefront',
      icon: ShoppingBag,
      color: 'from-blue-950/70 to-slate-900 border-blue-600/40',
      activeBorder: 'border-blue-400 shadow-blue-500/20',
      customerJourney: ['Discover', 'Browse', 'Compare', 'Cart', 'Order'],
      businessFocus: 'Active sales channel that generates structured WhatsApp order payloads.',
      summary: 'Transforms the website into a working storefront with live search, filters, savings calculation, and cart.',
      pros: ['Customers assemble orders themselves', 'Visual savings calculator highlights deal value', 'Itemized WhatsApp checkout saves staff time'],
      limitations: ['Catalogue updates require code or database technician updates without an admin panel'],
    },
    {
      id: 'commerce-ops',
      title: 'COMMERCE + OPERATIONS',
      badge: 'OPTION 03 · ₹89,900 · RECOMMENDED',
      subtitle: 'Digital Business Infrastructure',
      icon: Database,
      color: 'from-amber-950/50 via-slate-900 to-[#0A1628] border-amber-500/50',
      activeBorder: 'border-amber-400 shadow-amber-500/25',
      customerJourney: ['Discover', 'Browse', 'Compare', 'Order', 'Return'],
      businessJourney: ['Manage', 'Update', 'Measure', 'Grow'],
      businessFocus: 'Full operational independence with staff administrative control panel.',
      summary: 'Complete customer commerce experience plus back-office control over prices, stock, and daily deals.',
      pros: ['Staff adjust prices & stock in seconds', 'Deal of the Day & spotlight controls', 'Dedicated production database and analytics'],
      limitations: ['Requires Big Deals staff to actively maintain and leverage the admin system'],
    },
  ];

  const categories = ['All', 'Core Web', 'Catalogue', 'Commerce', 'Operations', 'Growth', 'Experience'];

  const filteredMatrix =
    matrixFilter === 'All'
      ? CAPABILITY_MATRIX
      : CAPABILITY_MATRIX.filter((item) => item.category === matrixFilter);

  const currentTier = tiers.find((t) => t.id === activeTab) || tiers[1];

  return (
    <section id="website-vs-commerce" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 03 · WEBSITE VS COMMERCE
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        Three Distinct Stages of Digital Maturity.
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-10 leading-relaxed">
        Select a stage below to inspect how customer experience and business operations change as Big Deals scales from a digital brochure to full commerce infrastructure.
      </p>

      {/* Three Selectable Tabs / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {tiers.map((t) => {
          const isSelected = activeTab === t.id;
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`text-left p-6 rounded-2xl border-2 transition-all relative flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-900 ${t.activeBorder} shadow-2xl scale-[1.02]`
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {t.badge}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-white/10 text-white' : 'text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-heading">{t.title}</h3>
                <div className="text-xs font-mono font-bold text-amber-400 mt-0.5 mb-2">
                  "{t.subtitle}"
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{t.summary}</p>
              </div>

              {/* Status Indicator */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className={isSelected ? 'text-blue-400 font-bold' : 'text-slate-500'}>
                  {isSelected ? '● Active Inspection' : 'Click to inspect'}
                </span>
                <span className="text-slate-500">→</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card for Active Selection */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0B152B] via-[#070D1C] to-[#040812] border-2 border-white/10 shadow-2xl mb-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-3">
              <span>INSPECTING: {currentTier.title}</span>
              <span>·</span>
              <span className="text-amber-400 font-bold">"{currentTier.subtitle}"</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {currentTier.subtitle} Architecture Breakdown
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {currentTier.businessFocus}
            </p>
          </div>

          <div className="text-right font-mono self-start lg:self-auto">
            <span className="text-xs text-slate-400 uppercase tracking-wider block">Investment</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {currentTier.badge.split('·')[1]?.trim() || ''}
            </span>
          </div>
        </div>

        {/* Customer Journey Flow */}
        <div className="py-8 border-b border-white/10">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
            Customer Journey:
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {currentTier.customerJourney.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm font-bold text-white font-mono flex items-center gap-2 shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < currentTier.customerJourney.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Business Operations Flow (For Option 03) */}
        {currentTier.businessJourney && (
          <div className="py-8 border-b border-white/10">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-4">
              Business Operations Loop (Option 03 Only):
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {currentTier.businessJourney.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-2 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs sm:text-sm font-bold text-amber-200 font-mono flex items-center gap-2 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                  {idx < currentTier.businessJourney.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Pros vs Limitations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>Key Operational Strengths:</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {currentTier.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <X className="w-4 h-4 text-slate-500" />
              <span>Scope Trade-offs & Limitations:</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {currentTier.limitations.map((l, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-slate-500">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Progressive Disclosure: Complete Capability Matrix Toggle */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowFullMatrix(!showFullMatrix)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono font-bold text-slate-300 hover:text-white transition-all shadow-md"
        >
          <Layers className="w-4 h-4 text-blue-400" />
          <span>{showFullMatrix ? 'HIDE CAPABILITY SPECIFICATION TABLE' : 'VIEW FULL 22-FEATURE CAPABILITY SPECIFICATION TABLE'}</span>
          {showFullMatrix ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>
      </div>

      {/* Collapsible Capability Matrix */}
      {showFullMatrix && (
        <div className="mt-8 animate-in fade-in duration-300">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2 font-mono">
              <Filter className="w-3.5 h-3.5" />
              <span>CATEGORY FILTER:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setMatrixFilter(cat)}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                  matrixFilter === cat
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-slate-900/90 text-xs font-mono uppercase text-slate-400">
                  <th className="p-4 w-2/5">Capability Item</th>
                  <th className="p-4 text-center w-1/5">Option 01 (₹24.9k)</th>
                  <th className="p-4 text-center w-1/5">Option 02 (₹49.9k)</th>
                  <th className="p-4 text-center w-1/5 bg-amber-500/10 text-amber-300">Option 03 (₹89.9k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {filteredMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="p-4 text-slate-200 font-medium">{item.feature}</td>
                    <td className="p-4 text-center">
                      {typeof item.option01 === 'boolean' ? (
                        item.option01 ? <Check className="w-4 h-4 text-blue-400 mx-auto" /> : <span className="text-slate-600">—</span>
                      ) : (
                        <span className="font-mono text-[11px] text-slate-400">{item.option01}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.option02 === 'boolean' ? (
                        item.option02 ? <Check className="w-4 h-4 text-blue-400 mx-auto" /> : <span className="text-slate-600">—</span>
                      ) : (
                        <span className="font-mono text-[11px] text-slate-300">{item.option02}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      {typeof item.option03 === 'boolean' ? (
                        item.option03 ? <Check className="w-4 h-4 text-amber-400 mx-auto" /> : <span className="text-slate-600">—</span>
                      ) : (
                        <span className="font-mono text-[11px] text-amber-300 font-bold">{item.option03}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};
