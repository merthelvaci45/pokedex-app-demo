import { render, screen } from "@testing-library/react";

import PokemonItem from "./PokemonItem";

describe("PokemonItem component", () => {
  it("should return a <button> element", () => {
    //Arrange
    render(<PokemonItem pokemonName="" id="" />);

    //Act

    //Assert
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should return a <span> element with first letter capitalized", () => {
    //Arrange
    render(<PokemonItem pokemonName="pikachu" id="" />);

    //Act

    //Assert
    const spanElement = screen.getByText("Pikachu");
    expect(spanElement).toBeInTheDocument();
  });
});
