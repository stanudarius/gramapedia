# Gramapedia — Knowledge Graph pentru teoria gramaticii române

- **Sursă:** `Teorie.pdf`, extras local cu Microsoft MarkItDown (offline).
- **Extras la:** 22 septembrie 2026.
- **Organizare:** programa este modelată pe unități, sesiuni și lecții, conform structurii furnizate pentru site.
- **Formate:** `teorie-extrasa.txt` păstrează extracția brută; acest fișier păstrează programa și nodurile de sursă.
- **Fidelitate:** teoria extrasă este păstrată în nodurile de sursă; `planned` înseamnă că tema este în programă, dar nu apare suficient în PDF-ul extras.
- **Scop:** bază de cunoaștere pentru explicații, quiz-uri și navigare între concepte în aplicația Gramapedia.

## Convenții

- `id` este identificatorul stabil al unui nod.
- `parent` arată poziția nodului în ierarhie.
- `source` leagă
- lecție de capitolele extrase din PDF.
- `present` = acoperire directă în PDF; `partial` = acoperire parțială; `planned` = nod de programă care trebuie completat ulterior; `supplementary` = material afișat separat de lecțiile propriu-zise.
- Legăturile folosesc sintaxa de tip `[[FON-001]]` pentru a putea fi indexate ulterior.

## Rădăcina grafului

## `GRA-ROOT` — Gramatica limbii române

- **tip:** domeniu
- **children:** [[CUR-01]], [[CUR-02]], [[CUR-03]], [[CUR-04]], [[CUR-05]], [[CUR-06]]
- **source nodes:** [[FON-001]], [[ORT-001]], [[SIL-001]], [[LEX-001]], [[LEX-002]], [[MOR-001]], [[MOR-002]], [[MOR-003]], [[MOR-004]], [[MOR-005]], [[MOR-006]], [[MOR-007]], [[MOR-008]], [[MOR-009]], [[MOR-010]], [[SIN-001]]

## Harta programei

| Unitate | Sesiuni |
| --- | --- |
| `[[CUR-01]]` 1. FONETICĂ — ORTOGRAFIE ȘI ORTOEPIE | S1 — Ortografie și ortoepie: Fonetica, partea I; S2 — Ortografie și ortoepie: Fonetica, partea a II-a |
| `[[CUR-02]]` 2. VOCABULAR | S3 — Cuvântul; S4 — Mijloace de îmbogățire a vocabularului |
| `[[CUR-03]]` 3. MORFOLOGIE — PĂRȚI DE VORBIRE FLEXIBILE | S5 — Verbul, partea I; S6 — Verbul, partea a II-a; S7 — Construcții sintactice; S8 — Substantivul; S9 — Articolul; S9 — Adjectivul; S10 — Numeralul; S11 — Pronumele, partea I; S12 — Pronumele, partea a II-a |
| `[[CUR-04]]` 4. MORFOLOGIE — PĂRȚI DE VORBIRE NEFLEXIBILE | S13 — Adverbul și prepoziția; S14 — Conjuncția și interjecția |
| `[[CUR-05]]` 5. SINTAXĂ | S15 — Predicatul; S15 — Subiectul. Acordul predicatului cu subiectul; S16 — Enunțul, propoziția, fraza; S17 — Atributul. Atributiva. Apoziția; S18 — Complementul direct; S18 — Complementul indirect; S19 — Complementul prepozițional; S20 — Circumstanțialul de mod; S20 — Circumstanțialul de timp; S20 — Circumstanțialul de loc; S21 — Circumstanțialul de cauză; S21 — Circumstanțialul de scop |
| `[[CUR-06]]` 6. ORTOGRAFIE ȘI PUNCTUAȚIE | S23 — Semne de ortografie. Scrierea cu literă mare |

## Reguli de numărare

- S1–S2 au împreună 7 lecții propriu-zise; testele sunt separate.
- S4 nu numără materialele suplimentare despre cuvintele de origine străină.
- S9 apare în două zone ale programei: articolul are 4 lecții, iar adjectivul are doar aplicații/teste.
- S15 apare pentru predicat și pentru subiect, exact ca în structura furnizată.
- S18 apare separat pentru complementul direct și complementul indirect.
- S20 apare pentru mod, timp și loc; S21 apare pentru cauză și scop.
- S22 nu este listată în structura furnizată; numerotarea sare de la S21 la S23.

## Noduri de programă

## `CUR-01` — 1. FONETICĂ — ORTOGRAFIE ȘI ORTOEPIE

- **tip:** unitate de programă
- **parent:** `GRA-ROOT`
- **children:** [[SES-S1]], [[SES-S2]]

### `SES-S1` — S1 — Ortografie și ortoepie: Fonetica, partea I

- **tip:** sesiune
- **parent:** `[[CUR-01]]`
- **lessons:** [[LES-S1-01]], [[LES-S1-02]], [[LES-S1-03]], [[LES-S1-04]]

#### `LES-S1-01` — Alfabetul limbii române

- **tip:** lecție
- **parent:** `SES-S1`
- **status:** `present`
- **source:** [[FON-001]]

### Conținut extras și normalizat

- **Definiție:** Alfabetul limbii române este totalitatea literelor așezate într-o ordine convențională consacrată, utilizate pentru redarea în scris a sunetelor limbii române.
- **Componență:** Alfabetul românesc conține **31 de litere** (dintre care 5 conțin semne diacritice: *ă, â, î, ș, ț*) și redă **34 de sunete**.

---

### A. LITERELE ALFABETULUI LIMBII ROMÂNE

1. Litere mari și mici: *A a*, *Ă ă*, *Â â*, *B b*, *C c*, *D d*, *E e*, *F f*, *G g*, *H h*, *I i*, *Î î*, *J j*, *K k*, *L l*, *M m*, *N n*, *O o*, *P p*, *Q q*, *R r*, *S s*, *Ș ș*, *T t*, *Ț ț*, *U u*, *V v*, *W w*, *X x*, *Y y*, *Z z*.
2. Litere specifice neologismelor și împrumuturilor: *k, q, w, y* (*kilogram*, *quasar*, *watt*, *yoga*).

---

### B. DIACRITICELE STANDARD

În grafia oficială a limbii române se utilizează **virgula dedesubt** pentru *ș* și *ț* (nu cedila):
- *Ș* (S cu virgulă dedesubt, U+0218 / U+0219);
- *Ț* (T cu virgulă dedesubt, U+021A / U+021B).

---

### C. REGULA DE UTILIZARE A LUI *Î* ȘI *Â*

- **Î** se scrie obligatoriu:
  - La începutul cuvintelor: *început*, *înger*, *înțelept*;
  - La sfârșitul cuvintelor: *a hotărî*, *a coborî*;
  - În interiorul cuvintelor derivate cu prefixe de la cuvinte care încep cu *î*: *neîntrerupt*, *reîncepe*, *preîntâmpina*;
  - În cuvinte compuse: *bineînțeles*.
- **Â** se scrie în interiorul cuvintelor nesupuse regulilor de mai sus: *român*, *cântar*, *pâine*, *vânt*, *adânc*.

#### `LES-S1-02` — Tipuri de sunete. Valorile literelor

- **tip:** lecție
- **parent:** `SES-S1`
- **status:** `present`
- **source:** [[FON-001]]

### Conținut extras și normalizat

- **Definiție:** Sunetele limbii române se clasifică din punct de vedere funcțional și articulatoriu în vocale, semivocale și consoane.
- **Raportul sunet – literă:** Nu există o identitate absolută între numărul de litere și numărul de sunete, deoarece unele litere au valori multiple, iar unele grupuri de litere redau un singur sunet.

---

### A. VOCALELE (7)

Sunete care se rostesc fără obstacole în canalul fonator și pot alcătui singure o silabă:
- *a*, *e*, *i*, *o*, *u*, *ă*, *î/â*.
- Fiecare silabă din limba română conține **obligatoriu o singură vocală**. Numărul de silabe este întotdeauna egal cu numărul de vocale.

---

### B. SEMIVOCALELE (4)

Sunete cu proprietăți intermediare între vocale și consoane, care nu pot forma silabă singure:
- *e*, *i*, *o*, *u* (în neologisme și *y*).
- Se asociază întotdeauna cu o vocală în cadrul aceleiași silabe pentru a alcătui diftongi sau triftongi (*soare* [o = semivocală, a = vocală], *iarbă* [i = semivocală, a = vocală]).

---

### C. VALORILE MULTIPLE ALE LITERELOR

1. **Litera I:**
   - Vocală deplină: *vi-ne*, *i-nel*;
   - Semivocală: *iar-bă*, *pui*, *te-i*;
   - I scurt (asilabic / afonizat): la sfârșitul cuvintelor după consoană, marcând doar palatalizarea (*meri*, *lupi*, *bani*, *brazi*);
   - Literă ajutătoare: în grupurile *ci*, *gi*, *chi*, *ghi* (*meci*, *legi*, *ochi*).
2. **Litera E:**
   - Vocală deplină: *re-ce*;
   - Semivocală: *deal*, *sea-ră*;
   - Valoare diftongată [ie]: în pronumele personale (*eu*, *el*, *ei*, *ele*) și formele verbului *a fi* (*este*, *e*, *eram*, *erai*);
   - Literă ajutătoare: în grupurile *ce*, *ge*, *che*, *ghe* (*ceas*, *geam*, *ghea-ță*).

#### `LES-S1-03` — Corespondența sunet – literă

- **tip:** lecție
- **parent:** `SES-S1`
- **status:** `present`
- **source:** [[FON-001]]

### Conținut extras și normalizat

- **Definiție:** Corespondența sunet – literă reprezintă raportul dintre semnele grafice ale unui cuvânt (litere) și unitățile fonetice percepute acustic (sunete).
- **Regulă generală:** De regulă, fiecărei litere îi corespunde un sunet (*carte* = 5 litere, 5 sunete). Asimetriile apar în prezența literei *X* și a grupurilor de litere.

---

### A. LITERA X (O LITERĂ = DOUĂ SUNETE)

Litera *x* transcrie întotdeauna un grup de două consoane:
- Grupul [cs]: *box* (3 litere, 4 sunete: [b-o-c-s]), *fix*, *taxă*, *sfinx*, *pix*;
- Grupul [gz]: *examen* (6 litere, 7 sunete: [e-g-z-a-m-e-n]), *exact*, *exemplu*, *exotic*.

---

### B. GRUPURILE DE LITERE: CE, CI, GE, GI, CHE, CHI, GHE, GHI

Numărul de sunete se stabilește în funcție de prezența unei alte vocale în silabă:
1. **Dacă în silabă există o altă vocală:** litera *e* sau *i* din grup este doar **literă ajutătoare** (nu este sunet de sine stătător):
   - *ceas* [č a s] = 4 litere, 3 sunete (*e* = literă ajutătoare);
   - *cior-bă* [č o r b ă] = 6 litere, 5 sunete (*i* = literă ajutătoare);
   - *geam* [ğ a m] = 4 litere, 3 sunete (*e* = literă ajutătoare);
   - *chior* [k' o r] = 5 litere, 3 sunete (*h, i* = litere ajutătoare);
   - *ghem* [g' e m] = 4 litere, 3 sunete (*h* = literă ajutătoare, *e* = vocală).
2. **Dacă în silabă nu există altă vocală:** litera *e* sau *i* este **vocală deplină**:
   - *ce-re* [č e r e] = 4 litere, 4 sunete;
   - *ci-ne* [č i n e] = 4 litere, 4 sunete;
   - *chin* [k' i n] = 4 litere, 3 sunete (*h* = literă ajutătoare, *i* = vocală);
   - *ghid* [g' i d] = 4 litere, 3 sunete (*h* = literă ajutătoare, *i* = vocală).
3. **La final de cuvânt neaccentuat:** litera *i* este literă ajutătoare:
   - *maci* [m a č] = 4 litere, 3 sunete;
   - *dragi* [d r a ğ] = 5 litere, 4 sunete;
   - *ochi* [o k'] = 4 litere, 2 sunete;
   - *unghi* [u n g'] = 5 litere, 3 sunete.

#### `LES-S1-04` — Structura fonologică a cuvintelor: diftong, triftong, hiat

- **tip:** lecție
- **parent:** `SES-S1`
- **status:** `present`
- **source:** [[FON-001]]

### Conținut extras și normalizat

- **Definiție:** Structura fonologică a cuvintelor privește îmbinarea vocalelor și a semivocalelor în silabe, generând diftongi, triftongi sau hiaturi.

---

### A. DIFTONGUL

Grup de două sunete (o vocală și o semivocală) pronunțate în aceeași silabă:
1. **Diftong ascendent (urcător):** semivocală + vocală.
   - *soa-re* [o-a], *ploa-ie* [o-a], *iar-bă* [i-a], *deal* [e-a].
2. **Diftong descendent (coborâtor):** vocală + semivocală.
   - *mai-că* [a-i], *pâi-ne* [â-i], *greu* [e-u], *pui* [u-i], *câi-ne* [â-i].
3. **Diftong de joncțiune (morfologic):** format prin cratimă între cuvinte diferite (*să-i*, *i-am*, *ți-a*).

---

### B. TRIFTONGUL

Grup de trei sunete (o vocală și două semivocale) pronunțate în aceeași silabă:
1. **Triftong ascendent:** semivocală + semivocală + vocală (*a-ri-pioa-ră* [i-o-a], *cre-ioa-ne* [i-o-a]).
2. **Triftong centrat:** semivocală + vocală + semivocală (*le-oai-că* [e-a-i], *tră-iau* [i-a-u], *ve-neau* [e-a-u], *lu-poai-că* [o-a-i]).
3. **Triftong de joncțiune:** *mi-ai*, *i-au*, *ți-ai*.

---

### C. HIATUL

Întâlnirea a două vocale alăturate care fac parte din silabe diferite:
1. **Hiat cu vocale identice:** *a-a* (*con-tra-ar-gu-ment*), *e-e* (*a-le-e*, *li-ce-e*), *i-i* (*fi-in-ță*, *ști-in-ță*), *o-o* (*al-co-ol*, *co-o-pe-ra-tiv*), *u-u* (*va-cu-um*, *a-si-du-u*).
   - Atenție: *fii-că* conține diftong descendent [i-i], nu hiat.
2. **Hiat cu vocale diferite:** *u-e* (*a-flu-ent*, *si-lu-e-tă*), *i-e* (*ro-chi-e*, *po-e-zi-e*), *o-e* (*bo-em*, *po-et*), *e-a* (*a-li-ne-at*, *re-al*), *o-a* (*cro-at*), *a-e* (*a-er*, *ma-es-tru*).
3. **Hiat sintactic:** Apare la granița dintre două cuvinte: *pe unde*, *de acolo*.

### `SES-S2` — S2 — Ortografie și ortoepie: Fonetica, partea a II-a

- **tip:** sesiune
- **parent:** `[[CUR-01]]`
- **lessons:** [[LES-S2-01]], [[LES-S2-02]], [[LES-S2-03]]
- **notes:**
  - S1 și S2 conțin 7 lecții propriu-zise; testele aferente sunt prezentate separat pe site.

#### `LES-S2-01` — Silaba. Despărțirea în silabe

- **tip:** lecție
- **parent:** `SES-S2`
- **status:** `present`
- **source:** [[SIL-001]]

### Conținut extras și normalizat

- **Definiție:** Silaba este o unitate fonetică articulată printr-un singur impuls respirator, organizată obligatoriu în jurul **unei singure vocale**.
- **Norme (DOOM):** Despărțirea în silabe se realizează prioritar **după pronunțare** (despărțire fonetică).

---

### A. REGULILE DESPĂRȚIRII FONETICE

1. **O consoană între două vocale (V - CV):** Consoana trece întotdeauna în silaba următoare:
   - *ca-să*, *ma-re*, *pa-tă*, *floa-re*, *vo-ioa-să*.
   - Grupurile *ch, gh* urmate de *e, i* trec împreună: *u-re-che*, *ve-ghe*.
2. **Două consoane între două vocale (VC - CV):** Se despart între ele:
   - *car-te*, *mun-te*, *mun-că*, *ar-mă*, *cos-tum*, *ac-tiv*.
   - **Excepție (ocluzivă/fricativă + l/r):** Când a doua consoană este *l* sau *r*, iar prima este *b, c, d, f, g, h, p, t, v*, ambele consoane trec în silaba următoare: *ta-blă*, *o-blig*, *co-dru*, *a-fla*, *li-tru*, *pe-hli-van*, *a-tlet*, *co-vrig*.
3. **Trei sau mai multe consoane între două vocale:**
   - **Caz general (VC - CCV):** *as-tru*, *mon-stru*, *om-let*, *lin-gvist*.
   - **Excepție (VCC - CV):** La grupurile *l-p-t, m-p-t, m-p-ț, n-c-t, n-d-v, r-c-t, r-t-f, s-t-m*, despărțirea se face după a doua consoană: *sculp-tor*, *somp-tu-os*, *redemp-ți-u-ne*, *punc-taj*, *func-ți-e*, *sand-viș*, *arc-tic*, *jert-fă*, *ast-matic*.

---

### B. DESPĂRȚIREA VOCALELOR ÎN HIAT

Două vocale alăturate se despart întotdeauna: *a-er*, *po-et*, *li-ce-e*, *va-cu-um*. Diftongii și triftongii nu se despart niciodată în interiorul lor (*soa-re*, *mai-că*, *le-oai-că*).

---

### C. INTERDICȚII LA CAPĂT DE RÂND

- Nu se lasă o singură literă la sfârșit sau început de rând (*a-ce-ea* se desparte *ace-ea*).
- Nu se despart numele proprii de persoană (*Mihai Eminescu*), siglele (*UNESCO*, *C.F.R.*) și numeralele de substantivul determinat (*10 kg*, *25 de elevi*).

#### `LES-S2-02` — Accentul. Utilizarea corectă a accentului

- **tip:** lecție
- **parent:** `SES-S2`
- **status:** `present`
- **source:** [[FON-001]]

### Conținut extras și normalizat

- **Definiție:** Accentul reprezintă pronunțarea cu o intensitate acustică sporită a vocalei dintr-o silabă a unui cuvânt.
- **Tipul accentului:** În limba română accentul este **liber** și **mobil**, nefiind fixat pe o anumită silabă (*pái-spre-ze-ce*, *u-zí-nă*, *în-flă-că-rát*).

---

### A. ROLUL DISTINCTIV AL ACCENTULUI

1. **Diferențiază timpul verbal:**
   - *el adúnă* (prezent) vs. *el adunắ* (perfect simplu);
   - *el ádmiră* (prezent) vs. *el admirắ* (perfect simplu);
   - *el áflă* (prezent) vs. *el aflắ* (perfect simplu).
2. **Diferențiază persoana și timpul:**
   - *tu aúzi* (prezent pers. a II-a) vs. *el auzí* (perfect simplu pers. a III-a);
   - *tu iéși* vs. *el ieșí*.
3. **Diferențiază clasa gramaticală:**
   - *véselă* (adjectiv) vs. *vesélă* (substantiv);
   - *áltoi* (substantiv) vs. *altói* (verb);
   - *báră* (substantiv) vs. *barắ* (verb).
4. **Diferențiază sensul lexical:**
   - *țárină* (ogor) vs. *țarínă* (soția țarului);
   - *tórturi* (dulciuri) vs. *tortúri* (chinuri);
   - *modéle* (manechine, tipare) vs. *módele* (obiceiuri);
   - *cúrele* (tratamente) vs. *curéle* (curele de piele).

---

### B. ACCENTUĂRI FRECVENTE CONFORM DOOM

- **Pe prima silabă:** *dóctoriță*, *férfeniță*, *bívoliță*, *lápoviță*, *prépeliță*, *chécheriță*, *șlíboviță*, *gắrgăriță*, *mắgăriță*, *ámforă*, *áripă*.
- **Cuvinte cu accent unic corect:** *anost*, *caracter*, *fenomen*, *furie*, *regizor*, *subterfugiu*, *unic*.

#### `LES-S2-03` — Scrierea și pronunția cuvintelor de origine străină

- **tip:** lecție
- **parent:** `SES-S2`
- **status:** `present`
- **source:** [[FON-001]], [[ORT-001]]

### Conținut extras și normalizat

- **Definiție:** Cuvintele de origine străină (neologisme, xenisme, împrumuturi recente) prezintă particularități de ortografie și ortoepie determinate de gradul lor de adaptare la sistemul limbii române.

---

### A. CUVINTE COMPLET ADAPTATE

Se scriu și se pronunță conform normelor generale ale limbii române:
- *lider* (din engl. *leader*), *meci* (din engl. *match*), *gol* (din engl. *goal*), *șut* (din engl. *shoot*), *blugi* (din engl. *blue jeans*).

---

### B. CUVINTE NEADAPTATE SAU PARȚIAL ADAPTATE

Păstrează grafia și pronunția din limba de origine:
1. **Păstrarea grafiei originale:**
   - *business*, *cowboy*, *design*, *hobby*, *management*, *marketing*, *mall*, *pizza*, *show*, *site*, *weekend*.
2. **Atașarea articolului hotărât enclitic:**
   - Dacă termenul se termină într-o literă care se pronunță la fel ca în limba română, articolul se leagă **fără cratimă**: *boardul*, *clickul*, *gadgetul*, *trendul*.
   - Dacă termenul se termină într-o literă care nu se pronunță sau se pronunță diferit de scriere, articolul se atașează **prin cratimă**: *show-ul*, *site-ul*, *mouse-ul*, *bleu-ul*, *cowboy-ul*, *dandy-ul*.

## `CUR-02` — 2. VOCABULAR

- **tip:** unitate de programă
- **parent:** `GRA-ROOT`
- **children:** [[SES-S3]], [[SES-S4]]

### `SES-S3` — S3 — Cuvântul

- **tip:** sesiune
- **parent:** `[[CUR-02]]`
- **lessons:** [[LES-S3-01]], [[LES-S3-02]], [[LES-S3-03]], [[LES-S3-04]], [[LES-S3-05]], [[LES-S3-06]], [[LES-S3-07]], [[LES-S3-08]], [[LES-S3-09]], [[LES-S3-10]], [[LES-S3-11]]

#### `LES-S3-01` — Cuvântul: formă și sens

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Cuvântul este unitatea de bază a vocabularului, având o structură duală compusă din **formă** (înveliș sonor și grafic) și **sens** (conținut semantic).
- **Semn lingvistic:** Asocierea arbitrară și convențională dintre semnificant (sunetele/literele cuvântului) și semnificat (conceptul sau noțiunea reflectată în minte).

---

### A. FORMA CUVÂNTULUI

Reprezintă totalitatea fonemelor (sunetelor) sau a grafemelor (literelor) ordonate conform regulilor fonotactice ale limbii:
- Un cuvânt poate avea o singură formă canonică (la părțile de vorbire neflexibile: *aici*, *ieri*, *destul*) sau o paradigmă flexională extinsă (la părțile flexibile: *băiat, băiatul, băieți, băieților*).

---

### B. SENSUL CUVÂNTULUI

1. **Sensul lexical:** Conținutul noțional de bază, reflectarea mentală a obiectului, acțiunii sau însușirii.
2. **Sensul gramatical:** Semnificația conferită de categoriile morfologice (gen, număr, caz, mod, timp, persoană).
3. **Sensul de bază (propriu):** Sensul primar, uzual al cuvântului (*picior* = membru inferior al omului).
4. **Sensul secundar:** Sensul derivat din asemănare sau contiguitate (*piciorul mesei*, *piciorul podului*).
5. **Sensul figurat:** Sensul conotativ, metaforic (*la picioarele tale*, *pe picior mare*).

#### `LES-S3-02` — Categorii semantice

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Categoriile semantice desemnează tipurile de relații de sens care se stabilesc între cuvintele unei limbi: identitate sau asemănare de sens (sinonimie), opoziție (antonimie), identitate de formă (omonimie), proximitate sonoră (paronimie) și multiplicitate de sensuri (polisemantism).

---

### A. TIPURILE DE RELAȚII SEMANTICE

1. **Sinonimia:** Raport de echivalență semantică între forme diferite (*timp* / *vreme*).
2. **Antonimia:** Raport de polaritate, contrarietate sau opoziție semantică (*lumină* / *întuneric*).
3. **Omonimia:** Coincidență a formei pentru cuvinte complet diferite ca origine și sens (*lac* [apă] / *lac* [vopsea]).
4. **Paronimia:** Asemănare formală parțială între două cuvinte cu sensuri diferite (*eminent* / *iminent*).
5. **Polisemantismul:** Capacitatea unui singur cuvânt de a dezvolta sensuri multiple conectate la un nucleu comun (*masă*, *ochi*).

#### `LES-S3-03` — Sinonime

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Sinonimele sunt cuvintele cu formă diferită și sens identic sau foarte apropiat, care aparțin **aceleiași părți de vorbire**.

---

### A. CLASIFICAREA SINONIMELOR

1. **Sinonime totale (absolute):** Identitate perfectă de sens, interschimbabile în orice context:
   - *azot* = *nitrogen*;
   - *stomatologie* = *dentistică*;
   - *lexic* = *vocabular*;
   - *lingvistică* = *glotologie*.
2. **Sinonime parțiale (relative):** Se suprapun doar parțial în privința sferei semantice:
   - *față* = *chip* = *obraz* = *figură* (dar nu se poate spune *chip de masă* în loc de *față de masă*);
   - *cald* = *fierbinte* = *călduros*;
   - *drum* = *cale* = *șosea* = *traseu*.

---

### B. SINONIMIA ÎNTRE CUVÂNT ȘI LOCUȚIUNE

- *a muri* = *a da ortul popii*, *a trece în neființă*;
- *a fugi* = *a o lua la sănătoasa*;
- *a se supăra* = *a-și ieși din fire*;
- *aduce aminte* = *a aminti*.

#### `LES-S3-04` — Sinonime neologice în limba română

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Sinonimele neologice sunt cuvinte moderne, împrumutate recent din limbi de cultură (franceză, engleză, latină), care au același sens sau un sens foarte apropiat cu termeni tradiționali, populari sau arhaici din fondul vechi al limbii române.

---

### A. PERECHI SINONIMICE TRADIȚIONAL – NEOLOGIC

Utilizarea sinonimelor neologice îmbogățește exprimarea și asigură precizie terminologică în stilul științific, oficial și publicistic:
- *amănunt* → **detaliu**;
- *a îngădui* → **a tolera**, **a permite**;
- *a bănui* → **a suspecta**, **a presupune**;
- *fățărie* → **ipocrizie**, **duplicitate**;
- *singuratic* → **solitar**;
- *sfat* → **recomandare**, **consiliere**;
- *izbândă* → **triumf**, **victorie**;
- *adâncime* → **profunzime**;
- *rugăminte* → **solicitare**, **petiție**;
- *a se potrivi* → **a corespunde**, **a concorda**;
- *neschimbat* → **invariabil**, **constant**;
- *înțelegere* → **acord**, **consens**.

---

### B. ATENȚIE LA NUANȚELE DE SENS ȘI STIL

Deși denumesc aceeași noțiune de bază, sinonimele neologice nu se pot substitui oricând cu termenul popular fără a modifica registrul stilistic:
- Termenul tradițional (*taină*) are valențe poetice și afective, în timp ce neologismul (*secret*) are caracter neutru sau administrativ.
- Folosirea excesivă sau forțată a neologismelor duce la prețiozitate și stil artificial.



- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Sinonimele neologice sunt cuvinte împrumutate recent din limbi moderne (franceză, engleză, latină savantă) care dublează termeni autohtoni sau mai vechi din limbă, oferind nuanțe stilistice mai elevate, precise sau specializate.

---

### A. PERECHI DE SINONIME AUTOHTON – NEOLOGIC

- *adânc* → *profund*;
- *hotar* → *frontieră* / *limită*;
- *fățărie* → *ipocrizie*;
- *bănuială* → *suspiciune*;
- *a cere* → *a solicita*;
- *a dovedi* → *a demonstra*;
- *îngăduință* → *toleranță*;
- *singurătate* → *solitudine*;
- *statornic* → *constant*;
- *taină* → *mister*;
- *urmaș* → *descendent*;
- *vestit* → *celebru* / *notoriu*;
- *leac* → *medicament* / *remediu*;
- *pricină* → *cauză* / *motiv*.

#### `LES-S3-05` — Antonime

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Antonimele sunt cuvinte cu sensuri direct opuse, care aparțin **aceleiași părți de vorbire** și se referă la aceeași axă noțională.

---

### A. FORMAREA ANTONIMELOR

1. **Cu rădăcini diferite (lexicale):**
   - Substantive: *lumină* vs. *întuneric*, *prieten* vs. *dușman*, *tinerețe* vs. *bătrânețe*, *pace* vs. *război*.
   - Adjective: *cald* vs. *rece*, *bun* vs. *rău*, *înalt* vs. *scund*, *frumos* vs. *urât*.
   - Verbe: *a urca* vs. *a coborî*, *a veni* vs. *a pleca*, *a deschide* vs. *a închide*.
   - Adverbe: *aproape* vs. *departe*, *repede* vs. *încet*, *sus* vs. *jos*.
2. **Cu prefixe antonimice (morfologice):**
   - Cu prefixul negativ *ne-*: *cinstit* vs. *necinstit*, *drept* vs. *nedrept*, *clar* vs. *neclar*.
   - Cu prefixul *in- / i-*: *legal* vs. *ilegal*, *moral* vs. *imoral*, *cert* vs. *incert*.
   - Cu prefixul privativ *des- / dez-*: *a face* vs. *a desface*, *a arma* vs. *a dezarma*, *a lipi* vs. *a dezlipi*.
   - Cu prefixul *non-*: *conformist* vs. *nonconformist*, *sens* vs. *nonsens*.

#### `LES-S3-06` — Omonime

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Omonimele sunt cuvinte identice ca formă (scriere și pronunție), dar complet diferite ca sens, provenind din origini (etimoane) diferite și neavând nicio legătură semantică între ele.

---

### A. CLASIFICAREA OMONIMELOR

1. **Omonime lexicale totale:** Au aceeași parte de vorbire și toate formele din paradigmă (singular și plural) sunt identice:
   - *lac* (apă stătătoare) — *lacuri* vs. *lac* (soluție pentru lemn) — *lacuri*;
   - *bancă* (instituție) — *bănci* vs. *bancă* (scaun) — *bănci*;
   - *broască* (animal) — *broaște* vs. *broască* (încuietoare) — *broaște*;
   - *pană* (penaj) — *pene* vs. *pană* (defecțiune) — *pene*.
2. **Omonime lexicale parțiale:** Au aceeași formă la singular, dar se diferențiază prin forme distincte de plural cu sensuri diferite:
   - *bandă:* *benzi* (fâșii) vs. *bande* (grupuri răufăcătoare);
   - *cot:* *coate* (articulații) vs. *coți* (unitate de măsură) vs. *coturi* (curbe ale râului);
   - *car:* *care* (vehicule) vs. *cari* (insecte);
   - *colț:* *colți* (dinți) vs. *colțuri* (unghiuri).
3. **Omonime lexico-gramaticale:** Forme identice care aparțin unor părți de vorbire diferite:
   - *cer* (substantiv) vs. *cer* (verb: *eu cer*);
   - *mare* (substantiv: întindere de apă) vs. *mare* (adjectiv: de mari dimensiuni);
   - *vie* (substantiv) vs. *vie* (adjectiv: *apă vie*);
   - *de* (prepoziție) vs. *de* (conjuncție) vs. *de* (interjecție).

#### `LES-S3-07` — Cuvinte monosemantice și polisemantice

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** În funcție de numărul de sensuri, cuvintele limbii române sunt monosemantice (au un singur sens) sau polisemantice (au două sau mai multe sensuri asociate).

---

### A. CUVINTELE MONOSEMANTICE

Au o singură semnificație exactă și neschimbată, fiind caracteristice terminologiei tehnico-științifice:
- *bioxid*, *clorofilă*, *hipotenuză*, *lingvistică*, *stetoscop*, *azot*, *paralelogram*.

---

### B. CUVINTELE POLISEMANTICE

Păstrează un nucleu de sens originar de la care se dezvoltă prin derivare semantică (metaforă sau metonimie) sensuri secundare și figurate:
1. *masă:*
   - Sens de bază: piesă de mobilier (*A așezat caietul pe masă*);
   - Sens secundar: mâncare, hrană (*Masa este servită*);
   - Sens figurat: ospăț, banchet (*Au dat o masă mare*).
2. *ochi:*
   - Sens de bază: organul vederii (*Ochii copilului*);
   - Sens secundar: ochi de fereastră, ochi de aragaz, ochi de apă;
   - Sens figurat: ochi de ou prăjit.
- **Diferența esențială față de omonime:** La cuvintele polisemantice sensurile sunt înrudite semantic și derivă din aceeași rădăcină; la omonime sensurile nu au nicio legătură și provin din surse etimologice distincte.

#### `LES-S3-08` — Paronimele. Confuzii paronimice

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Paronimele sunt cuvinte cu formă sonoră foarte asemănătoare (diferite printr-unul sau două sunete), dar cu sensuri complet distincte. Confuzia între paronime conduce la eroarea numită **atracție paronimică**.

---

### A. PERECHI PARONIMICE FRECVENTE LA EXAMENE

- *eminent* (excepțional, remarcabil) vs. *iminent* (inevitabil, care se va întâmpla curând);
- *a enerva* (a irita, a supăra) vs. *a inerva* (a transmite impulsuri nervoase către un organ);
- *complement* (funcție sintactică) vs. *compliment* (laudă, măgulire);
- *familial* (legat de familie: *mediu familial*) vs. *familiar* (cunoscut, intim: *ton familiar*);
- *solidar* (unit prin sentimente comune) vs. *solitar* (singuratic, izolat);
- *aliniat* (așezat în linie) vs. *alineat* (rând retras într-un text);
- *a emigra* (a părăsi patria definitiv) vs. *a imigra* (a se stabili într-o țară străină);
- *a apropia* (a micșora distanța) vs. *a apropria* (a-și însuși un bun străin);
- *original* (autentic, inedit) vs. *originar* (provenit dintr-un loc anume);
- *literal* (cuvânt cu cuvânt, literă cu literă) vs. *literar* (privitor la literatură);
- *spețe* (cazuri juridice, specii) vs. *speze* (cheltuieli financiare);
- *temporal* (legat de timp) vs. *temporar* (de scurtă durată, provizoriu).

#### `LES-S3-09` — Pleonasmul

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Pleonasmul este o eroare de exprimare constând în alăturarea a două sau mai multe cuvinte, expresii sau morfeme care repetă inutil aceeași idee sau același sens.

---

### A. TIPURI DE PLEONASME

1. **Pleonasme lexicale directe (alăturare de cuvinte):**
   - *a coborî jos* (coborârea implică deplasarea în jos);
   - *a urca sus* (urcarea implică deplasarea în sus);
   - *a avansa înainte*;
   - *a reveni din nou* / *a repeta din nou*;
   - *babă bătrână*;
   - *protagonist principal* (*protagonist* înseamnă deja primul actor / personaj principal);
   - *perioadă de timp*;
   - *hemoragie de sânge*;
   - *scurtă alocuțiune* (*alocuțiune* = discurs scurt);
   - *caligrafie frumoasă* (*caligrafie* = scriere frumoasă);
   - *a preconiza pentru viitor*.
2. **Pleonasme la numerale și aproximare:**
   - *în jur de vreo zece*;
   - *circa aproximativ douăzeci*.
3. **Pleonasme tolerate stilistic:** Repetiții intenționate în folclor sau literatură pentru întărire expresivă: *am văzut cu ochii mei*, *am auzit cu urechile mele*.

#### `LES-S3-10` — Câmpul lexical

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]]

### Conținut extras și normalizat

- **Definiție:** Câmpul lexical cuprinde totalitatea cuvintelor care aparțin aceleiași sfere de semnificație și care denumesc aspecte, componente sau asocieri ale unei anumite realități noționale.

---

### A. CÂMPUL LEXICAL VS. FAMILIA LEXICALĂ

- **Familia lexicală:** Reunește cuvinte înrudite **genetic** (care au aceeași rădăcină etimologică, formate prin derivare, compunere, conversiune): *floare*, *floricică*, *înflorit*, *înflorire*, *florărie*, *florar*.
- **Câmpul lexical:** Reunește cuvinte înrudite **tematic / semantic**, chiar dacă au rădăcini complet diferite:
  - Câmpul lexical al *școlii:* *elev, profesor, bancă, catalog, manual, tablă, recreație, temă, notă, examen, sală de clasă*.
  - Câmpul lexical al *vremii:* *ploaie, ninsoare, viscol, soare, nori, temperatură, ger, arșiță, vânt*.
  - Câmpul lexical al *culorilor:* *roșu, albastru, galben, verde, purpuriu, azuriu, plumburiu*.

#### `LES-S3-11` — Îmbinări libere de cuvinte. Locuțiuni

- **tip:** lecție
- **parent:** `SES-S3`
- **status:** `present`
- **source:** [[LEX-001]], [[LEX-002]]

### Conținut extras și normalizat

- **Definiție:** Îmbinările libere de cuvinte sunt asocieri sintactice temporare, create ad-hoc în vorbire, în timp ce locuțiunile sunt grupuri stabile de cuvinte cu sens unitar, care funcționează ca o singură parte de vorbire.

---

### A. TRĂSĂTURILE LOCUȚIUNILOR

1. **Sens unitar:** Grupul de cuvinte este echivalent cu un singur cuvânt (*a băga de seamă* = *a observa*).
2. **Comportament sintactic unitar:** Se analizează ca o singură unitate sintactică (nu se analizează separat fiecare cuvânt din interiorul locuțiunii).
3. **Prezența obligatorie a unei părți de vorbire de bază:**
   - Locuțiuni verbale: *a-și bate joc* (= a batjocori), *a da ortul popii* (= a muri);
   - Locuțiuni substantivale: *băgare de seamă* (= atenție), *ținere de minte* (= memorie);
   - Locuțiuni adjectivale: *cu dare de mână* (= generos, bogat), *de treabă* (= cumsecade);
   - Locuțiuni adverbiale: *din când în când* (= uneori), *fără doar și poate* (= sigur);
   - Locuțiuni prepoziționale: *în fața*, *în spatele*, *în ciuda*, *din cauza*;
   - Locuțiuni conjuncționale: *măcar că*, *pentru că*, *în timp ce*, *cu toate că*.

### `SES-S4` — S4 — Mijloace de îmbogățire a vocabularului

- **tip:** sesiune
- **parent:** `[[CUR-02]]`
- **lessons:** [[LES-S4-01]], [[LES-S4-02]], [[LES-S4-03]]
- **notes:**
  - Materialele/testele despre scrierea și pronunțarea cuvintelor de origine străină sunt suplimentare și nu intră în numărul lecțiilor propriu-zise.

#### `LES-S4-01` — Mijloace INTERNE de îmbogățire a vocabularului: Derivare, Compunere, Conversiune

- **tip:** lecție
- **parent:** `SES-S4`
- **status:** `present`
- **source:** [[LEX-002]]

### Conținut extras și normalizat

- **Definiție:** Mijloacele interne de îmbogățire a vocabularului sunt procedeele prin care o limbă își creează cuvinte noi folosind propriul material lexical și morfologic: **derivarea**, **compunerea** și **conversiunea**.

---

### A. DERIVAREA

Formarea cuvintelor noi prin atașarea de sufixe și/sau prefixe la o rădăcină sau la un cuvânt de bază:
- **Cu prefixe:** *ne-om*, *re-scrie*, *stră-vechi*, *arhi-plin*, *des-face*.
- **Cu sufixe:** *scrii-tor*, *băieț-el*, *tiner-esc*, *prieten-ește*.
- **Parasintetică (simultan prefix + sufix):** *în-frunz-i*, *des-zăpez-i*, *îm-bogăț-i*.

---

### B. COMPUNEREA

Unirea a două sau mai multe cuvinte independente pentru a crea o nouă unitate lexicală:
- **Prin sudare:** *bunăvoință*, *untdelemn*, *altceva*, *doisprezece*.
- **Prin alăturare:** *câine-lup*, *floarea-soarelui*, *prim-ministru*, *Baia Mare*.
- **Prin abreviere:** *C.F.R.*, *UNESCO*, *TAROM*, *Plafar*.
- **Compunere savantă:** *biologie*, *televiziune*, *geografie*.

---

### C. CONVERSIUNEA

Schimbarea clasei morfologice fără modificarea formei de bază a cuvântului:
- Substantivizare: *Frumosul* din viață; *un rănit*; *cititul*; *binele*.
- Adjectivizare: carte *citită*; mână *tremurândă*; haine *gata*.
- Adverbializare: vorbește *frumos*; pleacă *dimineața*; frumoasă *foc*.

#### `LES-S4-02` — Mijloace EXTERNE de îmbogățire a vocabularului: Împrumuturi Lexicale

- **tip:** lecție
- **parent:** `SES-S4`
- **status:** `present`
- **source:** [[LEX-001]], [[LEX-002]]

### Conținut extras și normalizat

- **Definiție:** Mijloacele externe de îmbogățire a vocabularului reprezintă modalitățile prin care o limbă preia cuvinte și structuri din alte limbi prin **împrumuturi lexicale** și **calcuri lingvistice**.

---

### A. STRATURILE ISTORICE DE ÎMPRUMUTURI

1. **Împrumuturi slave:** *duh*, *cinstit*, *slugă*, *dragoste*, *ceas*, *izvor*, *prieten*.
2. **Împrumuturi maghiare:** *gând*, *chip*, *oraș*, *gazdă*, *fel*, *marfă*, *neam*.
3. **Împrumuturi turcești:** *cafea*, *ciorbă*, *dușman*, *ciorap*, *cutie*, *tavan*.
4. **Împrumuturi grecești:** *icoană*, *folos*, *condiție*, *patimă*, *drum*, *pedepsi*.
5. **Împrumuturi neologice (din sec. XIX până în prezent):**
   - Din franceză: *afacere*, *bulevard*, *parfum*, *restaurant*, *spectacol*;
   - Din latină savantă: *fraternitate*, *inteligență*, *literatură*, *republică*;
   - Din germană: *creion*, *ghiozdan*, *șurub*, *maistru*, *halbă*;
   - Din engleză (anglicisme moderne): *management*, *marketing*, *site*, *computer*, *trend*.

---

### B. CALCURILE LINGVISTICE

Traducerea termen cu termen sau împrumutul sensului unei structuri străine:
- **Calc lexical de structură:** *întreprindere* (după fr. *entreprise*), *bunăstare* (după germ. *Wohlstand*).
- **Calc semantic:** Îmbogățirea cuvântului românesc *cerc* cu sensul de asociație / grup intelectual (după fr. *cercle*).

#### `LES-S4-03` — Familia Lexicală

- **tip:** lecție
- **parent:** `SES-S4`
- **status:** `present`
- **source:** [[LEX-002]]

### Conținut extras și normalizat

- **Definiție:** Familia lexicală (familia de cuvinte) reprezintă totalitatea cuvintelor formate de la aceeași rădăcină (sau de la același cuvânt de bază) prin procedee de derivare, compunere și conversiune.

---

### A. STRUCTURA FAMILIEI LEXICALE

1. **Rădăcina:** Punctul de plecare comun ireductibil.
2. **Derivatele:** Cu sufixe, prefixe și parasintetice.
3. **Compusele:** Care conțin termenul respectiv.
4. **Cuvintele formate prin conversiune.**

---

### B. EXEMPLU DE FAMILIE LEXICALĂ (RĂDĂCINA *BUN*)

- *bun* (adjectiv);
- *bunătate* (substantiv derivat cu sufix);
- *bunic*, *bunică*, *bunicel*, *bunicuță*;
- *străbun*, *străbunic*, *străbunică* (derivate cu prefix);
- *a îmbuna* (verb derivat parasintetic: *în- + bun + -a*);
- *îmbunare*, *îmbunător*;
- *a îmbunătăți* (verb format de la *bunătate*);
- *îmbunătățire*, *îmbunătățit*;
- *bunăvoință*, *binevoitor* (cuvinte compuse);
- *bunul* (substantiv provenit prin conversiune din adjectiv).

## `CUR-03` — 3. MORFOLOGIE — PĂRȚI DE VORBIRE FLEXIBILE

- **tip:** unitate de programă
- **parent:** `GRA-ROOT`
- **children:** [[SES-S5]], [[SES-S6]], [[SES-S7]], [[SES-S8]], [[SES-S9-ART]], [[SES-S9-ADJ]], [[SES-S10]], [[SES-S11]], [[SES-S12]]

### `SES-S5` — S5 — Verbul, partea I

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[LES-S5-01]], [[LES-S5-02]], [[LES-S5-03]]

#### `LES-S5-01` — Verbul: Definiție și clasificare. Locuțiunea verbală

- **tip:** lecție
- **parent:** `SES-S5`
- **status:** `present`
- **source:** [[MOR-006]]

### Conținut extras și normalizat

- **Definiție:** Verbul este partea de vorbire flexibilă care exprimă acțiuni, stări sau existența ființelor și a lucrurilor. Este centrul de organizare a comunicării la nivel de propoziție.
- **Locuțiunea verbală:** Grupul stabil de cuvinte care conține obligatoriu un verb și este echivalent semantic cu un singur verb (*a băga de seamă* = *a observa*; *a lua la fugă* = *a fugi*; *a aduce aminte* = *a aminti*).

---

### A. CLASIFICAREA VERBELOR

1. **După capacitatea de a forma predicat:**
   - **Predicative:** Pot forma singure predicat verbal la moduri personale (*El citește o carte*).
   - **Nepredicative:** Nu pot forma singure predicat; se împart în:
     - **Copulative:** Fac legătura dintre subiect și numele predicativ pentru a alcătui un predicat nominal (*a fi*, *a deveni* [întotdeauna copulativ], *a ajunge*, *a ieși*, *a se face*, *a părea*, *a însemna*, *a rămâne*).
     - **Auxiliare:** Ajută la formarea timpurilor și modurilor compuse: *a fi* (*a fost citit*, *să fi știut*), *a avea* (*am citit*, *aș citi*), *a vrea* (*voi citi*, *o să citesc*).
2. **După tranzitivitate:**
   - **Tranzitive:** Pot primi un complement direct în Acuzativ fără prepoziție (*El scrie o scrisoare*).
   - **Intranzitive:** Nu pot primi un complement direct (*El merge la școală*; *Copilul doarme*).

#### `LES-S5-02` — Conjugare. Persoană. Număr

- **tip:** lecție
- **parent:** `SES-S5`
- **status:** `present`
- **source:** [[MOR-006]]

### Conținut extras și normalizat

- **Definiție:** Conjugarea este paradigma de flexiune a verbului după persoană, număr, mod și timp.
- **Cele 4 conjugări ale limbii române (stabilite după sufixul de infinitiv):**
  - **Conjugarea I:** Verbe terminate în *-a* (*a cânta*, *a lucra*, *a visa*).
  - **Conjugarea a II-a:** Verbe terminate în *-ea* cu *e* accentuat (*a vedea*, *a cădea*, *a putea*, *a tăcea*).
  - **Conjugarea a III-a:** Verbe terminate în *-e* neaccentuat (*a merge*, *a bate*, *a spune*, *a cere*).
  - **Conjugarea a IV-a:** Verbe terminate în *-i* sau *-î* (*a dormi*, *a citi*, *a coborî*, *a hotărî*).

---

### A. PERSOANA ȘI NUMĂRUL

- **Persoana:**
  - Persoana I (vorbitorul): *eu merg*, *noi mergem*;
  - Persoana a II-a (interlocutorul): *tu mergi*, *voi mergeți*;
  - Persoana a III-a (obiectul comunicării): *el/ea merge*, *ei/ele merg*.
- **Numărul:** Singular (o singură entitate) și Plural (două sau mai multe entități).
- **Verbe unipersonale:** Se folosesc doar la persoana a III-a (*trebuie*, *se cuvine*, *plouă*, *ninge*).

#### `LES-S5-03` — Moduri și timpuri verbale

- **tip:** lecție
- **parent:** `SES-S5`
- **status:** `present`
- **source:** [[MOR-006]]

### Conținut extras și normalizat

- **Definiție:** Modul exprimă raportul pe care vorbitorul îl stabilește între acțiunea verbului și realitate (certitudine, posibilitate, dorință, ordin), iar timpul indică momentul desfășurării acțiunii în raport cu momentul vorbirii.

---

### A. MODURILE PREDICATIVE (PERSONALE)

1. **Modul Indicativ:** Exprimă o acțiune sigură, reală:
   - **Prezent:** *învăț*;
   - **Imperfect** (acțiune trecută neterminată): *învățam*;
   - **Perfect compus** (acțiune trecută încheiată): *am învățat*;
   - **Perfect simplu** (trecut recent/regional): *învățai*;
   - **Mai-mult-ca-perfect** (acțiune trecută anterioară altei acțiuni trecute): *învățasem*;
   - **Viitor standard:** *voi învăța*;
   - **Viitor anterior:** *voi fi învățat*;
   - **Viitor popular/colocvial:** *am să învăț*, *o să învăț*.
2. **Modul Conjunctiv:** Exprimă o acțiune posibilă, realizabilă (marcat de conjuncția *să*):
   - Prezent: *să învăț*;
   - Perfect: *să fi învățat*.
3. **Modul Condițional-Optativ:** Exprimă o acțiune dorită sau condiționată:
   - Prezent: *aș învăța*;
   - Perfect: *aș fi învățat*.
4. **Modul Imperativ:** Exprimă o poruncă, un îndemn, un ordin sau o rugăminte:
   - Are forme doar pentru persoana a II-a: *Învață!* (afirmativ sg.), *Nu învăța!* (negativ sg.), *Învățați!* (pl.).

### `SES-S6` — S6 — Verbul, partea a II-a

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[LES-S6-01]], [[LES-S6-02]]

#### `LES-S6-01` — Forme verbale nepersonale

- **tip:** lecție
- **parent:** `SES-S6`
- **status:** `present`
- **source:** [[MOR-006]]

### Conținut extras și normalizat

- **Definiție:** Formele verbale nepersonale (modurile nepredicative) sunt forme ale verbului care nu au categoria persoanei și a numărului și nu pot îndeplini singure funcția de predicat verbal.

---

### A. CELE PATRU FORME VERBALE NEPERSONALE

#### 1. Infinitivul
Forma de dicționar a verbului, precedată adesea de prepoziția *a*:
- Timpuri: Prezent (*a citi*) și Perfect (*a fi citit*).
- Funcții sintactice: Subiect (*A citi este o plăcere*); Nume predicativ (*Dorința lui era de a călători*); Complement direct (*Nu poate veni*); Complement prepozițional (*S-a săturat de a aștepta*); Atribut verbal (*Plăcerea de a citi*).

#### 2. Gerunziul
Exprimă o acțiune în desfășurare, terminat în sufixul *-ind* sau *-ând* (*citind*, *mergând*):
- Funcții sintactice: Circumstanțial de mod (*A plecat alergând*); Circumstanțial de timp (*Mergând pe drum, s-a întâlnit cu el*); Circumstanțial de cauză (*Nefiind atent, a greșit*); Atribut adjectival (când se acordă: *mână tremurândă*).

#### 3. Participiul
Exprimă o acțiune terminată și suferită de un obiect, terminat în *-t* sau *-s* (*citit*, *mers*, *scris*):
- Valoare verbală în timpuri compuse: *am citit*, *fusesem chemat*.
- Valoare adjectivală (prin conversiune, se acordă în gen, număr și caz): *carte citită*, *perete văruit* (atribut adjectival).

#### 4. Supinul
Format din prepoziție (*de*, *la*, *pentru*, *după*) + participiul verbului (*de citit*, *la pescuit*, *pentru cules*):
- Funcții sintactice: Subiect (*E ușor de învățat*); Nume predicativ (*Lecția este de învățat*); Complement direct (*Am de scris o temă*); Circumstanțial de scop (*Au plecat la vânat*); Atribut verbal (*Mașină de cusut*).

#### `LES-S6-02` — Posibilități combinatorii ale verbului

- **tip:** lecție
- **parent:** `SES-S6`
- **status:** `present`
- **source:** [[MOR-006]]

### Conținut extras și normalizat

- **Definiție:** Posibilitățile combinatorii ale verbului reprezintă rețeaua de relații sintactice pe care verbul le poate contracta în propoziție, fie ca centru al grupului verbal (regent), fie ca termen subordonat.

---

### A. VERBUL CA TERMEN REGENT (CENTRU DE GRUP)

În calitate de predicat, verbul își subordonează:
1. **Subiectul:** În cazul Nominativ (*Elevul citește*).
2. **Complementul direct:** Fără prepoziție sau cu prepoziția *pe* (*Citesc o carte*; *Îl văd pe colegul meu*).
3. **Complementul indirect:** În cazul Dativ (*Îi ofer premiul colegului*) sau prepozițional (*Mă bazez pe tine*).
4. **Complementul prepozițional:** Cerut obligatoriu de regimul prepozițional al verbului (*Se gândește la vacanță*).
5. **Complementul de agent:** În construcții pasive (*Lucrarea este scrisă de către elev*).
6. **Circumstanțialele:** De loc, de timp, de mod, de cauză, de scop (*Vine mâine acasă cu trenul*).

---

### B. VERBUL CA TERMEN SUBORDONAT

La moduri nepersonale, verbul poate determina:
- Un substantiv (funcție de atribut verbal): *obiceiul de a citi*; *mașină de scris*;
- Un adjectiv: *ușor de realizat*;
- Un alt verb: *a învățat a înota*.

### `SES-S7` — S7 — Construcții sintactice

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[LES-S7-01]], [[LES-S7-02]], [[LES-S7-03]], [[LES-S7-04]]

#### `LES-S7-01` — Construcții active și pasive

- **tip:** lecție
- **parent:** `SES-S7`
- **status:** `present`
- **source:** [[MOR-006]]

### Conținut extras și normalizat

- **Definiție:** Diateza exprimă raportul dintre acțiunea verbului, subiectul gramatical și autorul real al acțiunii (agentul). În limba română distingem diateza activă, pasivă și reflexivă.

---

### A. DIATEZA ACTIVĂ

Subiectul gramatical este chiar autorul acțiunii pe care o săvârșește:
- *Elevul a redactat compunerea.*
- *Profesorul explică lecția.*

---

### B. DIATEZA PASIVĂ

Subiectul gramatical nu săvârșește acțiunea, ci o suportă din partea unui autor numit **complement de agent**:
- **Structura diatezei pasive:** verbul auxiliar *a fi* (conjugat la modul și timpul dorit) + **participiul acordat** al verbului de bază.
  - *Compunerea a fost redactată de către elev.*
  - *Lecția este explicată de profesor.*
  - *Cărțile vor fi trimise de editură.*
- **Complementul de agent:** Răspunde la întrebarea *de către cine?* și este introdus prin prepozițiile *de* sau *de către*.

#### `LES-S7-02` — Construcții reflexive

- **tip:** lecție
- **parent:** `SES-S7`
- **status:** `present`
- **source:** [[MOR-006]], [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Construcțiile reflexive sunt structuri verbale în care verbul este însoțit de un **pronume reflexiv** în cazul Acuzativ sau Dativ, cu aceeași persoană și același număr ca verbul.

---

### A. REFLEXIVUL CU FUNCȚIE SINTACTICĂ (REFLEXIV OBIECTIV)

Pronumele reflexiv are autonomie sintactică și își asumă un rol propriu:
1. **Complement direct (în Acuzativ):** *El se laudă pe sine.* / *Copilul se spală.*
2. **Complement indirect (în Dativ):** *Își cumpără cărți.* / *Își acordă o șansă.*
3. **Atribut pronominal în Dativ posesiv:** *Își spală mâinile.* (= mâinile sale).

---

### B. REFLEXIVUL FĂRĂ FUNCȚIE SINTACTICĂ (PARTE A VERBULUI)

Pronumele reflexiv este doar o marcă gramaticală a diatezei reflexive sau a impersonalității:
1. **Reflexiv dinamic / evenimențial:** *El se gândește*; *Ea se miră*; *Frunzele se scutură*.
2. **Reflexiv pasiv (echivalent cu pasiva):** *Cărțile se vând repede.* (= Cărțile sunt vândute).
3. **Reflexiv impersonal:** *Se știe adevărul.*; *Se zice că va ploua.*

#### `LES-S7-03` — Construcții impersonale

- **tip:** lecție
- **parent:** `SES-S7`
- **status:** `present`
- **source:** [[SIN-001]], [[MOR-006]]

### Conținut extras și normalizat

- **Definiție:** Construcțiile impersonale sunt enunțuri în care predicatul este exprimat printr-un termen impersonal (verb sau expresie fără subiect personal conștient), care impune adesea o **propoziție subiectivă** la nivel de frază.

---

### A. TIPURI DE TERMENI REGENTI IMPERSONALI

1. **Verbe impersonale prin natura lor:** *plouă*, *ninge*, *fulgeră*, *tună*, *trebuie*, *viscolește*.
2. **Verbe personale devenite impersonale (la persoana a III-a):**
   - *Se știe / că a reușit./*
   - *Se cuvine / să fii respectuos./*
   - *Se întâmplă / să greșești./*
   - *Urmează / să plecăm./*
3. **Expresii verbale impersonale (*a fi* + adverb / adjectiv neutru):**
   - *E bine / să repeți./*
   - *E sigur / că va veni./*
   - *E ușor / să critici./*
   - *E de dorit / să înveți./*
4. **Adverbe și locuțiuni adverbiale predicative:**
   - *Desigur / că te voi ajuta./*
   - *Probabil / că a uitat./*
   - *Fără doar și poate / că a meritat./*

#### `LES-S7-04` — Construcții incidente

- **tip:** lecție
- **parent:** `SES-S7`
- **status:** `present`
- **source:** [[MOR-006]]

### Conținut extras și normalizat

- **Definiție:** Construcțiile incidente sunt cuvinte, grupuri de cuvinte sau propoziții intercalate într-un enunț pentru a aduce o precizare, un comentariu al vorbitorului, o sursă a informației sau o adresare directă, **fără a avea legătură sintactică directă** cu restul propoziției.

---

### A. TIPURI DE ELEMENTE INCIDENTE

1. **Cuvinte sau locuțiuni incidente:**
   - *desigur*, *firește*, *bineînțeles*, *fără îndoială*, *la urma urmei*, *după părerea mea*, *din păcate*, *din fericire*.
   - *Exemplu:* *Rezultatul, din fericire, a fost pozitiv.*
2. **Propoziții incidente:**
   - Propoziții care conțin verbe declarative (*zise el*, *răspunse mama*, *spuse profesorul*);
   - Propoziții de opinie sau rezervă (*cred eu*, *mi se pare mie*, *după cum știi*).
   - *Exemplu:* *Examenul, cred eu, nu va fi atât de dificil.*

---

### B. PUNCTUAȚIA CONSTRUCȚIILOR INCIDENTE

Construcțiile incidente se izolează obligatoriu prin:
- **Virgule:** *Adevărul, firește, va ieși la iveală.*
- **Linii de pauză:** *Adevărul — firește — va ieși la iveală.*
- **Paranteze rotunde:** *Adevărul (firește) va ieși la iveală.*

### `SES-S8` — S8 — Substantivul

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[LES-S8-01]], [[LES-S8-02]], [[LES-S8-03]], [[LES-S8-04]]

#### `LES-S8-01` — Tipuri de substantive: comune, proprii, simple, compuse. Locuțiunea substantivală

- **tip:** lecție
- **parent:** `SES-S8`
- **status:** `present`
- **source:** [[MOR-005]]

### Conținut extras și normalizat

- **Definiție:** Substantivul este partea de vorbire flexibilă care denumește ființe, lucruri, fenomene ale naturii, stări sufletești, acțiuni, însușiri și noțiuni abstracte.
- **Locuțiunea substantivală:** Grupul de cuvinte cu sens unitar echivalent cu un substantiv (*aducere-aminte* = *amintire*; *băgare de seamă* = *atenție*; *părere de rău* = *regret*).

---

### A. TIPURI DE SUBSTANTIVE

1. **După conținutul semantic:**
   - **Comune:** Denumesc obiecte dintr-o clasă nediferențiată (*carte*, *oraș*, *copil*, *floare*).
   - **Proprii:** Denumesc individualizat o anumită ființă, un loc geografic, o instituție, o planetă sau o sărbătoare și se scriu cu majusculă (*Mihai*, *București*, *Dunărea*, *Crăciun*, *Marte*).
2. **După structură:**
   - **Simple:** formate dintr-o singură rădăcină (*om*, *masă*, *copac*).
   - **Compuse:** formate din două sau mai multe cuvinte (*floarea-soarelui*, *bunăvoință*, *locotenent-colonel*, *Baia Mare*).

#### `LES-S8-02` — Gen, număr, caz. Substantive colective. Substantive defective. Punctuația vocativului

- **tip:** lecție
- **parent:** `SES-S8`
- **status:** `present`
- **source:** [[MOR-005]]

### Conținut extras și normalizat

- **Definiție:** Substantivul are categoriile gramaticale de gen, număr și caz.
- **Categoriile de gen:** Masculin (*un băiat - doi băieți*), Feminin (*o fată - două fete*), Neutru (*un scaun - două scaune*).

---

### A. SUBSTANTIVE COLECTIVE ȘI DEFECTIVE

1. **Substantive colective:** Au formă de singular, dar desemnează o colectivitate / grup de obiecte sau ființe identice (*tineret*, *studențime*, *armată*, *stol*, *turmă*, *făget*, *pietriș*).
2. **Substantive defective de număr:**
   - **Singularia tantum (doar formă de singular):** *curaj*, *aur*, *miere*, *lapte*, *fotbal*, *lene*, *oxigen*.
   - **Pluralia tantum (doar formă de plural):** *icre*, *ochelari*, *foarfeci*, *aplauze*, *moaște*, *tăiței*, *Ieși*.

---

### B. PUNCTUAȚIA CAZULUI VOCATIV

Cazul Vocativ exprimă o chemare sau o adresare directă (*Elevule!*, *Maria!*).
- Se izolează **obligatoriu prin virgulă** de restul enunțului:
  - La început: *Andrei, vino aici!*
  - În interior: *Vino, Andrei, mai aproape!*
  - La sfârșit: *Unde ai fost, Andrei?*

#### `LES-S8-03` — FUNCȚII SINTACTICE. Corelarea cazului morfologic cu funcția sintactică

- **tip:** lecție
- **parent:** `SES-S8`
- **status:** `present`
- **source:** [[MOR-005]]

### Conținut extras și normalizat

- **Definiție:** Cazul reprezintă forma pe care o ia substantivul pentru a exprima funcțiile sale sintactice în raport cu alte cuvinte din propoziție.

---

### A. CORELAREA CAZULUI CU FUNCȚIILE SINTACTICE

1. **Cazul Nominativ (întrebări: *cine?*, *ce?*):**
   - Subiect: *Elevul citește o carte.*
   - Nume predicativ: *Tatăl meu este inginer.*
   - Atribut apozițional: *Prietenul meu, Andrei, a venit.*
2. **Cazul Acuzativ (cu sau fără prepoziție):**
   - Complement direct (*pe cine?*, *ce?*): *Citesc un roman.* / *Îl văd pe coleg.*
   - Complement prepozițional: *Mă gândesc la examen.*
   - Complement de agent: *Cartea este citită de către elev.*
   - Circumstanțiale (de loc, de timp, de mod, de cauză, de scop): *Merg la școală.* / *Muncește cu sârguință.*
   - Atribut substantival prepozițional: *Casa de piatră.*
3. **Cazul Dativ (întrebare: *cui?*):**
   - Complement indirect: *I-am oferit premiul elevului.*
   - Nume predicativ: *El este asemenea tatălui său.*
   - Atribut substantival prepozițional: *Acordarea de sprijin elevilor merituoși.*
4. **Cazul Genitiv (întrebări: *al, a, ai, ale cui?*):**
   - Atribut substantival genitival: *Cartea elevului este pe masă.*
   - Circumstanțiale cu locuțiuni prepoziționale (*în fața*, *din cauza*, *în scopul*): *S-a așezat în fața clasei.*

#### `LES-S8-04` — Posibilități combinatorii ale substantivului

- **tip:** lecție
- **parent:** `SES-S8`
- **status:** `present`
- **source:** [[MOR-005]]

### Conținut extras și normalizat

- **Definiție:** Posibilitățile combinatorii ale substantivului descriu pozițiile sintactice pe care substantivul le poate ocupa: termen regent (centru al grupului nominal) sau termen subordonat (dependent).

---

### A. SUBSTANTIVUL CA TERMEN REGENT

Grupul nominal are în centru substantivul, care își subordonează diverși determinanți:
1. **Atribute adjectivale:** *elev silitor*, *această carte*, *doi prieteni*.
2. **Atribute substantivale:** *cartea profesorului* (genitival), *rochie de mătase* (prepozițional), *orașul Iași* (apozițional).
3. **Atribute pronominale:** *casa mea*, *sfatul acestuia*.
4. **Atribute verbale:** *dorința de a învăța*, *mașină de cusut*.

---

### B. SUBSTANTIVUL CA TERMEN SUBORDONAT

Substantivul se atașează de:
- Un verb: îndeplinind funcțiile de subiect, complemente directe/indirecte/prepoziționale sau circumstanțiale;
- Un adjectiv: *plin de speranță*, *demn de laudă*;
- Un adverb: *aproape de casă*.

### `SES-S9-ART` — S9 — Articolul

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[LES-S9-ART-01]], [[LES-S9-ART-02]], [[LES-S9-ART-03]], [[LES-S9-ART-04]]
- **notes:**
  - „Articolul – Aplicații” și „Articolul – Exerciții” sunt materiale suplimentare, separate de cele 4 lecții declarate.

#### `LES-S9-ART-01` — Articolul hotărât

- **tip:** lecție
- **parent:** `SES-S9-ART`
- **status:** `present`
- **source:** [[MOR-003]]

### Conținut extras și normalizat

- **Definiție:** Articolul hotărât este o parte de vorbire auxiliară care se atașează substantivului pentru a arăta că obiectul denumit este cunoscut și individualizat în mod precis în mintea vorbitorului.

---

### A. FORMELE ARTICOLULUI HOTĂRÂT ENCLITIC

Se alipește direct la sfârșitul substantivului:
- **Masculin:** *-ul* (*omul*, *băiatul*), *-le* (*fratele*, *câinele*); pl. *-i* (*oamenii*, *băieții*).
- **Feminin:** *-a* (*casa*, *fata*, *femeia*); pl. *-le* (*casele*, *fetele*).
- **Neutru:** *-ul* (*scaunul*, *drumul*), *-le* (*numele*); pl. *-le* (*scaunele*, *drumurile*).
- **Genitiv-Dativ:** singular *-lui* (masc./neutru: *omului*), *-i* (feminin: *casei*); plural *-lor* (*oamenilor*, *caselor*).

---

### B. ARTICOLUL HOTĂRÂT PROCLITIC (*LUI*)

Stă înaintea substantivului și se utilizează la cazul Genitiv-Dativ:
- Înaintea numelor proprii de persoane masculine terminate în consoană: *cartea lui Mihai*, *i-am dat lui Andrei*;
- Înaintea numelor proprii feminine neterminate în *-a*: *lui Carmen*, *lui Lili*;
- Înaintea numelor lunilor anului: *zilele lui martie*;
- Înaintea substantivelor de rudenie speciale: *lui nenea*, *lui tanti*, *lui Vodă*.

#### `LES-S9-ART-02` — Articolul nehotărât

- **tip:** lecție
- **parent:** `SES-S9-ART`
- **status:** `present`
- **source:** [[MOR-003]]

### Conținut extras și normalizat

- **Definiție:** Articolul nehotărât este partea de vorbire auxiliară proclitică (așezată în fața substantivului) care prezintă obiectul denumit în mod general, fără a-l individualiza strict.

---

### A. FORMELE ARTICOLULUI NEHOTĂRÂT

- **Masculin și Neutru singular:**
  - Nominativ-Acuzativ: *un* (*un băiat*, *un scaun*);
  - Genitiv-Dativ: *unui* (*unui băiat*, *unui scaun*).
- **Feminin singular:**
  - Nominativ-Acuzativ: *o* (*o fată*, *o carte*);
  - Genitiv-Dativ: *unei* (*unei fete*, *unei cărți*).
- **Plural (toate genurile):**
  - Nominativ-Acuzativ: *niște* (*niște băieți*, *niște fete*, *niște scaune*);
  - Genitiv-Dativ: *unor* (*unor băieți*, *unor fete*, *unor scaune*).

---

### B. ATENȚIE LA VALORILE LUI *NIȘTE*

- În fața substantivelor numărabile la plural este **articol nehotărât** (*niște elevi*).
- În fața substantivelor defective de plural (nume de materie) este **adjectiv pronominal nehotărât** cu sensul de „puțin/o cantitate de” (*niște brânză*, *niște zahăr*).

#### `LES-S9-ART-03` — Articolul genitival

- **tip:** lecție
- **parent:** `SES-S9-ART`
- **status:** `present`
- **source:** [[MOR-003]]

### Conținut extras și normalizat

- **Definiție:** Articolul genitival (posesiv) leagă un substantiv în cazul Genitiv sau un adjectiv posesiv de substantivul regent care denumește obiectul posedat.

---

### A. FORMELE ARTICOLULUI GENITIVAL

- **Masculin singular:** *al* (*un caiet al elevului*);
- **Feminin singular:** *a* (*o carte a elevului*);
- **Masculin plural:** *ai* (*niște colegi ai elevului*);
- **Feminin și Neutru plural:** *ale* (*niște cărți ale elevului*, *creioane ale băiatului*).

---

### B. REGULA DE ACORD A ARTICOLULUI GENITIVAL

Articolul genitival **se acordă obligatoriu în gen și număr cu obiectul posedat** (substantivul regent din față), nu cu posesorul:
- *o carte* (fem. sg.) → *a elevilor* (posesor pl.);
- *niște pantofi* (masc. pl.) → *ai fetei* (posesor fem. sg.).
- Este obligatoriu când între substantiv și genitiv se interpune un adjectiv (*cartea cea nouă a elevului*) sau când regentul este nearticulat (*carte a elevului*).

#### `LES-S9-ART-04` — Articolul demonstrativ

- **tip:** lecție
- **parent:** `SES-S9-ART`
- **status:** `present`
- **source:** [[MOR-003]]

### Conținut extras și normalizat

- **Definiție:** Articolul demonstrativ (adjectival) este o parte de vorbire auxiliară care leagă un adjectiv determinant de substantivul regent sau participă la substantivizarea acestuia.

---

### A. FORMELE ARTICOLULUI DEMONSTRATIV

- **Masculin singular:** *cel* (N-Ac: *băiatul cel harnic*), *celui* (G-D: *băiatului celui harnic*);
- **Feminin singular:** *cea* (N-Ac: *fata cea silitoare*), *celei* (G-D: *fetei celei silitoare*);
- **Masculin plural:** *cei* (N-Ac: *băieții cei bravi*), *celor* (G-D: *băieților celor bravi*);
- **Feminin și Neutru plural:** *cele* (N-Ac: *fetele cele frumoase*), *celor* (G-D: *fetelor celor frumoase*).

---

### B. CONTEXTE DE UTILIZARE

1. **Leagă un adjectiv de substantiv:** *omul cel bun*, *zâna cea isteață*.
2. **Formează superlativul relativ:** *cel mai bun elev*, *cea mai pricepută colegă*.
3. **Substantivizează adjective sau numerale:** *Cei harnici vor reuși.*; *Cea de-a doua a renunțat.*
4. **Diferențierea de pronumele demonstrativ:** Dacă este urmat direct de o prepoziție sau de pronumele relativ *care*, devine **pronume demonstrativ scurt**: *Cel de acolo este fratele meu.* / *Cea care vine e sora mea.*

### `SES-S9-ADJ` — S9 — Adjectivul

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[SUP-S9-ADJ-01]], [[SUP-S9-ADJ-02]]
- **notes:**
  - Pagina afișează 2 teste/aplicații, dar nu listează lecții propriu-zise; ele nu intră în numărul lecțiilor.

#### `SUP-S9-ADJ-01` — Adjectivul – Aplicații

- **tip:** material suplimentar
- **parent:** `SES-S9-ADJ`
- **status:** `present`
- **source:** [[MOR-004]]

### Conținut extras și normalizat

- **Definiție:** Această secțiune oferă o sinteză aplicată privind identificarea, acordul și clasificarea adjectivelor în enunțuri complexe, evidențiind capcanele gramaticale frecvente la examene.

---

### A. CAPCANE DE ACORD ÎN GEN, NUMĂR ȘI CAZ

1. **Adjectivul determină două sau mai multe substantive de genuri diferite:**
   - Substantive feminine + masculine (persoane): adjectivul ia forma de **masculin plural**:
     - *Băiatul și fata sunt **atenți**.*
   - Substantive feminine + neutre (lucruri): adjectivul ia forma de **feminin/neutru plural**:
     - *Băncile (fem.) și scaunele (neutru) sunt **noi**.*
   - Substantive masculine + neutre (lucruri/ființe):
     - *Dulapul (neutru) și mărul (masc.) sunt **vopsite**.*
2. **Adjective invariabile (fără flexiune):**
   - Nu își schimbă forma niciodată, indiferent de genul, numărul sau cazul substantivului:
     - *bluză **gri**, pantaloni **gri**, pantofi **gri**;*
     - *fată **cumsecade**, băieți **cumsecade**;*
     - *rochii **bordo**, mașini **bej**, cafea **maro**;*
     - *adjective vechi în „-ce”: **eficace**, **motrice**, **perspicace**.*

---

### B. DIFERENȚIEREA ADJECTIVELOR DE ALTE PĂRȚI DE VORBIRE (CONVERSIUNE)

- **Adjectiv vs. Adverb:**
  - *Cântecul este **frumos**.* (determină substantivul *cântecul* = adjectiv, nume predicativ).
  - *Ea cântă **frumos**.* (determină verbul *cântă* = adverb de mod, circumstanțial de mod).
- **Adjectiv provenit din participiu (adjectiv participial):**
  - *Cartea este **citită** de elev.* (diateză pasivă: *este citită* = predicat verbal).
  - *Cartea **citită** zace pe masă.* (adjectiv participial cu funcție de atribut adjectival).



- **tip:** material suplimentar
- **parent:** `SES-S9-ADJ`
- **status:** `supplementary`
- **source:** [[MOR-004]]

#### `SUP-S9-ADJ-02` — Adjectivul – Exerciții

- **tip:** material suplimentar
- **parent:** `SES-S9-ADJ`
- **status:** `present`
- **source:** [[MOR-004]]

### Conținut extras și normalizat

- **Definiție:** Exerciții și scheme practice pentru recunoașterea gradelor de comparație, a locuțiunilor adjectivale și a valorilor stilistice ale adjectivului.

---

### A. MATRICEA GRADELOR DE COMPARAȚIE

1. **Pozitiv:** *un munte înalt*.
2. **Comparativ:**
   - **De superioritate:** *mai înalt*;
   - **De egalitate:** *la fel de înalt, tot atât de înalt, deopotrivă de înalt*;
   - **De inferioritate:** *mai puțin înalt*.
3. **Superlativ:**
   - **Relativ (de superioritate/inferioritate):** *cel mai înalt, cel mai puțin înalt*;
   - **Absolut:**
     - Cu adverbe de mod: *foarte înalt, tare înalt, prea înalt*;
     - Mijloace expresive și stilistice: *nemaipomenit de înalt, nespus de înalt, extraordinar de înalt, înalt-înalt, înalt din cale-afară, o frumusețe de fată*.

---

### B. ADJECTIVE FĂRĂ GRADE DE COMPARAȚIE (GREȘELI FRECVENTE)

Sunt greșite formulările precum *„cel mai optim”*, *„mai complet”*, *„foarte perfect”*. Următoarele categorii nu admit comparație:
- Însușiri absolute: *mort, viu, rotund, pătrat, triunghiular, complet, întreg, unic, egal*;
- Forme latinești de comparativ sau superlativ: *superior, inferior, anterior, posterior, interior, exterior, optim, maxim, minim, suprem, extrem*;
- Termeni tehnici și științifici: *acvatic, terestru, electric, feroviar, oxigenat*.



- **tip:** material suplimentar
- **parent:** `SES-S9-ADJ`
- **status:** `supplementary`
- **source:** [[MOR-004]]

### `SES-S10` — S10 — Numeralul

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[LES-S10-01]], [[LES-S10-02]]

#### `LES-S10-01` — Tipuri de numeral

- **tip:** lecție
- **parent:** `SES-S10`
- **status:** `present`
- **source:** [[MOR-001]]

### Conținut extras și normalizat

- **Definiție:** Numeralul este partea de vorbire flexibilă care exprimă o cantitate numerică, numărul obiectelor sau ordinea lor prin numărare.

---

### A. TIPURILE FUNDAMENTALE DE NUMERAL

1. **Numeralul cardinal:** Exprimă un număr exact:
   - Simple: *unu*, *doi*, *zece*, *sută*, *mie*, *milion*.
   - Compuse: *unsprezece*, *douăzeci*, *o sută douăzeci*.
   - Valoare adjectivală (*doi elevi* = atribut adjectival) vs. valoare substantivală (*Doi au sosit* = subiect).
2. **Numeralul ordinal:** Arată ordinea numerică într-o serie:
   - *primul / prima*, *al doilea / a doua*, *al zecelea*, *al o sutălea*.
3. **Numeralul colectiv:** Exprimă ideea de grup sau asociere:
   - Simple: *ambii*, *ambele*, *amândoi*, *amândouă*;
   - Compuse: *tustrei*, *tuspatru*, *toți trei*, *câteșitrei*.
   - Regulă de articulare: după *ambii/ambele* substantivul nu se articulează (*ambii elevi*); după *amândoi/amândouă* substantivul se articulează (*amândoi colegii*).
4. **Numeralul multiplicativ:** Arată proporția numerică de creștere: *dublu*, *triplu*, *întreit*, *înzecit*.
5. **Numeralul distributiv:** Repartizarea în grupuri egale: *câte unu*, *câte doi*, *câte trei*.
6. **Numeralul fracționar:** Denumește o parte dintr-un întreg: *o doime*, *o treime*, *un sfert*, *trei optimi*.

#### `LES-S10-02` — Numeralul. Alte aspecte

- **tip:** lecție
- **parent:** `SES-S10`
- **status:** `present`
- **source:** [[MOR-001]]

### Conținut extras și normalizat

- **Definiție:** Aspectele avansate ale numeralului vizează numeralul adverbial, numeralul aproximativ și distincția contextuală a valorilor morfologice ale lui *un* și *o*.

---

### A. NUMERALUL ADVERBIAL (DE REPETIȚIE)

Indică de câte ori se realizează acțiunea verbului:
- *o dată*, *de două ori*, *de trei ori*, *de zece ori*.
- Funcție: circumstanțial de mod (*A repetat de două ori*) sau atribut adverbial (*Prășitul de două ori a adus rezultate bune*).

---

### B. NUMERALUL APROXIMATIV

Exprimă o cifră estimată: *vreo zece*, *circa douăzeci*, *aproximativ treizeci*, *la o sută*.
- **Pleonasm interzis:** Nu se asociază doi termeni de aproximare (*în jur de vreo zece* este incorect; se spune *în jur de zece* sau *vreo zece*).

---

### C. VALORILE LUI *UN* ȘI *O*

- **Numeral cardinal:** Când exprimă numărarea strictă sau este precedat de adverbe restrictive (*O studentă și doi băieți*; *Doar un copil a venit*).
- **Articol nehotărât:** Când introduce un substantiv fără a insista pe număr (*O studentă mergea pe stradă*).
- **Pronume personal (forma *o*):** Clitic de Acuzativ (*O cunosc pe Maria*; *a luat-o la fugă*).
- **Adjectiv pronominal nehotărât:** În corelație binară (*O studentă citea, alta desena*).

### `SES-S11` — S11 — Pronumele, partea I

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[LES-S11-01]], [[LES-S11-02]], [[LES-S11-03]], [[LES-S11-04]], [[LES-S11-05]]

#### `LES-S11-01` — Pronumele personal

- **tip:** lecție
- **parent:** `SES-S11`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele personal este partea de vorbire flexibilă care desemnează persoanele participante la actul de comunicare (vorbitorul, interlocutorul sau persoana despre care se vorbește).

---

### A. PARADIGMA FLEXIONARĂ A PRONUMELUI PERSONAL

1. **Nominativ:** *eu, tu, el / ea, noi, voi, ei / ele*.
2. **Acuzativ:**
   - Forme accentuate: *(pe) mine, (pe) tine, (pe) el / ea, (pe) noi, (pe) voi, (pe) ei / ele*.
   - Forme neaccentuate (clitice): *mă, m-*; *te, te-*; *îl, l-, o*; *ne*; *vă, v-*; *îi, i-, le*.
3. **Dativ:**
   - Forme accentuate: *mie, ție, lui / ei, nouă, vouă, lor*.
   - Forme neaccentuate (clitice): *îmi, mi-*; *îți, ți-*; *îi, i-*; *ne, ni-*; *vă, vi-*; *le, li-*.
4. **Genitiv:** Are forme doar la persoana a III-a: *(al, a, ai, ale) lui / ei / lor*.
5. **Vocativ:** *Tu!*, *Voi!*.

---

### B. VALORI SPECIALE ALE CLITICELOR

- **Dativul posesiv:** Cliticul de Dativ determină un substantiv și exprimă posesia (*Își spală mâinile*; *Rochia-ți e nouă*).
- **Dativul etic:** Exprimă o nuanță afectivă sau participarea sufletească a vorbitorului, fără funcție sintactică (*Mi ți-l prinde și mi ți-l ceartă*).

#### `LES-S11-02` — Pronumele personal de politețe

- **tip:** lecție
- **parent:** `SES-S11`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele personal de politețe (reverențial) exprimă atitudinea de respect, deferență sau considerație a vorbitorului față de persoana căreia i se adresează sau despre care se vorbește.

---

### A. FORMELE PRONUMELUI DE POLITEȚE

1. **Persoana a II-a singular:**
   - Nominativ-Acuzativ: *dumneata* (abreviat *d-ta*);
   - Genitiv-Dativ: *dumitale* (abreviat *d-tale*).
2. **Persoana a II-a plural / adresare formală:**
   - *dumneavoastră* (abreviat *dv.*, *dvs.*, *d-voastră*) — este invariabil cazual.
3. **Persoana a III-a:**
   - *dumnealui* (masc. sg.), *dumneaei* (fem. sg.), *dumnealor* (masc./fem. pl.) — sunt invariabile cazual.
   - *dumneasa* (G-D: *dumisale*).

---

### B. LOCUȚIUNI PRONOMINALE DE POLITEȚE

Folosite în contexte protocolare sau oficiale:
- *Domnia Sa*, *Domnia Ta*, *Domnia Voastră*, *Luminăția Sa*, *Măria Sa*, *Excelența Sa*, *Sfinția Sa*.

#### `LES-S11-03` — Pronumele reflexiv

- **tip:** lecție
- **parent:** `SES-S11`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele reflexiv arată că acțiunea săvârșită de subiect se răsfrânge asupra lui însuși sau că subiectul participă intens la acțiune.

---

### A. PARTICULARITĂȚI MORFOLOGICE

- Are forme proprii **doar pentru persoana a III-a**:
  - Acuzativ: forma accentuată *pe sine*; forme neaccentuate *se, s-, -se, -s-*.
  - Dativ: forma accentuată *sie / sieși*; forme neaccentuate *își, și-, -și*.
- Pentru persoanele I și II împrumută formele neaccentuate ale pronumelui personal (*mă, te, ne, vă* la Acuzativ; *îmi, îți, ne, vă* la Dativ). Se recunoaște prin faptul că are aceeași persoană și același număr cu verbul (*Eu mă spăl* = reflexiv; *El mă vede* = personal).

---

### B. FUNCȚII SINTACTICE

1. **Cu funcție sintactică (reflexiv obiectiv):**
   - Complement direct în Acuzativ: *El se laudă pe sine.*
   - Complement indirect în Dativ: *Își acordă o șansă.*
   - Atribut pronominal în Dativ posesiv: *Își spală mâinile.*
2. **Fără funcție sintactică:** Când este doar marcă a diatezei reflexive (*se gândește*, *se miră*, *se aude un cântec*, *se știe adevărul*).

#### `LES-S11-04` — Pronumele și adjectivul pronominal posesiv

- **tip:** lecție
- **parent:** `SES-S11`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele posesiv înlocuiește atât numele posesorului, cât și numele obiectului posedat, exprimând raportul de apartenență.

---

### A. FORMELE PRONUMELUI ȘI ADJECTIVULUI POSESIV

1. **Un posesor:**
   - Un obiect: *al meu / a mea*, *al tău / a ta*, *al său / a sa*;
   - Mai multe obiecte: *ai mei / ale mele*, *ai tăi / ale tale*, *ai săi / ale sale*.
2. **Mai mulți posesori:**
   - Un obiect: *al nostru / a noastră*, *al vostru / a voastră*;
   - Mai multe obiecte: *ai noștri / ale noastre*, *ai voștri / ale voastre*.
- Pentru persoana a III-a mai mulți posesori se folosește pronumele personal în Genitiv: *al lor, a lor, ai lor, ale lor*.

---

### B. ADJECTIVUL PRONOMINAL POSESIV

Când determină un substantiv devine adjectiv pronominal (atribut adjectival) și își pierde de regulă articolul posesiv: *colegul meu*, *cartea ta*, *părinții noștri*.
- **Excepție cazuală:** După prepoziții de Genitiv (*în fața*, *în spatele*), adjectivul posesiv este la cazul **Acuzativ**: *în fața mea*, *în spatele tău*.

#### `LES-S11-05` — Pronumele și adjectivul pronominal demonstrativ

- **tip:** lecție
- **parent:** `SES-S11`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele demonstrativ indică apropierea, depărtarea, identitatea sau diferențierea obiectului denumit în raport cu vorbitorul în spațiu sau timp.

---

### A. CLASIFICAREA DEMONSTRATIVELOR

1. **De apropiere:** *acesta, aceasta, aceștia, acestea* (G-D sg: *acestuia, acesteia*; pl: *acestora*). Forme populare: *ăsta, asta, ăștia, astea*.
2. **De depărtare:** *acela, aceea, aceia, acelea* (G-D sg: *aceluia, aceleia*; pl: *acelora*). Forme populare: *ăla, aia, ăia, alea*.
3. **De identitate:** *același, aceeași, aceiași, aceleași* (G-D: *aceluiași, aceleiași*).
4. **De diferențiere:** *celălalt, cealaltă, ceilalți, celelalte* (G-D: *celuilalt, celeilalte*).

---

### B. ADJECTIVUL PRONOMINAL DEMONSTRATIV

Când însoțește un substantiv și se acordă cu acesta devine adjectiv demonstrativ (atribut adjectival):
- Postpus: *băiatul acesta*, *fata aceea*;
- Antepus (cu formă scurtată): *acest băiat*, *acea fată*.

### `SES-S12` — S12 — Pronumele, partea a II-a

- **tip:** sesiune
- **parent:** `[[CUR-03]]`
- **lessons:** [[LES-S12-01]], [[LES-S12-02]], [[LES-S12-03]], [[LES-S12-04]], [[LES-S12-05]]
- **notes:**
  - Aplicațiile aferente apar separat pe site.

#### `LES-S12-01` — Pronumele și adjectivul pronominal nehotărât

- **tip:** lecție
- **parent:** `SES-S12`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele nehotărât este partea de vorbire flexibilă care ține locul unui substantiv, oferind o indicație foarte vagă, nedeterminată sau cantitativ aproximativă asupra ființelor, lucrurilor ori însușirilor acestora.

---

### A. CLASIFICARE DUPĂ STRUCTURĂ

1. **Pronume nehotărâte simple:**
   - *unul, altul, atât, tot, mult, puțin*.
2. **Pronume nehotărâte compuse:**
   - Cu elementul **fie-**: *fiecare, fiecine, fiece*;
   - Cu elementul **ori-**: *oricine, orice, oricare, oricât, oricineva*;
   - Cu elementul **oare-**: *oarecine, oarece, oarecare*;
   - Cu elementul **vre-**: *vreunul, vreuna, vreun, vreo*;
   - Cu particula postpusă **-va**: *cineva, ceva, careva, câtva*.
3. **Locuțiuni pronominale nehotărâte:**
   - Grupuri stabile de cuvinte cu valoare de pronume nehotărât: *nu știu cine, nu știu ce, te miri cine, cine știe cine, cine știe ce, te miri ce*.

---

### B. FORME CAZUALE ȘI FLEXIUNE

- Pronumele *fiecare, oricine, cineva* au forme flexionare pentru Genitiv-Dativ:
  - *oricui, fiecăruia, fiecăreia, cuiva*;
- Pronumele *unul, altul, vreunul* au forme complete de gen, număr și caz:
  - N-Ac: *unul, una, unii, unele*;
  - G-D: *unuia, uneia, unora*.

---

### C. ADJECTIVUL PRONOMINAL NEHOTĂRÂT (CONVERSIUNE)

Când determină nemijlocit un substantiv și se acordă cu acesta în gen, număr și caz, pronumele nehotărât devine **adjectiv pronominal nehotărât** și îndeplinește funcția de **atribut adjectival**:
- *Fiecare (pronume nehotărât, subiect) a primit o diplomă.*
- *Fiecare elev (adjectiv pronominal nehotărât, atribut adjectival) a primit o diplomă.*
- *Am citit **oarecare** cărți.* (adjectiv pronominal nehotărât).
- *A plecat **fără nicio** ezitare.* (adjectiv).

---

### D. FUNCȚII SINTACTICE

1. **Subiect:** *Cineva a bătut la ușă.*
2. **Nume predicativ:** *El a devenit altul.*
3. **Complement direct:** *Am văzut pe oricine a trecut.*
4. **Complement indirect:** *I-am povestit fiecăruia întâmplarea.*
5. **Atribut pronominal genitival:** *Părerile unora au fost utile.*

#### `LES-S12-02` — Pronumele și adjectivul pronominal negativ

- **tip:** lecție
- **parent:** `SES-S12`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele negativ este partea de vorbire flexibilă care ține locul unui substantiv într-un enunț negativ, exprimând absența totală sau excluderea unei persoane, a unui lucru ori a unei cantități.

---

### A. REGULA DUBLU NEGAȚIEI ÎN LIMBA ROMÂNĂ

În limba română literară, pronumele negativ cere **în mod obligatoriu** ca predicatul propoziției să fie la **formă negativă** (însoțit de adverbul *nu* sau de alt formant negativ):
- *Nimeni **nu a sosit** la gară.* (corect);
- *Niciunul dintre ei **nu a lipsit**.* (corect).

---

### B. FORME ȘI FLEXIUNE CAZUALĂ

1. **Pentru persoane:**
   - *nimeni* (are forme cazuale: N-Ac: *nimeni, pe nimeni*; G-D: *nimănui*). Nu are forme de feminin sau plural.
2. **Pentru lucruri:**
   - *nimic / nimica* (invariabil, folosit numai la N-Ac: *N-am văzut nimic*).
3. **Pentru persoane și lucruri (dintr-un grup determinat):**
   - *niciunul, niciuna, niciunii, niciunele*;
   - Genitiv-Dativ: *niciunuia, niciuneia, niciunora*.

---

### C. ADJECTIVUL PRONOMINAL NEGATIV ȘI ORTOGRAFIA DOOM-3

Când însoțește un substantiv și se acordă cu el, devine **adjectiv pronominal negativ**:
- Forme: *niciun, nicio, niciunui, niciunei*;
- **Normă ortografică DOOM-3:** Se scriu legat într-un singur cuvânt:
  - *Nu am **niciun** motiv de supărare.* (adjectiv pronominal negativ, atribut adjectival);
  - *N-am găsit **nicio** carte utilă.* (adjectiv pronominal negativ).
- **Atenție la scrierea separată (*nici un*):** Se scrie disjuns când *nici* este adverb sau conjuncție, iar *un* este numeral sau articol:
  - *Nu a venit **nici un** elev, nici doi.* (adverb + numeral);
  - *Nu e **nici un** geniu, nici un prost.* (conjuncție + substantiv articulat).

---

### D. FUNCȚII SINTACTICE

1. **Subiect:** *Nimeni nu vorbește.*
2. **Nume predicativ:** *Nu ești nimeni pentru el.*
3. **Complement direct:** *N-am întâlnit pe niciunul.*
4. **Complement indirect:** *Nu i-am cerut nimănui ajutorul.*
5. **Complement prepozițional:** *Nu mă bazez pe nimic.*
6. **Atribut pronominal genitival:** *Intervenția nimănui nu a contat.*

#### `LES-S12-03` — Pronumele și adjectivul pronominal interogativ

- **tip:** lecție
- **parent:** `SES-S12`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele interogativ este partea de vorbire flexibilă care ține locul numelui unei persoane sau al unui lucru așteptat ca răspuns la o întrebare formulată într-o propoziție interogativă.

---

### A. FORMELE PRONUMELUI INTEROGATIV

1. ***Cine?* (doar pronume, numai pentru persoane):**
   - Nominativ: *Cine a venit?*
   - Acuzativ: *Pe cine cauți?*
   - Genitiv-Dativ: *Cui i-ai dat cartea?* / *A cui casă este aceasta?*
2. ***Ce?* (invariabil, pentru lucruri sau identitate):**
   - Nominativ-Acuzativ: *Ce s-a auzit?* / *Ce dorești?*
3. ***Care?* (pentru selecție dintr-un grup cunoscut):**
   - N-Ac: *care, pe care*;
   - G-D: *căruia, căreia, cărora*: *Căruia dintre voi i-a plăcut piesa?*
4. ***Cât, câtă, câți, câte?* (exprimă cantitatea):**
   - G-D plural: *câtora*.

---

### B. ADJECTIVUL PRONOMINAL INTEROGATIV

Pronumele *ce, care, cât, câtă, câți, câte* devin **adjective pronominale interogative** atunci când stau pe lângă un substantiv și se acordă cu acesta în gen, număr și caz:
- *Care elev a răspuns primul?* (adjectiv pronominal interogativ, atribut adjectival);
- *Ce carte ai împrumutat de la bibliotecă?* (adjectiv pronominal interogativ);
- *Câte mere ai cules din livadă?* (adjectiv pronominal interogativ).
- *Pronumele **cine** NU poate deveni niciodată adjectiv pronominal!*

---

### C. METODA DE DETERMINARE A FUNCȚIEI SINTACTICE

Funcția sintactică a pronumelui interogativ este identică cu a cuvântului care îl înlocuiește în răspunsul la întrebare (metoda substituirii):
- *— **Cine** a sosit? — **Elevul** a sosit.* (*elevul* = subiect → *cine* = **subiect**).
- *— **Pe cine** admiri? — Pe **profesor** îl admir.* (*pe profesor* = complement direct → *pe cine* = **complement direct**).
- *— **Cui** i-ai mulțumit? — **Prietenului** i-am mulțumit.* (*prietenului* = complement indirect → *cui* = **complement indirect**).
- *— **A cui** este mașina? — A **vecinului**.* (*a vecinului* = atribut genitival → *a cui* = **atribut pronominal genitival**).

#### `LES-S12-04` — Pronumele și adjectivul pronominal relativ

- **tip:** lecție
- **parent:** `SES-S12`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele relativ are aceleași forme ca pronumele interogativ (*cine, ce, care, cât, cel ce, ceea ce*), dar funcționează ca element de relație (conector subordonator) la nivel de frază, având simultan funcție sintactică în propoziția subordonată pe care o introduce.

---

### A. DUBLUL ROL AL RELATIVULUI

1. **Conector subordonator:** Leagă propoziția subordonată de regenta ei.
2. **Parte de propoziție în subordonată:**
   - Subiect: *Știu / cine a venit./* (*cine* = subiect);
   - Complement direct: *Iată cartea / pe care am citit-o./* (*pe care* = complement direct);
   - Complement indirect: *Cunosc omul / căruia i-ai vorbit./* (*căruia* = complement indirect).

---

### B. ACORDUL ÎNCRUCIȘAT LA GENITIV

În structura *copilul a cărui mamă a venit*:
- Forma pronumelui (*cărui*) se acordă în gen și număr cu posesorul anterior (*copilul*);
- Articolul posesiv (*a*) se acordă în gen și număr cu obiectul posedat următor (*mamă*).

#### `LES-S12-05` — Pronumele și adjectivul pronominal de întărire

- **tip:** lecție
- **parent:** `SES-S12`
- **status:** `present`
- **source:** [[MOR-002]]

### Conținut extras și normalizat

- **Definiție:** Pronumele și adjectivul pronominal de întărire subliniază persoana la care se referă, distingând-o de altele. În limba contemporană se utilizează aproape exclusiv ca **adjectiv pronominal de întărire**.

---

### A. PARADIGMA FORMELOR DE ÎNTĂRIRE

1. **Masculin singular:** *eu însumi*, *tu însuți*, *el însuși*.
2. **Feminin singular:** *eu însămi*, *tu însăți*, *ea însăși* (la Genitiv-Dativ feminin: *mie însemi*, *ție înseți*, *fetei înseși*).
3. **Masculin plural:** *noi înșine*, *voi înșivă*, *ei înșiși*.
4. **Feminin plural:** *noi însene*, *voi însevă*, *ele însele / înseși*.

---

### B. ROL SINTACTIC

Se acordă întotdeauna în gen, număr și caz cu substantivul sau pronumele determinat și îndeplinește funcția de **atribut adjectival**:
- *Profesorul însuși a apreciat lucrarea.*
- *Elevele însele au organizat evenimentul.*

## `CUR-04` — 4. MORFOLOGIE — PĂRȚI DE VORBIRE NEFLEXIBILE

- **tip:** unitate de programă
- **parent:** `GRA-ROOT`
- **children:** [[SES-S13]], [[SES-S14]]

### `SES-S13` — S13 — Adverbul și prepoziția

- **tip:** sesiune
- **parent:** `[[CUR-04]]`
- **lessons:** [[LES-S13-01]], [[LES-S13-02]]

#### `LES-S13-01` — Adverbul

- **tip:** lecție
- **parent:** `SES-S13`
- **status:** `present`
- **source:** [[MOR-007]]

### Conținut extras și normalizat

- **Definiție:** Adverbul este partea de vorbire neflexibilă care determină un verb, un adjectiv sau un alt adverb, exprimând circumstanțe de loc, timp, mod, cauză, scop sau gradul unei însușiri.

---

### A. CLASIFICAREA ADVERBELOR

1. **După structură:**
   - Simple: *aici, acum, așa, bine, destul, ieri, mâine, sus, jos*.
   - Compuse: *alaltăieri, astă-seară, devreme, deseori, nicicând, oricând*.
   - Locuțiuni adverbiale: *din când în când, fără doar și poate, de-a curmezișul, pe neașteptate*.
2. **După înțeles (semnificație):**
   - De loc: *acolo, aproape, departe, sus, jos, pretutindeni*.
   - De timp: *ieri, azi, mâine, curând, târziu, niciodată*.
   - De mod: *agale, bine, repede, încet, abia, astfel*.
3. **Adverbe predicative:** Pot alcătui singure predicat verbal când sunt urmate de conjuncțiile *că* sau *să*:
   - *desigur, firește, probabil, pesemne, poate, bineînțeles*.
   - *Desigur / că va veni./* (*desigur* = predicat verbal).

---

### B. GRADELE DE COMPARAȚIE ALE ADVERBELOR

Adverbele de mod au aceleași grade de comparație ca adjectivele:
- Pozitiv: *bine*;
- Comparativ de superioritate: *mai bine*; de egalitate: *la fel de bine*; de inferioritate: *mai puțin bine*;
- Superlativ relativ: *cel mai bine*; superlativ absolut: *foarte bine*, *extraordinar de bine*.

#### `LES-S13-02` — Prepoziția

- **tip:** lecție
- **parent:** `SES-S13`
- **status:** `present`
- **source:** [[MOR-009]]

### Conținut extras și normalizat

- **Definiție:** Prepoziția este partea de vorbire neflexibilă auxiliară care leagă un atribut sau un complement de cuvântul pe care îl determină și impune cazul termenului subordonat.

---

### A. REGIMUL CAZUAL AL PREPOZIȚIILOR

1. **Prepoziții care cer Acuzativul (cele mai numeroase):**
   - *cu, de, din, spre, în, la, pe, pentru, sub, peste, prin, după, fără, spre, între*.
   - Locuțiuni: *față de, în loc de, alături de, împreună cu*.
2. **Prepoziții care cer Genitivul:**
   - Provenite din adverbe articulate: *deasupra, dedesubtul, înaintea, înapoia, împrejurul, contra, împotriva*.
   - Locuțiuni prepoziționale: *în fața, în spatele, din cauza, din pricina, în scopul, în ciuda, în pofida*.
3. **Prepoziții care cer Dativul:**
   - *grație, mulțumită, datorită, conform, contrar, potrivit, aidoma, asemenea*.
   - *Exemplu:* *Datorită efortului său a câștigat.*

### `SES-S14` — S14 — Conjuncția și interjecția

- **tip:** sesiune
- **parent:** `[[CUR-04]]`
- **lessons:** [[LES-S14-01]], [[LES-S14-02]]
- **notes:**
  - Aplicațiile sunt afișate separat față de lecțiile propriu-zise.

#### `LES-S14-01` — Conjuncția

- **tip:** lecție
- **parent:** `SES-S14`
- **status:** `present`
- **source:** [[MOR-008]]

### Conținut extras și normalizat

- **Definiție:** Conjuncția este partea de vorbire neflexibilă cu rol de instrument gramatical, care asigură legătura sintactică între două părți de propoziție de același fel (în propoziție) sau între două propoziții (în frază). Nu are funcție sintactică de sine stătătoare.

---

### A. CLASIFICARE DUPĂ STRUCTURĂ

1. **Conjuncții simple:** *și, nici, dar, iar, însă, ci, sau, ori, fie, dacă, de, că, să, căci, deși, încât*;
2. **Conjuncții compuse:** *ca să, precum și, ca și*;
3. **Locuțiuni conjuncționale:** Grupuri sudate de cuvinte cu rol de conjuncție:
   - Coordonatoare: *precum și, nu numai... ci și, fie că... fie că*;
   - Subordonatoare: *în timp ce, după ce, până să, din cauză că, pentru ca să, măcar că, cu toate că, fără să, ca și cum, în caz că*.

---

### B. CLASIFICARE DUPĂ RAPORTUL SINTACTIC EXPRIMAT

#### 1. Conjuncții coordonatoare (leagă unități de pe același plan sintactic):
- **Copulative:** leagă elemente asociative (*și, nici, precum și*);
- **Adversative:** exprimă opoziția (*dar, iar, însă, ci*):
  - **Regulă strictă de punctuație:** Înaintea conjuncțiilor adversative *dar, iar, însă, ci* **se pune întotdeauna virgulă** (*A învățat, dar nu a înțeles.*);
- **Disjunctive:** exprimă alegerea sau excluderea (*sau, ori, fie*):
  - Dacă sunt repetate (*sau... sau*, *fie... fie*), se despart prin virgulă;
- **Conclusive:** exprimă urmarea sau concluzia firească (*deci, așadar, prin urmare*):
  - Se despart întotdeauna prin virgule în enunț.

#### 2. Conjuncții subordonatoare (leagă o propoziție subordonată de regenta ei):
- **Nespecializate (pot introduce mai multe tipuri de subordonate):**
  - *că, să, ca să, dacă, de*;
- **Specializate:**
  - Cauzale: *deoarece, fiindcă, întrucât, căci*;
  - Concesive: *deși, măcar că, cu toate că*;
  - Consecutive: *încât, încât să*;
  - Finale: *pentru ca să*.

---

### C. DIFERENȚIEREA CONJUNCȚIEI DE ALTE PĂRȚI DE VORBIRE

- *Iar* adverb (*A venit iar la noi.* = din nou) vs. *iar* conjuncție adversativă (*Eu scriu, iar el citește.*).
- *De* prepoziție (*Pahar de sticlă.*) vs. *de* conjuncție (*De plouă, stăm în casă.* = dacă).

#### `LES-S14-02` — Interjecția

- **tip:** lecție
- **parent:** `SES-S14`
- **status:** `present`
- **source:** [[MOR-010]]

### Conținut extras și normalizat

- **Definiție:** Interjecția este partea de vorbire neflexibilă care exprimă în mod spontan și direct senzații fizice, stări afective (bucurie, durere, uimire, teamă), manifestări de voință, îndemnuri sau reproduce zgomote din lumea înconjurătoare (onomatopee).

---

### A. CLASIFICAREA INTERJECȚIILOR

1. **Interjecții propriu-zise:**
   - Exprimă stări sufletești și emoții: *ah!, oh!, vai!, aoleu!, uf!, brr!, bravo!*;
   - Exprimă un îndemn sau o manifestare de voință: *hai!, haide!, ho!, stop!, nani!, marș!, păcat!*;
   - De adresare și atragere a atenției: *măi!, băi!, bre!, hei!, sst!, psst!*.
2. **Interjecții onomatopeice (onomatopee):**
   - Reproduc zgomote din natură: *poc!, trosc!, pleosc!, buf!, pic-pic!, zbrrr!, bum!, ham-ham!, miau!*.
3. **Locuțiuni interjecționale:**
   - Formule fixe exclamative: *ia te uită!, halal să-ți fie!, ferească Dumnezeu!, pe naiba!, vai de mine!*.

---

### B. FUNCȚII SINTACTICE ALE INTERJECȚIEI

Deși multe interjecții sunt echivalente cu o propoziție neanalizabilă (enunț de sine stătător), unele pot îndeplini funcții sintactice clasice:
1. **Predicat verbal (interjecție predicativă):**
   - *Iată casa bunicilor!* (predicat verbal = se află);
   - *Pupăza zbrrr! pe o creangă.* (predicat verbal = a zburat);
   - *Pisica haț! pe șoarece.* (predicat verbal = a prins);
   - *Hai mai repede la școală!* (predicat verbal = mergi).
2. **Nume predicativ:**
   - *E **vai** de el.* (nume predicativ pe lângă copulativul *e*);
   - *Purtarea lui a fost **bravo**.*
3. **Complement direct:**
   - *Am auzit **poc!** în curte.* (*ce am auzit?*);
   - *Și-a auzit **trosc!** la încheietură.*
4. **Subiect:**
   - *S-a auzit un **mor-mor** în tufiș.* (*ce s-a auzit?*);
   - *Din cer răsună un **bum!** asurzitor.*
5. **Circumstanțial de mod:**
   - *Mergem **hopa-hopa** pe drumul pietruit.* (*cum mergem?*).

---

### C. TOPICĂ ȘI PUNCTUAȚIE

- Interjecțiile afective sau de adresare sunt urmate de **semnul exclamării** sau se izolează prin **virgulă** când sunt intercalate:
  - *Vai, ce sperietură am tras!*
  - *Măi băiatule, fii atent la drum!*
- Interjecțiile predicative urmate de complement direct nu se despart prin virgulă de acesta: *Iată soluția problemei.*

## `CUR-05` — 5. SINTAXĂ

- **tip:** unitate de programă
- **parent:** `GRA-ROOT`
- **children:** [[SES-S15-PRED]], [[SES-S15-SUB]], [[SES-S16]], [[SES-S17]], [[SES-S18-CD]], [[SES-S18-CI]], [[SES-S19]], [[SES-S20-MOD]], [[SES-S20-TMP]], [[SES-S20-LOC]], [[SES-S21-CAU]], [[SES-S21-SCOP]]

### `SES-S15-PRED` — S15 — Predicatul

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S15-PRED-01]], [[SUP-S15-PRED-01]]
- **notes:**
  - Capitolul afișează un test/aplicație, fără
- lecție propriu-zisă listată separat în conținutul vizibil.

#### `SUP-S15-PRED-01` — Predicatul — test/aplicație

- **tip:** material suplimentar
- **parent:** `SES-S15-PRED`
- **status:** `present`
- **source:** [[MOR-006]], [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Ghid aplicat de identificare a predicatului verbal, a predicatului nominal, a verbelor copulative și a capcanelor de delimitare sintactică în frază.

---

### A. PREDICAT VERBAL vs. PREDICAT NOMINAL

1. **Predicatul verbal (PV):** Exprimă acțiunea sau starea subiectului. Poate fi exprimat prin:
   - Verb la mod personal (indicativ, conjunctiv, condițional, imperativ);
   - Interjecție predicativă (*Iată casa!*, *Hai mai repede!*, *Pupăza zbrrr! pe o creangă.*);
   - Adverb predicativ urmat de *că/să* (*Desigur că vine.*).
2. **Predicatul nominal (PN):** Arată cine este, ce este sau cum este subiectul.
   - Structură: **Verb copulativ** (formă flexibilă) + **Nume predicativ** (simplu sau multiplu).

---

### B. VALORILE LUI „A FI” (PREDICATIV vs. COPULATIV vs. AUXILIAR)

1. **Predicativ (PV):** Când are sensul de *a exista, a se afla, a costa, a dura, a proveni*:
   - *Cartea **este** pe birou.* (PV = se află).
   - *Spectacolul **este** de două ore.* (PV = durează).
2. **Copulativ (formează PN):** Când leagă subiectul de numele predicativ:
   - *Prietenul meu **este medic**.* (PN = copulativ + nume predicativ).
3. **Auxiliar:** Ajută la formarea timpurilor compuse (viitor anterior, conjunctiv perfect, condițional perfect, diateza pasivă):
   - *Voi **fi** terminat tema.* (auxiliar pentru viitor anterior).
   - *Casa a **fost** construită.* (auxiliar pentru diateza pasivă).



- **tip:** material suplimentar
- **parent:** `SES-S15-PRED`
- **status:** `supplementary`
- **source:** [[MOR-006]], [[SIN-001]]

#### `LES-S15-PRED-01` — Predicativa

- **tip:** lecție
- **parent:** `SES-S15-PRED`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția predicativă (PR) este subordonata care îndeplinește la nivel de frază rolul de **nume predicativ** al unui verb copulativ din propoziția regentă, formând împreună cu acesta un predicat nominal la nivelul frazei. Răspunde la întrebările: *ce este?*, *cum este?*, *ce se face?*, *cum devine?* (adresate verbului copulativ din regentă).

---

### A. TERMENI REGENTI (VERBELE COPULATIVE)

Regenta conține întotdeauna un **verb copulativ incomplet**, care are deja subiect (exprimat sau subînțeles), dar îi lipsește numele predicativ:
1. *a fi:* *Dorința lui a fost / să devină medic./*
2. *a deveni:* *Băiatul a devenit / ce și-au dorit părinții./*
3. *a ajunge:* *El a ajuns / cum îl știau toți./*
4. *a ieși:* *După concurs a ieșit / cum sperase antrenorul./*
5. *a se face:* *Vremea s-a făcut / cum e mai plăcut./*
6. *a părea:* *Prietenul meu părea / că nu înțelege nimic./*
7. *a rămâne:* *El a rămas / ce a fost întotdeauna: un om cinstit./*
8. *a însemna:* *A învăța înseamnă / să descoperi lumea./*

---

### B. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Conjuncții subordonatoare:** *că, să, ca să, dacă, de*;
  - *Întrebarea este / dacă va veni la timp./*
  - *Ținta noastră este / să câștigăm competiția./*
- **Pronume și adjective pronominale relative/nehotărâte:** *ce, cine, care, oricine, orice*;
  - *Mihai a devenit / ce a vrut el./*
  - *Câștigătorul va fi / oricine se va antrena cel mai mult./*
- **Adverbe relative:** *cum, precum, cât*:
  - *Purtarea lui este / cum nu se poate mai potrivită./*

---

### C. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Nume predicativ → Propoziție Predicativă):**
  - *Dorința lui a fost succesul. (NP)* → *Dorința lui a fost / să aibă succes./ (PR)*
  - *El a devenit profesor. (NP)* → *El a devenit / ce și-a dorit./ (PR)*
  - *Părerea mea este afirmativă. (NP)* → *Părerea mea este / că ai procedat corect./ (PR)*
- **Contragere (Propoziție Predicativă → Nume predicativ):**
  - *El a rămas / cum a fost mereu./ (PR)* → *El a rămas neschimbat. (NP)*
  - *Propunerea mea este / să plecăm imediat./ (PR)* → *Propunerea mea este plecarea imediată. (NP)*

---

### D. TOPICĂ ȘI PUNCTUAȚIE (REGULĂ ABSOLUTĂ)

- Propoziția predicativă stă de regulă **după verbul copulativ regent** și **NU se desparte NICIODATĂ prin virgulă** de acesta, deoarece formează împreună un predicat nominal indisolubil:
  - *Visul lui este / să zboare cu avionul./* (fără virgulă!).
- Chiar și atunci când este antepusă (caz rar, stilistic), nu se desparte prin virgulă dacă legătura este directă (*Ce am fost / sunt și acum.*).

---

### E. CONFUSII FRECVENTE: PREDICATIVĂ vs. SUBIECTIVĂ

Cea mai frecventă greșeală este confuzia dintre Predicativă (PR) și Subiectivă (SB) pe lângă verbul *a fi*:
- **Dacă verbul copulativ din regentă ARE SUBIECT** (în regentă sau dedus din acord), subordonata este **PREDICATIVĂ**:
  - ***Problema (subiect)** este / că nu avem timp./ (PR)*
  - ***Eu (subiect inclus)** sunt / cine trebuie./ (PR)*
- **Dacă verbul *a fi* din regentă NU ARE SUBIECT** (este impersonal), subordonata este **SUBIECTIVĂ**:
  - *E bine / că ai venit./ (SB)* (*e bine* = expresie impersonală; *că ai venit* este subiectul logic).



- **tip:** lecție
- **parent:** `SES-S15-PRED`
- **status:** `planned`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Predicativa (PD) este propoziția subordonată care îndeplinește în frază funcția de **nume predicativ** al verbului copulativ din regentă.

---

### A. STRUCTURA PREDICATIVEI

**Predicatul nominal** este alcătuit din:
1. Verb copulativ în regentă (*a fi*, *a deveni*, *a rămâne*, *a părea*, *a ajunge*, *a se face*, *a însemna*, *a se numi*);
2. Propoziția predicativă ține locul numelui predicativ.

---

### B. ELEMENTE DE RELAȚIE

- Conjuncții subordonatoare: *că*, *să*, *ca... să*, *dacă*.
- Pronume/adjective relative: *cine*, *ce*, *care*, *câți*, *câte*.
- Adverbe relative: *unde*, *când*, *cum*, *cât*.

---

### C. EXEMPLE

1. *Visul meu / este să ajung doctor./* (PD introdusă prin *să*)
2. *Impresia mea / este că a greșit./* (PD introdusă prin *că*)
3. *Prietenul meu / este cine mă ajută la nevoie./* (PD introdusă prin *cine*)
4. *Problema / este unde vom dormi./* (PD introdusă prin *unde*)

---

### D. TOPICĂ ȘI PUNCTUAȚIE

- De regulă **nu se desparte prin virgulă** de regentă când este postpusă;
- Când este antepusă și reluată printr-un demonstrativ, se desparte: *Ceea ce mi-ai spus / aceea este adevărul.*

### `SES-S15-SUB` — S15 — Subiectul. Acordul predicatului cu subiectul

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S15-SUB-01]], [[LES-S15-SUB-02]], [[LES-S15-SUB-03]]

#### `LES-S15-SUB-01` — Subiectul exprimat. Subiectul neexprimat

- **tip:** lecție
- **parent:** `SES-S15-SUB`
- **status:** `partial`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Subiectul este partea principală de propoziție care arată cine face acțiunea sau despre cine se afirmă ceva, răspunzând la întrebările *cine?* sau *ce?*

---

### A. SUBIECTUL EXPRIMAT

Poate fi exprimat prin:
1. **Substantiv:** *Bunicul citește.*
2. **Pronume personal:** *Ea scrie un eseu.*
3. **Pronume demonstrativ:** *Acesta este colegul meu.*
4. **Pronume nehotărât:** *Cineva a sunat.*
5. **Numeral:** *Doi au câștigat.*
6. **Verb la infinitiv:** *A citi este o plăcere.*
7. **Verb la gerunziu:** *Citind, te îmbogățești.*
8. **Verb la supin:** *De învățat e ușor.*
9. **Interjecție:** *Se auzea cioc-cioc la ușă.*
10. **Propoziție subiectivă:** *Cine muncește / are rezultate./*

---

### B. SUBIECTUL NEEXPRIMAT

1. **Inclus** — persoana se înțelege din desinența verbului:
   - *(Eu) citesc o carte.*
   - *(Noi) mergem la școală.*
2. **Subînțeles** — reiese din context:
   - *Maria a venit. (Ea) era obosită.*
3. **Nedeterminat** — nu poate fi precizat (verbe impersonale sau la persoana IV):
   - *Se spune că va ploua.*
   - *Bate vântul.*

---

### C. ATENȚIE — SITUAȚII SPECIALE

- **Subiectul multiplu** — două sau mai multe elemente cu aceeași funcție: *Ion și Maria vin.*
- **Subiectul în propoziție subordonată:** Pronumele relative *cine*, *ce*, *care*, *câți* pot fi subiecte în subordonata pe care o introduc: *Cine muncește / câștigă./*
- **Subiect exprimat în cazul Nominativ:** Regula generală — subiectul stă la cazul Nominativ. Excepție: subiectul din subordonata introdusă de pronume relative poate sta la Alt caz în funcție de rolul pronumelui.

#### `LES-S15-SUB-02` — Acordul predicatului cu subiectul

- **tip:** lecție
- **parent:** `SES-S15-SUB`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Acordul predicatului cu subiectul este raportul sintactic fundamental prin care predicatul verbal sau verbul copulativ își adaptează formele de număr și persoană după subiectul gramatical.

---

### A. REGULA GENERALĂ DE ACORD

Predicatul se acordă cu subiectul în număr și persoană:
- *Elevul citește.* (pers. a III-a sg.) / *Elevii citesc.* (pers. a III-a pl.).

---

### B. ACORDUL CU SUBIECT MULTIPLU

1. **Subiecte de persoane diferite:** persoana I are prioritate față de a II-a și a III-a; persoana a II-a are prioritate față de a III-a:
   - *Eu și tu [= noi] vom merge la teatru.*
   - *Tu și el [= voi] veți prezenta proiectul.*
2. **Subiect multiplu coordonat copulativ:** predicatul este la plural:
   - *Mama și tata au sosit.*

---

### C. CAZURI SPECIALE DE ACORD

1. **Acordul după înțeles (logic):** Cu substantive colective determinate de un atribut la plural, norma acceptă acordul la singular (gramatical) sau la plural: *O mulțime de oameni au aplaudat / a aplaudat*.
2. **Subiecte legate prin *sau / ori*:** Dacă termenii se exclud, acordul se face la singular (*Ori Andrei, ori Mihai va câștiga*); dacă nu se exclud, la plural.

#### `LES-S15-SUB-03` — Subiectiva

- **tip:** lecție
- **parent:** `SES-S15-SUB`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția subiectivă (SB) este propoziția subordonată care îndeplinește la nivel de frază rolul de **subiect** al predicatului dintr-o propoziție regentă lipsită de subiect exprimat sau subînțeles. Răspunde la întrebările: *cine?*, *ce?* (adresate predicatului impersonal din regentă).

---

### A. INVENTARUL COMPLET AL TERMENILOR REGENTI IMPERSONALI

Propoziția regentă a unei subiective conține întotdeauna un **predicat impersonal**:
1. **Verbe impersonale prin natura lor (fenomene ale naturii folosite figurat):**
   - *Plouă / cu ce nu te aștepți./*
   - *Se înserează / înainte să ajungem./*
2. **Verbe personale devenite impersonale prin contextualizare:**
   - *trebuie, urmează, rămâne, se cuvine, se cade, pasă, ajunge*:
   - *Trebuie / să învățăm zilnic./*
   - *Urmează / să stabilim data examenului./*
   - *Rămâne / să vedem cine va câștiga./*
3. **Expresii verbale impersonale (format din verbul copulativ *a fi* + adverb, locuțiune adverbială sau substantiv):**
   - *e bine, e rău, e ușor, e greu, e sigur, e adevărat, e păcat, e drept, e timpul, e cazul*:
   - *E bine / să fim pregătiți./*
   - *E sigur / că vor veni toți colegii./*
4. **Adverbe și locuțiuni adverbiale predicative (urmate obligatoriu de *că* sau *să*):**
   - *desigur, firește, probabil, fără îndoială, negreșit, pesemne*:
   - *Firește / că ai dreptate./*
   - *Fără îndoială / că vom reuși./*
5. **Verbe la diateza reflexiv-impersonală:**
   - *se știe, se aude, se zice, se zvonește, se crede, se speră, se vede*:
   - *Se știe / că munca aduce satisfacții./*
   - *Se aude / că va ploua diseară./*
6. **Verbe la diateza pasivă cu sens impersonal:**
   - *este dovedit, este demonstrat, a fost stabilit*:
   - *A fost stabilit / când va avea loc conferința./*

---

### B. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Conjuncții subordonatoare:** *că, să, ca să, dacă, de*;
  - *E probabil / că va sosi mâine./*
  - *Se cere / să fim punctuali./*
- **Pronume și adjective pronominale relative/nehotărâte:** *cine, ce, oricine, orice, care*;
  - *Cine poate / oase roade./*
  - *Ce se naște din pisică / șoareci mănâncă./*
- **Adverbe relative:** *unde, când, cum, cât*:
  - *Nu se știe / când va începe spectacolul./*

---

### C. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Subiect → Propoziție Subiectivă):**
  - *Harnicul are de toate. (subiect)* → *Cine e harnic / are de toate./ (SB)*
  - *E bine a învăța. (subiect infinitival)* → *E bine / să înveți./ (SB)*
  - *Sosirea lui este sigură. (subiect)* → *Este sigur / că va sosi el./ (SB)*
- **Contragere (Propoziție Subiectivă → Subiect):**
  - *Cine întârzie / este penalizat./ (SB)* → *Întârziatul este penalizat. (subiect)*
  - *E păcat / să minți./ (SB)* → *Minciuna este un păcat. (subiect)*

---

### D. TOPICĂ ȘI PUNCTUAȚIE

- **Postpusă regentei (poziție frecventă):** **Nu se desparte prin virgulă** de regenta impersonală (*E cert că vine*, *Trebuie să asculți*).
- **Antepusă regentei:** Se desparte de regulă prin virgulă când este introdusă prin pronume relative și este subliniată (*Cine fuge după doi iepuri,/ nu prinde niciunul.*).

---

### E. CAPCANA ESENȚIALĂ: SB vs. CD CU PRONUME ÎN DATIV / ACUZATIV

Pe lângă verbe impersonale care conțin pronume reflexiv sau forme clitice de Dativ/Acuzativ (*îmi place, mă doare, îmi convine, îmi pasă*), subordonata este **SUBIECTIVĂ**, nu completivă:
- ***Îmi** place / să citesc romane./* → *ce îmi place?* subiectul logic și gramatical al plăcerii este *să citesc* (SB); pronumele *îmi* este complement indirect în regentă!



- **tip:** lecție
- **parent:** `SES-S15-SUB`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția subiectivă (SB) este propoziția subordonată care îndeplinește la nivel de frază funcția de **subiect** al verbului din propoziția regentă. Răspunde la întrebările *cine?*, *ce?* adresate predicatului regent.

---

### A. TERMENI REGENTI AI SUBIECTIVEI

Regenta conține întotdeauna un predicat sau termen impersonal:
1. **Verbe impersonale:** *trebuie, place, pasă, pare, reiese*.
   - *Trebuie / să înveți zilnic./*
2. **Expresii verbale impersonale (*a fi* + adverb/adjectiv):** *e bine, e rău, e ușor, e greu, e sigur, e adevărat, e posibil*.
   - *E bine / să fii pregătit./*
   - *E sigur / că va reuși./*
3. **Verbe cu pronume reflexiv pasiv / impersonal:** *se știe, se zice, se cuvine, se cade*.
   - *Se știe / cine a câștigat./*
4. **Adverbe sau locuțiuni adverbiale predicative:** *desigur, firește, probabil, desigur, fără îndoială*.
   - *Firește / că te voi sprijini./*

---

### B. ELEMENTE DE RELAȚIE

- Conjuncții subordonatoare: *că, să, dacă, ca... să*;
- Pronume și adjective pronominale relative: *cine, ce, care, ceea ce*;
- Pronume nehotărâte: *oricine, oricare, orice*;
- Adverbe relative: *unde, când, cum, cât*.

### `SES-S16` — S16 — Enunțul, propoziția, fraza

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S16-01]], [[LES-S16-02]]

#### `LES-S16-01` — Enunțul. Propoziția. Fraza

- **tip:** lecție
- **parent:** `SES-S16`
- **status:** `planned`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

---

### A. ENUNȚUL

- **Definiție:** Unitate de comunicare completă din punct de vedere al sensului, delimitată de pauze în vorbire sau de semne de punctuație în scris.
- Un enunț poate fi:
  - O propoziție: *Plouă.*
  - O frază: *Dacă termini tema,/ poți ieși afară./*
  - Un cuvânt izolat (enunț eliptic): *Foc!* / *Ajutor!*

---

### B. PROPOZIȚIA

- **Definiție:** Unitate sintactică organizată în jurul unui **predicat**; exprimă o comunicare completă sau parțială.
- **Propoziție simplă** — are un singur predicat: *Copiii aleargă.*
- **Propoziție dezvoltată** — are predicat și alte părți de propoziție: *Copiii veseli aleargă în parc.*
- **Propoziție principală** — nu depinde de nicio altă propoziție: *Știu / că vine./* (*Știu* = PP)
- **Propoziție subordonată** — depinde de o regentă: *că vine* = SB

---

### C. FRAZA

- **Definiție:** Unitate sintactică formată din **două sau mai multe propoziții**.
- Propozițiile din frază sunt legate prin:
  - **Raporturi de coordonare** — între propoziții principale sau subordonate de același fel;
  - **Raporturi de subordonare** — între o subordonată și regenta ei.

---

### D. TIPURI DE PROPOZIȚII DUPĂ SCOPUL COMUNICĂRII

1. **Enunțiativă (afirmativă/negativă):** *El citește.* / *El nu citește.*
2. **Interogativă:** *Citești?* / *Ce citești?*
3. **Exclamativă:** *Ce frumos citești!*
4. **Imperativă:** *Citește!*

#### `LES-S16-02` — Raporturi de coordonare și de subordonare în frază

- **tip:** lecție
- **parent:** `SES-S16`
- **status:** `partial`
- **source:** [[MOR-008]], [[SIN-001]]

### Conținut extras și normalizat

---

### A. COORDONAREA

- **Definiție:** Raport de egalitate între două propoziții sau grupuri de propoziții; niciuna nu depinde de cealaltă.
- Se realizează cu **conjuncții coordonatoare**:

| Tip | Conjuncții | Exemplu |
| --- | --- | --- |
| Copulativ | *și*, *nici*, *nu numai... ci și* | *Citesc / și ascult muzică./* |
| Adversativ | *dar*, *însă*, *iar*, *ci* | *Am vrut să vin,/ dar nu am putut./* |
| Disjunctiv | *sau*, *ori*, *fie* | *Vii / sau pleci?/* |
| Conclusiv | *deci*, *așadar*, *prin urmare* | *A muncit,/ deci a reușit./* |

---

### B. SUBORDONAREA

- **Definiție:** Raport de dependență — subordonata depinde de regentă și îndeplinește o funcție sintactică în raport cu un termen din regentă.
- Se realizează cu **conjuncții subordonatoare** (*că*, *să*, *dacă*, *deoarece*, *deși*...) sau cu **pronume/adverbe relative** (*cine*, *care*, *unde*, *când*, *cum*...).

---

### C. SCHEMA FRAZEI

Notații standard:
- **/.../** = delimitează o propoziție în cadrul frazei
- **PP** = propoziție principală
- **SB** = subiectivă; **PD** = predicativă; **AT** = atributivă
- **CD** = completivă directă; **CI** = completivă indirectă
- **CT** = circumstanțială de timp; **CC** = circumstanțială de cauză; **CS** = circumstanțială de scop
- **CDȚ** = circumstanțială condițională; **CM** = circumstanțială de mod

Ex: *Știu / că Maria,/ care este colegă cu mine,/ a câștigat./*
- P1 (PP): *Știu*
- P2 (CD față de P1): *că Maria... a câștigat*
- P3 (AT față de *Maria* din P2): *care este colegă cu mine*

### `SES-S17` — S17 — Atributul. Atributiva. Apoziția

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S17-01]], [[LES-S17-02]], [[LES-S17-03]]
- **notes:**
  - Aplicațiile pentru atribut și atributivă sunt listate separat.

#### `LES-S17-01` — Atributul

- **tip:** lecție
- **parent:** `SES-S17`
- **status:** `partial`
- **source:** [[MOR-004]], [[MOR-005]]

### Conținut extras și normalizat

- **Definiție:** Atributul este partea secundară de propoziție care determină un substantiv (sau substitut al acestuia), răspunzând la întrebările *care?*, *ce fel de?*, *al/a/ai/ale cui?*, *câți/câte?*

---

### TIPURI DE ATRIBUTE

#### 1. Atribut adjectival:
Exprimat prin adjectiv acordat cu substantivul regent în gen, număr și caz:
- *Carte frumoasă, cinste cui te-a scris.*
- *Elevi harnici au primit premii.*

#### 2. Atribut substantival genitival:
Substantiv la cazul Genitiv (cu sau fără articol genitival):
- *Cartea elevului este nouă.* (G fără prep.)
- *Rochia mamei a fost admirată.*

#### 3. Atribut substantival prepozițional:
Substantiv în Acuzativ sau Genitiv cu prepoziție/locuțiune prepozițională:
- *Pădurea de fagi este tânără.* (Ac, prep. *de*)
- *Copacul din fața casei a căzut.* (G, locuț. prep.)

#### 4. Atribut pronominal:
- *Genitival:* *Cartea lui este nouă.* (pronume personal, G)
- *Prepozițional:* *Cadoul de la el mi-a plăcut.* (Ac, prep.)

#### 5. Atribut verbal:
- Infinitiv: *Dorința de a reuși este puternică.*
- Gerunziu: *Se văd steaguri fluturând.* (sau adjectival dacă acordat: *steaguri fluturânde*)
- Supin: *Uneltele de pescuit sunt pregătite.*

#### 6. Atribut adverbial:
- *Cursul de mâine este anulat.*
- *Prășitul de două ori a dat recolte bune.*

#### 7. Atribut apozițional:
Substantiv sau echivalent care reia, precizează sau explică substantivul regent:
- *Colegul meu, Andrei, a câștigat.* (apoziție simplă)
- *Dunărea, cel mai important fluviu al României, izvorăște din Germania.* (apoziție dezvoltată)

#### `LES-S17-02` — Atributiva

- **tip:** lecție
- **parent:** `SES-S17`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția atributivă (AT) îndeplinește la nivel de frază rolul unui **atribut**, determinând un substantiv, un pronume sau un numeral din propoziția regentă. Răspunde la întrebările: *care?*, *ce fel de?*, *al (a, ai, ale) cui?*, *câți?*, *câte?*.

---

### A. TERMENI REGENTI

1. **Substantiv:** *Băiatul / care învață / obține premiul întâi./*
2. **Pronume:** *Acela / care întârzie / pierde startul./*
3. **Numeral cu valoare substantivală:** *Trei dintre ei / care au venit / au ajutat echipa./*

---

### B. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Pronume și adjective pronominale relative:** *care, cine, ce, cât, al cărui, a cărei, ai căror, ale căror*;
  - *Copilul / a cărui mamă este medic / vrea să devină chirurg./*
- **Adverbe relative:** *unde, când, cum, cât* (atunci când determină un substantiv cu sens spațial, temporal sau modal):
  - *Orașul / unde am copilărit / s-a schimbat mult./* (*care oraș?* → AT)
  - *Clipa / când a sunat clopotul / a fost emoționantă./* (*care clipă?* → AT)
- **Conjuncții și locuțiuni conjuncționale:** *că, să, ca să, dacă*;
  - *Gândul / că va reuși / îi dădea aripi./* (*ce fel de gând?* → AT)
  - *Dorința / de a călători / l-a însoțit mereu.*

---

### C. CLASIFICARE FUNDAMENTALĂ: DETERMINATIVĂ vs. EXPLICATIVĂ

1. **Atributiva determinativă (neizolată):**
   - Este indispensabilă sensului regentei; restrânge sfera termenului determinat.
   - **Nu se desparte NICIODATĂ prin virgulă** de termenul regent:
   - *Elevii / care s-au pregătit temeinic / au promovat examenul.* (doar aceia, nu toți).
2. **Atributiva explicativă (izolată):**
   - Aduce o informație suplimentară, o notă descriptivă sau o paranteză. Poate fi omisă fără a distruge sensul de bază al regentei.
   - **Se izolează OBLIGATORIU prin virgule**:
   - *Mihai,/ care este colegul meu de bancă,/ a câștigat olimpiada.*

---

### D. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Atribut → Propoziție Atributivă):**
  - *Omul muncitor are roade. (AT)* → *Omul / care muncește / are roade./ (AT)*
  - *Cărțile citite sunt valoroase. (AT participial)* → *Cărțile / care au fost citite / sunt valoroase./ (AT)*
  - *Dorința de învățare îl animă. (AT)* → *Dorința / de a învăța / îl animă./ (AT)*
- **Contragere (Propoziție Atributivă → Atribut):**
  - *Spectacolul / care ne-a încântat / s-a terminat./ (AT)* → *Spectacolul încântător s-a terminat. (AT adjectival)*
  - *Zilele / când eram copii / nu se uită./ (AT)* → *Zilele copilăriei nu se uită. (AT genitival)*

---

### E. REGULA STRICTĂ DE ACORD A LUI *CARE* LA GENITIV

Articolul posesiv-genitival (*al, a, ai, ale*) din structura *al cărui / a cărei* se acordă **în gen și număr cu substantivul determinat din subordonată (obiectul posedat)**, iar pronumele relativ *cărui / cărei / căror* se acordă **cu substantivul regent (posesorul)**:
- *Scriitorul (masc. sg. - posesor) / a cărui carte (fem. sg. - obiect posedat) a apărut.../*
- *Scriitoarea (fem. sg. - posesor) / ai cărei fani (masc. pl. - obiect posedat) aplaudau.../*



- **tip:** lecție
- **parent:** `SES-S17`
- **status:** `planned`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Atributiva (AT) este propoziția subordonată care îndeplinește în frază funcția de **atribut** față de un substantiv (sau substitut) din regentă.

---

### A. ELEMENTE DE RELAȚIE

- **Pronume relative:** *care*, *cine*, *ce*, *câți*, *câte*, *ceea ce*.
- **Adjective pronominale relative:** *care*, *câți*, *câte*.
- **Adverbe relative:** *unde*, *când*, *cum*, *cât*, *de unde*, *până unde*.
- **Conjuncții subordonatoare:** *că*, *să*, *dacă*.

---

### B. EXEMPLE

1. *Cartea / care mi-a plăcut / era pe masă./* (AT introdusă prin *care*, pronume relativ, subiect în AT)
2. *Dorința / să reușesc / este puternică./* (AT introdusă prin *să*)
3. *Știrea / că a câștigat / m-a bucurat./* (AT introdusă prin *că*)
4. *Orașul / unde m-am născut / este frumos./* (AT introdusă prin *unde*)
5. *Ziua / când m-am născut / este în august./* (AT introdusă prin *când*)

---

### C. TOPICĂ ȘI PUNCTUAȚIE

- Atributiva stă **de regulă imediat după** substantivul regent și **nu se desparte prin virgulă**.
- **Excepție:** Atributiva parantetic-explicativă, care adaugă o informație suplimentară (și nu restrictivă), se desparte prin virgule sau linioare: *Mihai, / care era cel mai bun, / a câștigat./*

#### `LES-S17-03` — Apoziția. Norme de punctuație

- **tip:** lecție
- **parent:** `SES-S17`
- **status:** `partial`
- **source:** [[ORT-001]], [[MOR-005]]

### Conținut extras și normalizat

- **Definiție:** Apoziția este atributul substantival (sau echivalentul său) care reia, explică sau precizează substantivul regent, stând de regulă lângă acesta și acordându-se cu el în caz.

---

### A. TIPURI DE APOZIȚIE

#### 1. Apoziție simplă (nedezvoltată):
- *Colegul meu, Andrei, a câștigat.*
- *Dunărea, fluviu european, traversează mai multe țări.*
- *Dl. profesor, domnul Ionescu, predă română.*

#### 2. Apoziție dezvoltată:
O propoziție sau o construcție mai complexă:
- *Dunărea, cel mai lung fluviu din Europa de Est, izvorăște din Germania.*
- *Visul meu, să devin scriitor, mi s-a împlinit.*

---

### B. PUNCTUAȚIA APOZIȚIEI

1. **Apoziția simplă** — se izolează prin **virgule** sau **linioare de pauză**:
   - *Colegul meu, Andrei, a câștigat.*
   - *Colegul meu — Andrei — a câștigat.*
2. **Apoziția în vocativ** construită cu un substantiv comun:
   - *Bădie Ioane!* (*Bădie* = vocativ fără funcție; *Ioane* = apoziție în vocativ)
   - *Dragă mamă!* (*mamă* = vocativ; *dragă* = atribut adjectival al vocativului)
3. **Apoziția neizolată** (când urmează imediat și logic regentul fără pauză):
   - *Poetul Eminescu este cel mai mare scriitor român.*

---

### C. FORME SPECIALE

- Apoziția **la cazul Genitiv** preia cazul regentului: *Cartea elevului, a colegului meu, este nouă.*
- Apoziția **la Vocativ** are forme speciale: *Doamne Dumnezeule!* / *Mamă dragă!*

### `SES-S18-CD` — S18 — Complementul direct

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S18-CD-01]], [[LES-S18-CD-02]]

#### `LES-S18-CD-01` — Complementul direct

- **tip:** lecție
- **parent:** `SES-S18-CD`
- **status:** `partial`
- **source:** [[MOR-002]], [[MOR-005]]

### Conținut extras și normalizat

- **Definiție:** Complementul direct (CD) este partea secundară de propoziție care arată obiectul asupra căruia se exercită direct acțiunea, răspunzând la întrebările *pe cine?* sau *ce?*
- Se exprimă la **cazul Acuzativ**, cu sau fără prepoziția *pe*.
- Îl determină numai **verbele tranzitive**.

---

### A. MIJLOACE DE EXPRIMARE

1. **Substantiv la Acuzativ fără prepoziție:** *Citesc o carte.*
2. **Substantiv la Acuzativ cu prepoziția *pe*:** *O ajut pe mama.*
3. **Pronume personal:** *Îl ajut pe el.* / *O ajut.*
4. **Pronume reflexiv:** *Se laudă mult.*
5. **Numeral:** *Îi cunosc pe cei doi.*
6. **Verb la infinitiv:** *Știe a cânta frumos.*
7. **Verb la supin:** *Am de rezolvat o problemă.*
8. **Propoziție completivă directă:** *Știu / că vine./*

---

### B. ATENȚIE — VERBE CARE NU PERMIT CD

Următoarele verbe par tranzitive (răspund la *pe cine?*), dar sunt **intranzitive** și cer **complement indirect**:
- *a se baza pe*, *a conta pe*, *a miza pe*, *a paria pe*, *a fi gelos pe*, *a se enerva pe*, *a se supăra pe*.

Ex: *Eu mă supăr **pe Ana**.* (CI, nu CD, deoarece verbul este reflexiv-intranzitiv)

---

### C. REGULA PREPOZIȚIEI *PE*

Prepoziția *pe* este obligatorie înaintea complementului direct exprimat prin:
- Substantive proprii (nume de persoane): *Îl cheamă pe Ion.*
- Pronume personale accentuate la Acuzativ: *Îl ajut pe el.*
- Pronume demonstrative: *Îl ajut pe acesta.*
- Numerale cu valoare pronominală: *Îi ajut pe cei doi.*

#### `LES-S18-CD-02` — Completiva directă

- **tip:** lecție
- **parent:** `SES-S18-CD`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția completivă directă (CD) îndeplinește la nivel de frază rolul unui **complement direct**, arătând obiectul asupra căruia se exercită nemijlocit acțiunea verbului tranzitiv din propoziția regentă. Răspunde la întrebările: *pe cine?*, *ce?*.

---

### A. TERMENI REGENTI

1. **Verb tranzitiv (la mod personal sau nepersonal):**
   - *Văd / că ai terminat tema./*
   - *Auzind / cum strigă cineva,/ a alergat la fereastră./* (regent: gerunziu tranzitiv)
2. **Locuțiune verbală tranzitivă:**
   - *A băgat de seamă / că lipsea cineva din sală./*
   - *Nu a ținut minte / ce i-am explicat./*
3. **Interjecție predicativă cu regim tranzitiv:**
   - *Iată / ce am găsit în bibliotecă!/*
   - *Uite / cine a sosit la noi!/*

---

### B. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Conjuncții subordonatoare:** *că, să, ca să, dacă, de*;
  - *Știu / că ești sincer./*
  - *Vreau / să învăț totul temeinic./*
  - *Te întreb / dacă vii mâine la școală./*
- **Pronume și adjective pronominale relative/nehotărâte:** *cine, ce, care, cât, oricine, orice*;
  - *Am cumpărat / ce mi-a plăcut./*
  - *Aleg / pe care îl consider cel mai bun./*
- **Adverbe relative:** *unde, când, cum, cât*;
  - *Nu știu / unde a plecat./* (*ce nu știu?* → CD)
  - *Îmi amintesc / cum s-a întâmplat totul./* (*ce îmi amintesc?* → CD)

---

### C. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Complement direct → Propoziție Completivă directă):**
  - *Văd sosirea trenului. (CD)* → *Văd / că sosește trenul./ (CD)*
  - *Aud un cântec frumos. (CD)* → *Aud / cum cântă cineva la pian./ (CD)*
  - *Doresc succesul vostru. (CD)* → *Doresc / să aveți succes deplin./ (CD)*
- **Contragere (Propoziție Completivă directă → Complement direct):**
  - *Știe / ce a învățat./ (CD)* → *Își știe lecția. (CD)*
  - *Prefer / să citesc o carte./ (CD)* → *Prefer lectura unei cărți. (CD)*

---

### D. DUBLA EXPRIMARE (ANTICIPARE ȘI RELUARE)

Când este introdusă prin pronume relative cu prepoziția *pe*, completiva directă este dublată prin forme clitice de Acuzativ:
- **Reluare:** *Pe cine a fost harnic,/ **l**-am premiat.* (cliticul *l-* reia CD).
- **Anticipare:** ***Îl** recunosc imediat / pe cine a fost coleg cu mine./* (cliticul *îl* anticipează CD).

---

### E. TOPICĂ ȘI PUNCTUAȚIE

- **Postpusă regentei:** De regulă **nu se desparte prin virgulă** (*Știu ce vrei*, *Vreau să merg*).
- **Antepusă regentei:** Se desparte prin virgulă când este reluată prin clitic pronominal (*Ce ai promis ieri,/ **aceea** să respecți.*).

---

### F. CONFUSII FRECVENTE: CD vs. SUBIECTIVĂ (SB)

- Verbele impersonale reflexive sau expresiile impersonale cer **Subiectivă**, nu Completivă Directă:
  - *Se știe / că a reușit./* → **SB** (*se știe* este verb reflexiv impersonal).
  - *Știu / că a reușit./* → **CD** (*știu* este verb personal tranzitiv: *eu știu ce?*).



- **tip:** lecție
- **parent:** `SES-S18-CD`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția completivă directă (CD) este subordonata care îndeplinește la nivel de frază rolul de **complement direct** al verbului tranzitiv din regentă. Răspunde la întrebările *pe cine?*, *ce?*.

---

### A. TERMENI REGENTI

1. **Verb tranzitiv la mod personal:** *Știu / ce ai făcut./*
2. **Verb tranzitiv la mod nepersonal (infinitiv, gerunziu, supin):**
   - *Dorind / să afle adevărul,/ a pus întrebări.*
   - *Avea de demonstrat / că are dreptate./*
3. **Locuțiune verbală tranzitivă:**
   - *A adus la cunoștință / că meciul s-a amânat./*

---

### B. ELEMENTE DE RELAȚIE

- Conjuncții: *că, să, ca... să, dacă, de*;
- Pronume relative: *cine, ce, care, cât, ceea ce*;
- Adverbe relative: *unde, când, cum, cât* (*Nu știu / unde a plecat./*).

---

### C. TOPICĂ ȘI PUNCTUAȚIE

- De regulă stă după regentă și **nu se desparte prin virgulă** (*Am auzit că ai reușit*).
- Dacă este antepusă, se desparte prin virgulă dacă se dorește sublinierea ei (*Ce-ai spus,/ n-am înțeles.*).

### `SES-S18-CI` — S18 — Complementul indirect

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S18-CI-01]], [[LES-S18-CI-02]]

#### `LES-S18-CI-01` — Complementul indirect

- **tip:** lecție
- **parent:** `SES-S18-CI`
- **status:** `partial`
- **source:** [[MOR-002]], [[MOR-005]], [[MOR-009]]

### Conținut extras și normalizat

- **Definiție:** Complementul indirect (CI) este partea secundară de propoziție care arată obiectul în legătură cu care se face acțiunea, fără ca acțiunea să fie îndreptată direct spre el. Răspunde la întrebările *cui?*, *despre cine/ce?*, *la cine/ce?*, *de cine/ce?*, *față de cine/ce?*

---

### A. CAZURILE ȘI FORMELE DE EXPRIMARE

#### 1. Cazul Dativ (fără prepoziție):
- *Îi ofer flori mamei.* (substantiv, D)
- *Le dau lor un premiu.* (pronume, D)
- *Reușita se datorează muncii.* (prepoziție *datorită* + D)

#### 2. Cazul Acuzativ (cu prepoziție):
- *Mă gândesc la tine.* (prep. *la*)
- *Mă bazez pe el.* (prep. *pe*, verb reflexiv-intranzitiv)
- *Mă tem de examen.* (prep. *de*)

#### 3. Cazul Genitiv (cu locuțiune prepozițională):
- *Câinele s-a năpustit asupra hoțului.*
- *Ne-am opus împotriva deciziei.*

---

### B. MIJLOACE DE EXPRIMARE

1. Substantiv (orice caz cu prepoziție sau D fără prepoziție);
2. Pronume personal, reflexiv, demonstrativ, interogativ-relativ;
3. Numeral;
4. Verb la infinitiv (*M-am săturat a tot aștepta*) sau supin (*M-am plictisit de așteptat*);
5. Propoziție completivă indirectă: *M-am gândit / la ce mi-ai spus./*

---

### C. ATENȚIE — DATIVUL POSESIV

Dativul reflexiv *îmi*, *îți*, *își* pe lângă un substantiv este **atribut pronominal în dativ posesiv**, nu complement indirect:
- *Eu **îmi** spăl cămașa.* (reflexiv, atribut pronominal al lui *cămașa*)

#### `LES-S18-CI-02` — Completiva indirectă

- **tip:** lecție
- **parent:** `SES-S18-CI`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția completivă indirectă (CI) este subordonata care îndeplinește la nivel de frază rolul de **complement indirect în cazul Dativ** al unui termen din propoziția regentă. Răspunde la întrebarea: *cui?*.

---

### A. TERMENI REGENTI

1. **Verb sau locuțiune verbală (tranzitivă sau intranzitivă) care cere Dativul:**
   - *I-am oferit ajutorul / cui a solicitat./*
   - *Am dat o mână de ajutor / cui s-a aflat la ananghie./*
2. **Adjectiv cu regim de Dativ:**
   - *Este recunoscător / cui l-a sprijinit la nevoie./*
   - *Succesul a fost folositor / cui a știut să muncească./*
3. **Adverb sau interjecție cu regim de Dativ:**
   - *Bravo / cui a rezolvat problema fără greșeală!/*
   - *Cinste / cui își face datoria cu onoare!/*

---

### B. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Pronume relative la cazul Dativ:** *cui, căruia, căreia, cărora, celor ce*;
  - *I-am povestit întâmplarea / cui a vrut să asculte./*
  - *Am trimis scrisori / cărora s-au înscris la curs./*
- **Pronume nehotărâte la cazul Dativ:** *oricui, fiecăruia*;
  - *Îi acord atenție / oricui îmi solicită sprijinul./*
- **Adjective pronominale relative/nehotărâte în Dativ:**
  - *I-am dat cartea / cărui elev a cerut-o./*

---

### C. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Complement Indirect în Dativ → Propoziție Completivă Indirectă):**
  - *I-am oferit flori mamei. (CI)* → *I-am oferit flori / cui mi-a dat viață./ (CI)*
  - *Îi acordăm respect învingătorului. (CI)* → *Îi acordăm respect / cui a câștigat competiția./ (CI)*
  - *Răspunde numai colegului. (CI)* → *Răspunde numai / cui îl întreabă./ (CI)*
- **Contragere (Propoziție Completivă Indirectă → Complement Indirect):**
  - *Cine muncește / i se cuvine răsplata./ (CI)* → *Muncitorului i se cuvine răsplata. (CI)*
  - *Am urat succes / cui pleca la drum./ (CI)* → *Am urat succes călătorului. (CI)*

---

### D. DUBLA EXPRIMARE (ANTICIPARE ȘI RELUARE)

La fel ca la complementul indirect în Dativ din propoziție, completiva indirectă este frecvent dublată în regentă prin forme clitice (neaccentuate) de pronume personal în Dativ:
- **Reluare (când CI este antepusă regentei):**
  - *Cui a învățat bine,/ **îi** acordăm o bursă.* (cliticul *îi* reia subordonata CI).
- **Anticipare (când CI este postpusă regentei):**
  - ***I**-am explicat totul / cui a dorit să înțeleagă./* (cliticul *i-* anticipează subordonata CI).

---

### E. TOPICĂ ȘI PUNCTUAȚIE

- **Postpusă regentei:** De regulă, nu se desparte prin virgulă dacă este neizolată (*Dăruiește cartea cui dorește să citească*). Dacă este anticipată insistent sau adăugată ca o lămurire suplimentară, poate fi izolată prin virgulă.
- **Antepusă regentei:** Se desparte **obligatoriu prin virgulă** dacă este reluată în regentă prin pronume clitic (*Cui mă roagă,/ îi răspund cu plăcere.*).

---

### F. CONFUSII FRECVENTE ȘI CAPCANE DE ANALIZĂ

1. **Completiva indirectă (Dativ) vs. Completiva prepozițională (Acuzativ):**
   - *I-am mulțumit / cui m-a salvat./* (CI: răspunde la *cui?*, cere cazul Dativ).
   - *M-am gândit / la cine m-a ajutat./* (CP: răspunde la *la cine?*, cere prepoziția *la* + Acuzativ).
2. **Completiva indirectă vs. Propoziția subiectivă:**
   - *Cui învață / **îi** place cartea./* → *îi place* este un verb personal cu subiectul *cartea*; subordonata 1 răspunde la *cui?* și este **completivă indirectă**.
   - *Cine învață / are de toate./* → subordonata 1 răspunde la *cine are?* și este **propoziție subiectivă**.



- **tip:** lecție
- **parent:** `SES-S18-CI`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția completivă indirectă (CI) este subordonata care îndeplinește la nivel de frază rolul de **complement indirect în Dativ** al verbului din regentă. Răspunde la întrebarea *cui?*.

---

### A. TERMENI REGENTI

1. **Verb care cere Dativul:** *I-am oferit sprijin / cui a solicitat./*
2. **Adjectiv care cere Dativul:** *El este recunoscător / cui l-a ajutat./*
3. **Adverb sau interjecție:** *Bravo / cui a răspuns corect!*

---

### B. ELEMENTE DE RELAȚIE

- Pronume relative la cazul Dativ: *cui, căruia, căreia, cărora, celor ce*;
- Pronume nehotărâte: *oricui*.

---

### C. DUBLA EXPRIMARE

La fel ca la complementul indirect în Dativ, completiva indirectă este frecvent anticipată sau reluată în regentă printr-o formă clitică de Dativ:
- *Cui muncește,/ **îi** dăm răsplată.* (reluare prin *îi*).
- ***I**-am trimis cartea / cui m-a rugat./* (anticipare prin *i-*).

### `SES-S19` — S19 — Complementul prepozițional

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S19-01]], [[LES-S19-02]]

#### `LES-S19-01` — Complementul prepozițional

- **tip:** lecție
- **parent:** `SES-S19`
- **status:** `partial`
- **source:** [[MOR-009]]

### Conținut extras și normalizat

- **Definiție:** Complementul prepozițional (CP) este complementul indirect exprimat **obligatoriu cu o prepoziție sau locuțiune prepozițională** specifică verbului regent. Prepoziția este impusă de verb și nu poate fi schimbată.

---

### A. DIFERENȚA FAȚĂ DE COMPLEMENTUL INDIRECT SIMPLU

- **Complementul indirect** la Dativ (fără prepoziție): *Îi ofer mamei flori.* (prepoziția nu este cerută de verb)
- **Complementul prepozițional**: prepoziția este cerută lexical de verb și nu poate lipsi:
  - *Mă gândesc **la** tine.* (nu: *Mă gândesc tine*)
  - *Mă bazez **pe** el.*
  - *Se ocupă **de** copii.*

---

### B. VERBE CU COMPLEMENT PREPOZIȚIONAL SPECIFIC

- *a se gândi la*, *a se bucura de*, *a depinde de*, *a se ocupa de*, *a ține la*, *a aspira la*
- *a se interesa de*, *a vorbi despre*, *a conta pe*, *a miza pe*
- *a fi mândru de*, *a fi indiferent față de*, *a fi supărat pe*

---

### C. MIJLOACE DE EXPRIMARE

1. **Substantiv:** *Se gândește la examen.*
2. **Pronume:** *Se gândește la tine.*
3. **Verb la infinitiv:** *S-a hotărât să plece.* / *Se bucură de a câștiga.*
4. **Propoziție completivă prepozițională:** *Se gândește / la ce i-ai spus./*

---

### D. ATENȚIE

Complementul prepozițional NU trebuie confundat cu **circumstanțialul de loc** (*Merg la școală* — unde?) sau cu **circumstanțialul de mod** (*Se comportă cu demnitate* — cum?). Criteriul este că prepoziția complementului prepozițional este **cerută lexical** de verb, nu facultativă.

#### `LES-S19-02` — Completiva prepozițională

- **tip:** lecție
- **parent:** `SES-S19`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția completivă prepozițională (CP) îndeplinește la nivel de frază rolul unui **complement prepozițional**, constituind obiectul obligatoriu cerut cu prepoziție de un verb, adjectiv sau adverb din regentă. Răspunde la întrebări prepoziționale: *la ce?*, *la cine?*, *despre ce?*, *despre cine?*, *pentru ce?*, *de cine/ce?*, *cu cine/ce?*.

---

### A. TERMENI REGENTI ȘI VERBE CU REGIM PREPOZIȚIONAL

1. **Verbe și locuțiuni verbale cu prepoziție obligatorie:**
   - *a se gândi la, a spera la, a visa la*;
   - *a se baza pe, a conta pe, a se sprijini pe*;
   - *a se bucura de, a se teme de, a se mira de, a se sătura de, a se feri de*;
   - *a discuta despre, a vorbi despre, a se îngriji de*;
   - *a avea grijă de, a-și bate joc de, a da dovadă de*.
2. **Adjective cu regim prepozițional:**
   - *apt pentru, dornic de, capabil de, mândru de, sigur de, mulțumit de*:
   - *Este capabil / să rezolve problema fără ajutor./*
3. **Adverbe sau interjecții:**
   - *Departe de a crede așa ceva, a ascultat în tăcere.*

---

### B. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Conjuncții subordonatoare:** *că, să, ca să, dacă, de*;
  - *Mă gândesc / să plec în excursie./*
  - *Mă mir / că a sosit atât de repede./*
  - *Mă întreb / dacă va reuși la examen./*
- **Pronume și adjective pronominale relative precedate de prepoziție:** *la ce, despre cine, cu cine, pe ce, de ceea ce*;
  - *Mă bazez / pe ce mi-ai promis ieri./*
  - *Vorbim / despre cine a câștigat concursul./*
- **Adverbe relative:** *la cum vorbește, de unde a apărut*.

---

### C. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Complement prepozițional → Propoziție Completivă prepozițională):**
  - *Se gândește la vacanță. (CP)* → *Se gândește / să meargă în vacanță./ (CP)*
  - *Se teme de eșec. (CP)* → *Se teme / că va eșua./ (CP)*
  - *Mă bucur de reușita ta. (CP)* → *Mă bucur / că ai reușit./ (CP)*
- **Contragere (Propoziție Completivă prepozițională → Complement prepozițional):**
  - *Mă bazez / pe ce mi-ai promis./ (CP)* → *Mă bazez pe promisiunea ta. (CP)*
  - *S-a săturat / să tot aștepte./ (CP)* → *S-a săturat de așteptare. (CP)*

---

### D. TOPICĂ ȘI PUNCTUAȚIE

- **Postpusă regentei (poziție firească):** Nu se desparte prin virgulă când determină direct regenta (*Se gândește să plece*).
- **Antepusă regentei:** Se desparte prin virgulă când este plasată la începutul frazei pentru subliniere (*La ce mi-ai spus,/ mă gândesc neîncetat.*).

---

### E. CONFUSII FRECVENTE ȘI DIFERENȚIERE SINTACTICĂ

1. **CP vs. Completivă Indirectă (CI):**
   - Completiva indirectă cere cazul **Dativ fără prepoziție** (*cui?*): *I-am mulțumit / cui m-a sprijinit./*
   - Completiva prepozițională cere **prepoziție + Acuzativ** (*la ce? de ce?*): *Mă gândesc / la cine m-a sprijinit./*
2. **CP vs. Circumstanțiale de loc sau mod cu prepoziții similare:**
   - *Mă gândesc / la ce s-a întâmplat./* (CP: *la* e cerut de verbul *a se gândi*, nu e locație fizică).
   - *Am alergat / până la cealaltă clădire./* (CL: indică o limită în spațiul fizic).



- **tip:** lecție
- **parent:** `SES-S19`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția completivă prepozițională (CP) este subordonata care îndeplinește la nivel de frază funcția de **complement prepozițional** cerut lexical de verbul din regentă. Răspunde la întrebări prepoziționale: *la ce?*, *de ce?*, *despre ce?*, *cu cine?*, *pentru ce?*.

---

### A. TERMENI REGENTI

Verbe sau locuțiuni verbale care cer în mod obligatoriu o prepoziție:
- *a se gândi la*, *a se bucura de*, *a se teme de*, *a se mira de*, *a discuta despre*, *a se baza pe*.
- *Exemple:*
  - *Mă gândesc / să plec în excursie./*
  - *Se bucură / că a luat examenul./*
  - *Se teme / să nu greșească./*
  - *Mă bazez / pe ce mi-ai promis./*

---

### B. ELEMENTE DE RELAȚIE

- Conjuncții: *că, să, ca... să, dacă*;
- Pronume relative precedate de prepoziție: *la ce, de cine, despre care, pe cine*;
- Adverbe relative: *la cum a procedat*.

---

### C. DIFERENȚIERE SINTACTICĂ

Nu se confundă cu circumstanțialele de loc sau mod. Prepoziția din regentă este strâns legată de verbul regent (*a se gândi la* = trăsătură a verbului, nu o locație fizică).

### `SES-S20-MOD` — S20 — Circumstanțialul de mod

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S20-MOD-01]], [[LES-S20-MOD-02]]

#### `LES-S20-MOD-01` — Circumstanțialul de mod

- **tip:** lecție
- **parent:** `SES-S20-MOD`
- **status:** `partial`
- **source:** [[MOR-007]]

### Conținut extras și normalizat

- **Definiție:** Circumstanțialul de mod (CM) este partea secundară de propoziție care arată **modul în care se desfășoară** acțiunea sau gradul/intensitatea unei însușiri. Răspunde la întrebările *cum?*, *în ce fel?*, *cât?*, *în ce măsură?*

---

### A. MIJLOACE DE EXPRIMARE

1. **Adverb de mod:** *Scrie frumos.* / *Merge agale.*
2. **Locuțiune adverbială de mod:** *Lucrează pe furiș.* / *Cântă de minune.*
3. **Substantiv la Acuzativ:** *Doarme buștean.* / *Tace chitic.*
4. **Adjectiv provenit din adverb (invariabil):** *Vorbește prostește.*
5. **Verb la gerunziu:** *Vine șchiopătând.*
6. **Verb la participiu:** *Vorbește deschis.*
7. **Verb la supin:** *E mai ușor de spus decât de făcut.*
8. **Substantiv la Ac. cu prepoziție:** *Se comportă cu demnitate.* / *Lucrează cu sârguință.*
9. **Comparativ de superioritate/inferioritate:** *Scrie mai bine decât tine.*

---

### B. CIRCUMSTANȚIALUL DE MOD COMPARATIV

În structuri de tip comparativ, complementul față de care se face comparația este tot CM:
- *El este mai înalt decât fratele său.* (*decât fratele său* = CM comparativ)
- *Aleargă la fel de repede ca tine.* (*ca tine* = CM comparativ)

---

### C. ATENȚIE — CONFUZII FRECVENTE

- Verbele la participiu pe lângă un verb sunt **CM**: *Vorbește răgușit.*
- Verbele la participiu pe lângă un substantiv sunt **atribute adjectivale**: *Voce răgușită.*
- Adverbele *bine*, *rău*, *repede* etc. pe lângă un verb = CM; pe lângă un substantiv = **atribute adverbiale**: *Omul bine îmbrăcat a plecat.*

#### `LES-S20-MOD-02` — Circumstanțiala de mod

- **tip:** lecție
- **parent:** `SES-S20-MOD`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de mod (CM) îndeplinește la nivel de frază rolul unui **circumstanțial de mod**, arătând modul în care se desfășoară acțiunea din regentă, măsura/gradul acesteia sau calitatea unei stări. Răspunde la întrebările: *cum?*, *în ce fel?*, *în ce mod?*, *cât?*, *în ce măsură?*.

---

### A. TIPURI DE CIRCUMSTANȚIALE DE MOD

1. **Modale propriu-zise:** Arată modul direct de executare a acțiunii:
   - *A vorbit / cum îi era obiceiul./*
   - *A rezolvat ecuația / așa cum i s-a explicat./*
2. **Modale comparative:**
   - **Comparative de egalitate:** *A procedat / cum ar fi procedat un profesionist./* (corelativ: *așa... cum*)
   - **Comparative de inegalitate (superioritate/inferioritate):** *A alergat mai repede / decât se aștepta antrenorul./* (corelativ: *mai mult... decât*, *mai puțin... decât*)
3. **Modale comparative condiționale:** Exprimă o comparație ipotetică sau nereală:
   - *Se comporta / ca și cum nu s-ar fi întâmplat nimic./*
   - *Pășea prudent / ca și când ar fi mers pe gheață subțire./*

---

### B. TERMENI REGENTI

1. **Verb sau locuțiune verbală:** *A procedat / cum a știut mai bine./*
2. **Adjectiv:** *Este frumos / cum rar se poate vedea./*
3. **Adverb:** *Cântă la fel de bine / cum cânta tatăl său./*
4. **Interjecție predicativă:** *Hai / cum poți mai repede!/*

---

### C. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Adverbe relative de mod:** *cum, precum, cât, precum și, cum și*;
- **Locuțiuni conjuncționale:** *după cum, după cât, pe cât, ca și cum, ca și când, de parcă, fără să, fără ca să*;
  - *A plecat din sală / fără să scoată vreun cuvânt./*
  - *M-a privit / de parcă mă vedea pentru prima oară./*
- **Pronume / adjective pronominale relative precedate de prepoziție cu sens modal:** *după cum, prin ce*.

---

### D. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Circumstanțial de mod → Propoziție Circumstanțială de mod):**
  - *A acționat conform legii. (CM)* → *A acționat / cum prevede legea./ (CM)*
  - *A răspuns fără ezitare. (CM)* → *A răspuns / fără să ezite./ (CM)*
  - *Merge legănându-se. (CM gerunzial)* → *Merge / cum se leagănă bărcile pe valuri./ (CM)*
- **Contragere (Propoziție Circumstanțială de mod → Circumstanțial de mod):**
  - *A pictat tabloul / cum l-a învățat maestrul./ (CM)* → *A pictat tabloul conform învățăturii maestrului. (CM)*
  - *A trecut strada / fără să se uite în jur./ (CM)* → *A trecut strada fără atenție. (CM)*

---

### E. TOPICĂ ȘI PUNCTUAȚIE

- **Postpusă regentei (poziție normală):** Nu se desparte prin virgulă când este o modală propriu-zisă neizolată (*A procedat cum a știut*).
- **Antepusă regentei:** Se desparte prin virgulă când stă înaintea regentei și este subliniată (*Cum a promis,/ așa a făcut.*).
- **Modalele comparative și condiționale:** Se despart de regulă prin virgulă când introduc o nuanță explicativă sau nereală (*Se uita la cer,/ ca și cum ar fi așteptat o minune.*).

---

### F. CONFUSII FRECVENTE ȘI CAPCANE

1. **CM introdusă prin *cum* vs. Alte subordonate:**
   - *A procedat / cum a putut./* → **Circumstanțială de mod** (*cum?*).
   - *Cum nu a învățat,/ a luat notă mică./* → **Circumstanțială de cauză** (*cum* antepus = *fiindcă*).
   - *Văd / cum coboară trenul./* → **Completivă directă** (*ce văd?*).
   - *Ziua / cum a fost ieri / nu se mai repetă./* → **Atributivă** (*care zi?*).
2. **Construcția cu *fără să*:** Este întotdeauna o modală negativă: *A ieșit / fără să ceară voie./* (CM).



- **tip:** lecție
- **parent:** `SES-S20-MOD`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de mod (CM) arată modul în care se desfășoară acțiunea din regentă sau gradul/intensitatea unei însușiri. Răspunde la întrebările *cum?*, *în ce fel?*, *cât?*.

---

### A. TIPURI DE CIRCUMSTANȚIALE DE MOD

1. **Modale propriu-zise:** *A procedat / cum l-a învățat tatăl său./*
2. **Modale comparative:**
   - De egalitate: *A alergat / cum aleargă un atlet./*
   - De superioritate/inferioritate: *A vorbit mai mult / decât trebuia./*
   - Condiționale: *Se uită la mine / ca și cum nu m-ar cunoaște./*

---

### B. ELEMENTE DE RELAȚIE

- Adverbe relative: *cum, precum, cât, precum și*;
- Locuțiuni conjuncționale: *după cum, pe cât, ca și cum, ca și când, fără să*.
  - *A plecat / fără să spună nimic./*

### `SES-S20-TMP` — S20 — Circumstanțialul de timp

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S20-TMP-01]], [[LES-S20-TMP-02]]

#### `LES-S20-TMP-01` — Circumstanțialul de timp

- **tip:** lecție
- **parent:** `SES-S20-TMP`
- **status:** `partial`
- **source:** [[MOR-007]]

### Conținut extras și normalizat

- **Definiție:** Circumstanțialul de timp (CT) este partea secundară de propoziție care arată **când**, **de când**, **până când** sau **cât timp** se desfășoară acțiunea. Răspunde la întrebările *când?*, *de când?*, *până când?*, *cât timp?*

---

### A. MIJLOACE DE EXPRIMARE

1. **Adverb de timp:** *Ieri am plecat.* / *Mâine merg la școală.*
2. **Locuțiune adverbială de timp:** *Din când în când mă vizitează.*
3. **Substantiv la Acuzativ cu prepoziție:** *Merg la școală dimineața.* / *Plecăm în vacanță.*
4. **Substantiv la Genitiv cu locuțiune prepozițională:** *Am sosit înaintea mamei.*
5. **Numeral:** *Merg la școală odată cu Maria.*
6. **Verb la infinitiv:** *S-a trezit înainte de a răsări soarele.*
7. **Verb la gerunziu:** *Ajungând acasă, am sunat-o.*
8. **Propoziție circumstanțială de timp:** *Când a sosit,/ toți s-au bucurat./*

---

### B. SUBSTANTIVELE-ADVERBE DE TIMP

Numele de anotimpuri, zilele săptămânii și părțile zilei sunt:
- **Substantive** dacă: sunt subiecte (*Toamna e bogată*), au atribut (*Vara trecută a fost caldă*), sau sunt precedate de prepoziție (*La toamnă*).
- **Adverbe de timp** (CT) dacă determină un verb fără prepoziție și fără atribut: *Toamna se numără bobocii.*

---

### C. LOCUȚIUNI ADVERBIALE DE TIMP

- *din când în când*, *zi de zi*, *an de an*, *de cu seară*, *pe urmă*, *la început*, *în veci*, *din vreme în vreme*

#### `LES-S20-TMP-02` — Circumstanțiala de timp

- **tip:** lecție
- **parent:** `SES-S20-TMP`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de timp (CT) îndeplinește la nivel de frază rolul unui **circumstanțial de timp**, arătând momentul, durata, frecvența sau raportul temporal în care se realizează acțiunea sau starea din regentă. Răspunde la întrebările: *când?*, *de când?*, *până când?*, *cât timp?*, *de câte ori?*.

---

### A. RAPORTURI TEMPORALE FAȚĂ DE REGENTĂ

1. **Simultaneitate:** Acțiunea din subordonată se petrece în același timp cu acțiunea din regentă:
   - *Când a sosit profesorul,/ elevii s-au ridicat în picioare./*
   - *În timp ce citeam,/ ascultam muzică în surdină./*
   - *Pe măsură ce urcam muntele,/ aerul devenea mai rece./*
2. **Anterioritate:** Acțiunea din subordonată are loc înaintea acțiunii din regentă:
   - *După ce a terminat proiectul,/ a plecat în vacanță./*
   - *Îndată ce a aflat vestea,/ m-a sunat bucuros./*
   - *Cum a terminat ora,/ a ieșit în pauză./* (*cum* = *de îndată ce*)
3. **Posterioritate:** Acțiunea din subordonată are loc după acțiunea din regentă:
   - *A plecat din gară / înainte ca trenul să sosească./*
   - *Am așteptat / până când s-a înserat de-a binelea./*

---

### B. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Adverbe relative de timp:** *când, cât* (*Cât a trăit, a iubit arta*);
- **Adverbe nehotărâte compuse:** *oricând, oricât*;
- **Conjuncții și locuțiuni conjuncționale temporale:**
  - *după ce, până ce, până să, înainte să, înainte ca... să, în timp ce, în vreme ce, pe măsură ce, odată ce, îndată ce, de îndată ce, de cum, abia... când, ori de câte ori*.
- **Corelative în regentă:** *atunci, acum, totdeauna, niciodată*:
  - *Când a sunat clopoțelul,/ **atunci** am predat lucrarea.*

---

### C. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Circumstanțial de timp → Propoziție Circumstanțială de timp):**
  - *La sosirea trenului am coborât. (CT)* → *Când a sosit trenul,/ am coborât./ (CT)*
  - *În timpul vacanței a călătorit mult. (CT)* → *În timp ce se afla în vacanță,/ a călătorit mult./ (CT)*
  - *Înainte de răsăritul soarelui am plecat. (CT)* → *Înainte să răsară soarele,/ am plecat./ (CT)*
- **Contragere (Propoziție Circumstanțială de timp → Circumstanțial de timp):**
  - *După ce a terminat cursurile,/ a mers la bibliotecă./ (CT)* → *După terminarea cursurilor, a mers la bibliotecă. (CT)*
  - *Până să apună soarele,/ am ajuns la cabană./ (CT)* → *Până la apusul soarelui, am ajuns la cabană. (CT)*

---

### D. TOPICĂ ȘI PUNCTUAȚIE

- **Antepusă regentei:** Se desparte **obligatoriu prin virgulă** de regentă (*Când s-a luminat de ziuă,/ am pornit la drum.*).
- **Postpusă regentei:** Nu se desparte prin virgulă când este o determinare temporală strânsă (*Am ajuns acasă când s-a înserat.*). Dacă este izolată, adăugată explicativ sau introdusă prin *înainte să / după ce*, se poate despărți prin virgulă.
- **Intercalată în regentă:** Se izolează între virgule: *Profesorul,/ când a intrat în clasă,/ a salutat călduros.*

---

### E. CONFUSII FRECVENTE ȘI CAPCANE

1. **CT introdusă prin *când* vs. Atributivă (AT):**
   - *Am sosit / când s-a dat startul./* → **CT** (termenul regent este un verb: *am sosit când?*).
   - *Îmi amintesc ziua / când ne-am cunoscut./* → **AT** (termenul regent este substantivul *ziua*: *care zi?*).
2. **CT vs. Completivă directă (CD):**
   - *Știu / când vei veni./* → **CD** (termenul regent este verbul tranzitiv *știu*: *ce știu?*).



- **tip:** lecție
- **parent:** `SES-S20-TMP`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de timp (CT) indică momentul, durata sau frecvența acțiunii din regentă în raport cu desfășurarea altei acțiuni. Răspunde la întrebările *când?*, *de când?*, *până când?*, *cât timp?*.

---

### A. RAPORTURI TEMPORALE

1. **Simultaneitate:** Acțiunile se desfășoară în același timp:
   - *În timp ce citea,/ asculta muzică./*
   - *Când a sosit profesorul,/ elevii s-au ridicat./*
2. **Anterioritate:** Acțiunea din subordonată are loc înainte de acțiunea din regentă:
   - *După ce a terminat tema,/ a ieșit în curte./*
3. **Posterioritate:** Acțiunea din subordonată are loc după cea din regentă:
   - *A plecat / înainte de a se lumina de ziuă./*
   - *Așteaptă / până când va sosi trenul./*

---

### B. ELEMENTE DE RELAȚIE

- Adverbe relative de timp: *când, cât*;
- Conjuncții și locuțiuni conjuncționale: *după ce, până ce, în timp ce, îndată ce, de îndată ce, pe măsură ce, ori de câte ori*.

### `SES-S20-LOC` — S20 — Circumstanțialul de loc

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S20-LOC-01]], [[LES-S20-LOC-02]]

#### `LES-S20-LOC-01` — Circumstanțialul de loc

- **tip:** lecție
- **parent:** `SES-S20-LOC`
- **status:** `partial`
- **source:** [[MOR-007]]

### Conținut extras și normalizat

- **Definiție:** Circumstanțialul de loc (CL) este partea secundară de propoziție care arată **locul** unde se desfășoară acțiunea sau unde se găsește obiectul. Răspunde la întrebările *unde?*, *de unde?*, *până unde?*, *încotro?*

---

### A. MIJLOACE DE EXPRIMARE

1. **Adverb de loc:** *Stă sus.* / *Vine de departe.*
2. **Locuțiune adverbială de loc:** *Se joacă de jur împrejur.* / *A plecat de acasă.*
3. **Substantiv la Acuzativ cu prepoziție:** *Merg la școală.* / *Vine din pădure.*
4. **Substantiv la Genitiv cu locuțiune prepozițională:** *Mașina s-a oprit în fața casei.*
5. **Pronume la Acuzativ cu prepoziție:** *Mă duc la el.*
6. **Verb la supin:** *Andrei se întoarce de la pescuit.*
7. **Propoziție circumstanțială de loc:** *Mă duc / unde mi-ai spus./*

---

### B. ATENȚIE — ACUZATIVUL DE SCOP VS. LOC

Cu verbe de mișcare, distincția se face prin întrebare:
- *Ei au plecat la scăldat.* — **Scop** (cu ce scop au plecat? la scăldat)
- *Ei vin de la scăldat.* — **Loc** (de unde vin? de la scăldat)

---

### C. DATIVUL LOCATIV (ARHAIC/POPULAR)

Anumite construcții populare/arhaice folosesc Dativul pentru loc:
- *Stai locului!* / *Ține-te drumului!* / *Du-te naibii!*

#### `LES-S20-LOC-02` — Circumstanțiala de loc

- **tip:** lecție
- **parent:** `SES-S20-LOC`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de loc (CL) îndeplinește la nivel de frază rolul unui **circumstanțial de loc**, arătând spațiul, orientarea, direcția, punctul de plecare sau limita acțiunii din propoziția regentă. Răspunde la întrebările: *unde?*, *de unde?*, *până unde?*, *încotro?*.

---

### A. NUANȚE SEMANTICE ȘI ORIENTARE SPAȚIALĂ

1. **Locul propriu-zis (locație statică):** *Mă opresc / unde este umbră deasă./*
2. **Punctul de plecare (originea mișcării):** *S-a întors / de unde a plecat dimineață./*
3. **Direcția / orientarea (punctul de sosire):** *A pornit / încotro i-au indicat semnele de marcaj./*
4. **Limita mișcării în spațiu:** *Voi merge pe potecă / până unde se termină pădurea./*

---

### B. TERMENI REGENTI

1. **Verb sau locuțiune verbală de mișcare sau stare:** *A mers / unde l-au purtat pașii./*
2. **Adjectiv:** *Satul este așezat / unde se întâlnesc două râuri./*
3. **Adverb de loc:** *Apar urme de pași pretutindeni / pe unde au trecut drumeții./*
4. **Interjecție predicativă:** *Hai / unde ne cheamă prietenii!/*

---

### C. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Adverbe relative de loc (cu sau fără prepoziții):** *unde, de unde, până unde, încotro, pe unde, dinspre unde*;
- **Adverbe nehotărâte compuse:** *oriunde, orincotro, orișiunde*;
  - *Mă simt bine / oriunde mă aflu./*
- **Pronume / adjective pronominale relative precedate de prepoziții spațiale:** *spre cine, la care, lângă cine*;
  - *Mă îndrept / spre cine mi-a făcut semn./*
- **Corelative în regentă:** *acolo, de acolo, într-acolo, până acolo, pretutindeni*:
  - *Unde este voință și pasiune,/ **acolo** se obține performanța.*

---

### D. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Circumstanțial de loc → Propoziție Circumstanțială de loc):**
  - *M-am oprit la răscruce. (CL)* → *M-am oprit / unde se bifurcă drumul./ (CL)*
  - *Mă întorc acasă. (CL)* → *Mă întorc / de unde am plecat ieri./ (CL)*
  - *Aleargă spre pădure. (CL)* → *Aleargă / încotro se văd copacii înalți./ (CL)*
- **Contragere (Propoziție Circumstanțială de loc → Circumstanțial de loc):**
  - *Ne-am campat / unde era iarba mai verde./ (CL)* → *Ne-am campat într-o poiană verde. (CL)*
  - *Au mers / până unde se deschidea valea./ (CL)* → *Au mers până la marginea văii. (CL)*

---

### E. TOPICĂ ȘI PUNCTUAȚIE

- **Postpusă regentei:** De regulă nu se desparte prin virgulă când determină nemijlocit verbul regent (*Am mers unde mi-a spus*). Se desparte dacă are rol explicativ sau este izolată.
- **Antepusă regentei:** Se desparte **obligatoriu prin virgulă**, mai ales dacă este reluată în regentă prin adverb corelativ (*Unde nu e cap,/ vai de picioare.*).

---

### F. CONFUSII FRECVENTE ȘI CAPCANE

1. **CL introdusă prin *unde* vs. Atributivă (AT):**
   - *Am ajuns / unde ne-am propus./* → **CL** (determină verbul *am ajuns*: *unde am ajuns?*).
   - *Am vizitat muzeul / unde s-a semnat tratatul./* → **AT** (determină substantivul *muzeul*: *care muzeu?*).
2. **CL vs. Propoziție Subiectivă (SB):**
   - *Unde a fost pădure / se înalță acum un cartier./* → Subordonata 1 este **subiectivă** pe lângă expresia impersonală sau verbul reflexiv pasiv (răspunde la *ce se înalță?*).



- **tip:** lecție
- **parent:** `SES-S20-LOC`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de loc (CL) arată locul, punctul de plecare, direcția sau limita în spațiu a acțiunii din propoziția regentă. Răspunde la întrebările *unde?*, *de unde?*, *până unde?*, *încotro?*.

---

### A. ELEMENTE DE RELAȚIE

- Adverbe relative de loc: *unde, de unde, până unde, încotro*;
- Adverbe nehotărâte: *oriunde, orincotro*;
- Pronume relative cu prepoziții de loc: *spre cine, la care*.
- *Exemple:*
  - *Mă duc / unde mi-ai arătat./*
  - *S-a întors / de unde a plecat./*
  - *Merge / oriîncotro vede cu ochii./*

---

### B. CORELATIVE ÎN REGENTĂ

Adesea în propoziția regentă există un adverb corelativ: *acolo, de acolo, într-acolo*:
- *Unde este voință,/ **acolo** este și reușită.*

### `SES-S21-CAU` — S21 — Circumstanțialul de cauză

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S21-CAU-01]], [[LES-S21-CAU-02]]

#### `LES-S21-CAU-01` — Circumstanțialul de cauză

- **tip:** lecție
- **parent:** `SES-S21-CAU`
- **status:** `partial`
- **source:** [[MOR-007]]

### Conținut extras și normalizat

- **Definiție:** Circumstanțialul de cauză (CC) este partea secundară de propoziție care arată **cauza** sau **motivul** pentru care se desfășoară acțiunea. Răspunde la întrebările *din ce cauză?*, *de ce?*, *pentru ce?*

---

### A. MIJLOACE DE EXPRIMARE

1. **Substantiv la Genitiv cu locuțiune prepozițională:**
   - *Din cauza poleiului am alunecat.*
   - *Din pricina ploii nu am ieșit.*
2. **Substantiv la Acuzativ cu prepoziție:**
   - *N-am intrat în clasă de rușine.*
   - *Plânge de bucurie.*
3. **Substantiv la Dativ cu prepoziție:**
   - *Datorită ție am reușit.*
   - *Mulțumită efortului său a câștigat.*
4. **Pronume la Genitiv:**
   - *Din cauza lui am întârziat.*
5. **Verb la infinitiv:**
   - *A fost certat pentru a nu fi ascultat.*
6. **Verb la gerunziu:**
   - *Nerepetând zilnic, ia note mici.*
7. **Propoziție circumstanțială de cauză:** *Deoarece a întârziat,/ nu a mai intrat./*

---

### B. LOCUȚIUNI ADVERBIALE DE CAUZĂ

- *de aceea*, *de asta*, *din această cauză*, *pentru aceea*

---

### C. ATENȚIE

Adjectivul în construcții de tip *De bună ce era, toți o iubeau* — adjectivul **de bună** este circumstanțial de cauză (din ce cauză o iubeau toți? — pentru că era bună).

#### `LES-S21-CAU-02` — Circumstanțiala de cauză

- **tip:** lecție
- **parent:** `SES-S21-CAU`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de cauză (CZ) îndeplinește la nivel de frază rolul unui **circumstanțial de cauză**, arătând cauza, originea sau motivul direct care determină producerea acțiunii, stării sau însușirii din propoziția regentă. Răspunde la întrebările: *din ce cauză?*, *din ce motiv?*, *de ce?*, *pentru ce?*.

---

### A. TRĂSĂTURI SPECIFICE ȘI RAPORTUL CAUZĂ-EFECT

- **Ordinea logică a fenomenelor:** În realitate, **cauza precede efectul**. Acțiunea din subordonata cauzală se petrece anterior sau concomitent cu cea din regentă, funcționând ca declanșator:
  - *A tremurat (efect în regentă) / fiindcă s-a speriat de zgomot (cauză anterioară în subordonată)./*

---

### B. TERMENI REGENTI

1. **Verb sau locuțiune verbală:** *A întârziat / din cauză că a ratat autobuzul./*
2. **Adjectiv:** *Era fericit / că luase nota maximă la examen./*
3. **Interjecție predicativă:** *Păcat / că nu ai putut veni cu noi!/*

---

### C. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Conjuncții cauzale specializate:** *deoarece, fiindcă, întrucât, căci*;
- **Locuțiuni conjuncționale cauzale:**
  - *din cauză că, din pricină că, pentru că, din moment ce, de vreme ce, odată ce, pe motiv că, de bine ce*;
- **Adverbe relative cu valoare cauzală:**
  - *cum* (întotdeauna antepus regentei: *Cum nu a învățat,/ nu a promovat testul./*);
  - *unde* (*Unde era obosit,/ a adormit pe loc./*);
- **Conjuncții nespecializate:** *că, de* (*M-am săturat / de cât am așteptat./*);
- **Corelative în regentă:** *de aceea, pentru aceea, din această cauză, de aia*.

---

### D. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Circumstanțial de cauză → Propoziție Circumstanțială de cauză):**
  - *A lipsit din cauza bolii. (CZ)* → *A lipsit / pentru că a fost bolnav./ (CZ)*
  - *Tremura de frig. (CZ)* → *Tremura / fiindcă era un ger cumplit./ (CZ)*
  - *Fii atent la greșeli! din neatenție a pierdut. (CZ)* → *A pierdut / din pricină că a fost neatent./ (CZ)*
- **Contragere (Propoziție Circumstanțială de cauză → Circumstanțial de cauză):**
  - *S-a oprit / fiindcă era epuizat./ (CZ)* → *S-a oprit din cauza epuizării. (CZ)*
  - *Pentru că ploua torențial,/ au anulat meciul./ (CZ)* → *Din cauza ploii torențiale au anulat meciul. (CZ)*

---

### E. TOPICĂ ȘI PUNCTUAȚIE (REGULĂ STRICTĂ)

- Propoziția circumstanțială de cauză introdusă prin conjuncțiile cauzale *deoarece, fiindcă, întrucât, căci, din cauză că* **se desparte obligatoriu prin virgulă** de propoziția regentă, indiferent de topica acesteia (antepusă sau postpusă):
  - *Nu a venit la antrenament,/ **fiindcă** a fost răcit.*
  - ***Deoarece** a nins abundent,/ drumul s-a blocat.*
- **Particularitatea conjuncției *căci*:** Nu poate sta niciodată la începutul frazei; propoziția introdusă prin *căci* este întotdeauna postpusă și precedată de virgulă (*Învață cu tragere de inimă,/ căci își dorește victoria.*).

---

### F. CONFUSII FRECVENTE ȘI CAPCANE

1. **Circumstanțiala de cauză (CZ) vs. Circumstanțiala de scop (CS):**
   - **Cauza (privire spre trecut):** arată de ce s-a produs acțiunea (*Aleargă / fiindcă a întârziat./* = întârzierea a avut loc deja).
   - **Scopul (privire spre viitor):** arată ce urmărește acțiunea (*Aleargă / ca să prindă autobuzul./* = prinderea autobuzului este o țintă viitoare).
2. ***Cum* cauzal vs. *Cum* modal:**
   - *Cum era frig,/ a pus haina.* (antepus = *fiindcă* → **CZ**).
   - *A procedat / cum a știut.* (postpus = modalitate → **CM**).



- **tip:** lecție
- **parent:** `SES-S21-CAU`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de cauză (CZ) exprimă cauza, motivul sau originea acțiunii sau stării din propoziția regentă. Răspunde la întrebările *din ce cauză?*, *de ce?*, *pentru ce?*.

---

### A. ELEMENTE DE RELAȚIE

- Conjuncții cauzale specializate: *deoarece, fiindcă, întrucât, căci*;
- Locuțiuni conjuncționale cauzale: *din cauză că, din pricină că, pentru că, de vreme ce, din moment ce, odată ce*;
- Adverbe relative cu valoare cauzală: *cum* (antepus regentei: *Cum nu învățase,/ a luat notă mică./*), *unde* (*Unde era obosit,/ a adormit imediat./*).

---

### B. TOPICĂ ȘI PUNCTUAȚIE

- Propoziția cauzală introdusă prin *deoarece, fiindcă, întrucât, din cauză că* **se desparte obligatoriu prin virgulă** de regentă, indiferent dacă stă înainte sau după aceasta:
  - *N-a venit,/ fiindcă a fost bolnav./*
  - *Pentru că ploua,/ a deschis umbrela./*

### `SES-S21-SCOP` — S21 — Circumstanțialul de scop

- **tip:** sesiune
- **parent:** `[[CUR-05]]`
- **lessons:** [[LES-S21-SCOP-01]], [[LES-S21-SCOP-02]]

#### `LES-S21-SCOP-01` — Circumstanțialul de scop

- **tip:** lecție
- **parent:** `SES-S21-SCOP`
- **status:** `partial`
- **source:** [[MOR-007]]

### Conținut extras și normalizat

- **Definiție:** Circumstanțialul de scop (CS) este partea secundară de propoziție care arată **scopul** sau **finalitatea** acțiunii. Răspunde la întrebările *cu ce scop?*, *în ce scop?*, *pentru ce?*

---

### A. MIJLOACE DE EXPRIMARE

1. **Substantiv la Acuzativ cu prepoziție:**
   - *Mama face economii pentru casă.*
   - *Muncesc pentru un viitor mai bun.*
2. **Substantiv la Genitiv cu locuțiune prepozițională:**
   - *Muncim în scopul promovării.*
   - *Recapitularea se face în favoarea noastră.*
3. **Verb la infinitiv:**
   - *Mergem la bibliotecă pentru a studia.*
   - *A venit să ne ajute.*
4. **Verb la supin:**
   - *Bunicii s-au dus la prășit.*
   - *Mergem la vânat.*
5. **Verb la gerunziu:** mai rar, în construcții eliptice.
6. **Propoziție circumstanțială de scop (finală):** *Am plecat / ca să reușesc./* / *Muncesc / pentru a câștiga./*

---

### B. ADVERBE DE SCOP

- *anume*, *expres*, *dinadins*, *înadins*, *intenționat*: *A venit anume să îți spună.*

---

### C. ATENȚIE — ACUZATIVUL DE SCOP VS. LOC

Cu verbe de mișcare + supin:
- *Au plecat la cumpărături.* — CL (unde au plecat?)
- *Au plecat **pentru** cumpărături.* — CS (cu ce scop au plecat?)
- *Au venit de la cumpărături.* — CL (de unde au venit?)

#### `LES-S21-SCOP-02` — Circumstanțiala de scop

- **tip:** lecție
- **parent:** `SES-S21-SCOP`
- **status:** `present`
- **source:** [[SIN-001]]

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de scop (CS / finală) îndeplinește la nivel de frază rolul unui **circumstanțial de scop**, arătând obiectivul, finalitatea sau ținta urmărită prin realizarea acțiunii din propoziția regentă. Răspunde la întrebările: *cu ce scop?*, *în ce scop?*, *pentru ce?*.

---

### A. TRĂSĂTURI SPECIFICE ȘI ORIENTAREA TEMPORALĂ

- Spre deosebire de cauză (care a avut loc deja în trecut), scopul este întotdeauna **orientat spre viitor**, reprezentând o intenție mentală sau un rezultat dorit:
  - *Muncim astăzi (prezent) / ca să ne bucurăm de roade mâine (viitor intenționat)./*

---

### B. TERMENI REGENTI

1. **Verb sau locuțiune verbală:** *A învățat zi și noapte / ca să ia nota zece./*
2. **Interjecție predicativă:** *Hai în casă / ca să nu ne prindă ploaia!/*

---

### C. ELEMENTE INTRODUCTIVE DE RELAȚIE

- **Conjuncții subordonatoare specifice:** *să, ca să, ca... să*;
- **Locuțiuni conjuncționale finale:** *pentru ca să, cu scopul să, în ideea să, cu intenția să*;
- **Adverbe relative:** *unde* (rar/popular: *A venit / unde să ne ajute./*);
- **Corelative în regentă:** *anume, de aceea, pentru aceea, într-adins*:
  - *A venit devreme **anume** / ca să prindă loc în față./*

---

### D. EXPANSIUNE ȘI CONTRAGERE

- **Expansiune (Circumstanțial de scop → Propoziție Circumstanțială de scop):**
  - *A plecat la pescuit. (CS)* → *A plecat / ca să pescuiască pe lac./ (CS)*
  - *Se antrenează pentru victorie. (CS)* → *Se antrenează / ca să obțină victoria./ (CS)*
  - *A sosit în vizită. (CS)* → *A sosit / ca să ne viziteze./ (CS)*
- **Contragere (Propoziție Circumstanțială de scop → Circumstanțial de scop):**
  - *A ieșit / să facă o plimbare./ (CS)* → *A ieșit la o plimbare. (CS)*
  - *Muncește / pentru ca să asigure traiul familiei./ (CS)* → *Muncește pentru asigurarea traiului familiei. (CS)*

---

### E. TOPICĂ ȘI PUNCTUAȚIE

- **Postpusă regentei și introdusă prin *să*:** De regulă **nu se desparte prin virgulă** dacă determină direct verbul regent (*A venit să mă vadă*).
- **Introdusă prin *ca să*, *pentru ca să*:** Se desparte frecvent prin virgulă, mai ales dacă este mai dezvoltată (*A plecat din timp,/ ca să nu întârzie la conferință.*).
- **Antepusă regentei:** Se desparte **obligatoriu prin virgulă** (*Ca să înveți bine,/ trebuie să fii consecvent.*).
- **Disjuncția *ca... să*:** Când subiectul sau alt termen este intercalat între *ca* și *să*, propoziția rămâne unitară: *A făcut totul / **ca** prietenii săi **să** fie în siguranță./*

---

### F. CONFUSII FRECVENTE ȘI CAPCANE DE ANALIZĂ

1. **CS vs. Propoziție completivă directă (CD) cu *să*:**
   - *Vreau / să citesc cartea./* → **CD** (*ce vreau?* verbul *a vrea* este tranzitiv).
   - *Am cumpărat cartea / să o citesc./* → **CS** (*cu ce scop am cumpărat-o?*).
2. **CS vs. Propoziție completivă prepozițională (CP) cu *să*:**
   - *Mă gândesc / să plec./* → **CP** (*la ce mă gândesc?*).
   - *Mă grăbesc / să ajung la timp./* → **CS** (*cu ce scop mă grăbesc?*).
3. **Tabel comparativ Cauză vs. Scop:**
   - *A tremurat de frică.* → *pentru că s-a speriat* (CZ = motivul inițial).
   - *A tremurat să se încălzească.* → *ca să se încălzească* (CS = ținta urmărită).



- **tip:** lecție
- **parent:** `SES-S21-SCOP`
- **status:** `present`
- **source:** —

### Conținut extras și normalizat

- **Definiție:** Propoziția circumstanțială de scop (CS / finală) exprimă scopul, obiectivul sau finalitatea urmărită prin realizarea acțiunii din propoziția regentă. Răspunde la întrebările *cu ce scop?*, *în ce scop?*, *pentru ce?*.

---

### A. ELEMENTE DE RELAȚIE

- Conjuncții subordonatoare specifice: *să, ca să, ca... să*;
- Locuțiuni conjuncționale finale: *pentru ca să, cu scopul să, în ideea să*.
- *Exemple:*
  - *Învață zilnic / ca să ia examenul./*
  - *A venit devreme / pentru ca să prindă loc în sală./*
  - *A făcut economii / ca să-și cumpere un computer./*

---

### B. TOPICĂ ȘI PUNCTUAȚIE

- Când este postpusă regentei și legată prin *să*, de regulă nu se desparte prin virgulă (*A venit să mă vadă*).
- Când este introdusă prin *ca să*, *pentru ca să* sau când este așezată înaintea regentei, **se desparte obligatoriu prin virgulă**:
  - *Ca să reușești,/ trebuie să muncești.*

## `CUR-06` — 6. ORTOGRAFIE ȘI PUNCTUAȚIE

- **tip:** unitate de programă
- **parent:** `GRA-ROOT`
- **children:** [[SES-S23]]

### `SES-S23` — S23 — Semne de ortografie. Scrierea cu literă mare

- **tip:** sesiune
- **parent:** `[[CUR-06]]`
- **lessons:** [[LES-S23-01]], [[LES-S23-02]], [[LES-S23-03]], [[LES-S23-04]]

#### `LES-S23-01` — Semne de ortografie

- **tip:** lecție
- **parent:** `SES-S23`
- **status:** `present`
- **source:** [[ORT-001]]

### Conținut extras și normalizat

- **Definiție:** Semnele de ortografie se utilizează la nivelul cuvântului pentru a asigura scrierea corectă a acestuia, marcând legătura dintre elemente componente, căderea accidentală a unor sunete sau abrevierile convenționale.

---

### A. PRINCIPALELE SEMNE DE ORTOGRAFIE

1. **Cratima (liniuța de unire):**
   - Leagă două cuvinte rostite fără pauză în aceeași silabă (*să-i*, *ne-am*);
   - Leagă termenii cuvintelor compuse (*floarea-soarelui*, *locotenent-colonel*);
   - Atașează articolul hotărât la neologisme sau sigle (*site-ul*, *SMS-ul*);
   - Leagă prefixul *ex-* (*ex-ministru*).
2. **Apostroful:**
   - Semn exclusiv ortografic ce marchează elidarea accidentală a unui sunet, silabe sau cifre (*domnu’ Trandafir*, *anul ’44*, *’neața*).
3. **Punctul de abreviere:**
   - La sfârșitul abrevierilor care nu păstrează ultima literă (*nr.*, *str.*, *art.*, *etc.*) și în abrevierile compuse (*C.F.R.*, *I.S.J.*).
4. **Bara oblică:**
   - În unități de măsură compuse (*km/h*, *m/s*) și formule consacrate (*c/val.*).
5. **Linia de pauză:**
   - În structuri compuse complexe (*Războiul româno-ruso-turc*).
6. **Blancul (pauza albă):**
   - Distinge cuvintele scrise separat de omofonele legate (*o dată* vs. *odată*; *ce le* vs. *cele*).

#### `LES-S23-02` — Semnele de punctuație

- **tip:** lecție
- **parent:** `SES-S23`
- **status:** `present`
- **source:** [[ORT-001]]

### Conținut extras și normalizat

- **Definiție:** Semnele de punctuație sunt semne grafice convenționale care organizează textul la nivelul propoziției, frazei și discursului, marcând pauzele, intonația, ritmul vorbirii și ierarhia sintactică.

---

### A. SEMNELE DE PUNCTUAȚIE ȘI FUNCȚIILE LOR

1. **Punctul (.):** Finalul enunțului asertiv independent.
2. **Virgula (,):** Separă părți de propoziție omogene, izolează vocative, interjecții, apoziții, construcții incidente și delimitează propoziții coordonate sau subordonate.
3. **Punctul și virgula (;):** Pauză intermediară între virgulă și punct, separând unități sintactice ample în cadrul frazei.
4. **Două puncte (:):** Anunță o vorbire directă, o enumerare explicativă sau o concluzie.
5. **Semnul întrebării (?):** Marchează enunțul interogativ direct.
6. **Semnul exclamării (!):** Marchează enunțul exclamativ sau imperativ.
7. **Ghilimelele („ ”):** Încadrează un citat, reproducerea exactă a spuselor cuiva sau un termen folosit cu sens figurat / ironic.
8. **Linia de dialog (—):** Marchează începutul replicii unui personaj.
9. **Linia de pauză (—):** Izolează construcțiile explicative sau incidente.
10. **Parantezele rotunde și drepte ( ), [ ]:** Izolează precizări suplimentare sau detalii secundare.
11. **Punctele de suspensie (...):** Indică o pauză meditativă sau o întrerupere a fluxului gândirii.

#### `LES-S23-03` — Scrierea cuvintelor compuse

- **tip:** lecție
- **parent:** `SES-S23`
- **status:** `present`
- **source:** [[LEX-002]], [[ORT-001]]

### Conținut extras și normalizat

- **Definiție:** Scrierea cuvintelor compuse reprezintă aplicarea normelor ortografice (DOOM) privind redactarea într-un singur cuvânt (sudare), cu cratimă sau în cuvinte separate a termenilor compuși.

---

### A. SCRIEREA CU CRATIMĂ

Se scriu cu cratimă:
1. **Substantive compuse:**
   - Substantiv + adjectiv: *vorbă-lungă*, *rea-voință*;
   - Substantiv + substantiv în apoziție: *câine-lup*, *bloc-turn*, *locotenent-colonel*;
   - Nume de plante și animale: *floarea-soarelui*, *gura-leului*, *ciuboțica-cucului*, *pasărea-paradisului*.
2. **Puncte cardinale compuse:** *nord-est*, *sud-vest*, *nord-vest*.
3. **Repetiții și aproximări:** *trei-patru*, *încet-încet*, *mai-mai*.

---

### B. SCRIEREA ÎNTR-UN SINGUR CUVÂNT (SUDARE)

Se scriu fără cratimă:
- *bunăvoință*, *untdelemn*, *botgros*, *dreptunghi*, *clarvăzător*, *altceva*, *doisprezece*, *oricum*, *devreme*, *deseori*, *bunăstare*.

---

### C. SCRIEREA SEPARATĂ (ALĂTURARE FĂRĂ CRATIMĂ)

- Nume geografice compuse: *Baia Mare*, *Vatra Dornei*, *Turnu Măgurele*, *Marea Neagră*.
- Prepoziții compuse: *de la*, *de pe*, *fără de*, *până la*.

#### `LES-S23-04` — Scrierea cu literă mare

- **tip:** lecție
- **parent:** `SES-S23`
- **status:** `present`
- **source:** [[ORT-001]]

### Conținut extras și normalizat

- **Definiție:** Scrierea cu literă mare (majusculă) marchează în text începutul unui enunț sau caracterul de nume propriu al unui cuvânt sau grup de cuvinte conform convențiilor ortografice academice.

---

### A. SCRIEREA CU MAJUSCULĂ LA ÎNCEPUT DE ENUNȚ

- Primul cuvânt dintr-o frază sau propoziție după punct, semnul întrebării, semnul exclamării sau puncte de suspensie (când acestea încheie un enunț).
- Primul cuvânt dintr-o replică de dialog sau dintr-un citat marcat prin ghilimele după două puncte (*Profesorul a spus: „Învățați cu sârguință.”*).

---

### B. SCRIEREA NUMELOR PROPRII

1. **Nume și prenume de persoane, supranume, porecle:** *Mihai Eminescu*, *Ștefan cel Mare*, *Mircea cel Bătrân*.
2. **Nume geografice și astronomice:** *București*, *Dunărea*, *Carpați*, *Europa*, *Marea Neagră*, *Pământul*, *Luna*, *Marte*.
3. **Denumiri de instituții și organizații de stat:** *Ministerul Educației*, *Parlamentul României*, *Academia Română*, *Organizația Națiunilor Unite*.
   - Atenție: La instituții, toate cuvintele componente cu sens deplin se scriu cu majusculă (cu excepția prepozițiilor și conjuncțiilor).
4. **Sărbători religioase și laice:** *Crăciun*, *Paște*, *Anul Nou*, *Ziua Națională a României*.
5. **Epoci istorice și evenimente majore:** *Renașterea*, *Evul Mediu*, *Primul Război Mondial*, *Revoluția de la 1848*.

## `FON-001` — FONETICĂ

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[ORT-001]], [[SIL-001]], [[LEX-001]]
- **source:** `teorie-extrasa.txt:4–241`

### Conținut extras și normalizat

- **Definiție:** Fonetica este ramura lingvisticii care studiază sunetele limbii din punct de vedere acustic, fiziologic (articulatoriu) și funcțional.
- **Sunetul:** Unitatea auditivă și articulatorie minimală a limbii, produsă prin vibrația aparatului fonator.
- **Litera:** Semnul grafic care notează în scris un sunet. Alfabetul limbii române cuprinde **31 de litere** care transcriu **34 de sunete**.

---

### A. CLASIFICAREA SUNETELOR

1. **Vocale (7):** *a*, *e*, *i*, *o*, *u*, *ă*, *î/â*.
   - Se pot rosti fără ajutorul altor sunete și pot forma singure o silabă.
   - Fiecare silabă conține **obligatoriu o singură vocală**. Numărul de silabe dintr-un cuvânt este egal cu numărul de vocale din acel cuvânt.
2. **Semivocale (4):** *e*, *i*, *o*, *u* (în neologisme și *y*).
   - Sunete intermediare care nu pot alcătui singure o silabă; intră obligatoriu în componența diftongilor și triftongilor alături de o vocală.
   - În scrierea limbii române nu există litere speciale pentru semivocale; aceleași litere notează atât vocale, cât și semivocale (ex. *pe-re*: ambele sunt vocale; *ve-nea*: primul *e* este vocală, al doilea *e* este semivocală, *a* este vocală).
3. **Consoane (22):** Sunete care se produc cu blocarea sau îngustarea canalului fonator și se pronunță doar cu ajutorul unei vocale.

---

### B. ACCENTUL ÎN LIMBA ROMÂNĂ

- **Definiție:** Pronunțarea cu o intensitate acustică sporită a unei silabe dintr-un cuvânt (mai precis, a vocalei din acea silabă).
- **Caracterul accentului:** În limba română accentul este **liber** (mobil) și nu este fixat pe o anumită silabă (*pái-spre-ze-ce*, *u-zí-nă*, *în-flă-că-rát*).
- **Cuvinte clitice (fără accent propriu):** articolele, prepozițiile, conjuncțiile, formele scurte (clitice) ale pronumelor personale și reflexive, verbele auxiliare scurte.

#### Rolul distinctiv (fonologic) al accentului:
1. **Diferențiază timpul verbului:**
   - *el adúnă* (prezent) vs. *el adunắ* (perfect simplu);
   - *el ádmiră* (prezent) vs. *el admirắ* (perfect simplu);
   - *el áflă* (prezent) vs. *el aflắ* (perfect simplu).
2. **Diferențiază persoana și timpul verbului:**
   - *tu aúzi* (prezent, pers. a II-a sg.) vs. *el auzí* (perfect simplu, pers. a III-a sg.);
   - *tu iéși* (prezent) vs. *el ieșí* (perfect simplu).
3. **Diferențiază clasa morfologică:**
   - *véselă* (adjectiv) vs. *vesélă* (substantiv: set de vase);
   - *áltoi* (substantiv) vs. *altói* (verb: persoana I);
   - *báră* (substantiv) vs. *barắ* (verb: perfect simplu).
4. **Diferențiază sensul lexical:**
   - *țárină* (ogor, moșie) vs. *țarínă* (soția țarului);
   - *tórturi* (prăjituri festive) vs. *tortúri* (chinuri, suferințe);
   - *modéle* (manechine, tipare) vs. *módele* (obiceiuri vestimentare);
   - *cúrele* (tratamente medicale) vs. *curéle* (centuri de piele);
   - *gámele* (serii de tonuri) vs. *gaméle* (vase militare de tablă);
   - *directór* (funcție de conducere) vs. *diréctor* (în tehnică: undă ghid).

Observație: Conform normelor academice actuale (DOOM), se accentuează pe prima silabă substantive feminine derivate precum: *dóctoriță*, *férfeniță*, *bívoliță*, *lápoviță*, *prépeliță*, *chécheriță*, *șlíboviță*, *gắrgăriță*, *mắgăriță*.

---

### C. OMOFONELE ȘI OMOGRAFELE

- **Omofone:** Cuvinte sau structuri care se pronunță identic, dar se scriu diferit (adesea unul legat, altul cu cratimă):
  - *neam* (rudă, popor) vs. *ne-am* (pronume + verb auxiliar: *ne-am întâlnit*);
  - *ia* (verbul *a lua*) vs. *i-a* (pronume + verb: *i-a dat*);
  - *tei* (arbore) vs. *te-i* (pronume + verb: *te-i bucura*);
  - *cele* (adjectiv/pronume demonstrativ) vs. *ce le* (pronume relativ + pronume personal);
  - *săi* (adjectiv posesiv: *frații săi*) vs. *să-i* (conjuncție + pronume: *să-i spui*);
  - *cândva* (adverb: odinioară) vs. *când va* (adverb relativ + verb auxiliar: *când va sosi*);
  - *oricând* (adverb) vs. *ori când* (conjuncție + adverb: *ori azi, ori când dorești*).
- **Omografe:** Cuvinte care se scriu identic, dar diferă prin accent și prin sens:
  - *mása* (obiect de mobilier) vs. *masá* (a efectua masaj);
  - *cása* (locuință) vs. *casá* (a anula o hotărâre judecătorească);
  - *háină* (veșmânt) vs. *haínă* (crudă, nemiloasă).

---

### D. GRUPURILE DE SUNETE

#### 1. Diftongul
Grupul de două sunete (o vocală și o semivocală) pronunțate în aceeași silabă:
- **Diftongi ascendenți (urcători):** semivocală + vocală.
  - *soa-re* [o-a], *ploa-ie* [o-a], *iar-bă* [i-a], *deal* [e-a].
- **Diftongi descendenți (coborâtori):** vocală + semivocală.
  - *mai-că* [a-i], *pâi-ne* [â-i], *greu* [e-u], *câi-ne* [â-i], *pui* [u-i].
- **Diftongi de joncțiune (morfologici):** rezultați din rostirea într-o silabă a două cuvinte diferite legate prin cratimă (*să-i*, *i-am*, *ți-a*).

#### 2. Triftongul
Grupul de trei sunete (o vocală și două semivocale) pronunțate în aceeași silabă:
- **Triftongi ascendenți:** semivocală + semivocală + vocală.
  - *a-ri-pioa-ră* [i-o-a], *cre-ioa-ne* [i-o-a].
- **Triftongi centrați:** semivocală + vocală + semivocală.
  - *le-oai-că* [e-a-i], *tră-iau* [i-a-u], *ve-neau* [e-a-u], *lu-poai-că* [o-a-i].
- **Triftongi de joncțiune:** formați prin cratimă între cuvinte diferite (*mi-ai dat*, *i-au spus*, *ți-ai luat*).

#### 3. Hiatul
Întâlnirea a două vocale alăturate care fac parte din silabe diferite:
- **Hiat cu vocale identice:**
  - *a-a:* *con-tra-ar-gu-ment*;
  - *e-e:* *a-le-e*, *li-ce-e*, *fe-e-ri-e*, *i-de-e*;
  - *i-i:* *fi-in-ță*, *ști-in-ță*, *a-mi-i* (Atenție: *fii-că* conține diftong descendent [i-i], nu hiat);
  - *o-o:* *al-co-ol*, *co-o-pe-ra-tiv*, *zoo-lo-gi-e*;
  - *u-u:* *va-cu-um*, *a-si-du-u*, *a-tu-ul*.
- **Hiat cu vocale diferite:**
  - *u-e:* *a-flu-ent*, *con-flu-en-ță*, *si-lu-e-tă*;
  - *i-e:* *ro-chi-e*, *po-e-zi-e*, *vi-e*;
  - *o-e:* *bo-em*, *po-et*, *co-e-rent*;
  - *e-a:* *a-li-ne-at*, *bo-re-al*, *re-al*;
  - *o-a:* *cro-at*, *pro-to-zo-ar*;
  - *a-e:* *a-er*, *fa-e-ton*, *ma-es-tru*.
- **Hiatul sintactic:** Apare la contactul fonetic dintre două cuvinte distincte în frază (*pe unde*, *de acolo*).

---

### E. CORESPONDENȚA DINTRE SUNET ȘI LITERĂ

În mod uzual, în limba română există o corespondență directă 1:1 între litere și sunete (*car-te* = 5 litere, 5 sunete). Asimetriile apar în următoarele cazuri:

#### 1. Litera *X* (o literă = două sunete)
- Redă grupul de consoane [cs]: *box* [b o c s] (3 litere, 4 sunete), *fix*, *taxă*, *sfinx*.
- Redă grupul de consoane [gz]: *e-xa-men* [e g z a m e n] (6 litere, 7 sunete), *e-xact*, *e-xem-plu*, *e-xo-tic*.

#### 2. Grupurile de litere: *ce*, *ci*, *ge*, *gi*, *che*, *chi*, *ghe*, *ghi*
- **Situația I (Literă ajutătoare):** Când în aceeași silabă există o altă vocală, literele *i* și *e* din grup nu sunt sunete de sine stătătoare, ci doar semne grafice ajutătoare care arată pronunțarea palatală a consoanei precedente:
  - *ceas* [č a s] — 4 litere, 3 sunete (*e* = literă ajutătoare);
  - *cior-bă* [č o r b ă] — 6 litere, 5 sunete (*i* = literă ajutătoare);
  - *geam* [ğ a m] — 4 litere, 3 sunete (*e* = literă ajutătoare);
  - *chior* [k' o r] — 5 litere, 3 sunete (*h, i* = litere ajutătoare);
  - *ghem* [g' e m] — 4 litere, 3 sunete (*h* = literă ajutătoare, *e* = vocală).
- **Situația II (Vocală de sine stătătoare):** Când în silabă nu există o altă vocală, *i* și *e* sunt vocale depline:
  - *ce-re* [č e r e] — 4 litere, 4 sunete;
  - *ci-ne* [č i n e] — 4 litere, 4 sunete;
  - *chin* [k' i n] — 4 litere, 3 sunete (*h* = literă ajutătoare, *i* = vocală);
  - *ghid* [g' i d] — 4 litere, 3 sunete.
- **Situația III (La final de cuvânt):**
  - *maci* [m a č] — 4 litere, 3 sunete (*i* este literă ajutătoare);
  - *dragi* [d r a ğ] — 5 litere, 4 sunete;
  - *ochi* [o k'] — 4 litere, 2 sunete (*h, i* sunt litere ajutătoare);
  - *unghi* [u n g'] — 5 litere, 3 sunete (*h, i* sunt litere ajutătoare).

#### 3. Valorile fonetice ale literei *I*:
1. **Vocală:** Când formează silabă (*vi-ne*, *i-nel*).
2. **Semivocală:** În diftongi și triftongi (*iar-bă*, *pui*, *te-i*).
3. **I scurt (asilabic / afonizat / șoptit):** La finalul cuvintelor, după consoană, marcând doar palatalizarea consoanei precedente (*meri*, *lupi*, *brazi*, *bani*, *pomi*). Nu formează silabă și nu este vocală deplină.
4. **Literă ajutătoare:** În grupurile *ci*, *gi*, *chi*, *ghi* (*meci*, *legi*, *ochi*).

#### 4. Valorile fonetice ale literei *E*:
1. **Vocală:** *re-ce*, *e-lev*.
2. **Semivocală:** *deal*, *sea-ră*.
3. **Valoare dublă [ie] (diftongat):** În formele pronumelui personal (*eu* [i e u], *el* [i e l], *ei* [i e i], *ele* [i e l e]) și ale verbului *a fi* (*este* [i e s t e], *e* [i e], *eram* [i e r a m], *erai*, *era*, *erați*, *erau*).
4. **Literă ajutătoare:** În grupurile *ce*, *ge*, *che*, *ghe* (*ceas*, *geam*, *ghea-ță*).

---

### F. FORMELE DE *I* FINAL (-I, -II, -III)

1. **Substantive și adjective masculine în -i / -ii / -iii:**
   - *Un copil* (consoană + *i* asilabic) → *Doi copii* (-ii: vocală + semivocală, diftong descendent) → *Copiii sunt veseli* (-iii: vocală + diftong ascendent).
   - *Propriu* → *Proprii* (nearticulat) → *Propriii săi copii* (articulat, 3 de *i*).
   - *Fru-moși* (1 *i*) → *Fru-mo-șii* (2 *i*, articulat).
2. **Substantive feminine terminate în -ii la Genitiv-Dativ:**
   - Formează la sfârșit diftong ascendent: *femeii*, *ploii*, *cheii*, *văii*, *oii*.
3. **Verbe de conjugarea a IV-a la perfect simplu:**
   - Persoana I singular primește desinența *-i*, alăturată temei în *-i*: *eu venii*, *eu sosii*, *eu fugii* (diftong descendent).
   - Verbele terminate în doi de *i* la infinitiv (*a se sfii*, *a prii*, *a înmii*) primesc trei de *i* la pers. I sg. perfect simplu: *eu mă sfiii*, *eu înmiii*.

---

### G. NORME ORTOGRAFICE ȘI ORTOEPICE (S vs. Z, Pluralul în -X)

1. **Se scrie și se pronunță cu S:**
   - *disertație*, *disident*, *disidență*, *premisă*, *grimasă*, *schismă*, *trăsnet*, *trăsni*, *trăsnaie*, *smochine*, *smântână*, *smarald*, *smalț*, *snop*, *sesiune*.
2. **Se scrie și se pronunță cu Z:**
   - *zmeu*, *zmeură*, *izmă*, *izlaz*, *cazma*, *caznă*, *pizmă*, *gleznă*, *cizmă*, *bezmetic*.
3. **Pluralul cuvintelor terminate în X:**
   - *ortodox* → masc. pl. *ortodocși* / fem. pl. *ortodoxe*;
   - *complex* → masc. pl. *complecși* / fem. pl. *complexe*;
   - *perplex* → masc. pl. *perplecși* / fem. pl. *perplexe*;
   - *convex* → masc. pl. *convecși* / fem. pl. *convexe*;
   - *fix* → masc. pl. *ficși* / fem. pl. *fixe*;
   - *mixt* → masc. pl. *micști* / fem. pl. *mixte*;
   - *limax* → masc. pl. *limacși*;
   - *lax* → masc. pl. *lacși* / fem. pl. *laxe*.

---

## `ORT-001` — Ortografie și punctuație

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[FON-001]], [[SIL-001]], [[LEX-001]]
- **source:** `teorie-extrasa.txt:242–298`

### Conținut extras și normalizat

- **Ortografia:** Ansamblul de reguli care stabilesc scrierea corectă a cuvintelor unei limbi conform normelor academice în vigoare.
- **Punctuația:** Sistemul de semne grafice convenționale care marchează în scris pauzele, intonația, ritmul vorbirii și raporturile sintactice dintre propoziții sau părți de propoziție.

---

### A. SEMNELE DE ORTOGRAFIE

Semnele de ortografie se utilizează la nivelul cuvântului (în interiorul acestuia sau între componentele sale).

#### 1. Cratima (liniuța de unire)
Este principalul semn de ortografie și îndeplinește următoarele roluri:
- **Rol fonetic:** Leagă două cuvinte rostite fără pauză în aceeași silabă (elidare vocalică sau pronunție în tempo rapid): *să-i spui*, *i-am dat*, *ne-am dus*, *cine-a venit*.
- **Rol morfologic:**
  - În structura cuvintelor compuse: *câine-lup*, *prim-ministru*, *locotenent-colonel*, *rea-voință*, *sud-est*.
  - Între prefixe/sufixe și baza derivată în cazuri speciale: *ex-ministru*, *pro-democrație*.
  - Atașarea articolului hotărât enclitic sau a desinențelor la substantive neadaptate fonetic sau sigle: *show-ul*, *site-ul*, *SMS-ul*, *QR-ul*.
- **Cratima ca semn de punctuație (excepții):**
  - În repetiții: *încet-încet*, *singur-singurel*.
  - În structura numeralelor aproximative: *șapte-opt elevi*, *zece-cincisprezece zile*.
  - Între două limite numerice sau spațio-temporale: *traseul București-Ploiești*, *intervalul 8-16*.

#### 2. Apostroful
Este **exclusiv semn de ortografie**; marchează absența accidentală a unor sunete, silabe sau a primelor cifre dintr-un an calendaristic:
- *domnu’ Trandafir*, *las’ că știu eu*, *’neața*, *s-a născut în anul ’41*.

#### 3. Punctul ca semn de ortografie
Se folosește în scrierea abrevierilor care nu păstrează ultima literă a cuvântului inițial:
- Abrevieri simple: *nr.* (numărul), *str.* (strada), *art.* (articolul), *etc.* (et cetera), *a.c.* (anul curent), *î.Hr.* (înainte de Hristos), *d.Hr.* (după Hristos).
- Abrevieri compuse scrise cu puncte între litere: *C.F.R.*, *I.S.J.*, *M.A.I.*
- În scrierea datei calendaristice: *22.IX.2026*.

#### 4. Bara oblică (slash)
Este semn de ortografie numai în notații convenționale de unități de măsură și formule tehnico-administrative:
- Unități de măsură compuse: *km/h*, *m/s*, *g/mol*.
- Formule administrative consacrate: *c/val.* (= contravaloare), *m/n* (= motonavă).
- În orice alt context (texte juridice: *Legea 550/2020*, intervale *noaptea 6/7*, alternative *profesor/elev*), bara oblică funcționează ca semn de punctuație.

#### 5. Linia de pauză (ca semn de ortografie)
Unește două cuvinte compuse sau un cuvânt simplu și unul compus într-o structură complexă:
- *Războiul româno-ruso-turc*;
- *Direcția nord-est—sud-vest*.

#### 6. Blancul (pauza albă dintre cuvinte)
Este considerat semn de ortografie prin faptul că delimitează cuvintele scrise separat de omofonele lor sudate sau legate prin cratimă:
- *o dată* (numeral/substantiv) vs. *odată* (adverb: odinioară, imediat);
- *când va* (adverb + auxiliar) vs. *cândva* (adverb nehotărât);
- *ce le* (pronume relativ + pronume personal) vs. *cele* (articol/pronume demonstrativ);
- *oricine* (pronume nehotărât) vs. *ori cine* (conjuncție + pronume).

---

### B. SEMNELE DE PUNCTUAȚIE

Semnele de punctuație organizează textul la nivel de propoziție, frază și discurs:
1. **Punctul (.):** Marchează sfârșitul unei propoziții enunțiative independente.
2. **Virgula (,):** Marchează pauza scurtă și delimitează părți de propoziție omogene, apoziții, construcții incidente, vocative, interjecții și propoziții subordonate sau coordonate.
3. **Punctul și virgula (;):** Separă unități sintactice ample în cadrul unei fraze complexe, indicând o pauză mai mare decât virgula, dar mai mică decât punctul.
4. **Două puncte (:):** Anunță o vorbire directă, o enumerare, o explicație sau o concluzie.
5. **Semnul întrebării (?):** Marchează finalul unui enunț interogativ direct.
6. **Semnul exclamării (!):** Marchează sfârșitul unui enunț exclamativ, imperativ sau după o interjecție / un vocativ accentuat.
7. **Ghilimelele („ ”):** Încadrează o citare exactă, vorbirea directă sau un cuvânt utilizat cu sens figurat / ironic. Se numără o singură dată ca pereche.
8. **Linia de dialog (—):** Marchează începutul replicii fiecărui personaj într-o conversație directă.
9. **Linia de pauză (—):** Izolează construcțiile incidente sau explicative (ține locul virgulelor) și delimitează componente sintactice puse în contrast.
10. **Parantezele rotunde și drepte ( ), [ ]:** Izolează un adaos explicativ, o precizare suplimentară sau indicațiile de regie. Se numără ca pereche o singură dată.
11. **Punctele de suspensie (...):** Marchează o întrerupere a fluxului vorbirii, o pauză meditativă sau o omisiune voluntară dintr-un citat.

Observație: În mod excepțional, virgula este considerată semn de ortografie în două situații particulare:
1. În locuțiuni adverbiale cu structură binară simetrică: *cu chiu, cu vai*; *de bine, de rău*; *de voie, de nevoie*.
2. Între interjecțiile onomatopeice identice repetate consecutiv: *boc, boc!*; *cioc, cioc!*; *ham, ham!*; *trosc, pleosc!*.

---

## `SIL-001` — Despărțirea în silabe

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[FON-001]], [[ORT-001]], [[LEX-002]]
- **source:** `teorie-extrasa.txt:299–375`

### Conținut extras și normalizat

- **Definiție:** Silaba este un sunet sau un grup de sunete pronunțat printr-o singură deschidere a canalului fonator (un singur efort expirator), organizat obligatoriu în jurul **unei singure vocale**.
- **Principiul director (DOOM):** În limba română contemporană, norma academică acordă prioritate **despărțirii fonetice** (după pronunțare), admițând opțional, în cazul cuvintelor compuse sau derivate cu prefixe, și **despărțirea morfologică** (după structura lexicală).

---

### A. DESPĂRȚIREA FONETICĂ (DUPĂ PRONUNȚARE)

Se bazează pe numărul și succesiunea consoanelor situate între două vocale:

#### Regula 1: O singură consoană între două vocale (V - CV)
Consoana trece întotdeauna în silaba următoare:
- *ca-să*, *ma-re*, *pa-tă*, *lu-mă-na-re*, *re-ce*.
- În locul vocalei putem avea un diftong sau triftong: *floa-re*, *vo-ioa-să*, *soare-le*.
- Literele *ch*, *gh* urmate de *e* sau *i* notează o singură consoană (ocluzivă palatală) și trec integral în silaba următoare: *u-re-che*, *ve-ghe*.

#### Regula 2: Două consoane între două vocale (VC - CV)
Ruptura silabică se face, de regulă, între cele două consoane (prima consoană rămâne în prima silabă, a doua trece în silaba următoare):
- *car-te*, *mun-te*, *mun-că*, *ar-mă*, *cos-tum*, *ac-tiv*.

**Excepția Regulii 2 (Grupul ocluzivă/fricativă + lichidă):**
Când a doua consoană este **R** sau **L**, iar prima consoană este una dintre următoarele: **B, C, D, F, G, H, P, T, V**, ambele consoane trec împreună în silaba următoare:
- *B + L/R:* *ta-blă*, *o-blig*, *re-bre-an*;
- *C + L/R:* *a-cla-ma*, *a-cru*, *so-cru*;
- *D + L/R:* *co-dru*, *a-dras-tin*;
- *F + L/R:* *a-fla*, *a-fri-can*;
- *G + L/R:* *a-glo-me-ra*, *ne-gru*;
- *H + L/R:* *si-hlă*, *pe-hli-van*;
- *P + L/R:* *a-plaud*, *a-pro-ape*;
- *T + L/R:* *a-tlet*, *li-tru*, *pa-tru*;
- *V + L/R:* *e-vla-vi-e*, *co-vrig*.

Atenție: Dacă prima consoană nu face parte din această serie (de exemplu este *m*, *n*, *r*, *s*), se aplică regula generală a împărțirii între consoane: *mâs-lă*, *mier-lă*, *gâr-lă*.

#### Regula 3: Trei sau mai multe consoane între două vocale
- **Cazul general (VC - CCV):** Prima consoană rămâne în silaba precedentă, iar următoarele două consoane trec în silaba următoare:
  - *as-tru*, *mon-stru*, *om-let*, *lin-gvist*, *cin-ste*.
- **Excepția Regulii 3 (Grupuri cu repartiție VCC - CV):**
  La grupurile de trei consoane în care prima consoană este **L, M, N, R, S, Ș**, iar a doua este **C, D, G, P, T**, despărțirea se face după **a doua consoană** (două consoane rămân în prima silabă, a treia trece în silaba următoare):
  - *l-p-t:* *sculp-tor*, *sculp-tu-ră*;
  - *m-p-t:* *somp-tu-os*, *preemp-ți-u-ne*;
  - *m-p-ț:* *redemp-ți-u-ne*;
  - *n-c-t:* *punc-taj*, *func-ți-e*, *sanc-ți-u-ne*;
  - *n-c-ș:* *linc-șii*;
  - *n-d-v:* *sand-viș*;
  - *r-c-t:* *arc-tic*;
  - *r-t-f:* *jert-fă*;
  - *s-t-m:* *ast-matic*.

#### Regula 4: Patru sau cinci consoane între două vocale
Despărțirea se face de regulă după prima consoană (*in-struc-ți-e*, *con-struc-tor*) sau după a doua dacă este vorba despre cuvinte compuse (*opt-spre-ze-ce*).

---

### B. DESPĂRȚIREA VOCALELOR ALĂTURATE

1. **Două vocale în hiat:** Se despart întotdeauna în silabe diferite:
   - *a-er*, *po-et*, *li-ce-e*, *al-co-ol*, *cro-at*, *va-cu-um*, *fi-in-ță*.
2. **Diftongii și triftongii:** Nu se despart niciodată în interiorul lor, formând o singură silabă cu vocala de bază:
   - *soa-re*, *mai-că*, *le-oai-că*, *ve-neai*, *cre-ioa-ne*.

---

### C. DESPĂRȚIREA MORFOLOGICĂ (DUPĂ STRUCTURA CUVÂNTULUI)

La cuvintele derivate cu prefixe și cuvintele compuse, DOOM permite în mod egal:
1. **Despărțirea fonetică (recomandată):** *de-spre*, *su-bli-ni-a*, *i-ne-gal*, *al-tun-de-va*.
2. **Despărțirea morfologică (admisă):** *des-pre*, *sub-li-ni-a*, *in-e-gal*, *alt-un-de-va*.

---

### D. REGULI PRIVIND DESPĂRȚIREA LA CAPĂT DE RÂND

1. **Interdicții absolute:**
   - Nu se lasă o singură literă (vocală) la sfârșit de rând sau la începutul rândului următor (ex. *a-ce-ea* se poate despărți doar *ace-ea*, nu *a-ceea*).
   - Nu se despart numele proprii de persoane de prenume sau de inițiale: *M. Eminescu*, *Mihai Eminescu* se scriu pe același rând.
   - Nu se despart abrevierile, siglele și acronimele: *UNESCO*, *C.F.R.*, *ONU*, *km/h*.
   - Nu se separă numeralele de substantivul determinat sau de unitatea de măsură: *10 kg*, *25 de elevi*, *anul 2026*.
   - Nu se despart cuvintele legate prin cratimă dacă prin aceasta s-ar crea ambiguitate ortografică.

---

## `LEX-001` — VOCABULAR

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[LEX-002]], [[MOR-001]]
- **source:** `teorie-extrasa.txt:376–495`

### Conținut extras și normalizat

- **Vocabularul (lexicul):** Totalitatea cuvintelor care există și au existat în limba română din trecut până în prezent.
- **Organizarea vocabularului:** Se structurează în două mari compartimente: **vocabularul fundamental** și **masa vocabularului**.

---

### A. VOCABULARUL FUNDAMENTAL (FONDUL PRINCIPAL LEXICAL)

Cuprinde nucleul stabil al limbii (aproximativ 10% din totalul vocabularului, circa 1.500 de cuvinte esențiale), cunoscute și utilizate frecvent de toți vorbitorii nativi.
- **Trăsături distinctive:**
  - Vechime maximă în limbă (în majoritate moștenite din latină sau autohtone);
  - Stabilitate semantică ridicată;
  - Mare putere de derivare, compunere și intrare în expresii / locuțiuni;
  - Caracter polisemantic accentuat.
- **Categorii de noțiuni fundamentale cuprinse:**
  - Părți ale corpului omenesc (*cap*, *ochi*, *mână*, *inimă*, *picior*);
  - Grade de rudenie (*mamă*, *tată*, *fiu*, *fiică*, *frate*, *soră*);
  - Animale domestice și sălbatice comune (*cal*, *vacă*, *câine*, *lup*, *urs*);
  - Plante, arbori, fructe, alimente de bază (*grâu*, *stejar*, *măr*, *pâine*, *apă*, *lapte*, *sare*);
  - Acțiuni umane esențiale (*a fi*, *a avea*, *a mânca*, *a dormi*, *a merge*, *a vedea*, *a face*);
  - Diviziuni ale timpului, anotimpuri, părți ale zilei (*zi*, *noapte*, *an*, *vară*, *iarnă*, *dimineață*);
  - Culori primare (*alb*, *negru*, *roșu*, *verde*, *galben*);
  - Numeralele de la 1 la 10 și cuvintele gramaticale (pronume, prepoziții, conjuncții).

---

### B. MASA VOCABULARULUI

Reprezintă restul de aproximativ 90% din cuvintele limbii (peste 140.000 de termeni) și se află într-o continuă dinamică:

#### 1. Arhaismele (termeni ieșiți din uzul curent):
- **Arhaisme lexicale:** Cuvinte dispărute odată cu realitatea pe care o denumeau (*armaș*, *pârcălab*, *logofăt*, *jitnicer*, *hatman*, *spătar*, *ienicer*, *comis*, *paharnic*, *sâneață*).
- **Arhaisme fonetice:** Forme vechi de pronunție ale unor cuvinte păstrate (*hiclean* pentru *viclean*, *a îmbla* pentru *a umbla*, *samă* pentru *seamă*, *pre* pentru *pe*, *părete* pentru *perete*, *a derege* pentru *a drege*).
- **Arhaisme morfologice:** Forme flexionare vechi (*inime*, *mânuri*, *ruinuri*, *palaturi*, *carii*).
- **Arhaisme sintactice:** Construcții vechi de topică (*Gazeta de Transilvania*, *domn Moldovei*).
- **Arhaisme semantice:** Cuvinte păstrate, dar cu sensul vechi ieșit din uz (*carte* = scrisoare; *prost* = simplu, ordinar; *a certa* = a pedepsi fizic; *limbă* = popor, neam; *moșie* = țară, patrie).

#### 2. Regionalismele (termeni cu circulație geografică limitată):
- **Regionalisme lexicale:** *curechi* (varză), *barabulă / crumpli* (cartof), *harbuz / lubeniță* (pepene), *păpușoi / cucuruz* (porumb), *ai* (usturoi), *bumb* (nasture), *lepedeu* (cearșaf), *omăt* (zăpadă), *tină* (noroi).
- **Regionalisme fonetice:** *chiatră* (piatră), *chișior* (picior), *copchil* (copil), *gioc* (joc), *șinși* (cinci).
- **Regionalisme morfologice:** Forme verbale populare regionale (*o fost*, *o văzut*, *am să viu*, *îi*, *îs*).
- **Regionalisme sintactice:** Tipare specifice graiurilor locale (ex. lipsa acordului: *ea este deștepți*).

#### 3. Neologismele și termenii tehnico-științifici:
- Cuvinte împrumutate recent sau create pe teren românesc din rădăcini internaționale pentru a desemna concepte moderne: *ordinat*, *monitor*, *paradigmă*, *algoritm*, *fotosinteză*, *izotop*, *morfem*.

#### 4. Jargonul:
- Limbaj convențional folosit de anumite grupuri sociale pentru a impresiona sau a se distinge, caracterizat prin abuzul de cuvinte străine neasimilate: *bonjour*, *mon cher*, *darling*, *bye-bye*, *trendy*, *cool*, *party*.

#### 5. Argoul:
- Limbaj codificat, cu caracter secret, utilizat inițial de grupuri delicvente (apoi preluat de elevi și studenți): *pârnaie* (închisoare), *baftă* (noroc), *nașpa* (urât, rău), *mișto* (frumos, bun), *a da țeapă* (a înșela), *profu / diriga* (profesorul / diriginta), *mate / info* (matematică / informatică), *a hali* (a mânca), *curcan / gabor* (polițist).

---

### C. RELAȚIILE SEMANTICE ÎN VOCABULAR

#### 1. Sinonimele
Cuvinte cu formă diferită și sens identic sau foarte apropiat:
- **Sinonime totale:** Identitate semantică deplină (*azot* = *nitrogen*, *timp* = *vreme*, *stomatologie* = *dentistică*).
- **Sinonime parțiale:** Se suprapun doar la anumite sensuri (*față* = *chip* = *obraz* = *figură*, dar nu și *față de masă*).

#### 2. Antonimele
Cuvinte cu sens diametral opus, aparținând aceleiași părți de vorbire:
- Radicale diferite: *cald* vs. *rece*, *lumină* vs. *întuneric*, *bun* vs. *rău*, *a urca* vs. *a coborî*.
- Formate prin prefixare negativă (*ne-*, *i-*, *in-*, *des-*): *cinstit* vs. *necinstit*, *legal* vs. *ilegal*, *articulat* vs. *dezarticulat*.

#### 3. Omonimele
Cuvinte identice ca formă (pronunție și scriere), dar complet diferite ca sens și fără legătură etimologică între ele:
- **Omonime lexicale totale:** Au aceeași clasă morfologică și paradigme identice la singular și plural:
  - *lac* (apă stătătoare) — *lacuri* vs. *lac* (soluție chimică lucioasă) — *lacuri*;
  - *bancă* (instituție financiară) — *bănci* vs. *bancă* (mobilier pentru șezut) — *bănci*;
  - *broască* (animal amfibiu) — *broaște* vs. *broască* (mecanism de încuietoare) — *broaște*;
  - *pană* (penaj de pasăre) — *pene* vs. *pană* (defecțiune tehnică) — *pene*.
- **Omonime lexicale parțiale:** Au aceeași formă la singular, dar se diferențiază la plural prin forme distincte cu sensuri diferite:
  - *bandă:* *benzi* (fâșii de hârtie/stradă) vs. *bande* (grupuri de răufăcători);
  - *cot:* *coate* (articulații ale brațului) vs. *coți* (unități vechi de măsură) vs. *coturi* (curburi ale unui râu / drum);
  - *colț:* *colți* (dinți ascuțiți) vs. *colțuri* (unghiuri ale unei încăperi);
  - *car:* *care* (vehicule cu roți) vs. *cari* (insecte dăunătoare lemnului);
  - *elan:* *elani* (animale cervide) vs. *elanuri* (avânturi sufletești).
- **Omonime lexico-gramaticale:** Cuvinte cu aceeași formă exterioară, dar care aparțin unor părți de vorbire complet diferite:
  - *cer* (substantiv: bolta cerească) vs. *cer* (verb: pers. I sg. *a cere*);
  - *de* (prepoziție: *om de onoare*) vs. *de* (conjuncție condițională: *de vine, îl primesc*) vs. *de* (interjecție);
  - *mare* (substantiv: întindere de apă) vs. *mare* (adjectiv: de dimensiuni mari);
  - *vie* (substantiv: plantație de viță-de-vie) vs. *vie* (adjectiv feminin: *apă vie*);
  - *mai* (substantiv: luna a cincea) vs. *mai* (adverb de mod comparativ: *mai bun*) vs. *mai* (substantiv: unealtă de bătut).

#### 4. Paronimele
Cuvinte cu formă sonoră foarte asemănătoare (diferite prin doar unul sau două sunete), dar cu sensuri complet distincte:
- *eminent* (remarcabil, genial) vs. *iminent* (inevitabil, care amenință să se întâmple curând);
- *a enerva* (a irita psihic) vs. *a inerva* (a transmite impulsuri nervoase către un organ);
- *complement* (funcție sintactică) vs. *compliment* (laudă, apreciere măgulitoare);
- *familial* (legat de familie: *climat familial*) vs. *familiar* (cunoscut, comun, fără formalități);
- *solidar* (unit prin sentimente comune) vs. *solitar* (singuratic, izolat);
- *aliniat* (așezat în linie dreaptă) vs. *alineat* (rând retras într-un text scris);
- *a emigra* (a pleca definitiv din patria de origine) vs. *a imigra* (a se stabili într-o țară străină);
- *a apropia* (a micșora distanța) vs. *a apropria* (a-și însuși un bun străin).

#### 5. Cuvintele polisemantice vs. Omonime
- **Cuvântul polisemantic:** Păstrează un nucleu comun de sens de la care s-au dezvoltat sensuri secundare și figurate prin transfer semantic:
  - *ochi:* organul vederii → ochi de geam → ochi de apă → ochi de aragaz → ochi de ou.
  - *masă:* piesă de mobilier → mâncare servită → ospăț, banchet.
- **Diferența cheie:** La omonime cuvintele nu au nicio legătură semantică și provin din etimoane diferite; la polisemantism, este vorba despre același cuvânt polivalent.

#### 6. Pleonasmul
Eroare logică și stilistică constând în alăturarea a două cuvinte sau expresii care repetă inutil aceeași idee:
- *a coborî jos*, *a urca sus*, *a avansa înainte*, *a prefera mai bine*, *babă bătrână*, *protagonist principal*, *hemoragie de sânge*, *în jur de vreo zece*, *scurtă alocuțiune*.

---

## `LEX-002` — Îmbogățirea vocabularului

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[LEX-001]], [[MOR-001]], [[ORT-001]]
- **source:** `teorie-extrasa.txt:496–879`

### Conținut extras și normalizat

- **Îmbogățirea vocabularului:** Procesul continuu prin care lexicul unei limbi se dezvoltă cantitativ și calitativ, prin procedee interne (create în interiorul limbii) și externe (împrumutate din alte limbi).

---

### A. DERIVAREA (MIJLOC INTERN)

Procedeu intern de formare a cuvintelor prin adăugarea de afixe (prefixe și sufixe) la o rădăcină sau la un cuvânt de bază:
- **Rădăcina:** Elementul comun, ireductibil ca sens lexical, prezent în toate cuvintele din aceeași familie lexicală (ex. familia cuvântului *verde*: *verz-ișor*, *verz-eală*, *în-verz-it* → rădăcina este *-verz- / -verd-*).
- **Cuvântul de bază:** Unitatea lexicală existentă în limbă care servește ca punct de plecare pentru formarea unui cuvânt nou.

#### 1. Tipuri de derivare după mecanism:
1. **Derivare progresivă:** Adăugarea de sufixe și/sau prefixe la cuvântul de bază.
2. **Derivare regresivă:** Obținerea unui cuvânt nou prin eliminarea unui afix sau a unei desinențe de la sfârșitul unui cuvânt existent:
   - Din nume de fructe spre nume de arbori/arbuști: *mandarină* → *mandarin*, *curmală* → *curmal*, *smochină* → *smochin*, *dudă* → *dud*;
   - Din denumiri de științe spre nume de profesii: *neurologie* → *neurolog*, *chirurgie* → *chirurg*, *stomatologie* → *stomatolog*, *oftalmologie* → *oftalmolog*;
   - Substantive neutre formate din verbe: *a blestema* → *blestem*, *a suspina* → *suspin*, *a avânta* → *avânt*, *a dejuna* → *dejun*, *a deranja* → *deranj*, *a condensa* → *condens*;
   - Substantive feminine formate din verbe de conjugarea a IV-a: *a păzi* → *pază*, *a bârfi* → *bârfă*, *a clipi* → *clipă*.
3. **Derivare parasintetică:** Adăugarea simultană a unui prefix și a unui sufix la rădăcină (*în- + frunz- + -i* = *a înfrunzi*; *des- + zăpez- + -i* = *a deszăpezi*; *îm- + bogăț- + -i* = *a îmbogăți*).

#### 2. Clasificarea sufixelor:
- **După valoarea morfologică pe care o imprimă:**
  - **Sufixe substantivale:** *-ar* (*cronicar*), *-are* (*alergare*), *-eală* (*amețeală*), *-eață* (*dulceață*), *-ământ* (*jurământ*), *-ință* (*făgăduință*), *-ism* (*umanism*).
  - **Sufixe adjectivale:** *-iu* (*auriu*, *argintiu*, *plumburiu*), *-esc* (*tineresc*, *prietenesc*), *-os* (*lemnos*), *-tor* (*răcoritor*), *-atec/-atic* (*primăvăratic*).
  - **Sufixe verbale:** *-i/-î* (*a izvorî*, *a brăzda*), *-ui* (*a bubui*), *-iza* (*a teroriza*, *a moderniza*), *-ăi* (*a behăi*), *-ona* (*a eșalona*).
  - **Sufixe adverbiale:** *-ește* (*bărbătește*, *prietenește*), *-iș* (*pieptiș*, *curmeziș*, *pitiș*), *-âș* (*chiorâș*, *târâș*), *-mente* (*realmente*, *moralmente*).
  - **Sufixe diminutivale (după sens):** denumesc obiecte sau însușiri mai mici decât cele de bază (*pătuț*, *scăunel*, *băiețel*, *fetiță*, *albinuță*, *frumușel*, *încetișor*).
  - **Sufixe augmentative (după sens):** denumesc obiecte sau ființe supradimensionate (*căsoaie*, *băiețandru*, *băietan*, *prostoi*, *măturoi*, *iepuroi*, *buboi*, *lungan*).
  - **Sufixe colective:** denumesc grupuri de obiecte sau ființe: *-ime* (*studențime*, *școlărime*, *preoțime*), *-et* (*tineret*, *brădet*, *făget*), *-iș* (*pietriș*, *stufăriș*), *-iște* (*porumbiște*, *miriște*), *-ăraie* (*colbăraie*, *apăraie*).
  - **Sufixe de agent:** indică profesia sau îndeletnicirea: *-ar* (*grădinar*, *zidar*, *strungar*), *-tor* (*scriitor*, *croitor*), *-giu* (*geamgiu*, *macaragiu*), *-ist* (*fotbalist*, *tractorist*), *-or* (*dirijor*, *contor*).
  - **Sufixe moționale:** formează femininul de la masculin sau invers (*profesor* → *profesoară*, *preot* → *preoteasă*, *tigru* → *tigroaică*, *cioară* → *cioroi*, *rață* → *rățoi*, *gâscă* → *gâscan*).
  - **Sufixe pentru nume de locuitori:** *-ean* (*clujean*, *băcăuan*, *timișean*), *-an* (*dornean*, *bistrițean*), *-ot* (*cairot*, *sofiot*, *tokiot*), *-it* (*moscovit*), *-in* (*florentin*).

#### 3. Clasificarea prefixelor:
- **Prefixe negative / privative:** *ne-* (*neom*, *necinstit*), *in-/im-* (*incert*, *impar*), *i-* (*ilegal*, *ilicit*), *des-/dez-* (*desface*, *dezarma*).
- **Prefixe iterative (arată repetiția):** *re-* (*rescrie*, *reface*), *răs-/răz-* (*răsciti*, *răzgândi*).
- **Prefixe cu sens superlativ / de intensitate:** *arhi-* (*arhiplin*, *arhicunoscut*), *supra-* (*supradimensionat*), *hiper-* (*hipercorect*), *ultra-* (*ultramodern*), *extra-* (*extraordinar*), *prea-* (*preafrumos*), *stră-* (*străvechi*).
- **Prefixe spațiale și temporale:** *ante-* (*antebelic*), *post-* (*postbelic*), *pre-* (*preuniversitar*), *inter-* (*interfață*, *internațional*), *trans-* (*transcarpatic*), *sub-* (*subteran*).
- **Prefixarea multiplă:** *ne-în-frunzit*, *re-îm-pădurit*, *ne-re-în-cărcat*.

Observație: Singurul prefix din limba română care se leagă obligatoriu prin cratimă este prefixul *ex-* cu sensul de „fost”: *ex-director*, *ex-ministru*, *ex-președinte*.

---

### B. COMPUNEREA (MIJLOC INTERN)

Procedeu de formare a cuvintelor prin unirea a două sau mai multe cuvinte distincte:

#### 1. Compunerea prin sudare (contopire):
Elementele componente se scriu într-un singur cuvânt:
- Substantive: *dreptunghi*, *botgros*, *bunăvoință*, *untdelemn*, *lungmetraj*, *Câmpulung*.
- Adjective: *binecuvântat*, *atotputernic*, *clarvăzător*.
- Pronume și numerale: *fiecare*, *niciunul*, *altceva*, *doisprezece*, *treizeci*.
- Adverbe: *oricum*, *altcumva*, *devreme*, *deseori*.
- Verbe: *a binevoi*, *a binecuvânta*.

#### 2. Compunerea prin alăturare (parataxă):
- **Cu cratimă:** *floarea-soarelui*, *gura-leului*, *câine-lup*, *prim-ministru*, *rea-voință*, *bloc-turn*, *locotenent-colonel*, *nord-est*, *după-amiază*, *Făt-Frumos*.
- **Fără cratimă:** *Baia Mare*, *Vatra Dornei*, *Turnu Măgurele*, *Marea Neagră*, *de la*, *de pe*.

#### 3. Compunerea prin abreviere:
- **Din inițiale (sigle):** *C.F.R.*, *O.N.U.*, *N.A.T.O.*, *I.P.J.*, *B.C.E.*
- **Din fragmente de cuvinte (acronime):** *TAROM*, *AGERPRES*, *Romgaz*, *Plafar*, *Aprozar*.

#### 4. Compunerea savantă (cu prefixoide și sufixoide):
Elemente de compunere provenite din greacă sau latină, cu sens lexical de sine stătător:
- **Prefixoide:** *tele-* (la distanță: *televiziune*), *bio-* (viață: *biologie*), *geo-* (pământ: *geografie*), *hidro-* (apă: *hidrocentrală*), *aero-* (*aerodrom*), *micro-* (*microscop*), *macro-* (*macroeconomie*).
- **Sufixoide:** *-logie* (studiu), *-fob* (care se teme), *-fil* (iubitor), *-grafie* (scriere), *-tecă* (colecție: *bibliotecă*).

---

### C. CONVERSIUNEA (SCHIMBAREA VALORII GRAMATICALE)

Trecerea unui cuvânt de la o parte de vorbire la alta, dobândind proprietățile morfologice și funcțiile sintactice ale noii clase.

#### I. Substantivizarea (trecerea la clasa substantivului):
1. **Din adjectiv (prin articulare):** *Frumosul* din artă încântă privirea; *Harnicul* are de toate; *leneșul* mai mult aleargă; *albastrul* cerului.
2. **Din verb la participiu:** *Rănitul* a fost transportat la spital; *invitatul* a sosit; *înecatul* a fost salvat.
3. **Din verb la gerunziu (prin desinențe acordate și articulare):** *Suferindul* a adormit; *aburinda* cafea.
4. **Din verb la supin:** *Cititul* cărților îmbogățește mintea; *culesul* viilor; *mersul* pe jos.
5. **Din adverb (prin articulare):** *Aproapele* tău; *binele* făcut nu se uită; *răul* produs; drumul are un *încolo* și un *încoace*.
6. **Din pronume:** *Eul* liric își exprimă trăirile; *sinele* profund; s-a supărat pentru un *nimic*.
7. **Din numeral:** A luat un *zece* la examen; *dublul* sumei; *zecile* de spectatori.
8. **Din interjecție:** *Un oftat* prelung; *tic-tacul* ceasornicului; *oful* inimii; *vaiul* celor necăjiți.

#### II. Adjectivizarea (trecerea la clasa adjectivului):
1. **Din verb la participiu:** Fereastră *deschisă*; copil *lăudat*; carte *citită*.
2. **Din verb la gerunziu (gerunziu acordat):** Mână *tremurândă*; steaguri *fluturânde*; răni *sângerânde*; ochi *scânteietori*.
3. **Din adverb (adjective invariabile):** Haine *gata*; fată *bine*; oameni *astfel*; zi *altfel*.
4. **Din substantiv (nume de culori invariabile):** Rochie *bej*; ochi *maro*; cămăși *crem*; pantaloni *oranj*.
5. **Din pronume:** Toate pronumele (posesive, demonstrative, nehotărâte, negative, relative, interogative, de întărire) devin **adjective pronominale** când determină un substantiv și se acordă cu el: *acest* om, cartea *mea*, *fiecare* elev, *niciun* motiv.

#### III. Adverbializarea (trecerea la clasa adverbului):
1. **Din adjectiv:** Când determină un verb sau un alt adjectiv: Vorbește *frumos*; explică *clar*; scrie *admirabil*; cântă *teribil* de bine.
2. **Din verb la participiu:** Vorbește *răgușit*; explică *deslușit*; merge *împiedicat*; privește *deschis*.
3. **Din substantive de timp (zile, anotimpuri, momente ale zilei):** Când stau pe lângă un verb fără prepoziție și fără atribut: Muncește *ziua*; citește *seara*; *toamna* se numără bobocii; pleacă *dimineața*.
   - Atenție: Dacă au atribut sau prepoziție, rămân substantive: *Toamna aceasta a fost caldă* (substantiv, subiect); *La toamnă mergem la facultate* (substantiv cu prepoziție).
4. **Din substantive cu valoare de superlativ absolut:** *frumoasă foc* (= foarte frumoasă), *prost bâtă*, *beat criță*, *singur cuc*, *ud leoarcă*, *răcit cobză*, *adormit buștean*, *curat lună*, *gol pușcă*, *îndrăgostit lulea*.
5. **Din pronume relativ / interogativ:** *Ce* frumos cântă! (= cât de frumos).

#### IV. Prepoziționalizarea (trecerea la clasa prepoziției):
1. **Din adverbe prin articulare enclitică (cer cazul Genitiv):** *Înaintea* casei, *înapoia* gardului, *împrejurul* curții, *deasupra* mesei, *dedesubtul* cărții, *înăuntrul* clădirii.
   - Observație de topică: Un enunț se poate termina cu un adverb (*Merg înainte*), dar **nu se poate termina niciodată** cu o prepoziție (*Merg înaintea...* necesită obligatoriu un substantiv/pronume în Genitiv).
2. **Din substantive la Acuzativ/Dativ:** *Grație* sprijinului, *mulțumită* efortului, *datorită* profesorului (cer cazul Dativ).

#### V. Conjuncționalizarea:
Adverbele relative (*unde*, *cum*, *când*, *cât*) devin conjuncții subordonatoare când își pierd rolul de circumstanțial:
- *cum* cauzal sau temporal: *Cum a întârziat, nu a mai intrat* (cum = deoarece, conjuncție cauzală); *Cum a sosit, a și plecat* (temporală).
- *unde* cauzal: *Unde nu învățase, a picat testul* (unde = deoarece).
- *când* condițional: *Când aș fi știut, veneam mai devreme* (când = dacă).
- *cât* concesiv: *Cât e muntele de înalt, tot se tocește* (cât = deși).

---

## `MOR-001` — Morfologie — numeralul

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[LEX-001]], [[MOR-002]], [[MOR-003]], [[MOR-004]], [[MOR-005]]
- **source:** `teorie-extrasa.txt:880–1079`

### Conținut extras și normalizat

- **Definiție:** Numeralul este partea de vorbire flexibilă care exprimă o cantitate numerică a obiectelor, ordinea numerică a acestora sau repartizarea lor.
- **Valori morfologice fundamentale:**
  1. **Valoare substantivală:** Stă singur în comunicare (înlocuind substantivul numărat sau exprimând numărul abstract). Își asumă funcțiile sintactice ale substantivului (subiect, complement, nume predicativ etc.).
  2. **Valoare adjectivală:** Însoțește un substantiv și se acordă cu acesta în gen și caz. Îndeplinește funcția sintactică de **atribut adjectival**.
  3. **Valoare adverbială:** Determină un verb, un adjectiv sau un adverb, arătând de câte ori sau în ce măsură se realizează o acțiune ori o caracteristică. Îndeplinește funcția de **circumstanțial de mod**.

---

### A. NUMERALUL CARDINAL

Exprimă un număr abstract sau un număr determinat de obiecte:
- **După structură:**
  - **Simple:** *unu*, *doi*, *trei*, *patru*, *cinci*, *șase*, *șapte*, *opt*, *nouă*, *zece*, *sută*, *mie*, *milion*, *miliard*.
  - **Compuse:**
    - De la 11 la 19 (numeral + *-spre-* + *-zece*): *unsprezece*, *doisprezece/douăsprezece*, *treisprezece*, *patrusprezece*, *cincisprezece*, *șaisprezece*, *șaptesprezece*, *optsprezece*, *nouăsprezece*;
    - Zecile (numeral + *-zeci*): *douăzeci*, *treizeci*, *patruzeci*, *cincizeci*, *șaizeci*, *șaptezeci*, *optzeci*, *nouăzeci*;
    - Zecile combinate cu unități (legate prin conjuncția *și*): *douăzeci și unu*, *patruzeci și cinci*;
    - Sutele, miile, milioanele compuse: *o sută*, *două sute*, *o mie*, *trei mii*, *două milioane*.
- **Prepoziția *de* la numerale:**
  - De la 1 la 19, numeralul se leagă direct de substantiv (*doi elevi*, *paisprezece cărți*).
  - De la 20 în sus (cu excepția compuselor terminate în 1-19), legătura cu substantivul se realizează obligatoriu prin prepoziția *de*: *douăzeci de elevi*, *o sută de cărți*, dar *o sută paisprezece elevi*.
- **Flexiunea cazuală la cardinal:**
  - Numeralul *unu/una* și *doi/două* au forme distincte de gen: *un băiat / o fată*, *doi băieți / două fete*, *doisprezece băieți / douăsprezece fete*.
  - La Genitiv-Dativ: *unui băiat / unei fete*, *ambilor / ambelor*, *la doi băieți* sau *a doi băieți* (marcare prepozițională analitică).

---

### B. NUMERALUL ORDINAL

Exprimă ordinea sau locul ocupat de un obiect prin numărare într-o serie:
- **Structura numeralului ordinal:**
  - Masculin: articol posesiv *al* + numeral cardinal + articol hotărât *-le-* + particula *-a*: *al doilea*, *al treilea*, *al zecelea*, *al o sutălea*, *al două sutelea*, *al miilea*, *al două miilea*, *al milionulea*, *al două milioanelea*.
  - Feminin: articol posesiv *a* + numeral cardinal + articol hotărât *-a*: *a doua*, *a treia*, *a zecea*, *a o suta*, *a două suta*, *a mia*, *a două mia*, *a milioana*.
- **Forme speciale pentru primul termen:**
  - *primul / prima*, *întâiul / întâia* (au flexiune completă de adjectiv).
- **Valori și funcții sintactice:**
  - Valoare adjectivală: *A promovat al doilea candidat.* (atribut adjectival);
  - Valoare substantivală: *Al doilea a răspuns corect.* (subiect); *I-am dat cartea celui de-al doilea.* (complement indirect).

Observație: Cuvintele care indică sfârșitul seriei numerice (*ultimul*, *ultima*, *cel din urmă*, *cea din urmă*) sunt **adjective** (sau locuțiuni adjectivale), nu numerale.

---

### C. NUMERALUL COLECTIV

Exprimă ideea de însoțire, asociere sau grup:
1. **Forme simple:** *amândoi*, *amândouă*, *ambii*, *ambele*.
   - **Regulă strictă de articulare a substantivului determinat:**
     - După *ambii* și *ambele*, substantivul **nu se mai articulează**: *ambii elevi*, *ambele profesoare*, *ambii copaci*.
     - După *amândoi* și *amândouă*, substantivul **se articulează obligatoriu**: *amândoi colegii*, *amândouă studentele*.
   - **Flexiunea la Genitiv-Dativ:** *ambilor*, *ambelor*, *amândurora*: *Părerea amândurora contează.*
2. **Forme compuse:** *tustrei*, *tuspatru*, *tuscinci*, *toți trei*, *toate patru*, *câteșitrei*.
3. **Funcții sintactice:**
   - Atribut adjectival (valoare adjectivală): *Ambii elevi au promovat examenul.*
   - Subiect (valoare substantivală): *Amândoi au sosit la timp.*
   - Complement direct: *I-am felicitat pe amândoi.*
   - Complement indirect: *Mă bazez pe amândoi.* / *Le-am oferit amândurora premii.*
   - Atribut substantival prepozițional / genitival: *Cărțile a tustrei sunt noi.* / *Succesul amândurora ne bucură.*

---

### D. NUMERALUL MULTIPLICATIV

Arată în ce proporție numerică crește o cantitate sau o acțiune:
- **Forme derivate parasintetic (cu prefixul *în- / îm-* și sufixul *-it*):** *întreit*, *împătrit*, *încincit*, *înșesit*, *înzecit*, *însutit*, *înmiit*.
- **Forme neologice:** *dublu*, *triplu*, *cvadruplu*.
- **Valori morfologice:**
  - **Valoare adjectivală:** Când determină un substantiv (*efort dublu*, *câștig întreit*) → atribut adjectival.
  - **Valoare adverbială:** Când determină un verb (*a muncit dublu*, *a plătit înzecit*) → circumstanțial de mod.
  - **Valoare substantivală:** Când este articulat (*Dublul acestei sume reprezintă chiria*) → subiect / nume predicativ.

---

### E. NUMERALUL DISTRIBUTIV

Exprimă repartizarea obiectelor în grupuri egale, fiind format cu adverbul *câte*:
- **Forme:** *câte unu*, *câte una*, *câte doi*, *câte două*, *câte trei*, *câte zece*.
- **Valori și funcții sintactice:**
  - Valoare adjectivală: *Câte doi elevi intră în laborator.* (atribut adjectival).
  - Valoare substantivală: *Câte trei s-au apropiat de catedră.* (subiect); *I-am ascultat pe câte trei.* (complement direct).
  - Valoare adverbială: *Înaintau doi câte doi.* (circumstanțial de mod).

---

### F. NUMERALUL FRACȚIONAR

Denumește o parte, o fracțiune sau un procent dintr-un întreg:
- **Forme:** *o doime*, *o treime*, *o pătrime*, *o cincime*, *o zecime*, *o sutime*, *o miime*; *un sfert*, *o jumătate*, *trei optimi*, *cinci la sută (5%)*.
- **Valoare morfologică:** Are exclusiv comportament și flexiune de **substantiv**: primește determinanți, se declină cazual și se articulează (*O treime din elevi a lipsit*).

---

### G. NUMERALUL ADVERBIAL (DE REPETIȚIE)

Indică de câte ori se realizează o acțiune sau de câte ori o însușire este superioară alteia:
- **Forme:** *o dată*, *de două ori*, *de trei ori*, *de zece ori*, *de o sută de ori*, *de ambele dăți*, *încă o dată*.
- **Funcții sintactice:**
  - **Circumstanțial de mod:** Când determină un verb: *A repetat de două ori.* / *A citit o singură dată.*
  - **Atribut adverbial:** Când determină un substantiv de origine verbală: *Prășitul de două ori a adus o recoltă bogată.*
- **Numeralul ordinal adverbial:** Structuri precum *prima oară*, *a doua oară*, *în primul rând*, *în al doilea rând*.

---

### H. NUMERALUL APROXIMATIV

Exprimă o cantitate numerică aproximativă:
- **Structuri:** *vreo zece*, *la cincizeci de oameni*, *circa douăzeci*, *aproximativ treizeci*, *zece-cincisprezece*.
- **Atenție la pleonasme:** Este interzisă alăturarea a doi indici de aproximare: *în jur de vreo zece* (greșit, pleonasm); *circa aproximativ douăzeci* (greșit). Se spune corect: *în jur de zece* sau *vreo zece*.

---

### I. VALORILE MORFOLOGICE ALE LUI *UN* ȘI *O*

Cuvintele *un* și *o* sunt polivalente morfologic. Se disting prin context astfel:

#### 1. Numeral cardinal
- Când numără strict obiectele în contrast cu alte cifre (*O studentă și doi studenți erau în sală*);
- Când este precedat de adverbe restrictive sau de aproximație: *numai un*, *doar un*, *măcar un*, *cel puțin un*, *încă un*, *un singur*: *Am cumpărat doar un bilet.*
- În proverbe și expresii bazate pe numărare: *Cu o floare nu se face primăvară.*

#### 2. Articol nehotărât
- Când introduce un substantiv nou în discurs, fără a sublinia cantitatea numerică: *Pe alee mergea o studentă.* / *Am zărit un cățel.*

#### 3. Pronume personal (doar forma *o*)
- Forma clitică neaccentuată de feminin Acuzativ: *O ajut pe bunica.*
- Cu valoare neutră (fără funcție sintactică) în expresii și locuțiuni verbale: *a luat-o la sănătoasa*, *a dat-o în bară*, *a feclit-o*.

#### 4. Adjectiv pronominal nehotărât
- Când apare în corelație binară cu *altul / alta*: *O studentă citea, alta desena.* / *Într-un loc plouă, în altul e soare.*

#### 5. Verb auxiliar
- Pentru perfectul compus popular: *El o fost la târg.*
- Pentru viitorul popular: *O să merg mâine.*

#### 6. Interjecție (doar forma *O*)
- Fără funcție sintactică, exprimând o trăire sau o adresare directă: *O, ce priveliște încântătoare!*

---

## `MOR-002` — Morfologie — pronumele

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-001]], [[MOR-003]], [[MOR-004]], [[MOR-005]], [[MOR-006]], [[SIN-001]]
- **source:** `teorie-extrasa.txt:1080–1497`

### Conținut extras și normalizat

- **Definiție:** Pronumele este partea de vorbire flexibilă care ține locul unui substantiv într-o comunicare, evitând repetiția supărătoare.
- **Clasificarea pronumelor:**
  - **Pronume cu categoria persoanei:** personal, de politețe, reflexiv, de întărire, posesiv.
  - **Pronume fără categoria persoanei:** demonstrativ, interogativ, relativ, nehotărât, negativ.
- **Trecerea la adjectiv pronominal (prin conversiune):**
  - Când determină un substantiv și se acordă cu acesta în gen, număr și caz, majoritatea pronumelor devin **adjective pronominale** și îndeplinesc funcția sintactică de **atribut adjectival**.
  - **Nu devin niciodată adjective pronominale:** pronumele personal, pronumele reflexiv, pronumele de politețe, pronumele *cine*, *nimeni*, *nimic*, *cel ce*, *ceea ce*, *cineva*, *oricine*.

---

### A. PRONUMELE PERSONAL

Desemnează persoanele care participă direct sau indirect la actul comunicării:

#### 1. Formele flexionare ale pronumelui personal:
- **Cazul Nominativ:**
  - Persoana I: *eu* (sg.), *noi* (pl.);
  - Persoana a II-a: *tu* (sg.), *voi* (pl.);
  - Persoana a III-a: *el / ea* (sg.), *ei / ele* (pl.).
- **Cazul Acuzativ:**
  - Persoana I: forme accentuate *(pe) mine*, *(pe) noi*; forme neaccentuate (clitice): *mă, m-, -mă, -m* (sg.), *ne, ne-, -ne* (pl.);
  - Persoana a II-a: forme accentuate *(pe) tine*, *(pe) voi*; forme neaccentuate: *te, te-, -te* (sg.), *vă, v-, -vă, -v* (pl.);
  - Persoana a III-a: forme accentuate *(pe) el*, *(pe) ea*, *(pe) ei*, *(pe) ele*; forme neaccentuate: *îl, l-, -l* (masc. sg.), *o, -o* (fem. sg.), *îi, i-, -i* (masc. pl.), *le, le-, -le* (fem. pl.).
- **Cazul Dativ:**
  - Persoana I: forme accentuate *mie*, *nouă*; forme neaccentuate: *îmi, mi-, -mi* (sg.), *ne, ni, ne-, -ne* (pl.);
  - Persoana a II-a: forme accentuate *ție*, *vouă*; forme neaccentuate: *îți, ți-, -ți* (sg.), *vă, vi, v-, -vă* (pl.);
  - Persoana a III-a: forme accentuate *lui*, *ei*, *lor*; forme neaccentuate: *îi, i-, -i* (sg. masc./fem.), *le, li, le-, -le* (pl. masc./fem.).
- **Cazul Genitiv:** Are forme doar pentru persoana a III-a: *(al, a, ai, ale) lui*, *(al, a, ai, ale) ei*, *(al, a, ai, ale) lor*. Pentru persoanele I și II se utilizează adjectivele posesive.
- **Cazul Vocativ:** Are forme doar pentru persoana a II-a: *Tu!*, *Voi!*.

#### 2. Pronumele personal de persoana a III-a de tipul *dânsul*:
Formele *dânsul*, *dânsa*, *dânșii*, *dânsele* (G-D: *dânsului*, *dânsei*, *dânșilor*, *dânselor*) sunt considerate în gramatica academică **pronume personale**, nu de politețe.

#### 3. Funcții sintactice:
- **Nominativ:** Subiect (*El a sosit primul*); Nume predicativ (*Câștigătorii sunt ei*).
- **Acuzativ:**
  - Complement direct (*Îi cunosc pe ei*);
  - Complement prepozițional (*Mă bazez pe el*; *Mă gândesc la voi*);
  - Complement de agent (*Lucrarea a fost redactată de către el*);
  - Circumstanțial de loc (*Am mers la el*);
  - Circumstanțial de mod (*Cânți mai frumos decât el*);
  - Circumstanțial de timp (*Am plecat odată cu ei*);
  - Atribut pronominal prepozițional (*Cadoul de la tine mi-a plăcut*).
- **Dativ:**
  - Complement indirect (*Le dau lor cărțile*);
  - Dativ posesiv (echivalent cu un posesiv): *Își spală mâinile*; *Rochia-ți e splendidă*;
  - Dativ etic (fără funcție sintactică, nuanță afectivă): *Mi ți-l prinde și mi ți-l ceartă*;
  - Circumstanțial de mod (*S-a comportat asemenea lui*);
  - Circumstanțial de cauză (*Datorită ție am reușit*).
- **Genitiv:**
  - Atribut pronominal genitival (*Părerea lui contează*);
  - Circumstanțial de cauză (*Din cauza lui am întârziat*);
  - Circumstanțial de loc (*S-a așezat în fața lui*).

---

### B. PRONUMELE PERSONAL DE POLITEȚE (REVERENȚIAL)

Exprimă respectul vorbitorului față de interlocutor sau față de o terță persoană:
- **Forme proprii:**
  - Persoana a II-a singular: *dumneata* (G-D: *dumitale*);
  - Persoana a II-a plural / adresare de politețe: *dumneavoastră* (invariabil cazual);
  - Persoana a III-a: *dumnealui*, *dumneaei*, *dumnealor* (invariabile cazual); *dumneasa* (G-D: *dumisale*).
- **Locuțiuni pronominale de politețe:** *Domnia Sa*, *Domnia Ta*, *Domnia Voastră*, *Luminăția Sa*, *Măria Sa*, *Excelența Sa*, *Sfinția Sa*.

---

### C. PRONUMELE ȘI ADJECTIVUL PRONOMINAL DE ÎNTĂRIRE

Subliniază identitatea persoanei la care se referă:
- **Forme flexionare:**
  - Masculin singular: *eu însumi*, *tu însuți*, *el însuși*;
  - Feminin singular: *eu însămi*, *tu însăți*, *ea însăși* (la G-D sg. feminin: *mie însemi*, *ție înseți*, *fetei înseși*);
  - Masculin plural: *noi înșine*, *voi înșivă*, *ei înșiși*;
  - Feminin plural: *noi însene*, *voi însevă*, *ele însele / înseși*.
- **Rol sintactic:** În limba contemporană se folosește aproape exclusiv ca **adjectiv pronominal de întărire** (atribut adjectival), acordându-se în gen, număr și caz cu substantivul sau pronumele determinat (*Profesorul însuși a explicat teorema*; *Fata însăși a recunoscut greșeala*).

---

### D. PRONUMELE ȘI ADJECTIVUL PRONOMINAL POSESIV

Înlocuiește numele posesorului și al obiectului posedat:
- **Forme după posesori și obiecte posedate:**
  - Un singur posesor, un singur obiect: *al meu / a mea*, *al tău / a ta*, *al său / a sa*.
  - Un singur posesor, mai multe obiecte: *ai mei / ale mele*, *ai tăi / ale tale*, *ai săi / ale sale*.
  - Mai mulți posesori, un singur obiect: *al nostru / a noastră*, *al vostru / a voastră*.
  - Mai mulți posesori, mai multe obiecte: *ai noștri / ale noastre*, *ai voștri / ale voastre*.
- **Atenție:** Pentru persoana a III-a cu mai mulți posesori nu există pronume posesiv propriu; se folosește pronumele personal în Genitiv: *al lor*, *a lor*, *ai lor*, *ale lor* (acesta rămâne pronume personal).
- **Conversiunea în adjectiv pronominal posesiv:**
  - Când stă după substantiv, își pierde articolul posesiv din față: *colegul meu*, *cartea mea*, *părinții noștri* (atribut adjectival).
  - Păstrează articolul în trei situații speciale: când este antepus (*al meu copil*), când substantivul are alt atribut (*acest coleg al meu*) sau când substantivul este articulat nehotărât (*un profesor al meu*).
- **Excepție cazuală:** După prepoziții care cer Genitivul (*în fața*, *în spatele*), adjectivul posesiv se acordă formal cu centrul grupului prepozițional la **Acuzativ**: *în fața mea* (*mea* este adjectiv posesiv la cazul Acuzativ, determinat de locuțiunea prepozițională).

---

### E. PRONUMELE ȘI ADJECTIVUL PRONOMINAL DEMONSTRATIV

Indică apropierea, depărtarea, identitatea sau diferențierea obiectului în spațiu, timp sau discurs:
1. **De apropiere:** *acesta*, *aceasta*, *aceștia*, *acestea* (G-D sg: *acestuia*, *acesteia*; G-D pl: *acestora*). Forme populare: *ăsta*, *asta*, *ăștia*, *astea*.
2. **De depărtare:** *acela*, *aceea*, *aceia*, *acelea* (G-D sg: *aceluia*, *aceleia*; G-D pl: *acelora*). Forme populare: *ăla*, *aia*, *ăia*, *alea*.
3. **De identitate:** *același*, *aceeași*, *aceiași*, *aceleași* (G-D sg: *aceluiași*, *aceleiași*; G-D pl: *acelorași*).
4. **De diferențiere:** *celălalt*, *cealaltă*, *ceilalți*, *celelalte* (G-D sg: *celuilalt*, *celeilalte*; G-D pl: *celorlalți*, *celorlalte*).
- **Valoare adjectivală:** Când determină un substantiv devine adjectiv pronominal demonstrativ (postpus: *băiatul acesta*; antepus: *acest băiat*).

---

### F. PRONUMELE ȘI ADJECTIVUL PRONOMINAL NEHOTĂRÂT

Înlocuiește un substantiv fără a da indicații precise asupra identității sau cantității acestuia:
- **Forme simple:** *unul*, *altul*, *tot*, *toată*, *toți*, *toate*, *mult*, *puțin*, *atât*.
- **Forme compuse:** *fiecare*, *oricine*, *orice*, *oricare*, *cineva*, *ceva*, *careva*, *altcineva*, *altceva*, *oarecine*.
- **Locuțiuni pronominale nehotărâte:** *cine știe cine*, *te miri ce*, *nu știu cine*, *nu știu ce*, *câte și mai câte*.
- **Valoare adjectivală:** Când determină un substantiv devine adjectiv pronominal nehotărât (*fiecare elev*, *orice idee*, *mulți spectatori*).
  - Atenție: Pronumele *cineva*, *altcineva*, *oricine* **nu devin niciodată adjective**.

---

### G. PRONUMELE ȘI ADJECTIVUL PRONOMINAL NEGATIV

Apare în enunțuri negative și neagă prezența sau existența obiectului:
- **Forme:**
  - Exclusiv pronume: *nimeni* (referitor la persoane), *nimic* (referitor la lucruri). Nu devin niciodată adjective.
  - Pronume și adjective pronominale: *niciunul*, *niciuna* (pronume) vs. *niciun*, *nicio* (adjective pronominale negative: *niciun elev*, *nicio problemă*).

---

### H. PRONUMELE ȘI ADJECTIVUL PRONOMINAL INTEROGATIV ȘI RELATIV

- **Interogativul:** Înlocuiește substantivul așteptat ca răspuns la o întrebare directă sau indirectă: *cine?*, *ce?*, *care?*, *cât?*, *câtă?*, *câți?*, *câte?*.
  - *Cine* nu devine adjectiv. *Care*, *ce*, *cât* devin adjective interogative când precedă un substantiv (*Care elev a răspuns?*).
- **Relativul:** Are aceleași forme ca cel interogativ (plus compusele *cel ce*, *ceea ce*). Are dublu rol: element de relație (conector subordonator) la nivel de frază și funcție sintactică în propoziția pe care o introduce:
  - *Știu / cine te-a căutat./* (*cine* = pronume relativ, funcție de subiect în subordonată).
  - *Iată cartea / pe care am citit-o./* (*pe care* = complement direct).
- **Acordul încrucișat al pronumelui relativ *care* la Genitiv:**
  În structura *copilul a cărui mamă a venit*, forma pronumelui se acordă în gen și număr cu posesorul precedent (*copilul* → *cărui*), iar articolul posesiv se acordă în gen și număr cu obiectul posedat următor (*mamă* → *a*).

---

### I. PRONUMELE REFLEXIV

Arată că acțiunea verbului se răsfrânge asupra subiectului care o săvârșește:
- **Particularități morfologice:**
  - Are forme proprii **doar pentru persoana a III-a**:
    - Acuzativ: forma accentuată *pe sine*; forme neaccentuate *se, s-, -se, -s-*.
    - Dativ: forma accentuată *sie / sieși*; forme neaccentuate *își, și-, -și*.
  - Pentru persoanele I și II împrumută formele neaccentuate ale pronumelui personal: *mă*, *te*, *ne*, *vă* (Acuzativ); *îmi*, *îți*, *ne*, *vă* (Dativ). Criteriul de recunoaștere: identitatea de persoană și număr cu verbul (*eu mă spăl* = reflexiv; *el mă vede* = personal).
- **Valori sintactice:**
  1. **Cu funcție sintactică (reflexiv obiectiv):**
     - Complement direct: *El se laudă pe sine.*
     - Complement indirect în Dativ: *Își acordă o șansă.* / *Își cumpără cărți.*
     - Dativ posesiv (atribut pronominal): *Și-a pierdut cheile.*
  2. **Fără funcție sintactică (reflexiv parte din verb):**
     - În verbe la diateza reflexivă dinamică, evenimențială, pasivă sau impersonală: *se gândește*, *se înseninează*, *se aude un zgomot*, *se știe că va ploua*.

---

## `MOR-003` — Morfologie — articolul

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-002]], [[MOR-004]], [[MOR-005]], [[LEX-002]]
- **source:** `teorie-extrasa.txt:1498–1585`

### Conținut extras și normalizat

- **Definiție:** Articolul este partea de vorbire flexibilă auxiliară (cuvânt-unealtă) lipsită de autonomie semantică și sintactică, care însoțește un substantiv sau o altă parte de vorbire substantivizată, arătând gradul de individualizare a obiectului denumit.
- **Trăsături distinctive:**
  - Nu îndeplinește singur nicio funcție sintactică; se analizează întotdeauna împreună cu partea de vorbire pe care o însoțește;
  - Este singura parte de vorbire care nu poate forma locuțiuni;
  - Este principalul instrument morfologic de realizare a **substantivizării** prin conversiune în limba română.

---

### A. ARTICOLUL HOTĂRÂT

Arată că obiectul denumit este bine cunoscut vorbitorilor, fiind individualizat în mod precis:
- **Articolul hotărât enclitic (alipit la sfârșitul cuvântului):**
  - **Masculin singular:** *-ul* (*omul*, *băiatul*), *-le* (*fratele*, *câinele*);
  - **Masculin plural:** *-i* (*oamenii*, *băieții*, *frații*);
  - **Feminin singular:** *-a* (*casa*, *cartea*, *femeia*);
  - **Feminin plural:** *-le* (*casele*, *cărțile*, *femeile*);
  - **Neutru singular:** *-ul* (*scaunul*, *teatrul*), *-le* (*numele*);
  - **Neutru plural:** *-le* (*scaunele*, *teatrele*);
  - **Genitiv-Dativ singular:** *-lui* (masculin/neutru: *omului*, *scaunului*), *-i* (feminin: *casei*, *mamei*);
  - **Genitiv-Dativ plural:** *-lor* (toate genurile: *oamenilor*, *caselor*, *scaunelor*).
- **Articolul hotărât proclitic (*lui*):**
  - Stă înaintea substantivelor proprii masculine de persoană terminate în consoană la Genitiv-Dativ: *cartea lui Mihai*, *i-am spus lui Andrei*.
  - Înaintea substantivelor feminine nume de persoană neadaptate sau terminate în consoană: *fusta lui Carmen*, *i-am dat lui Lili*.
  - Înaintea numelor lunilor anului: *zilele lui ianuarie*.
  - Înaintea unor substantive de rudenie/apelative cu structură specială: *părerea lui nenea*, *lui tanti*, *lui Vodă*.

---

### B. ARTICOLUL NEHOTĂRÂT

Arată că obiectul denumit este prezentat în mod general, fără a fi individualizat precis în raport cu altele din aceeași categorie:
- **Este întotdeauna proclitic (stă în fața substantivului):**
  - **Masculin / Neutru singular:** *un* (N-Ac: *un copil*, *un scaun*), *unui* (G-D: *unui copil*, *unui scaun*);
  - **Feminin singular:** *o* (N-Ac: *o fată*, *o carte*), *unei* (G-D: *unei fete*, *unei cărți*);
  - **Plural (toate genurile):** *niște* (N-Ac: *niște copii*, *niște fete*, *niște scaune*), *unor* (G-D: *unor copii*, *unor fete*, *unor scaune*).
- **Atenție la valorile lui *niște*:**
  - În fața unui substantiv numărabil la plural este **articol nehotărât** (*niște elevi*, *niște cărți*);
  - În fața unui substantiv defectiv de plural (nume de materie/alimente) are valoare de **adjectiv pronominal nehotărât** cu sensul de „puțin/o cantitate de”: *niște brânză*, *niște lapte*, *niște aur*.

---

### C. ARTICOLUL POSESIV (GENITIVAL)

Leagă un substantiv în cazul Genitiv sau un adjectiv posesiv de substantivul regent (obiectul posedat):
- **Forme:**
  - Masculin singular: *al* (*un caiet al elevului*);
  - Feminin singular: *a* (*o carte a elevului*);
  - Masculin plural: *ai* (*niște colegi ai elevului*);
  - Feminin și Neutru plural: *ale* (*niște cărți ale elevului*, *stilouri ale băiatului*);
  - Genitiv-Dativ plural (rar/învechit): *alor* (*alor mei*).
- **Regulă de aur privind acordul:**
  Articolul posesiv **se acordă obligatoriu în gen și număr cu obiectul posedat** (substantivul regent din față), nu cu posesorul:
  - *o carte* (fem. sg.) → *a elevilor* (posesor pl.);
  - *niște pantofi* (masc. pl.) → *ai fetei* (posesor fem. sg.).
- **Apariția articolului posesiv este obligatorie:**
  1. Când între substantivul regent și genitiv se interpune un adjectiv sau alt determinant (*cartea cea nouă a colegului*);
  2. Când regentul este nearticulat sau articulat nehotărât (*carte a elevului*, *o carte a elevului*);
  3. În componența numeralului ordinal (*al doilea*, *a treia*).

---

### D. ARTICOLUL DEMONSTRATIV (ADJECTIVAL)

Face legătura dintre un substantiv regent și un adjectiv determinant sau ajută la substantivizarea acestuia:
- **Forme:**
  - Masculin singular: *cel* (N-Ac), *celui* (G-D) (*băiatul cel cuminte*, *băiatului celui cuminte*);
  - Feminin singular: *cea* (N-Ac), *celei* (G-D) (*fata cea silitoare*, *fetei celei silitoare*);
  - Masculin plural: *cei* (N-Ac), *celor* (G-D) (*băieții cei harnici*, *băieților celor harnici*);
  - Feminin și Neutru plural: *cele* (N-Ac), *celor* (G-D) (*fetele cele frumoase*, *locurile cele bune*).
- **Contexte de utilizare:**
  1. Leagă un adjectiv sau o locuțiune adjectivală de substantivul determinat: *zâna cea isteață*, *omul cel cu dare de mână*.
  2. Intră în structura gradului superlativ relativ: *cel mai bun*, *cea mai pricepută*, *cei mai puțini*.
  3. Intră în componența unor nume proprii istorice: *Ștefan cel Mare*, *Mircea cel Bătrân*.
  4. Ajută la substantivizarea adjectivelor sau numeralelor: *Cei buni vor învinge.*; *Cea de-a doua a renunțat.*
- **Diferențierea față de pronumele demonstrativ:**
  Când *cel*, *cea*, *cei*, *cele* sunt urmate direct de o prepoziție sau de pronumele relativ *care*, ele sunt **pronume demonstrative** (formă scurtă):
  - *Cea / care vine / este colega mea./* (*cea* = pronume demonstrativ, subiect);
  - *Cel de acolo este fratele meu.* (*cel* = pronume demonstrativ).

---

## `MOR-004` — Morfologie — adjectivul

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-001]], [[MOR-002]], [[MOR-003]], [[MOR-005]]
- **source:** `teorie-extrasa.txt:1586–1742`

### Conținut extras și normalizat

- **Definiție:** Adjectivul este partea de vorbire flexibilă care exprimă o însușire a unui obiect (ființă, lucru, fenomen) și se acordă în gen, număr și caz cu substantivul sau substitutul acestuia pe care îl determină.

---

### FUNCȚIILE SINTACTICE ALE ADJECTIVULUI

1. **Atribut adjectival:** *Carte frumoasă, cinste cui te-a scris.* (în acord în gen, număr și caz cu substantivul regent).
2. **Nume predicativ:** *Cartea este frumoasă.* (cazul Nominativ, formează predicatul nominal împreună cu verbul copulativ).
3. **Circumstanțial de timp:** *O cunosc de mică.* / *Iepurii au mâncat varza de verde.*
4. **Circumstanțial de cauză:** *De bună ce era, toți o iubeau.*
5. **Circumstanțial de mod:** *El era mai mult mort decât viu.*
6. **Complement indirect:** *Din bun s-a făcut rău.* (Acuzativ cu prepoziție).

---

### CLASIFICAREA ADJECTIVELOR

#### I. După structură:
1. **Simple:** *bun*, *urât*, *mic*, *cald*, *harnic*.
2. **Compuse:**
   - Sudate într-un singur cuvânt: *rozalb*, *neoliberal*, *binecuvântat*, *sociocultural*, *băimărean*, *clarvăzător*, *atotputernic*, *cuminte*.
   - Scrise cu cratimă: *nou-născut*, *propriu-zis*, *româno-american*, *chimico-farmaceutic*, *greco-catolic*, *dulce-acrișor*.
3. **Locuțiuni adjectivale:** grupuri unitare de cuvinte cu valoare de adjectiv:
   - *cu dare de mână* (= generos, bogat)
   - *cu stare* (= înstărit)
   - *cu scaun la cap* (= chibzuit, înțelept)
   - *cu stea în frunte* (= remarcabil, ales)
   - *de seamă* / *de vază* / *de frunte* (= ilustru, important)
   - *de încredere* (= loial, fidel)
   - *de treabă* (= cumsecade)
   - *de geniu* (= genial)
   - *de milioane* / *de zile mari* (= extraordinar)
   - *de invidiat* (= excelent)
   - *de față* (= prezent)
   - *tobă de carte* (= învățat, erudit)
   - *într-o ureche* (= trăsnit, excentric)
   - *din topor* (= bădăran, grosolan)
   - *pestriț la mațe* (= perfid, răutăcios)
   - *numai piele și os* (= foarte slab)
   - *tot unu și unu* (= de elită)
   - *în floarea vârstei* (= tânăr)

---

#### II. După flexiune (terminații și forme flexionare):

Observație: Metodă practică de determinare a formelor și terminațiilor:
1. Alăturați adjectivul la singular pe lângă substantivele *băiat* (masculin) și *fată* (feminin) pentru a afla **numărul de terminații la nominativ singular** (1 sau 2).
2. Puneți adjectivul la plural (*băieți*, *fete*) și numărați câte forme distincte de pronunție/scriere există în total pentru toate cele 4 combinații (masc. sg., fem. sg., masc. pl., fem. pl.) pentru a afla **numărul de forme flexionare**.

##### 1. Adjective variabile:
- **Cu 2 terminații la singular:**
  - **Cu 4 forme flexionare:** *frumos, frumoasă, frumoși, frumoase*; *bun, bună, buni, bune*; *curat, curată, curați, curate*.
  - **Cu 3 forme flexionare:** *mic, mică, mici* (masc./fem. pl. identice); *adânc, adâncă, adânci*; *lung, lungă, lungi*; *larg, largă, largi*; *drag, dragă, dragi*; *auriu, aurie, aurii*; *românesc, românească, românești*.
- **Cu 1 terminație la singular (adjective terminate la sg. în consoană sau în *-e*):**
  - **Cu 2 forme flexionare (sg. vs. pl.):** *mare / mari*, *moale / moi*, *fierbinte / fierbinți*, *subțire / subțiri*, *limpede / limpezi*, *tulbure / tulburi*, *tare / tari*, *iute / iuți*, *dulce / dulci*, *dibaci / dibaci*.
  - **Cu 3 forme flexionare:** *vechi, veche, vechi*.

##### 2. Adjective invariabile:
Adjective care au o singură formă pentru toate genurile, numerele și cazurile:
- **Neologisme pentru denumirea culorilor:** *bej*, *mov*, *crem*, *havan*, *bleu*, *corai*, *gri*, *acaju* (= mahon), *lila*, *maro*, *kaki*, *roz*, *oliv*, *ecru*, *orange*, *indigo*, *bleumarin*.
- **Neologisme terminate în *-ce*:** *atroce*, *feroce*, *locvace*, *perspicace*, *eficace*, *sagace*, *vivace*, *motrice*, *propice*, *ferice*.
- **Cuvinte vechi, populare sau împrumuturi:** *coșcogea*, *dihai*, *ditamai*, *sadea*, *leoarcă*, *doldora*, *chic*, *gata*.

---

#### III. După sens și proveniență:
1. **Calificative (propriu-zise):** denumesc trăsături directe (*frumos*, *mic*, *cald*, *inteligent*).
2. **Determinative (provenite prin conversiune din alte părți de vorbire):**
   - **Adjective pronominale:** provenite din pronume prin acord cu substantivul (posesive, demonstrative, de întărire, relative, interogative, nehotărâte, negative);
   - **Adjective participiale:** provenite din verbe la participiu acordate (*pomi înfloriți*, *cămăși spălate*);
   - **Adjective gerunziale (gerunzii acordate):** *cafea aburindă*, *mâini tremurânde*, *răni sângerânde*;
   - **Adjective provenite din adverbe (invariabile):** *așa*, *bine*, *aievea*, *gata*, *asemenea*, *anume*, *altfel* (ex: *om bine*, *haine gata*, *asemenea oameni*);
   - **Adjective provenite din interjecții:** *halal fete*, *om așa și așa*;
   - **Adjective provenite din numerale:** cardinale (1–19), ordinale, multiplicative, distributive când se acordă cu substantivul.

---

### GRADELE DE COMPARAȚIE ALE ADJECTIVULUI

1. **Gradul pozitiv:** *bun*, *frumos*.
2. **Gradul comparativ:**
   - **De superioritate:** *mai bun (decât / ca)*
   - **De egalitate:** *la fel de bun*, *tot așa de bun*, *tot atât de bun*, *deopotrivă de bun (ca / precum)*
   - **De inferioritate:** *mai puțin bun (decât / ca)*
3. **Gradul superlativ:**
   - **Relativ:**
     - De superioritate: *cel mai bun*
     - De inferioritate: *cel mai puțin bun*
   - **Absolut:**
     - Mijloc standard: *foarte bun*, *tare bun*, *prea bun*.

#### Mijloace expresive de formare a superlativului absolut:
1. **Repetarea adjectivului:** *frumoasă, frumoasă*;
2. **Repetarea adjectivului cu prepoziția *de* sau la Genitiv plural:** *frumoasa frumoaselor*, *urâta urâtelor*, *prostul proștilor*;
3. **Prelungirea expresivă a unor sunete:** *un borș acruuuu!*;
4. **Substantive folosite cu valoare adverbială intensivă:** *deștept foc*, *prost bâtă*, *slabă scândură*, *beat turtă*, *înghețat bocnă*, *scump foc*, *singur cuc*;
5. **Adverbe și locuțiuni adverbiale legate prin prepoziția *de*:** *grozav de...*, *fantastic de...*, *nespus de...*, *teribil de...*, *extraordinar de...*, *din cale-afară de...*;
6. **Prefixe și prefixoide:** *stră-* (*străvechi*), *supra-* (*supraaglomerat*), *ultra-* (*ultraelegant*), *extra-* (*extrafin*), *arhi-* (*arhiplin*), *hiper-* (*hipercorect*), *prea-* (*preacurat*), *răs-* (*răscopt*);
7. **Sintagme și locuțiuni:** *cu totul și cu totul*, *cât se poate de*.

---

### ADJECTIVE FĂRĂ GRAD DE COMPARAȚIE

Nu pot avea grade de comparație următoarele categorii de adjective:
1. **Adjective care exprimă însușiri absolute prin sensul lor:** *complet*, *mort*, *viu*, *orb*, *mut*, *surd*, *unic*, *etern*, *desăvârșit*, *infinit*, *imens*, *uriaș*, *general*, *esențial*, *perfect*.
2. **Adjective împrumutate din limba latină care reprezintă deja forme de comparativ sau superlativ:**
   - Comparative latinești: *anterior*, *posterior*, *exterior*, *interior*, *superior*, *inferior*, *major*, *minor*.
   - Superlative latinești: *optim*, *maxim*, *minim*, *suprem*, *extrem*.
3. **Adjective din terminologia tehnico-științifică și adjective de relație:** *pătrat*, *triunghiular*, *dreptunghiular*, *aurifer*, *acvatic*, *terestru*, *săptămânal*, *solar*, *gazos*, *lemnos*, *electric*, *acustic*.

---

### CONVERSIUNEA ADJECTIVULUI

1. **Adjectiv → Substantiv:** prin articulare cu articol hotărât sau nehotărât:
   - *Leneșul mult păgubește.*
   - *Un înțelept tace.*
   - *Frumosul din artă ne impresionează.*
2. **Adjectiv → Adverb:** când determină un verb și devine invariabil:
   - *Scrie frumos.* (cum scrie? *frumos* = adverb de mod, complement de mod).
   - *Cântă clar.*
---

## `MOR-005` — Morfologie — substantivul

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-001]], [[MOR-002]], [[MOR-003]], [[MOR-004]], [[SIN-001]]
- **source:** `teorie-extrasa.txt:1743–1965`

### Conținut extras și normalizat

- **Definiție:** Partea de vorbire flexibilă care denumește obiecte în sens foarte larg: ființe (*om*, *câine*), lucruri (*masă*, *carte*), fenomene ale naturii (*ploaie*, *vânt*), acțiuni (*citire*, *mers*), stări (*somn*, *liniște*), calități și noțiuni abstracte (*frumusețe*, *curaj*, *libertate*).

---

### CLASIFICAREA SUBSTANTIVELOR

#### 1. După alcătuire:
- **Simple:** formate dintr-un singur cuvânt de bază (*copil*, *sat*, *floare*).
- **Compuse:**
  - Sudate într-un singur cuvânt: *untdelemn*, *bunăvoință*, *botgros*, *scurtcircuit*.
  - Cu cratimă: *câine-lup*, *floarea-soarelui*, *locțiitor-comandant*, *roșu-închis*.
  - Prin alăturare fără cratimă: *Marea Neagră*, *Turnu Măgurele*, *Baia Mare*.
  - Abrevieri: *CFR*, *ONU*, *TAROM*.

#### 2. După conținut și referință:
- **Comune:** denumesc obiecte de același fel dintr-o clasă (*oraș*, *râu*, *elev*).
- **Proprii:** individualizează un obiect, o persoană sau o localitate (*București*, *Dunărea*, *Mihai*).
  - Unele substantive comune provin din substantive proprii: *volt*, *watt*, *zeplin*, *joben*, *recamier*, *amandină*, *newton*; ex: *Am cumpărat un Eminescu.* / *Am admirat un Grigorescu.*
- **Concrete:** denumesc obiecte perceptibile prin simțuri (*copac*, *apă*, *voce*).
- **Abstracte:** denumesc noțiuni, sentimente, idei (*iubire*, *gând*, *dreptate*).
- **Colective:** au formă de singular și înțeles de plural (*echipă*, *turmă*, *stol*, *roi*, *popor*, *tineret*, *frunziș*, *armată*).

---

### GENUL SUBSTANTIVULUI

1. **Sunt de genul MASCULIN:**
   - Numele bărbaților și al ființelor de sex bărbătesc (*băiat*, *tată*, *leu*);
   - Copacii și pomii fructiferi: *stejar*, *brad*, *măr*, *cireș*, *nuc*, *salcâm*, *fag*;
   - Numele lunilor anului: *ianuarie*, *februarie*, *martie*, *aprilie*, etc.;
   - Notele muzicale: *do*, *re*, *mi*, *fa*, *sol*, *la*, *si*;
   - Literele alfabetului: *a*, *be*, *ce*, etc.;
   - Numele munților: *Carpați*, *Alpi*, *Ceahlău*, *Bucegi*;
   - Numele punctelor cardinale: *nord*, *sud*, *est*, *vest*;
   - Monedele: *leu*, *dolar*, *euro*, *franc*, *ban*.

2. **Sunt de genul FEMININ:**
   - Zilele săptămânii (*lunea*, *o miercuri*, *duminica*);
   - Anotimpurile (*o primăvară*, *vara*, *toamna*, *iarna*);
   - Părțile zilei (*dimineața*, *ziua*, *seara*, *noaptea*, *după-amiaza*);
   - Numele de orașe, țări, insule terminate în *-a* (*Roma*, *Franța*, *Creta*; excepție: *Târgoviște* este tot feminin);
   - Senzații și stări sufletești (*teamă*, *frică*, *sete*, *bucurie*, *tristețe*);
   - Nume de funcții / grade militare terminate în *-ă*: *santinelă*, *ordonanță*, *călăuză*.

3. **Sunt de genul NEUTRU:**
   - Nume de orașe, țări, continente care nu se termină în *-a* (*București*, *Paris*, *Viena*);
   - Observație: *Londra* este un caz special — deși se termină în *-a*, este considerat feminin în română (*Londra frumoasă*);
   - Numele sporturilor: *fotbal*, *tenis*, *baschet*, *rugby* (excepție: *oina* — feminin);
   - Orânduiri sociale: *sclavagism*, *feudalism*, *capitalism*;
   - Curente literare și culturale: *romantism*, *clasicism*, *realism*;
   - Simțurile omului: *văzul*, *auzul*, *mirosul*, *gustul*, *pipăitul*;
   - Nume de materii defective de plural: *sânge*, *lapte*, *aur*, *argint*;
   - Numele unor vânturi: *crivăț*, *viscol*, *austru*;
   - Însușiri abstracte defective de plural: *patriotism*, *curaj*, *eroism*;
   - Substantive ce denumesc ființe cu acord neutru: *animal*, *dobitoc*, *mamifer*, *macrou*, *popor*, *norod*, *personaj*.

---

### SUBSTANTIVE MOBILE ȘI EPICENE

#### 1. Substantive mobile:
Formează genul opus prin derivare cu sufixe moționale:
- **Feminine formate de la masculin:**
  - *profesor* → *profesoară*
  - *lup* → *lupoaică*
  - *coleg* → *colegă*
  - *preot* → *preoteasă*
  - *pictor* → *pictoriță*
  - *croitor* → *croitoreasă*
- **Masculine formate de la feminin:**
  - *rață* → *rățoi*
  - *vulpe* → *vulpoi*
  - *vrabie* → *vrăbioi*
  - *curcă* → *curcan*
  - *gâscă* → *gâscan*
  - *broască* → *broscoi*
  - *cioară* → *cioroi*

#### 2. Substantive epicene:
Au o singură formă lexicală și un gen gramatical unic pentru a desemna ambele sexe (diferențierea se face prin determinanții *mascul / femelă*, *bărbat / femeie* sau din context):
- **Animale:** *crocodil*, *elefant*, *rinocer*, *struț*, *viezure*, *păianjen* (masculine); *ciocârlie*, *libelulă*, *știucă*, *furnică*, *albină*, *nevăstuică*, *gazelă*, *panteră* (feminine).
- **Persoane:** *sugar*, *făt*, *părinte*, *rector*, *soldat* (masculine); *victimă*, *călăuză*, *somitate*, *odalisca*, *rudă*, *star*, *persoană* (feminine).

---

### FORMELE DE NUMĂR ALE SUBSTANTIVULUI

#### 1. Substantive cu aceeași formă la singular și plural:
- **Masculine terminate în *-i*:** *un pui / doi pui*, *un unchi / doi unchi*, *un tei / doi tei*, *un arici / doi arici*, *un ardei / doi ardei*, *un baci / doi baci*, *un broscoi / doi broscoi*;
- **Feminine terminate în *-toare*:** *o muncitoare / două muncitoare*, *o lucrătoare / două lucrătoare*, *o învățătoare / două învățătoare*;
- **Neutre terminate în *-e*:** *un nume / două nume*, *un prenume / două prenume*, *un codice / două codice*, *un pântece / două pântece*.

#### 2. Substantive defective de singular (*Pluralia tantum*):
Au formă numai de plural:
- *blugi*, *câlți*, *lapți*, *icre*, *moaște*, *tăiței / tăieței*, *spaghete*, *ravioli*, *paste*, *crudități*, *citrice*, *cosmetice*, *rechizite*, *tipizate*, *confetti*, *graffiti*, *funeralii*, *condoleanțe*, *represalii*, *contrainformații*, *speze*, *tratative*, *devize* (calcul de cheltuieli), *urale*, *grâne / grâie*, *cârcei*, *oreion*, *rujeolă*.

#### 3. Substantive defective de plural (*Singularia tantum*):
Au formă numai de singular:
- Noțiuni abstracte și calități: *curaj*, *astm*, *confort*, *haos*, *plictis*, *accept*, *cinste*, *răbdare*;
- Materii și alimente: *miere*, *griș*, *fasole*, *mazăre*, *frică*, *foame*, *sete*, *aur*, *argint*, *cupru*, *oxigen*;
- Nume proprii de localități și ape: *Buzău*, *Brașov*, *Dunăre*, *Olt*.

#### 4. Substantive feminine neologice terminate în *-ee*:
- **Cu aceeași formă la singular și plural:**
  - *o azalee / două azalee*, *o camee / două camee*, *o cornee / două cornee*, *o orhidee / două orhidee*, *o pigmee / două pigmee*, *o seboree / două seboree*, *o logoree / două logoree*, *o dispnee / două dispnee*, *o maree / două maree*, *o tranșee / două tranșee*, *o odisee / două odisee*, *o onomatopee / două onomatopee*, *o galinacee / două galinacee*, *o liliacee / două liliacee*, *o graminee / două graminee*.
- **Cu pluralul în *-ei*:**
  - *o alee / două alei*
  - *o idee / două idei*
  - *o epopee / două epopei*
  - *o melopee / două melopei*
  - *o trahee / două trahei*
  - *o diaree / două diarei*
  - *o moschee / două moschei*

#### 5. Substantive cu forme duble:
- **Duble de singular (variante libere):**
  - *ax / axă*, *corigent / corijent*, *cearceaf / cearșaf*, *vodcă / votcă*, *zi / ziuă*, *urcior / ulcior*, *tumoră / tumoare*, *piuneză / pioneză*, *Isus / Iisus*.
- **Duble de plural cu sensuri diferite:**
  - *corn:* *corni* (arbori) / *coarne* (la animale) / *cornuri* (panificație);
  - *coardă:* *corzi* (anatomie, instrumente muzicale) / *coarde* (geometrie, gimnastică);
  - *nivel:* *niveluri* (stadiu, înălțime, treaptă) / *nivele* (unelte de măsură cu bulă);
  - *arc:* *arcuri* (resorturi elastice) / *arce* (geometrie, tir cu arcul);
  - *ochi:* *ochi* (organul vederii) / *ochiuri* (la plasă, pe lac, ouă prăjite);
  - *element:* *elemente* (componente, chimice) / *elemenți* (la calorifer);
  - *bandă:* *benzi* (fâșii de drum, magnetice) / *bande* (grupuri de răufăcători).
- **Duble de plural ca variante libere (ambele admise):**
  - *copertă:* *coperți / coperte*
  - *cicatrice:* *cicatrici / cicatrice*
  - *râpă:* *râpi / râpe*

---

### FUNCȚIILE SINTACTICE ALE SUBSTANTIVULUI PE CAZURI

#### 1. Cazul NOMINATIV:
- **Subiect:** *Bunicul curăță copacii.*
- **Nume predicativ:** *Andrei este colegul meu.*
- **Atribut apozițional:** *Colegul meu, Andrei, învață bine.*

#### 2. Cazul ACUZATIV:
- **Complement direct:** *O ajut pe mama.*
- **Complement indirect prepozițional:** *Mă gândesc la examen.*
- **Complement de agent:** *Mașina este reparată de către mecanic.*
- **Circumstanțial de loc:** *Merg la școală.*
- **Circumstanțial de timp:** *Merg la școală odată cu Maria.*
- **Circumstanțial de mod:** *Scrie mai repede decât colegul.*
- **Circumstanțial de cauză:** *N-am intrat în clasă de rușine.*
- **Circumstanțial de scop:** *Mama face economii pentru casă.*
- **Nume predicativ:** *Pădurea este de fagi.*
- **Atribut substantival prepozițional:** *Pădurea de fagi e tânără.*

#### 3. Cazul GENITIV:
- **Atribut substantival genitival:** *Proprietarii casei au plecat.*
- **Atribut substantival prepozițional:** *Pomul din fața casei a rodit.*
- **Nume predicativ:** *Mama este contra fumatului.*
- **Circumstanțial de loc:** *Mașina s-a oprit în fața casei.*
- **Circumstanțial de timp:** *Am sosit acasă înaintea mamei.*
- **Circumstanțial de cauză:** *Din cauza poleiului am alunecat.*
- **Circumstanțial de scop:** *Muncește în scopul promovării.*
- **Circumstanțial condițional:** *În locul tatălui, eu nu dădeam voie.*
- **Complement indirect prepozițional:** *Câinele s-a năpustit asupra hoțului.*

#### 4. Cazul DATIV:
- **Complement indirect:** *Îi ofer flori mamei.*
- **Circumstanțial de loc (dativul locativ arhaic/popular):** *Stai locului!* / *Așterne-te drumului!* / *Du-te naibii!*
- **Circumstanțial de mod / concesiv:** *Contrar obiceiului, s-a culcat la amiază.*
- **Atribut substantival prepozițional:** *Reușita grație mamei mă bucură.*
- **Atribut în dativ (dativ adnominal / arhaic, fără prep.):** *Maria este nepoată mătușii mele.* / *Acordarea de premii elevilor.*

#### 5. Cazul VOCATIV:
- În mod tradițional, **nu are funcție sintactică de sine stătătoare** (constituie o adresare / strigare directă);
- **Construcții speciale:**
  - *Bădie Ioane!* (*Bădie* = vocativ fără funcție; *Ioane* = atribut apozițional în vocativ);
  - *Dragă mamă!* (*mamă* = vocativ fără funcție; *dragă* = atribut adjectival în vocativ).

Observație: Subiect în cazurile oblice în cadrul frazei:
Subiectul poate apărea în formă de acuzativ, genitiv sau dativ doar dacă este exprimat prin pronume relative care introduc propoziții subordonate:
- *Îl premiez / pe cine ia premiul I./* (pronume relativ în Acuzativ, subiect în propoziția subordonată)
- *Restituie cartea / cui ți-a împrumutat-o./* (pronume relativ în Dativ, subiect în propoziția subordonată)
- *Hai fiecare pe la casa / cui ne are./* (pronume relativ în Genitiv)

---

### LOCUȚIUNI SUBSTANTIVALE

Grupuri unitare de cuvinte care se comportă ca un singur substantiv:
- *băgare de seamă* (= atenție)
- *punct de vedere* (= opinie)
- *aruncătură de ochi* (= privire scurtă)
- *ținere de minte* (= memorie)
- *nod în papură* (= cusur)
- *foc de paie* (= entuziasm trecător)
- *dare de mână* (= generozitate, belșug)
- *stat de vorbă* (= conversație)
- *tragere de inimă* (= însuflețire, elan)
- *aducere aminte* (= amintire)
- *părere de rău* (= regret) / *părere de bine* (= bucurie)

---

### CONVERSIUNEA SUBSTANTIVULUI

1. **Substantiv temporal → Adverb de timp:**
   Numele de anotimpuri, zile ale săptămânii și părți ale zilei sunt:
   - **Substantive** dacă au funcție de subiect (*Toamna este bogată*), au lângă ele un atribut (*Vara trecută a fost caldă*) sau sunt precedate de o prepoziție (*Pe timpul toamnei*).
   - **Adverbe de timp** dacă determină un verb fără prepoziție și fără atribut: *Toamna se numără bobocii.* (Când se numără? *toamna* = adverb de timp, circumstanțial de timp).

2. **Substantiv → Adverb de mod:**
   - *Doarme buștean.*
   - *Îndrăgostit lulea.*
   - *Sărac ocnă.*
   - *Aleargă glonț.*

3. **Substantivul ca subiect în expresii verbale impersonale:**
   În structurile:
   - *e voie*, *e nevoie*, *e cazul*, *e vorba*, *e timpul*:
     - verbul *a fi* (*e*) = predicat verbal (verb impersonal);
     - substantivul (*voie*, *nevoie*, *cazul*, *vorba*, *timpul*) = subiect.

4. **Distincția Acuzativ de scop vs. loc în structurile cu verb de mișcare:**
   - Circumstanțiale de scop: *Ei au plecat la scăldat / la arat / la vânat / la banchet.* (cu ce scop au plecat?)
   - Circumstanțiale de loc: *Ei vin de la arat / de la semănat / de la nuntă.* (de unde vin?)
---

## `MOR-006` — Morfologie — verbul

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-002]], [[MOR-004]], [[MOR-007]], [[MOR-008]], [[SIN-001]]
- **source:** `teorie-extrasa.txt:1966–2251`

### Conținut extras și normalizat

- **Definiție:** Verbul este partea de vorbire flexibilă care exprimă o acțiune (*a citi*, *a lucra*), o stare (*a sta*, *a dormi*) sau existența (*a fi*, *a exista*).

#### Categoriile gramaticale ale verbului:
1. **Conjugarea**
2. **Diateza**
3. **Modul**
4. **Timpul**
5. **Persoana și numărul**

---

### A. CONJUGAREA VERBELOR

După sufixul infinitivului (terminația de la modul infinitiv), verbele din limba română se împart în patru conjugări:
- **Conjugarea I:** se termină în *-a* (*a lucra*, *a căuta*, *a mânca*, *a cânta*).
- **Conjugarea a II-a:** se termină în *-ea* cu diftong (*a încăpea*, *a tăcea*, *a zăcea*, *a bea*, *a vedea*, *a cădea*).
- **Conjugarea a III-a:** se termină în *-e* scurt neaccentuat (*a zice*, *a spune*, *a cere*, *a merge*, *a face*, *a duce*).
- **Conjugarea a IV-a:** se termină în *-i* sau *-î* (*a citi*, *a iubi*, *a fi*, *a hotărî*, *a coborî*, *a urî*).

---

### B. DIATEZA VERBULUI

Diateza exprimă raportul dintre subiectul gramatical, verbul care exprimă acțiunea și autorul real al acțiunii (subiectul logic / agentul).

#### 1. Diateza activă:
Subiectul gramatical este chiar autorul care realizează acțiunea:
- *Soarele răsare.*
- *Studenții învață pentru examen.*

#### 2. Diateza pasivă:
Subiectul gramatical suportă acțiunea realizată de o altă persoană/entitate (complementul de agent / subiectul logic):
- *Mașina este reparată de către mecanic.* (*mașina* = subiect gramatical; *de către mecanic* = complement de agent).
- Se formează din verbul auxiliar *a fi* (la modul și timpul cerut) + participiul acordat al verbului de conjugat (*reparată*, *reparați*).

Observație:
- Verbul *a fi* din componența pasivului este verb auxiliar, nu copulativ.
- Doar verbele tranzitive pot forma diateza pasivă. Odată trecute la pasiv, devin intranzitive.

#### 3. Diateza reflexivă:
Subiectul gramatical realizează acțiunea și tot el o suportă (sau participă intens la ea). Verbul este însoțit obligatoriu de un pronume reflexiv (în cazurile Acuzativ sau Dativ) care nu are funcție sintactică de sine stătătoare, ci constituie doar marca diatezei reflexive:
- *Eu mă culc.*
- *Tu te gândești.*
- *El își imaginează o lume mai bună.*

##### Tipuri de verbe reflexive:
a) **Verbe reflexive impersonale:** urmate în mod regulat de o propoziție subiectivă (SB):
- *se zice că...*, *se aude că...*, *se observă că...*, *se spune că...*, *se cunoaște că...*, *se înțelege că...*, *se știe că...*, *se presupune că...*

b) **Verbe reflexive propriu-zise (inerente):** nu pot exista în limbă fără pronumele reflexiv:
- *a se întâmpla*, *a se baza*, *a se cădea*, *a se ofili*, *a se bucura*, *a se cuveni*, *a se odihni*, *a se zvoni*.

c) **Verbe a căror semnificație se schimbă complet prin adăugarea reflexivului:**
- *a se uita* (= a privi) vs. *a uita* (= a nu-și mai aminti);
- *a se juca* (= a participa la un joc) vs. *a juca* (= a interpreta un rol, a paria);
- *a se simți* (= a avea o stare) vs. *a simți* (= a percepe cu simțurile);
- *a se îndrepta* (= a merge într-o direcție) vs. *a îndrepta* (= a corecta ceva);
- *a se duce* (= a merge) vs. *a duce* (= a transporta ceva).

Observație: Verbe reflexiv-pasive:
Au forma reflexivă (cu pronumele *se*), dar sensul este pasiv, permițând subînțelegerea unui complement de agent:
- *Aici se construiește o școală.* (= de către constructori).

---

### C. MODURILE VERBULUI

Modul arată perspectiva vorbitorului asupra realizării acțiunii:
- Reală, sigură: **Indicativ**
- Posibilă, dorită, realizabilă: **Conjunctiv**
- Condiționată sau optativă: **Condițional-optativ**
- Ordonată, cerută imperativ: **Imperativ**

În limba română se disting **moduri personale (predicative)** și **moduri nepersonale (nepredicative)**.

---

### I. MODURI PERSONALE (PREDICATIVE)
Au forme distincte pentru persoană și au rolul sintactic de predicat verbal (sau intră în alcătuirea predicatului nominal).

#### 1. Modul Indicativ:
Singurul mod care cuprinde toate cele trei repere temporale fundamentale (prezent, trecut, viitor):
- **Prezent:** *eu cânt*, *tu cânți*, *el cântă*.
- **Trecut:**
  - *Imperfect:* acțiune trecută și neterminată în desfășurare (*eu citeam*, *tu scriai*).
  - *Perfect compus:* acțiune trecută și încheiată (*am citit*, *ai scris* — format cu auxiliarul *a avea*).
  - *Perfect simplu:* acțiune recent încheiată (*citii*, *făcui*, *mersei*).
  - *Mai-mult-ca-perfectul:* acțiune trecută și terminată înaintea altei acțiuni trecute (*citisem*, *mâncaseși*).
- **Viitor:**
  - *Viitor literar (standard):* format cu auxiliarul *a vrea* (*voi merge*, *vei citi*).
  - *Viitor anterior:* format cu *voi* + auxiliarul *fi* + participiu (*voi fi terminat*).
  - *Viitor popular / colocvial:* *o să merg*, *am să merg*, *oi merge*.

#### 2. Modul Conjunctiv:
Exprimă o acțiune posibilă, virtuală, realizabilă:
- **Prezent:** introdus prin conjuncția *să* (*să plec*, *să înveți*).
- **Perfect:** format cu *să fi* + participiu invariabil (*să fi plecat*, *să fi știut*).

Observație: Valoare imperativă:
Conjunctivul fără conjuncția *să* sau la persoana a III-a poate avea valoare de imperativ:
- *Trăiască libertatea!* (= să trăiască!)

#### 3. Modul Condițional-Optativ:
Exprimă o dorință sau o acțiune dependentă de o condiție:
- **Prezent:** format cu formele scurte ale auxiliarului *a avea* (*aș, ai, ar, am, ați, ar*) + infinitiv (*aș merge*, *ai veni*).
- **Perfect:** format cu auxiliarul *aș, ai, ar...* + *fi* + participiu (*aș fi mers*, *ai fi știut*).

#### 4. Modul Imperativ:
Exprimă un ordin, o poruncă, un îndemn, un sfat sau o rugăminte:
- Are forme doar pentru persoana a II-a:
  - Singular: *Cântă!*, *Scrie!* (negativ: *Nu cânta!*, *Nu scrie!*).
  - Plural: *Cântați!*, *Scrieți!* (negativ: *Nu cântați!*, *Nu scrieți!*).

---

### TABELE DE FORME VERBALE

#### 1. Mai-mult-ca-perfectul:

| Persoana | Conj. I (*A cânta*) | Conj. II (*A bea*) | Conj. III (*A face*) | Conj. IV (*A citi*) |
| --- | --- | --- | --- | --- |
| eu | cântasem | băusem | făcusem | citisem |
| tu | cântaseși | băuseși | făcuseși | citiseși |
| el / ea | cântase | băuse | făcuse | citise |
| noi | cântaserăm | băuserăm | făcuserăm | citiserăm |
| voi | cântaserăți | băuserăți | făcuserăți | citiserăți |
| ei / ele | cântaseră | băuseră | făcuseră | citiseră |

#### 2. Perfectul simplu (forme speciale la conjugarea a III-a):

| Persoana | A coace | A frige | A înfige |
| --- | --- | --- | --- |
| eu | copsei | fripsei | înfipsei |
| tu | copseși | fripseși | înfipseși |
| el / ea | coapse | fripse | înfipse |
| noi | coapserăm | fripserăm | înfipserăm |
| voi | coapserăți | fripserăți | înfipserăți |
| ei / ele | coapseră | fripseră | înfipseră |

#### 3. Formele de Viitor:

| Persoana | Viitor literar | Viitor anterior | Viitor popular |
| --- | --- | --- | --- |
| eu | voi merge | voi fi plecat | o să merg / am să merg / oi merge |
| tu | vei merge | vei fi plecat | o să mergi / ai să mergi / ăi merge |
| el / ea | va merge | va fi plecat | o să meargă / are să meargă / o merge |
| noi | vom merge | vom fi plecat | o să mergem / avem să mergem / om merge |
| voi | veți merge | veți fi plecat | o să mergeți / aveți să mergeți / ăți merge |
| ei / ele | vor merge | vor fi plecat | o să meargă / au să meargă / or merge |

---

### II. MODURI NEPERSONALE (NEPREDICATIVE)

Nu au forme după persoană și nu pot îndeplini singure funcția de predicat verbal în propoziție:

#### 1. Modul Infinitiv:
Numește acțiunea în mod abstract:
- Prezent: *a merge*, *a citi*.
- Perfect: format cu *a fi* + participiu (*a fi citit*, *a fi mers*).

#### 2. Modul Gerunziu:
Arată o acțiune în desfășurare, concomitentă cu acțiunea verbului regent. Se formează cu sufixele *-ând* sau *-ind*:
- *mâncând*, *lucrând*, *citind*, *coborând*.

#### 3. Modul Participiu:
Arată o acțiune terminată și suferită de obiect. Are valoare adjectivală când se acordă cu un substantiv:
- *spălat*, *spălată*, *spălați*, *spălate*; *înflorit*, *înflorită*.

#### 4. Modul Supin:
Numește acțiunea orientată spre un scop sau o destinație. Se formează din participiul invariabil precedat de prepoziții (*de*, *la*, *pentru*, *după*):
- *de arat*, *de semănat*, *la cules*, *pentru învățat*.

---

### FUNCȚII SINTACTICE ALE MODURILOR NEPREDICATIVE

#### Funcțiile Infinitivului:
1. **Subiect:** *A citi este o plăcere.*
2. **Nume predicativ:** *Dorința lui este de a reuși.*
3. **Atribut verbal:** *Dorința de a reuși e mare.*
4. **Complement direct:** *Știe a desena frumos.*
5. **Complement indirect:** *M-am săturat a tot repeta.*
6. **Circumstanțial de timp:** *S-a trezit înainte de a răsări soarele.*
7. **Circumstanțial de mod:** *A plecat fără a saluta.*
8. **Circumstanțial de cauză:** *A fost certat pentru a nu fi ascultat.*
9. **Circumstanțial concesiv:** *Chiar fără a repeta, a luat notă mare.*
10. **Circumstanțial consecutiv:** *E prea bătrân pentru a mai călători.*
11. **Circumstanțial de scop:** *Mergem la bibliotecă pentru a studia.*

#### Funcțiile Gerunziului:
1. **Subiect:** *Se aude tunând.*
2. **Complement direct:** *Aud tunând în depărtare.*
3. **Complement indirect:** *M-am plictisit așteptând.*
4. **Circumstanțial de mod:** *Vine șchiopătând.*
5. **Circumstanțial de cauză:** *Nerepetând zilnic, ia note mici.*
6. **Circumstanțial de timp:** *Ajungând acasă, am sunat-o pe mama.*
7. **Circumstanțial condițional:** *Muncind cinstit, vei reuși în viață.*
8. **Circumstanțial concesiv:** *Chiar învățând noaptea, tot n-a terminat.*
9. **Atribut verbal:** *Se văd steaguri fluturând.* (sau atribut adjectival dacă e acordat: *mâini tremurânde*).

#### Funcțiile Supinului:
1. **Subiect:** *De învățat e ușor, de aplicat e greu.*
2. **Nume predicativ:** *Cartea este de citit.*
3. **Atribut verbal:** *Uneltele de pescuit sunt pregătite.*
4. **Complement direct:** *Am de rezolvat o problemă.*
5. **Complement indirect:** *M-am săturat de așteptat.*
6. **Circumstanțial de scop:** *Bunicii s-au dus la prășit.*
7. **Circumstanțial de loc:** *Andrei se întoarce de la pescuit.*
8. **Circumstanțial consecutiv:** *Ea a slăbit de speriat.*
9. **Circumstanțial de mod:** *E mai ușor de spus decât de făcut.*

---

### VERBE AUXILIARE ȘI COPULATIVE

#### 1. Verbe auxiliare:
Ajută la formarea modurilor și timpurilor compuse sau a diatezei pasive:
- **A avea:**
  - Perfect compus: *am scris*;
  - Viitor popular: *am să scriu*;
  - Condițional-optativ prezent: *aș scrie*, *ai scrie*;
  - Condițional-optativ perfect: *aș fi scris*.
- **A vrea:**
  - Viitor literar: *vei dansa*;
  - Viitor anterior: *vei fi dansat*;
  - Viitor popular: *oi dansa*, *o să dansez*.
- **A fi:**
  - Diateza pasivă: *Lecția a fost explicată de profesor.*;
  - Conjunctiv perfect: *să fi citit*;
  - Condițional-optativ perfect: *aș fi citit*;
  - Viitor anterior: *voi fi citit*;
  - Infinitiv perfect: *a fi dormit*.

#### 2. Verbe copulative:
Fac legătura între subiect și numele predicativ în alcătuirea predicatului nominal:
- *a fi*, *a deveni* (întotdeauna copulativ), *a ajunge*, *a ieși*, *a se face*, *a părea*, *a rămâne*, *a însemna*, *a se numi*.

#### 3. Verbe neregulate:
Își modifică radicalul în cursul flexiunii: *a fi*, *a avea*, *a vrea*, *a da*, *a lua*, *a mânca*, *a bea*, *a sta*, *a usca*.

#### 4. Verbe defective:
Nu au toate timpurile sau formele flexionare (ex: lipsite de participiu): *a divide*, *a accede*, *a concede*, *a transcede*.

#### 5. Verbe tranzitive vs. intranzitive:
- **Tranzitive:** pot primi un complement direct (răspund la întrebarea *ce?* sau *pe cine?*): *a citi*, *a scrie*, *a învăța*, *a iubi*.
- **Intranzitive:** nu pot primi un complement direct (verbele copulative, verbele de mișcare, verbele reflexive): *a merge*, *a veni*, *a sta*, *a deveni*, *a se gândi*.

---

### VALORILE MORFOLOGICE ALE LUI *A FI*

1. **Verb auxiliar:** intră în formarea diatezei pasive (*este ajutat*) sau a timpurilor compuse (*să fi știut*, *aș fi mers*).
2. **Verb copulativ:** formează predicat nominal împreună cu un nume predicativ (*Mihai este elev.*).
3. **Verb predicativ (predicat verbal):** când are sens de sine stătător:
   - A se afla, a exista: *Tata este în grădină.*
   - A proveni, a fi originar din: *El este din Moldova.*
   - A costa: *Cartea este 50 de lei.*
   - A dura: *Spectacolul este de două ore.*
   - A se împlini: *Sunt doi ani de la absolvire.*
   - A călători, a vizita: *Am fost la bunici.*
   - A se întâmpla: *Ce este acolo?*

---

### VALORILE MORFOLOGICE ALE LUI *I / -I*

1. **Verb predicativ personal:** *Tata-i în livadă.* (= este / se află).
2. **Verb predicativ impersonal:** *Ce-i acolo?* (= se întâmplă).
3. **Verb copulativ personal:** *Bunicul-i sănătos.* (= este).
4. **Verb copulativ impersonal:** *Nu-i bine ce faci.*
5. **Pronume personal (Dativ clitic):** *I-am dat o carte Mariei.*
6. **Pronume personal (Acuzativ clitic):** *I-am ajutat la matematică.*
7. **Articol hotărât enclitic:** *Pomii au înflorit.*
8. **Interjecție:** *I! Ce frig este afară!*
9. **Pronume neutru (fără funcție):** *Dă-i cu bere, dă-i cu vin!* / *Zi-i, cobzare!*
---

## `MOR-007` — Morfologie — adverbul

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-006]], [[MOR-008]], [[MOR-009]], [[MOR-010]], [[SIN-001]]
- **source:** `teorie-extrasa.txt:2252–2406`

### Conținut extras și normalizat

- **Definiție:** Adverbul este partea de vorbire neflexibilă care determină un verb (*merge încet*), o locuțiune verbală (*a luat-o la fugă speriat*), un adjectiv (*perete perfect drept*), un alt adverb (*merge destul de repede*) sau o interjecție (*hai mai repede*).

---

### CLASIFICAREA ADVERBELOR

#### I. După structură:
1. **Simple:** *așa*, *bine*, *cam*, *ieri*, *mâine*, *azi*, *ba*, *da*, *nu*, *târziu*, *repede*, *sus*, *jos*, *aici*, *acolo*.
2. **Compuse:** *alaltăieri*, *oriunde*, *azi-noapte*, *totuși*, *oricând*, *după-amiază*, *dinadins*, *cândva*, *dinafară*, *astă-noapte*, *nicicând*, *nicăieri*.
3. **Locuțiuni adverbiale:** grupuri unitare de cuvinte cu rol de adverb:
   - *cu toate acestea*, *la pas*, *pe de rost*, *de aceea*, *în veci*, *cu toptanul*, *din când în când*, *în spate*, *în fată*, *în jos*, *de jur împrejur*, *fără doar și poate*, *cu grămada*, *la o adică*.

---

#### II. După sens:

##### 1. Adverbe de loc:
- **Simple:** *sus*, *jos*, *aici*, *acolo*, *aproape*, *departe*.
- **Compuse:** *undeva*, *oriunde*, *orișiunde*, *fieunde*, *nicăieri*, *dinafară*, *înlăuntru*.
- **Locuțiuni:** *din loc în loc*, *la stânga*, *în stânga*, *peste tot*, *în urmă*, *de jur împrejur*, *înainte*, *înapoi*.
- Observație: Structurile *nu știu unde*, *te miri unde*, *cine știe unde* au valoare de locuțiuni adverbiale de loc nehotărâte (= *undeva*).

##### 2. Adverbe de timp:
- **Simple:** *acum*, *azi*, *ieri*, *mâine*, *târziu*, *devreme*, *odinioară*.
- **Compuse:** *totdeauna*, *odată*, *cândva*, *niciodată*, *câteodată*, *oricând*, *alaltăieri*.
- **Locuțiuni:** *din când în când*, *la început*, *din vreme în vreme*, *pe urmă*, *de cu seară*, *în veci*, *zi de zi*, *an de an*.
- Observație: Structurile *nu știu când*, *te miri când*, *cine știe când* au valoare de locuțiuni adverbiale de timp nehotărâte (= *cândva*).

##### 3. Adverbe de mod:
- **Simple:** *bine*, *așa*, *repede*, *agale*, *târâș*, *grăpiș*, *chiorâș*, *abia*, *totuși*, *deloc*.
- **Compuse:** *defel*, *cumva*, *oricum*, *fiecum*, *deopotrivă*, *într-una*.
- **Locuțiuni:** *pe furiș*, *de-a valma*, *de prisos*, *pe alese*, *pe de rost*, *cu neputință*, *cu de-a sila*, *de voie, de nevoie*.
- Observație: Structurile *nu știu cum*, *te miri cum*, *cine știe cum* au valoare de locuțiuni adverbiale de mod nehotărâte (= *cumva*).

##### 4. Adverbe și locuțiuni de cauză și scop:
- Nu există adverbe simple propriu-zise de cauză în limba română, ci doar locuțiuni: *de aceea*, *de asta*, *pentru aceea*, *din această cauză*.
- Adverbe de scop: *anume*, *expres*, *dinadins*, *înadins*, *intenționat*.
- Observație: Când se află în regenta unei propoziții cauzale, locuțiunile sunt de cauză (complement de cauză). Când se află în regenta unei finale, sunt de scop (complement de scop).

##### 5. Adverbe condiționale:
- Îndeplinesc funcția de circumstanțial condițional: *altfel*, *astfel*, *altminteri*, *în acest caz*.

##### 6. Adverbe concesive:
- Îndeplinesc funcția de circumstanțial concesiv în regenta unei subordonate concesive: *tot*, *totuși*, *cu toate acestea*, *cu toate astea*.

##### 7. Locuțiuni consecutive:
- Formate de la verbe la supin: *de necrezut*, *de neimaginat*, *de neînchipuit*, *de neconceput*, *de nespus*.

---

#### III. După statutul sintactic în propoziție și frază:

##### 1. Adverbe interogative:
Ajută la formularea unei întrebări:
- De loc: *unde?*, *de unde?*, *până unde?*, *încotro?*
- De timp: *când?*, *de când?*, *până când?*, *cât timp?*
- De mod: *cum?*, *cât?*, *în ce fel?*

##### 2. Adverbe relative:
Fac legătura între o propoziție subordonată și regenta ei, având funcție sintactică în propoziția pe care o introduc:
- *Unde ai fost?* (adverb interogativ, complement de loc) → *Spune-mi / unde ai fost./* (adverb relativ, complement de loc în subordonată).
- *Când sosește trenul?* (interogativ) → *Știu / când sosește trenul./* (relativ).

##### 3. Semiadverbe (adverbe fără funcție sintactică de sine stătătoare):
Au doar rol de nuanțare sau întărire a altor termeni:
- *nu*, *tocmai*, *numai*, *chiar*, *doar*, *cam*, *taman*, *aproximativ*, *oare*, *totuși*, *decât*, *mai*.

---

### ADVERBE PREDICATIVE ȘI CONVERSIUNI

1. **Adverbe predicative:** urmate obligatoriu de conjuncția *că* sau *să*, devin predicate verbale și cer o propoziție subiectivă (SB):
   - *Desigur / că vom veni./* (*desigur* = predicat verbal; P2 = subiectivă).
   - *Probabil / că a întârziat./*
   - *Firește / că are dreptate./*
   - *Poate / că va înțelege./*
   - Locuțiuni adverbiale predicative: *fără doar și poate*, *cu siguranță*, *de bună seamă*, *într-adevăr*.

2. **Adverbul *poate*:**
   - Urmat de *că* este **adverb predicativ** cu funcție de predicat verbal, urmat de SB: *Poate / că va ploua./*
   - Urmat de *să* este **verb predicativ tranzitiv** la indicativ, urmat de CD: *Poate / să cânte frumos./*

3. **Adverbe devenite adjective invariabile:**
   Când determină direct un substantiv:
   - *așa*, *asemenea*, *astfel*, *gata*, *bine*, *anume*, *altfel*, *aievea*; ex: *om bine*, *haine gata*, *asemenea oameni*.

4. **Substantive devenite adverbe de mod:**
   Când determină un verb sau adjectiv fără prepoziție:
   - *doarme buștean*, *tace chitic*, *aleargă glonț*, *îndrăgostit lulea*, *sărac ocnă*.

5. **Expresii impersonale (*e frumos*, *e greu*, *e ușor*):**
   - Dacă subordonata este introdusă prin *că* sau *să*, termenul este **adverb**: *E frumos / să ajuți./*
   - Dacă subordonata este introdusă prin *ce* sau *cine*, termenul este **adjectiv** (nume predicativ): *E frumos / ce ai desenat./*

6. **Adverbe relative devenite conjuncții:**
   - *cum* cu sens temporal (*Cum a sosit,/ a mâncat./*) sau cauzal (*Cum nu învățase,/ a tăcut./*);
   - *unde* cu sens cauzal (= deoarece): *Unde nu s-a pregătit,/ a greșit./*;
   - *când* cu sens condițional (= dacă): *Când aș fi știut,/ nu veneam./*;
   - *cât* cu sens concesiv (= deși): *Cât e muntele de înalt,/ tot îl urc./*
---

## `MOR-008` — Morfologie — conjuncția

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-007]], [[MOR-009]], [[SIN-001]]
- **source:** `teorie-extrasa.txt:2407–2554`

### Conținut extras și normalizat

- **Definiție:** Conjuncția este partea de vorbire neflexibilă care leagă două părți de propoziție de același fel (în propoziție) sau două propoziții de același fel ori o propoziție subordonată de regenta ei (în frază).

---

### A. ROLUL SINTACTIC AL CONJUNCȚIILOR

#### 1. În propoziție:
Cinci conjuncții coordonatoare pot lega părți de propoziție de același fel (*și*, *sau*, *ori*, *fie*, *dar*):
- Două subiecte: *Alina și Andrei citesc.*
- Două complemente directe: *A scris o nuvelă și un roman.*
- Două atribute: *Pădurea de brazi și de pini e deasă.*
- Două circumstanțiale: *Mergem la munte și la mare.*

#### 2. În frază:
Leagă:
- Două propoziții coordonate: *Copiii desenează / și ascultă muzică./*
- O propoziție subordonată de regenta ei: *Știu / că vei reuși./*
- O parte de propoziție și o subordonată corespunzătoare: *A venit Maria / și cine a mai vrut./*

---

### B. CLASIFICAREA DUPĂ STRUCTURĂ

1. **Simple:** *și*, *dar*, *iar*, *însă*, *ci*, *ca*, *să*, *dacă*, *de*.
2. **Compuse:** *ca să*, *deoarece*, *întrucât*, *fiindcă*, *deși*, *ci și*, *dar și*, *încât*, *ca... să*.
3. **Locuțiuni conjuncționale:**
   - **Terminate în conjuncție:** *pentru că*, *din pricină că*, *din cauză că*, *fără să*, *chiar dacă*, *în caz că*, *măcar că*, *chit că*.
   - **Terminate în pronumele *ce*:** *în timp ce*, *până ce*, *de vreme ce*, *odată ce*, *imediat ce*, *îndată ce*, *pe măsură ce*, *după ce*, *de îndată ce*.
   - **Terminate în adverb:** *ca și cum*, *ca și când*, *astfel încât*, *așa încât*, *după cum*, *de parcă*.

---

### C. CLASIFICAREA DUPĂ ROLUL ÎN FRAZĂ

#### I. CONJUNCȚII COORDONATOARE
Leagă două unități sintactice pe același plan (propoziții principale între ele sau subordonate de același fel între ele).

##### 1. Copulative:
Asociază două acțiuni sau însușiri:
- *și*, *nici*, *precum și*, *cât și*, *nu numai..., dar și...*, *nu numai..., ci și...*.
- Ex: *Ea nu numai că învață, dar și muncește.* / *Nici nu scrie, nici nu citește.*

##### 2. Adversative:
Exprimă o opoziție parțială (acțiunile se opun, dar nu se exclud complet):
- *dar*, *iar*, *însă*, *ci*, *numai că*, *or*, *și* (= *dar*).
- Ex: *Te-am căutat, dar nu erai acasă.* / *A fost atent, numai că n-a înțeles.*
- Observație: Înaintea conjuncțiilor adversative se pune **întotdeauna virgulă**!

##### 3. Disjunctive:
Exprimă o alternativă în care acțiunile se exclud reciproc (doar una este posibilă):
- *sau*, *ori*, *fie*, *ba..., ba...*, *când..., când...*, *aci..., aci...*.
- Ex: *Vii acum sau pleci mai târziu?* / *Fie ploaie, fie vânt, noi plecăm.*

##### 4. Conclusive:
A doua propoziție exprimă o concluzie sau o urmare firească a primei:
- *deci*, *așadar*, *prin urmare*, *în concluzie*, *așa că*, *vasăzică*.
- Ex: *A învățat temeinic, deci a promovat.* / *A plouat, așa că nu mai ieșim.*
- Observație: Se despart prin virgulă de restul enunțului.

---

#### II. CONJUNCȚII SUBORDONATOARE
Leagă o propoziție subordonată de regenta ei.

##### 1. Nespecializate (pot introduce mai multe tipuri de subordonate):
- **CĂ:** *Spune / că vine./* (CD) / *Ideea / că pleacă / mă întristează./* (AT) / *E sigur / că știe./* (SB).
- **SĂ:** *Vreau / să citesc./* (CD) / *Mă tem / să nu întârzii./* (CI) / *E bine / să înveți./* (SB) / *A plecat / să cumpere pâine./* (CS).
- **DACĂ / DE:** *Mă întreabă / dacă vin./* (CD) / *Dacă ai timp,/ vino pe la mine./* (CDȚ).
- **CA... SĂ:** *A venit / ca să ne ajute./* (CS).

##### 2. Specializate (introduc un tip specific de subordonată):
- **Temporale:** *până ce*, *după ce*, *în timp ce*, *de îndată ce*, *imediat ce*, *de câte ori*, *ori de câte ori*.
- **Cauzale:** *fiindcă*, *deoarece*, *întrucât*, *pentru că*, *din cauză că*, *din pricină că*, *căci*, *de vreme ce*.
- **Concesive:** *deși*, *cu toate că*, *chiar dacă*, *măcar că*, *chit că*, *fără să*.
- **Consecutive:** *încât*, *astfel încât*, *așa încât*.
- **Condiționale:** *în caz că*, *în caz dacă*.

Observație: Împletirea subordonatei cu regenta:
Apare când un element din subordonată este antepus regentei:
- *Cine ziceai că vine?* (subiectul *cine* al subordonatei este plasat înaintea regentei *ziceai*).
- *Unde sperai să ajungi?*
---

## `MOR-009` — Morfologie — prepoziția

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-005]], [[MOR-002]], [[SIN-001]]
- **source:** `teorie-extrasa.txt:2555–2670`

### Conținut extras și normalizat

- **Definiție:** Prepoziția este partea de vorbire neflexibilă care leagă un atribut sau un complement de cuvântul pe care îl determină (substantiv, pronume, numeral, verb, adjectiv sau adverb).

---

### A. CLASIFICAREA PREPOZIȚIILOR DUPĂ STRUCTURĂ

1. **Simple:** *la*, *pe*, *de*, *cu*, *sub*, *fără*, *spre*, *din*, *către*, *contra*, *a*.
2. **Compuse:**
   - Prin alăturare: *de pe*, *de la*, *de către*, *de sub*, *de lângă*, *pe la*, *pe sub*, *fără de*.
   - Contopite: *dintre*, *dinspre*, *despre*, *înspre*.
   - Cu cratimă (în componența locuțiunilor): *de-a* (*de-a lungul*, *de-a latul*).
3. **Locuțiuni prepoziționale:** grupuri unitare de cuvinte cu valoare de prepoziție:
   - Cu regim de Genitiv: *în fața*, *în spatele*, *în stânga*, *în dreapta*, *la mijlocul*, *în vremea*, *în ciuda*, *în pofida*, *din cauza*, *din pricina*, *în vederea*, *în folosul*, *în afara*, *cu excepția*, *în numele*.
   - Cu regim de Acuzativ: *față de*, *alături de*, *aproape de*, *departe de*, *dincolo de*, *dincoace de*, *înainte de*, *începând cu*, *în jur de*, *conform cu*, *în comparație cu*, *din cauză de*, *cu tot / cu toată*.

---

### B. REGIMUL CAZUAL AL PREPOZIȚIILOR

#### 1. Prepoziții cu cazul ACUZATIV:
Cele mai numeroase prepoziții din limba română cer cazul Acuzativ:
- *pe*, *la*, *cu*, *din*, *în*, *spre*, *către*, *sub*, *peste*, *lângă*, *fără*, *prin*, *pentru*, *după*, *între*, *printre*.
- Toate prepozițiile compuse terminate într-o prepoziție de Acuzativ cer Acuzativul: *de la*, *de pe*, *de către*, *de sub*.

#### 2. Prepoziții cu cazul GENITIV:
- Prepoziții propriu-zise: *asupra*, *deasupra*, *contra*, *împotriva*, *înapoia*, *dinăuntrul*, *îndărătul*, *dedesubtul*.
- Toate locuțiunile prepoziționale terminate într-un substantiv articulat cer Genitivul: *în fața casei*, *în ciuda ploii*, *din cauza poleiului*.

#### 3. Prepoziții cu cazul DATIV:
- Prepoziții neologice și vechi cu sens pozitiv: *grație*, *mulțumită*, *datorită* (+ Dativ fără articol genitival).
- Prepoziții provenite din adverbe: *conform*, *contrar*, *potrivit*, *asemenea*, *aidoma*, *așijderea*.
- Ex: *Reușita se datorează muncii.* / *A acționat contrar așteptărilor.*

---

### C. CONSTRUCȚII ȘI REGULI SPECIALE

1. **Prepoziții de Genitiv cu pronume clitice de Dativ:**
   Când determină forme scurte de pronume personal, prepozițiile de Genitiv se construiesc cu forme de Dativ enclitic:
   - *asupra-mi*, *asupra-ți*, *asupra-i*;
   - *împotrivă-ne*, *deasupra-vă*, *înainte-mi*.
   - Ambele variante fonetice sunt admise în normă: *asupra-mi / asupră-mi*, *deasupra-ți / deasupră-ți*.

2. **Dubla întrebuințare (loc vs. timp):**
   Aceeași prepoziție sau locuțiune poate exprima spațiul sau timpul în funcție de termenul regent și subordonat:
   - *Mașina s-a oprit înaintea casei.* (circumstanțial de loc).
   - *Am sosit înaintea începerii orei.* (circumstanțial de timp).
   - *Copiii se joacă în jurul mesei.* (loc).
   - *Ne întâlnim în jurul sărbătorilor.* (timp).

3. **Conversiuni prepoziționale:**
   - Prepoziție → Conjuncție: *Învăț până la prânz.* (prepoziție) vs. *Aștept / până vine trenul./* (conjuncție).
   - Prepoziție → Adverb: *Cântărește la 5 kilograme.* (= *circa*, *aproximativ*).
   - Prepoziție → Adjectiv pronominal nehotărât: *Am mâncat la mere...* (= *multe mere*).
---

## `MOR-010` — Morfologie — interjecția

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-006]], [[MOR-007]], [[SIN-001]]
- **source:** `teorie-extrasa.txt:2671–2728`

### Conținut extras și normalizat

- **Definiție:** Interjecția este partea de vorbire neflexibilă care exprimă senzații fizice, stări sufletești, îndemnuri, apeluri sau imită sunete și zgomote din natură (onomatopee).

---

### A. CLASIFICAREA INTERJECȚIILOR

1. **Simple:** *of*, *ah*, *vai*, *hai*, *bre*, *zău*, *uf*, *măi*, *ia*, *aoileu*, *pst*.
2. **Compuse:** *iaca*, *heirup*, *tic-tac*, *hodoronc-tronc*, *ham-ham*, *haidem*, *trosc-pleosc*.
3. **Locuțiuni interjecționale:**
   - *ia te uită*, *Doamne ferește*, *Doamne iartă-mă*, *ei bine*, *drăgăliță-Doamne*, *auzi colo*, *pe naiba*, *nu zău*, *păcatele mele*.

---

### B. FUNCȚII SINTACTICE ALE INTERJECȚIEI

Deși în mod tradițional interjecția este lipsită de funcție sintactică de sine stătătoare, în enunțuri dinamice poate îndeplini:
1. **Predicat verbal:**
   - *Pupăza zbrr! pe o dugheană.*
   - *Hai cu noi la plimbare!*
2. **Nume predicativ:**
   - *E vai de capul lor.*
   - *E jale și of în casa aceea.*
3. **Complement direct:**
   - *Aud tic-tac în ceas.*
4. **Subiect:**
   - *Se auzea cioc-cioc la ușă.*
5. **Circumstanțial de mod:**
   - *Mașina mergea hopa-hopa pe drumul pietruit.*

---

### C. PARTICULARITĂȚI ȘI CONSTRUCȚII SPECIALE

1. **Interjecții predicative ce cer Complement Direct:**
   Interjecțiile *iată*, *iacă*, *uite*, *poftim*, *na* au valoare de predicat verbal și primesc un complement direct:
   - *Iată o mașină frumoasă!* (*o mașină* = complement direct).
   - *Uite-o pe Maria!* (*pe Maria* = complement direct).
   - *Iată / ce am cumpărat./* (urmată de completivă directă).

2. **Interjecții cu desinențe verbale:**
   Formele *haidem!* și *haideți!*, deși conțin desinențe verbale de persoană (*-m*, *-ți*), sunt considerate în gramatica normativă interjecții, nu verbe.

3. **Cuvinte de adresare în enunțuri nominale:**
   Cuvintele *Ajutor!* și *Liniște!* sunt substantive în enunțuri eliptice de predicat, nu interjecții propriu-zise.

4. **Conversiunea interjecției în substantiv:**
   Prin articulare enclitică sau determinare adjectivală:
   - *un hop* → *hopul*;
   - *un of* → *oful lui*;
   - *tic-tacul ceasornicului*;
   - *vaiul celor suferinzi*.
---

## `SIN-001` — Sintaxă — propoziția subiectivă și construcțiile impersonale

- **tip:** discipline
- **parent:** `GRA-ROOT`
- **related:** [[MOR-006]], [[MOR-007]], [[MOR-008]], [[MOR-009]]
- **source:** `teorie-extrasa.txt:2729–2876`

### Conținut extras și normalizat

- **Definiție:** Propoziția subiectivă (SB) este propoziția subordonată care îndeplinește la nivel de frază funcția de subiect al verbului regent.

---

### A. EXPANSIUNEA ȘI CONTRAGEREA SUBIECTULUI

- **Expansiune (Subiect → Propoziție Subiectivă):**
  - *Harnicul are de toate.* (subiect) → *Cine e harnic / are de toate./* (SB)
  - *E bine a repeta.* (subiect infinitival) → *E bine / să repeți./* (SB)
- **Contragere (Propoziție Subiectivă → Subiect):**
  - *Cine întârzie / este penalizat./* (SB) → *Întârziatul este penalizat.* (subiect)

---

### B. ELEMENTE DE RELAȚIE (CONECTORI SUBORDONATORI)

1. **Conjuncții subordonatoare:** *că*, *să*, *ca... să*, *dacă*, *de*.
   - *E sigur / că va veni./*
   - *E bine / să fii pregătit./*
   - *Nu se știe / dacă plouă./*
2. **Pronume și adjective pronominale relative:** *cine*, *ce*, *care*, *ceea ce*, *câți*, *câte*.
   - *Cine muncește / are rezultate./*
   - *Ceea ce s-a spus / este adevărat./*
3. **Pronume și adjective pronominale nehotărâte:** *oricine*, *oricare*, *orice*, *oricâți*, *oricâte*.
   - *Oricine dorește / poate participa./*
4. **Adverbe relative:** *unde*, *când*, *cum*, *cât*, *încotro*.
   - *Nu se știe / unde a plecat./*
   - *Nu e clar / când începe cursul./*

---

### C. ELEMENTE REGENTE ALE PROPOZIȚIEI SUBIECTIVE

Propoziția subiectivă determină întotdeauna un **termen impersonal** în regenta sa:

#### 1. Adverbe și locuțiuni adverbiale predicative (urmate de *că* / *să*):
Îndeplinesc funcția de predicat verbal:
- Adverbe: *desigur*, *firește*, *probabil*, *pesemne*, *poate*, *bineînțeles*, *negreșit*.
  - *Desigur / că te voi ajuta./*
  - *Probabil / că a uitat./*
- Locuțiuni adverbiale predicative: *cu siguranță*, *de bună seamă*, *fără doar și poate*, *într-adevăr*.
  - *Fără doar și poate / că a meritat./*

#### 2. Expresii verbale impersonale formate cu verbul *a fi*:
- **A fi + adverb / adjectiv neutru:** *e bine*, *e rău*, *e frumos*, *e urât*, *e ușor*, *e greu*, *e adevărat*, *e sigur*, *e posibil*, *e de dorit*, *e necesar*.
  - *E bine / să fii informat./*
  - *E adevărat / că a sosit./*
- **A fi + substantiv:** *e voie*, *e nevoie*, *e timpul*, *e cazul*, *e păcat*, *e noroc*.
  - *E cazul / să plecăm./*
  - *E păcat / să renunți./*

#### 3. Verbe reflexive impersonale (cu marcă reflexivă pasivă sau impersonală):
- *se zice*, *se aude*, *se știe*, *se cuvine*, *se cade*, *se presupune*, *se întâmplă*, *se zvonește*.
  - *Se cuvine / să mulțumești./*
  - *Se știe / cine a câștigat./*

#### 4. Verbe pasive impersonale:
- *este permis*, *este interzis*, *este dovedit*, *este stabilit*, *este știut*, *este hotărât*.
  - *Este interzis / să fumezi./*
  - *Este dovedit / că pământul se învârte./*

#### 5. Expresii impersonale cu verb la supin:
- *e de înțeles*, *e de prevăzut*, *e de admirat*, *e de mirare*, *e de necrezut*.
  - *E de admirat / cum a rezolvat problema./*

#### 6. Verbe impersonale cu clitice pronominale:
- **Cu pronume clitic la Dativ:** *îmi convine*, *îmi place*, *îmi displace*, *îmi repugnă*, *îi pasă*.
  - *Îmi convine / să mergem acolo./*
- **Cu pronume clitic la Acuzativ:** *mă doare*, *mă miră*, *mă frapează*, *mă întristează*, *mă bucură*, *mă preocupă*.
  - *Mă miră / că nu a sunat./*

#### 7. Verbe impersonale fără pronume:
- *trebuie*, *merită*, *ajunge*, *rămâne*, *contează*, *reiese*, *rezultă*, *urmează*.
  - *Trebuie / să înveți zilnic./*
  - *Merită / să citești această carte./*
  - *Rămâne / să stabilim detaliile./*

---

### D. TOPICĂ ȘI PUNCTUAȚIE

1. **Subiectiva postpusă regentei:**
   Stă de regulă după regenta impersonală și **nu se desparte niciodată prin virgulă**:
   - *E sigur / că vom reuși./*
   - *Trebuie / să plec./*
2. **Subiectiva antepusă regentei:**
   Când este introdusă prin pronume relative (*cine*, *ce*):
   - În mod normal nu se desparte prin virgulă: *Cine aleargă după doi iepuri / nu prinde niciunul./*
   - **Se desparte obligatoriu prin virgulă** dacă este reluată în regentă printr-un pronume demonstrativ (*acela*, *aceea*):
     - *Cine muncește cinstit,/ acela este apreciat./*
---

## Notă de implementare

Pentru integrarea în aplicație, nodurile de programă pot alimenta meniul și traseul de învățare, iar nodurile de sursă pot alimenta explicația și căutarea. Câmpurile `parent`, `children`, `lessons`, `source` și `status` sunt suficiente pentru a construi ulterior un index sau un grafic interactiv.
