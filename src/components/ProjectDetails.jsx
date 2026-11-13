import { useState } from "react";
import styles from "@/App.module.scss";

export default function ProjectDetails({ project, language, onPreview }) {
  const [slide, setSlide] = useState(0);
  const es = language === "es";
  const media = project.media || [];

  return (
    <div className={styles.detailsContent}>
      {media.length > 0 && <div className={styles.gallery}>
        <figure>
          <button type="button" className={styles.galleryViewport} onClick={() => onPreview(slide)} aria-label={es ? "Ampliar captura" : "Enlarge screenshot"}>
            <img src={media[slide].src} alt={media[slide].alt} width={media[slide].width || 1440} height={media[slide].height || 1000} loading="lazy" draggable="false" />
          </button>
          <figcaption aria-live="polite">{media.map((item, index) => <span key={item.src} aria-hidden={index !== slide}>{item.caption}</span>)}</figcaption>
        </figure>
        {media.length > 1 && <div className={styles.thumbnails} role="group" aria-label={es ? "Capturas del proyecto" : "Project screenshots"}>{media.map((item, index) => <button type="button" key={item.src} aria-label={`${es ? "Ver captura" : "View screenshot"} ${index + 1}: ${item.caption}`} aria-pressed={slide === index} onClick={() => setSlide(index)}><img src={item.src} alt="" width={item.width || 1440} height={item.height || 1000} loading="lazy" draggable="false" /><span>{index + 1}</span></button>)}</div>}
      </div>}
      <div className={styles.detailsColumns}><div><h4>{es ? "Funcionalidades" : "Features"}</h4><ul className={styles.featureList}>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h4>{es ? "Tecnologías" : "Technologies"}</h4><ul className={styles.tags}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
    </div>
  );
}
