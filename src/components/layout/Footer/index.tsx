import { useRouter } from "next/router";
import { Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { site } from "@/config/site";
import { getUi } from "@/config/i18n";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { locale } = useRouter();
  const ui = getUi(locale);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.copyright}>
            © {year} {site.name}. {ui.footerRights}.
          </p>
          <p className={styles.source}>
            {ui.footerSource}{" "}
            <a
              className={styles.link}
              href={site.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={14} /> GitHub
            </a>
          </p>
        </div>

        <div className={styles.right}>
          <p className={styles.tech}>
            {ui.footerBuilt}{" "}
            <a
              className={styles.techLink}
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            {ui.footerHeart} <Heart size={13} fill="currentColor" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
}
