import { useRouter } from "next/router";
import { ArrowRight } from "lucide-react";
import type { Personal } from "@/content/types";
import { getUi } from "@/config/i18n";
import ReadMore from "@/components/ui/ReadMore";
import Tag from "@/components/ui/Tag";
import styles from "./Hero.module.scss";

type HeroProps = {
  personal: Personal;
  featured: string[];
};

export default function Hero({ personal, featured }: HeroProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.title}>
        {personal.titleParts.map((part, i) => (
          <h1 key={i} className={styles.titlePart} data-part={i + 1}>
            {part}
          </h1>
        ))}
      </div>

      <div className={styles.about}>
        <ReadMore
          text={personal.about}
          max={400}
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
