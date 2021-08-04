import { createContext, useState } from "react";

export const DrawerMenuContext = createContext(undefined);

export const DrawerMenuProvider = ({ children }) => {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);

  /**
   * this handler function is responsible for toggling drawer menu upon clicking drawer menu button for mobile devices
   */
  const toggleDrawerMenuDisplayHandler = () =>
    setIsDrawerMenuOpen((prevState) => !prevState);

  const contextValue = {
    isDrawerMenuOpen,
    toggleDrawerMenu: toggleDrawerMenuDisplayHandler,
  };

  return (
    <DrawerMenuContext.Provider value={contextValue}>
      {children}
    </DrawerMenuContext.Provider>
  );
};
