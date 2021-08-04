import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import classes from "./MobileDrawerMenu.module.scss";

import { useNavigateToPage } from "../../hooks";

import { menuItems } from "../../utils";

const MobileDrawerMenu = ({ isDrawerMenuOpen, onDismiss }) => {
  const { t } = useTranslation();

  const handlers = useNavigateToPage();

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
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon Logo"
        style={{ maxWidth: "100%", height: "3rem" }}
      /> */}
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
