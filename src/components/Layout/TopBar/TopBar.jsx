import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./TopBar.module.scss";

const TopBar = ({
  theme,
  onToggleTheme,
  language,
  onToggleLanguage,
  isExplorerOpen,
  onToggleExplorer,
}) => {
  const { text } = useLanguage();

  return (
    <header className={styles.topBar}>
      <div className={styles.brand}>
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={onToggleExplorer}
          aria-label={isExplorerOpen ? text.topBar.closeMenu : text.topBar.openMenu}
          aria-expanded={isExplorerOpen}
        >
          {isExplorerOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        <span className={styles.brandDot} />
        <span className={styles.brandText}>{text.topBar.brand}</span>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.languageButton}
          onClick={onToggleLanguage}
          aria-label={
            language === "en"
              ? text.topBar.switchToSpanish
              : text.topBar.switchToEnglish
          }
        >
          <span className={language === "es" ? styles.languageActive : ""}>
            ES
          </span>
          <span className={styles.languageDivider}>/</span>
          <span className={language === "en" ? styles.languageActive : ""}>
            EN
          </span>
        </button>
        <button
          type="button"
          className={styles.iconButton}
          onClick={onToggleTheme}
          aria-label={
            theme === "dark"
              ? text.topBar.switchToLight
              : text.topBar.switchToDark
          }
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          <span>{theme === "dark" ? text.topBar.light : text.topBar.dark}</span>
        </button>
      </div>
    </header>
  );
};

export default TopBar;
