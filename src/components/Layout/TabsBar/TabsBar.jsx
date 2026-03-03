import { FileCode2, FileJson, FileText, Mail, Rocket, UserCircle2, X } from "lucide-react";
import styles from "./TabsBar.module.scss";

const iconByFileId = {
  readme: FileText,
  inicio: Rocket,
  "sobre-mi": UserCircle2,
  proyectos: FileJson,
  habilidades: FileCode2,
  contacto: Mail,
};

const TabsBar = ({
  files,
  openTabs,
  activeFileId,
  onSelectTab,
  onCloseTab,
}) => {
  const openFileObjects = openTabs
    .map((tabId) => files.find((file) => file.id === tabId))
    .filter(Boolean);

  return (
    <div className={styles.tabsBar}>
      {openFileObjects.map((file) => {
        const Icon = iconByFileId[file.id] || FileCode2;
        const isActive = activeFileId === file.id;

        return (
          <button
            key={file.id}
            type="button"
            className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
            onClick={() => onSelectTab(file.id)}
          >
            <Icon size={14} />
            <span>{file.name}</span>
            <X
              size={13}
              className={styles.closeIcon}
              onClick={(event) => {
                event.stopPropagation();
                onCloseTab(file.id);
              }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default TabsBar;
