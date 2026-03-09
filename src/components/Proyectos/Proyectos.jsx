import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Proyectos.module.scss";

const Proyectos = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  return (
    <section className={styles.proyectos}>
      <header className={styles.header}>
        <h1>Proyectos seleccionados</h1>
        <p>
          Una muestra de trabajos donde participe en diseno de interfaz,
          estructura y desarrollo frontend.
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
    </section>
  );
};

export default Proyectos;
