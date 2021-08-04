import { useSelector } from "react-redux";

import Layout from "../../components/Layout";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";

import { PokemonDetailsModel } from "../../models";

const FavoritePokemons = () => {
  const favoritePokemons = useSelector((state) => state.pokedexSlice.favorites);

  return (
    <Layout>
      {favoritePokemons.length === 0 ? (
        <span>No favorite Pokemons</span>
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
