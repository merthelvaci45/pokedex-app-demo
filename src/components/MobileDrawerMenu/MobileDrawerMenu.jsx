import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import classes from "./MobileDrawerMenu.module.scss";

import { useNavigateToPage } from "../../hooks";

import { menuItems } from "../../utils";

const MobileDrawerMenu = ({ isDrawerMenuOpen, onDismiss }) => {
  const { t } = useTranslation();

  const handlers = useNavigateToPage();

  /**
   * this handler function is responsible for dismissing drawer menu and backdrop.
   * if clicked menu item has a different page route link, user is redirected to that page,
   * otherwise s/he stays in the same page.
   */
  const clickToDrawerMenuLinkItemHandler = (index) => {
    onDismiss();
    handlers[index]();
  };

  return (
    <div
      className={`${classes.DrawerMenu} ${
        isDrawerMenuOpen ? classes.MenuOpen : classes.MenuClosed
      }`}
    >
      {menuItems.map((item, index) => (
        <button
          key={item}
          className={classes.DrawerMenuItem}
          onClick={clickToDrawerMenuLinkItemHandler.bind(this, index)}
        >
          {t(item)}
        </button>
      ))}
    </div>
  );
};

MobileDrawerMenu.propTypes = {
  isDrawerMenuOpen: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
};

MobileDrawerMenu.defaultProps = {
  isDrawerMenuOpen: false,
};

export default MobileDrawerMenu;
