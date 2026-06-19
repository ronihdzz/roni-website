import { useState, type ReactNode } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./Dropdown.module.scss";

type DropdownProps = {
  /** Contenido del boton disparador; recibe el estado `open` (p.ej. rotar flecha). */
  trigger: (open: boolean) => ReactNode;
  /** Contenido del menu; recibe `close` para cerrarlo al elegir una opcion. */
  children: (close: () => void) => ReactNode;
  triggerClassName?: string;
  menuClassName?: string;
  rootClassName?: string;
  triggerLabel?: string;
};

/**
 * Dropdown accesible y reutilizable: gestiona apertura, click-outside y Escape.
 * El posicionamiento del menu lo define el consumidor via `menuClassName`.
 */
export default function Dropdown({
  trigger,
  children,
  triggerClassName,
  menuClassName,
  rootClassName,
  triggerLabel,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const ref = useClickOutside<HTMLDivElement>(open, close);

  return (
    <div ref={ref} className={`${styles.root} ${rootClassName ?? ""}`.trim()}>
      <button
        type="button"
        className={`${triggerClassName ?? ""} ${open ? styles.active : ""}`.trim()}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={triggerLabel}
        onClick={() => setOpen((o) => !o)}
      >
        {trigger(open)}
      </button>

      <div
        className={`${styles.menu} ${menuClassName ?? ""} ${open ? styles.open : ""}`.trim()}
        role="menu"
      >
        {children(close)}
      </div>
    </div>
  );
}
