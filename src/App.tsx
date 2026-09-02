import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { DealRadar } from './components/DealRadar';
import { PriceComparison } from './components/PriceComparison';
import { HeroDealSpotlight } from './components/HeroDealSpotlight';
import { FeaturedDeals } from './components/FeaturedDeals';
import { CatalogSection } from './components/CatalogSection';
import { DealConcierge } from './components/DealConcierge';
import { DealRoom3D } from './components/DealRoom3D';
import { PriceCheckAssistance } from './components/PriceCheckAssistance';
import { SavingsCalculator } from './components/SavingsCalculator';
import { BrandStory } from './components/BrandStory';
import { FutureGrowth } from './components/FutureGrowth';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Category, Product } from './types';
import { CheckCircle2 } from 'lucide-react';
import { ProposalApp } from './components/proposal/ProposalApp';
import { StorePreviewBanner } from './components/proposal/StorePreviewBanner';

function StoreApp({ onBackToProposal }: { onBackToProposal: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const { toastMessage } = useCart();

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'root' || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectCategory = (cat: Category) => {
    setSelectedCategory(cat);
    handleNavigate('catalog');
  };

  return (
    <div className="min-h-screen bg-[#050B17] text-slate-100 flex flex-col relative selection:bg-[#E5A919] selection:text-[#050B17]">
      {/* Top Persistent Back to Proposal Control Banner */}
      <StorePreviewBanner onBackToProposal={onBackToProposal} />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0B172E] border border-[#E5A919]/60 text-white px-5 py-2.5 rounded-2xl shadow-2xl shadow-[#E5A919]/20 flex items-center gap-2.5 text-xs font-bold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-[#E5A919]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar onNavigate={handleNavigate} onSelectCategory={handleSelectCategory} />

      {/* Main Content Sections in Narrative Order */}
      <main className="flex-grow">
        {/* 1. 3D Deal Vault Hero ("BRANDED PRODUCTS. SMARTER DEALS.") */}
        <div id="hero">
          <Hero3D
            onExploreClick={() => handleNavigate('catalog')}
            onDealRoomClick={() => handleNavigate('deal-room')}
          />
        </div>

        {/* 2. Deal Radar Moving Ticker */}
        <DealRadar onSelectCategory={handleSelectCategory} />

        {/* 3. The Big Deal Difference ("CHECK THE PRICE. THEN CHECK BIG DEALS.") */}
        <PriceComparison />

        {/* 4. Today's Big Deal: Editorial Campaign Spotlight */}
        <HeroDealSpotlight onQuickView={(product) => setActiveProduct(product)} />

        {/* 5. Featured Deals Grid */}
        <FeaturedDeals
          onQuickView={(product) => setActiveProduct(product)}
          onExploreMore={() => handleNavigate('catalog')}
        />

        {/* 6. Full Interactive Catalog / Shop (64 Real Products) */}
        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(product) => setActiveProduct(product)}
        />

        {/* 7. Deal Concierge ("TELL US WHAT YOU NEED.") */}
        <DealConcierge onQuickView={(product) => setActiveProduct(product)} />

        {/* 8. 3D Virtual Showroom ("ENTER THE DEAL ROOM") */}
        <DealRoom3D
          onSelectCategory={handleSelectCategory}
          onQuickView={(product) => setActiveProduct(product)}
        />

        {/* 9. Found It Elsewhere? Check Big Deals */}
        <PriceCheckAssistance />

        {/* 10. Savings Calculator */}
        <SavingsCalculator />

        {/* 11. How Big Deals Work (5-Step Factual Pipeline) */}
        <BrandStory />

        {/* 12. Future Growth ("MORE THAN A STORE.") */}
        <FutureGrowth />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onSelectCategory={handleSelectCategory} />

      {/* Global Overlays & Floats */}
      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      <CartDrawer />
      <FloatingWhatsApp />
      <MobileBottomNav onNavigate={handleNavigate} activeSection={activeSection} />
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<'proposal' | 'preview'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#preview' || hash === '#store') {
        return 'preview';
      }
    }
    return 'proposal';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#preview' || hash === '#store') {
        setCurrentView('preview');
      } else {
        setCurrentView('proposal');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSwitchToPreview = () => {
    window.location.hash = '#preview';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProposal = () => {
    window.location.hash = '#proposal';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'preview') {
    return (
      <CartProvider>
        <StoreApp onBackToProposal={handleBackToProposal} />
      </CartProvider>
    );
  }

  return <ProposalApp onSwitchToPreview={handleSwitchToPreview} />;
}

