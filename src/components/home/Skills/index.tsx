import { useRouter } from "next/router";
import type { SkillCategory } from "@/content/types";
import { getUi } from "@/config/i18n";
import Reveal from "@/components/ui/Reveal";
import SkillIcon from "@/components/ui/SkillIcon";
import styles from "./Skills.module.scss";

type SkillsProps = {
  categories: SkillCategory[];
};

export default function Skills({ categories }: SkillsProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);

  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.title}>{ui.nav.skills}</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Reveal key={category.id} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.items}>
              {category.items.map((skill) => (
                <span
                  key={skill.name}
                  className={styles.item}
                  title={`${skill.name} — ${skill.level} (${skill.years} ${ui.yearsExperience})`}
                >
                  <SkillIcon
                    name={skill.name}
                    size={16}
                    className={styles.itemIcon}
                  />
                  <span className={styles.itemName}>{skill.name}</span>
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
