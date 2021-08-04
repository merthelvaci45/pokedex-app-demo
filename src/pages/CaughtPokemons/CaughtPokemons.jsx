import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Layout from "../../components/Layout";
import NoResultsFound from "../../components/NoResultsFound";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";

import { PokemonDetailsModel } from "../../models";

const CaughtPokemons = () => {
  const pokedex = useSelector((state) => state.pokedexSlice.pokedex);
  const { t } = useTranslation();

  return (
    <Layout>
      {pokedex.length === 0 ? (
        <NoResultsFound text={t("No caught Pokemons")} />
      ) : (
        pokedex.map((pokemon) => {
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

export default CaughtPokemons;
