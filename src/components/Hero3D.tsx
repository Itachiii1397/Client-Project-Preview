import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Tag, Percent, ArrowDown } from 'lucide-react';
import { DISPLAY_WHATSAPP, PRIMARY_WHATSAPP_NUMBER } from '../data/products';

interface Hero3DProps {
  onExploreClick: () => void;
  onDealRoomClick: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onExploreClick, onDealRoomClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [is3DActive, setIs3DActive] = useState(true);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Check if mobile or low capability device
    const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 1;
    if (isMobile) {
      setIsLowPower(true);
    }

    const container = containerRef.current;
    if (!container || !is3DActive) return;

    // Set up Three.js Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050b17, 0.045);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for objects
    const showroomGroup = new THREE.Group();
    scene.add(showroomGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1e3a8a, 1.2);
    scene.add(ambientLight);

    const mainSpotLight = new THREE.SpotLight(0xe5a919, 4, 30, Math.PI / 4, 0.4, 1);
    mainSpotLight.position.set(5, 8, 8);
    scene.add(mainSpotLight);

    const blueRimLight = new THREE.PointLight(0x2563eb, 3, 25);
    blueRimLight.position.set(-6, -4, 4);
    scene.add(blueRimLight);

    const cyanAccentLight = new THREE.PointLight(0x38bdf8, 2, 20);
    cyanAccentLight.position.set(0, 5, -3);
    scene.add(cyanAccentLight);

    // Grid floor / Showroom pedestal
    const gridHelper = new THREE.GridHelper(40, 30, 0x1e40af, 0x0f172a);
    gridHelper.position.y = -4;
    gridHelper.material.opacity = 0.35;
    gridHelper.material.transparent = true;
    showroomGroup.add(gridHelper);

    // Floating Product Boxes & Deal Vault Modules
    const boxCount = isMobile ? 7 : 14;
    const boxMeshes: THREE.Mesh[] = [];
    const boxRotSpeeds: { x: number; y: number; z: number } = { x: 0.003, y: 0.005, z: 0.002 };

    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.85,
        roughness: 0.2,
        emissive: 0x1e3a8a,
        emissiveIntensity: 0.25,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.9,
        roughness: 0.3,
        emissive: 0xca8a04,
        emissiveIntensity: 0.15,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x172554,
        metalness: 0.7,
        roughness: 0.4,
        emissive: 0x2563eb,
        emissiveIntensity: 0.3,
      }),
    ];

    // Helper to create price tag texture canvas
    const createTagTexture = (text: string, discount: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#0B1528';
      ctx.roundRect(4, 4, 248, 120, 16);
      ctx.fill();
      ctx.strokeStyle = '#E5A919';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.fillStyle = '#E5A919';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(discount, 20, 50);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText(text, 20, 95);

      return new THREE.CanvasTexture(canvas);
    };

    const discounts = ['UP TO 70% OFF', '₹1,619 SAVED', 'OPEN-BOX PRICE', '55% OFF', 'SURPLUS DEAL', 'TOP BRAND'];
    const titles = ['AIR FRYERS', 'PREETHI ZODIAC', 'BRAUN TRIMMER', 'YONEX ASTROX', 'SMARTWATCH', 'CELLO MIXER'];

    for (let i = 0; i < boxCount; i++) {
      const width = 1.2 + Math.random() * 0.8;
      const height = 1.4 + Math.random() * 0.9;
      const depth = 1.2 + Math.random() * 0.8;
      const boxGeo = new THREE.BoxGeometry(width, height, depth);
      const mat = materials[i % materials.length].clone();

      const mesh = new THREE.Mesh(boxGeo, mat);

      // Positioning scattered around vault
      const angle = (i / boxCount) * Math.PI * 2;
      const radius = 3.5 + Math.random() * 3.8;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = (Math.random() - 0.5) * 5;
      mesh.position.z = Math.sin(angle) * radius - 2;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      // Add a floating glowing tag sprite
      const tagTex = createTagTexture(titles[i % titles.length], discounts[i % discounts.length]);
      const spriteMat = new THREE.SpriteMaterial({ map: tagTex, transparent: true, opacity: 0.95 });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(1.8, 0.9, 1);
      sprite.position.set(0, height / 2 + 0.6, 0);
      mesh.add(sprite);

      // Edge lines for premium geometric tech feel
      const edges = new THREE.EdgesGeometry(boxGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xe5a919 : 0x38bdf8,
        transparent: true,
        opacity: 0.6,
      });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      mesh.add(wireframe);

      showroomGroup.add(mesh);
      boxMeshes.push(mesh);
    }

    // Floating Dust / Energy Particles
    const particleCount = isMobile ? 80 : 220;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 22;
      posArray[i + 1] = (Math.random() - 0.5) * 16;
      posArray[i + 2] = (Math.random() - 0.5) * 20;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 1.5;
      mouseY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation to mouse
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      showroomGroup.rotation.y = elapsedTime * 0.05 + targetX * 0.3;
      showroomGroup.rotation.x = targetY * 0.15;

      // Animate individual boxes
      boxMeshes.forEach((box, idx) => {
        box.rotation.x += boxRotSpeeds.x * ((idx % 2) + 1);
        box.rotation.y += boxRotSpeeds.y * ((idx % 3) + 1);
        box.position.y += Math.sin(elapsedTime * 1.2 + idx) * 0.003;
      });

      // Subtle particle swirl
      particleSystem.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [is3DActive]);

  const whatsappHeroUrl = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi Big Deals, I visited your website and would like to explore your latest branded inventory and open-box deals!'
  )}`;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050B17] pt-20 pb-16">
      {/* 3D Canvas Background */}
      {is3DActive ? (
        <div
          ref={containerRef}
          className="absolute inset-0 z-0 pointer-events-none opacity-85"
          style={{ cursor: 'grab' }}
        />
      ) : (
        /* Lightweight Fallback Background */
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#172554]/40 via-[#050B17]/90 to-[#050B17] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af10_1px,transparent_1px),linear-gradient(to_bottom,#1e40af10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
      )}

      {/* Atmospheric Vignette & Top/Bottom Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050B17] via-transparent to-[#050B17]/80 z-0" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#050B17_95%)] z-0" />

      {/* 3D Toggle / Performance Pill */}
      <div className="absolute top-24 right-4 sm:right-8 z-20 flex items-center gap-2">
        <button
          onClick={() => setIs3DActive(!is3DActive)}
          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-slate-300 hover:text-white hover:border-[#E5A919]/50 transition-all flex items-center gap-1.5 shadow-lg"
          title={is3DActive ? 'Switch to Lightweight 2D Mode' : 'Enable 3D Showroom Canvas'}
        >
          <span className={`w-2 h-2 rounded-full ${is3DActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
          {is3DActive ? '3D SHOWROOM ON' : 'SKIP 3D → SHOP DEALS'}
        </button>
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Deal Radar / Live Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172554]/80 border border-[#3B82F6]/40 backdrop-blur-md mb-6 shadow-lg shadow-[#1D4ED8]/10 animate-float">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5A919] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5A919]"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
            Open-Box & Surplus Stock <span className="text-[#E5A919]">| Aggressively Discounted</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-heading tracking-tight leading-[1.08] max-w-4xl">
          BRANDED PRODUCTS. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#FFE27A]">
            OPEN-BOX PRICES.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
          Discover genuine branded products across kitchen, sports, personal care, and home essentials at prices designed to beat ordinary retail markups.
        </p>

        {/* Value Pitch & Questions */}
        <div className="mt-3 text-sm sm:text-base font-semibold text-[#93C5FD] flex items-center justify-center gap-3">
          <span>Why pay online-market prices?</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
          <span className="text-white font-bold">Find branded products. Pay less.</span>
        </div>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onExploreClick}
            id="hero-explore-deals-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-[#050B17] font-black text-base uppercase tracking-wider shadow-xl shadow-[#E5A919]/25 hover:shadow-[#E5A919]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Today&apos;s Deals</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: WhatsApp */}
          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-chat-btn"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#172554]/90 hover:bg-[#1E3A8A] text-white border border-[#3B82F6]/50 font-bold text-base tracking-wide backdrop-blur-md shadow-lg hover:border-[#E5A919]/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* 3D Deal Room Shortcut */}
          <button
            onClick={onDealRoomClick}
            className="w-full sm:w-auto px-5 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60 font-semibold text-sm tracking-wide backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#E5A919]" />
            <span>Enter Deal Room</span>
          </button>
        </div>

        {/* 5 Core Trust Pillars */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-left">
          <div className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
            <Tag className="w-4 h-4 text-[#E5A919] flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-200">Branded Products</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
            <Percent className="w-4 h-4 text-[#E5A919] flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-200">Open-Box & Surplus</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
            <Sparkles className="w-4 h-4 text-[#E5A919] flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-200">Below Online MRP</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
            <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-200">WhatsApp Ordering</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-200">Quality Checked</span>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-8 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={onExploreClick}>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Scroll to Explore</span>
          <ArrowDown className="w-4 h-4 text-[#E5A919] animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
};
