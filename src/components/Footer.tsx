import React from 'react';
import { Logo } from './Logo';
import { DISPLAY_WHATSAPP, PRIMARY_WHATSAPP_NUMBER, CATEGORIES } from '../data/products';
import { Category } from '../types';
import { MessageCircle, Phone, MapPin, ShieldCheck, Mail, ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (cat: Category) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  return (
    <footer id="contact" className="bg-[#030712] border-t border-slate-800/80 pt-16 pb-24 md:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showTagline={true} size="lg" />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              India&apos;s premier open-box and surplus retail showroom. Direct authentic merchandise across kitchen, fitness, grooming, and household essentials at transparent savings.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#25D366] font-bold text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: {DISPLAY_WHATSAPP}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                  <MapPin className="w-4 h-4 text-[#E5A919]" />
                </div>
                <span>Pan-India Courier & WhatsApp Direct Dispatch</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop Full Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hero-deal-spotlight')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Today&apos;s Big Deal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('todays-deals')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Deals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('price-comparison')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Deal Difference
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('concierge')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Deal Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('deal-room')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  3D Deal Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('price-check')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Price Check
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How Big Deals Work
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Departments
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.slice(1, 7).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat);
                      onNavigate('catalog');
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trust & Policies */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Assurance & Policies
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Quality Tested Stock</span>
              </li>
              <li>
                <span>Transparent WhatsApp Checkout</span>
              </li>
              <li>
                <span>Pre-Dispatch Verification</span>
              </li>
              <li>
                <span>Shipping & Tracking Support</span>
              </li>
              <li>
                <span>Replacement Assistance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} BIG DEALS. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Branded Products. Open-Box Prices.</span>
            <span>•</span>
            <span>Indian Retail Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
