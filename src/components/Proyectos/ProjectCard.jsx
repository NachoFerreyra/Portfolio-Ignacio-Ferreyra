import { ChevronDown, ChevronUp, FolderGit2 } from "lucide-react";
import styles from "./Proyectos.module.scss";

const toApprox = (value) => {
  if (value >= 400) return "+400";
  if (value >= 300) return "+300";
  if (value >= 200) return "+200";
  if (value >= 100) return "+100";
  if (value >= 50) return "+50";
  if (value >= 20) return "+20";
  return `+${value}`;
};

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
          {isExpanded ? "Ocultar detalle" : "Ver detalle"}
        </button>
      </div>

      <div className={styles.stack}>
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {isExpanded ? (
        <div className={styles.details}>
          <h3>Puntos destacados</h3>
          <ul>
            {project.highlights.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h3>Escala del proyecto</h3>
          <div className={styles.metrics}>
            <span>
              {toApprox(project.architecture.codeFiles)} archivos de codigo
            </span>
            <span>
              {toApprox(project.architecture.scssFiles)} archivos SCSS
            </span>
            <span>{toApprox(project.architecture.components)} componentes</span>
            <span>{toApprox(project.architecture.pages)} pages</span>
            <span>{toApprox(project.architecture.group)} integrantes</span>
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default ProjectCard;
