import { CheckCircle2, GitBranch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./StatusBar.module.scss";

const StatusBar = ({ activeFile, tabsCount }) => {
  const { text } = useLanguage();

  return (
    <footer className={styles.statusBar}>
      <div className={styles.left}>
        <GitBranch size={14} />
        <span>portfolio-live</span>
        <CheckCircle2 size={14} />
        <span>
          {tabsCount} {text.statusBar.openTabs}
        </span>
      </div>

      <div className={styles.right}>
        <span>{activeFile?.name || text.statusBar.noFile}</span>
      </div>
    </footer>
  );
};

export default StatusBar;
