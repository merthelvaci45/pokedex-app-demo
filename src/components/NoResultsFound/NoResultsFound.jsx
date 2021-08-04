import PropTypes from "prop-types";

import classes from "./NoResultsFound.module.scss";

const NoResultsFound = ({ text }) => {
  return (
    <div className={classes.NoResults}>
      <span>{text}</span>
    </div>
  );
};

NoResultsFound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoResultsFound;
