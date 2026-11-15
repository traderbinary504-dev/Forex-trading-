import React, { useState } from 'react';
import { CourseModule } from '../types/ebook';
import { ArrowRight, BookOpen, Printer } from 'lucide-react';
import ebookCoverImg from '../assets/images/ebook_cover_1794763286076.jpg';

interface CoverAndTOCProps {
  modules: CourseModule[];
  onSelectModule: (moduleId: string) => void;
  onPrintFullBook: () => void;
  isPrintView?: boolean;
}

export const CoverAndTOC: React.FC<CoverAndTOCProps> = ({
  modules,
  onSelectModule,
  onPrintFullBook,
  isPrintView = false,
}) => {
  const [coverError, setCoverError] = useState(false);

  return (
    <div className={isPrintView ? '' : 'mx-auto max-w-6xl px-4 py-8 sm:px-8 lg:py-12'}>
      {/* Luxury Cover Spread */}
      <section
        className={`${
          isPrintView
            ? 'print-cover-page'
            : 'relative overflow-hidden rounded-xl border border-stone-200 bg-[#0B0F14] text-[#F5F2EB] dark:border-slate-800'
        }`}
      >
        <div
          className={`grid items-stretch ${
            isPrintView ? 'grid-cols-1 gap-8' : 'lg:grid-cols-[1.15fr_0.85fr]'
          }`}
        >
          {/* Left Editorial Title Column */}
          <div className="relative z-10 flex flex-col justify-between p-8 sm:p-12 lg:p-14">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-400">
                Institutional Monograph · Roman Urdu Edition
              </p>

              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-[#FBF9F5] text-balance sm:text-5xl lg:text-[3.4rem]">
                Institutional Forex Mastery
              </h1>

              <p className="mt-4 font-display text-xl italic text-amber-200/90 sm:text-2xl">
                Advanced Roman Urdu Edition
              </p>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Interbank Price Delivery (IPDA), Liquidity Engineering, Pakistan Standard Time (PKT) Killzones, Macro Intermarket Flow, Prop Firm Quantitative Risk aur Data Journaling par mabni mukammal institutional desk guide.
              </p>
            </div>

            <div className="mt-10 border-t border-slate-800/90 pt-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                <span className="font-mono text-amber-300">07 Modules</span>
                <span aria-hidden="true">·</span>
                <span>07 Custom Technical Charts</span>
                <span aria-hidden="true">·</span>
                <span>02 Macro Infographics</span>
                <span aria-hidden="true">·</span>
                <span>PKT Winter &amp; Summer Schedule</span>
              </div>

              {!isPrintView && (
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectModule(modules[0].id)}
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 whitespace-nowrap shrink-0"
                  >
                    <BookOpen className="h-4 w-4" />
                    Start Module 01
                  </button>
                  <button
                    type="button"
                    onClick={onPrintFullBook}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-amber-500/60 hover:text-amber-300 whitespace-nowrap shrink-0"
                  >
                    <Printer className="h-4 w-4" />
                    Print / Save Full eBook PDF
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Cover Artwork Column */}
          <div
            className={`relative min-h-[340px] bg-[#0B0F14] ${
              isPrintView ? 'mx-auto w-full max-w-md overflow-hidden rounded-lg border border-slate-700' : 'lg:min-h-[540px]'
            }`}
          >
            {!coverError ? (
              <img
                src={ebookCoverImg}
                alt="Institutional Forex Mastery Luxury Dark Gold and Emerald Cover Artwork"
                referrerPolicy="no-referrer"
                onError={() => setCoverError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#0B0F14] to-emerald-950/60 p-8 text-center">
                <span className="font-display text-3xl font-semibold text-amber-400">IFM</span>
                <span className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                  Institutional Forex Desk
                </span>
              </div>
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-transparent to-transparent lg:block hidden"
            />
          </div>
        </div>
      </section>

      {/* Editorial Table of Contents */}
      <section
        className={`${
          isPrintView
            ? 'print-page-break py-8'
            : 'mt-12 rounded-xl border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-[#11161D] sm:p-10'
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-stone-200 pb-5 dark:border-slate-800 print:border-slate-300">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400 print:text-amber-800">
              Curriculum Index
            </p>
            <h2 className="mt-1.5 font-display text-2xl font-semibold text-stone-900 dark:text-slate-100 print:text-slate-900 sm:text-3xl">
              Table of Contents
            </h2>
          </div>
          <p className="text-xs text-stone-500 dark:text-slate-400 print:text-slate-600">
            Zero Beginner Fluff · Institutional Order Flow Curriculum
          </p>
        </div>

        <div className="divide-y divide-stone-200 dark:divide-slate-800 print:divide-slate-200">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-5">
                <span className="font-mono text-sm font-semibold text-amber-700 dark:text-amber-400 print:text-amber-800 tabular-nums pt-0.5">
                  {mod.number}
                </span>
                <div>
                  {isPrintView ? (
                    <h3 className="font-display text-lg font-semibold text-slate-900">
                      {mod.title}
                    </h3>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelectModule(mod.id)}
                      className="text-left font-display text-lg font-semibold text-stone-900 transition-colors hover:text-amber-700 dark:text-slate-100 dark:hover:text-amber-400"
                    >
                      {mod.title}
                    </button>
                  )}
                  <p className="mt-1 max-w-2xl text-xs leading-relaxed text-stone-600 dark:text-slate-400 print:text-slate-700">
                    {mod.subtitle}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-slate-500 print:text-slate-600">
                    <span>{mod.readingTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{mod.focusTags.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {!isPrintView && (
                <button
                  type="button"
                  onClick={() => onSelectModule(mod.id)}
                  className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-stone-700 transition-colors hover:text-amber-700 dark:text-slate-300 dark:hover:text-amber-400 sm:self-center whitespace-nowrap shrink-0"
                >
                  Read Module
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
