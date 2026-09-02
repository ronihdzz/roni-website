import { useCallback, useState } from "react";
import type { LightboxItem } from "@/components/ui/Lightbox";

/** Estado minimo del visor: elemento abierto (o null), abrir y cerrar. */
export function useLightbox() {
  const [item, setItem] = useState<LightboxItem | null>(null);
  const open = useCallback((next: LightboxItem) => setItem(next), []);
  const close = useCallback(() => setItem(null), []);
  return { item, open, close };
}
