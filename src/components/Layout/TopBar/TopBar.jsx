import { Moon, Sun } from "lucide-react";
import styles from "./TopBar.module.scss";

const TopBar = ({ theme, onToggleTheme }) => {
  return (
    <header className={styles.topBar}>
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        <span className={styles.brandText}>Portfolio Ignacio Ferreyra</span>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.iconButton}
          onClick={onToggleTheme}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          <span>{theme === "dark" ? "Claro" : "Oscuro"}</span>
        </button>
      </div>
    </header>
  );
};

export default TopBar;