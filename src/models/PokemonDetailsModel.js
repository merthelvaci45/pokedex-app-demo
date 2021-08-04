import { capitalizeFirstLetter } from "../utils";

class PokemonDetailsModel {
  #baseExperience;
  #name;
  #weight;
  #imgUrl;
  constructor(baseExperience, name, weight, imgUrl) {
    this.#baseExperience = baseExperience;
    this.#name = name;
    this.#weight = weight;
    this.#imgUrl = imgUrl;
  }

  get baseExperience() {
    return this.#baseExperience;
  }

  get name() {
    return this.#name;
  }

  get weight() {
    return this.#weight;
  }

  get imgUrl() {
    return this.#imgUrl;
  }

  get all() {
    return {
      "Base Experience": this.#baseExperience,
      Name: capitalizeFirstLetter(this.#name),
      Weight: this.#weight,
      ImageUrl: this.#imgUrl,
    };
  }
}

export default PokemonDetailsModel;
