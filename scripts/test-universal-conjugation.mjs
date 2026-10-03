import assert from 'node:assert';
import { conjugate, lemmatize } from '../lib/conjugation/engine.ts';

console.log('Testing Romanian Conjugation Engine...');

// Test 1: Irregular & Alternating Verbs (Tier 1)
{
  const fi = conjugate('a fi');
  assert.strictEqual(fi.infinitive, 'fi');
  assert.strictEqual(fi.isIrregular, true);
  assert.strictEqual(fi.group, 4);
  assert.strictEqual(fi.indicativ.prezent[0], 'sunt');
  assert.strictEqual(fi.indicativ.prezent[1], 'ești');
  assert.strictEqual(fi.indicativ.prezent[2], 'este');
  assert.strictEqual(fi.indicativ.imperfect[0], 'eram');
  assert.strictEqual(fi.indicativ.maiMultCaPerfect[0], 'fusesem');
  assert.strictEqual(fi.imperativ.afirmativ.s2, 'fii');
  assert.strictEqual(fi.imperativ.negativ.s2, 'nu fi');
  assert(fi.notes && fi.notes.length > 0);
  console.log('✓ a fi verified');

  const vrea = conjugate('vrea');
  assert.strictEqual(vrea.indicativ.prezent[0], 'vreau');
  assert.strictEqual(vrea.indicativ.imperfect[0], 'voiam');
  assert(vrea.notes?.some(n => n.rule.includes('voiam')));
  console.log('✓ a vrea verified');

  const aseza = conjugate('așeza');
  assert.strictEqual(aseza.indicativ.prezent[2], 'așază');
  assert.strictEqual(aseza.conjunctiv.prezent[2], 'să așeze');
  console.log('✓ a așeza verified (DOOM3 așază/așeze)');

  const crea = conjugate('crea');
  assert.strictEqual(crea.indicativ.prezent[0], 'creez');
  assert.strictEqual(crea.indicativ.prezent[2], 'creează');
  console.log('✓ a crea verified (DOOM3 creez/creează)');

  const copia = conjugate('copia');
  assert.strictEqual(copia.indicativ.prezent[2], 'copiază');
  console.log('✓ a copia verified (DOOM3 copiază)');

  const veni = conjugate('veni');
  assert.strictEqual(veni.imperativ.afirmativ.s2, 'vino');
  assert.strictEqual(veni.imperativ.negativ.s2, 'nu veni');
  console.log('✓ a veni verified (vino! / nu veni!)');

  // Alternating verbs
  const dormi = conjugate('dormi');
  assert.strictEqual(dormi.indicativ.prezent[2], 'doarme');
  assert.strictEqual(dormi.conjunctiv.prezent[2], 'să doarmă');
  assert.strictEqual(dormi.imperativ.afirmativ.s2, 'dormi');
  console.log('✓ a dormi verified (DOOM3 doarme/să doarmă/dormi!)');

  const simti = conjugate('simți');
  assert.strictEqual(simti.indicativ.prezent[0], 'simt');
  assert.strictEqual(simti.indicativ.prezent[1], 'simți');
  assert.strictEqual(simti.indicativ.prezent[2], 'simte');
  assert.strictEqual(simti.indicativ.prezent[5], 'simt');
  console.log('✓ a simți verified (simt/simți/simte)');

  const pleca = conjugate('pleca');
  assert.strictEqual(pleca.indicativ.prezent[2], 'pleacă');
  assert.strictEqual(pleca.indicativ.prezent[5], 'pleacă');
  console.log('✓ a pleca verified (pleacă)');

  const invata = conjugate('învăța');
  assert.strictEqual(invata.indicativ.prezent[1], 'înveți');
  assert.strictEqual(invata.indicativ.prezent[2], 'învață');
  console.log('✓ a învăța verified (înveți/învață)');

  const tine = conjugate('ține');
  assert.strictEqual(tine.indicativ.prezent[1], 'ții');
  assert.strictEqual(tine.formeNepersonale.participiu, 'ținut');
  console.log('✓ a ține verified (ții/ținut)');
}

// Test 2: Regular Verbs Across All 4 Groups (Tier 2)
{
  // Group I without suffix
  const canta = conjugate('cânta');
  assert.strictEqual(canta.group, 1);
  assert.strictEqual(canta.indicativ.prezent[0], 'cânt');
  assert.strictEqual(canta.indicativ.prezent[1], 'cânți');
  assert.strictEqual(canta.indicativ.prezent[2], 'cântă');
  assert.strictEqual(canta.indicativ.imperfect[0], 'cântam');
  assert.strictEqual(canta.indicativ.perfectCompus[0], 'am cântat');
  assert.strictEqual(canta.indicativ.viitorStandard[0], 'voi cânta');
  assert.strictEqual(canta.conditional.prezent[2], 'ar cânta');
  console.log('✓ a cânta verified (Gr I suffixless)');

  // Group I with -ez
  const lucra = conjugate('lucra');
  assert.strictEqual(lucra.group, 1);
  assert.strictEqual(lucra.indicativ.prezent[0], 'lucrez');
  assert.strictEqual(lucra.indicativ.prezent[2], 'lucrează');
  assert.strictEqual(lucra.conjunctiv.prezent[2], 'să lucreze');
  console.log('✓ a lucra verified (Gr I -ez)');

  // Group II (-ea)
  const aparea = conjugate('apărea');
  assert.strictEqual(aparea.group, 2);
  assert.strictEqual(aparea.formeNepersonale.participiu, 'apărut');
  assert.strictEqual(aparea.conditional.prezent[2], 'ar apărea');
  console.log('✓ a apărea verified (Gr II -ea)');

  // Group III (-e)
  const bate = conjugate('bate');
  assert.strictEqual(bate.group, 3);
  assert.strictEqual(bate.indicativ.prezent[0], 'bat');
  assert.strictEqual(bate.indicativ.prezent[1], 'bați');
  assert.strictEqual(bate.indicativ.prezent[2], 'bate');
  assert.strictEqual(bate.formeNepersonale.participiu, 'bătut');
  console.log('✓ a bate verified (Gr III -e)');

  // Group IV (-i with -esc)
  const citi = conjugate('citi');
  assert.strictEqual(citi.group, 4);
  assert.strictEqual(citi.indicativ.prezent[0], 'citesc');
  assert.strictEqual(citi.indicativ.prezent[1], 'citești');
  assert.strictEqual(citi.indicativ.prezent[2], 'citește');
  assert.strictEqual(citi.indicativ.perfectCompus[0], 'am citit');
  console.log('✓ a citi verified (Gr IV -esc)');
}

// Test 3: Compound Verbs & Prefix Inheritance (Tier 3)
{
  const conduce = conjugate('conduce');
  assert.strictEqual(conduce.formeNepersonale.participiu, 'condus');
  assert.strictEqual(conduce.imperativ.afirmativ.s2, 'condu');
  assert.strictEqual(conduce.imperativ.negativ.s2, 'nu conduce');
  console.log('✓ a conduce verified (condus / condu!)');

  const desface = conjugate('desface');
  assert.strictEqual(desface.formeNepersonale.participiu, 'desfăcut');
  assert.strictEqual(desface.imperativ.afirmativ.s2, 'desfă');
  console.log('✓ a desface verified (desfăcut / desfă!)');

  const transmite = conjugate('transmite');
  assert.strictEqual(transmite.formeNepersonale.participiu, 'transmis');
  assert.strictEqual(transmite.indicativ.prezent[0], 'transmit');
  assert.strictEqual(transmite.conjunctiv.prezent[2], 'să transmită');
  console.log('✓ a transmite verified (transmis / să transmită)');

  const sustine = conjugate('susține');
  assert.strictEqual(sustine.indicativ.prezent[1], 'susții');
  assert.strictEqual(sustine.formeNepersonale.participiu, 'susținut');
  console.log('✓ a susține verified (susții / susținut)');
}

// Test 4: Neologisms and Arbitrary / Invented Verbs
{
  const tele = conjugate('a teleporta');
  assert.strictEqual(tele.infinitive, 'teleporta');
  assert.strictEqual(tele.group, 1);
  assert.strictEqual(tele.indicativ.prezent[0], 'teleportez');
  assert.strictEqual(tele.indicativ.prezent[2], 'teleportează');
  assert.strictEqual(tele.indicativ.perfectCompus[0], 'am teleportat');
  assert.strictEqual(tele.indicativ.viitorStandard[0], 'voi teleporta');
  console.log('✓ a teleporta verified (neologism Gr I)');

  const digi = conjugate('digitaliza');
  assert.strictEqual(digi.indicativ.prezent[0], 'digitalizez');
  assert.strictEqual(digi.formeNepersonale.participiu, 'digitalizat');
  console.log('✓ a digitaliza verified (neologism Gr I)');

  const gugali = conjugate('gugăli');
  assert.strictEqual(gugali.group, 4);
  assert.strictEqual(gugali.indicativ.prezent[0], 'gugălesc');
  assert.strictEqual(gugali.indicativ.prezent[2], 'gugălește');
  console.log('✓ a gugăli verified (invented Gr IV)');
}

// Test 5: Reverse Lemmatizer
{
  assert.strictEqual(lemmatize('fuseserăm'), 'fi');
  assert.strictEqual(lemmatize('erau'), 'fi');
  assert.strictEqual(lemmatize('făcuseși'), 'face');
  assert.strictEqual(lemmatize('mergând'), 'merge');
  assert.strictEqual(lemmatize('mers'), 'merge');
  assert.strictEqual(lemmatize('așază'), 'așeza');
  assert.strictEqual(lemmatize('așează'), 'așeza');
  assert.strictEqual(lemmatize('copiază'), 'copia');
  assert.strictEqual(lemmatize('citit'), 'citi');
  assert.strictEqual(lemmatize('mâncasem'), 'mânca');
  assert.strictEqual(lemmatize('condus'), 'conduce');
  assert.strictEqual(lemmatize('tradus'), 'traduce');
  assert.strictEqual(lemmatize('desfăcut'), 'desface');
  assert.strictEqual(lemmatize('transmis'), 'transmite');
  assert.strictEqual(lemmatize('permis'), 'permite');
  assert.strictEqual(lemmatize('iubește'), 'iubi');
  assert.strictEqual(lemmatize('vroiam'), 'vrea');
  assert.strictEqual(lemmatize('123'), 'fi');
  assert.strictEqual(lemmatize('a   '), 'fi');
  console.log('✓ Reverse Lemmatizer verified on all inflected, compound and trap forms');
}

console.log('\nAll 5 test suites passed with 100% success!');
