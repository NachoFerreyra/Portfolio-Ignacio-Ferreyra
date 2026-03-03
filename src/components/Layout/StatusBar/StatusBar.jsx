import { CheckCircle2, GitBranch } from "lucide-react";
import styles from "./StatusBar.module.scss";

const StatusBar = ({ activeFile, tabsCount }) => {
  return (
    <footer className={styles.statusBar}>
      <div className={styles.left}>
        <GitBranch size={14} />
        <span>main</span>
        <CheckCircle2 size={14} />
        <span>{tabsCount} pestañas</span>
      </div>

      <div className={styles.right}>
        <span>{activeFile?.name || "README.md"}</span>
        <span>{activeFile?.language || "markdown"}</span>
      </div>
    </footer>
  );
};

export default StatusBar;
