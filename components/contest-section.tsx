import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, CalendarDays, Check, FileText, MapPin } from "lucide-react";
import type { ContestEdition } from "@/lib/site-data";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";

const contestPosterDimensions = { width: 620, height: 930 };

interface ContestSectionProps {
  contestEditions: ContestEdition[];
  totalDilemmas: number;
}

export function ContestSection({ contestEditions, totalDilemmas }: ContestSectionProps) {
  const latestContestYear = contestEditions.at(-1)?.year ?? "2026";

  return (
    <section className="contest section-shell" id="concurs" aria-labelledby="contest-title">
      <div className="shell">
        <div className="section-heading contest-editorial-nav">
          <div className="section-heading__index">05</div>
          <p className="eyebrow">Concurs</p>
        </div>

        <div className="contest-editorial-hero">
          <div className="contest-editorial-copy">
            <h2 id="contest-title">
              <span>Dacă vrei să te</span>
              <span>antrenezi pentru</span>
              <em>performanță.</em>
            </h2>
            <div className="contest-editorial-meta">
              <p>Concursul de gramatică pentru elevii care vor să-și testeze cunoștințele într-un cadru prietenos, competitiv și atent construit.</p>
              <span>BUCUREȘTI<br />{latestContestYear}</span>
            </div>
            <a className="button button--coral contest-editorial__cta" href="#inscrieri">
              Vreau să particip
            </a>
          </div>

          <div className="contest-editorial-art" role="img" aria-label="Afiș editorial pentru Concursul de gramatică">
            <div className="contest-editorial-art__orbit contest-editorial-art__orbit--one" aria-hidden="true" />
            <div className="contest-editorial-art__orbit contest-editorial-art__orbit--two" aria-hidden="true" />
            <div className="contest-editorial-art__dot" aria-hidden="true" />
            <div className="contest-editorial-poster">
              <div className="contest-editorial-poster__inner">
                <span>clubul de gramatică</span>
                <strong>Excelența<br />se<br /><em>confirmă!</em></strong>
                <p>Un loc pentru cei care știu că precizia poate fi o formă de libertate.</p>
              </div>
            </div>
            <div className="contest-editorial-badge" aria-hidden="true">
              <ArrowDownRight size={27} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="contest__overview" id="concurs-despre">
          <div className="contest__statement" id="concurs-cum">
            <h3>Excelența se confirmă!</h3>
            <p>
              În cadrul ediției din 2024, ocupanții podiumului au obținut medii de 10, 10, respectiv 9,95 la Evaluarea Națională, reconfirmând, astfel, faptul că sunt elevi de elită.
            </p>
            <p>
              Anual, Clubul de Gramatică organizează un concurs adresat tuturor elevilor din București, de gimnaziu și de liceu, care vor să-și testeze cunoștințele gramaticale înaintea examenelor naționale sau acceptă o provocare intelectuală.
            </p>
          </div>

          <div className="contest__facts" id="concurs-date" aria-label="Informații despre concurs">
            <div className="contest-fact">
              <MapPin size={18} aria-hidden="true" />
              <span>Elevi din București</span>
            </div>
            <div className="contest-fact">
              <Check size={18} aria-hidden="true" />
              <span>Participare gratuită</span>
            </div>
            <div className="contest-fact">
              <CalendarDays size={18} aria-hidden="true" />
              <span>Înscrieri în primăvară</span>
            </div>
            <div className="contest-fact">
              <CalendarDays size={18} aria-hidden="true" />
              <span>Concursul are loc în mai–iunie</span>
            </div>
          </div>
        </div>

        <div className="contest__archive">
          <div className="contest__archive-heading">
            <div>
              <p className="eyebrow eyebrow--muted">Pregătește-te cu edițiile anterioare</p>
              <h3>Edițiile concursului</h3>
            </div>
            <p className="contest__archive-note">Subiecte, bareme și afișe pentru antrenament.</p>
          </div>

          <div className="contest__stats" aria-label="Statistici Gramapedia">
            <div><NumberTicker value={contestEditions.length} /><span>ediții</span></div>
            <div><NumberTicker value={totalDilemmas} /><span>dileme disponibile</span></div>
          </div>

          <div className="contest-edition-grid">
            {contestEditions.map((edition) => (
              <article className="contest-edition" key={edition.year}>
                <MagicCard className="contest-edition__magic">
                  <div className="contest-edition__poster">
                    <Image
                      src={edition.poster}
                      alt={edition.posterAlt}
                      width={contestPosterDimensions.width}
                      height={contestPosterDimensions.height}
                      sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  </div>
                  <div className="contest-edition__body">
                    <p className="eyebrow eyebrow--muted">{edition.edition}</p>
                    <h4>Concurs de gramatică</h4>
                    <p className="contest-edition__date">{edition.date}</p>
                    <div className="contest-edition__links">
                      <a href={edition.subjectUrl} target="_blank" rel="noopener noreferrer">
                        <FileText size={15} aria-hidden="true" />
                        Subiect
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                      <a href={edition.rubricUrl} target="_blank" rel="noopener noreferrer">
                        <FileText size={15} aria-hidden="true" />
                        Barem
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </MagicCard>
              </article>
            ))}
          </div>
        </div>

        <p className="contest__closing">
          Participarea este gratuită în limita locurilor disponibile. Concursul are loc în perioada mai–iunie și este urmat de o festivitate de decernare a premiilor.
        </p>
      </div>
    </section>
  );
}
