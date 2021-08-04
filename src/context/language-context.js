import { createContext, useEffect, useState } from "react";
import i18next from "i18next";

export const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  /**
   * this handler function is responsible for toggling language between "en-EN" and "tr-TR"
   */
  const toggleLanguageHandler = () =>
    setCurrentLanguage((prevState) => (prevState === "en" ? "tr" : "en"));

  useEffect(() => {
    i18next.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  const contextValue = {
    currentLanguage,
    toggleLanguage: toggleLanguageHandler,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
