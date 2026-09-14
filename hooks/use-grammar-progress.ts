"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

type GrammarProgress = {
  attempts: number;
  bestScore: number;
  lastScore: number;
};

type ProgressMap = Record<string, GrammarProgress>;

const STORAGE_KEY = "gramapedia:grammar-progress";
const EMPTY_STORAGE = "{}";

const readStorage = () => {
  if (typeof window === "undefined") return EMPTY_STORAGE;

  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? EMPTY_STORAGE;
  } catch {
    return EMPTY_STORAGE;
  }
};

const parseProgress = (storedValue: string): ProgressMap => {
  try {
    const parsedProgress: unknown = JSON.parse(storedValue);
    if (!parsedProgress || typeof parsedProgress !== "object" || Array.isArray(parsedProgress)) return {};

    return Object.fromEntries(
      Object.entries(parsedProgress).filter(([, value]) => {
        if (!value || typeof value !== "object" || Array.isArray(value)) return false;
        const record = value as Partial<GrammarProgress>;
        return typeof record.attempts === "number"
          && typeof record.bestScore === "number"
          && typeof record.lastScore === "number";
      }),
    ) as ProgressMap;
  } catch {
    return {};
  }
};

const subscribe = (onStoreChange: () => void) => {
  if (typeof window === "undefined") return () => undefined;

  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
};

export function useGrammarProgressMap() {
  const storedValue = useSyncExternalStore(subscribe, readStorage, () => EMPTY_STORAGE);
  const progressMap = useMemo(() => parseProgress(storedValue), [storedValue]);

  return { progressMap };
}

export function useGrammarProgress(progressKey: string) {
  const { progressMap } = useGrammarProgressMap();

  const recordAttempt = useCallback((score: number, total: number) => {
    const currentProgress = parseProgress(readStorage());
    const previous = currentProgress[progressKey] ?? { attempts: 0, bestScore: 0, lastScore: 0 };
    const nextProgress = {
      attempts: previous.attempts + 1,
      bestScore: Math.max(previous.bestScore, score),
      lastScore: score,
    };

    if (total <= 0) return;

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...currentProgress, [progressKey]: nextProgress }),
      );
      window.dispatchEvent(new Event("storage"));
    } catch {
      return;
    }
  }, [progressKey]);

  return { progress: progressMap[progressKey] ?? null, recordAttempt };
}
