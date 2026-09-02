import { useState, type CSSProperties } from "react";
import styles from "./ReadMore.module.scss";

type ReadMoreProps = {
  text: string;
  /** Umbral de caracteres a partir del cual se muestra el toggle. */
  max: number;
  /** Lineas visibles mientras esta colapsado. */
  lines?: number;
  moreLabel: string;
  lessLabel: string;
  className?: string;
};

/**
 * Muestra un texto largo con toggle "Ver mas/menos". El texto completo
 * siempre esta en el HTML (crawlers, lectores e IA lo reciben integro); al
 * colapsar solo se recorta visualmente con line-clamp. Los parrafos se
 * separan por dobles saltos de linea.
 */
export default function ReadMore({
  text,
  max,
  lines = 6,
  moreLabel,
  lessLabel,
  className,
}: ReadMoreProps) {
  const [open, setOpen] = useState(false);
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  const collapsible = text.length > max;
  const collapsed = collapsible && !open;

  return (
    <div className={className}>
      <div
        className={collapsed ? styles.clamped : undefined}
        style={collapsed ? ({ WebkitLineClamp: lines } as CSSProperties) : undefined}
      >
        {paragraphs.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      {collapsible && (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
