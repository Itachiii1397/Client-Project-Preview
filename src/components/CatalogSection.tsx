import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, formatINR } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product, Category, FilterState } from '../types';
import { Search, SlidersHorizontal, ArrowUpDown, Filter, Sparkles, X, RotateCcw } from 'lucide-react';

interface CatalogSectionProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  onQuickView: (product: Product) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickView,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [minDiscount, setMinDiscount] = useState(0);
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sortBy, setSortBy] = useState<FilterState['sortBy']>('savings-high');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (
        searchQuery.trim() &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !(product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        return false;
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // Discount filter
      if (product.savingsPercentage < minDiscount) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'savings-high') return b.savingsAmount - a.savingsAmount;
      if (sortBy === 'discount-high') return b.savingsPercentage - a.savingsPercentage;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, searchQuery, minDiscount, maxPrice, sortBy]);

  const resetFilters = () => {
    onSelectCategory('All');
    setSearchQuery('');
    setMinDiscount(0);
    setMaxPrice(6000);
    setSortBy('savings-high');
  };

  return (
    <section id="catalog" className="py-20 bg-[#050B17] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E40AF]/20 border border-[#3B82F6]/40 text-[#93C5FD] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A919]" />
            <span>Complete Inventory Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            EXPLORE THE <span className="text-[#E5A919]">DEALS</span>
          </h2>
          <p className="mt-2 text-base text-slate-300">
            Browse verified open-box & surplus inventory across all departments with instant WhatsApp ordering.
          </p>
        </div>

        {/* Search & Top Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#0A1428] p-4 rounded-2xl border border-slate-800 mb-8 shadow-lg">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search air fryers, trimmers, Yonex, kettles, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E5A919] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick sorting & Filter toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-[#E5A919]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as FilterState['sortBy'])}
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-[#E5A919]"
              >
                <option value="savings-high">Highest Savings (₹)</option>
                <option value="discount-high">Highest Discount (%)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className="md:hidden px-3 py-2 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#E5A919]" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer flex-shrink-0 ${
                  isSelected
                    ? 'bg-[#1E40AF] text-white border border-[#E5A919] shadow-lg shadow-[#1E40AF]/30'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{cat}</span>
                {cat === 'All' && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-[#E5A919]">
                    {PRODUCTS.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Controls (Collapsible on mobile, always visible on desktop) */}
        <div
          className={`${
            showFiltersMobile ? 'flex' : 'hidden md:flex'
          } flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#091224] border border-slate-800/80 mb-8 text-xs`}
        >
          {/* Min Discount filter */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-slate-400 font-bold uppercase">Min Discount:</span>
            <div className="flex gap-1.5">
              {[0, 25, 40, 50].map((pct) => (
                <button
                  key={pct}
                  onClick={() => setMinDiscount(pct)}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                    minDiscount === pct
                      ? 'bg-[#E5A919] text-[#050B17]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {pct === 0 ? 'All' : `${pct}%+`}
                </button>
              ))}
            </div>
          </div>

          {/* Max Price slider */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-slate-400 font-bold uppercase">Max Price:</span>
            <span className="font-mono-price font-bold text-[#FFE27A] min-w-[70px]">
              {formatINR(maxPrice)}
            </span>
            <input
              type="range"
              min="500"
              max="6000"
              step="250"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#E5A919] w-32"
            />
          </div>

          {/* Reset Filters button */}
          <button
            onClick={resetFilters}
            className="text-slate-400 hover:text-white flex items-center gap-1 font-semibold cursor-pointer ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <span>
            Showing <strong className="text-white">{filteredProducts.length}</strong> deals found in{' '}
            <strong className="text-[#93C5FD]">{selectedCategory}</strong>
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-[#091224] rounded-3xl border border-slate-800 p-8">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-500">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">No matching deals found</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search query, price ceiling, or discount filter to see more products.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#1E40AF] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#2563EB] transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
