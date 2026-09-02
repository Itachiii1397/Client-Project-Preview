import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PRODUCTS, formatINR } from '../data/products';
import { Category, Product } from '../types';
import { useCart } from '../context/CartContext';
import { Sparkles, ArrowRight, Eye, ShoppingBag, Layers, MoveRight, CheckCircle2 } from 'lucide-react';

interface DealRoom3DProps {
  onSelectCategory: (cat: Category) => void;
  onQuickView: (product: Product) => void;
}

const ZONES: Array<{
  id: Category;
  title: string;
  tagline: string;
  color: string;
  themeHex: number;
  highlightDiscount: string;
  position: [number, number, number];
}> = [
  {
    id: 'Kitchen Appliances',
    title: 'KITCHEN APPLIANCES',
    tagline: 'Air fryers, heavy mixers, instant kettles & cookers',
    color: 'from-amber-500 to-orange-600',
    themeHex: 0xf59e0b,
    highlightDiscount: 'UP TO 58% OFF',
    position: [-5, 0, 0],
  },
  {
    id: 'Sports',
    title: 'SPORTS & FITNESS',
    tagline: 'Yonex graphite racquets, yoga mats, gym balls & gears',
    color: 'from-sky-500 to-blue-600',
    themeHex: 0x38bdf8,
    highlightDiscount: 'UP TO 50% OFF',
    position: [-2, 0, 3],
  },
  {
    id: 'Personal Care',
    title: 'PERSONAL CARE & GROOMING',
    tagline: 'Braun, Wahl & Beardo metal precision trimmers',
    color: 'from-purple-500 to-indigo-600',
    themeHex: 0x818cf8,
    highlightDiscount: 'UP TO 54% OFF',
    position: [2, 0, 3],
  },
  {
    id: 'Household',
    title: 'HOUSEHOLD & LIVING',
    tagline: 'Havells geysers, spin mops, steam irons & cleaners',
    color: 'from-emerald-500 to-teal-600',
    themeHex: 0x10b981,
    highlightDiscount: 'UP TO 67% OFF',
    position: [5, 0, 0],
  },
  {
    id: 'Daily Essentials',
    title: 'DAILY ESSENTIALS',
    tagline: 'Smartwatches, glass water bottles, mosquito bats',
    color: 'from-yellow-400 to-amber-500',
    themeHex: 0xe5a919,
    highlightDiscount: 'UP TO 50% OFF',
    position: [3, 0, -4],
  },
  {
    id: 'Baby Care',
    title: 'BABY CARE & UNDERGARMENTS',
    tagline: 'Huggies jumbo pants & 100% pure combed cotton vests',
    color: 'from-rose-500 to-pink-600',
    themeHex: 0xf43f5e,
    highlightDiscount: 'UP TO 40% OFF',
    position: [-3, 0, -4],
  },
];

export const DealRoom3D: React.FC<DealRoom3DProps> = ({ onSelectCategory, onQuickView }) => {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const activeZone = ZONES[activeZoneIndex];
  const { addToCart } = useCart();

  // Filter products for active zone
  const zoneProducts = PRODUCTS.filter((p) => {
    if (activeZone.id === 'Baby Care') {
      return p.category === 'Baby Care' || p.category === 'Undergarments';
    }
    return p.category === activeZone.id;
  }).slice(0, 3);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050b17, 0.05);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 4, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Floor showroom grid
    const floorGrid = new THREE.GridHelper(30, 25, 0x2563eb, 0x172554);
    floorGrid.position.y = -1.5;
    scene.add(floorGrid);

    // Zone Pedestals / Towers in 3D
    const zoneMeshes: THREE.Mesh[] = [];

    ZONES.forEach((zone, idx) => {
      const group = new THREE.Group();
      const cylGeo = new THREE.CylinderGeometry(1.4, 1.6, 0.4, 24);
      const cylMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        emissive: zone.themeHex,
        emissiveIntensity: idx === activeZoneIndex ? 0.8 : 0.2,
        metalness: 0.8,
        roughness: 0.2,
      });
      const cylinder = new THREE.Mesh(cylGeo, cylMat);
      cylinder.position.y = -1.3;
      group.add(cylinder);

      // Glowing floating pillar / cube
      const cubeGeo = new THREE.BoxGeometry(1.2, 1.6, 1.2);
      const cubeMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        emissive: zone.themeHex,
        emissiveIntensity: idx === activeZoneIndex ? 0.6 : 0.15,
        wireframe: false,
      });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.y = 0.2;
      group.add(cube);

      // Edge outline
      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(cubeGeo),
        new THREE.LineBasicMaterial({ color: zone.themeHex, linewidth: 2 })
      );
      wire.position.y = 0.2;
      group.add(wire);

      group.position.set(...zone.position);
      scene.add(group);
      zoneMeshes.push(cube);
    });

    // Camera target interpolation
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Rotate zone cubes subtly
      zoneMeshes.forEach((mesh, idx) => {
        mesh.rotation.y = time * 0.4 + idx;
        if (idx === activeZoneIndex) {
          mesh.position.y = 0.2 + Math.sin(time * 2) * 0.1;
        }
      });

      // Lerp camera towards target zone
      const targetPos = ZONES[activeZoneIndex].position;
      camera.position.x += (targetPos[0] * 0.6 - camera.position.x) * 0.05;
      camera.position.z += (targetPos[2] * 0.5 + 8 - camera.position.z) * 0.05;
      camera.lookAt(targetPos[0], -0.2, targetPos[2]);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeZoneIndex]);

  return (
    <section id="deal-room" className="py-20 bg-[#050B17] relative overflow-hidden border-b border-slate-800">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E40AF]/20 via-[#050B17] to-[#050B17] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E40AF]/20 border border-[#3B82F6]/40 text-[#93C5FD] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#E5A919]" />
              <span>Digital Retail Showroom</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
              ENTER THE <span className="text-[#E5A919]">DEAL ROOM</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Navigate physical inventory aisles virtually. Select any category zone to reveal spotlight deals and direct open-box savings.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('All')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Skip 3D → Shop All Deals</span>
            <ArrowRight className="w-4 h-4 text-[#E5A919]" />
          </button>
        </div>

        {/* Zone Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {ZONES.map((zone, idx) => {
            const isActive = idx === activeZoneIndex;
            return (
              <button
                key={zone.title}
                onClick={() => setActiveZoneIndex(idx)}
                className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'bg-[#172554] text-white border-2 border-[#E5A919] shadow-lg shadow-[#1D4ED8]/30 scale-102'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#E5A919] animate-pulse' : 'bg-slate-600'}`} />
                <span>{zone.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-[#E5A919]">
                  {zone.highlightDiscount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main 3D Stage + Zone Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#081124] rounded-3xl border border-slate-800 p-4 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Left: Interactive 3D Canvas */}
          <div className="lg:col-span-7 h-72 sm:h-96 rounded-2xl bg-[#040812] border border-slate-800 relative overflow-hidden">
            <div ref={canvasContainerRef} className="w-full h-full" />

            {/* Zone HUD overlay */}
            <div className="absolute top-4 left-4 z-10 bg-[#050B17]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5A919] block">
                Active Showroom Zone
              </span>
              <span className="text-sm font-black text-white font-heading">
                {activeZone.title}
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-10 bg-[#050B17]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Live Inventory Synced</span>
            </div>
          </div>

          {/* Right: Featured Products for Active Zone */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white font-heading">
                    {activeZone.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{activeZone.tagline}</p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-[#E5A919]/20 text-[#E5A919] font-black text-xs border border-[#E5A919]/40">
                  {activeZone.highlightDiscount}
                </span>
              </div>

              {/* Product Mini Cards */}
              <div className="mt-5 space-y-3">
                {zoneProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onQuickView(p)}
                    className="p-3 rounded-xl bg-[#0D1830] hover:bg-[#132347] border border-slate-800 hover:border-[#3B82F6]/50 transition-all flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 p-1 flex items-center justify-center flex-shrink-0">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate font-heading group-hover:text-[#93C5FD]">
                          {p.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-black text-[#FFE27A] font-mono-price">
                            {formatINR(p.price)}
                          </span>
                          <span className="text-[10px] text-slate-400 line-through font-mono-price">
                            {formatINR(p.referencePrice)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[11px] font-black text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-500/30">
                        {p.savingsPercentage}% OFF
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone Action */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
              <button
                onClick={() => onSelectCategory(activeZone.id)}
                className="flex-1 py-3 px-4 rounded-xl bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#1D4ED8]/20"
              >
                <span>View All {activeZone.title} Deals</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
