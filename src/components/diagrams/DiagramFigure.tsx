import React, { useState } from 'react';
import { DiagramId } from '../../types/ebook';
import { CustomTechnicalDiagram } from './CandlestickCharts';
import { BarChart3 } from 'lucide-react';
import po3InfographicImg from '../../assets/images/po3_amd_infographic_1794763287011.jpg';
import intermarketInfographicImg from '../../assets/images/intermarket_correlation_infographic_1794763287157.jpg';

interface DiagramFigureProps {
  id: DiagramId;
  figNumber: string;
  title: string;
  romanUrduCaption: string;
}

const INFOGRAPHIC_MAP: Partial<Record<DiagramId, { src: string; alt: string }>> = {
  'mod3-po3-infographic': {
    src: po3InfographicImg,
    alt: 'Power of Three (AMD: Accumulation, Manipulation, Distribution) Institutional Infographic',
  },
  'mod4-intermarket-infographic': {
    src: intermarketInfographicImg,
    alt: 'Intermarket Correlation Capital Flow from US10Y to DXY to EURUSD and Gold',
  },
};

export const DiagramFigure: React.FC<DiagramFigureProps> = ({
  id,
  figNumber,
  title,
  romanUrduCaption,
}) => {
  const [imgError, setImgError] = useState(false);
  const infographic = INFOGRAPHIC_MAP[id];

  return (
    <figure className="my-8 print-avoid-break">
      <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-2 text-xs text-stone-500 dark:text-slate-400 print:text-slate-600">
        <span className="font-mono font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 print:text-amber-800">
          {figNumber}
        </span>
        <span className="font-medium text-stone-700 dark:text-slate-300 print:text-slate-800">
          {title}
        </span>
      </div>

      {infographic ? (
        <div className="overflow-hidden rounded-lg border border-stone-200 bg-slate-950 dark:border-slate-800 print:border-slate-300">
          {!imgError ? (
            <img
              src={infographic.src}
              alt={infographic.alt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="aspect-video w-full object-cover"
            />
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 p-6 text-center text-slate-300">
              <BarChart3 className="h-8 w-8 text-amber-400" />
              <p className="font-display text-lg font-semibold text-slate-100">{title}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-stone-200 dark:border-slate-800 print:border-slate-300">
          <CustomTechnicalDiagram id={id} />
        </div>
      )}

      <figcaption className="mt-3 text-xs leading-relaxed text-stone-600 dark:text-slate-400 print:text-slate-700">
        <span className="font-semibold text-stone-800 dark:text-slate-200 print:text-slate-900">
          Roman Urdu Tashreeh:{' '}
        </span>
        {romanUrduCaption}
      </figcaption>
    </figure>
  );
};
