export type DiagramId =
  | 'mod1-bos-idm'
  | 'mod1-sweep-choch'
  | 'mod2-fvg-ob'
  | 'mod2-breaker-ote'
  | 'mod3-po3-infographic'
  | 'mod4-intermarket-infographic'
  | 'mod5-mtfa-funnel'
  | 'mod6-drawdown-math'
  | 'mod7-mae-mfe';

export interface TableBlock {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface ModuleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  keyRules?: {
    title: string;
    items: string[];
  };
  callout?: {
    label: string;
    text: string;
  };
  diagram?: {
    id: DiagramId;
    figNumber: string;
    title: string;
    romanUrduCaption: string;
  };
  table?: TableBlock;
}

export interface CourseModule {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  readingTime: string;
  focusTags: string[];
  openingParagraph: string;
  marginNotes: {
    term: string;
    definition: string;
  }[];
  sections: ModuleSection[];
  hasExpectancyLab?: boolean;
  hasSopChecklist?: boolean;
}
