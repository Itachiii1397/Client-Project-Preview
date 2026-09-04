import React from 'react';
import { Cpu, Lightbulb, GitBranch, Rocket, Quote } from 'lucide-react';

export const WhyInnityx: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'RIGHT-SIZED ENGINEERING',
      desc: 'We engineer what Big Deals actually needs to sell inventory today—omitting expensive enterprise bloat while maintaining rock-solid speed.',
      icon: Cpu,
    },
    {
      num: '02',
      title: 'PRODUCT THINKING',
      desc: 'We design around real customer decision points, clear reference savings, and friction-free WhatsApp checkouts, not just generic static web pages.',
      icon: Lightbulb,
    },
    {
      num: '03',
      title: 'SCALABLE FOUNDATION',
      desc: 'We build today’s React + Vite codebase with clean architecture so tomorrow’s payment gateways, admin portals, and CRM tools integrate smoothly.',
      icon: GitBranch,
    },
    {
      num: '04',
      title: 'GROWTH AFTER LAUNCH',
      desc: 'We treat your digital presence as an active sales engine, offering structured local discovery and campaign frameworks to drive ongoing traffic.',
      icon: Rocket,
    },
  ];

  return (
    <section id="why-innityx" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 12 · OUR PHILOSOPHY
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        WHY BUILD THIS WITH INNITYX?
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-14 leading-relaxed">
        We partner with established physical businesses to translate their tangible real-world advantages into modern, high-velocity digital sales channels.
      </p>

      {/* 4 Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-400">
                    PRINCIPLE {p.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Statement Callout Quote Card */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-indigo-950/40 border border-blue-500/30 shadow-2xl max-w-4xl mx-auto text-center">
        <Quote className="w-10 h-10 text-blue-400/30 mx-auto mb-4" />
        <blockquote className="space-y-3 text-lg sm:text-2xl font-medium text-slate-100 font-heading leading-relaxed">
          <p>
            "We don't believe every business needs a ₹5 lakh platform.
          </p>
          <p>
            We also don't believe a ₹15,000 website solves every business problem.
          </p>
          <p className="text-amber-300 font-bold">
            Our job is to identify what the business actually needs, build it at the right stage, and create a path for it to grow."
          </p>
        </blockquote>
        <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono uppercase tracking-widest text-slate-400">
          INNITYX · DIGITAL PRODUCT & GROWTH STUDIO
        </div>
      </div>
    </section>
  );
};
