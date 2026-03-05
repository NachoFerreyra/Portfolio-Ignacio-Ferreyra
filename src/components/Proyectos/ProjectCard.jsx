import { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ExternalLink,
  FolderGit2,
  Github,
  X,
} from "lucide-react";
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

const normalizeMediaItem = (item, projectName, index) => {
  if (typeof item === "string") {
    return {
      src: item,
      alt: `${projectName} - vista ${index + 1}`,
    };
  }

  if (!item || typeof item !== "object" || !item.src) {
    return null;
  }

  return {
    src: item.src,
    alt: item.alt || `${projectName} - vista ${index + 1}`,
  };
};

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const mediaItems = useMemo(
    () =>
      (project.media ?? [])
        .map((item, index) => normalizeMediaItem(item, project.name, index))
        .filter(Boolean),
    [project.media, project.name],
  );

  const mediaCount = mediaItems.length;
  const hasMedia = mediaCount > 0;
  const hasLinks = Boolean(project.links?.live || project.links?.repo);
  const safeActiveMediaIndex =
    mediaCount > 0 ? activeMediaIndex % mediaCount : 0;
  const isPreviewVisible = isPreviewOpen && isExpanded && hasMedia;

  useEffect(() => {
    if (!isPreviewVisible) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }

      if (mediaCount < 2) {
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveMediaIndex((current) => (current + 1) % mediaCount);
      }

      if (event.key === "ArrowLeft") {
        setActiveMediaIndex((current) =>
          (current - 1 + mediaCount) % mediaCount,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPreviewVisible, mediaCount]);

  const handleMediaSelect = (index) => {
    setActiveMediaIndex(index);
  };

  const handleMediaPrev = () => {
    if (mediaCount < 2) {
      return;
    }

    setActiveMediaIndex((current) => (current - 1 + mediaCount) % mediaCount);
  };

  const handleMediaNext = () => {
    if (mediaCount < 2) {
      return;
    }

    setActiveMediaIndex((current) => (current + 1) % mediaCount);
  };

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
          <div className={styles.detailsLayout}>
            <div className={styles.detailsMain}>
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
                <span>
                  {toApprox(project.architecture.components)} componentes
                </span>
                <span>{toApprox(project.architecture.pages)} pages</span>
                {typeof project.architecture.group === "number" ? (
                  <span>
                    {project.architecture.group} {" "}
                    {project.architecture.group === 1
                      ? "integrante"
                      : "integrantes"}
                  </span>
                ) : null}
              </div>
            </div>

            {hasMedia || hasLinks ? (
              <aside className={styles.sidePanel}>
                {hasMedia ? (
                  <section className={styles.mediaSection}>
                    <h3>Multimedia</h3>

                    <button
                      type="button"
                      className={styles.mediaPreview}
                      onClick={() => setIsPreviewOpen(true)}
                      aria-label={`Abrir vista previa de ${project.name}`}
                    >
                      <img
                        src={mediaItems[safeActiveMediaIndex].src}
                        alt={mediaItems[safeActiveMediaIndex].alt}
                        loading="lazy"
                      />
                    </button>

                    {mediaCount > 1 ? (
                      <div className={styles.mediaDots}>
                        {mediaItems.map((media, index) => (
                          <button
                            key={media.src}
                            type="button"
                            className={
                              index === safeActiveMediaIndex
                                ? `${styles.dot} ${styles.dotActive}`
                                : styles.dot
                            }
                            aria-label={`Ver imagen ${index + 1}`}
                            onClick={() => handleMediaSelect(index)}
                          />
                        ))}
                      </div>
                    ) : null}
                  </section>
                ) : null}

                {hasLinks ? (
                  <div className={styles.projectLinks}>
                    {project.links?.live ? (
                      <a href={project.links.live} target="_blank" rel="noreferrer">
                        <ExternalLink size={14} />
                        Ver sitio
                      </a>
                    ) : null}
                    {project.links?.repo ? (
                      <a href={project.links.repo} target="_blank" rel="noreferrer">
                        <Github size={14} />
                        Repositorio
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </aside>
            ) : null}
          </div>

          {isPreviewVisible ? (
            <div
              className={styles.previewBackdrop}
              role="presentation"
              onClick={() => setIsPreviewOpen(false)}
            >
              <div
                className={styles.previewDialog}
                role="dialog"
                aria-modal="true"
                aria-label={`Vista previa de ${project.name}`}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className={styles.previewClose}
                  onClick={() => setIsPreviewOpen(false)}
                >
                  <X size={16} />
                  Cerrar
                </button>

                <div className={styles.previewImageWrap}>
                  {mediaCount > 1 ? (
                    <button
                      type="button"
                      className={`${styles.previewNav} ${styles.previewPrev}`}
                      onClick={handleMediaPrev}
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>
                  ) : null}

                  <img
                    src={mediaItems[safeActiveMediaIndex].src}
                    alt={mediaItems[safeActiveMediaIndex].alt}
                  />

                  {mediaCount > 1 ? (
                    <button
                      type="button"
                      className={`${styles.previewNav} ${styles.previewNext}`}
                      onClick={handleMediaNext}
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight size={16} />
                    </button>
                  ) : null}
                </div>

                {mediaCount > 1 ? (
                  <div className={styles.mediaDots}>
                    {mediaItems.map((media, index) => (
                      <button
                        key={`${media.src}-preview`}
                        type="button"
                        className={
                          index === safeActiveMediaIndex
                            ? `${styles.dot} ${styles.dotActive}`
                            : styles.dot
                        }
                        aria-label={`Ver imagen ${index + 1}`}
                        onClick={() => handleMediaSelect(index)}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
};

export default ProjectCard;
