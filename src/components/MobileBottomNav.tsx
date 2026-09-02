import React from 'react';
import { useCart } from '../context/CartContext';
import { PRIMARY_WHATSAPP_NUMBER } from '../data/products';
import { Home, ShoppingBag, Flame, Sparkles, MessageCircle } from 'lucide-react';

interface MobileBottomNavProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onNavigate, activeSection }) => {
  const { totalCount, setIsCartOpen } = useCart();

  const navItems = [
    { label: 'HOME', icon: Home, id: 'hero' },
    { label: 'SHOP', icon: ShoppingBag, id: 'catalog' },
    { label: 'DEALS', icon: Flame, id: 'todays-deals' },
  ];

  return (
    <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050B17]/95 backdrop-blur-lg border-t border-slate-800 px-2 py-2">
      <div className="grid grid-cols-5 gap-1 items-center text-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-colors ${
                isActive ? 'text-[#E5A919]' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </button>
          );
        })}

        {/* Cart Trigger with live count */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-slate-400 hover:text-white relative"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 mb-0.5 text-[#FFE27A]" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#E5A919] text-[#050B17] font-black text-[9px] flex items-center justify-center font-mono-price">
                {totalCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">CART</span>
        </button>

        {/* WhatsApp Direct Action */}
        <a
          href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Big Deals, I would like to check current deals!')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#25D366] hover:text-emerald-300"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-current" />
          <span className="text-[10px] font-black uppercase tracking-wider">WHATSAPP</span>
        </a>
      </div>
    </nav>
  );
};
