import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, formatINR, getProductWhatsAppUrl } from '../data/products';
import { useCart } from '../context/CartContext';
import { TrendingDown, Sparkles, MessageCircle, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';

export const PriceComparison: React.FC = () => {
  // Select top high-saving real catalog products
  const comparisonItems = [
    PRODUCTS.find((p) => p.canonicalId === '1463') || PRODUCTS[0], // Pigeon Healthifry (Save ₹516)
    PRODUCTS.find((p) => p.canonicalId === '2489') || PRODUCTS[1], // Havells Instant Geyser (Save ₹5,631)
    PRODUCTS.find((p) => p.canonicalId === '2953') || PRODUCTS[2], // Braun Series 9 Trimmer (Save ₹4,360)
    PRODUCTS.find((p) => p.canonicalId === '2964') || PRODUCTS[3], // Wahl Magic Clip (Save ₹6,540)
    PRODUCTS.find((p) => p.canonicalId === '3709') || PRODUCTS[4], // Nivia Gym Ball (Save ₹824)
    PRODUCTS.find((p) => p.canonicalId === '1916') || PRODUCTS[5], // Preethi Mixer Grinder (Save ₹3,548)
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product>(comparisonItems[0]);
  const [imageError, setImageError] = useState(false);
  const { addToCart, celebrateSavings } = useCart();

  const savingsPct = selectedProduct.savingsPercentage;
  const ratio = (selectedProduct.price / selectedProduct.referencePrice) * 100;

  return (
    <section id="price-comparison" className="py-20 bg-[#070E1E] relative overflow-hidden border-b border-slate-800">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E40AF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/30 text-[#E5A919] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Savings Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            THE DEAL IS IN THE <span className="text-[#E5A919]">DIFFERENCE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See how much you retain in your pocket on genuine branded open-box & surplus inventory compared to ordinary online reference pricing.
          </p>
        </div>

        {/* Product Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {comparisonItems.map((item) => {
            const isSelected = item.id === selectedProduct.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedProduct(item);
                  celebrateSavings();
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1E40AF] text-white border-2 border-[#E5A919] shadow-lg shadow-[#1E40AF]/40 scale-105'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <span>{item.brand || item.category}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded font-black ${isSelected ? 'bg-[#E5A919] text-[#050B17]' : 'bg-slate-800 text-[#E5A919]'}`}>
                  Save ₹{item.savingsAmount.toLocaleString('en-IN')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Comparison Showcase Card */}
        <div className="bg-[#0B1528] rounded-3xl border border-slate-700/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1D4ED8] via-[#E5A919] to-[#10B981]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Visual + Details */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative group w-full max-w-sm mx-auto sm:mx-0">
                <div className="w-full h-72 sm:h-80 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center p-6 overflow-hidden relative">
                  {!imageError && selectedProduct.image ? (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      onError={() => setImageError(true)}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#0B172E] border border-dashed border-slate-700 rounded-xl text-slate-400">
                      <span className="text-[10px] font-black tracking-widest text-[#E5A919] uppercase">BIG DEALS</span>
                      <span className="text-xs font-bold text-slate-300 mt-1">PRODUCT IMAGE</span>
                      <span className="text-[10px] text-slate-500 mt-0.5">IMAGE COMING FROM CATALOG</span>
                    </div>
                  )}
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#050B17]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-bold text-slate-200 uppercase">
                    {selectedProduct.condition}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#E5A919] text-[#050B17] px-2.5 py-1 rounded-lg font-black text-xs uppercase shadow-md">
                    {selectedProduct.savingsPercentage}% OFF
                  </div>
                </div>
              </div>

              <div className="mt-5 w-full">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#93C5FD]">
                  {selectedProduct.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1 leading-snug">
                  {selectedProduct.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                  {selectedProduct.description}
                </p>

                {/* Quality Check badge */}
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Quality checked & ready for delivery</span>
                </div>
              </div>
            </div>

            {/* Right: The Dynamic Comparison Engine */}
            <div className="lg:col-span-7 flex flex-col justify-center bg-[#070F22] p-6 sm:p-8 rounded-2xl border border-slate-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. Reference Price */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800/90 flex flex-col justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    REFERENCE PRICE
                  </span>
                  <div className="mt-3">
                    <span className="text-2xl sm:text-3xl font-black text-slate-400 line-through font-mono-price">
                      {formatINR(selectedProduct.referencePrice)}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">Typical Market / MRP</p>
                  </div>
                </div>

                {/* 2. Big Deals Price */}
                <div className="bg-[#172554] p-4 rounded-xl border border-[#3B82F6]/50 flex flex-col justify-between relative shadow-lg shadow-[#1D4ED8]/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#93C5FD]">
                      BIG DEALS PRICE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E5A919]" />
                  </div>
                  <div className="mt-3">
                    <span className="text-3xl sm:text-4xl font-black text-[#FFE27A] font-mono-price">
                      {formatINR(selectedProduct.price)}
                    </span>
                    <p className="text-[11px] text-[#93C5FD] mt-1">Direct Deal Price</p>
                  </div>
                </div>

                {/* 3. You Save */}
                <div className="bg-[#064E3B]/40 p-4 rounded-xl border border-emerald-500/40 flex flex-col justify-between relative">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-wider">
                      YOU SAVE
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono-price">
                      {formatINR(selectedProduct.savingsAmount)}
                    </span>
                    <p className="text-[11px] text-emerald-400/90 font-bold mt-1">
                      {savingsPct}% Cash Retained
                    </p>
                  </div>
                </div>
              </div>

              {/* Graphical Visual Comparison Bar */}
              <div className="mt-8 bg-slate-900/90 p-5 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                  <span>Price Ratio Comparison</span>
                  <span className="text-[#E5A919]">
                    You Pay Only {Math.round(ratio)}% of Standard Market
                  </span>
                </div>

                <div className="w-full h-5 bg-slate-800 rounded-full overflow-hidden flex relative p-0.5 border border-slate-700">
                  {/* Big Deals Portion */}
                  <div
                    className="h-full rounded-l-full bg-gradient-to-r from-[#1D4ED8] to-[#E5A919] transition-all duration-700 flex items-center justify-end pr-2 text-[10px] font-black text-[#050B17]"
                    style={{ width: `${ratio}%` }}
                  >
                    {Math.round(ratio)}%
                  </div>
                  {/* Savings Portion */}
                  <div
                    className="h-full rounded-r-full bg-emerald-500/80 transition-all duration-700 flex items-center justify-center text-[10px] font-black text-white"
                    style={{ width: `${100 - ratio}%` }}
                  >
                    Save {savingsPct}%
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5A919] inline-block" /> Big Deals Price
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Your Immediate Saving
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getProductWhatsAppUrl(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order This Deal on WhatsApp</span>
                </a>

                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#E5A919]" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
