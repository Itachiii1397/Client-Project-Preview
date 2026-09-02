// Centralized Configuration & Data for INNITYX × BIG DEALS Client Proposal

export const BIG_DEALS_WHATSAPP_NUMBER = '919111593355';
export const INNITYX_CONTACT_NUMBER = '919111593355'; // Centralized contact number
export const INNITYX_CONTACT_EMAIL = 'contact@innityx.com';

export const BIG_DEALS_WHATSAPP_URL = `https://wa.me/${BIG_DEALS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi Big Deals Team, I am reviewing the INNITYX Digital Commerce Proposal.'
)}`;

export const INNITYX_DISCUSS_URL = `https://wa.me/${INNITYX_CONTACT_NUMBER}?text=${encodeURIComponent(
  'Hi INNITYX Team, let us discuss the Big Deals Digital Commerce Proposal and implementation timeline.'
)}`;

export interface TierData {
  id: string;
  optionLabel: string;
  stageLabel: string;
  name: string;
  price: string;
  period: string;
  isRecommended?: boolean;
  purpose: string;
  features: string[];
}

export const INVESTMENT_TIERS: TierData[] = [
  {
    id: 'digital-presence',
    optionLabel: 'OPTION 01',
    stageLabel: 'BE DISCOVERABLE',
    name: 'DIGITAL PRESENCE',
    price: '₹24,900',
    period: 'ONE-TIME',
    purpose: 'Establish Big Deals professionally online.',
    features: [
      'Premium responsive website',
      'Core business pages & brand story',
      'Product showcase & curated highlights',
      'Direct WhatsApp inquiry CTA',
      'Basic search engine optimization (SEO)',
      'Full mobile & tablet optimization',
      'Production deployment & hosting setup',
      'Launch domain configuration',
    ],
  },
  {
    id: 'ecommerce-starter',
    optionLabel: 'OPTION 02',
    stageLabel: 'START SELLING',
    name: 'ECOMMERCE STARTER',
    price: '₹49,900',
    period: 'ONE-TIME',
    purpose: 'Launch Big Deals as an active online sales channel.',
    features: [
      'Everything included in Digital Presence',
      'Dynamic product catalogue system',
      'Initial 60+ catalogue inventory setup',
      'Dedicated product detail pages & modals',
      'Multi-category filtering & live search',
      'Interactive shopping cart',
      'Cart-to-WhatsApp direct checkout flow',
      'Reference pricing & savings calculation',
      'Analytics foundation (event tracking ready)',
      'Mobile-first responsive commerce UX',
    ],
  },
  {
    id: 'big-deals-commerce',
    optionLabel: 'OPTION 03',
    stageLabel: 'OPERATE & GROW',
    name: 'BIG DEALS COMMERCE',
    price: '₹89,900',
    period: 'ONE-TIME',
    isRecommended: true,
    purpose: 'Build the complete operational digital commerce platform.',
    features: [
      'Everything in Ecommerce Starter',
      'Production structured database',
      'Secure web admin panel',
      'Product management (Add / Edit / Archive)',
      'Category & taxonomy management',
      'Live price & reference-price controls',
      'Real-time availability & stock toggles',
      'Condition flagging (New, Open-Box, Special)',
      'Featured deals & Deal-of-the-Day controls',
      'SEO-ready structured schema architecture',
      'Granular commerce analytics events',
      'Advanced commerce UX & micro-interactions',
      'Performance & image optimization',
      'Full cross-browser production QA',
      'Production deployment & domain handover',
      'Post-launch support & team training handover',
    ],
  },
];

export const PAYMENT_MILESTONES = [
  {
    stage: '01',
    name: 'Project Initiation',
    percentage: '50%',
    amount: '₹44,950',
    description: 'Architecture setup, database design, design system initialization, and roadmap lock.',
  },
  {
    stage: '02',
    name: 'Staging Approval',
    percentage: '30%',
    amount: '₹26,970',
    description: 'Complete staging build, admin panel review, catalogue migration, and end-to-end testing.',
  },
  {
    stage: '03',
    name: 'Production Launch',
    percentage: '20%',
    amount: '₹17,980',
    description: 'Domain connection, live deployment verification, analytics handover, and admin training.',
  },
];

export const MARKETING_PLANS = [
  {
    id: 'foundation',
    name: 'FOUNDATION',
    price: '₹7,500',
    period: '/ month',
    purpose: 'Establish baseline local search and discovery footprint.',
    features: [
      'Local digital visibility optimization',
      'Google Business Profile setup & support',
      'Basic ongoing on-page SEO maintenance',
      'Monthly deal banner & content support',
      'Monthly discovery & traffic reporting',
    ],
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '₹15,000',
    period: '/ month',
    isRecommended: true,
    purpose: 'Drive consistent customer acquisition and repeat traffic.',
    features: [
      'Comprehensive local SEO & keyword indexing',
      'Google Business Profile active management',
      'Instagram & Facebook organic campaign creatives',
      'Broadcast WhatsApp deal campaign formats',
      'Deal-focused product showcase creatives',
      'Monthly structured campaign calendar',
      'Traffic & engagement analytics review',
      'Conversion journey optimization recommendations',
    ],
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    price: '₹25,000',
    period: '/ month',
    purpose: 'Maximize brand reach with multi-channel campaigns.',
    features: [
      'Everything in the Growth Plan',
      'Full paid campaign creative management',
      'Higher weekly content output & creative variations',
      'Speed & landing page conversion performance tuning',
      'Advanced executive performance reporting',
      'Continuous conversion rate experimentation',
    ],
  },
];

export interface CapabilityItem {
  feature: string;
  category: string;
  digitalPresence: boolean | string;
  ecommerceStarter: boolean | string;
  bigDealsCommerce: boolean | string;
}

export const CAPABILITY_MATRIX: CapabilityItem[] = [
  { feature: 'Premium responsive website', category: 'Core Web', digitalPresence: true, ecommerceStarter: true, bigDealsCommerce: true },
  { feature: 'Product showcase', category: 'Core Web', digitalPresence: 'Curated', ecommerceStarter: 'Dynamic (60+)', bigDealsCommerce: 'Dynamic catalogue' },
  { feature: 'Dynamic product detail pages', category: 'Catalogue', digitalPresence: false, ecommerceStarter: true, bigDealsCommerce: true },
  { feature: 'Multi-category & live search', category: 'Catalogue', digitalPresence: false, ecommerceStarter: true, bigDealsCommerce: true },
  { feature: 'Cart system', category: 'Commerce', digitalPresence: false, ecommerceStarter: true, bigDealsCommerce: true },
  { feature: 'Cart-to-WhatsApp direct order', category: 'Commerce', digitalPresence: 'Direct Link', ecommerceStarter: true, bigDealsCommerce: true },
  { feature: 'Reference pricing & savings calculation', category: 'Commerce', digitalPresence: false, ecommerceStarter: true, bigDealsCommerce: true },
  { feature: 'Condition badges (New / Open-Box)', category: 'Commerce', digitalPresence: false, ecommerceStarter: true, bigDealsCommerce: true },
  { feature: 'Production database integration', category: 'Operations', digitalPresence: false, ecommerceStarter: false, bigDealsCommerce: true },
  { feature: 'Secure administrative panel', category: 'Operations', digitalPresence: false, ecommerceStarter: false, bigDealsCommerce: true },
  { feature: 'Live product management (CRUD)', category: 'Operations', digitalPresence: false, ecommerceStarter: false, bigDealsCommerce: true },
  { feature: 'Category & hierarchy management', category: 'Operations', digitalPresence: false, ecommerceStarter: false, bigDealsCommerce: true },
  { feature: 'Live price & reference-price controls', category: 'Operations', digitalPresence: false, ecommerceStarter: false, bigDealsCommerce: true },
  { feature: 'Real-time availability toggles', category: 'Operations', digitalPresence: false, ecommerceStarter: false, bigDealsCommerce: true },
  { feature: 'Deal-of-the-Day & featured controls', category: 'Operations', digitalPresence: false, ecommerceStarter: false, bigDealsCommerce: true },
  { feature: 'Structured SEO schema architecture', category: 'Growth', digitalPresence: 'Basic', ecommerceStarter: 'Standard', bigDealsCommerce: 'Advanced Structured' },
  { feature: 'Analytics foundation & event tracking', category: 'Growth', digitalPresence: false, ecommerceStarter: 'Standard', bigDealsCommerce: 'Full Event Tracking' },
  { feature: 'Advanced commerce UX & micro-interactions', category: 'Experience', digitalPresence: false, ecommerceStarter: 'Standard', bigDealsCommerce: 'High-Touch' },
  { feature: 'Performance & image optimization', category: 'Experience', digitalPresence: 'Standard', ecommerceStarter: 'Optimized', bigDealsCommerce: 'Enterprise Optimized' },
  { feature: 'Production launch & handover training', category: 'Delivery', digitalPresence: 'Basic', ecommerceStarter: 'Standard', bigDealsCommerce: 'Comprehensive' },
];

export const ROADMAP_STAGES = [
  {
    number: '01',
    name: 'DISCOVERABILITY',
    focus: 'Search & Visibility Channels',
    description: 'Ensure Big Deals is indexed on Google, visible across Instagram/Facebook/WhatsApp, and provides an authoritative digital destination.',
    items: ['Google Business indexing', 'Social traffic capture', 'Authoritative fast website', 'WhatsApp direct channel'],
  },
  {
    number: '02',
    name: 'CONVERSION',
    focus: 'Storefront & WhatsApp Commerce',
    description: 'Provide an intuitive buying experience with clear prices, reference savings, search, filter, and cart-to-WhatsApp checkout.',
    items: ['Dynamic product catalogue', 'Reference price comparison', 'Savings calculation', 'Cart & WhatsApp ordering'],
  },
  {
    number: '03',
    name: 'OPERATIONS',
    focus: 'Admin & Inventory Control',
    description: 'Empower Big Deals staff to update prices, mark items sold out, add fresh inventory, and feature high-margin deals in real time.',
    items: ['Production database', 'Web admin portal', 'Price & condition editor', 'Daily featured spotlight controls'],
  },
  {
    number: '04',
    name: 'GROWTH',
    focus: 'Traffic & Content Engine',
    description: 'Deploy systematic SEO, targeted seasonal deal campaigns, broadcast WhatsApp marketing, and conversion funnel analytics.',
    items: ['Local SEO indexing', 'WhatsApp broadcast campaigns', 'Funnel event analytics', 'Deal creative production'],
  },
  {
    number: '05',
    name: 'SCALE',
    focus: 'Enterprise & Automation',
    description: 'Expand into automated payment gateways, CRM customer retention, price intelligence tracking, and AI-assisted deal concierges.',
    items: ['Integrated payment gateways', 'Automated CRM & loyalty', 'Competitor price tracking', 'AI shopping assistance'],
  },
];
