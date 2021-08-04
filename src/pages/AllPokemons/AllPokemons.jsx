import classes from "./AllPokemons.module.scss";

import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import PokemonItem from "../../components/PokemonItem";

import { useAPI } from "../../hooks";
import { splitUrl } from "../../utils";

/// splitUrl(pokemon.url, { splitBy: "/" }) returns an array, e.g. ["https:", "", "pokeapi.co", "api", "v2", "pokemon", "1", ""]
/// where pokemon.url = "https://pokeapi.co/api/v2/pokemon/1/". 6th element of this array gives the particular index of each pokemon
const AllPokemons = () => {
  const [allPokemons, isLoading] = useAPI({});

  return isLoading ? (
    <Spinner isFullScreenSize />
  ) : (
    <Layout
    //style={{ gridTemplateRows: `repeat(${allPokemons.length / 2}, 8rem)` }}
    >
      <div className={classes.Pokemons}>
        {allPokemons?.results.map((pokemon) => (
          <PokemonItem
            key={splitUrl(pokemon.url, { splitBy: "/" })[6]}
            id={splitUrl(pokemon.url, { splitBy: "/" })[6]}
            pokemonName={pokemon.name}
          />
        ))}
      </div>
    </Layout>
  );
};

export default AllPokemons;
