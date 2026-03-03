import { Menu, Moon, Sun, X } from "lucide-react";
import styles from "./TopBar.module.scss";

const TopBar = ({ theme, onToggleTheme, isExplorerOpen, onToggleExplorer }) => {
  return (
    <header className={styles.topBar}>
      <div className={styles.brand}>
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={onToggleExplorer}
          aria-label={isExplorerOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isExplorerOpen}
        >
          {isExplorerOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

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
