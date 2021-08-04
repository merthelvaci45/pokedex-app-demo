import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Layout from "../../components/Layout";
import NoResultsFound from "../../components/NoResultsFound";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";

import { PokemonDetailsModel } from "../../models";

const FavoritePokemons = () => {
  const favoritePokemons = useSelector((state) => state.pokedexSlice.favorites);
  const { t } = useTranslation();

  return (
    <Layout>
      {favoritePokemons.length === 0 ? (
        <NoResultsFound text={t("No favorite Pokemons")} />
      ) : (
        favoritePokemons.map((pokemon) => {
          const { baseExperience, name, weight, imgUrl } = pokemon;
          const pokemonModel = new PokemonDetailsModel(
            baseExperience,
            name,
            weight,
            imgUrl
          );
          return <PokemonDetailsCard key={name} details={pokemonModel} />;
        })
      )}
    </Layout>
  );
};

export default FavoritePokemons;
