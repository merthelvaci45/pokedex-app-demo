import PropTypes from "prop-types";

import classes from "./Spinner.module.scss";

/**
 * this component display a loading spinner whenever any data in any page/component
 * is being loaded.
 */
const Spinner = ({ isLargeSpinner }) => {
  return (
    <div
      role="none"
      className={`${classes.Spinner} ${
        isLargeSpinner ? classes.LargeSpinner : classes.SmallSpinner
      }`}
    ></div>
  );
};

Spinner.propTypes = {
  isLargeSpinner: PropTypes.bool,
};

Spinner.defaultProps = {
  isLargeSpinner: false,
};

export default Spinner;
