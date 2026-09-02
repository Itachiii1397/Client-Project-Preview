import React from 'react';
import { ArrowLeft, FileText, Sparkles, ShoppingBag } from 'lucide-react';

interface StorePreviewBannerProps {
  onBackToProposal: () => void;
}

export const StorePreviewBanner: React.FC<StorePreviewBannerProps> = ({ onBackToProposal }) => {
  return (
    <div className="sticky top-0 z-50 bg-[#030712]/95 backdrop-blur-md border-b border-amber-500/30 px-4 py-2.5 text-xs text-white shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Back to Proposal Action */}
        <button
          onClick={onBackToProposal}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO PROPOSAL</span>
        </button>

        {/* Center: Live Store Notice */}
        <div className="hidden md:flex items-center gap-2 text-slate-300 font-mono text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-amber-300 font-bold font-heading">LIVE PREVIEW MODE:</span>
          <span>Browsing 64 current Big Deals catalogue products with active WhatsApp cart ordering.</span>
        </div>

        {/* Right: Quick Proposal Switcher Pill */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
            <span>INNITYX × BIG DEALS</span>
          </div>
          <button
            onClick={onBackToProposal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold border border-white/10"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Proposal View</span>
          </button>
        </div>
      </div>
    </div>
  );
};
