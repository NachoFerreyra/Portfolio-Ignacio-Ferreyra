import { useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import {
  explorerFiles,
  findFileById,
  findFileByRoute,
  getRouteByFileId,
} from "@/utils/fileMap";
import TopBar from "@/components/Layout/TopBar/TopBar";
import ActivityBar from "@/components/Layout/ActivityBar/ActivityBar";
import Explorer from "@/components/Layout/Explorer/Explorer";
import TabsBar from "@/components/Layout/TabsBar/TabsBar";
import StatusBar from "@/components/Layout/StatusBar/StatusBar";
import styles from "./App.module.scss";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const activeFile = useMemo(
    () => findFileByRoute(location.pathname) || findFileById("readme"),
    [location.pathname],
  );

  const [openTabs, setOpenTabs] = useState(["readme"]);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const tabsWithActive = useMemo(() => {
    if (!activeFile) return openTabs;
    return openTabs.includes(activeFile.id)
      ? openTabs
      : [...openTabs, activeFile.id];
  }, [activeFile, openTabs]);

  const handleOpenFile = (fileId) => {
    const file = findFileById(fileId);
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
    const nextTabs = tabsWithActive.filter((tabId) => tabId !== fileId);

    if (!nextTabs.length) {
      setOpenTabs(["readme"]);
      navigate("/");
      return;
    }

    setOpenTabs(nextTabs);

    if (activeFile?.id === fileId) {
      const closedIndex = tabsWithActive.indexOf(fileId);
      const fallbackTab =
        nextTabs[closedIndex - 1] ||
        nextTabs[closedIndex] ||
        nextTabs[nextTabs.length - 1];
      navigate(getRouteByFileId(fallbackTab));
    }
  };

  return (
    <div className={`u-app-shell ${styles.shell}`}>
      <TopBar
        isExplorerOpen={isExplorerOpen}
        onToggleExplorer={() => setIsExplorerOpen((currentValue) => !currentValue)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className={styles.workspace}>
        <ActivityBar />

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
            openTabs={tabsWithActive}
            activeFileId={activeFile?.id}
            onSelectTab={handleSelectTab}
            onCloseTab={handleCloseTab}
          />

          <div className={styles.editorContent}>
            <Outlet />
          </div>

          <StatusBar activeFile={activeFile} tabsCount={tabsWithActive.length} />
        </section>
      </main>
    </div>
  );
};

export default App;