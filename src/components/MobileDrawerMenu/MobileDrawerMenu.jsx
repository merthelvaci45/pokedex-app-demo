import { useContext } from "react";
import { useTranslation } from "react-i18next";

import classes from "./MobileDrawerMenu.module.scss";

import { DrawerMenuContext } from "../../context";

import { useNavigateToPage } from "../../hooks";

import { menuItems } from "../../utils";

const MobileDrawerMenu = () => {
  const drawerMenuContext = useContext(DrawerMenuContext);
  const { t } = useTranslation();

  const handlers = useNavigateToPage();

  return (
    <div
      className={`${classes.DrawerMenu} ${
        drawerMenuContext.isDrawerMenuOpen
          ? classes.MenuOpen
          : classes.MenuClosed
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
          onClick={handlers[index]}
        >
          {t(item)}
        </button>
      ))}
    </div>
  );
};

export default MobileDrawerMenu;
