/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "en";

const getInitialLanguage = () => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return storedLanguage === "es" || storedLanguage === "en"
    ? storedLanguage
    : DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    const copy = translations[language];
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy.meta.description);
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "es" : "en",
    );
  }, []);

  const value = useMemo(
    () => ({ language, text: translations[language], toggleLanguage }),
    [language, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
