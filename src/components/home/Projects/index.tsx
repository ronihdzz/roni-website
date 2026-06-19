import { useRouter } from "next/router";
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
        {projects.map((project) => (
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
              {project.links.demo && (
                <a
                  className={styles.link}
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ui.viewDemo}
                </a>
              )}
              {project.links.github && (
                <a
                  className={styles.link}
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.links.documentation && (
                <a
                  className={styles.link}
                  href={project.links.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ui.documentation}
                </a>
              )}
              {project.links.presentation && (
                <a
                  className={styles.link}
                  href={project.links.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ui.presentation}
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
