import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { LearningHeader } from "@/components/learning-header";
import { QuestionPractice } from "@/components/question-practice";
import { getQuestion, getQuestions, getTheoryNode } from "@/lib/knowledge";

export function generateStaticParams() {
  return getQuestions().map((question) => ({ questionId: question.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ questionId: string }> }): Promise<Metadata> {
  const { questionId } = await params;
  const question = getQuestion(questionId);
  const description = question
    ? `${question.prompt.slice(0, 157).trimEnd()}${question.prompt.length > 157 ? "…" : ""} — Grilă de antrenament Gramapedia.`
    : "Grilă de antrenament Gramapedia — limbă română, gramatică, DOOM2.";
  return {
    title: question ? `Grila ${question.number}` : "Grilă",
    description,
    alternates: { canonical: `/grile/${questionId}/` },
  };
}

export default async function QuestionPage({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params;
  const question = getQuestion(questionId);
  if (!question) return null;

  const allQuestions = getQuestions();
  const prevQuestion = allQuestions.find((item) => item.number === question.number - 1);
  const nextQuestion = allQuestions.find((item) => item.number === question.number + 1);
  const sourceNode = question.source?.match(/(FON|ORT|SIL|LEX|MOR|SIN)-\d+/)?.[0];
  const theoryNode = sourceNode ? getTheoryNode(sourceNode) : null;

  return (
    <main className="knowledge-page">
      <LearningHeader />
      <div className="knowledge-shell knowledge-shell--detail">
        <div className="knowledge-breadcrumbs">
          <Link href="/grile/"><ArrowLeft size={14} aria-hidden="true" /> Grile</Link>
          <span>/</span>
          <span>{question.categoryLabel}</span>
        </div>
        <section className="knowledge-detail-header">
          <div>
            <h1>Întrebarea {question.number}</h1>
            {question.prompt ? (
              <p className="knowledge-lede">{question.prompt}</p>
            ) : null}
          </div>
          <Link className="knowledge-icon-action knowledge-icon-action--large" href="/teorie/" aria-label="Mergi la teorie" title="Mergi la teorie"><BookOpen size={18} aria-hidden="true" /></Link>
        </section>
        <QuestionPractice question={question} />
        {theoryNode ? (
          <section className="question-context">
            <Link className="knowledge-child-card" href={`/teorie/${theoryNode.id}/`}>
              <div>
                <span className="eyebrow eyebrow--plum">Lecție asociată</span>
                <strong>{theoryNode.title}</strong>
              </div>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </section>
        ) : null}
        <div className="knowledge-detail-footer">
          {prevQuestion ? (
            <Link className="knowledge-text-link" href={`/grile/${prevQuestion.id}/`}>
              <ArrowLeft size={15} aria-hidden="true" /> Întrebarea {prevQuestion.number}
            </Link>
          ) : (
            <Link className="knowledge-text-link" href="/grile/">
              <ArrowLeft size={15} aria-hidden="true" /> Toate grilele
            </Link>
          )}
          <Link className="knowledge-text-link knowledge-text-link--center" href="/grile/">
            Index grile ({question.number} / {allQuestions.length})
          </Link>
          {nextQuestion ? (
            <Link className="knowledge-text-link" href={`/grile/${nextQuestion.id}/`}>
              Întrebarea {nextQuestion.number} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ) : (
            <Link className="knowledge-text-link" href="/grile/">
              Final bancă <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
