export type Category = 
  | 'All'
  | 'Kitchen Appliances'
  | 'Sports'
  | 'Personal Care'
  | 'Baby Care'
  | 'Daily Essentials'
  | 'Undergarments'
  | 'Household'
  | 'Special Deals';

export type ProductCondition = 'new' | 'open-box' | 'special-inventory' | 'unknown';

export interface Product {
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
  imageInspected?: boolean;
  dataInspected?: boolean;
  description?: string;
  specifications?: Record<string, string>;
  availability?: 'In Stock' | 'Limited Stock' | 'Check Availability';
  stock?: number;
  featured?: boolean;
  dealOfTheDay?: boolean;
  sourceUrl?: string;
  savingsAmount: number;
  savingsPercentage: number;
  keyFeatures?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: Category;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  minDiscount: number;
  sortBy: 'featured' | 'savings-high' | 'price-low' | 'price-high' | 'discount-high';
}


