import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const dilemmasDir = path.join(process.cwd(), 'content', 'dilemmas');
const pendingDir = path.join(process.cwd(), 'content', 'pending-review');
const gapOutputFile = path.join(process.cwd(), 'content', 'competitive-gap.json');

// Proven high-demand Romanian grammar query pairs (dexonline Ghid + Bacalaureat / Evaluarea Națională + competitor listicles)
export const COMPETITIVE_TARGET_LIST = [
  // High-volume Orthography & Morphology
  {
    wrong: "așează",
    correct: "așază",
    category: "Ortografie",
    prompt: "«Așază» sau «așează»?",
    question_title: "«Așază» sau «așează»? Care este forma corectă",
    rule: "Conform DOOM3, verbul «a așeza» are la indicativ prezent persoana a III-a singular și plural forma «așază» (cu «a», nu «ea»).",
    examples: ["Ea așază cărțile pe birou.", "Elevii își așază ghiozdanele în bănci."],
    tags: ["evaluare-nationala", "bacalaureat", "doom3"]
  },
  {
    wrong: "vroiam",
    correct: "voiam",
    category: "Morfologie",
    prompt: "«Voiam» sau «vroiam»?",
    question_title: "«Voiam» sau «vroiam»? Care este forma corectă",
    rule: "Forma «vroiam» este o contaminare hibridă incorectă între verbele «a vrea» (imperfect: «vream») și «a voi» (imperfect: «voiam»). Norma literară recomandă «voiam» sau «vream».",
    examples: ["Voiam să te întreb despre tema de mâine.", "Înainte de examen, voiam să fiu sigur de regulă."],
    tags: ["evaluare-nationala", "bacalaureat", "doom3"]
  },
  {
    wrong: "mi-ar place",
    correct: "mi-ar plăcea",
    category: "Morfologie",
    prompt: "«Mi-ar plăcea» sau «mi-ar place»?",
    question_title: "«Mi-ar plăcea» sau «mi-ar place»? Care este forma corectă",
    rule: "Condițional-optativul prezent se construiește cu infinitivul verbului («plăcea»), nu cu indicativul prezent («place»). Așadar, forma corectă este «mi-ar plăcea».",
    examples: ["Mi-ar plăcea să citesc mai mult.", "Ne-ar plăcea să participăm la concurs."],
    tags: ["evaluare-nationala", "bacalaureat", "doom3"]
  },
  {
    wrong: "încontinuu (adverb)",
    correct: "în continuu / încontinuu",
    category: "Ortografie",
    prompt: "«Încontinuu» sau «în continuu»?",
    question_title: "«Încontinuu» sau «în continuu»? Care este forma corectă",
    rule: "Adverbul cu sensul de «mereu, neîncetat» se scrie legat («Vorbește încontinuu»), în timp ce prepoziția «în» urmată de adjectivul «continuu» se scrie separat («Este într-un proces continuu»).",
    examples: ["A plouat încontinuu timp de trei zile.", "Acel zumzet se auzea încontinuu."],
    tags: ["ortografie", "doom3"]
  },
  {
    wrong: "demult (prepoziție + adjectiv)",
    correct: "de mult / demult",
    category: "Ortografie",
    prompt: "«Demult» sau «de mult»?",
    question_title: "«Demult» sau «de mult»? Care este forma corectă",
    rule: "Adverbul cu sensul de «odinioară, în trecut» se scrie legat («A fost odată demult»), iar când indică o durată mare sau cantitate se scrie separat («Nu ne-am văzut de mult timp»).",
    examples: ["Am auzit povestea aceasta demult.", "Nu am mai călătorit de mult."],
    tags: ["ortografie", "doom3"]
  },
  {
    wrong: "chibrite",
    correct: "chibrituri",
    category: "Morfologie",
    prompt: "«Chibrituri» sau «chibrite»?",
    question_title: "«Chibrituri» sau «chibrite»? Care este forma corectă",
    rule: "Forma corectă de plural pentru substantivul neutru «chibrit» este «chibrituri» conform DOOM3.",
    examples: ["A cumpărat o cutie de chibrituri.", "Avea trei chibrituri în buzunar."],
    tags: ["morfologie", "doom3"]
  },
  {
    wrong: "renumera",
    correct: "remunera",
    category: "Lexicosemantică",
    prompt: "«A remunera» sau «a renumera»?",
    question_title: "«A remunera» sau «a renumera»? Care este forma corectă",
    rule: "Verbul cu sensul de a plăti pentru o muncă efectuată este «a remunera» (din latinescul remunerari). «A renumera» înseamnă a număra din nou.",
    examples: ["Munca depusă a fost remunerată corespunzător.", "Toți colaboratorii sunt remunerați corect."],
    tags: ["lexicosemantica", "confuzie-paronimica"]
  },
  {
    wrong: "dragile mele fete",
    correct: "dragile mele fete / dragele mele fete",
    category: "Morfologie",
    prompt: "«Dragile mele» sau «dragele mele»?",
    question_title: "«Dragile mele» sau «dragele mele»? Care este forma corectă",
    rule: "Conform DOOM3, adjectivul «drag» la feminin plural articulat are forma recomandată «dragile» («dragile mele fete»), deși norma actuală admite și varianta «dragele».",
    examples: ["Dragile mele prietene, vă mulțumesc!", "Dragile noastre colege au sosit."],
    tags: ["morfologie", "doom3"]
  },
  {
    wrong: "genoflexiuni",
    correct: "genuflexiuni",
    category: "Ortografie",
    prompt: "«Genuflexiuni» sau «genoflexiuni»?",
    question_title: "«Genuflexiuni» sau «genoflexiuni»? Care este forma corectă",
    rule: "Forma corectă este «genuflexiune» (cu «u»), provenită din latinescul «genu» (genunchi) și «flectere» (a îndoi).",
    examples: ["A făcut douăzeci de genuflexiuni la încălzire.", "Exercițiul include genuflexiuni corecte."],
    tags: ["ortografie", "vocabular"]
  },
  {
    wrong: "itinerariu",
    correct: "itinerar",
    category: "Morfologie",
    prompt: "«Itinerar» sau «itinerariu»?",
    question_title: "«Itinerar» sau «itinerariu»? Care este forma corectă",
    rule: "Forma literară standard conform DOOM3 este «itinerar» (plural «itinerare»). Varianta «itinerariu» este învechită și nerecomandată.",
    examples: ["Am stabilit un itinerar pentru vacanță.", "Itinerarul excursiei a fost aprobat."],
    tags: ["morfologie", "doom3"]
  }
];

function clean(str) {
  return (str || '').toLowerCase().replace(/[^a-zăâîșț]/gi, '');
}

export function analyzeGap() {
  const liveFiles = fs.readdirSync(dilemmasDir).filter(f => f.endsWith('.md'));
  const liveCards = liveFiles.map(f => {
    const raw = fs.readFileSync(path.join(dilemmasDir, f), 'utf8');
    const { data } = matter(raw);
    return {
      id: f.replace(/\.md$/, ''),
      correct: data.correct || '',
      wrong: data.wrong || '',
      prompt: data.prompt || ''
    };
  });

  const covered = [];
  const missing = [];

  for (const target of COMPETITIVE_TARGET_LIST) {
    const targetCorrect = clean(target.correct);
    const targetWrong = clean(target.wrong);

    const match = liveCards.find(c => {
      const cCorrect = clean(c.correct);
      const cWrong = clean(c.wrong);
      return (cCorrect === targetCorrect && cWrong === targetWrong) ||
             (cCorrect.includes(targetCorrect) && targetCorrect.length > 3);
    });

    if (match) {
      covered.push({ ...target, liveId: match.id });
    } else {
      missing.push(target);
    }
  }

  const report = {
    analyzed_at: new Date().toISOString(),
    total_target_queries: COMPETITIVE_TARGET_LIST.length,
    live_covered: covered.length,
    missing_count: missing.length,
    coverage_percentage: Math.round((covered.length / COMPETITIVE_TARGET_LIST.length) * 100),
    covered_items: covered,
    missing_priority_items: missing,
  };

  fs.writeFileSync(gapOutputFile, JSON.stringify(report, null, 2), 'utf8');

  console.log(`\n=== Raport Gap Competitiv (dexonline / căutări frecvente) ===`);
  console.log(`  Progres: ${report.live_covered} din ${report.total_target_queries} interogări țintă acoperite (${report.coverage_percentage}%)`);
  console.log(`  Dileme de prioritate înaltă lipsă: ${report.missing_count}`);
  console.log(`\nTop dileme lipsă recomandate pentru următoarea serie de drafturi:`);
  missing.slice(0, 5).forEach((item, idx) => {
    console.log(`  ${idx + 1}. [${item.category}] ${item.question_title} (Corect: «${item.correct}» vs Greșit: «${item.wrong}»)`);
  });
  console.log(`\nRaport complet salvat în: content/competitive-gap.json\n`);

  // Support batch drafting flag: --draft-missing
  if (process.argv.includes('--draft-missing')) {
    if (!fs.existsSync(pendingDir)) fs.mkdirSync(pendingDir, { recursive: true });
    let created = 0;
    for (const item of missing) {
      const slug = item.correct.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      const dest = path.join(pendingDir, `${slug}.md`);
      if (!fs.existsSync(dest)) {
        const frontmatter = {
          category: item.category,
          prompt: item.prompt,
          question_title: item.question_title,
          wrong: item.wrong,
          correct: item.correct,
          short_rule: item.correct,
          choices: [item.correct, item.wrong],
          correct_choice: item.correct,
          examples: item.examples,
          tags: item.tags,
          status: "pending-review",
          created_at: new Date().toISOString(),
        };
        fs.writeFileSync(dest, matter.stringify(item.rule, frontmatter), 'utf8');
        created++;
      }
    }
    console.log(`[GUARDRAIL]: ${created} drafturi au fost generate în content/pending-review/.`);
    console.log(`Niciuna nu este live! Profesorii le pot inspecta și aproba cu: node scripts/approve-dilemma.mjs`);
  }
}

if (process.argv[1] && process.argv[1].endsWith('analyze-competitive-gap.mjs')) {
  analyzeGap();
}
