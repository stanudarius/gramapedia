export interface DictionaryDefinition {
  id: string;
  sourceName: string;
  htmlRep: string;
  internalRep?: string;
}

export interface DictionarySearchResult {
  type: string;
  word: string;
  definitions: DictionaryDefinition[];
}

export type DictionaryCategory = "dex" | "doom";

export interface CuratedWord {
  slug: string;
  word: string;
  category: "gramatica" | "stilistica" | "vocabular" | "literar";
  hint: string;
}
