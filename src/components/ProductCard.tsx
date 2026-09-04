import React, { useState } from 'react';
import { Product } from '../types';
import { formatINR, getProductWhatsAppUrl } from '../data/products';
import { useCart } from '../context/CartContext';
import { MessageCircle, ShoppingBag, Eye, ShieldCheck, ImageOff } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(getProductWhatsAppUrl(product), '_blank');
  };

  const getConditionLabel = (condition?: string) => {
    switch (condition) {
      case 'open-box':
        return 'OPEN-BOX';
      case 'new':
        return 'BRAND NEW';
      case 'special-inventory':
        return 'SPECIAL INVENTORY';
      default:
        return 'ASK CONDITION';
    }
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-[#091224] rounded-2xl border border-slate-800 hover:border-[#1E40AF] transition-all duration-300 hover:shadow-xl hover:shadow-[#1E40AF]/15 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Top badges bar */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-[#050B17]/90 backdrop-blur-md text-slate-200 border border-slate-700/80 shadow-md">
          {getConditionLabel(product.condition)}
        </span>

        <span className="px-2.5 py-1 rounded-lg text-[11px] font-black bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-[#050B17] shadow-lg shadow-[#E5A919]/25">
          {product.savingsPercentage}% OFF
        </span>
      </div>

      {/* Image container */}
      <div className="relative w-full h-52 sm:h-56 bg-slate-900/70 p-4 flex items-center justify-center overflow-hidden">
        {!imageError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#0B172E] border border-dashed border-slate-700 rounded-xl text-slate-400">
            <span className="text-[10px] font-black tracking-widest text-[#E5A919] uppercase">BIG DEALS</span>
            <span className="text-xs font-bold text-slate-300 mt-1">PRODUCT IMAGE</span>
            <span className="text-[10px] text-slate-500 mt-0.5">IMAGE COMING FROM CATALOG</span>
          </div>
        )}

        {/* Quick View overlay on hover */}
        <div className="absolute inset-0 bg-[#050B17]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" /> View Details
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Category & Brand */}
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-bold uppercase tracking-wider text-[#93C5FD]">
              {product.category}
            </span>
            {product.brand && (
              <span className="text-[11px] font-semibold text-slate-400">
                {product.brand}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="mt-1.5 text-sm sm:text-base font-bold text-white font-heading line-clamp-2 leading-snug group-hover:text-[#93C5FD] transition-colors">
            {product.name}
          </h3>

          {/* Stock state & Store Badge */}
          <div className="mt-2 flex items-center justify-between gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${product.availability === 'Limited Stock' ? 'bg-amber-400' : 'bg-emerald-400'} animate-pulse`} />
              <span className="text-[11px] font-semibold text-slate-400">
                {product.availability || 'In Stock'}
              </span>
            </div>
            <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              Store Stock
            </span>
          </div>
        </div>

        {/* Pricing Block */}
        <div className="mt-4 pt-3 border-t border-slate-800/80">
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Big Deals Price
              </span>
              <span className="text-xl sm:text-2xl font-black text-white font-mono-price tracking-tight text-[#FFE27A]">
                {formatINR(product.price)}
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-400 font-semibold line-through font-mono-price">
                Ref. {formatINR(product.referencePrice)}
              </span>
              <span className="text-xs font-black text-emerald-400">
                Save ₹{product.savingsAmount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-3.5 grid grid-cols-5 gap-2">
            <button
              onClick={handleWhatsApp}
              title="Order this product immediately on WhatsApp"
              className="col-span-4 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#25D366]/20 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Order on WhatsApp</span>
            </button>

            <button
              onClick={handleAddToCart}
              title="Add product to Cart"
              className="col-span-1 py-2.5 rounded-xl bg-slate-800 hover:bg-[#1E40AF] text-slate-200 hover:text-white border border-slate-700 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

