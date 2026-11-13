import { useEffect, useRef, useState, useId } from "react";
import { ArrowLeft, ArrowRight, Minus, Plus, X } from "lucide-react";
import styles from "@/App.module.scss";

export default function ImageViewer({ project, initialIndex = 0, language, onClose }) {
  const dialog = useRef(null);
  const stage = useRef(null);
  const drag = useRef(null);
  const backdropPressed = useRef(false);
  const zoomReset = useRef(null);
  const titleId = useId();
  const captionId = useId();
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [loadedSize, setLoadedSize] = useState(null);
  const es = language === "es";
  const media = project.media;
  const image = media[index];
  const naturalWidth = loadedSize?.src === image.src ? loadedSize.width : image.width || 1440;
  const naturalHeight = loadedSize?.src === image.src ? loadedSize.height : image.height || 1000;
  const fit = Math.min(size.width / naturalWidth, size.height / naturalHeight, 1);
  const imageWidth = naturalWidth * fit * zoom;
  const imageHeight = naturalHeight * fit * zoom;

  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    const observer = new ResizeObserver(([entry]) => setSize({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(stage.current);
    return () => {
      observer.disconnect();
      element.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  function changeImage(next) {
    setIndex((next + media.length) % media.length);
    setZoom(1);
    stage.current?.scrollTo({ top: 0, left: 0 });
  }

  function changeZoom(value) {
    const next = Math.max(1, Math.min(4, value));
    const element = stage.current;
    const oldWidth = Math.max(size.width, imageWidth);
    const oldHeight = Math.max(size.height, imageHeight);
    const centerX = (element.scrollLeft + size.width / 2) / (oldWidth || 1);
    const centerY = (element.scrollTop + size.height / 2) / (oldHeight || 1);
    const focusedControl = document.activeElement;
    setZoom(next);
    requestAnimationFrame(() => {
      if (!element.isConnected) return;
      element.scrollTo({ left: centerX * Math.max(size.width, naturalWidth * fit * next) - size.width / 2, top: centerY * Math.max(size.height, naturalHeight * fit * next) - size.height / 2 });
      if (focusedControl?.matches(':disabled')) zoomReset.current?.focus({ preventScroll: true });
    });
  }

  function onKeyDown(event) {
    if (event.key === 'Tab') {
      const controls = [...dialog.current.querySelectorAll('button:not(:disabled), [tabindex="0"]')];
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      return;
    }
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.target === stage.current && zoom > 1 && event.key.startsWith('Arrow')) {
      event.preventDefault();
      stage.current.scrollBy({ left: event.key === 'ArrowLeft' ? -60 : event.key === 'ArrowRight' ? 60 : 0, top: event.key === 'ArrowUp' ? -60 : event.key === 'ArrowDown' ? 60 : 0 });
      return;
    }
    if (event.key === 'ArrowRight' && media.length > 1) { event.preventDefault(); changeImage(index + 1); }
    if (event.key === 'ArrowLeft' && media.length > 1) { event.preventDefault(); changeImage(index - 1); }
    if (event.key === '+' || event.key === '=') { event.preventDefault(); changeZoom(zoom + .5); }
    if (event.key === '-') { event.preventDefault(); changeZoom(zoom - .5); }
    if (event.key === '0') { event.preventDefault(); changeZoom(1); }
  }

  return (
    <dialog ref={dialog} className={styles.imageViewer} aria-labelledby={titleId} aria-describedby={captionId} onKeyDown={onKeyDown}
      onCancel={event => { event.preventDefault(); onClose(); }}
      onPointerDown={event => { backdropPressed.current = event.target === event.currentTarget; }}
      onClick={event => { if (event.target === event.currentTarget && backdropPressed.current) onClose(); }}>
      <div className={styles.viewerContent}>
        <header className={styles.viewerHeader}>
          <h2 id={titleId}>{project.name}</h2>
          <button type="button" onClick={onClose} aria-label={es ? "Cerrar vista previa" : "Close image preview"} autoFocus><X size={22} /></button>
        </header>
        <div className={styles.viewerTools} role="group" aria-label={es ? "Zoom de la imagen" : "Image zoom"}>
          <button type="button" aria-label={es ? "Alejar imagen" : "Zoom out"} disabled={zoom === 1} onClick={() => changeZoom(zoom - .5)}><Minus size={18} /></button>
          <button ref={zoomReset} type="button" className={styles.zoomReset} aria-label={es ? "Restablecer zoom" : "Reset zoom"} onClick={() => changeZoom(1)}>{zoom}×</button>
          <button type="button" aria-label={es ? "Acercar imagen" : "Zoom in"} disabled={zoom === 4} onClick={() => changeZoom(zoom + .5)}><Plus size={18} /></button>
          {zoom > 1 && <span>{es ? "Arrastrá para mover" : "Drag to pan"}</span>}
        </div>
        <div ref={stage} role="region" tabIndex={0} aria-label={es ? "Captura de pantalla" : "Screenshot"} className={`${styles.viewerStage} ${zoom > 1 ? styles.viewerZoomed : ""}`}
          onDoubleClick={() => changeZoom(zoom > 1 ? 1 : 2)}
          onPointerDown={event => {
            if (zoom <= 1 || event.pointerType !== 'mouse' || event.button !== 0) return;
            event.preventDefault();
            drag.current = { x: event.clientX, y: event.clientY, left: stage.current.scrollLeft, top: stage.current.scrollTop };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={event => {
            if (!drag.current) return;
            stage.current.scrollTo({ left: drag.current.left - (event.clientX - drag.current.x), top: drag.current.top - (event.clientY - drag.current.y) });
          }}
          onPointerUp={event => { drag.current = null; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
          onPointerCancel={() => { drag.current = null; }}>
          <div className={styles.viewerCanvas} style={{ width: Math.max(size.width, imageWidth), height: Math.max(size.height, imageHeight) }}>
            <img key={image.src} src={image.src} alt={image.alt} width={naturalWidth} height={naturalHeight} draggable="false" onLoad={event => setLoadedSize({ src: image.src, width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })} style={{ width: imageWidth, height: imageHeight, visibility: size.width ? 'visible' : 'hidden' }} />
          </div>
        </div>
        <footer className={styles.viewerFooter}>
          <p id={captionId} aria-live="polite">{image.caption}</p>
          {media.length > 1 && <div className={styles.viewerNavigation}>
            <button type="button" onClick={() => changeImage(index - 1)} aria-label={es ? "Captura anterior" : "Previous screenshot"}><ArrowLeft size={18} /></button>
            <span aria-live="polite">{index + 1} / {media.length}</span>
            <button type="button" onClick={() => changeImage(index + 1)} aria-label={es ? "Captura siguiente" : "Next screenshot"}><ArrowRight size={18} /></button>
          </div>}
        </footer>
      </div>
    </dialog>
  );
}
