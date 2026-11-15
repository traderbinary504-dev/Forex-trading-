import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export const ExpectancyLab: React.FC = () => {
  const [winRate, setWinRate] = useState<number>(42);
  const [avgRR, setAvgRR] = useState<number>(3.2);
  const [riskPct, setRiskPct] = useState<number>(0.5);
  const [accountSize, setAccountSize] = useState<number>(100000);

  const winDec = winRate / 100;
  const lossDec = 1 - winDec;
  const expectancyR = winDec * avgRR - lossDec * 1;
  const riskDollar = (accountSize * riskPct) / 100;
  const expectedPerTradeDollar = expectancyR * riskDollar;
  const expected20TradesDollar = expectedPerTradeDollar * 20;
  const expected20TradesPct = (expected20TradesDollar / accountSize) * 100;
  const propBufferTrades = Math.floor(10 / riskPct);

  const resetDefaults = () => {
    setWinRate(42);
    setAvgRR(3.2);
    setRiskPct(0.5);
    setAccountSize(100000);
  };

  return (
    <section className="my-10 rounded-lg border border-stone-200 bg-stone-50/70 p-6 dark:border-slate-800 dark:bg-[#11161D] print:border-slate-300 print:bg-slate-50 print-avoid-break">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4 dark:border-slate-800 print:border-slate-300">
        <div>
          <h4 className="font-display text-lg font-semibold text-stone-900 dark:text-slate-100 print:text-slate-900">
            Interactive Expectancy &amp; Prop Firm Buffer Simulator
          </h4>
          <p className="mt-1 text-xs text-stone-600 dark:text-slate-400 print:text-slate-600">
            Apne backtest stats adjust karke dekhein ke Win Rate aur RR mil kar monthly Expectancy kaise banate hain.
          </p>
        </div>
        <button
          type="button"
          onClick={resetDefaults}
          className="no-print inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 whitespace-nowrap shrink-0"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      <div className="no-print mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <label htmlFor="win-rate-input" className="font-medium text-stone-700 dark:text-slate-300">
              Win Rate
            </label>
            <span className="font-mono font-semibold text-amber-700 dark:text-amber-400 tabular-nums">
              {winRate}%
            </span>
          </div>
          <input
            id="win-rate-input"
            type="range"
            min={20}
            max={80}
            step={1}
            value={winRate}
            onChange={(e) => setWinRate(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <label htmlFor="rr-input" className="font-medium text-stone-700 dark:text-slate-300">
              Avg Reward (R)
            </label>
            <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
              1:{avgRR.toFixed(1)}
            </span>
          </div>
          <input
            id="rr-input"
            type="range"
            min={1}
            max={8}
            step={0.1}
            value={avgRR}
            onChange={(e) => setAvgRR(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <label htmlFor="risk-input" className="font-medium text-stone-700 dark:text-slate-300">
              Risk Per Trade
            </label>
            <span className="font-mono font-semibold text-stone-900 dark:text-slate-100 tabular-nums">
              {riskPct.toFixed(2)}%
            </span>
          </div>
          <input
            id="risk-input"
            type="range"
            min={0.25}
            max={2.0}
            step={0.25}
            value={riskPct}
            onChange={(e) => setRiskPct(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <label htmlFor="account-select" className="font-medium text-stone-700 dark:text-slate-300">
              Account Capital
            </label>
          </div>
          <select
            id="account-select"
            value={accountSize}
            onChange={(e) => setAccountSize(Number(e.target.value))}
            className="w-full rounded-md border border-stone-300 bg-white px-2.5 py-1.5 font-mono text-xs text-stone-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            <option value={25000}>$25,000</option>
            <option value={50000}>$50,000</option>
            <option value={100000}>$100,000</option>
            <option value={200000}>$200,000</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-stone-200 pt-5 sm:grid-cols-4 dark:border-slate-800 print:border-slate-300">
        <div>
          <p className="text-xs text-stone-500 dark:text-slate-400 print:text-slate-600">Expectancy / Trade</p>
          <p
            className={`mt-1 font-mono text-xl font-semibold tabular-nums ${
              expectancyR >= 0
                ? 'text-emerald-700 dark:text-emerald-400 print:text-emerald-800'
                : 'text-rose-700 dark:text-rose-400 print:text-rose-700'
            }`}
          >
            {expectancyR >= 0 ? '+' : ''}
            {expectancyR.toFixed(2)}R
          </p>
        </div>

        <div>
          <p className="text-xs text-stone-500 dark:text-slate-400 print:text-slate-600">Risk ($ / Trade)</p>
          <p className="mt-1 font-mono text-xl font-semibold text-stone-900 dark:text-slate-100 print:text-slate-900 tabular-nums">
            ${riskDollar.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-xs text-stone-500 dark:text-slate-400 print:text-slate-600">20-Trade Est. Return</p>
          <p
            className={`mt-1 font-mono text-xl font-semibold tabular-nums ${
              expected20TradesDollar >= 0
                ? 'text-amber-700 dark:text-amber-400 print:text-amber-800'
                : 'text-rose-700 dark:text-rose-400 print:text-rose-700'
            }`}
          >
            {expected20TradesDollar >= 0 ? '+' : '-'}$
            {Math.abs(Math.round(expected20TradesDollar)).toLocaleString()} ({expected20TradesPct >= 0 ? '+' : ''}
            {expected20TradesPct.toFixed(1)}%)
          </p>
        </div>

        <div>
          <p className="text-xs text-stone-500 dark:text-slate-400 print:text-slate-600">10% DD Survival Buffer</p>
          <p className="mt-1 font-mono text-xl font-semibold text-stone-900 dark:text-slate-100 print:text-slate-900 tabular-nums">
            {propBufferTrades} Losses
          </p>
        </div>
      </div>
    </section>
  );
};
