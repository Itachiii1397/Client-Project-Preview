import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { DealRadar } from './components/DealRadar';
import { PriceComparison } from './components/PriceComparison';
import { FeaturedDeals } from './components/FeaturedDeals';
import { CatalogSection } from './components/CatalogSection';
import { DealRoom3D } from './components/DealRoom3D';
import { SavingsCalculator } from './components/SavingsCalculator';
import { BrandStory } from './components/BrandStory';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Category, Product } from './types';
import { CheckCircle2 } from 'lucide-react';

function MainApp() {
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
        {/* 1 & 2. 3D Deal Vault Hero */}
        <div id="hero">
          <Hero3D
            onExploreClick={() => handleNavigate('catalog')}
            onDealRoomClick={() => handleNavigate('deal-room')}
          />
        </div>

        {/* 3. Deal Radar Moving Ticker */}
        <DealRadar onSelectCategory={handleSelectCategory} />

        {/* 4. Price Comparison Experience: "THE DEAL IS IN THE DIFFERENCE" */}
        <PriceComparison />

        {/* 5. Today's Big Deals Spotlight */}
        <FeaturedDeals
          onQuickView={(product) => setActiveProduct(product)}
          onExploreMore={() => handleNavigate('catalog')}
        />

        {/* 6. Full Interactive Catalog / Shop */}
        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(product) => setActiveProduct(product)}
        />

        {/* 7. Enter The Deal Room 3D Virtual Showroom */}
        <DealRoom3D
          onSelectCategory={handleSelectCategory}
          onQuickView={(product) => setActiveProduct(product)}
        />

        {/* 8. Savings Calculator: "HOW MUCH CAN YOU SAVE?" */}
        <SavingsCalculator />

        {/* 9. Brand Story & 4 Trust Pillars: "WHY BIG DEALS?" */}
        <BrandStory />
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
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
