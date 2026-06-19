import { useState } from "react";
import styles from "./ReadMore.module.scss";

type ReadMoreProps = {
  text: string;
  max: number;
  moreLabel: string;
  lessLabel: string;
  className?: string;
};

/**
 * Muestra un texto truncado a `max` caracteres con un toggle "Ver mas/menos".
 * Si el texto no supera `max`, se renderiza completo sin toggle.
 * El texto completo se divide en parrafos por dobles saltos de linea.
 */
export default function ReadMore({
  text,
  max,
  moreLabel,
  lessLabel,
  className,
}: ReadMoreProps) {
  const [open, setOpen] = useState(false);
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  const needsTruncation = text.length > max;

  return (
    <div className={className}>
      {!needsTruncation || open ? (
        paragraphs.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>
            {paragraph}
          </p>
        ))
      ) : (
        <p className={styles.paragraph}>{text.slice(0, max).trimEnd()}…</p>
      )}

      {needsTruncation && (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
