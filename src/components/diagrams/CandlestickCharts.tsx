import React from 'react';
import { DiagramId } from '../../types/ebook';

interface DiagramProps {
  id: DiagramId;
}

interface Candle {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
  highlight?: 'ob' | 'breaker' | 'displacement' | 'sweep';
}

function renderCandles(candles: Candle[], width = 10) {
  return candles.map((candle, idx) => {
    const isBull = candle.c < candle.o; // SVG y=0 is top, so lower y = higher price
    const bodyTop = Math.min(candle.o, candle.c);
    const bodyBottom = Math.max(candle.o, candle.c);
    const bodyHeight = Math.max(bodyBottom - bodyTop, 3);
    const fill =
      candle.highlight === 'ob'
        ? '#D4AF37'
        : candle.highlight === 'breaker'
        ? '#F59E0B'
        : isBull
        ? '#10B981'
        : '#EF4444';
    const stroke =
      candle.highlight === 'ob'
        ? '#FDE68A'
        : candle.highlight === 'breaker'
        ? '#FCD34D'
        : isBull
        ? '#059669'
        : '#DC2626';

    return (
      <g key={idx}>
        <line
          x1={candle.x}
          y1={candle.h}
          x2={candle.x}
          y2={candle.l}
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect
          x={candle.x - width / 2}
          y={bodyTop}
          width={width}
          height={bodyHeight}
          rx="1.2"
          fill={fill}
          stroke={stroke}
          strokeWidth="0.9"
        />
      </g>
    );
  });
}

export const CustomTechnicalDiagram: React.FC<DiagramProps> = ({ id }) => {
  switch (id) {
    case 'mod1-bos-idm':
      return <Mod1BosVsIdmSvg />;
    case 'mod1-sweep-choch':
      return <Mod1SweepVsChochSvg />;
    case 'mod2-fvg-ob':
      return <Mod2FvgAndObSvg />;
    case 'mod2-breaker-ote':
      return <Mod2BreakerAndOteSvg />;
    case 'mod5-mtfa-funnel':
      return <Mod5MtfaFunnelSvg />;
    case 'mod6-drawdown-math':
      return <Mod6DrawdownMathSvg />;
    case 'mod7-mae-mfe':
      return <Mod7MaeMfeSvg />;
    default:
      return null;
  }
};

const Mod1BosVsIdmSvg: React.FC = () => {
  // Left panel: Fake BOS Trap (Retail buys breakout before IDM sweep)
  const fakeCandles: Candle[] = [
    { x: 40, o: 245, h: 215, l: 255, c: 220 },
    { x: 60, o: 220, h: 175, l: 225, c: 185 },
    { x: 80, o: 185, h: 135, l: 190, c: 142 }, // Swing High A
    { x: 100, o: 142, h: 138, l: 188, c: 178 }, // Pullback to IDM
    { x: 120, o: 178, h: 155, l: 185, c: 162 }, // Minor lower high
    { x: 140, o: 162, h: 122, l: 168, c: 130 }, // Fake BOS wick/close above minor high
    { x: 160, o: 130, h: 125, l: 165, c: 158 }, // Reversal trap starts
    { x: 180, o: 158, h: 152, l: 208, c: 198 }, // Crashes through IDM!
    { x: 200, o: 198, h: 192, l: 238, c: 228 }, // Retail SL hunted
    { x: 220, o: 228, h: 205, l: 242, c: 215 },
  ];

  // Right panel: Real BOS after Inducement (IDM) Sweep
  const realCandles: Candle[] = [
    { x: 380, o: 245, h: 215, l: 255, c: 220 },
    { x: 400, o: 220, h: 175, l: 225, c: 185 },
    { x: 420, o: 185, h: 132, l: 190, c: 138 }, // True Swing High
    { x: 440, o: 138, h: 135, l: 192, c: 182 }, // First Pullback = IDM Low
    { x: 460, o: 182, h: 158, l: 186, c: 164 }, // Retail thinks support formed
    { x: 480, o: 164, h: 160, l: 215, c: 202, highlight: 'sweep' }, // Sweeps IDM + taps OB!
    { x: 500, o: 202, h: 165, l: 206, c: 168 }, // Institutional absorption
    { x: 520, o: 168, h: 120, l: 170, c: 126, highlight: 'displacement' }, // Displacement!
    { x: 540, o: 126, h: 86, l: 130, c: 92 }, // Clean Body Close above High = REAL BOS
    { x: 560, o: 92, h: 72, l: 98, c: 78 },
  ];

  return (
    <svg viewBox="0 0 640 310" className="w-full h-auto rounded-lg bg-[#0F141B] text-slate-200 border border-slate-800 print:bg-white print:text-slate-900 print:border-slate-300">
      <defs>
        <pattern id="grid1" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
        </pattern>
        <marker id="arrowGold1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#D4AF37" />
        </marker>
        <marker id="arrowRed1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#EF4444" />
        </marker>
        <marker id="arrowGreen1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#10B981" />
        </marker>
      </defs>
      <rect width="640" height="310" fill="url(#grid1)" />

      {/* Center divider */}
      <line x1="320" y1="16" x2="320" y2="294" stroke="rgba(148,163,184,0.22)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Panel Headers */}
      <text x="160" y="30" textAnchor="middle" fill="#EF4444" fontSize="11.5" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        FAKE BOS TRAP (IDM UNTOUCHED)
      </text>
      <text x="480" y="30" textAnchor="middle" fill="#10B981" fontSize="11.5" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        REAL BOS (AFTER IDM SWEEP)
      </text>

      {/* Left Panel Lines & Annotations */}
      {/* Minor High / Fake BOS line */}
      <line x1="72" y1="135" x2="172" y2="135" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="148" y="114" textAnchor="middle" fill="#FCA5A5" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        Fake BOS
      </text>
      <text x="148" y="102" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="Plus Jakarta Sans, sans-serif">
        (Retail Buyers Trap)
      </text>

      {/* Untouched IDM Line */}
      <line x1="92" y1="188" x2="215" y2="188" stroke="#D4AF37" strokeWidth="1.3" strokeDasharray="3 3" />
      <text x="108" y="203" fill="#FDE68A" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
        IDM (Untouched)
      </text>

      {/* Crash Arrow */}
      <path d="M 160 128 L 200 230" fill="none" stroke="#EF4444" strokeWidth="1.6" strokeDasharray="3 2" markerEnd="url(#arrowRed1)" />
      <text x="236" y="175" fill="#FCA5A5" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
        SL Hunt Drop
      </text>

      {/* Right Panel Lines & Annotations */}
      {/* Extreme Demand / OB Zone */}
      <rect x="405" y="198" width="120" height="22" fill="rgba(16,185,129,0.16)" stroke="#10B981" strokeWidth="0.9" rx="2" />
      <text x="465" y="213" textAnchor="middle" fill="#6EE7B7" fontSize="8.8" fontFamily="JetBrains Mono, monospace">
        Discount POI / OB
      </text>

      {/* IDM Level Swept */}
      <line x1="432" y1="192" x2="505" y2="192" stroke="#D4AF37" strokeWidth="1.3" strokeDasharray="3 3" />
      <text x="392" y="196" fill="#FDE68A" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
        IDM Swept
      </text>
      <circle cx="480" cy="212" r="9" fill="none" stroke="#D4AF37" strokeWidth="1.4" />

      {/* Real BOS Line */}
      <line x1="415" y1="132" x2="585" y2="132" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="580" y="123" textAnchor="end" fill="#6EE7B7" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        REAL BOS (Body Close)
      </text>

      {/* Displacement Arrow */}
      <path d="M 488 205 L 552 88" fill="none" stroke="#10B981" strokeWidth="1.6" markerEnd="url(#arrowGreen1)" />

      {/* Candles */}
      {renderCandles(fakeCandles, 10)}
      {renderCandles(realCandles, 10)}

      {/* Bottom Legend */}
      <text x="160" y="284" textAnchor="middle" fill="#94A3B8" fontSize="9.2" fontFamily="Plus Jakarta Sans, sans-serif">
        IDM sweep se pehle breakout = Smart Money Trap
      </text>
      <text x="480" y="284" textAnchor="middle" fill="#94A3B8" fontSize="9.2" fontFamily="Plus Jakarta Sans, sans-serif">
        IDM sweep + POI tap + Body Close = Confirmed BOS
      </text>
    </svg>
  );
};

const Mod1SweepVsChochSvg: React.FC = () => {
  // Left: Liquidity Sweep (Wick rejection above BSL, body closes back below)
  const sweepCandles: Candle[] = [
    { x: 50, o: 215, h: 175, l: 222, c: 182 },
    { x: 75, o: 182, h: 135, l: 190, c: 145 }, // Swing High (BSL origin)
    { x: 100, o: 145, h: 140, l: 195, c: 185 },
    { x: 125, o: 185, h: 162, l: 198, c: 170 },
    { x: 150, o: 170, h: 148, l: 178, c: 152 },
    { x: 175, o: 152, h: 92, l: 158, c: 146, highlight: 'sweep' }, // HUGE WICK ABOVE BSL, BODY CLOSES BELOW!
    { x: 200, o: 146, h: 140, l: 205, c: 196 }, // Bearish confirmation
    { x: 225, o: 196, h: 188, l: 245, c: 235 },
  ];

  // Right: True CHoCH (Displacement Body Close above LH + FVG)
  const chochCandles: Candle[] = [
    { x: 375, o: 120, h: 112, l: 165, c: 158 },
    { x: 400, o: 158, h: 145, l: 205, c: 196 },
    { x: 425, o: 196, h: 152, l: 204, c: 162 }, // Key Lower High (LH)
    { x: 450, o: 162, h: 158, l: 228, c: 218 }, // Makes LL
    { x: 475, o: 218, h: 192, l: 235, c: 198 },
    { x: 500, o: 198, h: 130, l: 202, c: 136, highlight: 'displacement' }, // Energetic Displacement Candle Closing ABOVE LH!
    { x: 525, o: 136, h: 104, l: 140, c: 110 }, // Follow-through creating FVG
    { x: 550, o: 110, h: 105, l: 162, c: 154 }, // Retest into FVG
    { x: 575, o: 154, h: 96, l: 158, c: 102 }, // Continuation higher
  ];

  return (
    <svg viewBox="0 0 640 300" className="w-full h-auto rounded-lg bg-[#0F141B] text-slate-200 border border-slate-800 print:bg-white print:text-slate-900 print:border-slate-300">
      <defs>
        <pattern id="grid2" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="640" height="300" fill="url(#grid2)" />
      <line x1="320" y1="16" x2="320" y2="284" stroke="rgba(148,163,184,0.22)" strokeWidth="1" strokeDasharray="4 4" />

      <text x="160" y="30" textAnchor="middle" fill="#D4AF37" fontSize="11.5" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        LIQUIDITY SWEEP (WICK REJECTION)
      </text>
      <text x="480" y="30" textAnchor="middle" fill="#10B981" fontSize="11.5" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        TRUE CHoCH (BODY CLOSE + FVG)
      </text>

      {/* Left Side BSL Line */}
      <line x1="65" y1="135" x2="235" y2="135" stroke="#D4AF37" strokeWidth="1.4" strokeDasharray="5 3" />
      <text x="235" y="128" textAnchor="end" fill="#FDE68A" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        Buy-Side Liquidity (BSL)
      </text>

      {/* Wick Sweep Highlight */}
      <circle cx="175" cy="98" r="11" fill="none" stroke="#EF4444" strokeWidth="1.4" strokeDasharray="2 2" />
      <text x="175" y="76" textAnchor="middle" fill="#FCA5A5" fontSize="9.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
        Wick Sweep (Stops Filled)
      </text>
      <text x="175" y="160" textAnchor="middle" fill="#94A3B8" fontSize="8.8" fontFamily="JetBrains Mono, monospace">
        Close &lt; BSL
      </text>

      {/* Right Side LH Line + FVG Box */}
      <line x1="415" y1="152" x2="585" y2="152" stroke="#10B981" strokeWidth="1.4" strokeDasharray="5 3" />
      <text x="415" y="143" fill="#6EE7B7" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
        Key Lower High (LH)
      </text>

      {/* FVG created by displacement */}
      <rect x="492" y="140" width="90" height="52" fill="rgba(16,185,129,0.14)" stroke="#10B981" strokeWidth="0.9" rx="2" />
      <text x="537" y="176" textAnchor="middle" fill="#6EE7B7" fontSize="8.8" fontFamily="JetBrains Mono, monospace">
        Displacement FVG
      </text>

      <text x="500" y="94" textAnchor="middle" fill="#6EE7B7" fontSize="9.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
        Body Close Above LH
      </text>

      {renderCandles(sweepCandles, 12)}
      {renderCandles(chochCandles, 12)}

      <text x="160" y="274" textAnchor="middle" fill="#94A3B8" fontSize="9.2" fontFamily="Plus Jakarta Sans, sans-serif">
        Sirf wick upar jaye aur body neeche close ho = Bearish Sweep
      </text>
      <text x="480" y="274" textAnchor="middle" fill="#94A3B8" fontSize="9.2" fontFamily="Plus Jakarta Sans, sans-serif">
        Full candle body close + FVG imbalance = Valid Trend Shift
      </text>
    </svg>
  );
};

const Mod2FvgAndObSvg: React.FC = () => {
  // Bullish 3-Candle FVG & Valid OB Sequence
  // Candle 0: sweeps SSL & is last down candle (OB)
  // Candle 1: Bullish candle (High = 192) -> FVG bottom
  // Candle 2: Massive Displacement candle (o=196, c=112)
  // Candle 3: Bullish candle (Low = 132) -> FVG top. Gap between 132 and 192!
  const candles: Candle[] = [
    { x: 80, o: 185, h: 178, l: 220, c: 212 }, // Prior low at l=220
    { x: 115, o: 212, h: 196, l: 224, c: 202 },
    { x: 150, o: 202, h: 198, l: 244, c: 234, highlight: 'ob' }, // Candle 0: Sweeps l=224 -> Valid Bullish OB!
    { x: 185, o: 234, h: 192, l: 238, c: 198 }, // Candle 1: High = 192
    { x: 220, o: 198, h: 108, l: 202, c: 116, highlight: 'displacement' }, // Candle 2: Displacement!
    { x: 255, o: 116, h: 86, l: 132, c: 94 }, // Candle 3: Low = 132
    { x: 290, o: 94, h: 78, l: 114, c: 106 }, // Swing high
    { x: 325, o: 106, h: 102, l: 155, c: 148 }, // Pullback starts
    { x: 360, o: 148, h: 144, l: 198, c: 190 }, // Taps FVG + OB top!
    { x: 395, o: 190, h: 140, l: 208, c: 145 }, // Mitigates OB 50% & rejects up
    { x: 430, o: 145, h: 88, l: 148, c: 92 }, // Institutional rally
    { x: 465, o: 92, h: 52, l: 96, c: 58 }, // Breaks high = BOS
  ];

  return (
    <svg viewBox="0 0 640 315" className="w-full h-auto rounded-lg bg-[#0F141B] text-slate-200 border border-slate-800 print:bg-white print:text-slate-900 print:border-slate-300">
      <defs>
        <pattern id="grid3" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="640" height="315" fill="url(#grid3)" />

      {/* Title */}
      <text x="320" y="28" textAnchor="middle" fill="#D4AF37" fontSize="12" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        VALID BULLISH ORDER BLOCK (OB) + 3-CANDLE FAIR VALUE GAP (FVG)
      </text>

      {/* SSL Sweep Line */}
      <line x1="65" y1="224" x2="170" y2="224" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="65" y="256" fill="#FCA5A5" fontSize="9" fontFamily="JetBrains Mono, monospace">
        Rule 1: Swept Prior SSL
      </text>

      {/* Bullish OB Zone (Candle 0: y=198 to 244) */}
      <rect x="142" y="198" width="320" height="46" fill="rgba(212,175,55,0.12)" stroke="#D4AF37" strokeWidth="1" rx="2" />
      <line x1="142" y1="221" x2="462" y2="221" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" />
      <text x="470" y="216" fill="#FDE68A" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
        Valid Bullish OB
      </text>
      <text x="470" y="230" fill="#94A3B8" fontSize="8.8" fontFamily="JetBrains Mono, monospace">
        (50% Mean Threshold)
      </text>

      {/* 3-Candle FVG Zone (Between Candle 1 High y=192 and Candle 3 Low y=132) */}
      <rect x="185" y="132" width="245" height="60" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.1" rx="2" />
      <text x="438" y="158" fill="#6EE7B7" fontSize="9.8" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        3-Candle FVG
      </text>
      <text x="438" y="172" fill="#94A3B8" fontSize="8.8" fontFamily="Plus Jakarta Sans, sans-serif">
        (C1 High to C3 Low Gap)
      </text>

      {/* BOS Line */}
      <line x1="275" y1="78" x2="520" y2="78" stroke="#10B981" strokeWidth="1.3" strokeDasharray="5 3" />
      <text x="526" y="82" fill="#6EE7B7" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
        Rule 3: BOS
      </text>

      {/* Candle Number Labels */}
      <text x="150" y="188" textAnchor="middle" fill="#FDE68A" fontSize="9" fontFamily="JetBrains Mono, monospace">OB</text>
      <text x="185" y="182" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontFamily="JetBrains Mono, monospace">C1</text>
      <text x="220" y="98" textAnchor="middle" fill="#6EE7B7" fontSize="9" fontFamily="JetBrains Mono, monospace">C2</text>
      <text x="255" y="76" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontFamily="JetBrains Mono, monospace">C3</text>

      {/* Entry Circle */}
      <circle cx="395" cy="195" r="10" fill="none" stroke="#10B981" strokeWidth="1.6" />
      <text x="395" y="264" textAnchor="middle" fill="#6EE7B7" fontSize="9.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
        Institutional Mitigation Entry (FVG + OB)
      </text>

      {renderCandles(candles, 13)}
    </svg>
  );
};

const Mod2BreakerAndOteSvg: React.FC = () => {
  const candles: Candle[] = [
    { x: 70, o: 185, h: 170, l: 210, c: 175 }, // Swing Low at l=210
    { x: 105, o: 175, h: 120, l: 180, c: 128 },
    { x: 140, o: 128, h: 82, l: 134, c: 90 }, // Swing High at h=82 (Fib 100% / 1.0)
    { x: 175, o: 90, h: 85, l: 148, c: 142 }, // Pullback
    { x: 210, o: 142, h: 112, l: 150, c: 118, highlight: 'breaker' }, // Last Bullish candle before breakdown = Bearish Breaker!
    { x: 245, o: 118, h: 115, l: 186, c: 178 }, // Strong drop
    { x: 280, o: 178, h: 174, l: 238, c: 228 }, // Breaks Swing Low (l=210) -> MSS/BOS!
    { x: 315, o: 228, h: 210, l: 256, c: 248 }, // Swing Low (l=256, Fib 0.0%)
    { x: 350, o: 248, h: 192, l: 252, c: 198 }, // Retracement starts
    { x: 385, o: 198, h: 145, l: 204, c: 152 }, // Enters Premium (>50%)
    { x: 420, o: 152, h: 116, l: 158, c: 124 }, // Taps 0.618 - 0.786 OTE + Breaker!
    { x: 455, o: 124, h: 120, l: 196, c: 188 }, // Sharp bearish distribution
    { x: 490, o: 188, h: 182, l: 262, c: 252 }, // New Lower Low
  ];

  // Range: Swing High y=82 to Swing Low y=256 (Total height = 174px)
  // 50% Equilibrium = 82 + 87 = 169
  // OTE 0.618 retracement from low (256 - 0.618*174) = 148.5
  // OTE 0.786 retracement from low (256 - 0.786*174) = 119.2
  return (
    <svg viewBox="0 0 640 315" className="w-full h-auto rounded-lg bg-[#0F141B] text-slate-200 border border-slate-800 print:bg-white print:text-slate-900 print:border-slate-300">
      <defs>
        <pattern id="grid4" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="640" height="315" fill="url(#grid4)" />

      <text x="320" y="28" textAnchor="middle" fill="#D4AF37" fontSize="11.8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        BEARISH BREAKER BLOCK + PREMIUM / DISCOUNT 50% &amp; OTE (0.618 - 0.786)
      </text>

      {/* Premium vs Discount Background Shading */}
      <rect x="295" y="82" width="235" height="87" fill="rgba(239,68,68,0.09)" />
      <rect x="295" y="169" width="235" height="87" fill="rgba(16,185,129,0.08)" />

      {/* Fib Levels */}
      <line x1="140" y1="82" x2="535" y2="82" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
      <text x="542" y="86" fill="#CBD5E1" fontSize="9" fontFamily="JetBrains Mono, monospace">1.00 (High)</text>

      {/* OTE Zone (119 to 149) */}
      <rect x="295" y="119" width="235" height="30" fill="rgba(212,175,55,0.22)" stroke="#D4AF37" strokeWidth="1" />
      <text x="542" y="130" fill="#FDE68A" fontSize="9.2" fontWeight="700" fontFamily="JetBrains Mono, monospace">0.786 OTE</text>
      <text x="542" y="148" fill="#FDE68A" fontSize="9.2" fontWeight="700" fontFamily="JetBrains Mono, monospace">0.618 OTE</text>

      {/* 50% Equilibrium */}
      <line x1="140" y1="169" x2="535" y2="169" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="6 3" />
      <text x="542" y="173" fill="#E2E8F0" fontSize="9.2" fontWeight="600" fontFamily="JetBrains Mono, monospace">0.50 (EQ)</text>

      {/* 0.0 Low */}
      <line x1="315" y1="256" x2="535" y2="256" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
      <text x="542" y="260" fill="#CBD5E1" fontSize="9" fontFamily="JetBrains Mono, monospace">0.00 (Low)</text>

      {/* Breaker Block Box extending from x=204 to x=440 */}
      <rect x="202" y="112" width="236" height="38" fill="rgba(245,158,11,0.16)" stroke="#F59E0B" strokeWidth="1.1" rx="2" />
      <text x="206" y="104" fill="#FCD34D" fontSize="9.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        Bearish Breaker (Failed Bullish Candle)
      </text>

      {/* Broken Swing Low (MSS) */}
      <line x1="65" y1="210" x2="292" y2="210" stroke="#EF4444" strokeWidth="1.3" strokeDasharray="4 3" />
      <text x="70" y="224" fill="#FCA5A5" fontSize="9" fontFamily="JetBrains Mono, monospace">
        Broken Low (MSS / BOS)
      </text>

      {/* Zone Labels */}
      <text x="312" y="100" fill="#FCA5A5" fontSize="9" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
        PREMIUM ZONE (SELL AREA)
      </text>
      <text x="312" y="246" fill="#6EE7B7" fontSize="9" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
        DISCOUNT ZONE (NO SELLS)
      </text>

      {/* OTE Entry Circle */}
      <circle cx="420" cy="122" r="10" fill="none" stroke="#EF4444" strokeWidth="1.6" />

      {renderCandles(candles, 13)}
    </svg>
  );
};

const Mod5MtfaFunnelSvg: React.FC = () => {
  return (
    <svg viewBox="0 0 640 310" className="w-full h-auto rounded-lg bg-[#0F141B] text-slate-200 border border-slate-800 print:bg-white print:text-slate-900 print:border-slate-300">
      <defs>
        <pattern id="grid5" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
        </pattern>
        <marker id="arrowDown5" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
          <path d="M0,0 L4,6 L8,0 Z" fill="#D4AF37" />
        </marker>
      </defs>
      <rect width="640" height="310" fill="url(#grid5)" />

      <text x="320" y="28" textAnchor="middle" fill="#D4AF37" fontSize="12" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        TOP-DOWN MULTI-TIMEFRAME ANALYSIS (MTFA) EXECUTION FUNNEL
      </text>

      {/* Tier 1: HTF Daily / 4H */}
      <polygon points="60,50 580,50 520,115 120,115" fill="rgba(212,175,55,0.14)" stroke="#D4AF37" strokeWidth="1.4" />
      <text x="320" y="75" textAnchor="middle" fill="#FDE68A" fontSize="11.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        1. HTF NARRATIVE (DAILY / 4H)
      </text>
      <text x="320" y="96" textAnchor="middle" fill="#CBD5E1" fontSize="9.8" fontFamily="Plus Jakarta Sans, sans-serif">
        Directional Bias · External Range Liquidity (ERL) Target · Major HTF Order Block / FVG
      </text>

      {/* Arrow 1 -> 2 */}
      <line x1="320" y1="118" x2="320" y2="136" stroke="#D4AF37" strokeWidth="1.6" markerEnd="url(#arrowDown5)" />

      {/* Tier 2: MTF 1H / 15m */}
      <polygon points="128,142 512,142 456,204 184,204" fill="rgba(16,185,129,0.13)" stroke="#10B981" strokeWidth="1.4" />
      <text x="320" y="167" textAnchor="middle" fill="#6EE7B7" fontSize="11.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        2. MTF STRUCTURE &amp; SESSION (1H / 15m)
      </text>
      <text x="320" y="187" textAnchor="middle" fill="#CBD5E1" fontSize="9.8" fontFamily="Plus Jakarta Sans, sans-serif">
        Killzone Timing (PKT) · Inducement (IDM) Sweep · Premium/Discount POI Alignment
      </text>

      {/* Arrow 2 -> 3 */}
      <line x1="320" y1="207" x2="320" y2="225" stroke="#D4AF37" strokeWidth="1.6" markerEnd="url(#arrowDown5)" />

      {/* Tier 3: LTF 5m / 1m */}
      <polygon points="194,231 446,231 402,290 238,290" fill="rgba(56,189,248,0.14)" stroke="#38BDF8" strokeWidth="1.4" />
      <text x="320" y="254" textAnchor="middle" fill="#7DD3FC" fontSize="11" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        3. LTF PRECISION ENTRY (5m / 1m)
      </text>
      <text x="320" y="274" textAnchor="middle" fill="#CBD5E1" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif">
        LTF CHoCH + FVG · Tight SL · 1:5+ RR
      </text>
    </svg>
  );
};

const Mod6DrawdownMathSvg: React.FC = () => {
  const data = [
    { loss: '-10%', lossVal: 10, gain: '+11.1%', gainVal: 11.1 },
    { loss: '-20%', lossVal: 20, gain: '+25.0%', gainVal: 25 },
    { loss: '-30%', lossVal: 30, gain: '+42.9%', gainVal: 42.9 },
    { loss: '-50%', lossVal: 50, gain: '+100%', gainVal: 100 },
    { loss: '-60%', lossVal: 60, gain: '+150%', gainVal: 150 },
    { loss: '-75%', lossVal: 75, gain: '+300%', gainVal: 300 },
  ];

  const maxGain = 300;
  const chartBottom = 250;
  const chartTop = 62;
  const chartHeight = chartBottom - chartTop; // 188px

  return (
    <svg viewBox="0 0 640 315" className="w-full h-auto rounded-lg bg-[#0F141B] text-slate-200 border border-slate-800 print:bg-white print:text-slate-900 print:border-slate-300">
      <defs>
        <pattern id="grid6" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.07)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="640" height="315" fill="url(#grid6)" />

      <text x="320" y="26" textAnchor="middle" fill="#D4AF37" fontSize="11.8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        DRAWDOWN ASYMMETRY: ACCOUNT LOSS VS GAIN REQUIRED TO BREAK EVEN
      </text>

      {/* Legend */}
      <rect x="180" y="38" width="10" height="10" fill="#EF4444" rx="1.5" />
      <text x="196" y="47" fill="#FCA5A5" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif">Account Drawdown (%)</text>
      <rect x="335" y="38" width="10" height="10" fill="#10B981" rx="1.5" />
      <text x="351" y="47" fill="#6EE7B7" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif">Recovery Gain Required (%)</text>

      {/* Horizontal Y Axis Reference Lines */}
      {[0, 100, 200, 300].map((val) => {
        const y = chartBottom - (val / maxGain) * chartHeight;
        return (
          <g key={val}>
            <line x1="65" y1={y} x2="600" y2={y} stroke="rgba(148,163,184,0.18)" strokeWidth="1" />
            <text x="56" y={y + 3} textAnchor="end" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono, monospace">
              {val}%
            </text>
          </g>
        );
      })}

      {/* Bars */}
      {data.map((item, i) => {
        const groupX = 95 + i * 86;
        const lossH = Math.max((item.lossVal / maxGain) * chartHeight, 6);
        const gainH = Math.max((item.gainVal / maxGain) * chartHeight, 7);
        const lossY = chartBottom - lossH;
        const gainY = chartBottom - gainH;

        return (
          <g key={item.loss}>
            {/* Loss bar */}
            <rect x={groupX} y={lossY} width="24" height={lossH} fill="#EF4444" rx="2" />
            <text x={groupX + 12} y={lossY - 5} textAnchor="middle" fill="#FCA5A5" fontSize="9" fontWeight="600" fontFamily="JetBrains Mono, monospace">
              {item.loss}
            </text>

            {/* Required Gain bar */}
            <rect x={groupX + 28} y={gainY} width="24" height={gainH} fill="#10B981" rx="2" />
            <text x={groupX + 40} y={gainY - 5} textAnchor="middle" fill="#6EE7B7" fontSize="9" fontWeight="700" fontFamily="JetBrains Mono, monospace">
              {item.gain}
            </text>

            {/* X-axis label */}
            <text x={groupX + 26} y={chartBottom + 16} textAnchor="middle" fill="#CBD5E1" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
              {item.loss} Loss
            </text>
          </g>
        );
      })}

      <text x="320" y="294" textAnchor="middle" fill="#D4AF37" fontSize="9.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
        Prop Firm Rule: 10% Max Drawdown par sirf 11.1% recovery chahiye — 50% loss par 100% double karna parta hai!
      </text>
    </svg>
  );
};

const Mod7MaeMfeSvg: React.FC = () => {
  return (
    <svg viewBox="0 0 640 310" className="w-full h-auto rounded-lg bg-[#0F141B] text-slate-200 border border-slate-800 print:bg-white print:text-slate-900 print:border-slate-300">
      <defs>
        <pattern id="grid7" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="640" height="310" fill="url(#grid7)" />

      <text x="320" y="28" textAnchor="middle" fill="#D4AF37" fontSize="11.8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        MAE (MAXIMUM ADVERSE EXCURSION) VS MFE (MAXIMUM FAVORABLE EXCURSION)
      </text>

      {/* Horizontal R-Multiple Levels */}
      {/* +4R Peak MFE */}
      <line x1="70" y1="68" x2="585" y2="68" stroke="#10B981" strokeWidth="1.2" strokeDasharray="5 3" />
      <text x="62" y="72" textAnchor="end" fill="#6EE7B7" fontSize="9.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">+4.0R</text>

      {/* +3R Target */}
      <line x1="70" y1="102" x2="585" y2="102" stroke="rgba(16,185,129,0.5)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="62" y="106" textAnchor="end" fill="#6EE7B7" fontSize="9" fontFamily="JetBrains Mono, monospace">+3.0R</text>

      {/* +1R Panic Exit */}
      <line x1="70" y1="168" x2="585" y2="168" stroke="rgba(212,175,55,0.45)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="62" y="172" textAnchor="end" fill="#FDE68A" fontSize="9" fontFamily="JetBrains Mono, monospace">+1.0R</text>

      {/* 0R Entry */}
      <line x1="70" y1="202" x2="585" y2="202" stroke="#CBD5E1" strokeWidth="1.4" />
      <text x="62" y="206" textAnchor="end" fill="#E2E8F0" fontSize="9.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">0R (Entry)</text>

      {/* -0.35R MAE Threshold */}
      <line x1="70" y1="224" x2="585" y2="224" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="62" y="228" textAnchor="end" fill="#FCD34D" fontSize="9" fontFamily="JetBrains Mono, monospace">-0.35R</text>

      {/* -1.0R Stop Loss */}
      <line x1="70" y1="264" x2="585" y2="264" stroke="#EF4444" strokeWidth="1.3" />
      <text x="62" y="268" textAnchor="end" fill="#FCA5A5" fontSize="9.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">-1.0R (SL)</text>

      {/* Shaded MAE Zone */}
      <rect x="115" y="202" width="110" height="22" fill="rgba(245,158,11,0.18)" />
      {/* Shaded Leftover MFE Zone */}
      <rect x="275" y="68" width="235" height="100" fill="rgba(16,185,129,0.1)" />

      {/* Trade Equity Path Curve */}
      <path
        d="M 85 202 L 130 218 L 165 224 L 205 202 L 265 168 L 310 176 L 375 110 L 420 124 L 470 68 L 535 96"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Key Points */}
      <circle cx="85" cy="202" r="4.5" fill="#E2E8F0" />
      <circle cx="165" cy="224" r="5.5" fill="#F59E0B" />
      <circle cx="265" cy="168" r="5" fill="#D4AF37" />
      <circle cx="470" cy="68" r="5.5" fill="#10B981" />

      {/* Callouts */}
      <text x="165" y="246" textAnchor="middle" fill="#FCD34D" fontSize="9.2" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        Avg MAE (-0.35R) · SL Tightening Opportunity
      </text>
      <text x="265" y="156" textAnchor="middle" fill="#FDE68A" fontSize="9" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
        Retail Early Exit (+1R Fear)
      </text>
      <text x="470" y="56" textAnchor="middle" fill="#6EE7B7" fontSize="9.5" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        Peak MFE (+4.0R Institutional Target)
      </text>

      <text x="320" y="294" textAnchor="middle" fill="#94A3B8" fontSize="9.2" fontFamily="Plus Jakarta Sans, sans-serif">
        Data Journaling Rule: Agar 80% winners ka MAE &lt; 0.4R hai, toh apna Stop Loss optimize kar ke RR double karein.
      </text>
    </svg>
  );
};
