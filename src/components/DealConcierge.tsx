import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS, formatINR, getProductWhatsAppUrl, PRIMARY_WHATSAPP_NUMBER } from '../data/products';
import { Sparkles, Search, MessageCircle, Eye, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';

interface DealConciergeProps {
  onQuickView: (product: Product) => void;
}

const PRESET_QUERIES = [
  'Air fryer under ₹3,000',
  'Badminton racquet under ₹2,000',
  'Beard trimmer under ₹3,500',
  'Mixer grinder under ₹3,000',
  'Instant geyser under ₹3,000',
  'Yoga mat under ₹1,000',
];

export const DealConcierge: React.FC<DealConciergeProps> = ({ onQuickView }) => {
  const [query, setQuery] = useState('Air fryer under ₹3,000');

  // Intelligent local catalog matcher
  const matchedProducts = useMemo(() => {
    if (!query.trim()) return PRODUCTS.slice(0, 4);

    const q = query.toLowerCase();

    // Check if user specified a budget constraint e.g. "under 3000" or "under ₹3,000"
    const budgetMatch = q.match(/under\s*(?:₹|rs\.?|inr)?\s*([0-9,]+)/i);
    const maxBudget = budgetMatch ? parseInt(budgetMatch[1].replace(/,/g, ''), 10) : null;

    // Filter by text keywords & budget
    const keywords = q
      .replace(/under\s*(?:₹|rs\.?|inr)?\s*([0-9,]+)/gi, '')
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 2);

    let results = PRODUCTS.filter((p) => {
      // If budget specified, enforce it
      if (maxBudget && p.price > maxBudget) return false;

      if (keywords.length === 0) return true;

      const pText = `${p.name} ${p.category} ${p.brand || ''} ${p.description || ''}`.toLowerCase();
      return keywords.some((kw) => pText.includes(kw));
    });

    if (results.length === 0) {
      // Fallback to closest price matches if text had no direct hits
      results = PRODUCTS.filter((p) => (maxBudget ? p.price <= maxBudget : true)).slice(0, 4);
    }

    return results.slice(0, 4);
  }, [query]);

  const conciergeWhatsAppUrl = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Big Deals Concierge,\nI am looking for: "${query}".\nPlease help me check current inventory and best available deals!`
  )}`;

  return (
    <section id="concierge" className="py-20 bg-[#060D1D] relative overflow-hidden border-b border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1E40AF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/40 text-[#E5A919] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT DEAL MATCHING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            TELL US WHAT <span className="text-[#E5A919]">YOU NEED.</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Tell us your budget or product type. We will match available items directly from our Big Deals catalog.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Air fryer under ₹3,000, Yoga mat, Yonex racket..."
              className="w-full pl-12 pr-28 py-4 rounded-2xl bg-[#09152C] border-2 border-slate-700 hover:border-[#3B82F6]/60 focus:border-[#E5A919] text-white text-sm sm:text-base font-semibold placeholder:text-slate-500 focus:outline-none transition-all shadow-xl"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 text-xs font-bold text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick presets */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-3 scrollbar-none">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
              Try:
            </span>
            {PRESET_QUERIES.map((preset) => (
              <button
                key={preset}
                onClick={() => setQuery(preset)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  query === preset
                    ? 'bg-[#1E40AF] text-white border border-[#E5A919]'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between max-w-5xl mx-auto mb-6 text-xs text-slate-400">
          <span>
            Matched <strong className="text-white">{matchedProducts.length}</strong> real catalog items for &ldquo;
            <span className="text-[#FFE27A]">{query || 'all products'}</span>&rdquo;
          </span>
          <a
            href={conciergeWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:underline font-bold flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask Concierge on WhatsApp</span>
          </a>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {matchedProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => onQuickView(p)}
              className="bg-[#09152B] rounded-2xl border border-slate-800 hover:border-[#1E40AF] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#1E40AF]/15 cursor-pointer group"
            >
              <div>
                <div className="w-full h-44 rounded-xl bg-[#060D1A] p-3 flex items-center justify-center relative overflow-hidden mb-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-[#E5A919] text-[#050B17] font-black text-[10px] px-2 py-0.5 rounded-md">
                    {p.savingsPercentage}% OFF
                  </span>
                </div>

                <span className="text-[10px] font-black uppercase tracking-wider text-[#93C5FD]">
                  {p.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white font-heading truncate mt-0.5 group-hover:text-[#93C5FD]">
                  {p.name}
                </h4>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-base font-black text-[#FFE27A] font-mono-price">
                      {formatINR(p.price)}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 line-through font-mono-price">
                    {formatINR(p.referencePrice)}
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(getProductWhatsAppUrl(p), '_blank');
                    }}
                    className="py-2 px-2 rounded-lg bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
                  >
                    <MessageCircle className="w-3 h-3 fill-current" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onQuickView(p)}
                    className="py-2 px-2 rounded-lg bg-slate-800 hover:bg-[#1E40AF] text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
