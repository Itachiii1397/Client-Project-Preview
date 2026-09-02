import React from 'react';
import { ROADMAP_STAGES } from '../../data/proposalData';
import { ArrowRight, CheckCircle2, Flag } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
          SECTION 14 · LONG-TERM ROADMAP
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4 max-w-3xl">
        FROM WEBSITE TO DIGITAL COMMERCE.
      </h2>

      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mb-14 leading-relaxed">
        A clear 5-stage evolutionary roadmap outlining the transition from baseline discovery to full-scale digital commerce operations.
      </p>

      {/* 5 Sequential Stages */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
        {ROADMAP_STAGES.map((st, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-amber-400">
                  STAGE {st.number}
                </span>
                {idx === 0 && (
                  <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    DAY 01 FOCUS
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-extrabold text-white font-heading tracking-wide mb-1">
                {st.name}
              </h3>
              <div className="text-[11px] font-mono text-slate-400 mb-3">
                {st.focus}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {st.description}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-white/5">
                {st.items.map((it, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Quote Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1528] to-slate-900 border border-blue-500/30 text-center max-w-4xl mx-auto shadow-xl">
        <p className="text-xl sm:text-2xl font-bold text-white font-heading leading-relaxed">
          "You don't need Stage 05 today.
        </p>
        <p className="text-xl sm:text-2xl font-extrabold text-amber-300 font-heading mt-1">
          You need Stage 01 built correctly enough that Stage 05 remains possible."
        </p>
      </div>
    </section>
  );
};
