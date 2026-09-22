"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent, type PointerEvent } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Bookmark, Check, ListChecks, MessageCircle, Search, Shuffle, X } from "lucide-react";
import type { GrammarCase, GrammarTrail } from "@/lib/site-data";
import { GrammarQuiz } from "@/components/grammar-quiz";
import { GrammarTrails } from "@/components/grammar-trails";
import { GrammarTutor } from "@/components/grammar-tutor";
import { useSavedGrammarCases } from "@/hooks/use-saved-grammar-cases";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";

interface DilemmaLabProps {
  grammarCases: GrammarCase[];
  grammarTrails: GrammarTrail[];
}

export function DilemmaLab({ grammarCases, grammarTrails }: DilemmaLabProps) {
  const grammarCategories = useMemo(() => ["Toate", ...new Set(grammarCases.map((item) => item.category))], [grammarCases]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const lastTouchTapRef = useRef<{ id: string; timestamp: number } | null>(null);
  const lastTouchToggleRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isTutorMode, setIsTutorMode] = useState(false);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [activeTrailId, setActiveTrailId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toate");
  const { savedIds, savedIdSet, toggleSaved } = useSavedGrammarCases();
  const activeTrail = grammarTrails.find((trail) => trail.id === activeTrailId);
  const filteredTrailCases = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase("ro");

    return grammarCases.filter((item) => {
      const belongsToTrail = !activeTrail || activeTrail.id === "seria-completa" || activeTrail.caseIds.includes(item.id);
      const belongsToCategory = selectedCategory === "Toate" || item.category === selectedCategory;
      const searchableText = [item.prompt, item.answer, item.rule, item.category, ...item.examples]
        .join(" ")
        .toLocaleLowerCase("ro");
      const matchesSearch = normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return belongsToTrail && belongsToCategory && matchesSearch;
    });
  }, [activeTrail, searchQuery, selectedCategory, grammarCases]);
  const visibleCases = showSavedOnly ? filteredTrailCases.filter((item) => savedIdSet.has(item.id)) : filteredTrailCases;
  const visibleCaseCount = visibleCases.length;
  const displayedActiveIndex = Math.min(activeIndex, Math.max(visibleCaseCount - 1, 0));
  const isFocusedMode = isQuizMode || isTutorMode;

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container || container.clientHeight === 0) return;

    const nextIndex = Math.max(
      0,
      Math.min(Math.round(container.scrollTop / container.clientHeight), visibleCaseCount - 1),
    );
    setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
  }, [visibleCaseCount]);

  const scrollToCard = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(index, visibleCaseCount - 1));
    const card = cardRefs.current[nextIndex];
    if (!card) return;

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    card.scrollIntoView({ behavior, block: "nearest" });
    setActiveIndex(nextIndex);
  }, [visibleCaseCount]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame = 0;
    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateActiveIndex();
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveIndex();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [updateActiveIndex]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollToCard(activeIndex + 1);
    }

    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToCard(activeIndex - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      scrollToCard(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      scrollToCard(visibleCaseCount - 1);
    }
  };

  const resetScrollPosition = () => {
    setActiveIndex(0);
    cardRefs.current = [];
    window.requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: 0, behavior: "auto" }));
  };

  const updateSearchQuery = (value: string) => {
    setSearchQuery(value);
    resetScrollPosition();
  };

  const updateCategory = (category: string) => {
    setSelectedCategory(category);
    resetScrollPosition();
  };

  const setSavedFilter = (showSaved: boolean) => {
    setShowSavedOnly(showSaved);
    resetScrollPosition();
  };

  const selectTrail = (trailId: string | null) => {
    setActiveTrailId(trailId);
    setShowSavedOnly(false);
    setSearchQuery("");
    setSelectedCategory("Toate");
    setIsQuizMode(false);
    setIsTutorMode(false);
    resetScrollPosition();
  };

  const toggleSavedCard = (id: string) => {
    toggleSaved(id);
    if (showSavedOnly) {
      resetScrollPosition();
    }
  };

  const handleCardDoubleClick = (event: MouseEvent<HTMLElement>, id: string) => {
    if (lastTouchToggleRef.current !== null && event.timeStamp - lastTouchToggleRef.current < 500) return;

    toggleSavedCard(id);
  };

  const handleCardPointerUp = (event: PointerEvent<HTMLElement>, id: string) => {
    if (event.pointerType !== "touch") return;

    const timestamp = event.timeStamp;
    const previousTap = lastTouchTapRef.current;

    if (previousTap?.id === id && timestamp - previousTap.timestamp < 350) {
      event.preventDefault();
      lastTouchTapRef.current = null;
      lastTouchToggleRef.current = timestamp;
      toggleSavedCard(id);
      return;
    }

    lastTouchTapRef.current = { id, timestamp };
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, id: string) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    toggleSavedCard(id);
  };

  const showRandomCard = () => {
    if (visibleCaseCount < 2) return;

    let randomIndex = Math.floor(Math.random() * visibleCaseCount);
    if (randomIndex === displayedActiveIndex) {
      randomIndex = (randomIndex + 1) % visibleCaseCount;
    }
    scrollToCard(randomIndex);
  };

  return (
    <div className="dilemma-lab">
      <div className="grammar-scroll__controls">
        {!isFocusedMode && visibleCaseCount > 0 ? (
          <>
            <span className="grammar-scroll__position" aria-live="polite">
              {String(displayedActiveIndex + 1).padStart(2, "0")} / {String(visibleCaseCount).padStart(2, "0")}
            </span>
            <div
              className="grammar-scroll__progress"
              role="progressbar"
              aria-label="Progresul în seria de dileme gramaticale"
              aria-valuemin={1}
              aria-valuemax={visibleCaseCount}
              aria-valuenow={displayedActiveIndex + 1}
            >
              <span style={{ transform: `scaleX(${(displayedActiveIndex + 1) / visibleCaseCount})` }} />
            </div>
            <div className="grammar-scroll__buttons" aria-label="Navighează între dilemele gramaticale">
              <button
                className="grammar-scroll__button"
                type="button"
                aria-label="Dilema anterioară"
                disabled={displayedActiveIndex === 0}
                onClick={() => scrollToCard(displayedActiveIndex - 1)}
              >
                <ArrowUp size={15} aria-hidden="true" />
              </button>
              <button
                className="grammar-scroll__button"
                type="button"
                aria-label="Dilema următoare"
                disabled={displayedActiveIndex === visibleCaseCount - 1}
                onClick={() => scrollToCard(displayedActiveIndex + 1)}
              >
                <ArrowDown size={15} aria-hidden="true" />
              </button>
            </div>
          </>
        ) : null}
        {!isFocusedMode ? (
          <>
            {visibleCaseCount > 1 ? (
              <button className="grammar-random-button" type="button" aria-label="Surprinde-mă" title="Surprinde-mă" onClick={showRandomCard}>
                <Shuffle size={15} aria-hidden="true" />
              </button>
            ) : null}
            <button
              className={`grammar-saved-button${showSavedOnly ? " is-active" : ""}`}
              type="button"
              aria-pressed={showSavedOnly}
              aria-label={showSavedOnly ? "Arată toate cardurile" : `Carduri salvate: ${savedIds.length}`}
              title={showSavedOnly ? "Arată toate cardurile" : `Carduri salvate: ${savedIds.length}`}
              disabled={savedIds.length === 0 && !showSavedOnly}
              onClick={() => setSavedFilter(!showSavedOnly)}
            >
              <Bookmark size={15} aria-hidden="true" />
            </button>
          </>
        ) : null}
        {isFocusedMode ? (
          <button
            className="grammar-mode-button is-active"
            type="button"
            aria-label="Vezi cardurile"
            title="Vezi cardurile"
            onClick={() => {
              setIsQuizMode(false);
              setIsTutorMode(false);
            }}
          >
            <ArrowLeft size={15} aria-hidden="true" />
          </button>
        ) : (
          <>
            <ShimmerButton
              className="grammar-mode-button"
              type="button"
              aria-label="Testează-te"
              title="Testează-te"
              disabled={visibleCaseCount === 0}
              onClick={() => setIsQuizMode(true)}
              shimmerColor="#e4de78"
              background="#513958"
            >
              <ListChecks size={15} aria-hidden="true" />
            </ShimmerButton>
            <button
              className="grammar-mode-button"
              type="button"
              aria-label="Întreabă tutorul"
              title="Întreabă tutorul"
              disabled={visibleCaseCount === 0}
              onClick={() => setIsTutorMode(true)}
            >
              <MessageCircle size={15} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {!isFocusedMode ? (
        <div className="grammar-discovery">
          <label className="grammar-search">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">Caută în cardurile gramaticale</span>
            <input
              type="search"
              value={searchQuery}
              placeholder="Caută o dilemă, o regulă sau un exemplu"
              onChange={(event) => updateSearchQuery(event.target.value)}
            />
            {searchQuery ? (
              <button type="button" aria-label="Golește căutarea" onClick={() => updateSearchQuery("")}>
                <X size={15} aria-hidden="true" />
              </button>
            ) : null}
          </label>
          <div className="grammar-category-filters" role="group" aria-label="Filtrează după categorie">
            {grammarCategories.map((category) => (
              <button
                className={selectedCategory === category ? "is-active" : ""}
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => updateCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {isQuizMode ? (
        <GrammarQuiz
          cases={visibleCases}
          progressKey={activeTrailId ?? (showSavedOnly ? "saved" : "all")}
          onExit={() => setIsQuizMode(false)}
        />
      ) : isTutorMode ? (
        <GrammarTutor cases={visibleCases} />
      ) : visibleCaseCount === 0 ? (
        <div className="grammar-saved-empty">
          <Bookmark size={22} aria-hidden="true" />
          <h3>{showSavedOnly ? "Nu ai carduri salvate încă." : "Nu am găsit carduri potrivite."}</h3>
          <p>{showSavedOnly ? "Păstrează o dilemă din serie pentru a o regăsi aici." : "Încearcă un alt termen sau elimină filtrul de categorie."}</p>
          <button className="grammar-quiz__button grammar-quiz__button--primary" type="button" onClick={() => setSavedFilter(false)}>
            {showSavedOnly ? "Vezi toate cardurile" : "Resetează filtrul"}
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <>
          <div
            ref={scrollRef}
            className="grammar-scroll"
            tabIndex={0}
            role="region"
            aria-label="Dileme gramaticale și reguli"
            onKeyDown={handleKeyDown}
          >
            {visibleCases.map((item, index) => {
              const isSaved = savedIdSet.has(item.id);

              return (
                <article
                  className={`grammar-card dilemma-panel${isSaved ? " is-saved" : ""}`}
                  key={item.id}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSaved}
                  aria-label={`${item.prompt}. ${isSaved ? "Card salvat." : "Atinge de două ori sau apasă Enter pentru a salva cardul."}`}
                  onDoubleClick={(event) => handleCardDoubleClick(event, item.id)}
                  onPointerUp={(event) => handleCardPointerUp(event, item.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, item.id)}
                >
                  <div className="dilemma-panel__question">
                    <span className="eyebrow eyebrow--coral">{item.category}</span>
                    <h3>{item.prompt}</h3>
                    <span className="dilemma-panel__arrow" aria-hidden="true">
                      <ArrowRight size={23} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="dilemma-panel__answer">
                    {isSaved ? (
                      <span className="grammar-card__saved-mark" aria-hidden="true">
                        <Bookmark size={16} fill="currentColor" />
                      </span>
                    ) : null}
                    <div className="answer-label">
                      <Check size={16} aria-hidden="true" />
                      <span>Regula, pe scurt</span>
                    </div>
                    <p className="answer-title">{item.answer}</p>
                    <p>{item.rule}</p>
                    <div className="example-list">
                      {item.examples.map((example) => (
                        <p key={example}>
                          <span aria-hidden="true">/</span> {example}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grammar-marquee" aria-label="Exemple de dileme gramaticale">
            <Marquee pauseOnHover repeat={2} className="[--duration:72s]">
              {grammarCases.map((item) => (
                <span className="grammar-marquee__item" key={item.id}>{item.prompt}</span>
              ))}
            </Marquee>
          </div>
        </>
      )}

      <GrammarTrails activeTrailId={activeTrailId} grammarTrails={grammarTrails} onSelect={selectTrail} />
    </div>
  );
}
