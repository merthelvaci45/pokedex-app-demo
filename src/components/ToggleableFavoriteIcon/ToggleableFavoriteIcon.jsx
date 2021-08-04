import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import classes from "./ToggleableFavoriteIcon.module.scss";

import Spinner from "../Spinner";

import { pokedexActions } from "../../store/slices";

import { useFakeProcessing } from "../../hooks";

const ToggleableFavoriteIcon = ({ pokemon }) => {
  const dispatch = useDispatch();
  const favoritePokemons = useSelector((state) => state.pokedexSlice.favorites);

  const [isDataProcessing, setIsDataProcessing] = useFakeProcessing();

  /**
   * this handler function is responsible for toggling "favorite" status of a pokemon
   */
  const toggleFavoriteStatusOfPokemonHandler = () => {
    const { baseExperience, name, weight, imgUrl } = pokemon; // destructure "pokemon" object to extract its properties
    const pokemonObj = { baseExperience, name, weight, imgUrl }; // create a JS object out of "pokemon" properties to serialize "pokemon"
    dispatch(pokedexActions.toggleFavoriteStatus({ pokemon: pokemonObj }));

    setIsDataProcessing(true);
  };

  // check if "pokemon" is already marked as favorite or not
  // if so, display a filled star icon; otherwise display an outlined star icon
  const isPokemonAddedAsFavorite = favoritePokemons.some(
    (poke) => poke.name === pokemon.name
  );

  return (
    <button
      className={classes.IconButton}
      onClick={toggleFavoriteStatusOfPokemonHandler}
    >
      {isDataProcessing ? (
        <Spinner />
      ) : (
        <i
          className={`${
            isPokemonAddedAsFavorite ? "fas" : "far"
          } fa-star mr-1 ${classes.FavoriteIcon}`}
        />
      )}
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
