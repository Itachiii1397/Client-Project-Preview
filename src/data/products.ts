import { Product, Category, ProductCondition } from '../types';

export const PRIMARY_WHATSAPP_NUMBER = '919111593355';
export const DISPLAY_WHATSAPP = '+91 91115 93355';
export const STORE_CATALOG_URL = 'https://store.nextapsolutions.com/whatsapp-store/big-deals';
export const STORE_BROCHURE_URL = 'https://store.nextapsolutions.com/whatsapp-store/big-deals/brochure';

export const CATEGORIES: Category[] = [
  'All',
  'Kitchen Appliances',
  'Sports',
  'Personal Care',
  'Baby Care',
  'Daily Essentials',
  'Undergarments',
  'House Holds',
  'Special Deals',
];

export const CATEGORY_ICONS: Record<string, string> = {
  'Kitchen Appliances': 'UtensilsCrossed',
  'Sports': 'Trophy',
  'Personal Care': 'Sparkles',
  'Baby Care': 'Baby',
  'Daily Essentials': 'PackageCheck',
  'Undergarments': 'Shirt',
  'House Holds': 'Home',
  'Special Deals': 'Zap',
};

interface RawProductData {
  id: string;
  name: string;
  brand?: string;
  model?: string;
  category: Category;
  price: number;
  referencePrice: number;
  condition?: ProductCondition;
  image: string;
  images?: string[];
  description?: string;
  specifications?: Record<string, string>;
  availability?: 'In Stock' | 'Limited Stock' | 'Check Availability';
  featured?: boolean;
  dealOfTheDay?: boolean;
  sourceUrl?: string;
  verified?: boolean;
  keyFeatures?: string[];
}

const rawProducts: RawProductData[] = [
  // ==========================================
  // KITCHEN APPLIANCES
  // ==========================================
  {
    id: 'pigeon-healthifry-air-fryer',
    name: 'Original Fresh Pigeon Healthifry Digital Air Fryer 4.2L',
    brand: 'Pigeon',
    model: 'Healthifry 4.2L Digital',
    category: 'Kitchen Appliances',
    price: 2399,
    referencePrice: 2915,
    condition: 'open-box',
    availability: 'Limited Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-efficiency 360° rapid air circulation with digital touchscreen presets, non-stick removable basket, and oil-free crisping technology.',
    keyFeatures: ['360° Rapid Air Technology', 'Digital LED Touch Display', '4.2L Capacity', 'Non-stick Food Grade Basket'],
    specifications: { 'Capacity': '4.2 Litres', 'Power': '1200 W', 'Control': 'Digital Touchscreen', 'Warranty': 'Big Deals Verified' }
  },
  {
    id: 'cello-mixer-grinder-750w',
    name: 'CELLO MIXER GRINDER 750W Heavy Duty (3 Jars)',
    brand: 'Cello',
    model: 'Grip 750W',
    category: 'Kitchen Appliances',
    price: 2236,
    referencePrice: 3855,
    condition: 'open-box',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Powerful 750W copper motor with 3 stainless steel jars for wet, dry, and chutney grinding. Ergonomic handle and overload protector.',
    keyFeatures: ['750W 100% Copper Motor', '3 Stainless Steel Jars', 'Nylon 66 Couplers', 'Overload Protection'],
    specifications: { 'Motor': '750 Watts Copper', 'Jars': '3 SS Jars', 'Speed Control': '3 Speeds + Pulse' }
  },
  {
    id: 'preethi-mixer-grinder-zodiac',
    name: 'PREETHI MIXER GRINDER Zodiac 750W (5 Jars)',
    brand: 'Preethi',
    model: 'Zodiac MG 218',
    category: 'Kitchen Appliances',
    price: 5790,
    referencePrice: 9338,
    condition: 'open-box',
    availability: 'Limited Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Master chef jar with food processing capabilities, dough kneading in 1 minute, slicing, chopping, and 5 multipurpose jars.',
    keyFeatures: ['Food Processor Jar', 'Vega W5 750W Motor', 'Fast Kneading & Chopping', '3-in-1 Fresh Juicer'],
    specifications: { 'Motor': 'Vega W5 750W', 'Jars': '5 Jars Set', 'Blades': 'Machine Ground SS 304' }
  },
  {
    id: 'butterfly-rapid-mixer-grinder',
    name: 'BUTTERFLY RAPID 4-Jar Mixer Grinder 750W',
    brand: 'Butterfly',
    model: 'Rapid 4-Jar',
    category: 'Kitchen Appliances',
    price: 2475,
    referencePrice: 5499,
    condition: 'open-box',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty motor, razor-sharp blades for tough Indian spices, dedicated juicer jar with extractor mesh.',
    keyFeatures: ['4 Stainless Steel Jars', 'Dedicated Juicer Extractor', 'Shock-Proof ABS Body'],
    specifications: { 'Motor': '750W', 'Jars': '4 Jars (Juicer + 3 SS)', 'Voltage': '230V AC' }
  },
  {
    id: 'bajaj-induction-cooktop-2100w',
    name: 'Original Bajaj Induction Cooktop 2100W',
    brand: 'Bajaj',
    model: 'Majesty ICX 2100W',
    category: 'Kitchen Appliances',
    price: 2100,
    referencePrice: 3399,
    condition: 'open-box',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    description: 'Preset Indian cooking menus, auto-pan detection, feather-touch buttons, and delay timer options.',
    keyFeatures: ['2100W Fast Heating', 'Indian Cooking Menu Presets', 'Auto Shut-off Safety', 'Crystal Glass Surface'],
    specifications: { 'Power': '2100 Watts', 'Control': 'Touch Keypad', 'Presets': '8 Menus' }
  },
  {
    id: 'pigeon-handy-chopper-3blade',
    name: 'PIGEON HANDY CHOPPER with 3 Stainless Blades',
    brand: 'Pigeon',
    model: 'Handy Chopper Classic',
    category: 'Kitchen Appliances',
    price: 188,
    referencePrice: 745,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-fast manual string-pull food chopper for onions, garlic, nuts, and vegetables in seconds.',
    keyFeatures: ['Unbreakable ABS Plastic Body', '3 SS Sharp Blades', 'String Pull Mechanism', 'Easy Washable'],
    specifications: { 'Capacity': '400 ml', 'Blades': '3 Japanese Grade SS', 'Operation': 'Manual Pull' }
  },
  {
    id: 'pigeon-electric-kettle-15l',
    name: 'Pigeon Favourite Electric Kettle 1.5L',
    brand: 'Pigeon',
    model: 'Favourite 1.5L',
    category: 'Kitchen Appliances',
    price: 384,
    referencePrice: 549,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Stainless steel electric kettle with 360-degree cordless swivel base, automatic shut-off and boil-dry safety protection.',
    keyFeatures: ['1.5L Stainless Steel Body', 'Boil-Dry Protection', 'Cordless 360° Base', 'Indicator Light'],
    specifications: { 'Capacity': '1.5 Litres', 'Power': '1500 Watts', 'Material': 'Food Grade Stainless Steel' }
  },
  {
    id: 'millton-fast-boil-kettle',
    name: 'MILLTON Stainless Steel Fast Boil Kettle',
    brand: 'Milton',
    category: 'Kitchen Appliances',
    price: 599,
    referencePrice: 1599,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1594213114663-d94db9b17125?auto=format&fit=crop&w=800&q=80',
    description: 'Premium brushed steel finish with heat-resistant cool touch body and rapid boiling mechanism.',
    keyFeatures: ['Rapid Boil Element', 'Cool Touch Outer Layer', 'Automatic Cut-off'],
    specifications: { 'Power': '1500W', 'Material': 'Stainless Steel', 'Safety': 'Auto Off' }
  },
  {
    id: 'orient-electric-smart-kettle',
    name: 'Orient Electric Smart Kettle 1.8L',
    brand: 'Orient',
    category: 'Kitchen Appliances',
    price: 629,
    referencePrice: 2299,
    condition: 'open-box',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    description: 'Wide mouth design for effortless cleaning, 1500W rapid boiling power, illuminated power switch.',
    keyFeatures: ['1.8L High Capacity', 'Extra Wide Mouth', 'Concealed Heating Element'],
    specifications: { 'Capacity': '1.8L', 'Power': '1500W', 'Body': 'Stainless Steel' }
  },
  {
    id: 'kenstar-2slice-popup-toaster',
    name: 'KENSTAR 2-Slice Pop-Up Toaster',
    brand: 'Kenstar',
    category: 'Kitchen Appliances',
    price: 599,
    referencePrice: 1495,
    condition: 'special inventory',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?auto=format&fit=crop&w=800&q=80',
    description: 'Variable 6-level browning control, removable crumb tray, cool-wall plastic exterior and mid-cycle cancel button.',
    keyFeatures: ['6 Browning Levels', 'Removable Slide-Out Crumb Tray', 'Cool-Wall Exterior'],
    specifications: { 'Slots': '2 Slice', 'Power': '750W', 'Control': 'Dial' }
  },
  {
    id: 'glen-instant-egg-boiler',
    name: 'Glen Instant Egg Boiler & Poacher',
    brand: 'Glen',
    category: 'Kitchen Appliances',
    price: 419,
    referencePrice: 844,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=800&q=80',
    description: 'Boils up to 7 eggs at once in hard, medium, or soft consistency with automatic buzzer alert.',
    keyFeatures: ['7 Eggs Capacity', '3 Hardness Modes', 'Automatic Buzzer Alert'],
    specifications: { 'Capacity': '7 Eggs', 'Power': '350W', 'Plate': 'Stainless Steel' }
  },
  {
    id: 'agaro-grand-egg-boiler',
    name: 'AGARO Grand Electric Egg Boiler & Steamer',
    brand: 'Agaro',
    category: 'Kitchen Appliances',
    price: 629,
    referencePrice: 1048,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=800&q=80',
    description: 'Stainless steel flat heating plate with 8-egg capacity and steaming rack for momos and vegetables.',
    keyFeatures: ['8-Egg Dual Rack', 'Steamer Functionality', 'Auto Off Protection'],
    specifications: { 'Capacity': '8 Eggs', 'Power': '400W', 'Body': 'Dual Finish' }
  },
  {
    id: 'pigeon-multicook-kettle',
    name: 'Pigeon Stainless Steel Multi Cook Kettle',
    brand: 'Pigeon',
    category: 'Kitchen Appliances',
    price: 1140,
    referencePrice: 1699,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80',
    description: 'Multifunctional boiling kettle for noodles, soup, tea, coffee, and egg boiling with temperature dial.',
    keyFeatures: ['Multi-Cooking Modes', 'Variable Temperature Dial', 'Glass Lid with Steam Vent'],
    specifications: { 'Capacity': '1.2L', 'Power': '600W', 'Material': 'SS 304' }
  },
  {
    id: 'greenchef-vesta-idli-maker',
    name: 'Greenchef Vesta Stainless Steel Idli Maker (4 Plates)',
    brand: 'Greenchef',
    category: 'Kitchen Appliances',
    price: 559,
    referencePrice: 759,
    condition: 'special inventory',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy gauge food grade stainless steel with 4 plates making 16 soft idlis simultaneously.',
    keyFeatures: ['4 Plates / 16 Idlis', 'Rust-Proof SS Gauge', 'Cool-Touch Whistle Knob'],
    specifications: { 'Plates': '4 Trays', 'Material': 'Food Grade SS', 'Compatibility': 'Gas Stove' }
  },
  {
    id: 'sandwich-maker-nonstick-750w',
    name: 'Non-Stick Grill Sandwich Maker 750W',
    brand: 'Nova',
    category: 'Kitchen Appliances',
    price: 599,
    referencePrice: 789,
    condition: 'special inventory',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    description: 'Die-cast aluminum non-stick heating plates with automatic thermostat cut-off and cool-touch handle.',
    keyFeatures: ['Deep Ribbed Non-Stick Grill', 'Dual Thermostat Indicators', 'Upright Storage'],
    specifications: { 'Power': '750W', 'Coating': 'Teflon Non-stick', 'Voltage': '220-240V' }
  },
  {
    id: 'vinod-europa-handi-cooker-2l',
    name: 'Vinod Europa 2L Stainless Steel Handi Pressure Cooker',
    brand: 'Vinod',
    category: 'Kitchen Appliances',
    price: 1997,
    referencePrice: 2399,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    description: 'SAS bottom sandwich induction friendly base, surgical grade SS 304 inner layer for non-reactive healthy cooking.',
    keyFeatures: ['SAS Sandwich Base', 'Surgical SS 304 Inner', 'Induction & Gas Friendly'],
    specifications: { 'Capacity': '2.0 Litres', 'Material': 'Tri-ply SS', 'Warranty': 'Manufacturer Standard' }
  },
  {
    id: 'borosil-bake-serve-dish',
    name: 'BOROSIL 100% Borosilicate Bake & Serve Dish',
    brand: 'Borosil',
    category: 'Kitchen Appliances',
    price: 559,
    referencePrice: 1745,
    condition: 'special inventory',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
    description: 'Oven, microwave, freezer and dishwasher safe glass dish resistant up to 350°C thermal shock.',
    keyFeatures: ['100% Pure Borosilicate', 'Resistant to 350°C Heat', 'Microwave & Oven Safe'],
    specifications: { 'Material': 'Borosilicate Glass', 'Capacity': '1.5 Litres', 'Dishwasher Safe': 'Yes' }
  },

  // ==========================================
  // SPORTS & FITNESS
  // ==========================================
  {
    id: 'yonex-zr-100-badminton',
    name: 'YONEX ZR 100 Aluminium Badminton Racquet',
    brand: 'Yonex',
    model: 'ZR 100',
    category: 'Sports',
    price: 375,
    referencePrice: 629,
    condition: 'open-box',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight aluminium frame with isometric head shape for larger sweet spot, including full head cover.',
    keyFeatures: ['Isometric Head Shape', 'Dura-Frame Construction', 'Pre-Strung', 'Includes Full Cover'],
    specifications: { 'Frame': 'Aluminium', 'Shaft': 'Steel', 'Weight': '95-99g', 'Grip': 'G4' }
  },
  {
    id: 'yonex-astrox-37i-graphite',
    name: 'Yonex Astrox Lite 37i Graphite Badminton Racquet',
    brand: 'Yonex',
    model: 'Astrox Lite 37i',
    category: 'Sports',
    price: 1695,
    referencePrice: 3390,
    condition: 'open-box',
    availability: 'Limited Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80',
    description: 'Full graphite 78g ultra-light racquet with rotational generator system for devastating steep smashes.',
    keyFeatures: ['78g Super Lightweight (5U)', 'Full Graphite High Modulus', 'Rotational Balance System', 'Tension Up to 30 lbs'],
    specifications: { 'Weight': '78g (5U-G5)', 'Flex': 'Flexible', 'Tension': '20-30 lbs', 'Frame': 'Full Graphite' }
  },
  {
    id: 'yonex-mavis-350-shuttlecocks',
    name: 'Yonex Mavis 350 Nylon Shuttlecocks (Tube of 6)',
    brand: 'Yonex',
    model: 'Mavis 350 (Yellow/Green Cap)',
    category: 'Sports',
    price: 825,
    referencePrice: 1650,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
    description: 'World-renowned nylon shuttlecock with natural Portuguese cork base engineered to mimic feather flight.',
    keyFeatures: ['Natural Portuguese Cork Base', 'Precision Wing Rib Design', 'Slow/Medium Speed Flight'],
    specifications: { 'Pack': '6 Shuttlecocks', 'Skirt': 'Precision Nylon', 'Base': 'Natural Cork' }
  },
  {
    id: 'boldfit-yoga-mat-6mm',
    name: 'BOLDFIT High Density Anti-Skid Yoga Mat 6mm',
    brand: 'Boldfit',
    category: 'Sports',
    price: 700,
    referencePrice: 1399,
    condition: 'new',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80',
    description: 'Eco-friendly TPE dual-side textured non-slip exercise mat with carrying strap for pilates, gym, and yoga.',
    keyFeatures: ['6mm High Cushioning', 'Anti-Tear & Non-Slip Grip', 'Includes Carrying Strap'],
    specifications: { 'Thickness': '6mm', 'Material': 'Eco TPE', 'Dimensions': '183cm x 61cm' }
  },
  {
    id: 'cosco-zoomer-roller-skates',
    name: 'Cosco Zoomer Adjustable Roller Skating Set',
    brand: 'Cosco',
    category: 'Sports',
    price: 700,
    referencePrice: 1400,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&w=800&q=80',
    description: 'Sturdy steel quad chassis roller skates with adjustable shoe sizing, smooth ball bearings, and front brakes.',
    keyFeatures: ['Adjustable Shoe Sizing', 'High-Speed Ball Bearings', 'Durable Rubber Stopper'],
    specifications: { 'Chassis': 'Heavy Steel', 'Type': 'Quad Skates', 'Adjustment': 'Multi-Size Range' }
  },
  {
    id: 'nivia-antiburst-gym-ball',
    name: 'NIVIA Anti-Burst Heavy Duty Gym Ball with Pump',
    brand: 'Nivia',
    category: 'Sports',
    price: 825,
    referencePrice: 1649,
    condition: 'special inventory',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    description: '65cm anti-burst core strengthening swiss ball with foot pump, ideal for posture rehabilitation and core workouts.',
    keyFeatures: ['Anti-Burst PVC Tested to 300kg', 'Includes Rapid Foot Pump', 'Non-Slip Concentric Ridges'],
    specifications: { 'Diameter': '65 cm', 'Material': 'Heavy PVC', 'Accessories': 'Foot Pump + Plugs' }
  },
  {
    id: 'nivia-storm-football-size5',
    name: 'Nivia Storm Football Rubber Moulded (Size 5)',
    brand: 'Nivia',
    category: 'Sports',
    price: 478,
    referencePrice: 955,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=80',
    description: '32-panel rubber moulded outer layer suitable for hard outdoor surfaces, grass, and turf play.',
    keyFeatures: ['32 Panel Moulded Construction', 'Butyl Bladder for Air Retention', 'All-Weather Durability'],
    specifications: { 'Size': '5 (Standard)', 'Surface': 'Hard Ground & Turf', 'Outer': 'Rubber' }
  },
  {
    id: 'boldfit-hand-gripper-adjustable',
    name: 'Boldfit Adjustable Resistance Hand Gripper (10-40kg)',
    brand: 'Boldfit',
    category: 'Sports',
    price: 250,
    referencePrice: 499,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty steel spring with dial knob to customize forearm and hand grip tension from 10 to 40 kg.',
    keyFeatures: ['Dial Adjustable 10-40 kg', 'High Tensile Stainless Spring', 'Ergonomic TPR Rubber Grip'],
    specifications: { 'Tension': '10kg - 40kg', 'Spring': 'Stainless Steel', 'Target': 'Forearm & Hand' }
  },
  {
    id: 'bodyband-dual-wheel-ab-roller',
    name: 'Bodyband Dual Wheel AB Roller with Knee Pad',
    brand: 'Bodyband',
    category: 'Sports',
    price: 174,
    referencePrice: 499,
    condition: 'special inventory',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    description: 'High-stability dual wheel design with padded foam grip handles and free thick foam knee mat.',
    keyFeatures: ['Dual Wheel High Stability', 'Includes High Density Knee Pad', 'Sweat-Resistant Grips'],
    specifications: { 'Wheels': 'Dual PVC', 'Shaft': 'Steel Bar', 'Includes': 'Knee Pad' }
  },
  {
    id: 'tynor-orthopedic-knee-cap',
    name: 'Tynor Orthopedic Knee Cap Compression Support',
    brand: 'Tynor',
    category: 'Sports',
    price: 210,
    referencePrice: 356,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    description: 'Four-way stretch knit breathable fabric providing therapeutic warmth and controlled knee joint compression.',
    keyFeatures: ['4-Way Stretch Elastic', 'Uniform Compression', 'No Bulging Behind Knee'],
    specifications: { 'Material': 'Cotton & Nylon Knit', 'Type': 'Tubular Knee Cap', 'Washable': 'Yes' }
  },

  // ==========================================
  // PERSONAL CARE & GROOMING
  // ==========================================
  {
    id: 'braun-beard-trimmer-series-9',
    name: 'BRAUN BEARD TRIMMER SERIES 9 Pro Precision',
    brand: 'Braun',
    model: 'Series 9 Pro Precision',
    category: 'Personal Care',
    price: 3639,
    referencePrice: 7999,
    condition: 'open-box',
    availability: 'Limited Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'German engineered lifetime sharp metal blade with 40 length settings, precision wheel, and 100-min Li-ion battery.',
    keyFeatures: ['ProBlade Lifetime Sharpness', '40 Precision Lengths (0.5mm steps)', '100 Min Cordless Runtime', '100% Waterproof'],
    specifications: { 'Battery': 'Li-Ion 100 Mins', 'Lengths': '0.5 - 20mm', 'Waterproof': 'Fully Washable' }
  },
  {
    id: 'wahl-cordless-clipper-master',
    name: 'WAHL PROFESSIONAL Cordless Clipper Master',
    brand: 'Wahl',
    model: 'Professional Cordless 08466',
    category: 'Personal Care',
    price: 5459,
    referencePrice: 11999,
    condition: 'open-box',
    availability: 'Limited Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty rotary motor clipper used by master barbers globally with zero-overlap chrome blade.',
    keyFeatures: ['Heavy Duty Rotary Motor', 'Chrome Plated Precision Blades', 'Barber Grade Taper Lever'],
    specifications: { 'Motor': 'Rotary High-Torque', 'Battery': '90+ Mins', 'Blades': 'Chrome Carbon Steel' }
  },
  {
    id: 'beardo-chrome-beast-trimmer',
    name: 'BEARDO CHROME BEAST Heavy Duty Metal Trimmer',
    brand: 'Beardo',
    model: 'Chrome Beast Pro',
    category: 'Personal Care',
    price: 1154,
    referencePrice: 2499,
    condition: 'open-box',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=800&q=80',
    description: 'Solid brass and chrome industrial body, self-sharpening T-blade, LCD battery display, USB-C fast charging.',
    keyFeatures: ['Full Heavy Metal Carved Body', 'Zero-Gapped T-Blade', 'Smart LCD Battery Indicator', 'Type-C Charging'],
    specifications: { 'Body': 'Zinc & Chrome Alloy', 'Runtime': '120 Minutes', 'Blade': 'T-Shape Stainless' }
  },
  {
    id: 'beardo-ball-safe-pro-groomer',
    name: 'BEARDO BALL SAFE PRO Body Groomer Ceramic Blade',
    brand: 'Beardo',
    model: 'Ball Safe Pro',
    category: 'Personal Care',
    price: 1224,
    referencePrice: 2199,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
    description: 'SafeSkin ceramic blades designed for sensitive private area grooming, IPX7 waterproof for shower use.',
    keyFeatures: ['SafeSkin Ceramic Anti-Nick Blades', 'IPX7 100% Shower Waterproof', 'Built-in LED Spot Light'],
    specifications: { 'Blade': 'Hygienic Ceramic', 'Waterproof': 'IPX7', 'Battery': 'Li-Ion 90 Min' }
  },
  {
    id: 'beardo-apex-prime-6in1',
    name: 'BEARDO APE X PRIME Multi-Grooming 6-in-1 Kit',
    brand: 'Beardo',
    category: 'Personal Care',
    price: 699,
    referencePrice: 1499,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Complete grooming toolkit with ear/nose trimmer, detailer, precision shaver and 4 guide combs.',
    keyFeatures: ['6 Specialized Attachments', 'Fast USB Charging', 'Self-Sharpening Blades'],
    specifications: { 'Attachments': '6 Heads', 'Runtime': '60 Mins', 'Charging': 'USB' }
  },
  {
    id: 'beardo-apex-ez-trimmer',
    name: 'BEARDO APE X EZ Compact Beard Trimmer',
    brand: 'Beardo',
    category: 'Personal Care',
    price: 529,
    referencePrice: 995,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    description: 'Pocket-sized ergonomic trimmer with titanium blades and 60 minutes continuous runtime.',
    keyFeatures: ['Pocket Slim Ergonomic Design', 'Skin-Friendly Titanium Tip', 'Micro-USB Charging'],
    specifications: { 'Weight': '110g', 'Runtime': '60 Mins', 'Blade': 'Titanium Coated' }
  },
  {
    id: 'beardo-tornado-hair-dryer',
    name: 'BEARDO TORNADO Professional Hair Dryer 2000W',
    brand: 'Beardo',
    category: 'Personal Care',
    price: 1047,
    referencePrice: 2199,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    description: 'High velocity AC motor with 3 heat and 2 speed settings plus cool-shot blast for salon styling.',
    keyFeatures: ['2000W Salon Grade Motor', 'Instant Cool Shot Blast', 'Includes Concentrator Nozzle'],
    specifications: { 'Power': '2000 Watts', 'Speed/Heat': '2 Speed, 3 Heat', 'Cord': '2.0m Salon Length' }
  },
  {
    id: 'xiaomi-beard-trimmer-1c',
    name: 'XIAOMI BEARD TRIMMER 1C (20 Length Settings)',
    brand: 'Xiaomi',
    category: 'Personal Care',
    price: 1333,
    referencePrice: 1999,
    condition: 'open-box',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1508380702597-707c1b00695c?auto=format&fit=crop&w=800&q=80',
    description: 'Self-sharpening stainless steel blades with 0.5mm precision, LED battery status indicator, travel lock.',
    keyFeatures: ['20 Length Settings with 0.5mm Steps', '60 Min Usage on 2h Charge', 'Travel Safety Lock'],
    specifications: { 'Precision': '0.5mm', 'Battery': '60 Mins', 'Charging': 'Micro-USB' }
  },
  {
    id: 'lifelong-wax-oil-heater',
    name: 'LIFELONG WAX AND OIL HEATER for Salon & Home',
    brand: 'Lifelong',
    category: 'Personal Care',
    price: 349,
    referencePrice: 1999,
    condition: 'special inventory',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Automatic temperature controller with aluminum pot for painless wax melting and hair oil warming.',
    keyFeatures: ['Painless Rapid Melting', 'Removable Aluminum Pot', 'Auto Temperature Cutoff'],
    specifications: { 'Power': '100W', 'Pot': 'Aluminum', 'Indicator': 'Thermostat LED' }
  },
  {
    id: 'lifelong-trim-ez-shaver',
    name: 'LIFELONG TRIM EZ Cordless Shaver & Trimmer',
    brand: 'Lifelong',
    category: 'Personal Care',
    price: 419,
    referencePrice: 1499,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    description: 'Quick USB charging, skin-friendly rounded tips, wash-friendly detachable head.',
    keyFeatures: ['Washable Detachable Head', 'Rounded Blade Tips', 'Cordless USB'],
    specifications: { 'Runtime': '45 Mins', 'Blade': 'Stainless Steel', 'Warranty': 'Store Verified' }
  },
  {
    id: 'wahl-homecut-haircutting-kit',
    name: 'WAHL HOMECUT Complete Haircutting Kit',
    brand: 'Wahl',
    category: 'Personal Care',
    price: 629,
    referencePrice: 2000,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    description: 'High-torque electromagnetic motor with high-carbon steel blades and 8 guide attachments.',
    keyFeatures: ['Wahl Self-Sharpening Blades', '8 Guide Combs Included', 'Heavy Duty Corded Power'],
    specifications: { 'Blades': 'High-Carbon Steel', 'Attachments': '8 Combs + Scissor + Oil', 'Power': 'AC Corded' }
  },
  {
    id: 'lifelong-volumizer-hot-air-brush',
    name: 'LIFELONG VOLUMIZER One-Step Hot Air Brush & Hair Dryer',
    brand: 'Lifelong',
    category: 'Personal Care',
    price: 1259,
    referencePrice: 3999,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    description: 'Oval brush design with nylon pin & tufted bristles for detangling, volume building, and frizz control.',
    keyFeatures: ['Oval Volumizing Barrel', 'Ceramic Ionic Coating', '3 Speed & Heat Settings'],
    specifications: { 'Power': '1000 Watts', 'Barrel': 'Ceramic Tourmaline', 'Cord': '360 Swivel' }
  },
  {
    id: 'saber-x-3in1-shaver',
    name: 'SABER X 3 IN 1 Grooming Machine & Shaver',
    brand: 'Saber',
    category: 'Personal Care',
    price: 1009,
    referencePrice: 3499,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    description: 'Triple rotary foil shaver with precision sideburn trimmer and nose hair attachment.',
    keyFeatures: ['3D Floating Rotary Heads', 'Nose & Ear Attachment', 'Pop-Up Sideburn Trimmer'],
    specifications: { 'Heads': '3 Floating Foils', 'Waterproof': 'IPX6', 'Battery': 'Rechargeable' }
  },
  {
    id: 'cetaphil-moisturising-cream-250g',
    name: 'Cetaphil Moisturising Cream for Dry to Sensitive Skin 250g',
    brand: 'Cetaphil',
    category: 'Personal Care',
    price: 372,
    referencePrice: 568,
    condition: 'new',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    description: 'Dermatologist-recommended rich cream with Sweet Almond Oil and Vitamins E & B3 for 48h hydration.',
    keyFeatures: ['Dermatologist Tested', 'Non-Greasy 48h Hydration', 'Fragrance-Free Formula'],
    specifications: { 'Volume': '250g', 'Skin Type': 'Dry to Sensitive', 'Key Ingredients': 'Almond Oil, Vit E & B3' }
  },
  {
    id: 'rexona-shower-fresh-rollon',
    name: 'Rexona Shower Fresh Underarm Roll-on 50ml',
    brand: 'Rexona',
    category: 'Personal Care',
    price: 95,
    referencePrice: 104,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1594824813589-40899238e833?auto=format&fit=crop&w=800&q=80',
    description: 'MotionActivated sweat protect technology keeping you odor free and fresh throughout the day.',
    keyFeatures: ['MotionActivated Fragrance', '0% Alcohol Gentle Formula', '48h Sweat Protection'],
    specifications: { 'Volume': '50ml', 'Type': 'Roll-on', 'Fragrance': 'Shower Fresh' }
  },

  // ==========================================
  // DAILY ESSENTIALS
  // ==========================================
  {
    id: 'smartwatch-hd-jet-black',
    name: 'Smartwatch for Men and Women (Jet Black HD Display)',
    brand: 'Fire-Boltt',
    category: 'Daily Essentials',
    price: 1049,
    referencePrice: 1499,
    condition: 'open-box',
    availability: 'Limited Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    description: '1.83 inch crisp color touchscreen, Bluetooth calling, heart rate & SpO2 tracking, 100+ sports modes.',
    keyFeatures: ['Bluetooth Calling via Watch', '1.83" HD Touch Display', 'SpO2 & Heart Rate Tracker', 'IP68 Water Resistant'],
    specifications: { 'Display': '1.83" TFT HD', 'Battery': 'Up to 5 Days', 'Compatibility': 'Android & iOS' }
  },
  {
    id: 'mosquito-rechargeable-racquet',
    name: 'Mosquito Rechargeable Racquet with UV Light Bat',
    brand: 'Hunter',
    category: 'Daily Essentials',
    price: 249,
    referencePrice: 299,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=800&q=80',
    description: '3500V instant insect zap grid, built-in emergency LED flashlight, and long-lasting 1200mAh lithium battery.',
    keyFeatures: ['3500V Instant High Voltage Grid', 'Built-in LED Attraction Light', 'Triple Layer Safety Mesh'],
    specifications: { 'Battery': '1200mAh Li-ion', 'Charging': 'Plug-in', 'Grid': '3 Layers' }
  },
  {
    id: 'cello-h2o-glass-bottle-set',
    name: 'CELLO H2O Glass Water Bottle Set (1000ml x 2)',
    brand: 'Cello',
    category: 'Daily Essentials',
    price: 399,
    referencePrice: 549,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    description: 'Tough crystal-clear soda lime glass bottles with airtight stainless steel leakproof screw caps.',
    keyFeatures: ['100% Toxic-Free Soda Lime Glass', 'Airtight Leak-Proof Cap', 'Fridge Door Friendly'],
    specifications: { 'Capacity': '1000ml Each', 'Pack': '2 Bottles', 'Cap': 'Stainless Steel' }
  },
  {
    id: 'whisky-glass-set-crystal',
    name: 'Premium Crystal Cut Whisky Glass Set (Pack of 6)',
    brand: 'Ocean Crystal',
    category: 'Daily Essentials',
    price: 420,
    referencePrice: 845,
    condition: 'special inventory',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    description: '300ml weighted base old fashioned rock glasses crafted from lead-free sparkling crystal.',
    keyFeatures: ['Lead-Free Sparkling Crystal', 'Heavy Weighted Base', 'Diamond Cut Facets'],
    specifications: { 'Capacity': '300ml each', 'Pieces': '6 Glasses', 'Material': 'Lead-Free Crystal' }
  },

  // ==========================================
  // HOUSE HOLDS
  // ==========================================
  {
    id: 'havells-instant-geyser-3l',
    name: 'Havells Instant Water Geyser 3 Litre 3000W',
    brand: 'Havells',
    model: 'Instanio 3L 3kW',
    category: 'House Holds',
    price: 2659,
    referencePrice: 8290,
    condition: 'open-box',
    availability: 'Limited Stock',
    featured: true,
    dealOfTheDay: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-thick stainless steel inner tank with multi-function safety valve and instant 3kW heating element.',
    keyFeatures: ['3000W Fast Copper Element', 'SS 304 Ultra Thick Inner Tank', 'Color Changing LED Indicator', 'Rust & Shock-Proof ABS Outer'],
    specifications: { 'Capacity': '3 Litres', 'Wattage': '3000 Watts', 'Pressure': '6.5 Bar', 'Tank': 'Stainless Steel' }
  },
  {
    id: 'usha-techne-steam-iron',
    name: 'USHA Techne 1000W Non-Stick Steam Iron',
    brand: 'Usha',
    category: 'House Holds',
    price: 1095,
    referencePrice: 2190,
    condition: 'open-box',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
    description: 'Continuous steam burst with vertical steaming option and Weilburger German non-stick coated soleplate.',
    keyFeatures: ['Weilburger Non-Stick Soleplate', 'Vertical Steam Burst', 'Overheat Thermostat Cutoff'],
    specifications: { 'Power': '1000 Watts', 'Soleplate': 'Non-Stick German', 'Steam Rate': '15g/min' }
  },
  {
    id: 'flipkart-smartbuy-spin-mop',
    name: 'Flipkart SmartBuy NEW BUCKET 360 Spin Mop with 2 Refills',
    brand: 'SmartBuy',
    category: 'House Holds',
    price: 425,
    referencePrice: 531,
    condition: 'new',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    description: 'Microfiber cleaning head with stainless steel spin dry wringer bucket and extendable telescopic handle.',
    keyFeatures: ['360° Rotating Microfiber Head', 'Stainless Steel Spin Wringer', 'Includes 2 Microfiber Refills'],
    specifications: { 'Bucket': 'Heavy Duty Plastic', 'Handle': 'SS Telescopic', 'Refills': '2 Microfiber Heads' }
  },
  {
    id: 'harpic-power-plus-1l-2pack',
    name: 'Harpic Power Plus 10X Max Clean (1L x 2 Pack)',
    brand: 'Harpic',
    category: 'House Holds',
    price: 306,
    referencePrice: 490,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    description: 'Disinfectant toilet cleaner eliminating 99.9% germs, removing limescale and tough stains.',
    keyFeatures: ['10X Max Stain Removal', 'Kills 99.9% Germs', 'Thick Disinfectant Liquid'],
    specifications: { 'Volume': '1L x 2 Bottles', 'Form': 'Liquid Gel', 'Pack': 'Twin Pack' }
  },

  // ==========================================
  // BABY CARE
  // ==========================================
  {
    id: 'huggies-wonder-pants-large',
    name: 'Huggies Complete Comfort Wonder Pants (L Size - 54 Pants)',
    brand: 'Huggies',
    category: 'Baby Care',
    price: 520,
    referencePrice: 702,
    condition: 'new',
    availability: 'In Stock',
    featured: true,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    description: 'Bubble bed technology for 12-hour dry absorption with soft flexible waistband preventing red marks.',
    keyFeatures: ['Bubble Bed Softness', 'Up to 12 Hours Overnight Dryness', 'Triple Leak Guard', 'pH Balanced Material'],
    specifications: { 'Size': 'Large (L)', 'Count': '54 Diaper Pants', 'Baby Weight': '9 - 14 kg' }
  },

  // ==========================================
  // UNDERGARMENTS
  // ==========================================
  {
    id: 'rupa-topman-cotton-vest',
    name: "RUPA TOPMAN Premium Combed Cotton Men's Vest (Pack of 1)",
    brand: 'Rupa',
    category: 'Undergarments',
    price: 80,
    referencePrice: 137,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    description: '100% Super combed ribbed cotton yarn for sweat absorption and all-day ease.',
    keyFeatures: ['100% Combed Cotton', 'Sweat Absorbent Ribbed Fabric', 'Reinforced Armhole Seams'],
    specifications: { 'Fabric': '100% Cotton', 'Fit': 'Regular Fit', 'Color': 'White' }
  },
  {
    id: 'amul-comfy-pure-cotton-vest',
    name: "Amul Comfy 100% Pure Cotton Men's Vest (Pack of 2)",
    brand: 'Amul Macho',
    category: 'Undergarments',
    price: 250,
    referencePrice: 327,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    description: 'Double reinforced stitching, itch-free contoured body fit with soft armhole bindings.',
    keyFeatures: ['Pure Combed Cotton', 'Double Reinforced Stitching', 'Anti-Curl Hem'],
    specifications: { 'Fabric': '100% Pure Cotton', 'Pack': '2 Vests', 'Fit': 'Comfort Fit' }
  },
  {
    id: 'dixcy-slimz-women-cami',
    name: 'Dixcy Slimz Women Super Stretch Cami Shirt',
    brand: 'Dixcy',
    category: 'Undergarments',
    price: 325,
    referencePrice: 423,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    description: 'Modal cotton blend with adjustable spaghetti straps, ideal for everyday layering or lounging.',
    keyFeatures: ['Super Stretch Modal Cotton', 'Adjustable Spaghetti Straps', 'Tagless Comfort'],
    specifications: { 'Fabric': 'Modal Cotton Blend', 'Type': 'Camisole', 'Care': 'Machine Wash' }
  },
  {
    id: 'dollar-bigboss-mens-vest',
    name: 'Dollar Bigboss Mens 100% Egyptian Cotton Vest (Pack of 2)',
    brand: 'Dollar',
    category: 'Undergarments',
    price: 200,
    referencePrice: 332,
    condition: 'new',
    availability: 'In Stock',
    featured: false,
    dealOfTheDay: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    description: 'Silky smooth anti-bacterial treated cotton keeping you cool under formal shirts.',
    keyFeatures: ['Egyptian Long-Staple Cotton', 'Anti-Bacterial Odour Guard', 'Seamless Tubular Body'],
    specifications: { 'Fabric': '100% Egyptian Cotton', 'Pack': '2 Units', 'Fit': 'Slim Fit' }
  }
];

// Helper to compute exact savings
export const PRODUCTS: Product[] = rawProducts.map((p) => {
  const savingsAmount = Math.max(0, p.referencePrice - p.price);
  const savingsPercentage = Math.round((savingsAmount / p.referencePrice) * 100);
  return {
    ...p,
    savingsAmount,
    savingsPercentage,
  };
});

export const FEATURED_DEALS = PRODUCTS.filter((p) => p.featured || p.dealOfTheDay);
export const TODAYS_BIG_DEALS = PRODUCTS.filter((p) => p.savingsPercentage >= 40 || p.dealOfTheDay).slice(0, 8);

// Formatting Indian Rupee Currency
export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

// WhatsApp Direct URL Builder for single product (Accurate real-world order flow)
export const getProductWhatsAppUrl = (product: Product, quantity = 1): string => {
  const conditionLine = product.condition && product.condition !== 'unknown' 
    ? `Condition: ${product.condition.toUpperCase()}\n` 
    : '';

  const text = `Hi Big Deals,
I'm interested in:
*${product.name}*

Big Deals price: ₹${product.price.toLocaleString('en-IN')} (MRP/Reference: ₹${product.referencePrice.toLocaleString('en-IN')})
You Save: ₹${product.savingsAmount.toLocaleString('en-IN')} (${product.savingsPercentage}% OFF)
${conditionLine}Quantity: ${quantity}

Please confirm current availability and ordering details.`;

  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

// WhatsApp Direct URL Builder for general enquiry or price check
export const getPriceCheckWhatsAppUrl = (productName?: string, competitorPrice?: number): string => {
  let text = `Hi Big Deals,\nI found a deal elsewhere and would like to check with you:`;
  if (productName) {
    text += `\nProduct: *${productName}*`;
  }
  if (competitorPrice) {
    text += `\nPrice Found: ₹${competitorPrice.toLocaleString('en-IN')}`;
  }
  text += `\n\nCan you match or beat this price?`;
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

// WhatsApp Direct URL Builder for custom enquiry
export const getGeneralEnquiryWhatsAppUrl = (message?: string): string => {
  const text = message || `Hi Big Deals,\nI am browsing your catalog and would like to ask about available open-box and surplus inventory.`;
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

// WhatsApp Cart Checkout Builder
export const getCartWhatsAppUrl = (items: { product: Product; quantity: number }[]): string => {
  if (items.length === 0) {
    return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Big Deals, I would like to check current deals and inventory availability!')}`;
  }

  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}*\n   Qty: ${item.quantity} x ₹${item.product.price.toLocaleString('en-IN')} = ₹${(item.quantity * item.product.price).toLocaleString('en-IN')}`
    )
    .join('\n\n');

  const totalAmount = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalReference = items.reduce((sum, item) => sum + item.product.referencePrice * item.quantity, 0);
  const totalSavings = totalReference - totalAmount;
  const savingsPct = Math.round((totalSavings / totalReference) * 100);

  const text = `🛒 *NEW ORDER ENQUIRY - BIG DEALS*

I want to order the following items:

${itemsList}

-----------------------------
*TOTAL BIG DEALS PRICE:* ₹${totalAmount.toLocaleString('en-IN')}
*TOTAL REFERENCE VALUE:* ₹${totalReference.toLocaleString('en-IN')}
*TOTAL SAVINGS:* ₹${totalSavings.toLocaleString('en-IN')} (${savingsPct}% OFF)

Please confirm my order and share delivery / payment instructions.`;

  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
