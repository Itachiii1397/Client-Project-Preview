import React, { useState } from 'react';
import { DISPLAY_WHATSAPP, PRIMARY_WHATSAPP_NUMBER } from '../data/products';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const whatsappUrl = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi Big Deals, I would like to check current deals and availability!'
  )}`;

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Speech Prompt Bubble */}
      {isOpen && (
        <div className="pointer-events-auto bg-[#091326] border border-slate-700 p-3 rounded-2xl shadow-2xl max-w-xs text-xs text-white relative animate-float flex items-start gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mt-1 flex-shrink-0" />
          <div>
            <span className="font-bold text-[#FFE27A] block">Instant Deal Assistance</span>
            <p className="text-slate-300 text-[11px] mt-0.5">
              Need stock confirmation or live photos? Chat directly on WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white p-0.5"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Big Deals"
        className="pointer-events-auto w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#050B17] flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all group"
        title={`Chat with Big Deals on WhatsApp (${DISPLAY_WHATSAPP})`}
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" />
      </a>
    </aside>
  );
};
