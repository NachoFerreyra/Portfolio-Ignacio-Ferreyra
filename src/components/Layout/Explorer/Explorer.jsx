import {
  FileCode2,
  FileJson,
  FileText,
  Mail,
  Rocket,
  UserCircle2,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { language, text } = useLanguage();

  return (
    <>
      <button
        type="button"
        className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayVisible : ""}`}
        onClick={onClose}
        aria-label={text.explorer.closeExplorer}
      />

      <aside
        className={`${styles.explorer} ${isOpen ? styles.explorerOpen : ""}`}
      >
        <header className={styles.header}>
          <span>{text.explorer.files}</span>
          <small>{text.explorer.workspace}</small>
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
            href={
              language === "en"
                ? "/cv/Ignacio Ferreyra Resume.pdf"
                : "/cv/Ignacio Ferreyra CV.pdf"
            }
            download
            className={styles.downloadCv}
            onClick={onClose}
          >
            {text.explorer.downloadResume}
          </a>
        </div>
      </aside>
    </>
  );
};

export default Explorer;
