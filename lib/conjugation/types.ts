export type Person = '1s' | '2s' | '3s' | '1p' | '2p' | '3p';

/**
 * Forms for [1sg, 2sg, 3sg, 1pl, 2pl, 3pl]
 */
export type PersonForms = [string, string, string, string, string, string];

export type ConjugationGroup = 1 | 2 | 3 | 4;

export interface DoomNote {
  rule: string;
  correct: string;
  incorrect: string;
  explanation: string;
}

export interface IndicativeTenses {
  prezent: PersonForms;
  imperfect: PersonForms;
  perfectCompus: PersonForms;
  perfectSimplu: PersonForms;
  maiMultCaPerfect: PersonForms;
  viitorStandard: PersonForms;
  viitorPopular: PersonForms;
  viitorAnterior: PersonForms;
}

export interface SubjunctiveTenses {
  prezent: PersonForms;
  perfect: PersonForms;
}

export interface ConditionalTenses {
  prezent: PersonForms;
  perfect: PersonForms;
}

export interface ImperativeMood {
  afirmativ: { s2: string; p2: string };
  negativ: { s2: string; p2: string };
}

export interface NonFiniteForms {
  infinitivPrezent: string;
  infinitivLung: string;
  participiu: string;
  gerunziu: string;
  supin: string;
}

export interface VerbConjugation {
  verb: string;
  infinitive: string;
  slug: string;
  group: ConjugationGroup;
  groupRoman: 'I' | 'II' | 'III' | 'IV';
  isIrregular: boolean;
  notes?: DoomNote[];
  indicativ: IndicativeTenses;
  conjunctiv: SubjunctiveTenses;
  conditional: ConditionalTenses;
  imperativ: ImperativeMood;
  formeNepersonale: NonFiniteForms;
}

export interface IrregularVerbData {
  infinitive: string;
  group: ConjugationGroup;
  present: PersonForms;
  imperfect?: PersonForms;
  perfectSimple?: PersonForms;
  pluperfect?: PersonForms;
  subjunctivePresent?: PersonForms;
  imperativeAffirmative?: { s2: string; p2: string };
  imperativeNegative?: { s2: string; p2: string };
  participle: string;
  gerund: string;
  longInfinitive?: string;
  notes?: DoomNote[];
}
