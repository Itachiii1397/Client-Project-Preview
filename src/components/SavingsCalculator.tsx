import React, { useState } from 'react';
import { PRODUCTS, formatINR, getProductWhatsAppUrl } from '../data/products';
import { useCart } from '../context/CartContext';
import { Calculator, Sparkles, TrendingDown, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(PRODUCTS[0].id);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, celebrateSavings } = useCart();

  const product = PRODUCTS.find((p) => p.id === selectedId) || PRODUCTS[0];

  const totalReference = product.referencePrice * quantity;
  const totalBigDeals = product.price * quantity;
  const totalSaved = totalReference - totalBigDeals;
  const pct = Math.round((totalSaved / totalReference) * 100);

  const handleCalculate = (id: string) => {
    setSelectedId(id);
    celebrateSavings();
  };

  return (
    <section id="savings-calculator" className="py-20 bg-[#070E1F] relative overflow-hidden border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0B172E] via-[#0F1E3D] to-[#081226] rounded-3xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#E5A919]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/40 text-[#E5A919] text-xs font-black uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Direct Value Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
              HOW MUCH CAN <span className="text-[#E5A919]">YOU SAVE?</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Select any item from our inventory to calculate exact instant cash savings compared to ordinary retail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product selector */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Select a Product to Calculate
                </label>
                <select
                  value={selectedId}
                  onChange={(e) => handleCalculate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm font-semibold text-white focus:outline-none focus:border-[#E5A919] transition-colors"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {formatINR(p.price)} (Save ₹{p.savingsAmount.toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Quantity ({quantity} {quantity === 1 ? 'unit' : 'units'})
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#E5A919]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono-price">
                  <span>1 Unit</span>
                  <span>5 Units</span>
                  <span>10 Units</span>
                </div>
              </div>

              {/* Selected product thumbnail */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-slate-800 p-1 flex items-center justify-center flex-shrink-0">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase text-[#93C5FD]">{product.category}</span>
                  <h4 className="text-xs font-bold text-white truncate">{product.name}</h4>
                  <span className="text-[11px] text-emerald-400 font-bold">
                    {product.savingsPercentage}% Off Normal Reference Price
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Calculated Result Box */}
            <div className="lg:col-span-6 bg-[#060D1A] p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-800">
                  <span className="text-slate-400 font-semibold">Standard Reference Value:</span>
                  <span className="text-slate-400 font-mono-price font-bold line-through">
                    {formatINR(totalReference)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm pb-3 border-b border-slate-800">
                  <span className="text-slate-200 font-bold">Big Deals Total Price:</span>
                  <span className="text-2xl font-black text-[#FFE27A] font-mono-price">
                    {formatINR(totalBigDeals)}
                  </span>
                </div>

                {/* The Big Savings Highlight */}
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                      Total Cash Saved
                    </span>
                    <span className="text-3xl font-black text-emerald-300 font-mono-price">
                      {formatINR(totalSaved)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-[#050B17] font-black text-xs">
                      {pct}% OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getProductWhatsAppUrl(product, quantity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => addToCart(product, quantity)}
                  className="py-3 px-4 rounded-xl bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#E5A919]" />
                  <span>Add Deal to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
