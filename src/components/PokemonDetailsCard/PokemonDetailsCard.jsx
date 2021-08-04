import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import classes from "./PokemonDetailsCard.module.scss";

import { pokedexActions } from "../../store/slices";

import CircleAvatar from "../CircleAvatar";
import ToggleableFavoriteIcon from "../ToggleableFavoriteIcon";

import { PokemonImageModel } from "../../models";

import { useFakeProcessing } from "../../hooks";

const PokemonDetailsCard = ({ details, isFavoriteIconHidden }) => {
  const dispatch = useDispatch();
  const [isPokemonCaught, setisPokemonCaught] = useState(false);
  const [isPokemonReleased, setisPokemonReleased] = useState(false);
  const { t } = useTranslation();

  const [isDataProcessing, setIsDataProcessing] = useFakeProcessing();

  /**
   * this handler function is responsible for adding a pokemon to pokedex
   * implementation details of "pokedexActions.catchPokemon" method is in "../../store/slices/pokedex-slice.js"
   */
  const catchPokemonHandler = (pokemon) => {
    const { baseExperience, name, weight, imgUrl } = pokemon; // destructure "pokemon" object to extract its properties
    const pokemonObj = { baseExperience, name, weight, imgUrl }; // create a JS object out of "pokemon" properties to serialize "pokemon"
    dispatch(pokedexActions.catchPokemon({ pokemon: pokemonObj })); // dispatch required redux action for adding pokemon to pokedex
    setIsDataProcessing(true);
    setisPokemonCaught(true);
    setisPokemonReleased(false);
  };

  /**
   * this handler function is responsible for removing a pokemon from pokedex
   * implementation details of "pokedexActions.releasePokemon" method is in "../../store/slices/pokedex-slice.js"
   */
  const releasePokemonHandler = (pokemonName) => {
    dispatch(pokedexActions.releasePokemon({ pokemonName }));
    setIsDataProcessing(true);
    setisPokemonCaught(false);
    setisPokemonReleased(true);
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
            disabled={isDataProcessing && isPokemonCaught}
          >
            {isDataProcessing && isPokemonCaught ? (
              <span style={{ fontSize: ".7rem" }}>Loading...</span>
            ) : (
              t("CATCH")
            )}
          </button>
          <button
            className={`${classes.Button} button-danger`}
            onClick={releasePokemonHandler.bind(this, details.name)}
            disabled={isDataProcessing && isPokemonReleased}
          >
            {isDataProcessing && isPokemonReleased ? (
              <span style={{ fontSize: ".7rem" }}>Loading...</span>
            ) : (
              t("RELEASE")
            )}
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
