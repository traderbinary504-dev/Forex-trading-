import React, { useEffect, useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';

interface SopItem {
  id: number;
  title: string;
  romanUrduRule: string;
}

const SOP_ITEMS: SopItem[] = [
  {
    id: 1,
    title: 'Macro & Intermarket Alignment (US10Y / DXY / High-Impact News)',
    romanUrduRule:
      'Kya DXY aur US10Y meri trade direction ko support kar rahe hain? Aur kya aglay 30 minutes mein koi Red-Folder News (CPI/NFP/FOMC) toh nahi hai?',
  },
  {
    id: 2,
    title: 'HTF Narrative & Draw on Liquidity (Daily / 4H ERL ↔ IRL)',
    romanUrduRule:
      'Kya maine Daily/4H par clear target (ERL High/Low ya IRL FVG) mark kiya hai, aur kya meri trade HTF Order Flow ke mutabiq hai?',
  },
  {
    id: 3,
    title: 'Premium vs Discount Pricing Filter (50% Equilibrium + OTE)',
    romanUrduRule:
      'Buy setup ke liye price 50% Discount zone mein hai ya Sell setup ke liye 50% Premium (0.618–0.786 OTE) zone mein hai?',
  },
  {
    id: 4,
    title: 'Inducement (IDM) / Liquidity Sweep Confirmation',
    romanUrduRule:
      'Kya price ne entry POI par aane se pehle clean Inducement (IDM), Asian High/Low, ya EQH/EQL sweep kar liya hai?',
  },
  {
    id: 5,
    title: 'Valid POI + LTF Structural Shift (CHoCH + Displacement FVG)',
    romanUrduRule:
      'Kya mera Order Block / Breaker Block 3 validation rules pura karta hai aur LTF (5m/1m) par full body close CHoCH + FVG ban chuka hai?',
  },
  {
    id: 6,
    title: 'Active Killzone Window (PKT London / NY AM / Silver Bullet)',
    romanUrduRule:
      'Kya trade exact London Open, NY AM Killzone, ya Silver Bullet PKT window ke andar execute ho rahi hai (Rollover hours se bahar)?',
  },
  {
    id: 7,
    title: 'Quantitative Risk & Correlation Cap (0.25%–0.5% Risk, Min 1:3 RR)',
    romanUrduRule:
      'Kya mera Stop Loss structural extreme ke peeche hai, total correlated USD exposure safe limit mein hai, aur kya aaj 2 consecutive losses toh nahi hue?',
  },
];

const STORAGE_KEY = 'institutional_forex_sop_v1';

export const SopChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as number[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
    } catch {
      // ignore storage quota issues
    }
  }, [checkedIds]);

  const toggleItem = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetChecklist = () => {
    setCheckedIds([]);
  };

  const completedCount = checkedIds.length;
  const allComplete = completedCount === SOP_ITEMS.length;

  return (
    <section className="my-10 rounded-lg border border-stone-200 bg-stone-50/70 p-6 dark:border-slate-800 dark:bg-[#11161D] print:border-slate-300 print:bg-white print-avoid-break">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4 dark:border-slate-800 print:border-slate-300">
        <div>
          <h4 className="font-display text-xl font-semibold text-stone-900 dark:text-slate-100 print:text-slate-900">
            Final 7-Point Pre-Execution SOP Checklist
          </h4>
          <p className="mt-1 text-xs text-stone-600 dark:text-slate-400 print:text-slate-600">
            Har live trade lene se pehle is checklist ke 7/7 points verify karein.
          </p>
        </div>

        <div className="no-print flex items-center gap-3">
          <span
            className={`font-mono text-xs font-semibold tabular-nums ${
              allComplete
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-amber-700 dark:text-amber-400'
            }`}
          >
            {completedCount} / {SOP_ITEMS.length} Verified
          </span>
          <button
            type="button"
            onClick={resetChecklist}
            className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 whitespace-nowrap shrink-0"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>
      </div>

      <div className="divide-y divide-stone-200 dark:divide-slate-800 print:divide-slate-200">
        {SOP_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-start gap-4 py-3.5 text-left transition-colors hover:bg-stone-100/70 dark:hover:bg-slate-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-2 -mx-2"
            >
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                  isChecked
                    ? 'border-emerald-600 bg-emerald-600 text-white dark:border-emerald-500 dark:bg-emerald-500 print:border-slate-800 print:bg-white print:text-slate-900'
                    : 'border-stone-400 bg-white dark:border-slate-600 dark:bg-slate-950 print:border-slate-500 print:bg-white'
                }`}
              >
                {isChecked && <Check className="h-3.5 w-3.5 stroke-[2.5]" />}
              </span>
              <span className="flex-1">
                <span
                  className={`block text-sm font-semibold ${
                    isChecked
                      ? 'text-emerald-800 dark:text-emerald-300 print:text-slate-900'
                      : 'text-stone-900 dark:text-slate-100 print:text-slate-900'
                  }`}
                >
                  0{item.id}. {item.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-stone-600 dark:text-slate-400 print:text-slate-700">
                  {item.romanUrduRule}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {allComplete && (
        <div className="no-print mt-4 border-t border-emerald-500/30 pt-4 text-xs font-medium text-emerald-700 dark:text-emerald-400">
          7/7 Institutional Criteria Met — Execution Approved according to your Trading Plan.
        </div>
      )}
    </section>
  );
};
