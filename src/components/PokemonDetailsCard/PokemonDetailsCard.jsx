import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import classes from "./PokemonDetailsCard.module.scss";

import { pokedexActions } from "../../store/slices";

import CircleAvatar from "../CircleAvatar";
import ToggleableFavoriteIcon from "../ToggleableFavoriteIcon";

import { PokemonImageModel } from "../../models";

const PokemonDetailsCard = ({ details, isFavoriteIconHidden }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  /**
   * this handler function is responsible for adding a pokemon to pokedex
   * implementation details of "pokedexActions.catchPokemon" method is in "../../store/slices/pokedex-slice.js"
   */
  const catchPokemonHandler = (pokemon) => {
    const { baseExperience, name, weight, imgUrl } = pokemon; // destructure "pokemon" object to extract its properties
    const pokemonObj = { baseExperience, name, weight, imgUrl }; // create a JS object out of "pokemon" properties to serialize "pokemon"
    dispatch(pokedexActions.catchPokemon({ pokemon: pokemonObj })); // dispatch required redux action for adding pokemon to pokedex
  };

  /**
   * this handler function is responsible for removing a pokemon from pokedex
   * implementation details of "pokedexActions.releasePokemon" method is in "../../store/slices/pokedex-slice.js"
   */
  const releasePokemonHandler = (pokemonName) => {
    dispatch(pokedexActions.releasePokemon({ pokemonName }));
  };

  return (
    <div className={classes.Card}>
      <CircleAvatar
        imageModel={new PokemonImageModel(details.imgUrl, details.name)}
      />
      <div>
        {Object.keys(details.all).map((key, index) => (
          <p key={key}>
            {index !== 3 && (
              <>
                <span className={classes.DetailsBold}>{t(key)}:</span>
                <span>{t(details.all[key])}</span>
              </>
            )}
          </p>
        ))}
        <div className={classes.ButtonsGroup}>
          <button
            className={`${classes.Button} button-success`}
            onClick={catchPokemonHandler.bind(this, details)}
          >
            {t("CATCH")}
          </button>
          <button
            className={`${classes.Button} button-danger`}
            onClick={releasePokemonHandler.bind(this, details.name)}
          >
            {t("RELEASE")}
          </button>
          {details !== undefined && !isFavoriteIconHidden && (
            <ToggleableFavoriteIcon pokemon={details} />
          )}
        </div>
      </div>
    </div>
  );
};

PokemonDetailsCard.propTypes = {
  details: PropTypes.shape({
    baseExperience: PropTypes.number,
    name: PropTypes.string,
    weight: PropTypes.number,
    imgUrl: PropTypes.string,
  }).isRequired,
  isFavoriteIconHidden: PropTypes.bool,
};

PokemonDetailsCard.defaultProps = {
  isFavoriteIconHidden: false,
};

export default PokemonDetailsCard;
