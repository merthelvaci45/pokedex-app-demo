import { useParams } from "react-router-dom";

import { useAPI } from "../../hooks";
import { PokemonDetailsModel } from "../../models";

import Layout from "../../components/Layout";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";

const PokemonDetails = () => {
  const { id } = useParams(); // extract dynamic "id" parameter from page URL, e.g. "/pokemons/4", where id = 4
  const [apiData] = useAPI({
    queryString: `${id}`,
  }); // fetch data for a particular pokemon from API. an example request path: https://pokeapi.co/api/v2/pokemon/1/

  /**
   * "pokemonDetails" is a class which is defined by the blueprint of "PokemonDetailsModel".
   * it holds a simple object, in which there are 4 defined class properties, one of which is "baseExperience",
   * another of which are "name", "weight" and "imgUrl. Further properties may even be added to "PokemonDetailsModel" later on...
   */
  const pokemonDetails = new PokemonDetailsModel(
    apiData?.base_experience,
    apiData?.name,
    apiData?.weight,
    apiData?.sprites.other["official-artwork"].front_default
  );

  return (
    <Layout>
      <PokemonDetailsCard details={pokemonDetails} isFavoriteIconHidden />
    </Layout>
  );
};

export default PokemonDetails;
