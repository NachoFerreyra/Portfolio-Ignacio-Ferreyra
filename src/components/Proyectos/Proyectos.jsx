import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Proyectos.module.scss";

const Proyectos = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(projects[0]?.id || null);

  return (
    <section className={styles.proyectos}>
      <header className={styles.header}>
        <h1>const proyectos = [</h1>
        <p>
          Base de proyectos reales utilizada para este portfolio. Cada card resume
          arquitectura, stack y funcionalidades implementadas.
        </p>
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

      <p className={styles.footer}>];</p>
    </section>
  );
};

export default Proyectos;
