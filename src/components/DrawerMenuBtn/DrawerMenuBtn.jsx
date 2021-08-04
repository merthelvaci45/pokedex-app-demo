import PropTypes from "prop-types";

import classes from "./DrawerMenuBtn.module.scss";

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
