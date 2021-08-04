import PropTypes from "prop-types";

import classes from "./DrawerMenuBtn.module.scss";

/**
 * this component is displayed only for mobile devices and
 * used for opening drawer menu upon click
 */
const DrawerMenuBtn = ({ onToggleMenu }) => {
  return (
    <button className={classes.DrawerBtn} onClick={onToggleMenu}>
      <span />
    </button>
  );
};

DrawerMenuBtn.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default DrawerMenuBtn;
