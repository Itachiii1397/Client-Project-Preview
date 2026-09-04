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
  'Household',
  'Special Deals',
];

export const CATEGORY_ICONS: Record<string, string> = {
  'Kitchen Appliances': 'UtensilsCrossed',
  'Sports': 'Trophy',
  'Personal Care': 'Sparkles',
  'Baby Care': 'Baby',
  'Daily Essentials': 'PackageCheck',
  'Undergarments': 'Shirt',
  'Household': 'Home',
  'Special Deals': 'Zap',
};

interface RawProductData {
  id: string;
  canonicalId: string;
  name: string;
  brand?: string;
  model?: string;
  category: Category;
  price: number;
  referencePrice: number;
  condition?: ProductCondition;
  image: string;
  images?: string[];
  imageSource: string;
  imageInspected: boolean;
  dataInspected: boolean;
  description?: string;
  specifications?: Record<string, string>;
  availability?: 'In Stock' | 'Limited Stock' | 'Check Availability';
  stock?: number;
  featured?: boolean;
  dealOfTheDay?: boolean;
  sourceUrl?: string;
  keyFeatures?: string[];
}

const rawProducts: RawProductData[] = [
  {
    "id": "nivia-gym-ball-3709",
    "canonicalId": "3709",
    "name": "NIVIA GYM BALL",
    "brand": "Nivia",
    "category": "Sports",
    "price": 825,
    "referencePrice": 1649,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6577/gripper.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Anti Burst Exercise Ball",
    "availability": "Limited Stock",
    "stock": 4,
    "featured": true,
    "dealOfTheDay": true,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3709/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "boldfit-yoga-mat-3692",
    "canonicalId": "3692",
    "name": "BOLDFIT YOGA MAT",
    "brand": "Boldfit",
    "category": "Sports",
    "price": 700,
    "referencePrice": 1399,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6577/gripper.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Boldfit EVA Yoga Mats For Women Yoga Mat For Men Exercise Mat For Home Workout Gym Anti Slip 4mm Workout Mats - BLACK",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3692/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "cosco-zoomer-skating-3339",
    "canonicalId": "3339",
    "name": "Cosco Zoomer Skating",
    "brand": "Cosco",
    "category": "Sports",
    "price": 700,
    "referencePrice": 1400,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6577/gripper.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Cosco Boy Zoomer Sr. (19.5-26.5 Cm) Age Group (8+ Years) Quad Roller Skates Roller_Derby_Wheel - Size 12C-8 UK (Orange)",
    "availability": "Limited Stock",
    "stock": 1,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3339/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "yonex-mavis-350-3300",
    "canonicalId": "3300",
    "name": "Yonex Mavis 350",
    "brand": "Yonex",
    "category": "Sports",
    "price": 825,
    "referencePrice": 1650,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6577/gripper.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Yonex Mavis 350 Green Cap Nylon Shuttlecock (Yellow)",
    "availability": "In Stock",
    "stock": 15,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3300/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "toning-tube-3293",
    "canonicalId": "3293",
    "name": "Toning Tube",
    "brand": "Toning",
    "category": "Sports",
    "price": 250,
    "referencePrice": 500,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6577/gripper.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Cockatoo Resistance Band Or Toning Tube with Foam Handle with Extra Heavy Tension",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3293/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "bodyband-wheel-ab-roller-3291",
    "canonicalId": "3291",
    "name": "Bodyband wheel AB roller",
    "brand": "Bodyband",
    "category": "Sports",
    "price": 174,
    "referencePrice": 499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6577/gripper.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Bodyband Abs Roller For Men &amp; Women Ab Roller Wheel For Home Gym Exercise Equipment For Home Gym Exercise Machine Dual Wheel with 6mm Knee Mat - Yellow",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3291/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "boldfit-hand-gripper-3290",
    "canonicalId": "3290",
    "name": "Boldfit hand gripper",
    "brand": "Boldfit",
    "category": "Sports",
    "price": 250,
    "referencePrice": 499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6577/gripper.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6577/gripper.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Boldfit Hand Gripper for Men &amp; Women Hand Grip Strengthener for Forearm, Wrist &amp; Finger Workout Fitness Equipment for Home &amp; Gym Training",
    "availability": "Limited Stock",
    "stock": 3,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3290/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "nivia-strom-3289",
    "canonicalId": "3289",
    "name": "Nivia Strom",
    "brand": "Nivia",
    "category": "Sports",
    "price": 478,
    "referencePrice": 955,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6575/strom.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6575/strom.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Nivia Storm Football - Size 5 (White), Rubber",
    "availability": "In Stock",
    "stock": 10,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3289/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "yonex-astrox-lite-37i-3288",
    "canonicalId": "3288",
    "name": "Yonex Astrox lite 37i",
    "brand": "Yonex",
    "category": "Sports",
    "price": 1695,
    "referencePrice": 3390,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6569/37i.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6569/37i.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Yonex Badminton Racquet Astrox Lite 37i 5U G4 (Black)",
    "availability": "Limited Stock",
    "stock": 3,
    "featured": true,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/3288/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "wahl-professional-2965",
    "canonicalId": "2965",
    "name": "Wahl Launch Professional Triple Blade Shaver",
    "brand": "Wahl",
    "model": "Launch Pro Shaver",
    "category": "Personal Care",
    "price": 2799,
    "referencePrice": 6299,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5820/SABER-X.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Wahl Launch Professional Shaver, Cord/Cordless Operation, 6500 RPM Powerful Motor, Triple Floating Washable Blades, 0.04 mm Cutting Lenght, Safety Lock, Smart LED, 2 Hours",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2965/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "wahl-professional-2964",
    "canonicalId": "2964",
    "name": "Wahl Professional Magic Clip Cordless Hair Clipper",
    "brand": "Wahl",
    "model": "Magic Clip Cordless",
    "category": "Personal Care",
    "price": 5459,
    "referencePrice": 11999,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5820/SABER-X.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Wahl Male Magic Clip Electric Hair Clipper, Battery Powered",
    "availability": "Limited Stock",
    "stock": 1,
    "featured": true,
    "dealOfTheDay": true,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2964/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "lifelong-trim-ez-2960",
    "canonicalId": "2960",
    "name": "LIFELONG TRIM EZ",
    "brand": "Lifelong",
    "category": "Personal Care",
    "price": 419,
    "referencePrice": 1499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5820/SABER-X.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Lifelong Beard Trimmer for Man | Timmer Men Beard | Cordless Hair Trimmer for Men All in One | Grooming Kit with Skin Friendly Blades | Shaving Machine with 4 Combs, Type C Rechargeable, 1Hr Runtime",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2960/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "braun-beard-trimmer-series-9-2953",
    "canonicalId": "2953",
    "name": "BRAUN BEARD TRIMMER SERIES 9",
    "brand": "Braun",
    "category": "Personal Care",
    "price": 3639,
    "referencePrice": 7999,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5820/SABER-X.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Braun All-in-One Trimmer for Men BT9520, Cordless with 180-Min Runtime, Lifetime Sharp Metal Blades, Waterproof, Precision Comb, 50+ Length Settings, Premium Case, 8-in-1",
    "availability": "Limited Stock",
    "stock": 3,
    "featured": true,
    "dealOfTheDay": true,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2953/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "lifelong-wax-and-oil-heater-2942",
    "canonicalId": "2942",
    "name": "LIFELONG WAX AND OIL HEATER",
    "brand": "Lifelong",
    "category": "Personal Care",
    "price": 349,
    "referencePrice": 1999,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5820/SABER-X.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Lifelong Wax Heater with Wax Applicator Spatula for Waxing for Women | One Touch Operation Wax Heater Machine for Smooth Hair Removal | Quick &amp; Easy Heating | for All Types of Wax,1 Count",
    "availability": "Limited Stock",
    "stock": 1,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2942/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "xieomi-berd-trimmer-2938",
    "canonicalId": "2938",
    "name": "XIEOMI BERD TRIMMER",
    "brand": "Xiaomi",
    "category": "Personal Care",
    "price": 1333,
    "referencePrice": 1999,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5820/SABER-X.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "MI Xiaomi Beard Trimmer 2C With High Precision Trimming | 2 Beard Comb | USB Type-C | Fast Charging | 0.5mm Precision | 40 Length Settings | 90 Min Run Time, Black",
    "availability": "Limited Stock",
    "stock": 1,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2938/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "saber-x-3-in-1-2932",
    "canonicalId": "2932",
    "name": "SABER X 3 IN 1",
    "brand": "Saber",
    "category": "Personal Care",
    "price": 1009,
    "referencePrice": 3499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5820/SABER-X.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5820/SABER-X.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "TAGG Saber X 3 In 1 Trimmer,Ip7 Rated- Onyx Black, Men",
    "availability": "Limited Stock",
    "stock": 1,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2932/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "beardo-ape-x-ez-2926",
    "canonicalId": "2926",
    "name": "BEARDO APE X EZ",
    "brand": "Beardo",
    "category": "Personal Care",
    "price": 529,
    "referencePrice": 995,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5814/APE-X-EZ.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5814/APE-X-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Beardo Ape-X EZ Trimmer",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2926/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "beardo-ape-x-prime-2922",
    "canonicalId": "2922",
    "name": "BEARDO APE X PRIME",
    "brand": "Beardo",
    "category": "Personal Care",
    "price": 699,
    "referencePrice": 1499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5810/APE-X.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5810/APE-X.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Beardo Ape-X Prime 3-in-1 Multipurpose Trimmer for Men | Grooming Kit : Beard Trimmer, Precision Trimmer, Ear &amp; Nose Trimmer | Stainless Steel self-sharpening blades | Type C charging",
    "availability": "Limited Stock",
    "stock": 3,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2922/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "beardo-ball-safe-pro-2911",
    "canonicalId": "2911",
    "name": "BEARDO BALL SAFE PRO",
    "brand": "Beardo",
    "category": "Personal Care",
    "price": 1224,
    "referencePrice": 2199,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5796/BALL-SAFE.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5796/BALL-SAFE.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Beardo Ball Safe Pro Trimmer | Intimate Trimmer for Men | IPX7 Waterproof | Safe Ceramic Blades | 40mm T-Blade | 6000 RPM | 90 Min Runtime | Type-C Charging | Full Body Trimmer for Men",
    "availability": "Limited Stock",
    "stock": 4,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2911/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "beardo-chrome-beast-2910",
    "canonicalId": "2910",
    "name": "BEARDO CHROME BEAST",
    "brand": "Beardo",
    "category": "Personal Care",
    "price": 1154,
    "referencePrice": 2499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5792/CHROME-BEAST.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5792/CHROME-BEAST.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Beardo Chrome Beast Multipurpose Full Body Groomer Trimmer Set For Men | 40 Length Settings | 8 attachments | Beard/Hair/Body/Precision/Ear/Nose Trimmer|With Dock|90 min. run time | All-in-1 trimmer",
    "availability": "Limited Stock",
    "stock": 4,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2910/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "beardo-tornado-2517",
    "canonicalId": "2517",
    "name": "BEARDO TORNADO",
    "brand": "Beardo",
    "category": "Personal Care",
    "price": 1047,
    "referencePrice": 2199,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5038/TORNADO.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5038/TORNADO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "BEARDO Studio Professional Tornado Hair Dryer With 2000 Watts Power|Ac Motor, Concentrator, Diffuser, 2 Speeds, 3 Temperature Settings &amp; Cool Shot Feature|For Professional Drying Experience|Black",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2517/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "wahl-homecut-2515",
    "canonicalId": "2515",
    "name": "WAHL HOMECUT",
    "brand": "Wahl",
    "category": "Personal Care",
    "price": 629,
    "referencePrice": 2000,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5036/WAHL.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5036/WAHL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Wahl 9243-4724 Corded Home Cut Complete Hair Cutting Clipper; 10 Cutting Lengths;Thumb Adjustable Taper; Black",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2515/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "lifelong-volumizer-hair-dryer-2513",
    "canonicalId": "2513",
    "name": "LIFELONG VOLUMIZER HAIR DRYER",
    "brand": "Lifelong",
    "category": "Personal Care",
    "price": 1259,
    "referencePrice": 3999,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5034/LIFELONG.JPEG",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5034/LIFELONG.JPEG",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Lifelong LLPCW102 Hair Dryer (1200 W, Rose Gold)",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2513/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "havells-instant-geyser-2489",
    "canonicalId": "2489",
    "name": "HAVELLS INSTANT GEYSER",
    "brand": "Havells",
    "category": "Household",
    "price": 2659,
    "referencePrice": 8290,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3090/75113033-6564-4ac9-aa5a-9d0320ba2b9b.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Havells Signa 5 Litre Instant Water Heater(Geyser)| Twin LED Indicator| Rust and Shock Proof Body| ISI Marked| Fire Retardant Power Cord| Warranty: 5 year on inner tank &amp; 2 year comprehensive (White)",
    "availability": "Limited Stock",
    "stock": 3,
    "featured": true,
    "dealOfTheDay": true,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/2489/product-details",
    "specifications": {
      "Category": "Household",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "borosil-1942",
    "canonicalId": "1942",
    "name": "BOROSIL",
    "brand": "Borosil",
    "category": "Household",
    "price": 559,
    "referencePrice": 1745,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3090/75113033-6564-4ac9-aa5a-9d0320ba2b9b.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Borosil Klip n Store Universal Lunchbox | 320ml x 2 Square + 240ml x 2 Round Container Set | Made in India Borosilicate Glass | Microwave &amp; Dishwasher Safe | Tiffin for Office/School/College",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1942/product-details",
    "specifications": {
      "Category": "Household",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "pigeon-handy-chopper-1935",
    "canonicalId": "1935",
    "name": "Pigeon Handy Mini Chopper (3 Blades, Green) - Lot B",
    "brand": "Pigeon",
    "model": "Handy Mini 3-Blade",
    "category": "Kitchen Appliances",
    "price": 188,
    "referencePrice": 745,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4053/ORIENT.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Pigeon by Stoverkraft Handy Mini Plastic Chopper with 3 Blades, Green",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1935/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "pigeon-handy-chopper-1934",
    "canonicalId": "1934",
    "name": "Pigeon Handy Mini Chopper (3 Blades, Green) - Lot A",
    "brand": "Pigeon",
    "model": "Handy Mini 3-Blade",
    "category": "Kitchen Appliances",
    "price": 188,
    "referencePrice": 745,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4053/ORIENT.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Pigeon by Stoverkraft Handy Mini Plastic Chopper with 3 Blades, Green",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1934/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "usha-steam-iron-1928",
    "canonicalId": "1928",
    "name": "USHA STEAM IRON",
    "brand": "Usha",
    "category": "Household",
    "price": 1095,
    "referencePrice": 2190,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3090/75113033-6564-4ac9-aa5a-9d0320ba2b9b.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Usha 3713 1300Watt Steam Iron with Self Cleaning Function | Teflon Coated Soleplate | Powerful Steam Output upto18gm/min | 180ml Water Tank Capacity | 2 Years Warranty | (Blue &amp; White)",
    "availability": "In Stock",
    "stock": 7,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1928/product-details",
    "specifications": {
      "Category": "Household",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "kenstar-toster-1923",
    "canonicalId": "1923",
    "name": "KENSTAR TOSTER",
    "brand": "Kenstar",
    "category": "Kitchen Appliances",
    "price": 599,
    "referencePrice": 1495,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4053/ORIENT.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Kenstar GRILLI 750W Sandwich Grill Maker | Non-Stick 2-Slice Plates | Cool-Touch Body &amp; Auto Cut-Off | Black",
    "availability": "In Stock",
    "stock": 12,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1923/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "butterfly-rapid-1920",
    "canonicalId": "1920",
    "name": "BUTTERFLY RAPID",
    "brand": "Butterfly",
    "category": "Kitchen Appliances",
    "price": 2475,
    "referencePrice": 5499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4053/ORIENT.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Butterfly Smart 750 Watts Mixer Grinder with 4 Jars | 3 Stainless Steel Jars &amp; 1 Juicer | ABS Body | Heavy Duty Motor | 2 Years Manufacturer's Warranty | Grey",
    "availability": "Limited Stock",
    "stock": 1,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1920/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "preethi-mixer-grinder-1916",
    "canonicalId": "1916",
    "name": "PREETHI MIXER GRINDER",
    "brand": "Preethi",
    "category": "Kitchen Appliances",
    "price": 5790,
    "referencePrice": 9338,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4053/ORIENT.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Preethi Steele 110V Mixer Grinder for Kitchen | 3 Jar, 550W Mixie| Perfect for Grinding | Silver/Black (MG 206) - Only use in USA &amp; Canada",
    "availability": "Limited Stock",
    "stock": 1,
    "featured": true,
    "dealOfTheDay": true,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1916/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "cello-mixer-grinder-1912",
    "canonicalId": "1912",
    "name": "CELLO   MIXER GRINDER",
    "brand": "Cello",
    "category": "Kitchen Appliances",
    "price": 2236,
    "referencePrice": 3855,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4053/ORIENT.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Cello Kitchenette Collection Tigor Mixer Grinder with 3 Jars | 500 Watts | 3X Speed Control | Set of 3 | Pink",
    "availability": "Limited Stock",
    "stock": 4,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1912/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "orient-kettel-1904",
    "canonicalId": "1904",
    "name": "orient  kettel",
    "brand": "Orient",
    "category": "Kitchen Appliances",
    "price": 629,
    "referencePrice": 2299,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4053/ORIENT.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4053/ORIENT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "amazon basics 1.5 Liter Cool Touch Electric Kettle| 1350 Watt|Stainless Steel Body|Auto Cut-Off|Triple Safety Protection Black",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1904/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "millton-kettel-1880",
    "canonicalId": "1880",
    "name": "MILLTON KETTEL",
    "brand": "Milton",
    "category": "Kitchen Appliances",
    "price": 599,
    "referencePrice": 1599,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4023/MIL2.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4023/MIL2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Milton Euroline Go Electro 2.0 Stainless Steel Electric Kettle, 1.5 Litres, Silver, Power Indicator, 1350 Watts, Auto Cut-off, Detachable 360 Degree Connector, Boiler for Water, Instant noodles",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1880/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "tynor-knee-cap-1466",
    "canonicalId": "1466",
    "name": "Tynor Knee Cap",
    "brand": "Tynor",
    "category": "Sports",
    "price": 210,
    "referencePrice": 356,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3114/5abac301-da13-4bc9-9bec-1824754d4e92.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3114/5abac301-da13-4bc9-9bec-1824754d4e92.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Tynor Knee Cap Air, for Men &amp; Women | Support Pain Relief During Sports, Gym, Running | 1 Pair OFFER PRICE - 210/- MRP - 419/- ONLINE - 356/- OFFER PRICE - 210/-",
    "availability": "In Stock",
    "stock": 6,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1466/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "cello-h2o-glass-water-bottle-set-1464",
    "canonicalId": "1464",
    "name": "CELLO H2O Glass Water Bottle Set",
    "brand": "Cello",
    "category": "Household",
    "price": 399,
    "referencePrice": 549,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3090/75113033-6564-4ac9-aa5a-9d0320ba2b9b.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "CELLO H2O Glass Water Bottle Set of 3 Pcs for Office &amp; Daily Use 920 ml, Blue | Durable Freezable &amp; Fridge Safe, Leakproof Wide Mouth Leadfree Toughened Glass Water Bottle For Kitchen &amp; Travel OFFER PRICE - 399/- MRP - 747/- ONLINE - 549/- OFFER PRICE - 399/-",
    "availability": "In Stock",
    "stock": 10,
    "featured": true,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1464/product-details",
    "specifications": {
      "Category": "Household",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "original-fresh-pigeon-healthifry-digital-air-fryer-1463",
    "canonicalId": "1463",
    "name": "Original Fresh Pigeon Healthifry Digital Air Fryer",
    "brand": "Pigeon",
    "category": "Kitchen Appliances",
    "price": 2399,
    "referencePrice": 2915,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3111/2d0ebc67-fdd4-4480-83cc-d2e7b7b817c5.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3111/2d0ebc67-fdd4-4480-83cc-d2e7b7b817c5.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Original Fresh Pigeon Healthifry Digital Air Fryer, 360° High Speed Air Circulation Technology 1200 W with Non-Stick 4.2 L Basket Offer Price - 2399/- Mrp - 5995/- Online - 2915/- Offer Price - 2399/-",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": true,
    "dealOfTheDay": true,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1463/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "whisky-glass-set-1461",
    "canonicalId": "1461",
    "name": "Whisky Glass Set",
    "brand": "Whisky",
    "category": "Household",
    "price": 420,
    "referencePrice": 845,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3090/75113033-6564-4ac9-aa5a-9d0320ba2b9b.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Original Fresh Sealed Pack Nouvetta Maimi 6 Pcs Whisky Glass Set Offer Price - 420/- Mrp - 845/-",
    "availability": "In Stock",
    "stock": 10,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1461/product-details",
    "specifications": {
      "Category": "Household",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "smartwatch-for-men-and-women-jet-black-1460",
    "canonicalId": "1460",
    "name": "Smartwatch for Men and Women (Jet Black)",
    "brand": "Smartwatch",
    "category": "Personal Care",
    "price": 1049,
    "referencePrice": 1499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3108/b27b08e5-78a0-43bb-bd7d-9bed46f6deb6.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3108/b27b08e5-78a0-43bb-bd7d-9bed46f6deb6.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Jet Black) OFFER PRICE - 1049/- MRP - 5999/- ONLINE - 1499/- OFFER PRICE - 1049/-",
    "availability": "In Stock",
    "stock": 20,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1460/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "flipkart-smartbuy-new-bucket-spin-mop-1459",
    "canonicalId": "1459",
    "name": "Flipkart SmartBuy NEW BUCKET spin  mop",
    "brand": "Flipkart SmartBuy",
    "category": "Household",
    "price": 425,
    "referencePrice": 531,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3090/75113033-6564-4ac9-aa5a-9d0320ba2b9b.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Flipkart SmartBuy NEW BUCKET SPIN MOP AMAZING DESIGN IN PLASTIC AND 2 MICROFIBER REFILL SET Wet &amp; Dry Mop OFFER PRICE - 425/- MRP - 1899/- ONLINE - 531/- OFFER PRICE - 425/-",
    "availability": "Limited Stock",
    "stock": 3,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1459/product-details",
    "specifications": {
      "Category": "Household",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "pigeon-favourite-electric-kettle-1458",
    "canonicalId": "1458",
    "name": "Pigeon Favourite Electric Kettle",
    "brand": "Pigeon",
    "category": "Kitchen Appliances",
    "price": 384,
    "referencePrice": 549,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3105/23e8549e-d67f-41e9-be1b-71b1fa6a4ded.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3105/23e8549e-d67f-41e9-be1b-71b1fa6a4ded.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Pigeon Favourite Electric Kettle (1.5 L, Silver, Black) 1300 Watt, Stainless Steel Body with Auto Shut-off Feature Used for Boiling Water - (Silver Black) OFFER PRICE - 384/- MRP - 1195/- ONLINE - 549/- OFFER PRICE - 384/-",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1458/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "mosquito-rechargeable-racquet-1457",
    "canonicalId": "1457",
    "name": "Mosquito Rechargeable Racquet",
    "brand": "Mosquito",
    "category": "Daily Essentials",
    "price": 249,
    "referencePrice": 299,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3104/b938fb1c-ed51-46b5-a3f9-e13cbc520787.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3104/b938fb1c-ed51-46b5-a3f9-e13cbc520787.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3101/a985f2c6-1791-4c25-a420-1750c601967d.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3100/1f48f603-52af-4112-aa8f-c5f7a3abe621.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3099/468cd1f6-dc92-42da-8553-237ca37f4f38.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Odomos Attack Anti - Mosquito Rechargeable Racquet | 400mAH Battery | Large Net Area for Better Coverage | Long Lasting Internal Battery with Plug in Socket | 6 Months Warranty (Black) OFFER PRICE - 249/- MRP - 499/- ONLINE - 299/- OFFER PRICE - 249/-",
    "availability": "In Stock",
    "stock": 6,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1457/product-details",
    "specifications": {
      "Category": "Daily Essentials",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "yonex-zr-100-1456",
    "canonicalId": "1456",
    "name": "YONEX ZR 100",
    "brand": "Yonex",
    "category": "Sports",
    "price": 375,
    "referencePrice": 629,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3103/777eaec4-eb4e-42dd-a6e1-a8c2db4d56c1.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3103/777eaec4-eb4e-42dd-a6e1-a8c2db4d56c1.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7633/GYM-BALL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/7578/BOLDFIT-YOGA-MAT.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6660/skating.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6600/shuttel.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6581/toning-tube.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/6578/ab-roller.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "YONEX ZR 100 light Aluminium Strung Badminton Racket with Full Racket Cover (Red/White) | For Beginners | 95 grams | Maximum String Tension - 26lbs OFFER PRICE - 375/- MRP - 750/- ONLINE - 629/- OFFER PRICE - 375/-",
    "availability": "In Stock",
    "stock": 20,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1456/product-details",
    "specifications": {
      "Category": "Sports",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "huggies-complete-comfort-wonder-pants-1455",
    "canonicalId": "1455",
    "name": "Huggies Complete Comfort Wonder Pants",
    "brand": "Huggies",
    "category": "Baby Care",
    "price": 520,
    "referencePrice": 702,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3102/cc211f7c-d90f-4146-81e0-da819a13311f.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3102/cc211f7c-d90f-4146-81e0-da819a13311f.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Huggies Complete Comfort Wonder Pants | Pant Style Baby Diapers Medium Size (M), 76 Count | India's Fastest Absorbing Diaper, Prevents Diaper Rash, Ideal for 7 to 12 Kgs OFFER PRICE - 520/- MRP - 1299/- ONLINE - 702/- OFFER PRICE - 520/- (ALL SIZES AVAILABLE)",
    "availability": "In Stock",
    "stock": 10,
    "featured": true,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1455/product-details",
    "specifications": {
      "Category": "Baby Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "cetaphil-moisturising-1454",
    "canonicalId": "1454",
    "name": "Cetaphil Moisturising",
    "brand": "Cetaphil",
    "category": "Daily Essentials",
    "price": 372,
    "referencePrice": 568,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3101/a985f2c6-1791-4c25-a420-1750c601967d.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3101/a985f2c6-1791-4c25-a420-1750c601967d.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3104/b938fb1c-ed51-46b5-a3f9-e13cbc520787.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3100/1f48f603-52af-4112-aa8f-c5f7a3abe621.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3099/468cd1f6-dc92-42da-8553-237ca37f4f38.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Cetaphil Moisturising Lotion 100 ml for Dry to Normal &amp; Sensitive Skin | 48H Hydration with Niacinamide, Panthenol &amp; Glycerin | Fragrance-Free, Non-Greasy, Dermatologist Recommended, For Face and Body OFFER PRICE - 372/- MRP - 620/- ONLINE - 568/- OFFER PRICE - 372/-",
    "availability": "Limited Stock",
    "stock": 4,
    "featured": true,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1454/product-details",
    "specifications": {
      "Category": "Daily Essentials",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "rexona-shower-fresh-underarm-roll-1453",
    "canonicalId": "1453",
    "name": "Rexona Shower Fresh Underarm Roll",
    "brand": "Rexona",
    "category": "Daily Essentials",
    "price": 95,
    "referencePrice": 104,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3100/1f48f603-52af-4112-aa8f-c5f7a3abe621.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3100/1f48f603-52af-4112-aa8f-c5f7a3abe621.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3104/b938fb1c-ed51-46b5-a3f9-e13cbc520787.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3101/a985f2c6-1791-4c25-a420-1750c601967d.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3099/468cd1f6-dc92-42da-8553-237ca37f4f38.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Rexona Shower Fresh Underarm Roll On Deodorant For Women, Antiperspirant, Removes Odour, Keeps Skin Fresh &amp; Clean, Alcohol Free, Skin Friendly, 50 ml OFFER PRICE - 95/- MRP - 190/- ONLINE - 104/- OFFER PRICE - 95/-",
    "availability": "In Stock",
    "stock": 15,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1453/product-details",
    "specifications": {
      "Category": "Daily Essentials",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "harpic-pack-of-2-1452",
    "canonicalId": "1452",
    "name": "Harpic PACK OF 2",
    "brand": "Harpic",
    "category": "Daily Essentials",
    "price": 306,
    "referencePrice": 490,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3099/468cd1f6-dc92-42da-8553-237ca37f4f38.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3099/468cd1f6-dc92-42da-8553-237ca37f4f38.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3104/b938fb1c-ed51-46b5-a3f9-e13cbc520787.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3101/a985f2c6-1791-4c25-a420-1750c601967d.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3100/1f48f603-52af-4112-aa8f-c5f7a3abe621.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Harpic PACK OF 2 Disinfectant Toilet Cleaner Liquid, Original - 1 L (Pack of 2) | Kills 99.9% Germs OFFER PRICE - 306/- MRP - 560/- ONLINE - 490/- OFFER PRICE - 306/-",
    "availability": "In Stock",
    "stock": 20,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1452/product-details",
    "specifications": {
      "Category": "Daily Essentials",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "vinod-europa-2-litre-stainless-steel-handi-pressure-cooker-1451",
    "canonicalId": "1451",
    "name": "Vinod Europa 2 Litre Stainless Steel Handi Pressure Cooker",
    "brand": "Vinod",
    "category": "Kitchen Appliances",
    "price": 1997,
    "referencePrice": 2399,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3098/9a4af8c5-719d-4fe1-a88f-c1de1138dc21.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3098/9a4af8c5-719d-4fe1-a88f-c1de1138dc21.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Vinod Europa 2 Litre Stainless Steel Handi Pressure Cooker | Induction &amp; Gas Compatible | Sandwich Bottom | Inner Lid, ISI &amp; CE Certified | Durable Pressure Cooker with 2-Year Warranty 𝐕𝐄𝐑𝐒𝐀𝐓𝐈𝐋𝐄 𝐂𝐀𝐏𝐀𝐂𝐈𝐓𝐘 𝐈𝐒𝐈 𝐂𝐄𝐑𝐓𝐈𝐅𝐈𝐄𝐃 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐒𝐓𝐀𝐈𝐍𝐋𝐄𝐒𝐒 𝐒𝐓𝐄𝐄𝐋 - Made from AISI 304 18/8 stainless steel for durability, hygiene, and corrosion resistance, ensuring long-lasting performance. OFFER PRICE - 1997/- MRP - 2570/- ONLINE - 2399/- OFFER PRICE - 1997/-",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": true,
    "dealOfTheDay": true,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1451/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "dollar-bigboss-mens-vest-1450",
    "canonicalId": "1450",
    "name": "Dollar Bigboss Mens Vest",
    "brand": "Dollar Bigboss",
    "category": "Undergarments",
    "price": 200,
    "referencePrice": 332,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3097/0b1f22b9-5be8-47d1-b8e4-94f422c6affe.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3097/0b1f22b9-5be8-47d1-b8e4-94f422c6affe.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3096/b301d26f-81f7-4803-a5ca-4acaf735ef7e.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3095/eeea6314-9a1b-4da3-8e09-77517dd21afd.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3094/3e205ef6-ca6e-4165-b20f-ef61e8d5b6af.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Dollar Bigboss Mens Vest (PACK OF 2) Cotton Scoop Neck Premium Vest. OFFER PRICE - 200/- MRP - 400/- ONLINE - 332/- OFFER PRICE - 200/-",
    "availability": "In Stock",
    "stock": 10,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1450/product-details",
    "specifications": {
      "Category": "Undergarments",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "dixcy-slimz-women-cami-shirt-1449",
    "canonicalId": "1449",
    "name": "Dixcy Slimz Women Cami Shirt",
    "brand": "Dixcy Slimz",
    "category": "Undergarments",
    "price": 325,
    "referencePrice": 423,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3096/b301d26f-81f7-4803-a5ca-4acaf735ef7e.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3096/b301d26f-81f7-4803-a5ca-4acaf735ef7e.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3097/0b1f22b9-5be8-47d1-b8e4-94f422c6affe.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3095/eeea6314-9a1b-4da3-8e09-77517dd21afd.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3094/3e205ef6-ca6e-4165-b20f-ef61e8d5b6af.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Dixcy Slimz Women Cami Shirt 100% Combed Cotton (pack of 5) OFFER PRICE - 325/- MRP - 650/- ONLINE - 423/- OFFER PRICE - 325/-",
    "availability": "In Stock",
    "stock": 10,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1449/product-details",
    "specifications": {
      "Category": "Undergarments",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "amul-comfy-men-s-vest-1448",
    "canonicalId": "1448",
    "name": "Amul Comfy Men’s Vest",
    "brand": "Amul",
    "category": "Undergarments",
    "price": 250,
    "referencePrice": 327,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3095/eeea6314-9a1b-4da3-8e09-77517dd21afd.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3095/eeea6314-9a1b-4da3-8e09-77517dd21afd.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3097/0b1f22b9-5be8-47d1-b8e4-94f422c6affe.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3096/b301d26f-81f7-4803-a5ca-4acaf735ef7e.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3094/3e205ef6-ca6e-4165-b20f-ef61e8d5b6af.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Amul Comfy Men’s Vest | 100% Cotton Single Jersey Fabric | U Neck Sleeveless Innerwear | Ultra Soft Hand Feel | Seamless Body | Superior Comfort Color May Vary (Pack of 5) OFFER PRICE - 250/- MRP - 495/- ONLINE - 327/- OFFER PRICE - 250/-",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1448/product-details",
    "specifications": {
      "Category": "Undergarments",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "rupa-topman-premium-men-s-vest-1447",
    "canonicalId": "1447",
    "name": "RUPA TOPMAN Premium Men’s Vest",
    "brand": "Rupa",
    "category": "Undergarments",
    "price": 80,
    "referencePrice": 137,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3094/3e205ef6-ca6e-4165-b20f-ef61e8d5b6af.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3094/3e205ef6-ca6e-4165-b20f-ef61e8d5b6af.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3097/0b1f22b9-5be8-47d1-b8e4-94f422c6affe.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3096/b301d26f-81f7-4803-a5ca-4acaf735ef7e.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3095/eeea6314-9a1b-4da3-8e09-77517dd21afd.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "RUPA TOPMAN Premium Men’s Vest | 100% Cotton Fabric | U Neck Sleeveless Innerwear | Ultra Soft Hand Feel | Seamless Body | Superior Comfort Color May Vary (Pack of 2) OFFER PRICE - 80/- MRP - 180/- ONLINE - 137/- OFFER PRICE - 80/-",
    "availability": "In Stock",
    "stock": 10,
    "featured": true,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1447/product-details",
    "specifications": {
      "Category": "Undergarments",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "full-body-groomer-trimmer-set-for-men-1446",
    "canonicalId": "1446",
    "name": "Full Body Groomer Trimmer Set For Men",
    "brand": "Beardo",
    "category": "Personal Care",
    "price": 1154,
    "referencePrice": 1648,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3093/c6d4ab2e-a3c0-43db-be7a-ec3083989c19.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3093/c6d4ab2e-a3c0-43db-be7a-ec3083989c19.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Original Fresh Beardo Chrome Beast Multipurpose Full Body Groomer Trimmer Set For Men Offer price - 1154/- Only Mrp - 2499/- Online - 1648/- Offer Price - 1154/-",
    "availability": "In Stock",
    "stock": 20,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1446/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "sandwich-maker-1445",
    "canonicalId": "1445",
    "name": "Sandwich Maker",
    "brand": "Kenstar",
    "category": "Kitchen Appliances",
    "price": 599,
    "referencePrice": 789,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3092/5ff451ef-1eb4-4c61-bd68-9eefa7b13829-(1).jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3092/5ff451ef-1eb4-4c61-bd68-9eefa7b13829-(1).jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Original Fresh Kenstar Grilli 750 W Sandwich Maker Offer price - 599/- Mrp - 1495/- Online - 789/- Offer Price - 599/-",
    "availability": "In Stock",
    "stock": 15,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1445/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "original-bajaj-induction-1444",
    "canonicalId": "1444",
    "name": "Original Bajaj Induction",
    "brand": "Bajaj",
    "category": "Kitchen Appliances",
    "price": 2100,
    "referencePrice": 3399,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3091/9a15d879-be1a-4290-b030-d56154e2c6cd.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3091/9a15d879-be1a-4290-b030-d56154e2c6cd.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Original Fresh Sealed Pack Bajaj ICX 120TS 1200 W Induction Stove Offer Price - 2100/- Mrp - 4090/- Online - 3399/- Offer Price - 2100/-",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1444/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "cello-aquaria-glass-water-bottle-1443",
    "canonicalId": "1443",
    "name": "Cello Aquaria Glass Water Bottle",
    "brand": "Cello",
    "category": "Household",
    "price": 399,
    "referencePrice": 499,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3090/75113033-6564-4ac9-aa5a-9d0320ba2b9b.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3090/75113033-6564-4ac9-aa5a-9d0320ba2b9b.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "CELLO Aquaria Glass Water Bottle Set of 3 Pcs For Daily Use 1000 ml, Transparent | Durable Freezable &amp; Fridge Safe, Leakproof &amp; Leadfree Toughened Glass Water Bottle For Juices, Milk &amp; Cold Beverages Offer price - 399/- Mrp - 747/- Online - 499/- Offer Price - 399/-",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1443/product-details",
    "specifications": {
      "Category": "Household",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "original-fresh-yamasin-florida-1441",
    "canonicalId": "1441",
    "name": "Original Fresh Yamasin Florida",
    "brand": "Yamasin",
    "category": "Household",
    "price": 895,
    "referencePrice": 1280,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3088/8bffaf4f-e541-4d77-96dd-f3c4912e12af.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3088/8bffaf4f-e541-4d77-96dd-f3c4912e12af.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5003/GEYSER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4099/BOROSIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4082/USHA-IRON.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3112/df326417-156c-42e2-b0c9-f75674f292a2.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3109/8326bc5b-e24c-4e7b-94e4-ca0f950af840.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3106/3d2ac9ff-320e-49c4-a980-1432d85bf8ab.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Original Fresh Yamasin Florida 4 Pcs Latte Beer Mug With Gold Line 370 ML Offer Price - 895/- Mrp - 1690/- Online - 1280/- Offer Price - 895/-",
    "availability": "In Stock",
    "stock": 10,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1441/product-details",
    "specifications": {
      "Category": "Household",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "lifelong-dual-pressure-neck-massager-1439",
    "canonicalId": "1439",
    "name": "Lifelong Dual Pressure Neck Massager",
    "brand": "Lifelong",
    "category": "Personal Care",
    "price": 1259,
    "referencePrice": 1799,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3086/e82a1559-3020-4145-bd1c-370def1baf69.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3086/e82a1559-3020-4145-bd1c-370def1baf69.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5918/WAHL-PRO.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5916/WHAL-PROFESSIONAL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5899/TRIM-EZ.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5859/BRAUN-SERIES-9.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5830/WAX-AND-OIL.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/5826/MI.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Lifelong Manual Dual Pressure Cervical Neck Shoulder Legs Waist Muscles Pain Relief Massage Roller, Trigger Point Roller, Acupressure Points Self Massager (LLM972) Offer Price - 1259/- Mrp - 7499/- Online - 1799/- Offer Price - 1259/-",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1439/product-details",
    "specifications": {
      "Category": "Personal Care",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "original-fresh-pigeon-multi-cook-kettle-1437",
    "canonicalId": "1437",
    "name": "Original Fresh Pigeon Multi Cook Kettle",
    "brand": "Pigeon",
    "category": "Kitchen Appliances",
    "price": 699,
    "referencePrice": 1495,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3084/24e8b278-b0b3-40f6-8d91-a82c56420ead.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3084/24e8b278-b0b3-40f6-8d91-a82c56420ead.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Original Fresh Pigeon Swift Multicooker Kettle Ceramic Coated Stainless steel Offer price - 699/- Mrp - 1995/- Online - 1495/- Offer Price - 699/-",
    "availability": "Limited Stock",
    "stock": 4,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1437/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "greenchef-vesta-stainless-steel-idli-maker-1436",
    "canonicalId": "1436",
    "name": "Greenchef Vesta Stainless Steel idli maker",
    "brand": "Greenchef",
    "category": "Kitchen Appliances",
    "price": 559,
    "referencePrice": 759,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3082/50b3dbe3-ffc6-4fb5-94b1-365fabcfd6ad.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3082/50b3dbe3-ffc6-4fb5-94b1-365fabcfd6ad.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Greenchef Vesta Stainless Steel Induction Bottom Idly Maker (Idli Cooker, 4 Plates, 16 Idli) Induction &amp; Gas Compatible High Quality Stainless Steel offer price - 559/- MRP - 1699/- ONLINE - 759/- OFFER PRICE - 559/-",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1436/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "pigeon-by-stovekraft-multi-cook-kettel-1435",
    "canonicalId": "1435",
    "name": "Pigeon By Stovekraft multi cook kettel",
    "brand": "Pigeon",
    "category": "Kitchen Appliances",
    "price": 699,
    "referencePrice": 1229,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3079/6751a96b-7860-48db-9fc9-0a80b774a87c.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3079/6751a96b-7860-48db-9fc9-0a80b774a87c.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Pigeon By Stovekraft Swift Multi-Cook Kettle 1.5L, Egg Rack - Black | Double Layered | Food Grade Stainless Steel Inner Wall | Glass Lid | Auto Shut-Off, 600 Watts OFFER PRICE - 699/- MRP - 1995/- ONLINE 1229/- OFFER PRICE - 699/-",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1435/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "pigeon-stainless-steel-multi-cook-kettle-1434",
    "canonicalId": "1434",
    "name": "Pigeon Stainless Steel MULTI COOK KETTLE",
    "brand": "Pigeon",
    "category": "Kitchen Appliances",
    "price": 1140,
    "referencePrice": 1699,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3076/51064171-4488-4367-bab3-da81adf09fcf.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3076/51064171-4488-4367-bab3-da81adf09fcf.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Pigeon Stainless Steel By Stovekraft Everyday Plus Multi-Cook Kettle,1000 Watts,2.5 Litre, Used For Boil, Brew, Cook &amp; Serve All In One (Black) EASY TO USE FOR CHILDERNS FLAMELESS COOKING OFFER PRICE - 1140/- MRP - 2995/- ONLINE - 1699/- OFFER PRICE - 1140/-",
    "availability": "In Stock",
    "stock": 5,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1434/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "agaro-grand-egg-boiler-1433",
    "canonicalId": "1433",
    "name": "AGARO Grand Egg Boiler",
    "brand": "Agaro",
    "category": "Kitchen Appliances",
    "price": 629,
    "referencePrice": 1048,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3075/b801126e-52e5-424a-9726-e7594b4872e6.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3075/b801126e-52e5-424a-9726-e7594b4872e6.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "AGARO Grand Egg Boiler And Poacher, 2-in1 Boils 8 Eggs, Poach 4 Eggs, Steamed Vegetables, 3 Boiling Types, Stainless Steel Body, Transparent Lid, 500W, Silver OFFER PRICE - 629/- MRP - 2199/- ONLINE - 1048/- OFFER PRICE - 629/-",
    "availability": "Limited Stock",
    "stock": 3,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1433/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  },
  {
    "id": "glen-egg-boiler-1432",
    "canonicalId": "1432",
    "name": "Glen Egg Boiler",
    "brand": "Glen",
    "category": "Kitchen Appliances",
    "price": 419,
    "referencePrice": 844,
    "condition": "open-box",
    "image": "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3074/dd794b63-46fc-4818-96eb-83d550d89aee.jpg",
    "images": [
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/3074/dd794b63-46fc-4818-96eb-83d550d89aee.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4091/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4090/CHOPPER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4077/TOSTER.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4072/RAPID.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4068/PREETHI.jpg",
      "https://pub-5fe02c32137046739cad08f12feee100.r2.dev/product-image/4063/CELLO-BUTTERFLY.jpg"
    ],
    "imageSource": "Big Deals Catalog",
    "imageInspected": true,
    "dataInspected": true,
    "description": "Glen Egg Boiler 7 Egg, 1 Poaching Cup, Auto shut Off, 350W GREY (SA3030EB7) Offer Price - 419/- MRP - 1299/- ONLINE - 844/- OFFER PRICE - 419/-",
    "availability": "Limited Stock",
    "stock": 2,
    "featured": false,
    "dealOfTheDay": false,
    "sourceUrl": "https://store.nextapsolutions.com/whatsapp-store/big-deals/1432/product-details",
    "specifications": {
      "Category": "Kitchen Appliances",
      "Authenticity": "Genuine Retail Stock",
      "Inventory Source": "Big Deals Live Catalog",
      "Condition": "Open-Box / Inspected Stock"
    }
  }
];

export const PRODUCTS: Product[] = rawProducts.map((p) => {
  const savingsAmount = Math.max(0, p.referencePrice - p.price);
  const savingsPercentage = p.referencePrice > 0 ? Math.round((savingsAmount / p.referencePrice) * 100) : 0;

  return {
    ...p,
    savingsAmount,
    savingsPercentage,
    imageSource: 'Big Deals Catalog',
    imageInspected: true,
    dataInspected: true,
  };
});

export const FEATURED_DEALS = PRODUCTS.filter((p) => p.featured);
export const DEALS_OF_THE_DAY = PRODUCTS.filter((p) => p.dealOfTheDay);
export const TODAYS_BIG_DEALS = FEATURED_DEALS;

export function getProductsByCategory(category: Category): Product[] {
  if (category === 'All') return PRODUCTS;
  if (category === 'Special Deals') return PRODUCTS.filter((p) => p.savingsPercentage >= 40);
  return PRODUCTS.filter((p) => p.category === category);
}

export function searchProducts(query: string, category?: Category): Product[] {
  const q = query.toLowerCase().trim();
  let list = category && category !== 'All' ? getProductsByCategory(category) : PRODUCTS;
  if (!q) return list;
  return list.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.model && p.model.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q))
  );
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id || p.canonicalId === id);
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateSavings(referencePrice: number, price: number) {
  const savingsAmount = Math.max(0, referencePrice - price);
  const savingsPercentage = referencePrice > 0 ? Math.round((savingsAmount / referencePrice) * 100) : 0;
  return { savingsAmount, savingsPercentage };
}

export function calculateCartTotals(cartItems: { product: Product; quantity: number }[]) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const referenceTotal = cartItems.reduce((sum, item) => sum + item.product.referencePrice * item.quantity, 0);
  const totalSavings = Math.max(0, referenceTotal - subtotal);
  const savingsPercentage = referenceTotal > 0 ? Math.round((totalSavings / referenceTotal) * 100) : 0;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    subtotal,
    referenceTotal,
    totalSavings,
    savingsPercentage,
    itemCount,
  };
}

export function generateWhatsAppOrderMessage(
  cartItems: { product: Product; quantity: number }[],
  customerNote?: string
): string {
  const { subtotal, referenceTotal, totalSavings, savingsPercentage, itemCount } = calculateCartTotals(cartItems);

  let message = `*NEW ORDER INQUIRY - BIG DEALS STORE*\n`;
  message += `----------------------------------------\n\n`;
  message += `*Items Ordered (${itemCount}):*\n`;

  cartItems.forEach((item, idx) => {
    message += `${idx + 1}. *${item.product.name}*\n`;
    message += `   • Qty: ${item.quantity}\n`;
    message += `   • Big Deals Price: ${formatINR(item.product.price)} each\n`;
    message += `   • Reference Price: ${formatINR(item.product.referencePrice)}\n`;
    message += `   • Product ID: ${item.product.canonicalId}\n\n`;
  });

  message += `----------------------------------------\n`;
  message += `*Big Deals Total: ${formatINR(subtotal)}*\n`;
  message += `*Market Reference: ${formatINR(referenceTotal)}*\n`;
  message += `*Total Savings: ${formatINR(totalSavings)} (${savingsPercentage}% OFF)*\n`;
  message += `----------------------------------------\n\n`;

  if (customerNote && customerNote.trim()) {
    message += `*Customer Note:* ${customerNote.trim()}\n\n`;
  }

  message += `Please confirm availability, condition details, and dispatch timeline. Thank you!`;

  return message;
}

export function generateSingleProductInquiry(product: Product): string {
  let message = `Hi Big Deals,\n\n`;
  message += `I'm interested in purchasing:\n`;
  message += `*${product.name}* (ID: ${product.canonicalId})\n\n`;
  message += `• Big Deals Price: ${formatINR(product.price)}\n`;
  message += `• Reference Price: ${formatINR(product.referencePrice)}\n`;
  message += `• Inspected Savings: ${formatINR(product.savingsAmount)} (${product.savingsPercentage}% OFF)\n`;
  message += `• Category: ${product.category}\n\n`;
  message += `Please confirm product availability, condition, and payment details.\n`;
  message += `Catalog URL: ${product.sourceUrl || STORE_CATALOG_URL}`;

  return message;
}

export function getProductWhatsAppUrl(product: Product): string {
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(generateSingleProductInquiry(product))}`;
}

export function getCartWhatsAppUrl(cartItems: { product: Product; quantity: number }[], note?: string): string {
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(generateWhatsAppOrderMessage(cartItems, note))}`;
}
