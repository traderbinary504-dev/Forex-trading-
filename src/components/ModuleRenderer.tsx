import React from 'react';
import { CourseModule } from '../types/ebook';
import { DiagramFigure } from './diagrams/DiagramFigure';
import { ExpectancyLab } from './ExpectancyLab';
import { SopChecklist } from './SopChecklist';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ModuleRendererProps {
  module: CourseModule;
  fontSizeScale?: 'standard' | 'large';
  prevModule?: CourseModule;
  nextModule?: CourseModule;
  onNavigateModule?: (moduleId: string) => void;
  isPrintView?: boolean;
}

export const ModuleRenderer: React.FC<ModuleRendererProps> = ({
  module,
  fontSizeScale = 'standard',
  prevModule,
  nextModule,
  onNavigateModule,
  isPrintView = false,
}) => {
  const proseSizeClass =
    fontSizeScale === 'large' ? 'text-[16.5px] leading-[1.82]' : 'text-[15.5px] leading-[1.76]';

  return (
    <article
      id={isPrintView ? `print-${module.id}` : module.id}
      className={isPrintView ? 'print-page-break py-4' : 'mx-auto max-w-6xl px-4 py-8 sm:px-8 lg:py-10'}
    >
      {/* Chapter Header */}
      <header className="border-b border-stone-200 pb-7 dark:border-slate-800 print:border-slate-300">
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-slate-400 print:text-slate-600">
          <span className="font-mono font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 print:text-amber-800">
            Module {module.number}
          </span>
          <span aria-hidden="true">·</span>
          <span>{module.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>{module.focusTags.join(' · ')}</span>
        </div>

        <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-stone-900 dark:text-slate-50 print:text-slate-950 text-balance sm:text-4xl">
          {module.title}
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600 dark:text-slate-400 print:text-slate-700 sm:text-base">
          {module.subtitle}
        </p>
      </header>

      {/* Asymmetric 70/30 Editorial Grid */}
      <div
        className={`mt-8 grid gap-10 ${
          isPrintView ? 'grid-cols-1' : 'lg:grid-cols-[minmax(0,1fr)_270px]'
        }`}
      >
        {/* Main Reading Column (65-75ch Optimal Measure) */}
        <div className="max-w-[70ch]">
          <p
            className={`drop-cap ${proseSizeClass} text-stone-800 dark:text-slate-200 print:text-slate-900`}
          >
            {module.openingParagraph}
          </p>

          {/* Margin Notes Inline for Print & Mobile */}
          <div className="my-7 grid gap-4 border-y border-stone-200 py-5 sm:grid-cols-3 lg:hidden print:grid print:grid-cols-3 dark:border-slate-800 print:border-slate-300 print-avoid-break">
            {module.marginNotes.map((note) => (
              <div key={note.term}>
                <p className="font-mono text-xs font-semibold text-amber-700 dark:text-amber-400 print:text-amber-800">
                  {note.term}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-600 dark:text-slate-400 print:text-slate-700">
                  {note.definition}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-11">
            {module.sections.map((section) => (
              <section key={section.id} className="scroll-mt-24">
                <h2 className="font-display text-xl font-semibold tracking-tight text-stone-900 dark:text-slate-100 print:text-slate-950 sm:text-2xl">
                  {section.heading}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className={`${proseSizeClass} text-stone-700 dark:text-slate-300 print:text-slate-800`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.diagram && (
                  <DiagramFigure
                    id={section.diagram.id}
                    figNumber={section.diagram.figNumber}
                    title={section.diagram.title}
                    romanUrduCaption={section.diagram.romanUrduCaption}
                  />
                )}

                {section.keyRules && (
                  <div className="my-7 rounded-lg border border-stone-200 bg-stone-50/70 p-5 dark:border-slate-800 dark:bg-[#11161D] print:border-slate-300 print:bg-slate-50 print-avoid-break">
                    <h3 className="font-display text-base font-semibold text-stone-900 dark:text-slate-100 print:text-slate-900">
                      {section.keyRules.title}
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-stone-700 dark:text-slate-300 print:text-slate-800">
                      {section.keyRules.items.map((rule, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <span className="mt-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400 print:text-emerald-800 tabular-nums">
                            0{rIdx + 1}.
                          </span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.callout && (
                  <blockquote className="my-7 border-y border-stone-200 py-5 dark:border-slate-800 print:border-slate-300 print-avoid-break">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 print:text-amber-800">
                      {section.callout.label}
                    </p>
                    <p className="mt-2 font-display text-lg italic leading-relaxed text-stone-800 dark:text-slate-200 print:text-slate-900">
                      {section.callout.text}
                    </p>
                  </blockquote>
                )}

                {section.table && (
                  <div className="my-7 overflow-x-auto rounded-lg border border-stone-200 dark:border-slate-800 print:border-slate-300 print-avoid-break">
                    <div className="border-b border-stone-200 bg-stone-50 px-4 py-2.5 text-xs font-semibold text-stone-700 dark:border-slate-800 dark:bg-[#11161D] dark:text-slate-300 print:border-slate-300 print:bg-slate-100 print:text-slate-900">
                      {section.table.caption}
                    </div>
                    <table className="w-full border-collapse text-left text-xs">
                      <thead>
                        <tr className="border-b border-stone-200 bg-stone-50/50 dark:border-slate-800 dark:bg-slate-900/40 print:border-slate-300 print:bg-slate-50">
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              className="px-4 py-3 font-semibold text-stone-900 dark:text-slate-200 print:text-slate-900"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 dark:divide-slate-800 print:divide-slate-200">
                        {section.table.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className="bg-white dark:bg-[#0B0F14] print:bg-white"
                          >
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className={`px-4 py-3 align-top leading-relaxed tabular-nums ${
                                  cellIdx === 0
                                    ? 'font-semibold text-stone-900 dark:text-slate-100 print:text-slate-900'
                                    : 'text-stone-700 dark:text-slate-300 print:text-slate-800'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {module.hasExpectancyLab && <ExpectancyLab />}
          {module.hasSopChecklist && <SopChecklist />}
        </div>

        {/* Desktop Margin Notes Column */}
        {!isPrintView && (
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6 border-t border-stone-200 pt-5 dark:border-slate-800">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-slate-400">
                Desk Margin Notes
              </p>
              <div className="space-y-5">
                {module.marginNotes.map((note) => (
                  <div
                    key={note.term}
                    className="border-b border-stone-200 pb-4 last:border-b-0 dark:border-slate-800"
                  >
                    <h3 className="font-mono text-xs font-semibold text-amber-700 dark:text-amber-400">
                      {note.term}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-stone-600 dark:text-slate-400">
                      {note.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Chapter Pagination Footer (Screen Reader Mode) */}
      {!isPrintView && onNavigateModule && (
        <nav
          aria-label="Chapter navigation"
          className="no-print mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-6 dark:border-slate-800"
        >
          {prevModule ? (
            <button
              type="button"
              onClick={() => onNavigateModule(prevModule.id)}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-left text-xs font-medium text-stone-800 transition-colors hover:border-amber-500 dark:border-slate-700 dark:bg-[#11161D] dark:text-slate-200 dark:hover:border-amber-500/70"
            >
              <ChevronLeft className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>
                <span className="block text-[11px] text-stone-500 dark:text-slate-400">
                  Previous · Module {prevModule.number}
                </span>
                <span className="font-semibold">{prevModule.title}</span>
              </span>
            </button>
          ) : (
            <div />
          )}

          {nextModule ? (
            <button
              type="button"
              onClick={() => onNavigateModule(nextModule.id)}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-right text-xs font-medium text-stone-800 transition-colors hover:border-amber-500 dark:border-slate-700 dark:bg-[#11161D] dark:text-slate-200 dark:hover:border-amber-500/70"
            >
              <span>
                <span className="block text-[11px] text-stone-500 dark:text-slate-400">
                  Next · Module {nextModule.number}
                </span>
                <span className="font-semibold">{nextModule.title}</span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
            </button>
          ) : (
            <div className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
              End of Curriculum — Review 7-Point SOP Checklist above.
            </div>
          )}
        </nav>
      )}
    </article>
  );
};
