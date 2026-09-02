import { useRouter } from "next/router";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import type { Personal, RoleKind } from "@/content/types";
import { getUi } from "@/config/i18n";
import ReadMore from "@/components/ui/ReadMore";
import Tag from "@/components/ui/Tag";
import styles from "./Hero.module.scss";

type HeroProps = {
  personal: Personal;
  featured: string[];
};

const ROLE_ICONS: Record<RoleKind, typeof Briefcase> = {
  work: Briefcase,
  community: Users,
};

/** Indice de la parte del titulo que lleva el nombre (unico <h1> de la pagina). */
const NAME_PART = 1;

export default function Hero({ personal, featured }: HeroProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.title}>
        {personal.titleParts.map((part, i) => {
          const Heading = i === NAME_PART ? "h1" : "p";
          return (
            <Heading key={i} className={styles.titlePart} data-part={i + 1}>
              {part}
            </Heading>
          );
        })}
      </div>

      <ul className={styles.roles}>
        {personal.roles.map((role) => {
          const Icon = ROLE_ICONS[role.kind];
          const body = (
            <>
              <Icon size={14} className={styles.roleIcon} aria-hidden />
              <span className={styles.roleTitle}>{role.title}</span>
              <span className={styles.roleOrg}>@ {role.org}</span>
            </>
          );
          return (
            <li key={role.org}>
              {role.url ? (
                <a
                  className={styles.role}
                  href={role.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {body}
                </a>
              ) : (
                <span className={styles.role}>{body}</span>
              )}
            </li>
          );
        })}
      </ul>

      <div className={styles.about}>
        <ReadMore
          text={personal.about}
          max={400}
          lines={6}
          moreLabel={ui.readMore}
          lessLabel={ui.readLess}
        />

        <div className={styles.skillsPreview}>
          {featured.map((skill) => (
            <Tag key={skill} variant="skill">
              {skill}
            </Tag>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#moments" className={styles.ctaBtn}>
            {ui.seeWork}
          </a>
          <a href="#contact" className={styles.ctaBtn}>
            {ui.contactMe} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
