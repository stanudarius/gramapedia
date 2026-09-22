import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  Compass,
  FileText,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Instagram,
  Mail,
  Sparkles,
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { ContestSection } from "@/components/contest-section";
import { DilemmaLab } from "@/components/dilemma-lab";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { Highlighter } from "@/components/ui/highlighter";
import { TextAnimate } from "@/components/ui/text-animate";
import { audiences, learningSteps, reasons, grammarTrails } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { getDilemmas, getCompetitions } from "@/lib/content";

const processIcons = [CalendarDays, Sparkles, FileText];
const reasonIcons = [BookOpen, Lightbulb, MessageCircle];

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const dilemmas = getDilemmas();
  const competitions = getCompetitions();
  const hydratedTrails = grammarTrails.map((trail) =>
    trail.id === "seria-completa" ? { ...trail, caseIds: dilemmas.map((d) => d.id) } : trail
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Gramapedia",
    description: "Clubul de gramatică al Colegiului Național «Gheorghe Lazăr».",
    url: siteConfig.url,
    image: `${siteConfig.url}/gramapedia-logo.jpg`,
    logo: `${siteConfig.url}/favicon.png`,
    email: siteConfig.email,
    sameAs: [siteConfig.instagramUrl],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#main-content">
        Saltă la conținut
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="shell hero__grid">
            <div className="hero__copy reveal-up">
              <p className="eyebrow eyebrow--coral">Club de gramatică · din 2022</p>
              <h1 id="hero-title">
                <TextAnimate accessible={false} className="hero__title-line">
                  Limbă.
                </TextAnimate>
                <TextAnimate accessible={false} className="hero__title-line hero__title-line--accent" delay={0.08}>
                  Logică.
                </TextAnimate>
                <TextAnimate accessible={false} className="hero__title-line" delay={0.16}>
                  Claritate.
                </TextAnimate>
              </h1>
              <p className="hero__lede">
                Cunoștințele de gramatică a limbii materne reprezintă o parte din cultura generală a fiecăruia. Gramatica ne învață să gândim clar, să ne ordonăm ideile într-o manieră coerentă, pentru că aceasta este o expresie a gândirii logice.
              </p>
              <div className="hero__actions">
                <a className="button button--coral" href="#despre">
                  Descoperă clubul
                </a>
                <a className="text-link" href="#dilema">
                  Vezi cum lucrăm
                </a>
              </div>
              <div className="hero__microcopy">
                <span className="status-dot" aria-hidden="true" />
                <span>Pentru gimnaziu și liceu</span>
                <span className="microcopy-divider" aria-hidden="true" />
                <span>CN «Gheorghe Lazăr»</span>
              </div>
            </div>

            <div className="hero-lab reveal-up reveal-up--delay" aria-label="Un traseu vizual de la dilemă la regulă">
              <div className="hero-lab__orbit hero-lab__orbit--one" aria-hidden="true" />
              <div className="hero-lab__orbit hero-lab__orbit--two" aria-hidden="true" />
              <div className="hero-lab__card hero-lab__card--question">
                <span className="hero-lab__card-label">dilemă</span>
                <strong>«o artificie»<br />sau «un artificiu»?</strong>
                <span className="hero-lab__card-mark">?</span>
              </div>
              <div className="hero-lab__connector hero-lab__connector--one" aria-hidden="true" />
              <div className="hero-lab__card hero-lab__card--analysis">
                <span className="hero-lab__card-label">analiză</span>
                <div className="analysis-lines" aria-hidden="true"><i /><i /><i /></div>
                <span className="hero-lab__card-mark">→</span>
              </div>
              <div className="hero-lab__connector hero-lab__connector--two" aria-hidden="true" />
              <div className="hero-lab__card hero-lab__card--rule">
                <span className="hero-lab__card-label">regulă</span>
                <strong><Highlighter action="underline" color="#e4de78" strokeWidth={2} padding={1}>un artificiu</Highlighter></strong>
                <span className="hero-lab__card-caption">forma corectă</span>
                <span className="hero-lab__card-check" aria-hidden="true"><Check size={17} /></span>
              </div>
            </div>
          </div>
        </section>

        <section className="intro section-shell" id="despre" aria-labelledby="about-title">
          <div className="shell">
            <SectionHeading
              index="01"
              eyebrow="Despre noi"
              title="Degeaba ești bun într-un domeniu, dacă nu știi gramatică, căci nu te ia nimeni în serios."
              description="Gramapedia este clubul de gramatică al Colegiului Național «Gheorghe Lazăr» — un spațiu pentru curiozitate, exercițiu și întrebări bune."
              titleId="about-title"
            />
            <div className="intro__content">
              <p className="display-quote">Elevii nu învață doar reguli gramaticale, dar le și aplică prin jocuri, activități interactive și analize de materiale reale din mediul înconjurător.</p>
              <div className="intro__details">
                <p>
                  Ne-am propus să facem din gramatică un exercițiu de gândire, nu o colecție de excepții. De aceea, la Gramapedia trecem mereu de la regulă la context și înapoi.
                </p>
                <a className="text-link text-link--dark" href="#cum-lucram">
                  Vezi formatul întâlnirilor
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="process section-shell section-shell--lavender" id="cum-lucram" aria-labelledby="process-title">
          <div className="shell">
            <SectionHeading
              index="02"
              eyebrow="Cum lucrăm"
              title="De la dilemă la regulă."
              description="Întâlnirile combină explicația, jocul și analiza ca să poți folosi ce ai înțeles, nu doar să recunoști definiția."
              titleId="process-title"
            />
            <div className="feature-grid process-grid">
              {learningSteps.map((step, index) => {
                const StepIcon = processIcons[index];

                return (
                  <article className="feature-card" key={step.number}>
                    <div className="feature-card__top">
                      <span className="feature-card__icon" aria-hidden="true"><StepIcon size={20} /></span>
                    </div>
                    <p className="eyebrow feature-card__label">{step.number} / {step.eyebrow}</p>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <span className="feature-card__line" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="why section-shell" aria-labelledby="why-title">
          <div className="shell why__grid">
            <div className="why__lead">
              <p className="eyebrow">03 / De ce contează</p>
              <h2 id="why-title">Când știi să folosești cuvântul, ai mai multă claritate.</h2>
              <p>
                Gramatica ne ajută să citim cu atenție, să argumentăm mai bine și să spunem exact ceea ce vrem să spunem. Este o formă de claritate care rămâne cu tine în orice domeniu.
              </p>
            </div>
            <div className="feature-grid reason-grid">
              {reasons.map((reason, index) => {
                const ReasonIcon = reasonIcons[index];

                return (
                  <article className="feature-card" key={reason.index}>
                    <div className="feature-card__top">
                      <span className="feature-card__icon" aria-hidden="true"><ReasonIcon size={20} /></span>
                    </div>
                    <p className="eyebrow feature-card__label">{reason.index}</p>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                    <span className="feature-card__line" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="dilemma section-shell section-shell--ink" id="dilema" aria-labelledby="dilemma-title">
          <div className="shell">
            <div className="dilemma__intro">
              <SectionHeading
                index="04"
                eyebrow="De la dilemă la regulă"
                title="Întrebarea este începutul, nu problema."
                description="Un mic laborator pentru genul de situații pe care le desfacem împreună la club."
                titleId="dilemma-title"
              />
              <div className="dilemma__side-note">
                <FlaskConical size={20} aria-hidden="true" />
                <span>alege un caz<br />și urmărește firul</span>
              </div>
            </div>
            <DilemmaLab grammarCases={dilemmas} grammarTrails={hydratedTrails} />
          </div>
        </section>

        <ContestSection contestEditions={competitions} totalDilemmas={dilemmas.length} />

        <section className="audience section-shell" aria-labelledby="audience-title">
          <div className="shell">
            <SectionHeading
              index="06"
              eyebrow="Pentru cine"
              title="Dacă te pasionează limba română sau vrei să faci o carieră din ea, ești în locul potrivit."
              description="Clubul este pentru elevii de gimnaziu și liceu, cu obiective diferite, dar cu aceeași curiozitate."
              titleId="audience-title"
            />
            <div className="feature-grid audience-grid">
              {audiences.map((audience, index) => (
                <article className="feature-card" key={audience.label}>
                  <div className="feature-card__top">
                    <span className="feature-card__icon" aria-hidden="true">
                      {index === 0 ? <BookOpen size={20} /> : index === 1 ? <GraduationCap size={20} /> : <Compass size={20} />}
                    </span>
                  </div>
                  <p className="eyebrow feature-card__label">{audience.label}</p>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                  <span className="feature-card__line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="enrollment section-shell" id="inscrieri" aria-labelledby="enrollment-title">
          <div className="shell enrollment__inner">
            <div className="enrollment__seal" aria-hidden="true">
              <span>începe</span>
              <strong>cu o<br />întrebare</strong>
              <span>gramapedia · club de gramatică</span>
            </div>
            <div className="enrollment__copy">
              <p className="eyebrow eyebrow--coral">Înscrieri · anul școlar 2026–2027</p>
              <h2 id="enrollment-title">Ai o dilemă de gramatică? Hai să o desfacem împreună.</h2>
              <p>Formularul de înscriere pentru anul școlar 2026–2027 va fi publicat în curând. Urmărește-ne sau scrie-ne pentru noutăți.</p>
              <div className="enrollment__actions">
                <a className="button button--coral" href={`mailto:${siteConfig.email}`}>
                  Scrie-ne un e-mail <Mail size={16} aria-hidden="true" />
                </a>
                <a className="text-link text-link--light" href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Urmărește Gramapedia <Instagram size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="enrollment__meta">
              <div><CalendarDays size={17} aria-hidden="true" /><span>întâlniri săptămânale</span></div>
              <div><Check size={17} aria-hidden="true" /><span>înscrieri la început de an</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell site-footer__top">
          <div>
            <a href="#top" aria-label="Înapoi la început"><BrandMark /></a>
            <p>Limba română, privită cu atenție.<br />Și cu puțină curiozitate în plus.</p>
          </div>
          <div className="site-footer__links">
            <p className="eyebrow">Explorează</p>
            <a href="#despre">Despre noi</a>
            <a href="#dilema">De la dilemă la regulă</a>
            <a href="#concurs">Concurs</a>
            <a href="#inscrieri">Înscrieri</a>
          </div>
          <div className="site-footer__links">
            <p className="eyebrow">Contact</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="shell site-footer__bottom">
          <span>© {currentYear} Gramapedia</span>
          <span>Colegiul Național «Gheorghe Lazăr»</span>
        </div>
      </footer>
    </>
  );
}
