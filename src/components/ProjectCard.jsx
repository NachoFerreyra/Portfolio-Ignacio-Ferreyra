import { ChevronDown, ZoomIn } from "lucide-react";
import ProjectDetails from "./ProjectDetails";
import styles from "@/App.module.scss";

export default function ProjectCard({ project, language, text, open, onToggle, onPreview }) {
  const media = project.media?.[0];
  const panelId = `project-details-${project.id}`;
  const buttonId = `project-toggle-${project.id}`;
  const es = language === "es";

  return (
    <article className={styles.project}>
      <div className={styles.projectOverview}>
        {media && <button type="button" className={styles.projectPreviewFrame} onClick={() => onPreview(0)} aria-label={`${es ? "Ver imágenes de" : "View images of"} ${project.name}`}>
          <img src={media.src} alt={media.alt} width={media.width || 1440} height={media.height || 1000} loading="lazy" draggable="false" />
          <span className={styles.previewHint} aria-hidden="true"><ZoomIn size={17} /></span>
        </button>}
        <div className={styles.projectInfo}>
          <p className={styles.projectType}>{project.type}</p>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <ul className={styles.tags}>{project.stack.slice(0, 4).map(item => <li key={item}>{item}</li>)}</ul>
          <div className={styles.projectActions}>
            {project.links?.live && <a href={project.links.live} target="_blank" rel="noreferrer">{text.visit}</a>}
            {project.links?.repo && <a href={project.links.repo} target="_blank" rel="noreferrer">GitHub</a>}
          </div>
        </div>
      </div>
      <button id={buttonId} type="button" className={styles.detailsToggle} aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        {open ? text.hideDetails : text.details}<ChevronDown size={16} aria-hidden="true" />
      </button>
      <div id={panelId} className={`${styles.detailsCollapse} ${open ? styles.detailsExpanded : ""}`} inert={!open} aria-hidden={!open}>
        <div className={styles.collapseInner}>
          <ProjectDetails project={project} language={language} onPreview={onPreview} />
        </div>
      </div>
    </article>
  );
}
