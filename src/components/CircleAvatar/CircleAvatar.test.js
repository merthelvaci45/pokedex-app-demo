import { render, screen } from "@testing-library/react";

import CircleAvatar from "./CircleAvatar";

describe("CircleAvatar component", () => {
  it("should return a <figure> element", () => {
    //Arrange
    render(<CircleAvatar imageModel={{ source: "", altText: "" }} />);

    //Act

    //Assert
    const figureElement = screen.getByRole("figure");
    expect(figureElement).toBeInTheDocument();
  });

  it("should display 'Loading...' text if 'source' prop is 'undefined'", () => {
    //Arrange
    render(<CircleAvatar imageModel={{ source: undefined, altText: "" }} />);

    //Act

    //Assert
    const loadingTextElement = screen.getByText(/loading/i);
    expect(loadingTextElement).toBeInTheDocument();
  });

  it("should display an <img> element if 'source' prop is NOT 'undefined'", () => {
    //Arrange
    render(<CircleAvatar imageModel={{ source: "", altText: "" }} />);

    //Act

    //Assert
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

  it("should display an <img> element with specified 'source' prop", () => {
    //Arrange
    render(<CircleAvatar imageModel={{ source: "img-source", altText: "" }} />);

    //Act

    //Assert
    const imgElement = screen.getByRole("img");
    const imgSource = imgElement.getAttribute("src");
    expect(imgSource).toBe("img-source");
  });
});
