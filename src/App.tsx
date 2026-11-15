import React, { useEffect, useMemo, useState } from 'react';
import { ALL_MODULES } from './data/modules';
import { CoverAndTOC } from './components/CoverAndTOC';
import { ModuleRenderer } from './components/ModuleRenderer';
import {
  BookOpen,
  List,
  Moon,
  Printer,
  Sun,
  X,
} from 'lucide-react';

type ViewMode = 'cover' | 'reader' | 'fullbook';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('cover');
  const [activeModuleId, setActiveModuleId] = useState<string>(ALL_MODULES[0].id);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [fontSizeScale, setFontSizeScale] = useState<'standard' | 'large'>('standard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode, activeModuleId]);

  const activeIndex = useMemo(
    () => ALL_MODULES.findIndex((m) => m.id === activeModuleId),
    [activeModuleId]
  );

  const activeModule = ALL_MODULES[activeIndex] ?? ALL_MODULES[0];
  const prevModule = activeIndex > 0 ? ALL_MODULES[activeIndex - 1] : undefined;
  const nextModule =
    activeIndex >= 0 && activeIndex < ALL_MODULES.length - 1
      ? ALL_MODULES[activeIndex + 1]
      : undefined;

  const openModule = (moduleId: string) => {
    setActiveModuleId(moduleId);
    setViewMode('reader');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSopChecklist = () => {
    setActiveModuleId('module-7');
    setViewMode('reader');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById('mod7-sop');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  const handlePrintFullBook = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] transition-colors duration-200 dark:bg-[#0B0F14] dark:text-[#E7E5E4]">
      {/* SCREEN APPLICATION CHROME (Hidden during @media print) */}
      <div className="no-print">
        {/* Strict 3-Zone Top Bar */}
        <header className="sticky top-0 z-40 border-b border-stone-200 bg-[#FBF9F5]/95 backdrop-blur-sm dark:border-slate-800/90 dark:bg-[#0B0F14]/95">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-8">
            {/* Zone 1: Single-element Wordmark */}
            <button
              type="button"
              onClick={() => {
                setViewMode('cover');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-display text-lg font-semibold tracking-tight text-stone-900 transition-colors hover:text-amber-700 dark:text-amber-100 dark:hover:text-amber-300 whitespace-nowrap shrink-0"
            >
              Institutional Forex Mastery
            </button>

            {/* Zone 2: Concise Single-Line Navigation Links */}
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-7 text-sm font-medium text-stone-600 dark:text-slate-300 md:flex"
            >
              <button
                type="button"
                onClick={() => {
                  setViewMode('cover');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 dark:hover:text-amber-300 ${
                  viewMode === 'cover'
                    ? 'text-amber-700 underline underline-offset-8 dark:text-amber-400'
                    : ''
                }`}
              >
                Cover
              </button>
              <button
                type="button"
                onClick={() => openModule(activeModule.id)}
                className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 dark:hover:text-amber-300 ${
                  viewMode === 'reader'
                    ? 'text-amber-700 underline underline-offset-8 dark:text-amber-400'
                    : ''
                }`}
              >
                Modules
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewMode('fullbook');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 dark:hover:text-amber-300 ${
                  viewMode === 'fullbook'
                    ? 'text-amber-700 underline underline-offset-8 dark:text-amber-400'
                    : ''
                }`}
              >
                Full Book
              </button>
              <button
                type="button"
                onClick={openSopChecklist}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-stone-900 dark:hover:text-amber-300"
              >
                SOP Checklist
              </button>
            </nav>

            {/* Zone 3: Single Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrintFullBook}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-500 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400 whitespace-nowrap shrink-0"
              >
                <Printer className="h-3.5 w-3.5" />
                Save Full PDF
              </button>
            </div>
          </div>

          {/* Reading Depth Progress Hairline */}
          <div className="h-[2px] w-full bg-stone-200 dark:bg-slate-900">
            <div
              className="h-full bg-amber-600 transition-[width] duration-150 dark:bg-amber-400"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </header>

        {/* Secondary Reader Workspace Control Bar (Below Header) */}
        <div className="border-b border-stone-200 bg-stone-100/70 dark:border-slate-800/80 dark:bg-[#11161D]/80">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden whitespace-nowrap shrink-0"
              >
                <List className="h-3.5 w-3.5" />
                Chapters
              </button>

              <span className="text-xs text-stone-600 dark:text-slate-400">
                {viewMode === 'cover' && 'Cover & Table of Contents'}
                {viewMode === 'reader' && (
                  <>
                    <span className="font-mono font-semibold text-amber-700 dark:text-amber-400">
                      Module {activeModule.number}
                    </span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span className="hidden sm:inline">{activeModule.title}</span>
                  </>
                )}
                {viewMode === 'fullbook' && 'Full eBook Continuous Edition (Modules 01–07)'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* View Switcher */}
              <div className="flex items-center rounded-md border border-stone-300 bg-white p-0.5 dark:border-slate-700 dark:bg-slate-900">
                <button
                  type="button"
                  onClick={() => setViewMode('reader')}
                  className={`rounded px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    viewMode === 'reader'
                      ? 'bg-stone-900 text-white dark:bg-amber-500 dark:text-slate-950'
                      : 'text-stone-600 hover:text-stone-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  Chapter View
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('fullbook')}
                  className={`rounded px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    viewMode === 'fullbook'
                      ? 'bg-stone-900 text-white dark:bg-amber-500 dark:text-slate-950'
                      : 'text-stone-600 hover:text-stone-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  Full Book
                </button>
              </div>

              {/* Font Comfort Toggle */}
              <button
                type="button"
                onClick={() =>
                  setFontSizeScale((prev) => (prev === 'standard' ? 'large' : 'standard'))
                }
                aria-label="Toggle reading font size"
                className="rounded-md border border-stone-300 bg-white px-2.5 py-1 text-xs font-mono font-medium text-stone-700 transition-colors hover:bg-stone-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 whitespace-nowrap shrink-0"
              >
                {fontSizeScale === 'standard' ? 'Text: Standard' : 'Text: Large'}
              </button>

              {/* Light / Dark Theme Switch */}
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                aria-label={isDark ? 'Switch to Light Paper Mode' : 'Switch to Dark Luxury Mode'}
                className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-2.5 py-1 text-xs font-medium text-stone-700 transition-colors hover:bg-stone-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 whitespace-nowrap shrink-0"
              >
                {isDark ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Light Paper</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-slate-700" />
                    <span className="hidden sm:inline">Dark Luxury</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Chapter Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div
              className="fixed inset-0 bg-black/60"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <aside className="relative z-10 flex h-full w-80 max-w-[85vw] flex-col border-r border-stone-200 bg-[#FBF9F5] p-5 dark:border-slate-800 dark:bg-[#0B0F14]">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 dark:border-slate-800">
                <span className="font-display text-base font-semibold">Curriculum Index</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close chapters menu"
                  className="rounded p-1 text-stone-600 hover:bg-stone-200 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="mt-4 flex-1 space-y-1 overflow-y-auto">
                <button
                  type="button"
                  onClick={() => {
                    setViewMode('cover');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-xs font-medium ${
                    viewMode === 'cover'
                      ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
                      : 'text-stone-700 hover:bg-stone-200/60 dark:text-slate-300 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Cover &amp; Table of Contents
                </button>
                {ALL_MODULES.map((mod) => {
                  const isActive = viewMode === 'reader' && activeModule.id === mod.id;
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => openModule(mod.id)}
                      className={`flex w-full items-start gap-2.5 rounded-md px-3 py-2.5 text-left text-xs transition-colors ${
                        isActive
                          ? 'bg-amber-500/15 font-semibold text-amber-800 dark:text-amber-300'
                          : 'text-stone-700 hover:bg-stone-200/60 dark:text-slate-300 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="font-mono text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                        {mod.number}
                      </span>
                      <span className="leading-snug">{mod.title}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Main Screen Content */}
        <main>
          {viewMode === 'cover' && (
            <CoverAndTOC
              modules={ALL_MODULES}
              onSelectModule={openModule}
              onPrintFullBook={handlePrintFullBook}
            />
          )}

          {viewMode === 'reader' && (
            <div className="mx-auto flex max-w-7xl">
              {/* Desktop Persistent Left Chapter Index */}
              <aside className="hidden w-72 shrink-0 border-r border-stone-200 px-5 py-8 dark:border-slate-800/80 lg:block">
                <div className="sticky top-24">
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-slate-400">
                    Chapters
                  </p>
                  <nav aria-label="Chapter index" className="mt-4 space-y-1">
                    <button
                      type="button"
                      onClick={() => {
                        setViewMode('cover');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-xs font-medium text-stone-600 transition-colors hover:bg-stone-200/60 hover:text-stone-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Cover &amp; Index
                    </button>
                    {ALL_MODULES.map((mod) => {
                      const isActive = mod.id === activeModule.id;
                      return (
                        <button
                          key={mod.id}
                          type="button"
                          onClick={() => openModule(mod.id)}
                          className={`flex w-full items-start gap-2.5 rounded-md px-3 py-2.5 text-left text-xs transition-colors ${
                            isActive
                              ? 'bg-amber-500/15 font-semibold text-amber-800 dark:text-amber-300'
                              : 'text-stone-700 hover:bg-stone-200/60 hover:text-stone-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-slate-100'
                          }`}
                        >
                          <span className="font-mono text-[11px] font-semibold text-amber-700 dark:text-amber-400 tabular-nums">
                            {mod.number}
                          </span>
                          <span className="leading-snug">{mod.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* Active Module Body */}
              <div className="min-w-0 flex-1">
                <ModuleRenderer
                  module={activeModule}
                  fontSizeScale={fontSizeScale}
                  prevModule={prevModule}
                  nextModule={nextModule}
                  onNavigateModule={openModule}
                />
              </div>
            </div>
          )}

          {viewMode === 'fullbook' && (
            <div>
              <CoverAndTOC
                modules={ALL_MODULES}
                onSelectModule={openModule}
                onPrintFullBook={handlePrintFullBook}
              />
              <div className="mx-auto max-w-6xl border-t border-stone-200 dark:border-slate-800">
                {ALL_MODULES.map((mod) => (
                  <div
                    key={mod.id}
                    className="border-b border-stone-200 dark:border-slate-800"
                  >
                    <ModuleRenderer
                      module={mod}
                      fontSizeScale={fontSizeScale}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Quiet Editorial Footer */}
        <footer className="mt-16 border-t border-stone-200 py-8 dark:border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-xs text-stone-500 dark:text-slate-400 sm:px-8">
            <p>
              Institutional Forex Mastery: Advanced Roman Urdu Edition · Educational Monograph for Serious Market Participants
            </p>
            <button
              type="button"
              onClick={handlePrintFullBook}
              className="font-medium text-amber-700 hover:underline dark:text-amber-400"
            >
              Export Complete eBook to PDF
            </button>
          </div>
        </footer>
      </div>

      {/* DEDICATED FULL EBOOK PRINT CONTAINER (Only rendered during @media print) */}
      <div className="hidden print-only-book">
        <CoverAndTOC
          modules={ALL_MODULES}
          onSelectModule={() => {}}
          onPrintFullBook={() => {}}
          isPrintView
        />
        {ALL_MODULES.map((mod) => (
          <ModuleRenderer
            key={`print-${mod.id}`}
            module={mod}
            fontSizeScale="standard"
            isPrintView
          />
        ))}
      </div>
    </div>
  );
}
