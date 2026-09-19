import { useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  findFileById,
  findFileByRoute,
  getExplorerFiles,
  getRouteByFileId,
} from "@/utils/fileMap";
import TopBar from "@/components/Layout/TopBar/TopBar";
import Explorer from "@/components/Layout/Explorer/Explorer";
import TabsBar from "@/components/Layout/TabsBar/TabsBar";
import StatusBar from "@/components/Layout/StatusBar/StatusBar";
import styles from "./App.module.scss";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { language, text, toggleLanguage } = useLanguage();
  const explorerFiles = useMemo(() => getExplorerFiles(language), [language]);

  const activeFile = useMemo(
    () =>
      findFileByRoute(location.pathname, language) ||
      findFileById("readme", language),
    [location.pathname, language],
  );

  const [openTabs, setOpenTabs] = useState(() =>
    activeFile ? [activeFile.id] : ["readme"],
  );
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const handleOpenFile = (fileId) => {
    const file = findFileById(fileId, language);
    if (!file) return;

    setOpenTabs((currentTabs) =>
      currentTabs.includes(fileId) ? currentTabs : [...currentTabs, fileId],
    );
    navigate(file.route);
    setIsExplorerOpen(false);
  };

  const handleSelectTab = (fileId) => {
    const route = getRouteByFileId(fileId);
    navigate(route);
  };

  const handleCloseTab = (fileId) => {
    const nextTabs = openTabs.filter((tabId) => tabId !== fileId);

    setOpenTabs(nextTabs);

    if (activeFile?.id === fileId) {
      if (!nextTabs.length) return;

      const closedIndex = openTabs.indexOf(fileId);
      const fallbackTab =
        nextTabs[closedIndex - 1] ||
        nextTabs[closedIndex] ||
        nextTabs[nextTabs.length - 1];
      navigate(getRouteByFileId(fallbackTab));
    }
  };

  const effectiveOpenTabs =
    activeFile && !openTabs.includes(activeFile.id)
      ? [...openTabs, activeFile.id]
      : openTabs;

  const isActiveFileOpen = activeFile
    ? effectiveOpenTabs.includes(activeFile.id)
    : false;
  const hasOpenTabs = effectiveOpenTabs.length > 0;

  return (
    <div className={`u-app-shell ${styles.shell}`}>
      <TopBar
        theme={theme}
        onToggleTheme={toggleTheme}
        language={language}
        onToggleLanguage={toggleLanguage}
        isExplorerOpen={isExplorerOpen}
        onToggleExplorer={() => setIsExplorerOpen((currentValue) => !currentValue)}
      />

      <main className={styles.workspace}>
        <Explorer
          files={explorerFiles}
          activeFileId={activeFile?.id}
          onOpenFile={handleOpenFile}
          isOpen={isExplorerOpen}
          onClose={() => setIsExplorerOpen(false)}
        />

        <section className={styles.editor}>
          <TabsBar
            files={explorerFiles}
            openTabs={effectiveOpenTabs}
            activeFileId={activeFile?.id}
            onSelectTab={handleSelectTab}
            onCloseTab={handleCloseTab}
          />

          <div className={styles.editorContent}>
            {hasOpenTabs && isActiveFileOpen ? (
              <Outlet context={{ openFile: handleOpenFile }} />
            ) : (
              <div className={styles.emptyState}>
                <p>{text.app.emptyState}</p>
              </div>
            )}
          </div>

          <StatusBar
            activeFile={isActiveFileOpen ? activeFile : null}
            tabsCount={effectiveOpenTabs.length}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
