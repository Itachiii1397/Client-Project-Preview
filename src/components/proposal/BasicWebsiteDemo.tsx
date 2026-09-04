import React, { useState } from 'react';
import { Smartphone, Monitor, MessageCircle, MapPin, Clock, Phone, ExternalLink, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';
import { Logo } from '../Logo';
import { BIG_DEALS_WHATSAPP_URL } from '../../data/proposalData';

export const BasicWebsiteDemo: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const staticCategories = ['Kitchen & Home', 'Sports & Fitness', 'Personal Care', 'Electronics'];

  const staticProducts = [
    {
      name: 'Preethi Zodiac Mixer Grinder',
      category: 'Kitchen',
      price: '₹7,999',
      mrp: '₹11,547',
      condition: 'Open-Box Item',
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Yonex Astrox 88D Play Badminton Racket',
      category: 'Sports',
      price: '₹2,499',
      mrp: '₹3,790',
      condition: 'Surplus Stock',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Braun Series 3 Electric Shaver',
      category: 'Personal Care',
      price: '₹1,999',
      mrp: '₹3,495',
      condition: 'Open-Box Item',
      image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Borosil Insulated Stainless Steel Flask',
      category: 'Home',
      price: '₹649',
      mrp: '₹1,190',
      condition: 'Surplus Stock',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <section id="basic-website-demo" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 05 · BASIC WEBSITE DEMO (OPTION 01 · ₹24,900)
        </span>
      </div>

      {/* Main Headline & Context */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold mb-3">
            <span>WHAT A BASIC WEBSITE LOOKS LIKE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            The Digital Brochure Approach.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Professional digital presence without the operational complexity of ecommerce.
          </p>
        </div>

        {/* Viewport Switcher Controls */}
        <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              deviceMode === 'desktop'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Desktop View</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              deviceMode === 'mobile'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile View</span>
          </button>
        </div>
      </div>

      {/* Device Frame Simulation */}
      <div className="flex justify-center">
        <div
          className={`w-full transition-all duration-300 rounded-2xl bg-[#080D1A] border-2 border-slate-700 shadow-2xl overflow-hidden ${
            deviceMode === 'mobile' ? 'max-w-sm' : 'max-w-6xl'
          }`}
        >
          {/* Browser / Phone Top Bar */}
          <div className="bg-[#0B132B] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-[11px] text-slate-400 truncate max-w-[200px] sm:max-w-none">
                https://bigdeals.in (Static Digital Brochure)
              </span>
            </div>
            <span className="text-[10px] text-blue-400 uppercase font-bold tracking-wider hidden sm:inline-block">
              Simulated ₹24,900 Scope
            </span>
          </div>

          {/* Embedded Website Canvas */}
          <div className="bg-[#050B17] text-slate-100 p-4 sm:p-8 space-y-10 max-h-[620px] overflow-y-auto custom-scrollbar">
            {/* Website Navigation Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <Logo size="sm" showTagline={false} />
              <div className="flex items-center gap-4 text-xs">
                {deviceMode === 'desktop' && (
                  <div className="hidden sm:flex items-center gap-5 text-slate-300 font-medium">
                    <span>Products</span>
                    <span>About Us</span>
                    <span>Visit Store</span>
                  </div>
                )}
                <a
                  href={BIG_DEALS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>

            {/* Website Hero */}
            <div className="text-center py-6 sm:py-10 max-w-2xl mx-auto space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E5A919]/10 text-[#E5A919] border border-[#E5A919]/30 text-[10px] font-mono font-bold uppercase">
                Branded Products • Open-Box Prices
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Big Brand Quality at Wholesale Retail Rates.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
                Discover genuine branded surplus, open-box merchandise, and seasonal essentials at Big Deals. Visit our retail store or inquire directly via WhatsApp.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <a
                  href={BIG_DEALS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#E5A919] text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                >
                  Inquire Today via WhatsApp
                </a>
              </div>
            </div>

            {/* Value Proposition Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Branded Inventory', desc: '100% genuine products sourced from authorized excess & retail surplus batches.' },
                { title: 'Substantial Savings', desc: 'Priced well below typical online reference MRP benchmarks for real consumer value.' },
                { title: 'Direct Store Walk-In', desc: 'Inspect items in person at our store or arrange local pickup / delivery.' },
              ].map((val, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-bold text-xs text-white mb-1 font-heading">{val.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>

            {/* Product Highlights Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading">Featured Deals Showcase</h4>
                  <p className="text-[11px] text-slate-400">Curated sample of available in-store inventory.</p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 px-2 py-1 rounded bg-slate-900 border border-slate-800">
                  Static Showcase
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {staticProducts.map((p, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-950 mb-2.5">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        <span className="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/70 text-amber-300 font-mono">
                          {p.condition}
                        </span>
                      </div>
                      <span className="text-[10px] text-blue-400 font-mono uppercase">{p.category}</span>
                      <h5 className="font-bold text-xs text-white line-clamp-2 mt-0.5 font-heading">{p.name}</h5>
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-800">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-extrabold text-white font-heading">{p.price}</span>
                        <span className="text-[10px] text-slate-500 line-through font-mono">{p.mrp}</span>
                      </div>
                      <a
                        href={BIG_DEALS_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 w-full py-1.5 rounded bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Showcase */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white font-heading">Popular Categories</h4>
              <div className="flex flex-wrap gap-2">
                {staticCategories.map((c, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* About / Store Location & Hours */}
            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <h5 className="font-bold text-white font-heading text-sm">About Big Deals</h5>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  Big Deals brings value-conscious shoppers genuine branded open-box and surplus inventory across appliances, sports, and home goods at unbeatable prices.
                </p>
              </div>
              <div className="space-y-2 font-mono text-[11px] text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Big Deals Retail Store · Bangalore, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Mon – Sat: 10:30 AM – 8:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>WhatsApp Inquiries Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Context Banner */}
      <div className="mt-8 p-5 rounded-2xl bg-blue-950/20 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono font-bold text-blue-300 uppercase">
            Scope Assessment · Option 01 (₹24,900)
          </div>
          <p className="text-xs text-slate-300 max-w-3xl">
            A basic website provides strong brand credibility and customer contact points, but does not allow customers to filter 60+ items, compare reference savings live, or compile items into a structured cart.
          </p>
        </div>
        <a
          href="#comparison"
          className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 font-mono"
        >
          <span>Compare with Ecommerce →</span>
        </a>
      </div>
    </section>
  );
};
