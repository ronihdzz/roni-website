import type { ReactNode } from "react";
import styles from "./Tag.module.scss";

type TagVariant = "skill" | "tech" | "award";

type TagProps = {
  children: ReactNode;
  variant?: TagVariant;
};

/** Etiqueta/pill reutilizable (skills destacadas, tecnologias, premios). */
export default function Tag({ children, variant = "skill" }: TagProps) {
  return <span className={styles[variant]}>{children}</span>;
}
