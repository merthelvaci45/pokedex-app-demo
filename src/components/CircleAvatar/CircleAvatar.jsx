import PropTypes from "prop-types";

import classes from "./CircleAvatar.module.scss";

/**
 * this component holds a small image as avatar for a pokemon
 * and it is displayed in respective details card for each pokemon
 * NOTE: in Line-14, until image source is fully loaded, display a
 * small "Loading..." text to user
 */
const CircleAvatar = ({ imageModel }) => {
  return (
    <figure className={classes.Figure}>
      {imageModel.source === undefined ? (
        <small>Loading...</small>
      ) : (
        <img
          className="w-100 h-100"
          src={imageModel.source}
          alt={imageModel.altText}
        />
      )}
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
