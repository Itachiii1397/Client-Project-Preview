import React from 'react';
import { useCart } from '../context/CartContext';
import { formatINR, getCartWhatsAppUrl, DISPLAY_WHATSAPP } from '../data/products';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight, Sparkles, TrendingDown } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    totalPrice,
    totalReferencePrice,
    totalSavings,
    savingsPercentage,
    celebrateSavings,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = () => {
    celebrateSavings();
    window.open(getCartWhatsAppUrl(items), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050B17]/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#091326] border-l border-slate-700 shadow-2xl flex flex-col justify-between relative">
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#0B172E]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1E40AF]/40 border border-[#3B82F6]/40 flex items-center justify-center text-[#E5A919]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base font-heading">Your Deal Cart</h3>
                <span className="text-xs text-slate-400">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-red-400 transition-colors p-1 cursor-pointer"
                  title="Empty Cart"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/60 flex items-center justify-center mb-4 text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white">Your cart is empty</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Explore our branded open-box catalog to snag deep discounts below online market prices!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-[#1E40AF] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#2563EB] transition-all cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-[#0F1D3D]/90 border border-slate-800 flex gap-3.5 items-center relative"
                >
                  <div className="w-16 h-16 rounded-xl bg-slate-900/90 p-1.5 flex items-center justify-center flex-shrink-0 border border-slate-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate font-heading">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-black text-[#FFE27A] font-mono-price">
                        {formatINR(product.price * quantity)}
                      </span>
                      <span className="text-[10px] text-slate-400 line-through font-mono-price">
                        {formatINR(product.referencePrice * quantity)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity buttons */}
                      <div className="flex items-center gap-2 bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-700">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="text-slate-400 hover:text-white p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1 font-mono-price">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="text-slate-400 hover:text-white p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-slate-400 hover:text-red-400 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Calculation */}
          {items.length > 0 && (
            <div className="p-5 bg-[#0B172E] border-t border-slate-800 space-y-3">
              {/* Savings pill */}
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-between text-xs">
                <span className="text-emerald-300 font-bold flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4" /> Total Cash Saved:
                </span>
                <span className="text-emerald-300 font-black text-sm font-mono-price">
                  {formatINR(totalSavings)} ({savingsPercentage}% OFF)
                </span>
              </div>

              {/* Subtotal & Total */}
              <div className="space-y-1.5 text-xs text-slate-300 pt-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Reference Value:</span>
                  <span className="line-through text-slate-400 font-mono-price">
                    {formatINR(totalReferencePrice)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-slate-800">
                  <span>Big Deals Order Total:</span>
                  <span className="text-xl font-black text-[#FFE27A] font-mono-price">
                    {formatINR(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-4 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order Cart on WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Direct WhatsApp enquiry to <strong className="text-slate-200">{DISPLAY_WHATSAPP}</strong>. Fast dispatch & personal support.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
