import PropTypes from "prop-types";

import classes from "./CircleAvatar.module.scss";

/**
 * this component holds a small image as avatar for a pokemon
 * and it is displayed in details page for each pokemon
 */
const CircleAvatar = ({ imageModel }) => {
  return (
    <figure className={classes.Figure}>
      <img
        className="w-100 h-100"
        src={imageModel.source}
        alt={imageModel.altText}
      />
    </figure>
  );
};

CircleAvatar.propTypes = {
  imageModel: PropTypes.shape({
    altText: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};

export default CircleAvatar;
