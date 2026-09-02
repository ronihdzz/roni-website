import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import styles from "./Lightbox.module.scss";

export type LightboxItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

type LightboxProps = {
  item: LightboxItem | null;
  closeLabel: string;
  onClose: () => void;
};

/**
 * Visor modal para ver una foto o un video en grande. Se monta en <body> via
 * portal (los ancestros con transform romperian position: fixed). Cierra con
 * Escape, con el boton o pulsando el fondo; bloquea el scroll mientras esta
 * abierto y devuelve el foco al elemento que lo abrio.
 */
export default function Lightbox({ item, closeLabel, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, [item, onClose]);

  if (!item || typeof document === "undefined") return null;

  return createPortal(
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={item.alt}
        onClick={(event) => event.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            className={styles.media}
            src={item.src}
            controls
            autoPlay
            playsInline
            aria-label={item.alt}
          />
        ) : (
          // Imagen a tamano completo desde public/ o un host externo.
          // eslint-disable-next-line @next/next/no-img-element
          <img className={styles.media} src={item.src} alt={item.alt} />
        )}
        {item.alt && <p className={styles.caption}>{item.alt}</p>}
      </div>

      <button
        ref={closeRef}
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label={closeLabel}
        title={closeLabel}
      >
        <X size={18} aria-hidden />
      </button>
    </div>,
    document.body,
  );
}
