import { useEffect, useRef } from "react";

/**
 * Llama a `handler` cuando se hace clic fuera del elemento referenciado
 * o se presiona Escape. Util para cerrar dropdowns/menus.
 */
export function useClickOutside<T extends HTMLElement>(
  active: boolean,
  handler: () => void,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!active) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (el && !el.contains(event.target as Node)) handler();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handler();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, handler]);

  return ref;
}
