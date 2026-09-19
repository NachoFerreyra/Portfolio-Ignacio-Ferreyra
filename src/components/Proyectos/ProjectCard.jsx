import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Collapse from "@mui/material/Collapse";
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
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Proyectos.module.scss";

const toApprox = (value) => {
  if (value >= 400) return "+400";
  if (value >= 300) return "+300";
  if (value >= 200) return "+200";
  if (value >= 100) return "+100";
  if (value >= 50) return "+50";
  return String(value);
};

const normalizeMediaItem = (item, projectName, index, previewLabel) => {
  if (typeof item === "string") {
    return {
      src: item,
      alt: `${projectName} - ${previewLabel} ${index + 1}`,
      caption: null,
    };
  }

  if (!item || typeof item !== "object" || !item.src) {
    return null;
  }

  return {
    src: item.src,
    alt: item.alt || `${projectName} - ${previewLabel} ${index + 1}`,
    caption: item.caption || null,
  };
};

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const { text } = useLanguage();
  const projectText = text.projects;
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const mediaItems = useMemo(
    () =>
      (project.media ?? [])
        .map((item, index) =>
          normalizeMediaItem(item, project.name, index, projectText.previewOf),
        )
        .filter(Boolean),
    [project.media, project.name, projectText.previewOf],
  );

  const mediaCount = mediaItems.length;
  const hasMedia = mediaCount > 0;
  const hasLinks = Boolean(project.links?.live || project.links?.repo);
  const detailsId = `project-details-${project.id}`;
  const safeActiveMediaIndex =
    mediaCount > 0 ? activeMediaIndex % mediaCount : 0;
  const isPreviewVisible = isPreviewOpen && isExpanded && hasMedia;

  useEffect(() => {
    if (!isExpanded && isPreviewOpen) {
      const timeoutId = window.setTimeout(() => setIsPreviewOpen(false), 0);
      return () => window.clearTimeout(timeoutId);
    }
  }, [isExpanded, isPreviewOpen]);

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

  const previewModal =
    isPreviewVisible && typeof document !== "undefined"
      ? createPortal(
          <div
            className={styles.previewBackdrop}
            role="presentation"
            onClick={() => setIsPreviewOpen(false)}
          >
            <div
              className={styles.previewDialog}
              role="dialog"
              aria-modal="true"
              aria-label={`${projectText.openPreview} ${project.name}`}
              onClick={(event) => event.stopPropagation()}
            >
              <header className={styles.previewTopBar}>
                <p className={styles.previewCounter}>
                  {projectText.imageOf} {safeActiveMediaIndex + 1} {projectText.of}{" "}
                  {mediaCount}
                </p>
                <button
                  type="button"
                  className={styles.previewClose}
                  onClick={() => setIsPreviewOpen(false)}
                >
                  <X size={16} />
                  {projectText.close}
                </button>
              </header>

              <div className={styles.previewImageWrap}>
                {mediaCount > 1 ? (
                  <button
                    type="button"
                    className={`${styles.previewNav} ${styles.previewPrev}`}
                    onClick={handleMediaPrev}
                    aria-label={projectText.previousImage}
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
                    aria-label={projectText.nextImage}
                  >
                    <ChevronRight size={16} />
                  </button>
                ) : null}
              </div>

              {mediaItems[safeActiveMediaIndex].caption ? (
                <p className={styles.mediaCaption}>
                  {mediaItems[safeActiveMediaIndex].caption}
                </p>
              ) : null}

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
                      aria-label={`${projectText.viewImage} ${index + 1}`}
                      onClick={() => handleMediaSelect(index)}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <article className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>
            <FolderGit2 size={18} />
            {project.name}
          </h2>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {isExpanded ? projectText.hideDetails : projectText.showDetails}
          </button>
        </div>

        {project.type ? <p className={styles.projectType}>{project.type}</p> : null}
        {project.summary ? (
          <p className={styles.projectSummary}>{project.summary}</p>
        ) : null}

        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <Collapse
          in={isExpanded}
          timeout={{ enter: 320, exit: 220 }}
          unmountOnExit
          className={styles.detailsCollapse}
        >
          <div id={detailsId} className={styles.details}>
            <div className={styles.detailsLayout}>
              <div className={styles.detailsMain}>
                <h3>{projectText.highlights}</h3>
                <ul>
                  {project.highlights.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <h3>{projectText.projectScale}</h3>
                <div className={styles.metrics}>
                  {project.architecture.codeFiles > 0 ? (
                    <span>
                      {toApprox(project.architecture.codeFiles)} {projectText.codeFiles}
                    </span>
                  ) : null}
                  {project.architecture.scssFiles > 0 ? (
                    <span>
                      {toApprox(project.architecture.scssFiles)} {projectText.scssFiles}
                    </span>
                  ) : null}
                  {project.architecture.components > 0 ? (
                    <span>
                      {toApprox(project.architecture.components)} {projectText.components}
                    </span>
                  ) : null}
                  {project.architecture.pages > 0 ? (
                    <span>
                      {toApprox(project.architecture.pages)} {projectText.pages}
                    </span>
                  ) : null}
                  {typeof project.architecture.group === "number" ? (
                    <span>
                      {project.architecture.group} {" "}
                      {project.architecture.group === 1
                        ? projectText.member
                        : projectText.members}
                    </span>
                  ) : null}
                </div>
              </div>

              {hasMedia || hasLinks ? (
                <aside className={styles.sidePanel}>
                  {hasMedia ? (
                    <section className={styles.mediaSection}>
                      <h3>{projectText.media}</h3>

                      <button
                        type="button"
                        className={styles.mediaPreview}
                        onClick={() => setIsPreviewOpen(true)}
                        aria-label={`${projectText.openPreview} ${project.name}`}
                      >
                        <img
                          src={mediaItems[safeActiveMediaIndex].src}
                          alt={mediaItems[safeActiveMediaIndex].alt}
                          loading="lazy"
                          decoding="async"
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
                              aria-label={`${projectText.viewImage} ${index + 1}`}
                              onClick={() => handleMediaSelect(index)}
                            />
                          ))}
                        </div>
                      ) : null}

                      {mediaItems[safeActiveMediaIndex].caption ? (
                        <p className={styles.mediaCaption}>
                          {mediaItems[safeActiveMediaIndex].caption}
                        </p>
                      ) : null}
                    </section>
                  ) : null}

                  {hasLinks ? (
                    <div className={styles.projectLinks}>
                      {project.links?.live ? (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${projectText.viewSite}: ${project.name}`}
                        >
                          <ExternalLink size={14} />
                          {projectText.viewSite}
                        </a>
                      ) : null}
                      {project.links?.repo ? (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${projectText.repository}: ${project.name}`}
                        >
                          <Github size={14} />
                          {projectText.repository}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </aside>
              ) : null}
            </div>
          </div>
        </Collapse>
      </article>

      {previewModal}
    </>
  );
};

export default ProjectCard;
