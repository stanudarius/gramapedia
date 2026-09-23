export const navigation = [
  { label: "Despre noi", href: "#despre" },
  { label: "Cum lucrăm", href: "#cum-lucram" },
  { label: "De la dilemă la regulă", href: "#dilema" },
  { label: "Concurs", href: "#concurs" },
  { label: "Înscrieri", href: "#inscrieri" },
];

export const learningNavigation = [
  { label: "Teorie", href: "/teorie/" },
  { label: "Grile", href: "/grile/" },
];

export const learningSteps = [
  {
    number: "01",
    eyebrow: "Ritm",
    title: "Întâlniri săptămânale",
    description:
      "Clubul se întâlnește săptămânal, în incinta Colegiului Național «Gheorghe Lazăr». Programul este comunicat după etapa de înscriere.",
  },
  {
    number: "02",
    eyebrow: "Metodă",
    title: "Jocuri & activități interactive",
    description:
      "Regulile nu rămân pe tablă. Le descoperim prin jocuri, exemple și activități care pun limba în mișcare.",
  },
  {
    number: "03",
    eyebrow: "Transfer",
    title: "Analizăm texte reale",
    description:
      "Lucrăm cu materiale autentice și urmărim cum o regulă devine claritate în exprimare, la școală și dincolo de ea.",
  },
];

export const reasons = [
  {
    index: "01",
    title: "Cultură generală",
    description: "O limbă înțeleasă bine deschide mai mult decât o listă de excepții.",
  },
  {
    index: "02",
    title: "Gândire logică",
    description: "Când vezi relația dintre cuvinte, începi să vezi mai clar și relația dintre idei.",
  },
  {
    index: "03",
    title: "Exprimare coerentă",
    description: "Regula devine utilă atunci când te ajută să construiești un mesaj precis.",
  },
];

export const audiences = [
  {
    label: "Gimnaziu",
    title: "Clasele V–VIII",
    description: "Pentru elevii care vor să își consolideze baza și să se pregătească pentru Evaluarea Națională.",
  },
  {
    label: "Liceu",
    title: "Clasele IX–XII",
    description: "Pentru cei care vor să își rafineze exprimarea și să fie mai siguri pe ei la examene.",
  },
  {
    label: "Mai departe",
    title: "Drept · Poliție · Jurnalism",
    description: "Pentru elevii care privesc gramatica drept o bază pentru domenii în care cuvântul contează.",
  },
];

export type ContestEdition = {
  edition: string;
  year: string;
  date: string;
  poster: string;
  posterAlt: string;
  subjectUrl: string;
  rubricUrl: string;
};


export type GrammarCase = {
  id: string;
  category: string;
  prompt: string;
  answer: string;
  rule: string;
  examples: string[];
  choices: string[];
  correctChoice: string;
  wrong: string;
  correct: string;
  questionTitle: string;
  relatedIds: string[];
};


export type GrammarTrail = {
  id: string;
  label: string;
  title: string;
  caseIds: string[];
};

export const grammarTrails: GrammarTrail[] = [
  {
    id: "scriere-corecta",
    label: "Traseul 01",
    title: "Scriere corectă",
    caseIds: ["artificiu", "sa-fii", "niciun", "intr-adevar", "creeaza", "serviciu", "maximum"],
  },
  {
    id: "claritate-in-exprimare",
    label: "Traseul 02",
    title: "Claritate în exprimare",
    caseIds: ["pe-care", "decat-doar", "abuza-de", "pleonasm-coborat", "concentreaza", "vocativ"],
  },
  {
    id: "acord-si-punctuatie",
    label: "Traseul 03",
    title: "Acord și punctuație",
    caseIds: ["mass-media", "patru-sute", "cincizeci-si-una", "al-carui", "virgula-dar", "subiect-predicat"],
  },
  {
    id: "seria-completa",
    label: "Traseul complet",
    title: "Toate dilemele",
    caseIds: [], // Treated specially by the UI as 'all dilemmas'
  },
];
