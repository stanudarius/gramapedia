import assert from "node:assert/strict";
import {
  filterLatestDexAndDoom,
  categorizeSource,
  detectVerb,
  fetchWordDefinitions,
  extractHeadword,
  stripDiacritics,
} from "../lib/dictionary/api.ts";

async function testDictionary() {
  console.log("1. Testing synthetic filter: exactly 2 definitions (latest DEX + latest DOOM)...");

  const mockDefinitions = [
    { id: "1", sourceName: "NODEX", htmlRep: "<p>Definiție nodex</p>" },
    { id: "2", sourceName: "DEX '98", htmlRep: "<p>Definiție veche DEX '98</p>" },
    { id: "3", sourceName: "DEX '09", htmlRep: "<p>Definiție oficială DEX '09 prima</p>" },
    { id: "4", sourceName: "DEX '09", htmlRep: "<p>Definiție oficială DEX '09 a doua</p>" },
    { id: "5", sourceName: "Argou", htmlRep: "<p>Argou</p>" },
    { id: "6", sourceName: "DOOM 2", htmlRep: "<p>Normă veche DOOM 2</p>" },
    { id: "7", sourceName: "DOOM 3", htmlRep: "<p>Normă oficială DOOM 3</p>" },
    { id: "8", sourceName: "DOOM 3", htmlRep: "<p>Normă oficială DOOM 3 compus</p>" },
    { id: "9", sourceName: "Sinonime", htmlRep: "<p>Sinonime</p>" },
    { id: "10", sourceName: "Ortografic", htmlRep: "<p>Ortografic</p>" },
  ];

  const filtered = filterLatestDexAndDoom(mockDefinitions);
  assert.equal(filtered.length, 2, "Must return strictly 2 definitions!");
  assert.equal(filtered[0].sourceName, "DEX '09", "First definition must be latest DEX");
  assert.equal(filtered[0].id, "3", "Must be primary first entry of latest DEX");
  assert.equal(filtered[1].sourceName, "DOOM 3", "Second definition must be latest DOOM");
  assert.equal(filtered[1].id, "7", "Must be primary first entry of latest DOOM");

  console.log("2. Testing categorizer: only 'dex' and 'doom'...");
  assert.equal(categorizeSource("DEX '16"), "dex");
  assert.equal(categorizeSource("DEX '09"), "dex");
  assert.equal(categorizeSource("DOOM 3"), "doom");
  assert.equal(categorizeSource("DOOM 2"), "doom");

  console.log("3. Testing verb detection on 'paradigmă' (noun)...");
  const nounDefs = [
    {
      id: "dex",
      sourceName: "DEX '09",
      htmlRep: 'PARADÍGMĂ, <abbr data-bs-content="substantiv">s. f.</abbr> 1. Ansamblu de forme flexionare.',
    },
    {
      id: "doom",
      sourceName: "DOOM 3",
      htmlRep: 'paradígmă s. f., g.-d. art. paradígmei; pl. paradígme',
    },
  ];
  const paradigmaVerb = detectVerb("paradigmă", nounDefs);
  assert.equal(paradigmaVerb.isVerb, false, "paradigmă must NOT be detected as a verb!");

  console.log("4. Testing verb detection on 'citi' (verb)...");
  const verbDefs = [
    {
      id: "dex",
      sourceName: "DEX '09",
      htmlRep: 'CITÍ, <abbr data-bs-content="verb">vb. IV.</abbr> Tranz. A parcurge cu privirea semne grafice.',
    },
    {
      id: "doom",
      sourceName: "DOOM 3",
      htmlRep: 'cití (a ~) vb., ind. prez. 1 sg. și 3 pl. citésc',
    },
  ];
  const citiVerb = detectVerb("citi", verbDefs);
  assert.equal(citiVerb.isVerb, true, "citi MUST be detected as a verb!");
  assert.equal(citiVerb.verbInfinitive, "citi");

  console.log("5. Testing exact noun vs adjective disambiguation for 'exuberanta' and 'incandescenta'...");
  const exuberantaRes = await fetchWordDefinitions("exuberanta");
  assert.ok(exuberantaRes, "exuberanta should return definitions");
  assert.equal(exuberantaRes.definitions.length, 2, "Must return strictly 2 definitions for exuberanta");
  assert.equal(stripDiacritics(extractHeadword(exuberantaRes.definitions[0])), "exuberanta");
  assert.ok(
    exuberantaRes.definitions[0].htmlRep.includes("s. f.") ||
      exuberantaRes.definitions[0].internalRep?.includes("#s. f.#"),
    "exuberanta must return noun (s. f.), NOT adjective!"
  );

  const incandescentaRes = await fetchWordDefinitions("incandescenta");
  assert.ok(incandescentaRes, "incandescenta should return definitions");
  assert.equal(incandescentaRes.definitions.length, 2, "Must return strictly 2 definitions for incandescenta");
  assert.equal(stripDiacritics(extractHeadword(incandescentaRes.definitions[0])), "incandescenta");
  assert.ok(
    incandescentaRes.definitions[0].htmlRep.includes("s. f.") ||
      incandescentaRes.definitions[0].internalRep?.includes("#s. f.#"),
    "incandescenta must return noun (s. f.), NOT adjective!"
  );

  const incadescentaTypoRes = await fetchWordDefinitions("incadescenta");
  assert.ok(incadescentaTypoRes, "incadescenta typo should resolve via suggestions");
  assert.equal(stripDiacritics(incadescentaTypoRes.word), "incandescenta");
  assert.equal(incadescentaTypoRes.definitions.length, 2);

  const exuberantAdjRes = await fetchWordDefinitions("exuberant");
  assert.ok(exuberantAdjRes, "exuberant should return definitions");
  assert.equal(stripDiacritics(extractHeadword(exuberantAdjRes.definitions[0])), "exuberant");
  assert.ok(
    exuberantAdjRes.definitions[0].htmlRep.includes("adj.") ||
      exuberantAdjRes.definitions[0].internalRep?.includes("#adj.#"),
    "exuberant must return adjective (adj.)"
  );

  console.log("6. Testing real live dictionary queries (network)...");
  const testWords = ["paradigmă", "carte", "citi", "om", "sustenabil"];
  for (const word of testWords) {
    const res = await fetchWordDefinitions(word);
    assert.ok(res, `Response should exist for ${word}`);
    assert.equal(
      res.definitions.length,
      2,
      `Word '${word}' must return strictly 2 definitions, got ${res.definitions.length}`
    );
    assert.ok(
      categorizeSource(res.definitions[0].sourceName) === "dex",
      `First definition of ${word} must be DEX`
    );
    assert.ok(
      categorizeSource(res.definitions[1].sourceName) === "doom",
      `Second definition of ${word} must be DOOM`
    );
  }

  console.log("7. Testing 404 handling...");
  const notFound = await fetchWordDefinitions("xyznonexistentword9999");
  assert.equal(notFound, null, "Non-existent word should return null");

  console.log("✔ All dictionary tests passed: strictly 2 definitions (latest DEX + latest DOOM)!");
}

testDictionary().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
