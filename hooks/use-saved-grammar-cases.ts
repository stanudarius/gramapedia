"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "gramapedia:saved-grammar-cases";
const EMPTY_STORAGE = "[]";

const readStorage = () => {
  if (typeof window === "undefined") return EMPTY_STORAGE;

  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? EMPTY_STORAGE;
  } catch {
    return EMPTY_STORAGE;
  }
};

const parseSavedIds = (storedValue: string) => {
  try {
    const parsedIds: unknown = JSON.parse(storedValue);
    return Array.isArray(parsedIds) && parsedIds.every((id): id is string => typeof id === "string")
      ? parsedIds
      : [];
  } catch {
    return [];
  }
};

const subscribe = (onStoreChange: () => void) => {
  if (typeof window === "undefined") return () => undefined;

  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
};

export function useSavedGrammarCases() {
  const storedValue = useSyncExternalStore(subscribe, readStorage, () => EMPTY_STORAGE);
  const savedIds = useMemo(() => parseSavedIds(storedValue), [storedValue]);

  const toggleSaved = useCallback((id: string) => {
    const currentIds = parseSavedIds(readStorage());
    const nextIds = currentIds.includes(id)
      ? currentIds.filter((currentId) => currentId !== id)
      : [...currentIds, id];

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
      window.dispatchEvent(new Event("storage"));
    } catch {
      return;
    }
  }, []);

  const savedIdSet = useMemo(() => new Set(savedIds), [savedIds]);

  return { savedIds, savedIdSet, toggleSaved };
}
