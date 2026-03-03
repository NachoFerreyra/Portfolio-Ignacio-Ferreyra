import {
  FileCode2,
  FileJson,
  FileText,
  Mail,
  Rocket,
  UserCircle2,
} from "lucide-react";
import styles from "./Explorer.module.scss";

const iconByFileId = {
  readme: FileText,
  inicio: Rocket,
  "sobre-mi": UserCircle2,
  proyectos: FileJson,
  habilidades: FileCode2,
  contacto: Mail,
};

const Explorer = ({ files, activeFileId, onOpenFile, isOpen, onClose }) => {
  return (
    <>
      <button
        type="button"
        className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayVisible : ""}`}
        onClick={onClose}
        aria-label="Cerrar explorador"
      />

      <aside
        className={`${styles.explorer} ${isOpen ? styles.explorerOpen : ""}`}
      >
        <header className={styles.header}>
          <span>ARCHIVOS</span>
          <small>ignacio-portfolio</small>
        </header>

        <div className={styles.fileList}>
          {files.map((file) => {
            const Icon = iconByFileId[file.id] || FileCode2;
            const isActive = activeFileId === file.id;

            return (
              <button
                key={file.id}
                type="button"
                className={`${styles.fileItem} ${isActive ? styles.fileItemActive : ""}`}
                onClick={() => onOpenFile(file.id)}
              >
                <Icon size={15} />
                <span>{file.name}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.bottomActions}>
          <a
            href="/cv/Ignacio Ferreyra CV.pdf"
            download
            className={styles.downloadCv}
            onClick={onClose}
          >
            Descargar CV
          </a>
        </div>
      </aside>
    </>
  );
};

export default Explorer;
