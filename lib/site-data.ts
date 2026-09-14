export const navigation = [
  { label: "Despre noi", href: "#despre" },
  { label: "Cum lucrăm", href: "#cum-lucram" },
  { label: "De la dilemă la regulă", href: "#dilema" },
  { label: "Concurs", href: "#concurs" },
  { label: "Înscrieri", href: "#inscrieri" },
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

export const contestEditions: ContestEdition[] = [
  {
    edition: "Ediția I",
    year: "2023",
    date: "13 mai 2023",
    poster: "/concurs/banner-2023.png",
    posterAlt: "Afișul Concursului de gramatică, ediția I, 2023",
    subjectUrl: "https://drive.google.com/file/d/18IIgUFfJVwI9BieDw1Yq6RZal-DsnnV6/view?usp=sharing",
    rubricUrl: "https://drive.google.com/file/d/1uJ3OKW_8_5Zh6uv_z0Wnt6K0gztjaTPh/view?usp=sharing",
  },
  {
    edition: "Ediția a II-a",
    year: "2024",
    date: "18 mai 2024",
    poster: "/concurs/banner-2024.png",
    posterAlt: "Afișul Concursului de gramatică, ediția a II-a, 2024",
    subjectUrl: "https://drive.google.com/file/d/1wp2PDLFYJMZFuzvgZrOGyrrtR1lpawph/view?usp=sharing",
    rubricUrl: "https://drive.google.com/file/d/1ulYYKq9BO_XpyONmwfXF8xLyQLYcpS2g/view?usp=sharing",
  },
  {
    edition: "Ediția a III-a",
    year: "2025",
    date: "25 mai 2025",
    poster: "/concurs/banner-2025.png",
    posterAlt: "Afișul Concursului de gramatică, ediția a III-a, 2025",
    subjectUrl: "https://drive.google.com/file/d/1aW-CXqz2W3RObN7WvE_vBsHdCX0rS2H0/view?usp=sharing",
    rubricUrl: "https://drive.google.com/file/d/1Fgh0Wtu4Ij-k-mMqjC2UP9LphtV_Nfri/view?usp=sharing",
  },
  {
    edition: "Ediția a IV-a",
    year: "2026",
    date: "4 aprilie 2026",
    poster: "/concurs/banner-2026.png",
    posterAlt: "Afișul Concursului de gramatică, ediția a IV-a, 2026",
    subjectUrl: "/concurs/subiect-2026.pdf",
    rubricUrl: "/concurs/barem-2026.pdf",
  },
];

export type GrammarCase = {
  id: string;
  category: string;
  prompt: string;
  answer: string;
  rule: string;
  examples: string[];
  choices: string[];
  correctChoice: string;
};

export const grammarCases: GrammarCase[] = [
  {
    id: "artificiu",
    category: "Alegere lexicală",
    prompt: "Se spune «o artificie» sau «un artificiu»?",
    answer: "un artificiu",
    rule: "Forma corectă pentru sensul de procedeu ingenios este «un artificiu».",
    examples: [
      "A găsit un artificiu pentru a rezolva exercițiul.",
      "Acest artificiu clarifică demonstrația.",
    ],
    choices: ["o artificie", "un artificiu", "un artificie"],
    correctChoice: "un artificiu",
  },
  {
    id: "pe-care",
    category: "Sintaxă",
    prompt: "Când apare «pe» în «cartea pe care o citesc»?",
    answer: "pe care",
    rule: "Prepoziția marchează complementul direct atunci când pronumele relativ «care» se referă la un lucru asupra căruia se răsfrânge acțiunea.",
    examples: [
      "Cartea pe care o citesc este despre limbaj.",
      "Exemplul pe care îl analizăm schimbă perspectiva.",
    ],
    choices: [
      "când «care» este subiect",
      "când «care» este complement direct",
      "în orice construcție",
    ],
    correctChoice: "când «care» este complement direct",
  },
  {
    id: "decat-doar",
    category: "Alegere lexicală",
    prompt: "«Am decât două minute» sau «Am doar două minute»?",
    answer: "Am doar două minute.",
    rule: "Într-o construcție afirmativă cu sens de limitare, folosim «doar» sau «numai». «Decât» apare, de regulă, în construcții negative.",
    examples: [
      "Nu am decât două minute.",
      "Am doar două minute, așa că alegem un singur exemplu.",
    ],
    choices: ["Am decât două minute.", "Am doar două minute.", "Am de cât două minute."],
    correctChoice: "Am doar două minute.",
  },
  {
    id: "sa-fii",
    category: "Ortografie",
    prompt: "«Să fii atent» sau «să fi atent»?",
    answer: "să fii atent",
    rule: "La persoana a II-a singular a verbului «a fi», forma este «să fii». Forma «să fi» apare în construcții precum «să fi citit». ",
    examples: [
      "Este important să fii atent la nuanțe.",
      "E posibil să fi citit deja textul.",
    ],
    choices: ["să fii atent", "să fi atent", "să fiii atent"],
    correctChoice: "să fii atent",
  },
  {
    id: "niciun",
    category: "Ortografie",
    prompt: "«Niciun elev» sau «nici un elev»?",
    answer: "niciun elev",
    rule: "Când are sensul «zero», adjectivul pronominal negativ «niciun» se scrie într-un singur cuvânt.",
    examples: [
      "Niciun elev nu a lipsit de la întâlnire.",
      "Nu am găsit niciun exemplu potrivit.",
    ],
    choices: ["niciun elev", "nici un elev", "nici- un elev"],
    correctChoice: "niciun elev",
  },
  {
    id: "vocativ",
    category: "Punctuație",
    prompt: "«Maria, vino aici!» sau «Maria vino aici!»?",
    answer: "Maria, vino aici!",
    rule: "Substantivul care denumește persoana strigată sau adresată direct este un vocativ și se desparte prin virgulă.",
    examples: [
      "Andrei, citește cu atenție cerința.",
      "Vino, Ioana, să discutăm exemplul.",
    ],
    choices: ["Maria vino aici!", "Maria, vino aici!", "Maria; vino aici!"],
    correctChoice: "Maria, vino aici!",
  },
  {
    id: "intr-adevar",
    category: "Ortografie",
    prompt: "«Într-adevăr» sau «întradevăr»?",
    answer: "într-adevăr",
    rule: "Locuțiunea adverbială se scrie cu cratimă și cu «î» la început: «într-adevăr». ",
    examples: [
      "Într-adevăr, explicația schimbă perspectiva.",
      "Este, într-adevăr, un exemplu bun.",
    ],
    choices: ["într-adevăr", "întradevăr", "într adevăr"],
    correctChoice: "într-adevăr",
  },
  {
    id: "creeaza",
    category: "Morfologie",
    prompt: "«Creează» sau «crează»?",
    answer: "creează",
    rule: "Verbul «a crea» se păstrează cu doi «e» la persoana a III-a singular: «el creează».",
    examples: [
      "Lectura creează legături între idei.",
      "Exercițiul creează o situație de comunicare.",
    ],
    choices: ["creează", "crează", "creiază"],
    correctChoice: "creează",
  },
  {
    id: "abuza-de",
    category: "Lexicosemantică",
    prompt: "«A abuzat de funcție» sau «a abuzat funcția»?",
    answer: "A abuzat de funcție.",
    rule: "Cu sensul de a folosi în mod excesiv sau nedrept, verbul «a abuza» se construiește cu prepoziția «de».",
    examples: [
      "Nu este corect să abuzezi de încrederea cuiva.",
      "A abuzat de poziția pe care o avea.",
    ],
    choices: ["A abuzat de funcție.", "A abuzat funcția.", "A abuzat la funcție."],
    correctChoice: "A abuzat de funcție.",
  },
  {
    id: "pleonasm-coborat",
    category: "Lexicosemantică",
    prompt: "«A coborât jos» sau «a coborât»?",
    answer: "A coborât.",
    rule: "Verbul «a coborî» include deja ideea de mișcare în jos; adăugarea lui «jos» poate crea un pleonasm.",
    examples: [
      "A coborât din tren la prima stație.",
      "Soarele a coborât încet spre orizont.",
    ],
    choices: ["A coborât.", "A coborât jos.", "A coborât în jos jos."],
    correctChoice: "A coborât.",
  },
  {
    id: "serviciu",
    category: "Ortografie",
    prompt: "«Servici» sau «serviciu»?",
    answer: "serviciu",
    rule: "Substantivul se scrie «serviciu», cu «u» final.",
    examples: [
      "Am rezolvat problema la serviciu.",
      "Serviciul public trebuie să fie accesibil.",
    ],
    choices: ["servici", "serviciu", "serviciul"],
    correctChoice: "serviciu",
  },
  {
    id: "concentreaza",
    category: "Alegere lexicală",
    prompt: "«Te focusezi» sau «te concentrezi»?",
    answer: "te concentrezi",
    rule: "În exprimarea generală, preferăm verbul consacrat «a se concentra» pentru ideea de a-ți îndrepta atenția asupra unui lucru.",
    examples: [
      "Te concentrezi mai ușor într-un spațiu liniștit.",
      "Elevii se concentrează asupra cerinței.",
    ],
    choices: ["te focusezi", "te concentrezi", "te focalizezi asupra la"],
    correctChoice: "te concentrezi",
  },
  {
    id: "maximum",
    category: "Alegere lexicală",
    prompt: "«La maxim» sau «la maximum»?",
    answer: "la maximum",
    rule: "În locuțiunea adverbială care exprimă limita superioară, forma recomandată este «la maximum».",
    examples: [
      "Volumul poate fi ridicat la maximum.",
      "Folosește timpul la maximum.",
    ],
    choices: ["la maxim", "la maximum", "la maximale"],
    correctChoice: "la maximum",
  },
  {
    id: "mass-media",
    category: "Acord",
    prompt: "«Mass-media a transmis» sau «mass-media au transmis»?",
    answer: "Mass-media a transmis informația.",
    rule: "Substantivul «mass-media» este folosit la singular în această construcție, iar predicatul se acordă la singular.",
    examples: [
      "Mass-media a transmis informația în aceeași seară.",
      "Mass-media are un rol important în informarea publicului.",
    ],
    choices: ["Mass-media a transmis informația.", "Mass-media au transmis informația.", "Mass-media transmită informația."],
    correctChoice: "Mass-media a transmis informația.",
  },
  {
    id: "patru-sute",
    category: "Acord",
    prompt: "«Patru sute de lei este...» sau «patru sute de lei sunt...»?",
    answer: "Patru sute de lei sunt o sumă importantă.",
    rule: "Când numeralul exprimă mai multe unități, predicatul se acordă la plural.",
    examples: [
      "Patru sute de lei sunt o sumă importantă pentru proiect.",
      "Două sute de pagini au fost analizate.",
    ],
    choices: [
      "Patru sute de lei este o sumă importantă.",
      "Patru sute de lei sunt o sumă importantă.",
      "Patru sute de lei fii o sumă importantă.",
    ],
    correctChoice: "Patru sute de lei sunt o sumă importantă.",
  },
  {
    id: "cincizeci-si-una",
    category: "Acord",
    prompt: "«Cincizeci și unu de universități» sau «cincizeci și una de universități»?",
    answer: "cincizeci și una de universități",
    rule: "Numeralul se acordă cu substantivul feminin «universități»: «cincizeci și una».",
    examples: [
      "Cincizeci și una de universități au participat la proiect.",
      "Treizeci și una de pagini sunt suficiente pentru introducere.",
    ],
    choices: ["cincizeci și unu de universități", "cincizeci și una de universități", "cincizeci și un de universități"],
    correctChoice: "cincizeci și una de universități",
  },
  {
    id: "al-carui",
    category: "Acord",
    prompt: "«Fata al cărei frate...» sau «fata a cărui frate...»?",
    answer: "fata al cărei frate",
    rule: "Forma «al» se acordă cu substantivul posedat «frate», iar «cărei» cu persoana la care se referă.",
    examples: [
      "Fata al cărei frate studiază aici a venit la întâlnire.",
      "Am citit articolul al cărui autor este profesorul nostru.",
    ],
    choices: ["fata al cărei frate", "fata a cărui frate", "fata ai cărei frate"],
    correctChoice: "fata al cărei frate",
  },
  {
    id: "virgula-dar",
    category: "Punctuație",
    prompt: "«Am citit, dar nu am memorat» sau «am citit dar nu am memorat»?",
    answer: "Am citit, dar nu am memorat.",
    rule: "Conjuncția adversativă «dar» se desparte, de regulă, prin virgulă de propoziția pe care o introduce.",
    examples: [
      "Am înțeles regula, dar mai am nevoie de exercițiu.",
      "A venit la timp, însă nu a găsit sala.",
    ],
    choices: ["Am citit, dar nu am memorat.", "Am citit dar nu am memorat.", "Am citit; dar nu am memorat."],
    correctChoice: "Am citit, dar nu am memorat.",
  },
  {
    id: "subiect-predicat",
    category: "Punctuație",
    prompt: "«Cine învață, reușește» sau «cine învață reușește»?",
    answer: "Cine învață reușește.",
    rule: "În mod obișnuit, nu punem virgulă între subiect și predicat, chiar dacă subiectul este o propoziție.",
    examples: [
      "Cine exersează constant progresează.",
      "Ceea ce contează este consecvența.",
    ],
    choices: ["Cine învață, reușește.", "Cine învață reușește.", "Cine, învață reușește."],
    correctChoice: "Cine învață reușește.",
  },
];

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
    caseIds: grammarCases.map((item) => item.id),
  },
];
