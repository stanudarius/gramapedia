// Client-side analytics helper for GA4 event tracking

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackDilemmaClick(dilemmaId: string, category: string, source: string) {
  trackEvent("dilemma_view", {
    dilemma_id: dilemmaId,
    category,
    source,
  });
}

export function trackQuizStart(quizCategory?: string) {
  trackEvent("quiz_start", {
    quiz_category: quizCategory || "general",
  });
}

export function trackQuizComplete(score: number, total: number) {
  trackEvent("quiz_complete", {
    score,
    total,
    percentage: Math.round((score / total) * 100),
  });
}
