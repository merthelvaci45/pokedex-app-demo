import { useParams } from "react-router-dom";

//import classes from "./PokemonDetails.module.scss";

import { useAPI } from "../../hooks";
import { PokemonDetailsModel } from "../../models";

import Layout from "../../components/Layout";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";

const PokemonDetails = () => {
  const { id } = useParams(); // extract dynamic parameters from page URL, e.g. "/pokemons/4/charmander", where id=4 and name="charmander"
  const [apiData] = useAPI({
    queryString: `${id}`,
  });

  /**
   * "pokemonDetails" is an object/class which is defined by the blueprint of "PokemonDetailsModel".
   * it holds a simple object, in which there are 3 defined class properties, one of which is "baseExperience",
   * another of which is "name" and the other one of which is "weight". Further properties may even be added
   * to "PokemonDetailsModel" later on...
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
