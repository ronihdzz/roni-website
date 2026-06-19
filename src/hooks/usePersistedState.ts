import { useCallback, useMemo, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

/**
 * useState persistido en localStorage. SSR-safe via useSyncExternalStore:
 * en el servidor (y primer render) usa `initial`, y rehidrata tras montar sin
 * provocar setState dentro de un effect. Reactivo entre pestañas.
 */
export function usePersistedState<T>(
  key: string,
  initial: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const raw = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    () => null,
  );

  const value = useMemo<T>(() => {
    if (raw === null) return initial;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return initial;
    }
  }, [raw, initial]);

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      try {
        const stored = window.localStorage.getItem(key);
        let current = initial;
        if (stored !== null) {
          try {
            current = JSON.parse(stored) as T;
          } catch {
            current = initial;
          }
        }
        const resolved =
          typeof next === "function" ? (next as (prev: T) => T)(current) : next;
        window.localStorage.setItem(key, JSON.stringify(resolved));
        window.dispatchEvent(new StorageEvent("storage", { key }));
      } catch {
        /* localStorage no disponible: no-op */
      }
    },
    [key, initial],
  );

  return [value, setValue];
}
