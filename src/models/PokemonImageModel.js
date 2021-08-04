class PokemonImageModel {
  #source;
  #altText;
  constructor(source, altText) {
    this.#source = source;
    this.#altText = altText;
  }

  get source() {
    return this.#source;
  }

  get altText() {
    return this.#altText;
  }
}

export default PokemonImageModel;
