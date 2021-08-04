import { useContext } from "react";
import { useTranslation } from "react-i18next";

import classes from "./Header.module.scss";

import DrawerMenuBtn from "../DrawerMenuBtn";

import { useNavigateToPage, useWindowDimensions } from "../../hooks";

import { menuItems } from "../../utils";

import { LanguageContext } from "../../context";

const Header = () => {
  const context = useContext(LanguageContext);
  const { t } = useTranslation();

  const handlers = useNavigateToPage();
  const { width } = useWindowDimensions();

  return (
    <header className={classes.Header}>
      <div className="container-fluid h-100">
        <DrawerMenuBtn />
        <button
          className={classes.TranslateButton}
          onClick={context.toggleLanguage}
        >
          {context.currentLanguage === "en" ? "TR" : "EN"}
        </button>
        {width >= 768 && (
          <div>
            {menuItems.map((item, index) => (
              <button
                key={item}
                className={classes.HeaderLargeMenuItem}
                onClick={handlers[index]}
              >
                {t(item)}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
