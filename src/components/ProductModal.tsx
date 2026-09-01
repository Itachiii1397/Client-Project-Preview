import React, { useState } from 'react';
import { Product } from '../types';
import { formatINR, getProductWhatsAppUrl } from '../data/products';
import { useCart } from '../context/CartContext';
import { X, MessageCircle, ShoppingBag, Plus, Minus, ShieldCheck, CheckCircle2, Info, HelpCircle } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart, celebrateSavings } = useCart();

  if (!product) return null;

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];
  const activeImage = imagesList[selectedImageIndex] || product.image;

  const handleAdd = () => {
    addToCart(product, quantity);
    celebrateSavings();
  };

  const handleWhatsApp = () => {
    window.open(getProductWhatsAppUrl(product, quantity), '_blank');
  };

  const getConditionInfo = (condition?: string) => {
    switch (condition) {
      case 'open-box':
        return {
          label: 'OPEN-BOX VERIFIED',
          bg: 'bg-[#050B17] text-amber-300 border-amber-500/40',
          desc: 'Original retail packaging opened for inspection / surplus batch. Guaranteed 100% genuine and fully functional.',
        };
      case 'new':
        return {
          label: 'BRAND NEW',
          bg: 'bg-[#050B17] text-emerald-300 border-emerald-500/40',
          desc: 'Factory-sealed condition direct from authorized distributor surplus.',
        };
      case 'special inventory':
        return {
          label: 'CLEARANCE / SURPLUS',
          bg: 'bg-[#050B17] text-sky-300 border-sky-500/40',
          desc: 'Liquidation & volume clearance stock at deep markdown below standard market.',
        };
      default:
        return {
          label: 'VERIFIED INVENTORY',
          bg: 'bg-[#050B17] text-slate-200 border-slate-700',
          desc: 'Contact us directly on WhatsApp to confirm physical packaging and batch details.',
        };
    }
  };

  const conditionDetails = getConditionInfo(product.condition);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#050B17]/85 backdrop-blur-md">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-4xl bg-[#091326] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column: Image Showcase & Gallery */}
          <div className="md:col-span-5 bg-slate-900/90 p-6 flex flex-col items-center justify-between relative border-b md:border-b-0 md:border-r border-slate-800">
            {/* Top Badges */}
            <div className="w-full flex items-center justify-between mb-2">
              <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${conditionDetails.bg}`}>
                {conditionDetails.label}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-black bg-[#E5A919] text-[#050B17] shadow-md">
                {product.savingsPercentage}% OFF
              </span>
            </div>

            {/* Main Active Image */}
            <div className="w-full h-64 sm:h-72 flex items-center justify-center p-4">
              <img
                src={activeImage}
                alt={product.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Thumbnail Gallery (if multiple) */}
            {imagesList.length > 1 && (
              <div className="flex items-center gap-2 mt-3 pb-1 overflow-x-auto w-full justify-center">
                {imagesList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl bg-slate-950 p-1 border transition-all cursor-pointer overflow-hidden flex-shrink-0 ${
                      selectedImageIndex === idx
                        ? 'border-[#E5A919] ring-2 ring-[#E5A919]/30 scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Physical Inventory Verification Note */}
            <div className="mt-4 w-full p-3 rounded-xl bg-[#0A1630] border border-slate-800/90 flex items-start gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Physical Inventory Inspection</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{conditionDetails.desc}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & Model Details */}
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-black uppercase tracking-widest text-[#93C5FD]">
                  {product.category} {product.brand ? `• ${product.brand}` : ''}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                  {product.availability || 'In Stock'}
                </span>
              </div>

              {/* Product Title */}
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white font-heading leading-snug">
                {product.name}
              </h2>

              {/* Price Block */}
              <div className="mt-4 p-4 rounded-2xl bg-[#0F1D3D] border border-[#1E3A8A]/50">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Big Deals Direct Price
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-[#FFE27A] font-mono-price">
                      {formatINR(product.price * quantity)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 line-through font-mono-price block">
                      MRP {formatINR(product.referencePrice * quantity)}
                    </span>
                    <span className="text-sm font-black text-emerald-400">
                      Save ₹{(product.savingsAmount * quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Key Features */}
              {product.keyFeatures && product.keyFeatures.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A919] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">{key}</span>
                        <span className="text-slate-200 font-semibold">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-300 uppercase">Quantity</span>
                <div className="flex items-center gap-3 bg-slate-900 p-1 rounded-xl border border-slate-700">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-bold text-white font-mono-price">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order on WhatsApp</span>
                </button>

                <button
                  onClick={handleAdd}
                  className="py-3.5 px-4 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#3B82F6]/40 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-[#E5A919]" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

