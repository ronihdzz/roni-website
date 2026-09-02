import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Download,
  FileText,
  Globe,
  User,
  Users,
  Star,
  Code2,
  FolderGit2,
  Mail,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaYoutube, FaMedium } from "react-icons/fa6";
import type { Personal } from "@/content/types";
import { site } from "@/config/site";
import { getUi, navSections, type NavSection } from "@/config/i18n";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Dropdown from "@/components/ui/Dropdown";
import styles from "./Sidebar.module.scss";

const NAV_ICONS: Record<NavSection, typeof User> = {
  about: User,
  moments: Star,
  community: Users,
  skills: Code2,
  projects: FolderGit2,
  contact: Mail,
};

type SidebarProps = {
  personal: Personal;
  collapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate: () => void;
};

export default function Sidebar({
  personal,
  collapsed,
  onToggleCollapse,
  onNavigate,
}: SidebarProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);
  const active = useScrollSpy(navSections);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <button
        type="button"
        className={styles.collapseToggle}
        onClick={onToggleCollapse}
        aria-label={collapsed ? ui.expandSidebar : ui.collapseSidebar}
        title={collapsed ? ui.expandSidebar : ui.collapseSidebar}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className={styles.langWrap}>
        <Dropdown
          triggerLabel={ui.languageSelector}
          triggerClassName={styles.langTrigger}
          menuClassName={styles.langMenu}
          trigger={(open) => (
            <>
              <span className={styles.langCurrent}>
                {locale === "en" ? "EN" : "ES"}
              </span>
              <ChevronDown
                size={12}
                className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`}
              />
            </>
          )}
        >
          {(close) => (
            <>
              <Link
                href="/"
                locale="es"
                className={styles.option}
                onClick={close}
              >
                <Globe size={14} className={styles.optionIcon} />
                {ui.spanish}
              </Link>
              <Link
                href="/"
                locale="en"
                className={styles.option}
                onClick={close}
              >
                <Globe size={14} className={styles.optionIcon} />
                {ui.english}
              </Link>
            </>
          )}
        </Dropdown>
      </div>

      <div className={styles.avatar}>
        <Image
          src={personal.photo}
          alt={`${personal.name} - ${personal.profession}`}
          fill
          sizes="80px"
          className={styles.avatarImg}
          priority
        />
      </div>

      <h2 className={styles.name}>{personal.name}</h2>
      <p className={styles.profession}>{personal.profession}</p>

      <nav className={styles.nav} aria-label={personal.name}>
        <ul className={styles.navList}>
          {navSections.map((id) => {
            const Icon = NAV_ICONS[id];
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`${styles.navLink} ${active === id ? styles.active : ""}`}
                  onClick={onNavigate}
                >
                  <Icon size={16} className={styles.navIcon} />
                  <span className={styles.label}>{ui.nav[id]}</span>
                </a>
              </li>
            );
          })}

          <li>
            <Dropdown
              triggerLabel={ui.downloadCv}
              triggerClassName={styles.navButton}
              menuClassName={styles.cvMenu}
              trigger={(open) => (
                <>
                  <Download size={16} className={styles.navIcon} />
                  <span className={styles.label}>{ui.downloadCv}</span>
                  <ChevronDown
                    size={14}
                    className={`${styles.arrow} ${styles.arrowAuto} ${open ? styles.arrowOpen : ""}`}
                  />
                </>
              )}
            >
              {(close) => (
                <>
                  <a
                    className={styles.option}
                    href={personal.cv.spanish}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                  >
                    <FileText size={14} className={styles.optionIcon} />
                    {ui.spanishCv}
                  </a>
                  <a
                    className={styles.option}
                    href={personal.cv.english}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                  >
                    <FileText size={14} className={styles.optionIcon} />
                    {ui.englishCv}
                  </a>
                </>
              )}
            </Dropdown>
          </li>
        </ul>
      </nav>

      <div className={styles.social}>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={16} />
        </a>
        <a
          href={site.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube size={16} />
        </a>
        <a
          href={site.social.medium}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
        >
          <FaMedium size={16} />
        </a>
      </div>
    </aside>
  );
}
