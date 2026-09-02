import React from 'react';
import { ProposalNav } from './ProposalNav';
import { ProposalHero } from './ProposalHero';
import { OpportunitySection } from './OpportunitySection';
import { MarketReality } from './MarketReality';
import { ComparisonSection } from './ComparisonSection';
import { CustomerJourney } from './CustomerJourney';
import { PreviewSection } from './PreviewSection';
import { CommerceEngine } from './CommerceEngine';
import { AdminPreview } from './AdminPreview';
import { InvestmentSection } from './InvestmentSection';
import { DeRiskSection } from './DeRiskSection';
import { MarketBenchmark } from './MarketBenchmark';
import { WhyInnityx } from './WhyInnityx';
import { MarketingSection } from './MarketingSection';
import { RoadmapSection } from './RoadmapSection';
import { RecommendedInvestment } from './RecommendedInvestment';
import { ProposalFinalCTA } from './ProposalFinalCTA';

interface ProposalAppProps {
  onSwitchToPreview: () => void;
}

export const ProposalApp: React.FC<ProposalAppProps> = ({ onSwitchToPreview }) => {
  const handleScrollToOpportunity = () => {
    const el = document.getElementById('opportunity');
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
        {/* Section 01: Executive Cover */}
        <ProposalHero
          onExploreClick={handleScrollToOpportunity}
          onPreviewClick={onSwitchToPreview}
        />

        {/* Section 02: The Strategic Opportunity */}
        <OpportunitySection />

        {/* Section 03: Market Reality (Website vs Commerce) */}
        <MarketReality />

        {/* Section 04: Interactive Capability Matrix */}
        <ComparisonSection />

        {/* Section 05: Customer Journey & Conversion Pipeline */}
        <CustomerJourney />

        {/* Section 06: Working Proof (Live Interactive Store Card) */}
        <PreviewSection onExplorePreview={onSwitchToPreview} />

        {/* Section 07: System Commerce Engine Layers */}
        <CommerceEngine />

        {/* Section 08: Admin Interface Operational Concept */}
        <AdminPreview />

        {/* Section 09: Three Ways to Start (Investment Tiers) */}
        <InvestmentSection />

        {/* Section 10: De-Risking Strategy & Phasing */}
        <DeRiskSection />

        {/* Section 11: Market Context & Indicative Benchmarks */}
        <MarketBenchmark />

        {/* Section 12: Why Build with INNITYX */}
        <WhyInnityx />

        {/* Section 13: Optional Marketing & Demand Generation */}
        <MarketingSection />

        {/* Section 14: 5-Stage Evolutionary Roadmap */}
        <RoadmapSection />

        {/* Section 15: Executive Recommendation & Payment Milestones */}
        <RecommendedInvestment />

        {/* Section 16: Final Call to Action */}
        <ProposalFinalCTA onExplorePreview={onSwitchToPreview} />
      </main>

      {/* Proposal Footer */}
      <footer className="bg-[#02050D] border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300 font-heading">INNITYX SOLUTIONS PVT. LTD.</span>
            <span>· All Rights Reserved · 2026</span>
          </div>
          <div>
            Private Commercial Strategy Document for Big Deals Management
          </div>
        </div>
      </footer>
    </div>
  );
};
