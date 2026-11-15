import { CourseModule } from '../types/ebook';

export const MODULES_PART_2: CourseModule[] = [
  {
    number: '04',
    id: 'module-4',
    title: 'Macro-Economics & Intermarket Analysis',
    subtitle: 'Central Bank Hawkish/Dovish Policy, US10Y & DXY, SMT Divergence, COT Report aur High-Impact News (CPI/NFP/FOMC)',
    readingTime: '15 min read',
    focusTags: ['Macro Policy', 'US10Y & DXY', 'SMT & COT'],
    openingParagraph:
      'Sirf candlestick patterns aur 1-minute Order Blocks dekh kar trade karna aisa hai jaise aap samandar ki lehron ko dekh kar chalaang laga dein lekin yeh na dekhein ke storm kis taraf se aa raha hai. Bare institutional funds (BlackRock, Citadel, Sovereign Wealth Funds) kabhi bhi 5-minute FVG dekh kar billions of dollars allocate nahi karte; woh Macro-Economic Narrative, Interest Rate Differentials, aur Bond Yields dekh kar apna multi-week bias banate hain. Jab aapka Technical POI aur Macro Narrative ek hi direction mein align hote hain, tab high-conviction home-run trades banti hain.',
    marginNotes: [
      {
        term: 'Hawkish vs Dovish',
        definition:
          'Hawkish Central Bank = inflation rokne ke liye Interest Rates badhana (Currency Strong). Dovish = growth support ke liye Rates ghatana (Currency Weak).',
      },
      {
        term: 'US10Y Lead Indicator',
        definition:
          'US 10-Year Treasury Yield aksar DXY se pehle move karta hai, kyunki global capital sab se pehle Bond Market mein re-price hota hai.',
      },
      {
        term: 'SMT Divergence',
        definition:
          'Smart Money Technique: Jab do correlated assets (e.g., EURUSD & GBPUSD ya DXY & EURUSD) mein se ek naya extreme banaye aur doosra fail ho jaye — institutional reversal ka saboot.',
      },
    ],
    sections: [
      {
        id: 'mod4-central-banks',
        heading: '4.1 Central Bank Policy: Hawkish vs Dovish Narrative aur Rate Differentials',
        paragraphs: [
          'Forex market ki asli engine kisi bhi mulk ka Central Bank (Federal Reserve, ECB, Bank of England, Bank of Japan) aur uski Monetary Policy hoti hai. Jab inflation target (aam taur par 2%) se zyada ho, toh Central Bank "Hawkish" stance ikhtiyar karta hai — yani interest rates ko high rakhta hai ya mazeed rate hikes ka ishara deta hai. High interest rates ki wajah se global investors apna paisa us currency ke bonds aur deposits mein shift karte hain, jisse us currency ki demand aur value tezi se badhti hai.',
          'Iske baraks, jab growth slow ho ya recession ka khatra ho aur inflation cool down ho rahi ho, toh Central Bank "Dovish" ho jata hai — yani Rate Cuts ya Quantitative Easing (QE) ki baat karta hai, jisse currency kamzor hoti hai. Institutional traders hamesha "Monetary Policy Divergence" par nazar rakhte hain: agar US Fed Hawkish ho aur ECB Dovish ho, toh EURUSD mein har bullish retracement sirf ek sell opportunity hoti hai. Aapko har week FOMC aur ECB governors ke speeches ka sirf ek word note karna hota hai: kya woh "Data-dependent / Higher for longer" (Hawkish) bol rahe hain ya "Disinflation / Easing cycle" (Dovish)?',
        ],
      },
      {
        id: 'mod4-us10y-dxy',
        heading: '4.2 Intermarket Chain Reaction: US10Y → DXY → EURUSD & Gold (XAUUSD)',
        paragraphs: [
          'Professional trading desk par kabhi bhi EURUSD ya Gold (XAUUSD) ka chart akela nahi dekha jata. Capital markets ek connected chain ki tarah kaam karti hain jis ke top par US 10-Year Treasury Yield (US10Y) baitha hota hai. Jab US inflation ya strong jobs data ki wajah se US10Y yields upar shoot karte hain, toh US Dollar ki yield attractiveness badh jati hai, jis se US Dollar Index (DXY) mein rally aati hai.',
          'Chunkay EURUSD mein USD quote currency hai aur Gold (XAUUSD) ek non-yielding asset hai jo USD mein price hota hai, jab US10Y aur DXY dono ek sath bullish displacement dikhayein, toh EURUSD aur Gold par severe bearish pressure aata hai. Khaas taur par Gold par "Real Yields" (Nominal US10Y minus Inflation Expectations) ka seedha asar hota hai: agar US10Y tezi se gir raha ho aur DXY bearish Order Block se reject ho raha ho, toh Gold mein explosive bullish expansion aati hai. Trade lene se pehle hamesha 30 seconds laga kar US10Y aur DXY ka Daily/4H structure zaroor verify karein.',
        ],
        diagram: {
          id: 'mod4-intermarket-infographic',
          figNumber: 'Fig 4.1',
          title: 'Intermarket Capital Flow: US10Y → DXY → EURUSD & Gold (XAUUSD)',
          romanUrduCaption:
            'US10Y Treasury Yields bond market mein capital flow tay karte hain, jo DXY (US Dollar Index) ko drive karta hai. DXY aur EURUSD/Gold ke darmiyan inverse correlation chalta hai — jab US10Y aur DXY upar jate hain toh EURUSD aur Gold par institutional selling pressure aata hai.',
        },
      },
      {
        id: 'mod4-smt-cot',
        heading: '4.3 SMT Divergence (Smart Money Technique) aur COT Report Positioning',
        paragraphs: [
          'Correlated pairs hamesha ek sath step-by-step chalte hain — jab tak ke Smart Money kisi ek pair mein manipulation na kar rahi ho! Isi crack in correlation ko SMT Divergence kehte hain. Farz karein DXY aur EURUSD inverse pairs hain. Agar DXY ek naya Higher High (sweep) banata hai, lekin ussi exact waqt EURUSD naya Lower Low banane mein fail ho jata hai (apne pichle low ke upar hold karta hai), toh yeh Bullish SMT Divergence hai EURUSD ke liye. Iska matlab hai ke institutional algorithms ne DXY mein upar buy-side liquidity sweep kar li hai aur EURUSD ko neeche girne se rok kar accumulate kar rahe hain. Isi tarah EURUSD aur GBPUSD mein agar EURUSD naya High banaye aur GBPUSD lower high banaye, toh Bearish SMT reversal signal active ho jata hai.',
          'Swing traders ke liye doosra bada institutional tool CFTC ka Commitment of Traders (COT) Report hai jo har Jumma (Friday) ko release hota hai. Is report mein aapko "Non-Commercials" (Large Hedge Funds / Speculators) aur "Commercials" (Banks & Hedgers) ki Net Long/Short contracts positioning milti hai. Jab Commercials extreme Long positioning par pahunch jayein aur price HTF Discount liquidity sweep kare, toh woh multi-week trend reversal ki shuruaat hoti hai.',
        ],
      },
      {
        id: 'mod4-news-protocol',
        heading: '4.4 High-Impact News Execution Protocol: CPI, NFP aur FOMC',
        paragraphs: [
          'Retail traders ke liye High-Impact Red Folder News (CPI, NFP, FOMC Rate Decision) ek gamble hota hai jahan unke dono taraf ke Stop Losses slippages mein ud jate hain. Institutional traders news ko "Liquidity Injection Event" ke taur par dekhte hain. Market already HTF POI par jane ke liye news ko ek catalyst (fuel) ke taur par use karti hai. Aapka golden rule yeh hona chahiye: News release se 15 minutes pehle koi nayi position open mat karein aur open trades ko ya toh partial secure karein ya unka SL spread spike se door rakhein.',
          'Asli institutional trade news release hone ke 5 se 15 minutes BAAD banti hai — jise "Post-News Manipulation Reversal" kehte hain. Aksar CPI ya NFP ke pehle 1–3 minutes mein ek sharp spike kisi HTF Liquidity Pool ya Daily High/Low ko sweep karta hai aur spreads normal hote hi (spread normalization) opposite direction mein ek Inversion FVG (IFVG) ya 1m/5m CHoCH deta hai. Agar news ki direction aur aapke HTF Macro Bias dono match kar jayein aur sweep ke baad clean FVG mile, tab enter karein. Agar spike dono taraf wicks maar kar chop banaye (khaas taur par FOMC Press Conference ke dauran), toh us din chart band kar dena sab se bari samajhdari hai.',
        ],
        table: {
          caption: 'Table 4.1 — High-Impact USD News Drivers & Institutional Reaction Playbook',
          headers: ['Event', 'Primary Metric Watched', 'Typical First-Minute Trap', 'Institutional Post-News Play'],
          rows: [
            ['US CPI (Inflation)', 'Core CPI m/m & y/y vs Forecast', 'Double-sided whip-saw sweeping both Asia/London H&L', 'Wait 15m for HTF POI tap + IFVG shift in US10Y direction'],
            ['NFP (Jobs Report)', 'Non-Farm Payrolls + Unemployment Rate + Avg Hourly Earnings', 'Initial spike opposite to Wage/Revision surprise', 'Trade NY 10:00 AM Silver Bullet continuation after spike clears IRL'],
            ['FOMC Decision', 'Dot Plot Projections & Powell Tone (Hawkish/Dovish)', '2:00 PM EST fake move; 2:30 PM Powell press conference reversal', 'Never enter before 2:45 PM EST; trade structural shift post-presser'],
          ],
        },
      },
    ],
  },
  {
    number: '05',
    id: 'module-5',
    title: 'Multi-Timeframe Analysis (MTFA) & Precision Execution',
    subtitle: 'Top-Down Narrative Funnel, Risk Entry vs Confirmation Entry, Safe Pyramiding at Break-Even, Partial Profits aur Rollover Spread Timing',
    readingTime: '14 min read',
    focusTags: ['Top-Down MTFA', 'Pyramiding', 'Execution Rules'],
    openingParagraph:
      'Aik trader ko Market Structure, Order Blocks aur Killzones sab kuch aata ho, phir bhi woh nuksan kar sakta hai agar uski Multi-Timeframe Alignment (MTFA) kharab ho. Sab se aam galti yeh hoti hai ke 1-minute chart par aik khoobsurat bullish CHoCH dekh kar buy le liya jata hai, jab ke 4-Hour aur Daily chart par market ek massive Bearish Order Block ke andar girne ke liye tayyar baithi hoti hai. MTFA aapko aik Top-Down Narrative deta hai jahan aapka har lower-timeframe click Higher-Timeframe Order Flow ke sath sync hota hai.',
    marginNotes: [
      {
        term: 'Fractal Alignment',
        definition:
          'Daily/4H sirf Direction aur Target (ERL) tay karta hai; 1H/15m POI aur Killzone setup deta hai; 5m/1m sirf Stop Loss chota karne ke liye hai.',
      },
      {
        term: 'Risk vs Confirmation',
        definition:
          'Risk Entry = Direct HTF POI par limit order. Confirmation Entry = HTF POI tap hone ke baad LTF par CHoCH + FVG dekh kar entry.',
      },
      {
        term: 'Rollover Danger Window',
        definition:
          'PKT 02:00 AM – 03:30 AM (NY 5:00 PM Close) par interbank liquidity dry hoti hai aur spreads 10x tak widen ho sakte hain.',
      },
    ],
    sections: [
      {
        id: 'mod5-topdown',
        heading: '5.1 The Top-Down MTFA Funnel: Daily/4H → 1H/15m → 5m/1m',
        paragraphs: [
          'Aapki analysis hamesha ek ultay pyramid (Funnel) ki tarah upar se neeche aani chahiye, kabhi neeche se upar nahi. Tier 1 (HTF Narrative — Daily & 4H): Har subah sirf 5 minutes lagayein aur dekhein ke Daily aur 4H par price kis Draw on Liquidity (ERL) ki taraf badh rahi hai aur kis HTF POI (FVG ya OB) se react kar chuki hai. HTF par aapka kaam sirf "Bias aur Target" set karna hai, yahan entries dhoondna nahi.',
          'Tier 2 (MTF Session Structure — 1H & 15m): Jab Daily/4H bias clear ho jaye (maslan Bullish), toh 1H aur 15m par aa kar dekhein ke kya price Discount zone mein kisi valid 15m Order Block ya FVG par aa rahi hai aur us se pehle koi Inducement (IDM) sweep hua hai ya nahi. Yahan aap apne alarms (alerts) set karte hain. Tier 3 (LTF Precision Execution — 5m & 1m): Jab alert bajay aur price 15m POI mein enter ho (aur waqt active London ya NY Killzone ka ho), sirf tab aap 5m ya 1m chart kholte hain. LTF par aapko naya analysis nahi karna, sirf apna confirmation trigger (CHoCH + FVG) dekh kar tight Stop Loss ke sath execution karni hai.',
        ],
        diagram: {
          id: 'mod5-mtfa-funnel',
          figNumber: 'Fig 5.1',
          title: 'Top-Down MTFA Funnel (Daily/4H -> 1H/15m -> 5m/1m LTF Entry)',
          romanUrduCaption:
            'Tier 1 (Daily/4H) se HTF Bias aur ERL Target milta hai. Tier 2 (1H/15m) par Killzone aur POI + IDM Sweep align hota hai. Tier 3 (5m/1m) sirf tight Stop Loss aur 1:5+ RR confirmation entry ke liye use hota hai.',
        },
      },
      {
        id: 'mod5-risk-vs-conf',
        heading: '5.2 Risk Entry vs Confirmation Entry: Kab Konsi Use Karein?',
        paragraphs: [
          'Risk Entry ka matlab hai ke aapne 15m ya 1H ke ek valid Order Block ya Breaker Block par direct Buy/Sell Limit order laga diya aur Stop Loss us POI ke peeche rakh diya. Risk Entry ka faida yeh hai ke aapko kabhi bhi fast move miss nahi hoti (no FOMO), lekin iska nuqsan yeh hai ke agar HTF order flow change ho raha ho toh aapka SL direct hit ho jata hai aur Stop Loss thoda bada hota hai. Risk Entry sirf tab use karein jab HTF trend behad clean ho, POI ke pehle IDM sweep ho chuka ho, aur aap heavy news se bahar hon.',
          'Confirmation Entry (LTF Refinement) institutional pros ki pasandeeda technique hai. Is mein aap pehle price ko apne 15m/1H POI ke andar aane dete hain. Jab price us POI ko tap kar ke react karti hai, toh aap 1m ya 5m chart par shift ho kar dekhte hain ke kya local structure ne Displacement aur FVG ke sath apna character change (CHoCH) kiya hai. Jab LTF CHoCH confirm ho jaye, tab aap us 1m/5m FVG ya OB se enter karte hain. Is se aapka Stop Loss 15–20 pips se simat kar sirf 4–7 pips par aa jata hai, aur wahi move jo Risk Entry par 1:3 RR deti, Confirmation Entry par 1:8 se 1:12 RR ban jati hai.',
        ],
      },
      {
        id: 'mod5-pyramiding-partials',
        heading: '5.3 Safe Pyramiding at Break-Even & Partial Profit Architecture',
        paragraphs: [
          'Aam traders jab winning trade mein hote hain toh ya toh dar se jaldi close kar dete hain, ya bina soche-samjhe random lots add karke apni average entry kharab kar lete hain. Institutional Pyramiding (Scaling-in) ek mathematical tareeqa hai jis se aap apna initial account risk badhaye baghair apna profit 2x ya 3x kar sakte hain. Golden Rule: Kabhi bhi second position tab tak add na karein jab tak aapki Trade #1 ka Stop Loss Break-Even (BE) par ya profit mein lock na ho chuka ho! Jab Trade #1 apne pehle structural BOS kar de aur uske peeche ek naya 5m/15m FVG ya Order Block bane, tab aap wahan Trade #2 open karte hain aur uska SL us naye LTF swing ke peeche rakhte hain. Is tarah agar market reverse bhi ho jaye, toh Trade #1 ka profit Trade #2 ke chote SL ko cover kar leta hai — aapka net account risk zero rehta hai.',
          'Partial Profits lene ka bhi ek rule hai, emotion nahi. Jab price 1:2 RR ya pehle major Internal High/Low (Liquidity Pool) par pahunche, toh 25% se 50% volume close karke cash register kar lein aur baaqi position ko apne HTF ERL target tak run hone dein. Lekin har trade par blindly Break-Even mat karein: jab tak price ek clear structure break (BOS) na kare ya minimum 1.5R move na de, SL ko entry par mat laayein warna normal retest mein hi aap stop-out ho jayenge.',
        ],
      },
      {
        id: 'mod5-rollover',
        heading: '5.4 Rollover Spread Timing aur Slippage Protection',
        paragraphs: [
          'Pakistani traders aksar raat ko sone se pehle apni swing positions ya tight Stop Loss orders open chhod dete hain aur subah uth kar hairan hote hain ke "price toh mere SL ke qareeb bhi nahi gayi, phir bhi mera Stop Loss kaise hit ho gaya?". Iski wajah New York 5:00 PM Daily Close (Rollover / Swap Window) hai, jo PKT ke mutabiq raat 02:00 AM se 03:30 AM (Summer) ya 03:00 AM se 04:30 AM (Winter) hoti hai.',
          'Is 60–90 minute ki window mein global interbank liquidity providers apni books settle aur reset karte hain. Market mein liquidity bilkul dry ho jati hai, jis ki wajah se EURUSD ka normal 0.2 pip spread achanak 8 se 15 pips tak, aur Gold ya GBPJPY ka spread 40 se 80 pips tak widen ho sakta hai. Chunkay Sell orders Ask price par close hote hain, wide spread aapke Stop Loss ko trigger kar deta hai bhale hi Bid chart par candle wahan na pahunchi ho. Institutional Rule: Rollover window mein kabhi nayi trade open na karein, aur agar swing trade hold karni ho toh ya toh partials le kar SL ko wide structure ke peeche rakhein ya intraday trade ko NY Close se pehle close karein.',
        ],
      },
    ],
  },
  {
    number: '06',
    id: 'module-6',
    title: 'Quantitative Risk Management & Prop Firms',
    subtitle: 'Expectancy Formula with Math Walkthrough, Dynamic Risk Sizing, Correlation Risk Trap aur Prop Firm Drawdown Strategy',
    readingTime: '15 min read',
    focusTags: ['Expectancy Math', 'Prop Firm Rules', 'Risk Sizing'],
    openingParagraph:
      'Aap duniya ke sab se behtareen chart analyst ban jayein, phir bhi agar aapko Risk Mathematics aur Drawdown Asymmetry par uboor nahi hai, toh aapka account aur Prop Firm challenges fail hona tay hai. Institutional hedge funds mein ek analyst aur ek risk manager alag hote hain — aur risk manager ko hamesha veto power hasil hoti hai. Is module mein hum emotions ko side par rakh kar trading ko khalis quantitative business math ki nazar se dekhenge.',
    marginNotes: [
      {
        term: 'Expectancy (E)',
        definition:
          'E = (Win% × Avg Win) - (Loss% × Avg Loss). Positive Expectancy hi long-term profitability ki wahid guarantee hai.',
      },
      {
        term: 'Correlation Risk Trap',
        definition:
          'EURUSD Buy, GBPUSD Buy, aur XAUUSD Buy ek sath lena 3 alag trades nahi, balkay ek hi USD Short trade par 3x over-leveraged bet hai.',
      },
      {
        term: 'Prop Firm Survival',
        definition:
          'Agar Max Daily Drawdown 5% hai, toh aapka daily max loss cap 1.5%–2% aur per-trade risk 0.25%–0.50% hona chahiye.',
      },
    ],
    sections: [
      {
        id: 'mod6-expectancy',
        heading: '6.1 The Expectancy Formula: Winning Rate vs Risk-to-Reward Math',
        paragraphs: [
          'Naye aur intermediate traders hamesha "90% Win-Rate Strategy" ke peeche bhagte hain, jab ke professional quants sirf ek number par focus karte hain: Positive Expectancy. Expectancy batati hai ke har $1 jo aap risk karte hain, us par over 100 trades aapko average kitna return milta hai. Formula behad sada hai: Expectancy (E) = (Win Rate × Average Win in R) − (Loss Rate × Average Loss in R).',
          'Chaliye aik real numerical example solve karte hain. Farz karein Trader A ka Win Rate sirf 40% hai (yani woh 10 mein se 6 trades harta hai!), lekin uska Average Winner 1:3.5 RR par hota hai aur Average Loser 1R par. Formula lagayein: E = (0.40 × 3.5) − (0.60 × 1.0) = 1.40 − 0.60 = +0.80R per trade! Agar Trader A $100,000 ke account par 0.5% ($500) per trade risk kare aur mahine mein sirf 20 trades le, toh uski expected monthly earning = 20 × 0.80 × $500 = +$8,000 (+8%) hogi — sirf 40% win rate ke sath!',
          'Ab Trader B ko dekhein jis ka Win Rate 70% hai, lekin woh FOMO aur dar ki wajah se +0.4R par profit book karta hai aur loss ko -1.2R tak jane deta hai: E = (0.70 × 0.4) − (0.30 × 1.2) = 0.28 − 0.36 = -0.08R. High win rate ke bawajood Trader B mathematically bankrupt hone ki taraf ja raha hai. Is module ke neeche diye gaye Interactive Expectancy Simulator mein aap apne khud ke numbers daal kar apni edge check kar sakte hain.',
        ],
      },
      {
        id: 'mod6-drawdown-recovery',
        heading: '6.2 Drawdown Recovery Asymmetry & Dynamic Risk Sizing',
        paragraphs: [
          'Trading mein losses linear nahi, exponential hote hain. Agar aapka $100,000 ka account 10% loss kar ke $90,000 par aa jaye, toh wapas $100,000 par jaane ke liye aapko 10% nahi, balkay 11.1% gain chahiye. Agar loss 50% ho jaye ($50,000 remaining), toh wapas break-even par aane ke liye aapko apna poora account +100% double karna padega! Aur agar 75% account ud jaye, toh recovery ke liye +300% return chahiye hota hai — jo almost namumkin ho jata hai.',
          'Is mathematical trap se bachne ke liye institutional desks "Dynamic Risk Sizing" (Anti-Martingale Scaling) use karte hain. Jab aap normal equity high par hon, toh per-trade risk 0.5% (ya personal account par 1%) rakhein. Jaise hi aapka account 3% drawdown mein jaye (maslan 6 consecutive 0.5% losses), toh gusse mein lot size double karne (Martingale) ke bajaye apna risk aadha kar ke 0.25% par le aayein. Jab tak aap dobara winning rhythm mein aa kar apna drawdown recover na karein, risk 0.25% par rakhein. Is se aapki losing streak mein equity curve flat rehti hai aur aap kabhi blow-up nahi hote.',
        ],
        diagram: {
          id: 'mod6-drawdown-math',
          figNumber: 'Fig 6.1',
          title: 'Drawdown Recovery Math Bar Chart (-10% to -75% Loss vs Required Gain)',
          romanUrduCaption:
            'Account loss badhne ke sath Break-Even par wapas aane ke liye zaroori gain exponentially shoot karta hai. -50% drawdown par +100% aur -75% drawdown par +300% return chahiye hota hai — is liye Prop Firm mein 5% drawdown cross hone se pehle risk half karna zaroori hai.',
        },
      },
      {
        id: 'mod6-correlation-prop',
        heading: '6.3 The Correlation Risk Trap & Prop Firm Drawdown Survival Strategy',
        paragraphs: [
          'Prop Firm challenges (FTMO, FundedNext, The5ers, etc.) fail karne ki do sab se badi wajoohaat hain: pehli "Correlation Risk Trap" aur doosri "Trailing/Daily Drawdown Violation". Correlation Trap tab hota hai jab aik trader 0.5% risk par EURUSD Buy, 0.5% par GBPUSD Buy, aur 0.5% par XAUUSD Buy ek hi waqt mein open kar leta hai, yeh soch kar ke usne sirf 0.5% risk liya hai. Haqeeqat mein yeh teeno pairs USD ke khilaf move karte hain — agar US Dollar Index (DXY) achanak spike kar gaya, toh teeno trades ek hi minute mein Stop Loss hit karengi aur aapko ek sath 1.5% se 2% ka jhatka lagega. Rule: Ek hi currency theme (maslan USD Long ya USD Short) par total combined open risk kabhi bhi aapke single-trade max risk se double na ho; behtar hai ek waqt mein sab se clean single pair choose karein.',
          'Prop Firm Survival Math samjhein: Ek $100,000 Prop account par Max Overall Drawdown 10% ($10,000) aur Max Daily Drawdown 5% ($5,000) hota hai. Haqeeqat mein aapka asli trading capital $100,000 nahi, balkay sirf woh $10,000 Drawdown Buffer hai! Agar aap us $10,000 buffer par 1% ($1,000) risk le rahe hain, toh aap darasal apne asli available capital ka 10% risk per trade le rahe hain — sirf 5 ghalat trades aapko daily limit par breach kar dengi. Is liye Prop Firms par 0.25% ($250) se maximum 0.50% ($500) risk per trade rakhein, jis se aapko 20 se 40 trades ka cushion milta hai. Trailing Drawdown firms mein kabhi bhi unrealized profit ko bina partial book kiye full reverse na hone dein, kyunki peak unrealized equity se hi aapka trailing floor upar khinch jata hai.',
        ],
        table: {
          caption: 'Table 6.1 — Prop Firm Account Risk Allocation Blueprint ($100,000 Account / 10% Max DD)',
          headers: ['Phase / Account State', 'Risk Per Trade', 'Max Daily Loss Cap', 'Losing Trades to Daily Cap', 'Objective'],
          rows: [
            ['Evaluation Phase 1 (Normal)', '0.50% ($500)', '1.50% ($1,500)', '3 Consecutive Losses', 'Steady 8% target without emotional stress'],
            ['Drawdown Defense (>3% DD)', '0.25% ($250)', '0.75% ($750)', '3 Consecutive Losses', 'Preserve buffer & wait for A+ Killzone setups'],
            ['Funded Payout Account', '0.25% – 0.35%', '1.00% ($1,000)', '3–4 Losses', 'Consistent bi-weekly payouts & zero breach risk'],
          ],
        },
      },
    ],
    hasExpectancyLab: true,
  },
  {
    number: '07',
    id: 'module-7',
    title: 'Advanced Psychology, Data Journaling & Final SOP',
    subtitle: 'FOMO, Revenge Trading, Disposition Effect, MAE/MFE Optimization, 100-Trade Backtest Rule aur Final 7-Point SOP Checklist',
    readingTime: '14 min read',
    focusTags: ['Trading Psychology', 'MAE / MFE Data', '7-Point SOP'],
    openingParagraph:
      'Har trader ka ek aisa daur aata hai jab woh charts par sab kuch sahi predict kar raha hota hai, lekin uska account balance phir bhi nahi badhta. Iska sabab technical knowledge ki kami nahi, balkay Behavioral Biases aur Data Journaling ki gair-maujoodgi hota hai. Insani dimagh trading ke liye design nahi hua; woh khatre se bhaagne (loss aversion) aur instant reward (dopamine) ke liye bana hai. Is aakhri module mein hum psychology ko motivational baaton se nahi, balkay quantitative data (MAE/MFE) aur ek unbreakable 7-Point SOP Checklist se control karna seekhenge.',
    marginNotes: [
      {
        term: 'Disposition Effect',
        definition:
          'Winning trades ko dar ki wajah se jaldi close kar dena, lekin losing trades ko "wapas aa jayegi" ki umeed par hold rakhna ya SL hatana.',
      },
      {
        term: 'MAE & MFE',
        definition:
          'MAE = Entry ke baad trade kitni negative gayi; MFE = Close karne se pehle trade kitni maximum profit mein gayi thi.',
      },
      {
        term: '100-Trade Rule',
        definition:
          'Kisi bhi strategy ko real capital par judge karne se pehle kam az kam 100 backtested + logged trades ka sample size zaroori hai.',
      },
    ],
    sections: [
      {
        id: 'mod7-biases',
        heading: '7.1 FOMO, Revenge Trading aur The Disposition Effect Ko Todna',
        paragraphs: [
          'FOMO (Fear of Missing Out) tab paida hota hai jab aap dekhte hain ke ek bada move aapke POI ko miss kar ke upar nikal gaya, aur aap chalti hui train ke beech mein — Premium pricing par — buy button daba dete hain. Is ka ilaj sirf ek mindset shift hai: "Market roz khulti hai, aur har Killzone mein ek nayi liquidity cycle banti hai. Ek chhuta hua setup mera nuqsan nahi hai; ek forced low-quality setup mera nuqsan hai."',
          'Revenge Trading tab shuru hoti hai jab aapka Stop Loss hit hota hai aur aapki ego usay accept nahi karti. Aap foran 2x lot size ke sath usi pair mein opposite ya same direction mein ghuste hain taake "abhi ke abhi recover kar loon". Iska hard institutional rule: Agar kisi session mein aapke 2 consecutive Stop Losses hit ho jayein, toh platform par 24-hour lockout lagayein. Disposition Effect — yani winners ko +0.8R par fear se kaat dena aur losers ka SL peeche khiskana — aapki Expectancy ko tabah kar deta hai. Jab trade open ho jaye, toh aapka kaam chart ko ghoorna nahi, balkay "Set and Forget" ya pre-planned partial rules par amal karna hai.',
        ],
      },
      {
        id: 'mod7-mae-mfe',
        heading: '7.2 MAE & MFE Optimization: Apne Data Se Strategy Ko Sharp Banana',
        paragraphs: [
          'Aam trading journals mein log sirf "Win / Loss" aur "Profit $" likhte hain — is se aapko apni strategy improve karne ka koi raasta nahi milta. Institutional quants har trade ke do metrics zaroor record karte hain: MAE (Maximum Adverse Excursion) aur MFE (Maximum Favorable Excursion). MAE batata hai ke entry lene ke baad aapki trade max kitna negative (drawdown) gayi thi TP hit karne se pehle. MFE batata hai ke trade close hone se pehle ya reverse hone se pehle max kitne R-multiple profit tak pahunchi thi.',
          'Misal samjhein: Aapne apni pichli 50 winning trades ka MAE audit kiya aur dekha ke 85% winners entry ke baad kabhi bhi -0.4R se neeche gaye hi nahi! Iska matlab aap apna Stop Loss zaroorat se zyada bada (1.0R) rakh rahe hain. Agar aap apna SL refine kar ke half kar dein, toh aapka wahi 1:3 RR setup automatically 1:6 RR ban jayega! Isi tarah, agar aapka MFE data dikhaye ke aapki trades aksar +4.0R tak jati hain lekin aap fear ki wajah se +1.5R par full close kar rahe hain, toh data aapko saboot dega ke partial profits + trailing stops se aap apna annual return double kar sakte hain.',
        ],
        diagram: {
          id: 'mod7-mae-mfe',
          figNumber: 'Fig 7.1',
          title: 'MAE (Maximum Adverse Excursion) vs MFE (Maximum Favorable Excursion) Chart',
          romanUrduCaption:
            'Blue equity curve dikhati hai ke trade entry (0R) ke baad sirf -0.35R MAE tak gayi aur SL (-1.0R) ke qareeb bhi nahi gayi, phir +4.0R Peak MFE tak pahunchi. Retail fear (+1.0R exit) aur unoptimized SL ko data journaling se theek kiya jata hai.',
        },
      },
      {
        id: 'mod7-backtest',
        heading: '7.3 The 100-Trade Backtest Rule: Emotional Conviction Ka Saboot',
        paragraphs: [
          'Koi bhi strategy live market mein 3 ya 4 trades dekh kar nahi seekhi ja sakti. Jab ek trader bina sample size ke live paisa lagata hai, toh pehli 2 losses par hi uska confidence toot jata hai aur woh nayi strategy dhoondne lagta hai ("Strategy Hopping"). Is loop ko todne ka wahid hal "100-Trade Backtest Rule" hai.',
          'Apne chosen pair (maslan EURUSD ya XAUUSD) par pichle 6–12 mahine ka replay data kholein, sirf apni specific Killzone window aur specific POI model (jaise NY Silver Bullet ya 15m OB + 1m CHoCH) ko test karein, aur har ek trade ke MAE, MFE, Session, aur Screenshot ko log karein. Jab aap apni aankhon se 100 trades ka data dekh kar jaan lenge ke aapki strategy ki maximum losing streak 5 trades ki hai aur overall Expectancy +0.65R hai, tab live market mein 2 losses aane par aapko bilkul ghabrahat nahi hogi. Conviction motivational videos se nahi, apni aankhon se dekhe hue 100 trades ke data se aati hai.',
        ],
      },
      {
        id: 'mod7-sop',
        heading: '7.4 The Final 7-Point Institutional SOP Checklist',
        paragraphs: [
          'Commercial airline pilots hazaron ghante udane ke bawajood har flight se pehle ek written checklist padhte hain — kyunki high-stakes environment mein memory par bharosa nahi kiya jata. Trading bhi bilkul waisi hi hai. Jab tak neeche diye gaye 7 points mein se har ek point par "YES" tick na ho, tab tak aapka finger mouse ke Buy/Sell button par nahi jana chahiye. Is interactive checklist ko apni har live session execution se pehle verify karein.',
        ],
      },
    ],
    hasSopChecklist: true,
  },
];
