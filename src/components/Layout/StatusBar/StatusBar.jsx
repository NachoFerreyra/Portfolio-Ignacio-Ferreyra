import { CheckCircle2, GitBranch } from "lucide-react";
import styles from "./StatusBar.module.scss";

const StatusBar = ({ activeFile, tabsCount }) => {
  return (
    <footer className={styles.statusBar}>
      <div className={styles.left}>
        <GitBranch size={14} />
        <span>portfolio-live</span>
        <CheckCircle2 size={14} />
        <span>{tabsCount} pestañas abiertas</span>
      </div>

      <div className={styles.right}>
        <span>{activeFile?.name || "Sin archivo abierto"}</span>
      </div>
    </footer>
  );
};

export default StatusBar;
