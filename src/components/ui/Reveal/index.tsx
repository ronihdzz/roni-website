import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import styles from "./Reveal.module.scss";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Envuelve contenido y reproduce una animacion de entrada (fadeInUp) cuando
 * entra en viewport. El contenido es visible por defecto (sin JS sigue visible).
 */
export default function Reveal({ children, className }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${inView ? styles.visible : ""} ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  );
}
