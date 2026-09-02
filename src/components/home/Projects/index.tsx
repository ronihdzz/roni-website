import { useRouter } from "next/router";
import { Lock } from "lucide-react";
import type { Project } from "@/content/types";
import { getUi } from "@/config/i18n";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import styles from "./Projects.module.scss";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>{ui.nav.projects}</h2>
      <div className={styles.grid}>
        {projects.map((project) => {
          const { demo, github, documentation, presentation } = project.links;
          const hasLinks = Boolean(demo || github || documentation || presentation);

          return (
            <Reveal key={project.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              {project.awards && project.awards.length > 0 && (
                <div className={styles.awards}>
                  {project.awards.map((award) => (
                    <Tag key={award} variant="award">
                      {award}
                    </Tag>
                  ))}
                </div>
              )}

              <div className={styles.tech}>
                {project.technologies.map((tech) => (
                  <Tag key={tech} variant="tech">
                    {tech}
                  </Tag>
                ))}
              </div>

              <div className={styles.links}>
                {/* Sin enlaces publicos (trabajo interno/experimento): se muestra el estado */}
                {!hasLinks && (
                  <span className={styles.status}>
                    <Lock size={12} aria-hidden /> {project.status}
                  </span>
                )}
                {demo && (
                  <a
                    className={styles.link}
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ui.viewDemo}
                  </a>
                )}
                {github && (
                  <a
                    className={styles.link}
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {documentation && (
                  <a
                    className={styles.link}
                    href={documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ui.documentation}
                  </a>
                )}
                {presentation && (
                  <a
                    className={styles.link}
                    href={presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ui.presentation}
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
