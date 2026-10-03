import { CuratedWord } from "./types";

export const POPULAR_DICTIONARY_WORDS: CuratedWord[] = [
  { slug: "paradigma", word: "paradigmă", category: "gramatica", hint: "Ansamblu al formelor flexionare ale unui cuvânt" },
  { slug: "sinestezie", word: "sinestezie", category: "stilistica", hint: "Asocierea concomitentă a mai multor simțuri" },
  { slug: "epistola", word: "epistolă", category: "literar", hint: "Scrisoare în versuri cu caracter moralizator sau satiric" },
  { slug: "efemer", word: "efemer", category: "vocabular", hint: "Trecător, de foarte scurtă durată" },
  { slug: "pleonasm", word: "pleonasm", category: "gramatica", hint: "Alăturarea unor termeni cu același sens" },
  { slug: "ortoepie", word: "ortoepie", category: "gramatica", hint: "Regulile de pronunțare literară corectă" },
  { slug: "hiatus", word: "hiatus", category: "gramatica", hint: "Succesiune de două vocale în silabe alăturate" },
  { slug: "echivoc", word: "echivoc", category: "vocabular", hint: "Care poate fi interpretat în mai multe sensuri" },
  { slug: "metafora", word: "metaforă", category: "stilistica", hint: "Figură de stil bazată pe o comparație subînțeleasă" },
  { slug: "diftong", word: "diftong", category: "gramatica", hint: "Grup format dintr-o vocală și o semivocală în aceeași silabă" },
  { slug: "paronim", word: "paronim", category: "vocabular", hint: "Cuvinte aproape identice ca formă, dar diferite ca sens" },
  { slug: "anacolut", word: "anacolut", category: "gramatica", hint: "Întrerupere a continuității sintactice în frază" },
  { slug: "oximoron", word: "oximoron", category: "stilistica", hint: "Asociere ingenioasă de doi termeni contradictorii" },
  { slug: "hiperbola", word: "hiperbolă", category: "stilistica", hint: "Exagerare intenționată a trăsăturilor unui obiect" },
  { slug: "elipsa", word: "elipsă", category: "gramatica", hint: "Omiterea unuia sau mai multor cuvinte ușor de subînțeles" },
  { slug: "arhaism", word: "arhaism", category: "vocabular", hint: "Cuvânt sau expresie învechită ieșită din uzul comun" },
  { slug: "neologism", word: "neologism", category: "vocabular", hint: "Cuvânt recent împrumutat sau creat într-o limbă" },
  { slug: "eufemism", word: "eufemism", category: "stilistica", hint: "Îndulcirea unei expresii dure sau neplăcute" },
  { slug: "omonim", word: "omonim", category: "vocabular", hint: "Cuvinte cu formă identică, dar sensuri complet diferite" },
  { slug: "antonim", word: "antonim", category: "vocabular", hint: "Cuvinte cu sens diametral opus" },
  { slug: "sinonim", word: "sinonim", category: "vocabular", hint: "Cuvinte cu sens identic sau foarte apropiat" },
  { slug: "tautologie", word: "tautologie", category: "gramatica", hint: "Greșeală de exprimare prin repetarea aceleiași idei în termeni identici" },
  { slug: "solecism", word: "solecism", category: "gramatica", hint: "Greșeală de sintaxă sau de construcție gramaticală" },
  { slug: "citi", word: "citi", category: "gramatica", hint: "Verb tranzitiv (Grupa a IV-a)" },
];

export const POPULAR_WORDS_BY_SLUG = new Map<string, CuratedWord>(
  POPULAR_DICTIONARY_WORDS.map((w) => [w.slug, w])
);
