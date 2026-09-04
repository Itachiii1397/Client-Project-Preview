import React, { useState } from 'react';
import { Package, Tag, Percent, ToggleRight, Sparkles, Plus, Edit2, Search, Check, AlertCircle, SlidersHorizontal, BarChart3, Clock, Eye, ShoppingCart, MessageSquare, ArrowUpRight } from 'lucide-react';

export const AdminPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'categories' | 'pricing' | 'availability' | 'featured' | 'dealoftheday' | 'analytics'>('products');

  // Illustrative product data from existing catalog
  const [productsList, setProductsList] = useState([
    {
      id: '3709',
      name: 'Nivia Gym Ball (75cm)',
      category: 'Sports',
      price: '₹799',
      refPrice: '₹1,599',
      savings: '50%',
      condition: 'Surplus Stock',
      inStock: true,
      featured: true,
      dealOfDay: false,
    },
    {
      id: '3300',
      name: 'Yonex Mavis 350 Shuttlecocks',
      category: 'Sports',
      price: '₹899',
      refPrice: '₹1,250',
      savings: '28%',
      condition: 'Surplus Stock',
      inStock: true,
      featured: false,
      dealOfDay: true,
    },
    {
      id: '2965',
      name: 'Wahl Professional Cordless Clipper',
      category: 'Personal Care',
      price: '₹2,199',
      refPrice: '₹4,495',
      savings: '51%',
      condition: 'Open-Box Item',
      inStock: true,
      featured: true,
      dealOfDay: false,
    },
    {
      id: '1942',
      name: 'Borosil Stainless Steel Flask',
      category: 'Household',
      price: '₹649',
      refPrice: '₹1,190',
      savings: '45%',
      condition: 'Surplus Stock',
      inStock: false,
      featured: false,
      dealOfDay: false,
    },
  ]);

  const categories = [
    { name: 'Kitchen Appliances', count: 18, active: true },
    { name: 'Sports & Fitness', count: 16, active: true },
    { name: 'Personal Care & Grooming', count: 14, active: true },
    { name: 'Household Goods', count: 16, active: true },
  ];

  const toggleStock = (id: string) => {
    setProductsList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, inStock: !item.inStock } : item))
    );
  };

  const toggleFeatured = (id: string) => {
    setProductsList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, featured: !item.featured } : item))
    );
  };

  return (
    <section id="commerce-operations-demo" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 07 · COMMERCE + OPERATIONS DEMO (OPTION 03 · ₹89,900)
        </span>
      </div>

      {/* Main Headline & Subheadline */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold mb-3">
          <span>ILLUSTRATIVE OPERATIONS VIEW</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
          Store Operations & Management Interface.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-3xl leading-relaxed">
          The website provides the customer-facing storefront. The administrative panel gives Big Deals staff immediate control over prices, stock availability, and daily deal promotions.
        </p>
      </div>

      {/* Administrative View Interactive Mockup Shell */}
      <div className="rounded-3xl bg-[#090E1A] border-2 border-slate-800 shadow-2xl overflow-hidden">
        {/* Top OS Window Header */}
        <div className="bg-[#0D1527] px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-300 font-semibold">
              Big Deals Operations Hub · Administration Panel
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-mono font-extrabold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>ILLUSTRATIVE OPERATIONS VIEW</span>
          </div>
        </div>

        {/* Dashboard Shell Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[480px]">
          {/* Left Admin Navigation Sidebar */}
          <div className="lg:col-span-1 p-4 bg-[#070B14] flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase text-slate-400 px-3 py-2 font-bold tracking-wider">
                Operations Modules
              </div>
              {[
                { id: 'products', label: 'Products', icon: Package },
                { id: 'categories', label: 'Categories', icon: SlidersHorizontal },
                { id: 'pricing', label: 'Pricing & MRP', icon: Tag },
                { id: 'availability', label: 'Availability', icon: ToggleRight },
                { id: 'featured', label: 'Featured Deals', icon: Sparkles },
                { id: 'dealoftheday', label: 'Deal of the Day', icon: Clock },
                { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-400 mt-4">
              <span className="text-amber-400 font-bold block mb-1">Option 03 Capability</span>
              Staff can edit, toggle, or feature deals in real time from mobile or desktop.
            </div>
          </div>

          {/* Right Main Content Area */}
          <div className="lg:col-span-4 p-5 sm:p-7 bg-[#0A101F]/60 flex flex-col justify-between">
            <div>
              {/* Tab Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-800 gap-3">
                <div>
                  <h4 className="text-lg font-bold text-white font-heading capitalize flex items-center gap-2">
                    <span>{activeTab === 'dealoftheday' ? 'Deal of the Day Controls' : `${activeTab} Management`}</span>
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {activeTab === 'products' && '64 Active inventory items loaded. Live search and status.'}
                    {activeTab === 'categories' && 'Department taxonomy, navigation order, and category banners.'}
                    {activeTab === 'pricing' && 'Manage selling price, reference market MRP, and savings calculations.'}
                    {activeTab === 'availability' && 'Real-time stock availability toggles across the customer storefront.'}
                    {activeTab === 'featured' && 'Pin highlight products to the homepage featured collection.'}
                    {activeTab === 'dealoftheday' && 'Configure today’s exclusive spotlight deal with automated savings.'}
                    {activeTab === 'analytics' && 'Customer engagement telemetry, top searches, and WhatsApp checkout clicks.'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-slate-700 text-slate-300">
                    Live Demo Interactive
                  </span>
                </div>
              </div>

              {/* Dynamic View by Selected Tab */}
              {(activeTab === 'products' || activeTab === 'pricing' || activeTab === 'availability' || activeTab === 'featured') && (
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900 text-slate-400 font-mono">
                        <th className="p-3">Product Name</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Our Price</th>
                        <th className="p-3">Ref MRP</th>
                        <th className="p-3">Savings</th>
                        <th className="p-3 text-center">In Stock</th>
                        <th className="p-3 text-center">Featured</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-300 font-mono">
                      {productsList.map((p) => (
                        <tr key={p.id} className="hover:bg-white/[0.02]">
                          <td className="p-3">
                            <div className="font-bold text-white font-sans">{p.name}</div>
                            <span className="text-[10px] text-slate-500 font-mono">ID: BD-{p.id} · {p.condition}</span>
                          </td>
                          <td className="p-3 text-slate-400">{p.category}</td>
                          <td className="p-3 font-bold text-emerald-400">{p.price}</td>
                          <td className="p-3 text-slate-500 line-through">{p.refPrice}</td>
                          <td className="p-3 font-bold text-amber-400">{p.savings} OFF</td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => toggleStock(p.id)}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                                p.inStock
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
                              }`}
                            >
                              {p.inStock ? 'In Stock' : 'Sold Out'}
                            </button>
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => toggleFeatured(p.id)}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                                p.featured
                                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                                  : 'bg-slate-800 text-slate-500'
                              }`}
                            >
                              {p.featured ? '★ Featured' : 'Standard'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Categories Tab */}
              {activeTab === 'categories' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categories.map((c, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm text-white font-heading">{c.name}</div>
                        <span className="text-xs text-slate-400 font-mono">{c.count} active catalogue items</span>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Deal of the Day Tab */}
              {activeTab === 'dealoftheday' && (
                <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase text-amber-400 font-bold">Active Spotlight Deal</span>
                      <h5 className="text-lg font-bold text-white font-heading mt-0.5">
                        Yonex Mavis 350 Shuttlecocks (Pack of 6)
                      </h5>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold font-mono text-xs">
                      Live on Homepage
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Deal Price</span>
                      <span className="text-base font-bold text-emerald-400">₹899</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Reference MRP</span>
                      <span className="text-base font-bold text-slate-400 line-through">₹1,250</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Customer Savings</span>
                      <span className="text-base font-bold text-amber-400">₹351 (28% OFF)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Analytics Tab */}
              {activeTab === 'analytics' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400">Total Visits</span>
                      <div className="text-xl font-bold text-white mt-1">1,480</div>
                      <span className="text-[10px] text-emerald-400">Store Discovery</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400">Product Views</span>
                      <div className="text-xl font-bold text-white mt-1">4,920</div>
                      <span className="text-[10px] text-blue-400">Catalogue Depth</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400">WhatsApp Clicks</span>
                      <div className="text-xl font-bold text-emerald-400 mt-1">214</div>
                      <span className="text-[10px] text-slate-400">Direct Inquiries</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400">Top Category</span>
                      <div className="text-base font-bold text-amber-400 mt-1 truncate">Appliances</div>
                      <span className="text-[10px] text-slate-400">42% Interest</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-300">
                    <span className="text-slate-400 block mb-1">Top Searched Keywords:</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">"air fryer"</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">"badminton racket"</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">"preethi zodiac"</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">"trimmer"</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Note Clarifying Illustrative Concept */}
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>* Illustrative administration interface concept designed for Option 03 (₹89,900). Not currently wired to production data.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
