import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, formatINR, getProductWhatsAppUrl } from '../data/products';
import { useCart } from '../context/CartContext';
import { Flame, Eye, MessageCircle, ShoppingBag, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';

interface HeroDealSpotlightProps {
  onQuickView: (product: Product) => void;
}

export const HeroDealSpotlight: React.FC<HeroDealSpotlightProps> = ({ onQuickView }) => {
  // Select top featured hero deal from canonical catalog
  const heroProduct = PRODUCTS.find((p) => p.canonicalId === '2489') || PRODUCTS[0]; // Havells Instant Geyser
  const [imageError, setImageError] = useState(false);
  const { addToCart, celebrateSavings } = useCart();

  const handleWhatsApp = () => {
    window.open(getProductWhatsAppUrl(heroProduct), '_blank');
  };

  const handleAddToCart = () => {
    addToCart(heroProduct, 1);
    celebrateSavings();
  };

  return (
    <section id="hero-deal-spotlight" className="py-16 bg-[#040914] relative overflow-hidden border-b border-slate-800">
      {/* Dynamic ambient backlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#1E40AF]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#E5A919]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Campaign Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/40 text-[#E5A919] text-xs font-black uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>EDITORIAL CAMPAIGN SPOTLIGHT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
              TODAY&apos;S <span className="text-[#E5A919]">BIG DEAL</span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400 bg-[#0B172E] px-3.5 py-2 rounded-xl border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Single Highlight Deal • In Stock</span>
          </div>
        </div>

        {/* Campaign Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#09152B] via-[#0E1E3D] to-[#071124] border border-[#1E3A8A]/60 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E5A919] via-[#3B82F6] to-[#10B981]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Product Visual Presentation */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-md h-72 sm:h-96 rounded-2xl bg-[#060D1A] border border-slate-800 flex items-center justify-center p-6 sm:p-8 overflow-hidden group">
                {!imageError && heroProduct.image ? (
                  <img
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    onError={() => setImageError(true)}
                    className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#0B172E] border border-dashed border-slate-700 rounded-xl text-slate-400">
                    <span className="text-[10px] font-black tracking-widest text-[#E5A919] uppercase">BIG DEALS</span>
                    <span className="text-xs font-bold text-slate-300 mt-1">PRODUCT IMAGE</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">IMAGE COMING FROM CATALOG</span>
                  </div>
                )}

                {/* Floating Big Savings Badge */}
                <div className="absolute top-4 right-4 bg-[#E5A919] text-[#050B17] font-black text-sm px-3.5 py-1.5 rounded-xl shadow-xl shadow-[#E5A919]/30 uppercase tracking-wide flex items-center gap-1.5">
                  <Zap className="w-4 h-4 fill-current" />
                  <span>{heroProduct.savingsPercentage}% OFF</span>
                </div>

                <div className="absolute top-4 left-4 bg-[#050B17]/90 backdrop-blur-md text-slate-200 border border-slate-700 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider">
                  HOT DEAL OF THE DAY
                </div>
              </div>
            </div>

            {/* Right: Deal Narrative & Commercial Pricing */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-black uppercase tracking-widest text-[#93C5FD]">
                    {heroProduct.category}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="font-bold text-slate-300">{heroProduct.brand}</span>
                </div>

                <h3 className="mt-2 text-2xl sm:text-4xl font-black text-white font-heading leading-tight">
                  {heroProduct.name}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
                  {heroProduct.description}
                </p>

                {/* Commercial Price Breakdown Box */}
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#060D1A] border border-[#1E3A8A]/50">
                  <div className="grid grid-cols-3 gap-3 items-baseline">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Reference Price
                      </span>
                      <span className="text-lg sm:text-2xl font-black text-slate-400 line-through font-mono-price">
                        {formatINR(heroProduct.referencePrice)}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#93C5FD] block">
                        Big Deals Price
                      </span>
                      <span className="text-2xl sm:text-4xl font-black text-[#FFE27A] font-mono-price">
                        {formatINR(heroProduct.price)}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                        You Save
                      </span>
                      <span className="text-xl sm:text-3xl font-black text-emerald-400 font-mono-price">
                        ₹{heroProduct.savingsAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trust line */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    Genuine Product • Direct Store Stock
                  </span>
                  <span className="font-bold text-slate-300">
                    Motif: <em className="text-[#FFE27A] not-italic">Check the price. Then check Big Deals.</em>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="sm:col-span-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order on WhatsApp</span>
                </button>

                <button
                  onClick={() => onQuickView(heroProduct)}
                  className="py-3.5 px-4 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#3B82F6]/50 flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                >
                  <Eye className="w-4 h-4 text-[#FFE27A]" />
                  <span>View Deal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
