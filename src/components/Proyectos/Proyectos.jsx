import { useState } from "react";
import { getProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCard from "./ProjectCard";
import styles from "./Proyectos.module.scss";

const Proyectos = () => {
  const { language, text } = useLanguage();
  const projects = getProjects(language);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  return (
    <section className={styles.proyectos}>
      <header className={styles.header}>
        <h1>{text.projects.title}</h1>
        <p>{text.projects.description}</p>
      </header>

      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedProjectId === project.id}
            onToggle={() =>
              setExpandedProjectId((current) =>
                current === project.id ? null : project.id,
              )
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
