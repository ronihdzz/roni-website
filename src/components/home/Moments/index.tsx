import { useRouter } from "next/router";
import { Star } from "lucide-react";
import type { Experience } from "@/content/types";
import { getUi } from "@/config/i18n";
import Reveal from "@/components/ui/Reveal";
import ReadMore from "@/components/ui/ReadMore";
import MediaPlayer from "@/components/ui/Media";
import styles from "./Moments.module.scss";

type MomentsProps = {
  experiences: Experience[];
};

export default function Moments({ experiences }: MomentsProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);

  return (
    <section id="moments" className={styles.section}>
      <h2 className={styles.title}>{ui.nav.moments}</h2>
      <div className={styles.grid}>
        {experiences.map((exp) => (
          <Reveal key={exp.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{exp.title}</h3>
            {exp.award && (
              <span className={styles.award}>
                <Star size={13} fill="currentColor" /> {exp.award}
              </span>
            )}
            <ReadMore
              text={exp.description}
              max={200}
              moreLabel={ui.readMore}
              lessLabel={ui.readLess}
            />
            <MediaPlayer media={exp.media} title={exp.title} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
