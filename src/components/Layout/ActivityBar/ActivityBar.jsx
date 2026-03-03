import { FileCode2, FolderTree, Settings } from "lucide-react";
import styles from "./ActivityBar.module.scss";

const ActivityBar = () => {
  return (
    <aside className={styles.activityBar}>
      <button type="button" className={`${styles.item} ${styles.active}`}>
        <FileCode2 size={20} />
      </button>
      <button type="button" className={styles.item}>
        <FolderTree size={20} />
      </button>
      <button type="button" className={styles.item}>
        <Settings size={20} />
      </button>
    </aside>
  );
};

export default ActivityBar;
