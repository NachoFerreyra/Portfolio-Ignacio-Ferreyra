import { ChevronDown, ChevronUp, FolderGit2 } from "lucide-react";
import styles from "./Proyectos.module.scss";

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>
          <FolderGit2 size={18} />
          {project.name}
        </h2>
        <button type="button" onClick={onToggle}>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {isExpanded ? "Ocultar" : "Ver detalle"}
        </button>
      </div>

      <p>{project.summary}</p>

      <div className={styles.stack}>
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {isExpanded ? (
        <div className={styles.details}>
          <h3>Highlights</h3>
          <ul>
            {project.highlights.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h3>Arquitectura</h3>
          <div className={styles.metrics}>
            <span>{project.architecture.codeFiles} archivos de codigo</span>
            <span>{project.architecture.scssFiles} archivos SCSS</span>
            <span>{project.architecture.components} componentes</span>
            <span>{project.architecture.pages} pages</span>
          </div>

          <h3>Rutas clave</h3>
          <div className={styles.routes}>
            {project.architecture.routes.map((route) => (
              <code key={route}>{route}</code>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default ProjectCard;
