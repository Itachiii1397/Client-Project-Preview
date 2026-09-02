import React, { useState } from 'react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { DISPLAY_WHATSAPP, PRIMARY_WHATSAPP_NUMBER } from '../data/products';
import { Category } from '../types';
import { Search, ShoppingBag, MessageCircle, Menu, X, Sparkles, Phone, Compass, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (cat: Category) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onSelectCategory }) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const navLinks = [
    { label: 'SHOP', id: 'catalog' },
    { label: 'DEALS', id: 'todays-deals' },
    { label: 'DIFFERENCE', id: 'price-comparison' },
    { label: 'CONCIERGE', id: 'concierge' },
    { label: 'DEAL ROOM', id: 'deal-room', highlight: true },
    { label: 'PRICE CHECK', id: 'price-check' },
    { label: 'ABOUT', id: 'about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#050B17]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Top Brand Motif Bar */}
      <div className="bg-[#0A1630] border-b border-slate-800 py-1 px-4 text-center">
        <span className="text-[11px] font-black uppercase tracking-wider text-[#FFE27A]">
          CHECK THE PRICE. THEN CHECK BIG DEALS. <span className="text-slate-400 font-normal">| Branded Products. Smarter Deals.</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <div className="cursor-pointer" onClick={() => handleNavClick('root')}>
            <Logo showTagline={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  link.highlight
                    ? 'bg-[#172554] text-[#93C5FD] border border-[#3B82F6]/50 hover:bg-[#1E40AF] hover:text-white flex items-center gap-1'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.highlight && <Sparkles className="w-3 h-3 text-[#E5A919]" />}
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search shortcut button */}
            <button
              onClick={() => handleNavClick('catalog')}
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors hidden sm:flex items-center justify-center cursor-pointer"
              title="Search deals"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              id="navbar-cart-btn"
              className="relative p-2.5 rounded-xl bg-[#0F1D3D] hover:bg-[#1E3A8A] text-white border border-[#3B82F6]/40 transition-all flex items-center justify-center cursor-pointer shadow-md"
              title="Open Deal Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFE27A]" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#E5A919] text-[#050B17] font-black text-[11px] flex items-center justify-center shadow-lg font-mono-price animate-bounce">
                  {totalCount}
                </span>
              )}
            </button>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Big Deals, I would like to check current deals!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#070F22] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className="p-3 rounded-xl bg-slate-900/90 text-left text-xs font-bold text-slate-200 hover:text-white hover:bg-[#1E40AF] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-[#E5A919]" />}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#25D366] text-[#050B17] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp ({DISPLAY_WHATSAPP})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
