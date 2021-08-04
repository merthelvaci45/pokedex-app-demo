import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import classes from "./ToggleableFavoriteIcon.module.scss";

import { pokedexActions } from "../../store/slices";

const ToggleableFavoriteIcon = ({ pokemon }) => {
  const dispatch = useDispatch();
  const favoritePokemons = useSelector((state) => state.pokedexSlice.favorites);

  /**
   * this handler function is responsible for toggling "favorite" status of a pokemon
   */
  const toggleFavoriteStatusOfPokemonHandler = () => {
    const { baseExperience, name, weight, imgUrl } = pokemon; // destructure "pokemon" object to extract its properties
    const pokemonObj = { baseExperience, name, weight, imgUrl }; // create a JS object out of "pokemon" properties to serialize "pokemon"
    dispatch(pokedexActions.toggleFavoriteStatus({ pokemon: pokemonObj }));
  };

  const isPokemonAddedAsFavorite = favoritePokemons.some(
    (poke) => poke.name === pokemon.name
  );

  return (
    <button
      className={classes.IconButton}
      onClick={toggleFavoriteStatusOfPokemonHandler}
    >
      <i
        className={`${isPokemonAddedAsFavorite ? "fas" : "far"} fa-star mr-1 ${
          classes.FavoriteIcon
        }`}
      />
    </button>
  );
};

ToggleableFavoriteIcon.propTypes = {
  pokemon: PropTypes.shape({
    baseExperience: PropTypes.number,
    name: PropTypes.string,
    weight: PropTypes.number,
    imgUrl: PropTypes.string,
  }).isRequired,
};

export default ToggleableFavoriteIcon;