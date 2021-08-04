import { useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import classes from "./Header.module.scss";

import DrawerMenuBtn from "../DrawerMenuBtn";

import { useNavigateToPage, useWindowDimensions } from "../../hooks";

import { menuItems } from "../../utils";

import { LanguageContext } from "../../context";

const Header = ({ onToggleMenu }) => {
  const context = useContext(LanguageContext);
  const { t } = useTranslation();

  const handlers = useNavigateToPage();
  const { width } = useWindowDimensions();

  return (
    <header className={classes.Header}>
      <div className="container-fluid h-100">
        <DrawerMenuBtn onToggleMenu={onToggleMenu} />
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

Header.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default Header;
