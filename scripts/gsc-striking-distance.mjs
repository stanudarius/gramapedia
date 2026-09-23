import fs from 'node:fs';
import path from 'node:path';

const reportsDir = path.join(process.cwd(), 'reports');
const reportFile = path.join(reportsDir, 'striking-distance-report.md');

function parseArgs(args) {
  const result = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = args[i + 1];
      if (next && !next.startsWith('--')) {
        result[key] = next;
        i++;
      } else {
        result[key] = true;
      }
    }
  }
  return result;
}

export function runGscReport() {
  const args = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  console.log('=== Generare Raport Google Search Console: Pagini la Distanță de Lovire (Pozițiile 6–15) ===\n');

  let rows = [];

  if (args.data && fs.existsSync(args.data)) {
    console.log(`Încărcare date din fișierul extern: ${args.data}`);
    const raw = fs.readFileSync(args.data, 'utf8');
    if (args.data.endsWith('.json')) {
      rows = JSON.parse(raw);
    } else if (args.data.endsWith('.csv')) {
      // Basic CSV parser
      const lines = raw.split('\n').filter(Boolean);
      const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
      rows = lines.slice(1).map(l => {
        const parts = l.split(',').map(p => p.trim().replace(/^"|"$/g, ''));
        const obj = {};
        headers.forEach((h, idx) => obj[h] = parts[idx]);
        return {
          query: obj.Top_queries || obj.Query || obj.query,
          page: obj.Pages || obj.Page || obj.page,
          clicks: parseInt(obj.Clicks || obj.clicks || '0', 10),
          impressions: parseInt(obj.Impressions || obj.impressions || '0', 10),
          position: parseFloat(obj.Position || obj.position || '0'),
          ctr: parseFloat(obj.CTR || obj.ctr || '0')
        };
      });
    }
  } else {
    console.log('Notă: Nu a fost furnizat un fișier de date GSC (--data <path>).');
    console.log('Se generează raportul demonstrativ cu paginile prioritate din catalogul Gramapedia.');

    // Simulated benchmark baseline for newly launched dilemma pages
    rows = [
      { query: "un artificiu sau o artificie", page: "/dileme/artificiu/", clicks: 140, impressions: 3200, position: 7.2, ctr: 4.3 },
      { query: "pe care sau care regula", page: "/dileme/pe-care/", clicks: 290, impressions: 8500, position: 8.4, ctr: 3.4 },
      { query: "am decat sau am doar doua minute", page: "/dileme/decat-doar/", clicks: 85, impressions: 1900, position: 9.1, ctr: 4.5 },
      { query: "cum se scrie intr-adevar", page: "/dileme/intr-adevar/", clicks: 160, impressions: 4100, position: 6.8, ctr: 3.9 },
      { query: "sa fii sau sa fi atent", page: "/dileme/sa-fii/", clicks: 310, impressions: 7200, position: 7.5, ctr: 4.3 },
      { query: "la maxim sau la maximum", page: "/dileme/maximum/", clicks: 65, impressions: 1400, position: 11.2, ctr: 4.6 },
      { query: "servici sau serviciu forma corecta", page: "/dileme/serviciu/", clicks: 95, impressions: 2100, position: 8.9, ctr: 4.5 },
      { query: "virgula inainte de dar", page: "/dileme/virgula-dar/", clicks: 120, impressions: 2800, position: 10.4, ctr: 4.2 },
      { query: "virgula la vocativ maria", page: "/dileme/vocativ/", clicks: 50, impressions: 1100, position: 12.1, ctr: 4.5 },
      { query: "fata al carei sau a carui frate", page: "/dileme/al-carui/", clicks: 75, impressions: 1650, position: 9.8, ctr: 4.5 },
      { query: "cincizeci si una de universitati", page: "/dileme/cincizeci-si-una/", clicks: 40, impressions: 950, position: 13.5, ctr: 4.2 }
    ];
  }

  // Filter to striking distance: 6.0 <= position <= 15.0
  const strikingDistance = rows
    .filter(r => r.position >= 6.0 && r.position <= 15.0)
    .sort((a, b) => b.impressions - a.impressions);

  let md = `# Raport Săptămânal SEO — Pagini la Distanță de Lovire (Pozițiile 6–15)\n\n`;
  md += `**Data generării:** ${new Date().toLocaleDateString('ro-RO')}\n`;
  md += `**Obiectiv:** Creșterea traficului organic spre 10.000+ vizitatori prin optimizarea paginilor aflate pe pragul paginii 1 Google.\n\n`;
  md += `| Interogare (Căutare Google) | Pagină | Impresii | Clicuri | Poziție Medie | CTR | Recomandare de Optimizare |\n`;
  md += `|:----------------------------|:-------|:---------|:--------|:--------------|:----|:--------------------------|\n`;

  strikingDistance.forEach(item => {
    let rec = "Întărire linking intern din Teorie";
    if (item.position <= 8.0) rec = "**Prioritate 1:** Adăugare exemplu DOOM3 în subtitlu";
    else if (item.position <= 11.0) rec = "Adăugare întrebare conexă în FAQ schema";

    md += `| **${item.query}** | [${item.page}](https://gramapedia.ro${item.page}) | ${item.impressions.toLocaleString('ro-RO')} | ${item.clicks.toLocaleString('ro-RO')} | ${item.position.toFixed(1)} | ${item.ctr}% | ${rec} |\n`;
  });

  md += `\n### Ghid de Acțiune pentru Pagini în Pozițiile 6–15:\n`;
  md += `1. **Titlu & Snippet:** Verificați dacă titlul răspunde direct la întrebarea utilizatorului («X sau Y? Care este forma corectă»).\n`;
  md += `2. **Internal Linking:** Asigurați-vă că noțiunile de teorie din \`/teorie/\` au legături interne către dilema corespunzătoare.\n`;
  md += `3. **Exemple suplimentare:** Adăugarea a 1–2 contexte reale (texte literare sau bareme de concurs) crește relevanța semantică.\n`;

  fs.writeFileSync(reportFile, md, 'utf8');

  console.log(`✔ Raport generat cu succes cu ${strikingDistance.length} pagini în distanță de lovire.`);
  console.log(`Fișier raport: reports/striking-distance-report.md\n`);
}

if (process.argv[1] && process.argv[1].endsWith('gsc-striking-distance.mjs')) {
  runGscReport();
}
