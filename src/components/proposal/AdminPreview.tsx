import React, { useState } from 'react';
import { LayoutDashboard, Package, Tag, Percent, ToggleRight, Sparkles, Plus, Edit2, Search, Check, AlertCircle, ShieldAlert, SlidersHorizontal } from 'lucide-react';

export const AdminPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'deals' | 'pricing'>('products');

  // Illustrative product data using real items from existing catalog
  const sampleProducts = [
    {
      id: '3709',
      name: 'Nivia Gym Ball (75cm)',
      category: 'Sports',
      price: '₹799',
      refPrice: '₹1,599',
      discount: '50%',
      condition: 'New',
      inStock: true,
      featured: true,
    },
    {
      id: '3300',
      name: 'Yonex Mavis 350 Shuttlecocks',
      category: 'Sports',
      price: '₹899',
      refPrice: '₹1,250',
      discount: '28%',
      condition: 'New',
      inStock: true,
      featured: false,
    },
    {
      id: '2965',
      name: 'Wahl Professional Cordless Clipper',
      category: 'Personal Care',
      price: '₹2,199',
      refPrice: '₹4,495',
      discount: '51%',
      condition: 'Open-Box',
      inStock: true,
      featured: true,
    },
    {
      id: '1942',
      name: 'Borosil Stainless Steel Insulated Flask',
      category: 'Household',
      price: '₹649',
      refPrice: '₹1,190',
      discount: '45%',
      condition: 'New',
      inStock: false,
      featured: false,
    },
  ];

  return (
    <section id="admin-preview" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 08 · OPERATIONAL CONTROL
        </span>
      </div>

      {/* Main Headline & Subheadline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        THE WEBSITE ISN'T THE WHOLE PRODUCT.
      </h2>

      <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
        Someone needs to operate it. The proposed Big Deals Commerce tier includes an intuitive operational dashboard for store managers to adjust prices, toggle stock, and push deals in seconds.
      </p>

      {/* Admin Panel Concept Mockup */}
      <div className="rounded-2xl bg-[#090E1A] border-2 border-slate-800 shadow-2xl overflow-hidden">
        {/* Top OS Window Header */}
        <div className="bg-[#0D1527] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 font-semibold hidden sm:inline-block">
              Big Deals Control Portal · Administration Dashboard
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] font-mono font-bold">
            <AlertCircle className="w-3 h-3" />
            <span>ILLUSTRATIVE ADMIN INTERFACE CONCEPT</span>
          </div>
        </div>

        {/* Dashboard Shell Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[440px]">
          {/* Left Admin Navigation Sidebar */}
          <div className="lg:col-span-1 p-4 bg-[#070B14] flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase text-slate-400 px-3 py-1 font-bold">
                Management Modules
              </div>
              {[
                { id: 'products', label: 'Products Catalogue', icon: Package },
                { id: 'deals', label: 'Featured Deals', icon: Sparkles },
                { id: 'pricing', label: 'Price & Reference MRP', icon: Tag },
                { id: 'categories', label: 'Categories & Filters', icon: SlidersHorizontal },
                { id: 'leads', label: 'WhatsApp Inquiries', icon: LayoutDashboard },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (['products', 'deals', 'pricing'].includes(item.id)) {
                        setActiveTab(item.id as any);
                      }
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] text-slate-400 space-y-1 mt-4">
              <div className="font-bold text-slate-300">Staff Access Security</div>
              <div>Role: Store Manager</div>
              <div className="text-emerald-400">● 2FA Enabled</div>
            </div>
          </div>

          {/* Right Main Admin Area */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-[#0A101D] flex flex-col justify-between">
            <div>
              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    Inventory & Pricing Controls
                  </h4>
                  <p className="text-xs text-slate-400">
                    Update prices, toggle in-stock status, and manage reference savings in real-time.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add New Deal</span>
                  </button>
                </div>
              </div>

              {/* Mock Inventory Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0D1527] text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3">Product Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Deal Price</th>
                      <th className="p-3">Ref. MRP</th>
                      <th className="p-3">Condition</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono">
                    {sampleProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-white/[0.02]">
                        <td className="p-3 font-sans font-medium text-slate-200">
                          <div>{p.name}</div>
                          <span className="text-[10px] font-mono text-slate-400">ID: {p.id}</span>
                        </td>
                        <td className="p-3 text-slate-400">{p.category}</td>
                        <td className="p-3 font-bold text-amber-400">{p.price}</td>
                        <td className="p-3 text-slate-400 line-through">{p.refPrice}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              p.condition === 'New'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            }`}
                          >
                            {p.condition}
                          </span>
                        </td>
                        <td className="p-3">
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] ${
                              p.inStock ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                p.inStock ? 'bg-emerald-400' : 'bg-rose-400'
                              }`}
                            />
                            {p.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td className="p-3 text-right font-sans">
                          <button className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Admin Note */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>* Demonstrating dynamic schema design: Zero code changes required for daily inventory updates.</span>
              <span className="text-blue-400">Included in Big Deals Commerce Scope</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
