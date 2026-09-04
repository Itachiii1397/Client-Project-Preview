// Centralized Configuration & Data for INNITYX × BIG DEALS Client Proposal

export const INNITYX_STUDIO_NAME = 'INNITYX';
export const INNITYX_TAGLINE = 'Digital Product & Growth Studio';
export const INNITYX_FOUNDER = 'Rodricks — Founder, INNITYX';
export const INNITYX_CONTACT_EMAIL = 'contact@innityx.com';

// Centralized Zoho Bookings schedule configuration
export const INNITYX_SCHEDULE_URL = 'https://innityx.zohobookings.in/471960000000031045';

// Centralized discuss mailto link for direct inquiry
export const INNITYX_DISCUSS_MAILTO = `mailto:${INNITYX_CONTACT_EMAIL}?subject=${encodeURIComponent(
  'INNITYX × Big Deals Digital Commerce Proposal'
)}&body=${encodeURIComponent(
  'Hi Rodricks,\n\nWe have reviewed the INNITYX × Big Deals Digital Commerce proposal and would like to discuss the next steps.\n\nBest regards,\nBig Deals Team'
)}`;

// Centralized meeting schedule mailto link (active when Zoho URL is pending)
export const INNITYX_SCHEDULE_MAILTO = `mailto:${INNITYX_CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Schedule a Meeting — INNITYX × Big Deals Digital Commerce Proposal'
)}&body=${encodeURIComponent(
  'Hi Rodricks,\n\nWe would like to schedule a meeting to discuss the INNITYX × Big Deals Digital Commerce proposal.\n\nProposed date & time preferences:\n- Option 1:\n- Option 2:\n\nBest regards,\nBig Deals Team'
)}`;

// Big Deals Client Retail WhatsApp Configuration
export const BIG_DEALS_WHATSAPP_NUMBER = '919111593355';
export const BIG_DEALS_WHATSAPP_URL = `https://wa.me/${BIG_DEALS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi Big Deals Team, I would like to inquire about your product range.'
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
    id: 'option-01',
    optionLabel: 'OPTION 01',
    stageLabel: 'BE DISCOVERABLE',
    name: 'BE DISCOVERABLE',
    price: '₹24,900',
    period: 'one-time',
    purpose: 'Professional digital presence without the operational complexity of ecommerce.',
    features: [
      'Premium responsive website',
      'Core pages',
      'Product showcase',
      'WhatsApp CTA',
      'Basic SEO',
      'Mobile optimization',
      'Deployment',
      'Launch configuration',
    ],
  },
  {
    id: 'option-02',
    optionLabel: 'OPTION 02',
    stageLabel: 'START SELLING',
    name: 'START SELLING',
    price: '₹49,900',
    period: 'one-time',
    purpose: 'Transform the website into an active digital storefront with dynamic ordering.',
    features: [
      'Everything in Option 01',
      'Dynamic catalogue',
      'Dynamic product pages',
      'Search',
      'Filtering',
      'Cart',
      'WhatsApp ordering',
      'Cart-to-WhatsApp',
      'Savings calculations',
      'Analytics foundation',
      'Mobile commerce',
    ],
  },
  {
    id: 'option-03',
    optionLabel: 'OPTION 03',
    stageLabel: 'OPERATE & GROW',
    name: 'OPERATE & GROW',
    price: '₹89,900',
    period: 'one-time',
    isRecommended: true,
    purpose: 'Complete digital business infrastructure with dedicated administrative control.',
    features: [
      'Everything in Option 02',
      'Production database',
      'Secure admin panel',
      'Product management',
      'Category management',
      'Price/reference-price management',
      'Availability controls',
      'Featured deals',
      'Deal of Day controls',
      'SEO-ready architecture',
      'Analytics events',
      'Advanced commerce UX',
      'Performance optimization',
      'Production QA',
      'Deployment',
      'Launch support',
      'Handover',
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

export interface MarketingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  isRecommended?: boolean;
  description: string;
  features: string[];
}

export const MARKETING_PLANS: MarketingPlan[] = [
  {
    id: 'foundation',
    name: 'FOUNDATION',
    price: '₹7,500',
    period: '/month',
    description: 'Consistent digital presence and foundational activity.',
    features: [
      'Local digital visibility optimization',
      'Google Business Profile setup & support',
      'Foundational on-page SEO maintenance',
      'Monthly deal showcase asset support',
      'Monthly search & discovery performance summary',
    ],
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '₹15,000',
    period: '/month',
    isRecommended: true,
    description: 'Structured content, campaigns and ongoing growth execution.',
    features: [
      'Structured content & campaign execution',
      'Comprehensive local SEO & keyword indexing',
      'Google Business Profile active management',
      'Social media deal campaign creative formats',
      'Broadcast WhatsApp deal communication formats',
      'Monthly campaign calendar & execution plan',
      'Traffic and customer interaction review',
    ],
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    price: '₹25,000',
    period: '/month',
    description: 'Higher-touch performance and campaign management.',
    features: [
      'Everything in Growth',
      'Higher-touch performance campaign coordination',
      'Multi-channel promotional creative variations',
      'Customer journey touchpoint reviews',
      'Executive performance & growth reports',
      'Ongoing speed & user experience tuning',
    ],
  },
];

export interface CapabilityItem {
  feature: string;
  category: string;
  option01: boolean | string;
  option02: boolean | string;
  option03: boolean | string;
}

export const CAPABILITY_MATRIX: CapabilityItem[] = [
  { feature: 'Premium responsive website', category: 'Core Web', option01: true, option02: true, option03: true },
  { feature: 'Core pages (Home, About, Contact)', category: 'Core Web', option01: true, option02: true, option03: true },
  { feature: 'Product showcase', category: 'Catalogue', option01: 'Curated (Static)', option02: 'Dynamic (Searchable)', option03: 'Dynamic (Searchable)' },
  { feature: 'Dynamic product pages', category: 'Catalogue', option01: false, option02: true, option03: true },
  { feature: 'Search & filtering', category: 'Catalogue', option01: false, option02: true, option03: true },
  { feature: 'Interactive cart', category: 'Commerce', option01: false, option02: true, option03: true },
  { feature: 'WhatsApp ordering', category: 'Commerce', option01: 'Direct Inquiry CTA', option02: 'Itemized Order Flow', option03: 'Itemized Order Flow' },
  { feature: 'Cart-to-WhatsApp order dispatch', category: 'Commerce', option01: false, option02: true, option03: true },
  { feature: 'Savings calculations & reference pricing', category: 'Commerce', option01: false, option02: true, option03: true },
  { feature: 'Mobile commerce optimization', category: 'Commerce', option01: 'Mobile Presence', option02: true, option03: true },
  { feature: 'Analytics foundation', category: 'Analytics', option01: 'Basic Traffic', option02: 'Event Foundation', option03: 'Full Event Tracking' },
  { feature: 'Production database', category: 'Operations', option01: false, option02: false, option03: true },
  { feature: 'Secure admin panel', category: 'Operations', option01: false, option02: false, option03: true },
  { feature: 'Product management (Add/Edit/Archive)', category: 'Operations', option01: false, option02: false, option03: true },
  { feature: 'Category management', category: 'Operations', option01: false, option02: false, option03: true },
  { feature: 'Price/reference-price management', category: 'Operations', option01: false, option02: false, option03: true },
  { feature: 'Availability & stock controls', category: 'Operations', option01: false, option02: false, option03: true },
  { feature: 'Featured deals & Deal of Day controls', category: 'Operations', option01: false, option02: false, option03: true },
  { feature: 'SEO-ready architecture', category: 'Growth', option01: 'Basic SEO', option02: 'Standard SEO', option03: 'Structured Schema' },
  { feature: 'Advanced commerce UX & micro-interactions', category: 'Experience', option01: false, option02: 'Standard', option03: 'High-Touch' },
  { feature: 'Performance optimization', category: 'Engineering', option01: 'Standard', option02: 'Optimized', option03: 'Production Grade' },
  { feature: 'Production QA & launch support', category: 'Delivery', option01: 'Standard', option02: 'Standard', option03: 'Dedicated Support & Handover' },
];

export const ROADMAP_STAGES = [
  {
    number: '01',
    name: 'DISCOVERABILITY',
    focus: 'Search & Visibility Channels',
    description: 'Ensure Big Deals is indexed on Google, visible across Instagram/Facebook/WhatsApp, and provides an authoritative digital destination.',
    items: ['Google Search presence', 'Social media discovery', 'Fast responsive website', 'Direct contact channel'],
  },
  {
    number: '02',
    name: 'CONVERSION',
    focus: 'Storefront & WhatsApp Commerce',
    description: 'Provide an intuitive browsing experience with clear prices, reference savings, search, filter, and cart-to-WhatsApp checkout.',
    items: ['Dynamic product catalogue', 'Reference price comparison', 'Savings calculation', 'Cart & WhatsApp ordering'],
  },
  {
    number: '03',
    name: 'OPERATIONS',
    focus: 'Admin & Inventory Control',
    description: 'Empower Big Deals staff to update prices, toggle availability, manage inventory, and highlight high-value deals in real time.',
    items: ['Production database', 'Web admin portal', 'Price & condition editor', 'Daily deal spotlight controls'],
  },
  {
    number: '04',
    name: 'GROWTH',
    focus: 'Structured Content & Campaigns',
    description: 'Deploy systematic local SEO, structured deal campaigns, broadcast WhatsApp marketing, and user journey analytics.',
    items: ['Local SEO indexing', 'Broadcast campaign formats', 'Customer journey insights', 'Deal creative production'],
  },
  {
    number: '05',
    name: 'SCALE',
    focus: 'Expanded Operations & Systems',
    description: 'Expand into automated payment gateways, customer retention systems, inventory integrations, and advanced retail workflows.',
    items: ['Integrated payment gateways', 'Customer loyalty systems', 'Inventory synchronization', 'Advanced retail workflows'],
  },
];
