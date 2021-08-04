import { useSelector } from "react-redux";

import Layout from "../../components/Layout";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";

import { PokemonDetailsModel } from "../../models";

const CaughtPokemons = () => {
  const pokedex = useSelector((state) => state.pokedexSlice.pokedex);

  return (
    <Layout>
      {pokedex.length === 0 ? (
        <span>No caught Pokemons</span>
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
