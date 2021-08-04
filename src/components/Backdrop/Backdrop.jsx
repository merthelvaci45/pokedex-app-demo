import { useContext } from "react";

import classes from "./Backdrop.module.scss";

import { DrawerMenuContext } from "../../context";

const Backdrop = () => {
  const context = useContext(DrawerMenuContext);

  return (
    context.isDrawerMenuOpen && (
      <button
        className={classes.Backdrop}
        onClick={context.toggleDrawerMenu}
      ></button>
    )
  );
};

export default Backdrop;
