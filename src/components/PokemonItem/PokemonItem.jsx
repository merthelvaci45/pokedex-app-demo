import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";

import classes from "./PokemonItem.module.scss";

import { capitalizeFirstLetter } from "../../utils";

const PokemonItem = ({ pokemonName, id }) => {
  const history = useHistory();

  /**
   * this handler function is responsible for navigating to a specific page,
   * in which some detailed information are displayed in a styled Card object
   * for the respective pokemon, on which it was clicked.
   */
  const navigateToPokemonDetailsPageHandler = () => {
    history.push(`/pokemons/${id}`);
  };

  return (
    <button
      className={classes.Item}
      onClick={navigateToPokemonDetailsPageHandler}
    >
      <span>{capitalizeFirstLetter(pokemonName)}</span>
    </button>
  );
};

PokemonItem.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PokemonItem;
