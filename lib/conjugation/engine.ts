import { IRREGULAR_VERBS } from './irregular-verbs';
import { POPULAR_VERBS } from './popular-verbs';
import {
  ConjugationGroup,
  ConditionalTenses,
  ImperativeMood,
  IndicativeTenses,
  NonFiniteForms,
  PersonForms,
  SubjunctiveTenses,
  VerbConjugation,
} from './types';

/**
 * Remove Romanian diacritics for search and URL slug generation.
 */
export function removeDiacritics(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ș/g, 's')
    .replace(/Ș/g, 's')
    .replace(/ț/g, 't')
    .replace(/Ț/g, 't')
    .toLowerCase();
}

/**
 * Clean user input to extract base verb string.
 */
export function cleanVerbInput(raw: string): string {
  // Strip non-letter / non-hyphen / non-space characters
  let cleaned = raw
    .replace(/[^a-zA-ZăâîșțĂÂÎȘȚ\s-]/g, ' ')
    .trim()
    .toLowerCase();

  // Strip leading particles if typed (e.g. "a citi", "nu citi", "să citească")
  cleaned = cleaned.replace(/^(a|să|sa|nu|o\s+să|o\s+sa)\s+/i, '').trim();

  // Strip trailing punctuation
  cleaned = cleaned.replace(/[!?.,;:]+$/, '').trim();

  // If input had only digits, symbols or was empty, fallback safely to 'fi'
  if (!cleaned || cleaned === 'a') {
    return 'fi';
  }

  return cleaned;
}

/**
 * Known Group 2 verbs (accented on -ea)
 */
const GROUP_2_VERBS = new Set([
  'avea',
  'apărea',
  'aparea',
  'bea',
  'cădea',
  'cadea',
  'dispărea',
  'disparea',
  'displăcea',
  'displacea',
  'încăpea',
  'incapea',
  'plăcea',
  'placea',
  'putea',
  'revedea',
  'scădea',
  'scadea',
  'ședea',
  'sedea',
  'tăcea',
  'tacea',
  'vedea',
  'vrea',
  'zăcea',
  'zacea',
]);

/**
 * Known Group 1 verbs that conjugate WITHOUT the -ez suffix
 */
const GROUP_1_SUFFIXLESS = new Set([
  'aduna',
  'amana',
  'amâna',
  'apara',
  'apăra',
  'apela',
  'apasa',
  'apăsa',
  'arata',
  'arăta',
  'arunca',
  'asculta',
  'astepta',
  'aștepta',
  'ataca',
  'baga',
  'băga',
  'bate',
  'calca',
  'călca',
  'canta',
  'cânta',
  'capata',
  'căpăta',
  'castiga',
  'câștiga',
  'cauta',
  'căuta',
  'chema',
  'curata',
  'curăța',
  'da',
  'dezbraca',
  'dezbrăca',
  'imbraca',
  'îmbrăca',
  'incerca',
  'încerca',
  'ingropa',
  'îngropa',
  'inota',
  'înota',
  'insela',
  'înșela',
  'intra',
  'invata',
  'învăța',
  'intreba',
  'întreba',
  'juca',
  'lasa',
  'lăsa',
  'lega',
  'lepada',
  'lepăda',
  'lua',
  'manca',
  'mânca',
  'masura',
  'măsura',
  'mesteca',
  'micsora',
  'micșora',
  'mira',
  'misca',
  'mișca',
  'musca',
  'mușca',
  'numara',
  'număra',
  'ofta',
  'pastra',
  'păstra',
  'picura',
  'pleca',
  'plimba',
  'purta',
  'rabda',
  'răbda',
  'ridica',
  'ruga',
  'saluta',
  'sapa',
  'săpa',
  'saruta',
  'săruta',
  'scapa',
  'scăpa',
  'schimba',
  'scuipa',
  'scurge',
  'semana',
  'semăna',
  'spala',
  'spăla',
  'spera',
  'sta',
  'striga',
  'taia',
  'tăia',
  'tipa',
  'țipa',
  'umbla',
  'umfla',
  'urca',
  'urla',
  'urma',
  'usca',
  'ustura',
  'varsa',
  'vărsa',
  'vatama',
  'vătăma',
  'vindeca',
  'visa',
  'zbura',
]);

/**
 * Known Group 4 verbs that conjugate WITHOUT the -esc suffix
 */
const GROUP_4_SUFFIXLESS = new Set([
  'adormi',
  'acoperi',
  'auzi',
  'cobori',
  'coborî',
  'descoperi',
  'deschide',
  'dormi',
  'fugi',
  'iesi',
  'ieși',
  'muri',
  'oferi',
  'sari',
  'sări',
  'simti',
  'simți',
  'suferi',
  'sti',
  'ști',
  'veni',
]);

/**
 * Determine the conjugation group (1, 2, 3, 4) from the infinitive.
 */
export function determineGroup(infinitive: string): ConjugationGroup {
  const norm = removeDiacritics(infinitive);

  // Group 2 check (accented -ea like vedea, cădea)
  // Note: verbs in -crea (crea, recrea, procrea) or -grea (agrea) belong to Group 1
  if (GROUP_2_VERBS.has(norm)) {
    return 2;
  }
  if (norm.endsWith('ea') && !norm.endsWith('crea') && !norm.endsWith('grea')) {
    return 2;
  }

  // Group 1: ends in -a
  if (norm.endsWith('a')) {
    return 1;
  }

  // Group 4: ends in -i or -î
  if (norm.endsWith('i') || infinitive.endsWith('î')) {
    return 4;
  }

  // Group 3: ends in -e
  if (norm.endsWith('e')) {
    return 3;
  }

  return 1;
}

/**
 * Apply common 2nd person singular consonantal alternations.
 */
function apply2sgConsonantAlternation(stem: string): string {
  if (stem.endsWith('t')) return stem.slice(0, -1) + 'ți';
  if (stem.endsWith('d')) return stem.slice(0, -1) + 'zi';
  if (stem.endsWith('s')) return stem.slice(0, -1) + 'și';
  if (stem.endsWith('z')) return stem.slice(0, -1) + 'zi';
  if (stem.endsWith('c')) return stem.slice(0, -1) + 'ci';
  if (stem.endsWith('g')) return stem.slice(0, -1) + 'gi';
  if (stem.endsWith('sc')) return stem.slice(0, -2) + 'ști';
  if (stem.endsWith('st')) return stem.slice(0, -2) + 'ști';
  return stem + 'i';
}

/**
 * Universal algorithmic generator for regular Romanian verbs.
 */
function generateRegularConjugation(infinitive: string, group: ConjugationGroup): VerbConjugation {
  const norm = removeDiacritics(infinitive);
  const slug = norm;
  const verbWithA = `a ${infinitive}`;
  const groupRoman = (['I', 'II', 'III', 'IV'] as const)[group - 1];

  let present: PersonForms;
  let subjunctivePres: PersonForms;
  let imperfect: PersonForms;
  let perfectSimple: PersonForms;
  let pluperfect: PersonForms;
  let imperativeAff: { s2: string; p2: string };
  let imperativeNeg: { s2: string; p2: string };
  let participle: string;
  let gerund: string;
  let longInfinitive: string;

  if (group === 1) {
    // Group I: ends in -a
    const stem = infinitive.endsWith('a') ? infinitive.slice(0, -1) : infinitive;
    const isSuffixless = GROUP_1_SUFFIXLESS.has(norm);

    participle = `${stem}at`;
    gerund = `${stem}ând`;
    longInfinitive = `${stem}are`;

    // Imperfect Group I: -am, -ai, -a, -am, -ați, -au
    imperfect = [
      `${stem}am`,
      `${stem}ai`,
      `${stem}a`,
      `${stem}am`,
      `${stem}ați`,
      `${stem}au`,
    ];

    // Perfect Simplu Group I: -ai, -ași, -ă, -arăm, -arăți, -ară
    perfectSimple = [
      `${stem}ai`,
      `${stem}ași`,
      `${stem}ă`,
      `${stem}arăm`,
      `${stem}arăți`,
      `${stem}ară`,
    ];

    // Mai mult ca perfect Group I: -asem, -aseși, -ase, -aserăm, -aserăți, -aseră
    pluperfect = [
      `${stem}asem`,
      `${stem}aseși`,
      `${stem}ase`,
      `${stem}aserăm`,
      `${stem}aserăți`,
      `${stem}aseră`,
    ];

    if (isSuffixless) {
      // e.g. cânta -> cânt, cânți, cântă, cântăm, cântați, cântă
      const p2 = apply2sgConsonantAlternation(stem);
      present = [
        stem,
        p2,
        `${stem}ă`,
        `${stem}ăm`,
        `${stem}ați`,
        `${stem}ă`,
      ];
      subjunctivePres = [
        `să ${stem}`,
        `să ${p2}`,
        `să ${stem}e`,
        `să ${stem}ăm`,
        `să ${stem}ați`,
        `să ${stem}e`,
      ];
      imperativeAff = { s2: `${stem}ă`, p2: `${stem}ați` };
    } else {
      // Modern / productive with -ez (e.g. lucra -> lucrez, lucrezi, lucrează, lucrăm, lucrați, lucrează)
      present = [
        `${stem}ez`,
        `${stem}ezi`,
        `${stem}ează`,
        `${stem}ăm`,
        `${stem}ați`,
        `${stem}ează`,
      ];
      subjunctivePres = [
        `să ${stem}ez`,
        `să ${stem}ezi`,
        `să ${stem}eze`,
        `să ${stem}ăm`,
        `să ${stem}ați`,
        `să ${stem}eze`,
      ];
      imperativeAff = { s2: `${stem}ează`, p2: `${stem}ați` };
    }

    imperativeNeg = { s2: `nu ${infinitive}`, p2: `nu ${imperativeAff.p2}` };
  } else if (group === 2) {
    // Group II: ends in -ea (e.g. apărea, scădea)
    const stem = infinitive.endsWith('ea') ? infinitive.slice(0, -2) : infinitive;

    participle = `${stem}ut`;
    gerund = `${stem}ând`;
    longInfinitive = `${stem}ere`;

    imperfect = [
      `${stem}eam`,
      `${stem}eai`,
      `${stem}ea`,
      `${stem}eam`,
      `${stem}eați`,
      `${stem}eau`,
    ];

    perfectSimple = [
      `${stem}ui`,
      `${stem}uși`,
      `${stem}u`,
      `${stem}urăm`,
      `${stem}urăți`,
      `${stem}ură`,
    ];

    pluperfect = [
      `${stem}usem`,
      `${stem}useși`,
      `${stem}use`,
      `${stem}userăm`,
      `${stem}userăți`,
      `${stem}useră`,
    ];

    const p2 = apply2sgConsonantAlternation(stem);
    present = [
      stem,
      p2,
      `${stem}e`,
      `${stem}em`,
      `${stem}eți`,
      stem,
    ];
    subjunctivePres = [
      `să ${stem}`,
      `să ${p2}`,
      `să ${stem}ă`,
      `să ${stem}em`,
      `să ${stem}eți`,
      `să ${stem}ă`,
    ];
    imperativeAff = { s2: `${stem}e`, p2: `${stem}eți` };
    imperativeNeg = { s2: `nu ${infinitive}`, p2: `nu ${imperativeAff.p2}` };
  } else if (group === 3) {
    // Group III: ends in -e (e.g. bate, trece, merge)
    const stem = infinitive.endsWith('e') ? infinitive.slice(0, -1) : infinitive;

    participle = `${stem}ut`;
    gerund = `${stem}ând`;
    longInfinitive = `${stem}ere`;

    imperfect = [
      `${stem}eam`,
      `${stem}eai`,
      `${stem}ea`,
      `${stem}eam`,
      `${stem}eați`,
      `${stem}eau`,
    ];

    perfectSimple = [
      `${stem}ui`,
      `${stem}uși`,
      `${stem}u`,
      `${stem}urăm`,
      `${stem}urăți`,
      `${stem}ură`,
    ];

    pluperfect = [
      `${stem}usem`,
      `${stem}useși`,
      `${stem}use`,
      `${stem}userăm`,
      `${stem}userăți`,
      `${stem}useră`,
    ];

    const p2 = apply2sgConsonantAlternation(stem);
    present = [
      stem,
      p2,
      `${stem}e`,
      `${stem}em`,
      `${stem}eți`,
      stem,
    ];
    subjunctivePres = [
      `să ${stem}`,
      `să ${p2}`,
      `să ${stem}ă`,
      `să ${stem}em`,
      `să ${stem}eți`,
      `să ${stem}ă`,
    ];
    imperativeAff = { s2: `${stem}e`, p2: `${stem}eți` };
    imperativeNeg = { s2: `nu ${infinitive}`, p2: `nu ${imperativeAff.p2}` };
  } else {
    // Group IV: ends in -i or -î
    const isI = infinitive.endsWith('i');
    const stem = infinitive.slice(0, -1);
    const isSuffixless = GROUP_4_SUFFIXLESS.has(norm);

    if (isI) {
      participle = `${stem}it`;
      gerund = stem.endsWith('i') ? `${stem}ind` : `${stem}ind`;
      longInfinitive = `${stem}ire`;

      imperfect = [
        `${stem}eam`,
        `${stem}eai`,
        `${stem}ea`,
        `${stem}eam`,
        `${stem}eați`,
        `${stem}eau`,
      ];

      perfectSimple = [
        `${stem}ii`,
        `${stem}iși`,
        `${stem}i`,
        `${stem}irăm`,
        `${stem}irăți`,
        `${stem}iră`,
      ];

      pluperfect = [
        `${stem}isem`,
        `${stem}iseși`,
        `${stem}ise`,
        `${stem}iserăm`,
        `${stem}iserăți`,
        `${stem}iseră`,
      ];

      if (isSuffixless) {
        const p2 = apply2sgConsonantAlternation(stem);
        present = [
          stem,
          p2,
          `${stem}e`,
          `${stem}im`,
          `${stem}iți`,
          stem,
        ];
        subjunctivePres = [
          `să ${stem}`,
          `să ${p2}`,
          `să ${stem}ă`,
          `să ${stem}im`,
          `să ${stem}iți`,
          `să ${stem}ă`,
        ];
        imperativeAff = { s2: `${stem}e`, p2: `${stem}iți` };
      } else {
        // Standard with -esc (e.g. citi -> citesc, citești, citește, citim, citiți, citesc)
        present = [
          `${stem}esc`,
          `${stem}ești`,
          `${stem}ește`,
          `${stem}im`,
          `${stem}iți`,
          `${stem}esc`,
        ];
        subjunctivePres = [
          `să ${stem}esc`,
          `să ${stem}ești`,
          `să ${stem}ească`,
          `să ${stem}im`,
          `să ${stem}iți`,
          `să ${stem}ească`,
        ];
        imperativeAff = { s2: `${stem}ește`, p2: `${stem}iți` };
      }
    } else {
      // Ends in -î (e.g. hotărî, coborî)
      participle = `${stem}ât`;
      gerund = `${stem}ând`;
      longInfinitive = `${stem}âre`;

      imperfect = [
        `${stem}am`,
        `${stem}ai`,
        `${stem}a`,
        `${stem}am`,
        `${stem}ați`,
        `${stem}au`,
      ];

      perfectSimple = [
        `${stem}âi`,
        `${stem}âși`,
        `${stem}î`,
        `${stem}ârăm`,
        `${stem}ârăți`,
        `${stem}âră`,
      ];

      pluperfect = [
        `${stem}âsem`,
        `${stem}âseși`,
        `${stem}âse`,
        `${stem}âserăm`,
        `${stem}âserăți`,
        `${stem}âseră`,
      ];

      present = [
        `${stem}ăsc`,
        `${stem}ăști`,
        `${stem}ăște`,
        `${stem}âm`,
        `${stem}âți`,
        `${stem}ăsc`,
      ];
      subjunctivePres = [
        `să ${stem}ăsc`,
        `să ${stem}ăști`,
        `să ${stem}ască`,
        `să ${stem}âm`,
        `să ${stem}âți`,
        `să ${stem}ască`,
      ];
      imperativeAff = { s2: `${stem}ăște`, p2: `${stem}âți` };
    }

    imperativeNeg = { s2: `nu ${infinitive}`, p2: `nu ${imperativeAff.p2}` };
  }

  // Compound tenses
  const perfectCompus: PersonForms = [
    `am ${participle}`,
    `ai ${participle}`,
    `a ${participle}`,
    `am ${participle}`,
    `ați ${participle}`,
    `au ${participle}`,
  ];

  const viitorStandard: PersonForms = [
    `voi ${infinitive}`,
    `vei ${infinitive}`,
    `va ${infinitive}`,
    `vom ${infinitive}`,
    `veți ${infinitive}`,
    `vor ${infinitive}`,
  ];

  const viitorPopular: PersonForms = [
    `o ${subjunctivePres[0]}`,
    `o ${subjunctivePres[1]}`,
    `o ${subjunctivePres[2]}`,
    `o ${subjunctivePres[3]}`,
    `o ${subjunctivePres[4]}`,
    `o ${subjunctivePres[5]}`,
  ];

  const viitorAnterior: PersonForms = [
    `voi fi ${participle}`,
    `vei fi ${participle}`,
    `va fi ${participle}`,
    `vom fi ${participle}`,
    `veți fi ${participle}`,
    `vor fi ${participle}`,
  ];

  const subjunctivePerf: PersonForms = [
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
  ];

  const conditionalPres: PersonForms = [
    `aș ${infinitive}`,
    `ai ${infinitive}`,
    `ar ${infinitive}`,
    `am ${infinitive}`,
    `ați ${infinitive}`,
    `ar ${infinitive}`,
  ];

  const conditionalPerf: PersonForms = [
    `aș fi ${participle}`,
    `ai fi ${participle}`,
    `ar fi ${participle}`,
    `am fi ${participle}`,
    `ați fi ${participle}`,
    `ar fi ${participle}`,
  ];

  const indicative: IndicativeTenses = {
    prezent: present,
    imperfect,
    perfectCompus,
    perfectSimplu: perfectSimple,
    maiMultCaPerfect: pluperfect,
    viitorStandard,
    viitorPopular,
    viitorAnterior,
  };

  const conjunctiv: SubjunctiveTenses = {
    prezent: subjunctivePres,
    perfect: subjunctivePerf,
  };

  const conditional: ConditionalTenses = {
    prezent: conditionalPres,
    perfect: conditionalPerf,
  };

  const imperativ: ImperativeMood = {
    afirmativ: imperativeAff,
    negativ: imperativeNeg,
  };

  const formeNepersonale: NonFiniteForms = {
    infinitivPrezent: verbWithA,
    infinitivLung: longInfinitive,
    participiu: participle,
    gerunziu: gerund,
    supin: `de ${participle}`,
  };

  return {
    verb: verbWithA,
    infinitive,
    slug,
    group,
    groupRoman,
    isIrregular: false,
    indicativ: indicative,
    conjunctiv,
    conditional,
    imperativ,
    formeNepersonale,
  };
}

/**
 * Build a full VerbConjugation from an entry in the IRREGULAR_VERBS registry.
 */
function buildFromIrregularData(data: (typeof IRREGULAR_VERBS)[string]): VerbConjugation {
  const infinitive = data.infinitive;
  const slug = removeDiacritics(infinitive);
  const verbWithA = `a ${infinitive}`;
  const group = data.group;
  const groupRoman = (['I', 'II', 'III', 'IV'] as const)[group - 1];

  const participle = data.participle;
  const gerund = data.gerund;
  const longInfinitive = data.longInfinitive || `${infinitive}re`;

  // Compound tenses
  const perfectCompus: PersonForms = [
    `am ${participle}`,
    `ai ${participle}`,
    `a ${participle}`,
    `am ${participle}`,
    `ați ${participle}`,
    `au ${participle}`,
  ];

  const viitorStandard: PersonForms = [
    `voi ${infinitive}`,
    `vei ${infinitive}`,
    `va ${infinitive}`,
    `vom ${infinitive}`,
    `veți ${infinitive}`,
    `vor ${infinitive}`,
  ];

  const subjPres = data.subjunctivePresent || [
    `să ${data.present[0]}`,
    `să ${data.present[1]}`,
    `să ${data.present[2]}`,
    `să ${data.present[3]}`,
    `să ${data.present[4]}`,
    `să ${data.present[5]}`,
  ];

  const viitorPopular: PersonForms = [
    `o ${subjPres[0]}`,
    `o ${subjPres[1]}`,
    `o ${subjPres[2]}`,
    `o ${subjPres[3]}`,
    `o ${subjPres[4]}`,
    `o ${subjPres[5]}`,
  ];

  const viitorAnterior: PersonForms = [
    `voi fi ${participle}`,
    `vei fi ${participle}`,
    `va fi ${participle}`,
    `vom fi ${participle}`,
    `veți fi ${participle}`,
    `vor fi ${participle}`,
  ];

  const subjunctivePerf: PersonForms = [
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
  ];

  const conditionalPres: PersonForms = [
    `aș ${infinitive}`,
    `ai ${infinitive}`,
    `ar ${infinitive}`,
    `am ${infinitive}`,
    `ați ${infinitive}`,
    `ar ${infinitive}`,
  ];

  const conditionalPerf: PersonForms = [
    `aș fi ${participle}`,
    `ai fi ${participle}`,
    `ar fi ${participle}`,
    `am fi ${participle}`,
    `ați fi ${participle}`,
    `ar fi ${participle}`,
  ];

  // Default imperfect / perfectSimple / pluperfect if omitted
  const imperfect: PersonForms = data.imperfect || [
    `${infinitive.slice(0, -1)}eam`,
    `${infinitive.slice(0, -1)}eai`,
    `${infinitive.slice(0, -1)}ea`,
    `${infinitive.slice(0, -1)}eam`,
    `${infinitive.slice(0, -1)}eați`,
    `${infinitive.slice(0, -1)}eau`,
  ];

  const perfectSimple: PersonForms = data.perfectSimple || [
    `${infinitive.slice(0, -1)}ui`,
    `${infinitive.slice(0, -1)}uși`,
    `${infinitive.slice(0, -1)}u`,
    `${infinitive.slice(0, -1)}urăm`,
    `${infinitive.slice(0, -1)}urăți`,
    `${infinitive.slice(0, -1)}ură`,
  ];

  const pluperfect: PersonForms = data.pluperfect || [
    `${infinitive.slice(0, -1)}usem`,
    `${infinitive.slice(0, -1)}useși`,
    `${infinitive.slice(0, -1)}use`,
    `${infinitive.slice(0, -1)}userăm`,
    `${infinitive.slice(0, -1)}userăți`,
    `${infinitive.slice(0, -1)}useră`,
  ];

  const imperativeAff = data.imperativeAffirmative || {
    s2: data.present[2],
    p2: data.present[4],
  };

  const imperativeNeg = data.imperativeNegative || {
    s2: `nu ${infinitive}`,
    p2: `nu ${imperativeAff.p2}`,
  };

  return {
    verb: verbWithA,
    infinitive,
    slug,
    group,
    groupRoman,
    isIrregular: true,
    notes: data.notes,
    indicativ: {
      prezent: data.present,
      imperfect,
      perfectCompus,
      perfectSimplu: perfectSimple,
      maiMultCaPerfect: pluperfect,
      viitorStandard,
      viitorPopular,
      viitorAnterior,
    },
    conjunctiv: {
      prezent: subjPres,
      perfect: subjunctivePerf,
    },
    conditional: {
      prezent: conditionalPres,
      perfect: conditionalPerf,
    },
    imperativ: {
      afirmativ: imperativeAff,
      negativ: imperativeNeg,
    },
    formeNepersonale: {
      infinitivPrezent: verbWithA,
      infinitivLung: longInfinitive,
      participiu: participle,
      gerunziu: gerund,
      supin: `de ${participle}`,
    },
  };
}

/**
 * Known Romanian verbal prefixes in order of decreasing length
 */
const VERBAL_PREFIXES = [
  'trans', 'intro', 'contra', 'supra', 'inter', 'des', 'dez', 'pre', 'pro',
  'con', 'com', 'sub', 'per', 'stră', 'stra', 'dis', 'sus', 'în', 'in', 'îm',
  'im', 're', 'de', 'co', 'tra', 'a'
];

/**
 * Irregular base roots that propagate their conjugation patterns to prefixed derivatives.
 */
const COMPOUND_ROOT_MAP: Record<string, string> = {
  duce: 'duce',
  face: 'face',
  zice: 'zice',
  scrie: 'scrie',
  pune: 'pune',
  spune: 'spune',
  tine: 'tine',
  ține: 'tine',
  vedea: 'vedea',
  cadea: 'cadea',
  cădea: 'cadea',
  placea: 'placea',
  plăcea: 'placea',
  tacea: 'tacea',
  tăcea: 'tacea',
  bate: 'bate',
  rupe: 'rupe',
  scoate: 'scoate',
  prinde: 'prinde',
  cere: 'cere',
  crede: 'crede',
  vinde: 'vinde',
  rade: 'rade',
  râde: 'rade',
  trece: 'trece',
  trage: 'trage',
  alege: 'alege',
  culege: 'culege',
  intelege: 'intelege',
  înțelege: 'intelege',
  deschide: 'deschide',
  inchide: 'inchide',
  închide: 'inchide',
  coace: 'coace',
  fierbe: 'fierbe',
  frige: 'frige',
  coase: 'coase',
  veni: 'veni',
  ramane: 'ramane',
  rămâne: 'ramane',
  simti: 'simti',
  simți: 'simti',
  dormi: 'dormi',
  auzi: 'auzi',
  sari: 'sari',
  sări: 'sari',
  fugi: 'fugi',
  suferi: 'suferi',
  oferi: 'oferi',
  acoperi: 'acoperi',
  pleca: 'pleca',
  invata: 'invata',
  învăța: 'invata',
  astepta: 'astepta',
  aștepta: 'astepta',
  cauta: 'cauta',
  căuta: 'cauta',
  spala: 'spala',
  spăla: 'spala',
  arata: 'arata',
  arăta: 'arata',
  zbura: 'zbura',
};

/**
 * Build conjugation for verbs in the -mite family (transmite, permite, promite, emite, etc.)
 */
function buildMiteVerbConjugation(prefix: string, infinitive: string): VerbConjugation {
  const norm = removeDiacritics(infinitive);
  const verbWithA = `a ${infinitive}`;
  const participle = `${prefix}mis`;

  const present: PersonForms = [
    `${prefix}mit`,
    `${prefix}miți`,
    `${prefix}mite`,
    `${prefix}mitem`,
    `${prefix}miteți`,
    `${prefix}mit`,
  ];

  const imperfect: PersonForms = [
    `${prefix}miteam`,
    `${prefix}miteai`,
    `${prefix}mitea`,
    `${prefix}miteam`,
    `${prefix}miteați`,
    `${prefix}miteau`,
  ];

  const perfectSimple: PersonForms = [
    `${prefix}misei`,
    `${prefix}miseși`,
    `${prefix}mise`,
    `${prefix}miserăm`,
    `${prefix}miserăți`,
    `${prefix}miseră`,
  ];

  const pluperfect: PersonForms = [
    `${prefix}misesem`,
    `${prefix}miseseși`,
    `${prefix}misese`,
    `${prefix}miseserăm`,
    `${prefix}miseserăți`,
    `${prefix}miseseră`,
  ];

  const subjPres: PersonForms = [
    `să ${prefix}mit`,
    `să ${prefix}miți`,
    `să ${prefix}mită`,
    `să ${prefix}mitem`,
    `să ${prefix}miteți`,
    `să ${prefix}mită`,
  ];

  const viitorStandard: PersonForms = [
    `voi ${infinitive}`,
    `vei ${infinitive}`,
    `va ${infinitive}`,
    `vom ${infinitive}`,
    `veți ${infinitive}`,
    `vor ${infinitive}`,
  ];

  const perfectCompus: PersonForms = [
    `am ${participle}`,
    `ai ${participle}`,
    `a ${participle}`,
    `am ${participle}`,
    `ați ${participle}`,
    `au ${participle}`,
  ];

  const viitorPopular: PersonForms = [
    `o ${subjPres[0]}`,
    `o ${subjPres[1]}`,
    `o ${subjPres[2]}`,
    `o ${subjPres[3]}`,
    `o ${subjPres[4]}`,
    `o ${subjPres[5]}`,
  ];

  const viitorAnterior: PersonForms = [
    `voi fi ${participle}`,
    `vei fi ${participle}`,
    `va fi ${participle}`,
    `vom fi ${participle}`,
    `veți fi ${participle}`,
    `vor fi ${participle}`,
  ];

  const subjunctivePerf: PersonForms = [
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
    `să fi ${participle}`,
  ];

  const conditionalPres: PersonForms = [
    `aș ${infinitive}`,
    `ai ${infinitive}`,
    `ar ${infinitive}`,
    `am ${infinitive}`,
    `ați ${infinitive}`,
    `ar ${infinitive}`,
  ];

  const conditionalPerf: PersonForms = [
    `aș fi ${participle}`,
    `ai fi ${participle}`,
    `ar fi ${participle}`,
    `am fi ${participle}`,
    `ați fi ${participle}`,
    `ar fi ${participle}`,
  ];

  return {
    verb: verbWithA,
    infinitive,
    slug: norm,
    group: 3,
    groupRoman: 'III',
    isIrregular: true,
    indicativ: {
      prezent: present,
      imperfect,
      perfectCompus,
      perfectSimplu: perfectSimple,
      maiMultCaPerfect: pluperfect,
      viitorStandard,
      viitorPopular,
      viitorAnterior,
    },
    conjunctiv: {
      prezent: subjPres,
      perfect: subjunctivePerf,
    },
    conditional: {
      prezent: conditionalPres,
      perfect: conditionalPerf,
    },
    imperativ: {
      afirmativ: { s2: `${prefix}mite`, p2: `${prefix}miteți` },
      negativ: { s2: `nu ${infinitive}`, p2: `nu ${prefix}miteți` },
    },
    formeNepersonale: {
      infinitivPrezent: verbWithA,
      infinitivLung: `${prefix}mitere`,
      participiu: participle,
      gerunziu: `${prefix}mițând`,
      supin: `de ${participle}`,
    },
  };
}

/**
 * Apply a prefix to a fully conjugated base verb.
 */
function prefixConjugation(prefix: string, base: VerbConjugation, infinitive: string): VerbConjugation {
  const norm = removeDiacritics(infinitive);
  const verbWithA = `a ${infinitive}`;
  const participle = `${prefix}${base.formeNepersonale.participiu}`;

  const present = base.indicativ.prezent.map((f) => `${prefix}${f}`) as PersonForms;
  const imperfect = base.indicativ.imperfect.map((f) => `${prefix}${f}`) as PersonForms;
  const perfectSimple = base.indicativ.perfectSimplu.map((f) => `${prefix}${f}`) as PersonForms;
  const pluperfect = base.indicativ.maiMultCaPerfect.map((f) => `${prefix}${f}`) as PersonForms;

  const perfectCompus = base.indicativ.perfectCompus.map((f) =>
    f.replace(/^(\w+)\s+(.+)$/, (_, aux, part) => `${aux} ${prefix}${part}`)
  ) as PersonForms;

  const viitorStandard = base.indicativ.viitorStandard.map((f) =>
    f.replace(/^(\w+)\s+(.+)$/, (_, aux, inf) => `${aux} ${prefix}${inf}`)
  ) as PersonForms;

  const viitorPopular = base.indicativ.viitorPopular.map((f) =>
    f.replace(/^o\s+să\s+(.+)$/, (_, subj) => `o să ${prefix}${subj}`)
  ) as PersonForms;

  const viitorAnterior = base.indicativ.viitorAnterior.map((f) =>
    f.replace(/^(\w+\s+fi)\s+(.+)$/, (_, aux, part) => `${aux} ${prefix}${part}`)
  ) as PersonForms;

  const subjunctivePres = base.conjunctiv.prezent.map((f) =>
    f.replace(/^să\s+(.+)$/, (_, subj) => `să ${prefix}${subj}`)
  ) as PersonForms;

  const subjunctivePerf = base.conjunctiv.perfect.map((f) =>
    f.replace(/^să\s+fi\s+(.+)$/, (_, part) => `să fi ${prefix}${part}`)
  ) as PersonForms;

  const conditionalPres = base.conditional.prezent.map((f) =>
    f.replace(/^(\w+)\s+(.+)$/, (_, aux, inf) => `${aux} ${prefix}${inf}`)
  ) as PersonForms;

  const conditionalPerf = base.conditional.perfect.map((f) =>
    f.replace(/^(\w+\s+fi)\s+(.+)$/, (_, aux, part) => `${aux} ${prefix}${part}`)
  ) as PersonForms;

  return {
    verb: verbWithA,
    infinitive,
    slug: norm,
    group: base.group,
    groupRoman: base.groupRoman,
    isIrregular: true,
    indicativ: {
      prezent: present,
      imperfect,
      perfectCompus,
      perfectSimplu: perfectSimple,
      maiMultCaPerfect: pluperfect,
      viitorStandard,
      viitorPopular,
      viitorAnterior,
    },
    conjunctiv: {
      prezent: subjunctivePres,
      perfect: subjunctivePerf,
    },
    conditional: {
      prezent: conditionalPres,
      perfect: conditionalPerf,
    },
    imperativ: {
      afirmativ: {
        s2: `${prefix}${base.imperativ.afirmativ.s2}`,
        p2: `${prefix}${base.imperativ.afirmativ.p2}`,
      },
      negativ: {
        s2: `nu ${infinitive}`,
        p2: `nu ${prefix}${base.imperativ.afirmativ.p2}`,
      },
    },
    formeNepersonale: {
      infinitivPrezent: verbWithA,
      infinitivLung: `${prefix}${base.formeNepersonale.infinitivLung}`,
      participiu: participle,
      gerunziu: `${prefix}${base.formeNepersonale.gerunziu}`,
      supin: `de ${participle}`,
    },
  };
}

/**
 * Handle compound / prefixed verbs inheriting an irregular conjugation root.
 */
function resolveCompoundVerb(infinitive: string): VerbConjugation | null {
  const norm = removeDiacritics(infinitive);

  // Special check for -mite family (transmite, permite, promite, emite, admite, omite, comite)
  if (norm.endsWith('mite') && norm !== 'mite' && norm !== 'trimite') {
    const rootLen = 4;
    const prefix = infinitive.slice(0, infinitive.length - rootLen);
    return buildMiteVerbConjugation(prefix, infinitive);
  }

  for (const root of Object.keys(COMPOUND_ROOT_MAP)) {
    const normRoot = removeDiacritics(root);
    if (norm.endsWith(normRoot) && norm.length > normRoot.length) {
      const dataKey = COMPOUND_ROOT_MAP[root];
      const baseData = IRREGULAR_VERBS[dataKey];
      if (!baseData) continue;

      const prefix = infinitive.slice(0, infinitive.length - baseData.infinitive.length);
      if (!prefix) continue;

      const base = buildFromIrregularData(baseData);
      return prefixConjugation(prefix, base, infinitive);
    }
  }

  return null;
}

/**
 * Reverse search table: form -> infinitive
 */
let reverseIndexCache: Map<string, string> | null = null;

function buildReverseIndex(): Map<string, string> {
  if (reverseIndexCache) return reverseIndexCache;
  const index = new Map<string, string>();

  // Index all irregular verbs
  for (const data of Object.values(IRREGULAR_VERBS)) {
    const inf = data.infinitive;
    index.set(removeDiacritics(inf), inf);
    index.set(removeDiacritics(data.participle), inf);
    index.set(removeDiacritics(data.gerund), inf);
    if (data.longInfinitive) index.set(removeDiacritics(data.longInfinitive), inf);

    data.present.forEach((f) => index.set(removeDiacritics(f), inf));
    data.imperfect?.forEach((f) => index.set(removeDiacritics(f), inf));
    data.perfectSimple?.forEach((f) => index.set(removeDiacritics(f), inf));
    data.pluperfect?.forEach((f) => index.set(removeDiacritics(f), inf));
    data.subjunctivePresent?.forEach((f) => {
      index.set(removeDiacritics(f), inf);
      index.set(removeDiacritics(f.replace(/^să\s+/, '')), inf);
    });

    if (data.imperativeAffirmative) {
      index.set(removeDiacritics(data.imperativeAffirmative.s2), inf);
      index.set(removeDiacritics(data.imperativeAffirmative.p2), inf);
    }
  }

  // Index popular verbs
  for (const item of POPULAR_VERBS) {
    index.set(removeDiacritics(item.infinitive), item.infinitive);
    index.set(item.slug, item.infinitive);
  }

  // Common exam traps & non-standard variants to correct base infinitives
  index.set('aibe', 'avea');
  index.set('vroiam', 'vrea');
  index.set('vroiai', 'vrea');
  index.set('vroia', 'vrea');
  index.set('vroiam', 'vrea');
  index.set('vroiati', 'vrea');
  index.set('vroiau', 'vrea');
  index.set('aseaza', 'așeza');
  index.set('așează', 'așeza');

  // Mite root forms
  index.set('mis', 'mite');
  index.set('mit', 'mite');
  index.set('miti', 'mite');
  index.set('mite', 'mite');

  reverseIndexCache = index;
  return index;
}

/**
 * Reverse Lemmatizer: takes any inflected form (or infinitive) and returns the base infinitive.
 */
export function lemmatize(input: string): string {
  const cleaned = cleanVerbInput(input);
  if (!cleaned) return 'fi';

  const norm = removeDiacritics(cleaned);
  const index = buildReverseIndex();

  // 1. Direct match in reverse index
  if (index.has(norm)) {
    return index.get(norm)!;
  }

  // 2. Check compound verb prefix matching (e.g. condus -> conduce, desfacut -> desface)
  for (const p of VERBAL_PREFIXES) {
    if (norm.startsWith(p) && norm.length > p.length + 2) {
      const rest = norm.slice(p.length);
      if (index.has(rest)) {
        const rootInf = index.get(rest)!;
        const prefixRo = (p === 'in') ? 'în' : (p === 'im') ? 'îm' : (p === 'stra') ? 'stră' : p;
        if (rootInf === 'mite') {
          return `${prefixRo}mite`;
        }
        return `${prefixRo}${rootInf}`;
      }
    }
  }

  // 3. Heuristic de-inflection for regular verbs (checked BEFORE vowel check!)
  // Pluperfect: -aserăm, -aserăți, -asem, -aseși, -ase
  if (norm.endsWith('aseram') || norm.endsWith('aserati') || norm.endsWith('asera')) {
    return cleaned.slice(0, -6) + 'a';
  }
  if (norm.endsWith('asem') || norm.endsWith('asesi') || norm.endsWith('ase')) {
    return cleaned.slice(0, -4) + 'a';
  }
  if (norm.endsWith('iseram') || norm.endsWith('iserati') || norm.endsWith('isera')) {
    return cleaned.slice(0, -6) + 'i';
  }
  if (norm.endsWith('isem') || norm.endsWith('isesi') || norm.endsWith('ise')) {
    return cleaned.slice(0, -4) + 'i';
  }

  // Imperfect Gr I: -am, -ai, -a, -ați, -au
  if (norm.endsWith('ati') && !norm.endsWith('eati') && !norm.endsWith('iati')) {
    return cleaned.slice(0, -3) + 'a';
  }

  // Gerund Gr I/II/III: -ând
  if (norm.endsWith('and') || cleaned.endsWith('ând')) {
    return cleaned.slice(0, -3) + 'a';
  }
  // Gerund Gr IV: -ind
  if (norm.endsWith('ind') || cleaned.endsWith('ind')) {
    return cleaned.slice(0, -3) + 'i';
  }

  // Participle Gr I: -at
  if (norm.endsWith('at')) {
    return cleaned.slice(0, -2) + 'a';
  }
  // Participle Gr IV: -it
  if (norm.endsWith('it')) {
    return cleaned.slice(0, -2) + 'i';
  }
  // Participle Gr IV: -ât
  if (cleaned.endsWith('ât') || norm.endsWith('at')) {
    return cleaned.slice(0, -2) + 'î';
  }

  // Present -ez / -ează -> Group I (-a)
  if (norm.endsWith('eaza') || norm.endsWith('ez') || norm.endsWith('ezi')) {
    const root = cleaned.replace(/(ează|ez|ezi)$/, '');
    return `${root}a`;
  }

  // Present -esc / -ește / -ești -> Group IV (-i)
  if (norm.endsWith('esc') || norm.endsWith('este') || norm.endsWith('esti') || cleaned.endsWith('ește') || cleaned.endsWith('ești')) {
    const root = cleaned.replace(/(esc|este|ește|esti|ești)$/, '');
    return `${root}i`;
  }

  // 4. Check if already looks like an infinitive (ends in -a, -ea, -e, -i, -î)
  if (
    cleaned.endsWith('a') ||
    cleaned.endsWith('ea') ||
    cleaned.endsWith('e') ||
    cleaned.endsWith('i') ||
    cleaned.endsWith('î')
  ) {
    return cleaned;
  }

  // Fallback: assume Group 1 infinitive in -a
  return `${cleaned}a`;
}

/**
 * Main Conjugation Entry Point.
 * Accepts any verb, infinitive or inflected form, with or without 'a '.
 */
export function conjugate(verbOrForm: string): VerbConjugation {
  const infinitive = lemmatize(verbOrForm);
  const norm = removeDiacritics(infinitive);

  // 1. Check irregular register first
  if (IRREGULAR_VERBS[norm]) {
    return buildFromIrregularData(IRREGULAR_VERBS[norm]);
  }

  // 2. Check compound / prefixed verb inheritance
  const compound = resolveCompoundVerb(infinitive);
  if (compound) {
    return compound;
  }

  // 3. Determine group and generate algorithmically
  const group = determineGroup(infinitive);
  return generateRegularConjugation(infinitive, group);
}
