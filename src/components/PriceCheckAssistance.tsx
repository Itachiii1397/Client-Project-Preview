import React, { useState } from 'react';
import { PRIMARY_WHATSAPP_NUMBER, DISPLAY_WHATSAPP } from '../data/products';
import { SearchCheck, MessageCircle, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';

export const PriceCheckAssistance: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [seenPrice, setSeenPrice] = useState('');
  const [platform, setPlatform] = useState('Amazon / Flipkart / Other');

  const handlePriceCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim()) return;

    let message = `Hi Big Deals,\n\n`;
    message += `I found a product elsewhere and want to check if Big Deals has it at a smarter deal:\n\n`;
    message += `• *Product Name / Model:* ${productName.trim()}\n`;
    if (seenPrice.trim()) {
      message += `• *Price I Found Elsewhere:* ₹${seenPrice.trim()}\n`;
    }
    if (platform.trim()) {
      message += `• *Platform / Source:* ${platform.trim()}\n`;
    }
    message += `\nPlease check your physical store inventory and let me know your Big Deals price!\n\n`;
    message += `Motif: Check the price. Then check Big Deals.`;

    window.open(`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="price-check" className="py-20 bg-[#050B17] relative overflow-hidden border-b border-slate-800">
      {/* Glow background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#E5A919]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#0B172E] via-[#0E1E3D] to-[#071124] border border-[#3B82F6]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E40AF]/25 border border-[#3B82F6]/50 text-[#93C5FD] text-xs font-black uppercase tracking-wider mb-3">
              <SearchCheck className="w-4 h-4 text-[#E5A919]" />
              <span>EMERGING CAPABILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
              FOUND IT ELSEWHERE? <br />
              <span className="text-[#E5A919]">CHECK BIG DEALS.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Send us the product and the price you&apos;re seeing online. We&apos;ll check our direct physical inventory and help you check the deal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handlePriceCheck} className="max-w-2xl mx-auto space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Product Name or Model
              </label>
              <input
                type="text"
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g. Havells Instant Geyser 3L, Braun Series 9, Yonex Astrox..."
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-sm font-semibold focus:outline-none focus:border-[#E5A919] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Price You Saw (₹)
                </label>
                <input
                  type="text"
                  value={seenPrice}
                  onChange={(e) => setSeenPrice(e.target.value)}
                  placeholder="e.g. 3,499"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-sm font-semibold focus:outline-none focus:border-[#E5A919] transition-colors font-mono-price"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Platform / Website
                </label>
                <input
                  type="text"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  placeholder="e.g. Amazon, Flipkart, Retail Store"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-sm font-semibold focus:outline-none focus:border-[#E5A919] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/25 transition-all cursor-pointer active:scale-98 mt-6"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Check Deal on WhatsApp ({DISPLAY_WHATSAPP})</span>
            </button>

            <p className="text-xs text-center text-slate-400 mt-2">
              Honest physical inventory check directly with our store team. No automated guesswork.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
