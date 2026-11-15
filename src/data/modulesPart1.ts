import { CourseModule } from '../types/ebook';

export const MODULES_PART_1: CourseModule[] = [
  {
    number: '01',
    id: 'module-1',
    title: 'Advanced Market Structure & Liquidity Engineering',
    subtitle: 'Inducement (IDM), IRL vs ERL, EQH/EQL, Trendline Liquidity aur Sweep vs CHoCH ka Institutional Blueprint',
    readingTime: '14 min read',
    focusTags: ['Market Structure', 'Liquidity Engineering', 'Order Flow'],
    openingParagraph:
      'Institutional trading mein sab se pehla aur sab se bara sach yeh hai ke market support ya resistance dekh kar nahi chalti, balkay Liquidity ki taraf magnet ki tarah khinchi chali aati hai. Retail traders jis cheez ko "clean breakout" ya "strong support" samajh kar buy ya sell karte hain, Smart Money aur Interbank Liquidity Algorithms (IPDA) ke liye woh sirf resting Stop Losses ka ek pool hota hai jahan se woh apne massive institutional orders fill karte hain. Jab tak aap yeh nahi samjhenge ke chart par konsa swing high ya low asli hai aur konsa sirf ek Inducement (IDM) trap hai, tab tak aapka har Break of Structure (BOS) analysis adhoora rahega.',
    marginNotes: [
      {
        term: 'Inducement (IDM)',
        definition:
          'Major swing ke andar pehla valid internal pullback jo early buyers/sellers ko invite karne aur unke Stop Losses collect karne ke liye banaya jata hai.',
      },
      {
        term: 'IRL vs ERL',
        definition:
          'Price hamesha do states mein travel karti hai: Internal Range Liquidity (FVG/OB) se External Range Liquidity (Swing High/Low) ki taraf, aur wapas.',
      },
      {
        term: 'Sweep vs CHoCH',
        definition:
          'Wick rejection sirf Stop Hunt (Sweep) hai; asli trend shift ke liye strong Candle Body Close aur Displacement zaroori hai.',
      },
    ],
    sections: [
      {
        id: 'mod1-idm',
        heading: '1.1 Inducement (IDM): Real BOS aur Fake BOS Ka Farq',
        paragraphs: [
          'Ziyada tar Smart Money Concepts (SMC) seekhne wale traders aik common galti karte hain: woh chart par har minor high ya low ke tootne ko Break of Structure (BOS) mark kar lete hain. Iska nateeja yeh nikalta hai ke woh har pullback par aggressive entries lete hain aur har baar unka Stop Loss (SL) hit hota hai. Institutional rules ke mutabiq, aik Bullish trend mein Higher High (HH) sirf tab confirm hota hai jab price pehle apna sab se qareebi internal pullback — jise hum Inducement (IDM) kehte hain — sweep kare.',
          'Farz karein EURUSD ek bullish expansion ke baad neeche pull back karta hai aur ek chota sa Higher Low banata hai, phir wahan se upar ja kar pichle high ke qareeb ruk jata hai ya aik minor internal high todta hai. Retail traders us minor high ke break ko "Real BOS" samajh kar uske neeche wale Order Block se buy karne lagte hain aur apna SL us minor low ke neeche rakh dete hain. Lekin chunkay major swing ka pehla valid Inducement (IDM) abhi tak sweep nahi hua tha, Smart Money price ko neeche gira kar un tamam retail buyers ke SL hunt karti hai. Jab price us IDM ko sweep karke Extreme Discount Order Block mein tap karti hai aur phir displacement ke sath pichle Major High ke upar candle body close karti hai, tab ja kar asli BOS confirm hota hai.',
          'Agar kisi leg mein IDM sweep hue baghair hi price naya high bana de aur close kar de, toh woh move aksar Fake BOS Trap sabit hoti hai ya phir woh naya high khud next manipulation leg ka target ban jata hai. Hamesha yaad rakhein: "No Inducement Sweep, No Confirmed Swing High/Low."',
        ],
        diagram: {
          id: 'mod1-bos-idm',
          figNumber: 'Fig 1.1',
          title: 'Real BOS after Inducement (IDM) Sweep vs Fake BOS Trap',
          romanUrduCaption:
            'Baayein (Left) taraf retail traders untouched IDM ke upar Fake BOS par buy karke trap hote hain. Daayein (Right) taraf pehle IDM sweep hota hai, Discount OB tap hota hai, aur phir full candle body close ke sath Real BOS confirm hota hai.',
        },
      },
      {
        id: 'mod1-irl-erl',
        heading: '1.2 Internal Range Liquidity (IRL) vs External Range Liquidity (ERL)',
        paragraphs: [
          'Interbank Price Delivery Algorithm (IPDA) kabhi bhi random tareeqay se move nahi karta. Har waqt price do hi maqasad mein se ek pura kar rahi hoti hai: ya toh woh External Range Liquidity (ERL) ko hunt karne ja rahi hoti hai, ya phir woh Internal Range Liquidity (IRL) ko rebalance karne wapas aa rahi hoti hai. ERL se murad kisi bhi dealing range ke bahar maujood Old Swing Highs (Buy-Side Liquidity / BSL) aur Old Swing Lows (Sell-Side Liquidity / SSL) hote hain. Doosri taraf, IRL se murad ussi dealing range ke andar maujood Fair Value Gaps (FVG), Volume Imbalances, aur unmitigated Order Blocks hote hain.',
          'Is concept ki taqat aapki Trade Direction (Draw on Liquidity) tay karne mein hai. Jab market kisi 4H ya Daily timeframe par ek major ERL (maslan pichle haftay ka High) sweep kar leti hai aur wahan se reverse hoti hai, toh uska agla target automatically us range ke andar maujood IRL (yani 4H Fair Value Gap) ban jata hai. Isi tarah, jab price 4H ke FVG (IRL) ko tap karke displacement deti hai, toh ab institutional target agla opposite ERL (Old High ya Old Low) hota hai. Agar aap is IRL -> ERL -> IRL cycle ko master kar lein, toh aapko kabhi yeh confusion nahi hogi ke price kahan tak jayegi aur kahan se turn legi.',
        ],
        keyRules: {
          title: 'IRL ↔ ERL Narrative Execution Rules',
          items: [
            'Agar price ne abhi-abhi HTF ERL (Old High/Low) sweep kiya hai aur body close wapas range ke andar hua hai, toh immediate target usi range ka sab se qareebi IRL (FVG) hoga.',
            'Agar price HTF IRL (FVG/OB) mein tap kar chuki hai aur LTF par structure shift de rahi hai, toh Hold Target agla unmitigated ERL (Swing High/Low) set karein.',
            'Kabhi bhi IRL ke beech mein (equilibrium par) trade execute na karein; hamesha range ke extreme edges par liquidity event ka intezar karein.',
          ],
        },
      },
      {
        id: 'mod1-eqh-trendline',
        heading: '1.3 Equal Highs (EQH), Equal Lows (EQL) aur Trendline Liquidity Engineering',
        paragraphs: [
          'Retail technical analysis ki sab se mashhoor kitaabein sikhate hain ke jab price ek hi level se 2 ya 3 baar takra kar neeche gire toh woh "Strong Resistance" ya "Double Top" ban jata hai, aur jab ek diagonal line par 3 touches milein toh woh "Strong Trendline Support" hoti hai. Institutional desk par inhi patterns ko "Engineered Liquidity" kaha jata hai. Jab millions of retail traders ek hi Equal Highs (EQH) par sell limit lagate hain ya Equal Lows (EQL) ke bilkul neeche Stop Loss rakhte hain, toh wahan ek massive Stop Order pool jama ho jata hai.',
          'Banks aur Hedge Funds ko apni badi positions fill karne ke liye counter-party orders chahiye hote hain. Agar aik bank ko $500 Million ki sell position open karni hai, toh usay samne $500 Million ke buyers chahiye. Woh buyers kahan milenge? Bilkul EQH ke upar, jahan retail breakout buyers ke Buy Stop orders aur short-sellers ke Buy-to-Close Stop Losses pade hain! Isi wajah se aap aksar dekhte hain ke clean Double Bottom (EQL) ya 4-touch Trendline Support bina kisi reham ke ek hi sharp bearish candle se tod di jati hai — aur retail traders ke stops udane ke baad market foran asli direction mein shoot kar jati hai.',
          'Rule of thumb yeh hai: jab bhi aapko chart par behad saaf-suthra Equal High, Equal Low, ya textbook Trendline nazar aaye, toh usay support/resistance samajh kar trade mat karein — usay apna Take Profit (TP) magnet samjhein ya uske sweep hone ke baad opposite side par entry talaash karein.',
        ],
      },
      {
        id: 'mod1-sweep-choch',
        heading: '1.4 Liquidity Sweep vs True CHoCH: Wick Rejection aur Body Close Ka Qanoon',
        paragraphs: [
          'Live trading mein sab se zyada nuksan tab hota hai jab trader aik simple Liquidity Sweep ko Change of Character (CHoCH) samajh kar counter-trend entry le leta hai. In dono ke darmiyan farq samajhna aapke win-rate ko 35% se 65%+ tak le ja sakta hai. Liquidity Sweep ek temporary Stop Hunt hota hai: price pichle swing high ya low ke paar sirf apni Wick nikalti hai, wahan maujood resting stops ko absorb karti hai, aur candle closing ke waqt wapas range ke andar aa kar close hoti hai. Is mein koi institutional commitment ya trend change nahi hota; balkay yeh is baat ka saboot hai ke market wapas opposite side liquidity ki taraf jane wali hai.',
          'Doosri taraf, True Change of Character (CHoCH) — jise ICT methodology mein Market Structure Shift (MSS) bhi kehte hain — tab valid hota hai jab do shartein ek sath puri hon: Pehli shart yeh ke candle ki solid Body (sirf wick nahi) pichle key Lower High (downtrend mein) ya Higher Low (uptrend mein) ke paar Close ho. Doosri shart yeh ke is break ke dauran Displacement nazar aaye — yani bari, energetic body candles jin mein opposite wicks kam hon aur peeche ek saaf Fair Value Gap (FVG) chhod kar jayein. Agar slow, overlapping candles se break ho aur koi FVG na bane, toh usay "Low-Quality Break" samjhein aur trade skip karein.',
        ],
        diagram: {
          id: 'mod1-sweep-choch',
          figNumber: 'Fig 1.2',
          title: 'Liquidity Sweep (Wick Rejection) vs True CHoCH (Body Close + Displacement)',
          romanUrduCaption:
            'Baayein panel mein price BSL ke upar sirf wick nikal kar neeche close hoti hai — yeh Liquidity Sweep hai (Bearish continuation). Daayein panel mein energetic candle full body ke sath Key LH ke upar close hoti hai aur FVG banati hai — yeh True CHoCH hai.',
        },
        callout: {
          label: 'Institutional Desk Filter',
          text: 'Agar koi candle pichle high ke upar close ho bhi jaye, lekin next candle foran poori body ke sath wapas range ke andar close ho jaye, toh usay "2-Candle Liquidity Sweep" kehte hain. Is liye confirmation entry mein hamesha displacement aur FVG creation ka saboot lazmi dekhein.',
        },
      },
    ],
  },
  {
    number: '02',
    id: 'module-2',
    title: 'Institutional Order Flow & Points of Interest (POIs)',
    subtitle: 'Valid Order Block ke 3 Qanoon, Fair Value Gap (FVG), Inversion FVG (IFVG), Breaker Blocks aur OTE Zone',
    readingTime: '15 min read',
    focusTags: ['Order Blocks', 'FVG & IFVG', 'OTE Fibonacci'],
    openingParagraph:
      'Chart par har opposite candle Order Block (OB) nahi hoti. YouTube aur social media par retail traders har aakhri red ya green candle ko box bana kar mark kar dete hain, aur phir shikayat karte hain ke "mera Order Block fail ho gaya". Haqeeqat yeh hai ke institutional sponsorship sirf unhi candles mein hoti hai jahan se algorithmic re-pricing shuru hui ho. Is module mein hum seekhenge ke High-Probability Points of Interest (POIs) ko low-probability traps se filter kaise kiya jata hai.',
    marginNotes: [
      {
        term: '3 Rules of Valid OB',
        definition:
          'Ek valid OB ke liye zaroori hai: (1) Liquidity Sweep kiya ho, (2) Displacement + FVG banaya ho, aur (3) Market Structure Break (BOS/CHoCH) kiya ho.',
      },
      {
        term: 'Inversion FVG (IFVG)',
        definition:
          'Jab ek Fair Value Gap respect hone ke bajaye full body close se violate ho jaye, toh woh opposite direction ke liye strong support/resistance ban jata hai.',
      },
      {
        term: 'Mean Threshold (50%)',
        definition:
          'Har Order Block ya FVG ka exact 50% midpoint (Consequent Encroachment) sab se sensitive institutional mitigation level hota hai.',
      },
    ],
    sections: [
      {
        id: 'mod2-valid-ob',
        heading: '2.1 Valid Order Block (OB) Ke 3 Lazmi Qanoon',
        paragraphs: [
          'Order Block darasal woh specific candle ya candles ka group hota hai jahan Smart Money ne apni initial counter-trend buying ya selling ki hoti hai taake woh opposite side se liquidity sweep kar sakein, aur uske foran baad price ko aggressively asli direction mein drive kiya jata hai. Bullish Order Block woh aakhri down-close (bearish) candle hoti hai jo expansion upar jane se pehle banti hai; Bearish Order Block woh aakhri up-close (bullish) candle hoti hai jo drop se pehle banti hai.',
          'Lekin har aakhri opposite candle par trade lena khudkushi hai. Institutional validation ke liye aapke Order Block ko 3 sakht shartein puri karni hongi: (1) Liquidity Sweep: Us Order Block ki candle (ya uske sath wali candle) ne kisi purane swing high/low ya Inducement ko sweep kiya ho. Agar usne koi liquidity nahi uthayi, toh woh khud liquidity ban kar sweep ho jayega. (2) Imbalance / FVG Creation: Us OB ke foran baad aane wali candles mein itni taqat (Displacement) honi chahiye ke woh Fair Value Gap (FVG) chhod kar jayein. FVG is baat ki mohar hai ke wahan banks ka heavy volume inject hua hai. (3) Structure Break: Us move ne kam az kam ek valid short-term ya major structure (BOS ya CHoCH) break kiya ho.',
          'Jab yeh teeno cheezein ek sath maujood hon, toh us Order Block ka Open, High/Low, aur uska 50% Mean Threshold mark karein. Institutional rule yeh hai ke agar price wapas aa kar OB ke 50% Mean Threshold ke paar body close kar de, toh woh Order Block invalid ho jata hai.',
        ],
      },
      {
        id: 'mod2-fvg-ifvg',
        heading: '2.2 Fair Value Gap (FVG) aur Inversion FVG (IFVG) Mastery',
        paragraphs: [
          'Fair Value Gap (FVG) ek 3-candle price delivery inefficiency hoti hai. Bullish FVG tab banta hai jab Candle 1 ka High aur Candle 3 ka Low aapas mein overlap na karein, aur darmiyan wali Candle 2 (Displacement Candle) ki body akeli us khali space ko cover kare. Is space mein sirf Buy-Side delivery hui hoti hai aur Sell-Side liquidity offer nahi hui hoti. Chunkay market hamesha efficiency aur balance ki talash mein rehti hai, price aksar wapas is gap mein aati hai taake pending institutional limit orders fill kiye ja sakein.',
          'Lekin advanced traders sirf standard FVG par nahi rukte; woh Inversion Fair Value Gap (IFVG) ka istemal karte hain. Sochiye ke ek Bullish FVG bana aur price wapas us mein aayi — lekin upar bounce karne ke bajaye aik strong bearish candle ne us Bullish FVG ke neeche full body close kar diya! Yeh failure ek naya signal deta hai: institutional algorithm ne buy-side imbalance ko reject kar ke sell-side delivery switch kar li hai. Ab wahi tootne wala Bullish FVG ek Bearish Inversion FVG (IFVG) mein tabdeel ho chuka hai. Jab price wapas neeche se is violated FVG zone ko retest karti hai, toh wahan se sharp bearish continuation milta hai — khaas taur par New York session aur News reversals mein IFVG sab se tez entry model sabit hota hai.',
        ],
        diagram: {
          id: 'mod2-fvg-ob',
          figNumber: 'Fig 2.1',
          title: 'Bullish 3-Candle Fair Value Gap (FVG) & Valid Order Block (OB)',
          romanUrduCaption:
            'Candle OB pichli Sell-Side Liquidity sweep karti hai. Phir Candle 1, Candle 2 (Displacement), aur Candle 3 ke darmiyan C1 High se C3 Low tak 3-Candle FVG banta hai aur upar BOS hota hai. Price wapas FVG + OB ke 50% Mean Threshold par tap karke rally continue karti hai.',
        },
      },
      {
        id: 'mod2-breaker',
        heading: '2.3 Breaker Blocks: Jab Failed Order Block Goldmine Ban Jata Hai',
        paragraphs: [
          'Breaker Block institutional price action ka sab se lethal reversal aur continuation pattern hai. Yeh tab banta hai jab pehle ek liquidity sweep ho aur uske baad ek Order Block poori tarah fail ho kar break ho jaye. Misal ke taur par Bearish Breaker Block ko samjhein: Price ek Swing Low banati hai, phir upar ja kar ek purane High ko sweep karti hai (BSL Sweep). Beech mein jo aakhri Bullish up-close candle hoti hai — jise aam traders Bullish Order Block samajh rahe hote hain — price tezi se neeche aa kar us candle aur pichle Swing Low dono ko tod deti hai (Market Structure Shift).',
          'Ab us failed Bullish candle par kya hua? Jinhon ne wahan buy kiya tha unke positions ab drawdown (loss) mein phans chuke hain, aur banks ne apni short positions wahan build ki thin. Jab price wapas upar retracement ke liye aati hai, toh woh exact failed Bullish candle ab Bearish Breaker Block ban kar resistance ka kaam karti hai. Phanse hue buyers jaise hi apna loss Break-Even par close karte hain aur institutions apni remaining sell orders add karte hain, market wahan se tezi se girna shuru kar deti hai. Breaker Block ka sab se bara faida yeh hai ke aapko bilkul Swing Extreme tak wait nahi karna parta; price aksar Breaker se hi turn ho jati hai.',
        ],
      },
      {
        id: 'mod2-premium-discount',
        heading: '2.4 Premium vs Discount Pricing & Optimal Trade Entry (OTE 0.618–0.786)',
        paragraphs: [
          'Duniya ka koi bhi smart business mehnge daam par maal khareed kar saste daam par nahi bechta, lekin 90% retail traders charts par bilkul yahi karte hain. Jab aik strong bullish impulse ke baad market 50% se upar hoti hai, toh woh area "Premium Zone" kehlata hai — yahan buying karna mehnge daam par khareedne ke barabar hai. Jab aap apni Fibonacci tool ko kisi valid Dealing Range ke Swing Low se Swing High tak draw karte hain, toh 0.50 (50% Equilibrium) line market ko do hisson mein baant deti hai: 50% se neeche Discount Zone (sirf Buy setups ke liye), aur 50% se upar Premium Zone (sirf Sell setups ke liye).',
          'Is ke andar ek micro precision window hoti hai jise Optimal Trade Entry (OTE) kehte hain, jo 0.618, 0.705, aur 0.786 Fibonacci retracement levels ke darmiyan hoti hai. Jab Bearish trend mein ek Breaker Block ya Valid Bearish Order Block exact 0.618 se 0.786 OTE zone ke andar align ho jaye (yani Premium pricing mein ho), toh is confluence ki probability 70%+ tak pahunch jati hai. Is tareeqay se aap apna Stop Loss swing extreme (1.00 level) ke bilkul bahar chota rakh sakte hain aur Risk-to-Reward ratio aasani se 1:4 se 1:8 tak hasil kar sakte hain.',
        ],
        diagram: {
          id: 'mod2-breaker-ote',
          figNumber: 'Fig 2.2',
          title: 'Bearish Breaker Block Setup & Premium / Discount 50% Fib + OTE Zone',
          romanUrduCaption:
            'Swing High se Swing Low tak 50% Equilibrium line range ko Premium (Sell Area) aur Discount (No Sells) mein taqseem karti hai. Failed Bullish candle jab Swing Low tootne ke baad Bearish Breaker banti hai aur 0.618–0.786 OTE zone mein aati hai, toh wahan se sharp sell-off hota hai.',
        },
        table: {
          caption: 'Table 2.1 — Institutional POI Confluence Scoring Matrix',
          headers: ['POI Element', 'Minimum Requirement', 'Institutional Confluence Bonus'],
          rows: [
            ['Order Block (OB)', 'Swept Liquidity + FVG + BOS', 'Located inside OTE (0.618–0.786) & Discount/Premium'],
            ['Fair Value Gap (FVG)', '3-Candle clean imbalance gap', 'Overlaps with HTF OB or 50% Consequent Encroachment'],
            ['Inversion FVG (IFVG)', 'Full body close violating prior FVG', 'Forms immediately after Killzone ERL Liquidity Sweep'],
            ['Breaker Block', 'Failed OB after Swing High/Low sweep', 'Aligns with 0.705 Sweet Spot inside Premium/Discount'],
          ],
        },
      },
    ],
  },
  {
    number: '03',
    id: 'module-3',
    title: 'Time & Price Theory: Killzones, PO3 & Silver Bullet',
    subtitle: 'Pakistan Standard Time (PKT) Winter vs Summer Killzones, Asian Range, Judas Swing, Power of Three (AMD) aur NY Silver Bullet',
    readingTime: '14 min read',
    focusTags: ['PKT Killzones', 'Power of Three', 'NY Silver Bullet'],
    openingParagraph:
      'Price akeli kabhi kaam nahi karti; institutional trading mein "Time" hamesha "Price" se pehle aata hai. Aapke paas duniya ka sab se behtareen Order Block aur Fair Value Gap maujood ho, lekin agar woh Asian dead hours ya London lunch chop mein tap ho raha hai, toh uske fail hone ke chances dugne ho jate hain. Interbank algorithms specific time windows — jinhein Killzones kehte hain — ke andar hi liquidity inject aur expand karte hain. Is chapter mein hum har global session ko exact Pakistan Standard Time (PKT = UTC+5) ke mutabiq Winter aur Summer Daylight Saving adjustments ke sath decode karenge.',
    marginNotes: [
      {
        term: 'Time Before Price',
        definition:
          'POI tabhi trade karein jab woh active London ya New York Killzone window ke andar tap ho raha ho.',
      },
      {
        term: 'PKT DST Shift',
        definition:
          'Pakistan Daylight Saving follow nahi karta, is liye March se November (Summer) aur November se March (Winter) mein PKT timings 1 ghanta shift hoti hain.',
      },
      {
        term: 'Judas Swing',
        definition:
          'London ya NY open par asli move se pehle hone wali false manipulation rally/drop jo Asian Range ki liquidity sweep karti hai.',
      },
    ],
    sections: [
      {
        id: 'mod3-pkt-killzones',
        heading: '3.1 Killzones in Pakistan Standard Time (PKT): Winter vs Summer Schedule',
        paragraphs: [
          'Pakistani aur Indian traders ke liye sab se bari pareshani New York (EST/EDT) aur London (GMT/BST) ke timings ko apni local ghadi ke mutabiq adjust karne mein aati hai. Chunkay Pakistan (UTC+5) saal bhar apni ghadi tabdeel nahi karta, jab ke US aur UK saal mein do baar Daylight Saving Time (DST) badalte hain, is liye aapke Killzone timings Summer (March–November) aur Winter (November–March) mein 1 ghante ka farq rakhte hain.',
          'Agar aap galat ghante mein chart par baithe hain, toh aap sirf consolidation aur spreads ka shikar honge. Neechy diye gaye exact PKT schedule ko apne TradingView sessions indicator mein save karein taake aap sirf unhi 2-2 ghanton mein focus karein jab London aur New York ke institutional desks par asli volume enter hota hai.',
        ],
        table: {
          caption: 'Table 3.1 — Institutional Killzones & Macros in Pakistan Standard Time (PKT / UTC+5)',
          headers: ['Institutional Session', 'New York Time (EST/EDT)', 'PKT Summer (Mar–Nov)', 'PKT Winter (Nov–Mar)', 'Primary Objective'],
          rows: [
            ['Asian Range (Consolidation)', '20:00 – 00:00', '05:00 AM – 09:00 AM', '06:00 AM – 10:00 AM', 'Accumulation High/Low liquidity build-up'],
            ['London Open Killzone', '02:00 – 05:00', '11:00 AM – 02:00 PM', '12:00 PM – 03:00 PM', 'Judas Swing + Daily High/Low creation'],
            ['NY AM Killzone (Forex/Index)', '07:00 – 10:00', '04:00 PM – 07:00 PM', '05:00 PM – 08:00 PM', 'News injection, continuation or reversal'],
            ['NY Silver Bullet Window', '10:00 – 11:00', '07:00 PM – 08:00 PM', '08:00 PM – 09:00 PM', 'High-probability 1-hour algorithmic FVG setup'],
            ['London Close Killzone', '10:00 – 12:00', '07:00 PM – 09:00 PM', '08:00 PM – 10:00 PM', 'Intraday profit-taking & scalping pullback'],
          ],
        },
      },
      {
        id: 'mod3-asian-judas',
        heading: '3.2 Asian Range Liquidity aur Judas Swing Ka Anatomy',
        paragraphs: [
          'Har din ka institutional blueprint Asian Session (PKT 05:00–09:00 AM Summer / 06:00–10:00 AM Winter) se shuru hota hai. Major currency pairs jaise EURUSD, GBPUSD, aur XAUUSD is waqt zyada tar ek tight horizontal range mein ghoomte hain. Is range ka sab se upari hissa Asian High (BSL) aur sab se nichla hissa Asian Low (SSL) ban jata hai. Jab European banks London Open se pehle apni desks kholte hain, toh unhein is range ke dono sides par tight Stop Losses aur breakout orders nazar aate hain.',
          'Jaise hi London Open Killzone (PKT 11:00 AM Summer / 12:00 PM Winter) start hota hai, market aksar aik tez false move deti hai jo Asian High ko upar ki taraf todti hai (agar Daily Bias Bearish ho) ya Asian Low ko neeche ki taraf todti hai (agar Daily Bias Bullish ho). Isi jhooti aur dhoka dene wali move ko ICT methodology mein "Judas Swing" kehte hain. Retail breakout traders is move par buy/sell kar baithte hain, lekin darasal yeh sirf Manipulation leg hoti hai jo London aur New York ke asli trend ko fuel karne ke liye stops ikattha karti hai. Jab Judas Swing HTF POI mein tap kar ke LTF CHoCH + FVG de, toh wahi din ki sab se behtareen entry hoti hai.',
        ],
      },
      {
        id: 'mod3-po3-amd',
        heading: '3.3 Power of Three (PO3): Accumulation, Manipulation, Distribution (AMD)',
        paragraphs: [
          'Power of Three (PO3) — jise AMD Model (Accumulation, Manipulation, Distribution) bhi kaha jata hai — ek complete Daily Candle ki anatomical kahani hai. Ek Bullish Daily candle ko dekhein: woh apne Open price par thodi der side-ways ghoomti hai (Accumulation — Asian Session), phir Open price se neeche ja kar apna Daily Low wick banati hai (Manipulation / Judas Swing — London Open), phir poora din upar expand ho kar Daily High ke qareeb close hoti hai (Distribution — London Expansion & NY Session).',
          'Smart traders kabhi bhi "Accumulation" ke beech mein trade nahi karte aur kabhi bhi "Manipulation" ki direction mein breakout chase nahi karte. Aapka kaam sirf yeh hai ke Daily Open (00:00 NY Time = PKT 09:00 AM Summer / 10:00 AM Winter) par ek horizontal line draw karein. Agar aapka HTF Daily Bias Bullish hai, toh aapko sirf Daily Open price ke NEECHE (Discount mein) London Manipulation drop ka intezar karna hai taake aap Distribution rally ko bottom se pakad sakein. Agar Daily Bias Bearish hai, toh Daily Open line ke UPAR (Premium mein) false rally ka wait karein. Is ek simple PO3 filter se aap 80% false trades se bach sakte hain.',
        ],
        diagram: {
          id: 'mod3-po3-infographic',
          figNumber: 'Fig 3.1',
          title: 'Power of Three (PO3): Accumulation, Manipulation & Distribution Cycle',
          romanUrduCaption:
            'Phase 1 (Accumulation): Asian session mein tight range aur liquidity build-up. Phase 2 (Manipulation): London open par Daily Open ke neeche false Judas Swing drop jo Sell-Side Liquidity sweep karta hai. Phase 3 (Distribution): Institutional expansion jo pooray din ki asli trend move deliver karta hai.',
        },
      },
      {
        id: 'mod3-silver-bullet',
        heading: '3.4 The NY AM Silver Bullet (7:00–8:00 PM PKT Summer / 8:00–9:00 PM Winter)',
        paragraphs: [
          'Jin traders ke paas full-time job ya business ki wajah se poora din charts dekhne ka waqt nahi hota, unke liye New York AM Silver Bullet duniya ka sab se disciplined algorithmic window hai. Yeh sirf 60 minutes ka time block hota hai: New York time 10:00 AM se 11:00 AM tak (PKT Summer 07:00 PM – 08:00 PM / PKT Winter 08:00 PM – 09:00 PM).',
          'Is ek ghante mein IPDA har roz ek clean Fair Value Gap (FVG) setup create karta hai, bashartay ke aap is 3-step SOP ko follow karein: Step 1: Check karein ke 10:00 AM NY se pehle (London ya NY 8:30–9:30 AM news session mein) koi major Liquidity Pool (Asian High/Low, London High/Low, ya 15m Swing High/Low) sweep ho chuka ho. Step 2: 5-minute ya 1-minute chart par shift ho jayein aur us liquidity sweep ke baad aane wale pehle energetic Displacement + FVG (ya CHoCH + FVG) ka intezar karein jo exact 10:00–11:00 AM NY window ke andar bane. Step 3: Us 1m/5m FVG ke edge par limit order rakhein, Stop Loss displacement swing ke peeche, aur Take Profit agle obvious 15m/1H Draw on Liquidity par (kam az kam 1:2 se 1:3 RR) set karein. Rozana sirf ek clean Silver Bullet trade aapka monthly prop-firm target pura karne ke liye kaafi hoti hai.',
        ],
        callout: {
          label: 'Silver Bullet Golden Filter',
          text: 'Agar 10:00 AM NY window shuru hone se pehle hi market 2x Daily ATR move kar chuki ho ya target liquidity pehle hi hit ho chuki ho, toh us din Silver Bullet skip karein — algorithm already apni daily delivery complete kar chuka hai.',
        },
      },
    ],
  },
];
