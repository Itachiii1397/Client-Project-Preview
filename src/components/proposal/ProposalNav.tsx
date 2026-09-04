import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ShoppingBag, FileText, Menu, X } from 'lucide-react';
import { InnityxLogo } from './InnityxLogo';

interface ProposalNavProps {
  onSwitchToPreview: () => void;
}

export const ProposalNav: React.FC<ProposalNavProps> = ({ onSwitchToPreview }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('cover');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = [
        'cover',
        'business-understanding',
        'website-vs-commerce',
        'ecommerce-demo',
        'basic-website-demo',
        'commerce-operations-demo',
        'pricing',
        'marketing',
        'customer-journey',
        'roadmap',
        'investment-summary',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { id: 'business-understanding', label: 'Positioning' },
    { id: 'website-vs-commerce', label: 'Comparison' },
    { id: 'ecommerce-demo', label: 'Ecommerce' },
    { id: 'basic-website-demo', label: 'Basic Site' },
    { id: 'commerce-operations-demo', label: 'Operations' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'investment-summary', label: 'Summary' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030712]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Approved INNITYX Brand Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('cover')}
              className="flex items-center text-left group focus:outline-none"
            >
              <InnityxLogo size="sm" showSubtitle={false} />
            </button>

            {/* Separator */}
            <div className="hidden sm:block h-6 w-px bg-white/10 mx-1" />

            {/* Client Co-brand Pill */}
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-xs text-slate-400 font-mono">FOR:</span>
              <span className="text-xs font-bold text-amber-400 tracking-wide font-heading">
                BIG DEALS
              </span>
              <span className="text-[10px] text-slate-500 font-mono">· 2026 PROPOSAL</span>
            </div>
          </div>

          {/* Center: In-page Jump Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/5 px-2.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  activeSection === link.id
                    ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Dual Mode Switcher Buttons */}
          <div className="flex items-center gap-2">
            {/* Active Proposal Tab Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Proposal</span>
            </div>

            {/* Switch to Live Store Preview Button */}
            <button
              onClick={onSwitchToPreview}
              className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              title="Open the interactive Big Deals store preview"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
              <span>Store Preview</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-mono uppercase bg-black/20 rounded font-bold">
                64 Items
              </span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-30 bg-[#030712]/98 backdrop-blur-xl border-b border-white/10 py-5 px-6 shadow-2xl xl:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 pb-1 border-b border-white/5">
              Proposal Sections
            </div>
            {[
              { id: 'cover', label: '01 · Overview' },
              { id: 'business-understanding', label: '02 · Business Understanding' },
              { id: 'website-vs-commerce', label: '03 · Website vs Commerce' },
              { id: 'ecommerce-demo', label: '04 · Ecommerce Demo' },
              { id: 'basic-website-demo', label: '05 · Basic Website Demo' },
              { id: 'commerce-operations-demo', label: '06 · Operations Demo' },
              { id: 'pricing', label: '07 · Pricing' },
              { id: 'marketing', label: '08 · Marketing' },
              { id: 'customer-journey', label: '09 · Customer Journey' },
              { id: 'roadmap', label: '10 · Roadmap' },
              { id: 'investment-summary', label: '11 · Investment Summary' },
              { id: 'contact', label: '12 · Contact INNITYX' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-1.5 text-sm text-slate-300 hover:text-blue-400 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSwitchToPreview();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Switch to Live Store Preview</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
