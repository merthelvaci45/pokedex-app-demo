import { useContext } from "react";

import classes from "./DrawerMenuBtn.module.scss";

import { DrawerMenuContext } from "../../context";

import { useWindowDimensions } from "../../hooks";

const DrawerMenuBtn = () => {
  const context = useContext(DrawerMenuContext);
  const { width } = useWindowDimensions();

  return (
    width < 768 && (
      <button className={classes.DrawerBtn} onClick={context.toggleDrawerMenu}>
        <span />
      </button>
    )
  );
};

export default DrawerMenuBtn;
