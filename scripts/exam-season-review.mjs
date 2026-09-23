import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const dilemmasDir = path.join(process.cwd(), 'content', 'dilemmas');
const reportsDir = path.join(process.cwd(), 'reports');
const reportFile = path.join(reportsDir, 'exam-season-review.md');

// High-frequency syllabus topics for Evaluarea Națională (clasa a VIII-a) & Bacalaureat (clasa a XII-a)
const EXAM_TOPIC_RULES = [
  {
    topic: "Acordul predicatului cu subiectul",
    slugs: ["subiect-predicat", "dilema-el-si-ea", "dilema-fiecare-inculpati", "dilema-director-impreuna", "dilema-eu-si-colegul", "dilema-tu-si-martorul", "dilema-niciunul-martori", "dilema-presedinte-complet"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "CRITICĂ"
  },
  {
    topic: "Pronumele relativ «care» cu funcția de complement direct (anticipat de «pe»)",
    slugs: ["pe-care"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "CRITICĂ"
  },
  {
    topic: "Acordul pronumelui și adjectivului pronominal relativ-interogativ în genitiv («al/a/ai/ale cărui/cărei/căror»)",
    slugs: ["al-carui", "dilema-a-carei-activitate", "dilema-a-carei-masina", "dilema-a-caror-vina", "dilema-ai-carui-colegi", "dilema-al-carei-sot", "dilema-al-carui-avocat", "dilema-ale-carui-declaratii"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "CRITICĂ"
  },
  {
    topic: "Adjectivul pronominal de întărire («însumi/însăți/înșiși/însele»)",
    slugs: ["dilema-judecatorul-insusi"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "ÎNALTĂ"
  },
  {
    topic: "Ortografia formelor verbale (desinențe «-i», «-ii», «-iii», «așază», «voiam», «creează»)",
    slugs: ["sa-fii", "creeaza", "artificiu"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "CRITICĂ"
  },
  {
    topic: "Confuzii paronimice și sensul cuvintelor",
    slugs: ["dilema-iminent", "dilema-emigranti", "dilema-familial", "dilema-adoptata"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "ÎNALTĂ"
  },
  {
    topic: "Pleonasmul",
    slugs: ["pleonasm-coborat", "dilema-coborat-jos", "dilema-repetat-din-nou", "dilema-monopol-exclusiv", "dilema-iesit-afara", "dilema-colaborare-eficienta"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "ÎNALTĂ"
  },
  {
    topic: "Regimul prepozițiilor («datorită» vs «din cauza», «conform», «contrar»)",
    slugs: ["dilema-datorita-pregatirii", "dilema-din-cauza-accident", "dilema-conform-legii", "dilema-contrar-asteptarilor", "dilema-potrivit-probelor"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "MEDIE"
  },
  {
    topic: "Punctuația și folosirea virgulei (coordonare adversativă, vocativ)",
    slugs: ["virgula-dar", "vocativ", "dilema-ci-nu-dar", "dilema-ci-nu-procuror"],
    exams: ["Evaluarea Națională", "Bacalaureat"],
    priority: "ÎNALTĂ"
  },
  {
    topic: "Scrierea cuvintelor compuse / locuțiunilor («niciun», «într-adevăr», «decat/doar»)",
    slugs: ["niciun", "intr-adevar", "decat-doar", "maximum", "serviciu"],
    exams: ["Evaluarea Națională"],
    priority: "CRITICĂ"
  }
];

function getExamSeasonStatus() {
  const now = new Date();
  const year = now.getFullYear();
  // Exam window starts around June 15 each year
  let examStart = new Date(year, 5, 15); // June 15 (0-indexed month 5)
  if (now > new Date(year, 6, 15)) {
    examStart = new Date(year + 1, 5, 15);
  }
  const diffDays = Math.ceil((examStart.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  let alertLevel = "OFF-SEASON";
  if (diffDays <= 30 && diffDays >= 0) {
    alertLevel = "URGENTĂ (Sezon activ de examene)";
  } else if (diffDays <= 75 && diffDays > 30) {
    alertLevel = "AVERTIZARE (Fereastră pre-examen: se recomandă auditul cardurilor)";
  }

  return { examDate: examStart.toISOString().split('T')[0], diffDays, alertLevel };
}

export function runExamSeasonReview() {
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

  const files = fs.readdirSync(dilemmasDir).filter(f => f.endsWith('.md'));
  const allCards = files.map(file => {
    const raw = fs.readFileSync(path.join(dilemmasDir, file), 'utf8');
    const { data, content } = matter(raw);
    const id = file.replace(/\.md$/, '');
    return { id, file, data, content };
  });

  const { examDate, diffDays, alertLevel } = getExamSeasonStatus();

  let totalExamCards = 0;
  const topicBreakdown = [];

  for (const group of EXAM_TOPIC_RULES) {
    const cardsInGroup = allCards.filter(c => group.slugs.includes(c.id));
    totalExamCards += cardsInGroup.length;
    topicBreakdown.push({
      ...group,
      matchedCards: cardsInGroup
    });
  }

  const report = `# Raport de Pregătire pentru Sezonul de Examene (Evaluarea Națională & Bacalaureat)
Data auditului: ${new Date().toISOString().split('T')[0]}

## 1. Calendar și Status Sezon Examene
- **Următoarea sesiune națională estimată**: ${examDate}
- **Zile rămase**: ${diffDays} zile
- **Status alertă**: **${alertLevel}**

> **Notă metodică**: În lunile aprilie–iunie, traficul de căutare pe capcane gramaticale crește de 3–5x datorită elevilor care se pregătesc pentru Evaluarea Națională (clasa a VIII-a) și Bacalaureat (clasa a XII-a). Toate cardurile din aceste categorii trebuie verificate riguros.

---

## 2. Sumar Acoperire Subiecte de Examen
- **Total dileme identificate ca subiecte de examen**: ${totalExamCards} din ${files.length} dileme live (${Math.round((totalExamCards / files.length) * 100)}%)
- **Topice prioritare auditate**: ${EXAM_TOPIC_RULES.length} capitole din programa MEN

## 3. Detaliu Carduri pe Topice de Examen

${topicBreakdown.map((t, idx) => `
### ${idx + 1}. [Prioritate ${t.priority}] ${t.topic}
- **Examene vizate**: ${t.exams.join(', ')}
- **Carduri live (${t.matchedCards.length})**:
${t.matchedCards.map(c => `  - **${c.id}**: «${c.data.correct}» vs «${c.data.wrong}» — _${c.data.question_title || c.data.prompt}_`).join('\n')}
`).join('')}

---

## 4. Recomandări de Acțiune pentru Profesori și Autori
1. **Verificare normă DOOM3**: Confirmați că explicațiile reflectă strict prevederile Dicționarului Ortografic, Ortoepic și Morfologic al Limbii Române (ediția a III-a).
2. **Exemple clare de context**: Asigurați-vă că fiecare card de examen oferă cel puțin 2 exemple tipice pentru subiectele de la Evaluarea Națională.
3. **Drafturi noi**: Pentru perechi frecvente de examen încă neacoperite (ex: «așază/așează», «voiam/vroiam», «mi-ar plăcea»), rulați \`npm run data:gap -- --draft-missing\` și aprobați-le cu \`npm run dilemma:approve\`.
`;

  fs.writeFileSync(reportFile, report, 'utf8');
  console.log(`Raport salvat în: ${path.relative(process.cwd(), reportFile)}`);
  console.log(`Total carduri de examen auditate: ${totalExamCards}`);
  console.log(`Status sezon: ${alertLevel} (${diffDays} zile rămase)`);

  if (process.argv.includes('--tag-cards')) {
    let taggedCount = 0;
    for (const group of EXAM_TOPIC_RULES) {
      for (const card of group.matchedCards) {
        const filePath = path.join(dilemmasDir, card.file);
        const tags = Array.isArray(card.data.tags) ? [...card.data.tags] : [];
        let modified = false;

        const defaultTags = ["evaluare-nationala", "bacalaureat"];
        for (const t of defaultTags) {
          if (!tags.includes(t)) {
            tags.push(t);
            modified = true;
          }
        }

        if (modified) {
          const updatedFrontmatter = { ...card.data, tags };
          fs.writeFileSync(filePath, matter.stringify(card.content, updatedFrontmatter), 'utf8');
          taggedCount++;
        }
      }
    }
    console.log(`[TAGGING]: ${taggedCount} carduri au fost actualizate cu tag-urile de examen.`);
  }
}

if (process.argv[1] && process.argv[1].endsWith('exam-season-review.mjs')) {
  runExamSeasonReview();
}
