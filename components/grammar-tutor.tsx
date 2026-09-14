"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import type { GrammarCase } from "@/lib/site-data";

type GrammarTutorProps = {
  cases: GrammarCase[];
};

type TutorMessage = {
  id: number;
  role: "tutor" | "user";
  text: string;
};

const normalize = (value: string) => value.toLocaleLowerCase("ro").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const getCaseMatch = (text: string, cases: GrammarCase[]) => {
  const normalizedText = normalize(text);
  return cases
    .map((item) => {
      const searchableText = normalize([item.id, item.category, item.prompt, item.answer, ...item.examples].join(" "));
      const keywords = searchableText.split(/[^a-z0-9]+/).filter((word) => word.length > 3);
      const score = keywords.reduce((total, keyword) => total + (normalizedText.includes(keyword) ? 1 : 0), 0);
      return { item, score };
    })
    .sort((first, second) => second.score - first.score)[0];
};

export function GrammarTutor({ cases }: GrammarTutorProps) {
  const [messages, setMessages] = useState<TutorMessage[]>([
    {
      id: 1,
      role: "tutor",
      text: "Pornim de la o întrebare, nu de la răspuns. Alege o dilemă sau scrie ce vrei să exersezi.",
    },
  ]);
  const [input, setInput] = useState("");
  const [messageId, setMessageId] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  const starters = useMemo(() => cases.slice(0, 3), [cases]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const askTutor = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const match = getCaseMatch(trimmed, cases);
    const normalizedText = normalize(trimmed);
    const wantsAnswer = /nu stiu|arata|raspuns|solutia|spune-mi/.test(normalizedText);
    let reply = "Pot lucra cu dilemele din seria curentă. Scrie un cuvânt, o formulare sau alege una dintre întrebările de mai jos.";

    if (match && match.score > 0) {
      if (wantsAnswer) {
        reply = `Răspunsul este «${match.item.answer}». ${match.item.rule} Acum încearcă să formulezi un exemplu nou.`;
      } else {
        reply = `Să pornim de aici: ${match.item.prompt} Ce variantă ai alege și ce indiciu din propoziție te ajută?`;
      }
    } else if (/testeaza|exercitiu|quiz/.test(normalizedText)) {
      const firstCase = cases[0];
      reply = firstCase
        ? `Începem cu o dilemă: ${firstCase.prompt} Alege o variantă și explică de ce.`
        : reply;
    }

    const nextMessages = [
      ...messages,
      { id: messageId, role: "user" as const, text: trimmed },
      { id: messageId + 1, role: "tutor" as const, text: reply },
    ];
    setMessages(nextMessages);
    setMessageId((currentId) => currentId + 2);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askTutor(input);
  };

  return (
    <section className="grammar-tutor" aria-labelledby="grammar-tutor-title">
      <div className="grammar-tutor__header">
        <div>
          <span className="eyebrow eyebrow--coral">Tutor ghidat</span>
          <h3 id="grammar-tutor-title">Întreabă. Argumentează. Verifică.</h3>
        </div>
      </div>

      <div className="grammar-tutor__messages" ref={scrollRef} role="log" aria-live="polite">
        {messages.map((message) => (
          <div className={`grammar-tutor__message grammar-tutor__message--${message.role}`} key={message.id}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      {messages.length === 1 ? (
        <div className="grammar-tutor__starters" aria-label="Întrebări de pornire">
          {starters.map((item) => (
            <button key={item.id} type="button" onClick={() => askTutor(item.prompt)}>
              {item.prompt}
              <ArrowRight size={13} aria-hidden="true" />
            </button>
          ))}
        </div>
      ) : null}

      <form className="grammar-tutor__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Scrie o întrebare sau o formulare..."
          aria-label="Întreabă tutorul Gramapedia"
        />
        <button type="submit" aria-label="Trimite întrebarea" disabled={!input.trim()}>
          <Send size={16} aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}
