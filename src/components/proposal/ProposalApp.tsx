import React from 'react';
import { ProposalNav } from './ProposalNav';
import { ProposalHero } from './ProposalHero';
import { OpportunitySection } from './OpportunitySection';
import { ComparisonSection } from './ComparisonSection';
import { BasicWebsiteDemo } from './BasicWebsiteDemo';
import { PreviewSection } from './PreviewSection';
import { AdminPreview } from './AdminPreview';
import { InvestmentSection } from './InvestmentSection';
import { MarketingSection } from './MarketingSection';
import { CustomerJourney } from './CustomerJourney';
import { RoadmapSection } from './RoadmapSection';
import { InvestmentSummary } from './InvestmentSummary';
import { ProposalFinalCTA } from './ProposalFinalCTA';
import { InnityxLogo } from './InnityxLogo';
import { INNITYX_CONTACT_EMAIL } from '../../data/proposalData';

interface ProposalAppProps {
  onSwitchToPreview: () => void;
}

export const ProposalApp: React.FC<ProposalAppProps> = ({ onSwitchToPreview }) => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col relative selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {/* Top Persistent Co-branded Navigation Header */}
      <ProposalNav onSwitchToPreview={onSwitchToPreview} />

      <main className="flex-grow">
        {/* Section 01: Hero */}
        <ProposalHero
          onExploreClick={() => handleScrollToSection('business-understanding')}
          onPreviewClick={onSwitchToPreview}
        />

        {/* Section 02: Business Understanding & Positioning */}
        <OpportunitySection />

        {/* Section 03: Website vs Commerce (Interactive 3-Tab Comparison) */}
        <ComparisonSection />

        {/* Section 04 & 06: Ecommerce Demo & Interactive Product Experience */}
        <PreviewSection onExplorePreview={onSwitchToPreview} />

        {/* Section 05: Basic Website Demo (Simulated Option 01 ₹24,900) */}
        <BasicWebsiteDemo />

        {/* Section 07: Commerce + Operations Demo (Illustrative Admin View Option 03 ₹89,900) */}
        <AdminPreview />

        {/* Section 08: Pricing (Exact 3 Options with Guidance) */}
        <InvestmentSection />

        {/* Section 09: Digital Growth & Marketing (Exact 3 Retainers) */}
        <MarketingSection />

        {/* Section 10: Simple Customer Journey */}
        <CustomerJourney />

        {/* Section 11: 5-Stage Evolutionary Roadmap */}
        <RoadmapSection />

        {/* Section 12: Investment Summary (Commerce vs Marketing Separation) */}
        <InvestmentSummary />

        {/* Section 13: Final Call to Action */}
        <ProposalFinalCTA onExplorePreview={onSwitchToPreview} />
      </main>

      {/* Section 17: Proposal Footer */}
      <footer className="bg-[#02050D] border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8 text-slate-400 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <InnityxLogo size="sm" showSubtitle={false} />
            <div className="flex flex-col">
              <span className="font-bold text-white font-heading">INNITYX</span>
              <span className="text-[11px] text-slate-400">Digital Product & Growth Studio</span>
              <a
                href={`mailto:${INNITYX_CONTACT_EMAIL}`}
                className="text-blue-400 hover:text-blue-300 transition-colors mt-0.5"
              >
                {INNITYX_CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="text-center sm:text-right space-y-1 text-slate-500 text-[11px]">
            <div>Prepared for Big Deals Leadership</div>
            <div>Commercial Digital Proposal · 2026</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
