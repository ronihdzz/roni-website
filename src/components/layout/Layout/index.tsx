import { useState, type ReactNode } from "react";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import type { Personal } from "@/content/types";
import { getUi } from "@/config/i18n";
import { usePersistedState } from "@/hooks/usePersistedState";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import styles from "./Layout.module.scss";

type LayoutProps = {
  personal: Personal;
  children: ReactNode;
};

/**
 * Estructura general: sidebar fija + area principal. Posee el estado de
 * colapso (persistido) y el menu movil off-canvas.
 */
export default function Layout({ personal, children }: LayoutProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);
  const [collapsed, setCollapsed] = usePersistedState("sidebarCollapsed", false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <div
      className={styles.container}
      data-collapsed={collapsed}
      data-mobile-open={mobileOpen}
    >
      <Sidebar
        personal={personal}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((v) => !v)}
        onNavigate={closeMobile}
      />

      <div className={styles.overlay} onClick={closeMobile} aria-hidden />

      <button
        type="button"
        className={styles.mobileToggle}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? ui.closeMenu : ui.openMenu}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <main className={styles.main}>
        {children}
        <Footer />
      </main>
    </div>
  );
}
