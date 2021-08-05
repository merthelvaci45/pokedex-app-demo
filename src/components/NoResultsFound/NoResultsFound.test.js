import { render, screen } from "@testing-library/react";

import NoResultsFound from "./NoResultsFound";

describe("NoResultsFound component", () => {
  it("should return a <button> element", () => {
    //Arrange
    render(<NoResultsFound text="No results found" />);

    //Act

    //Assert
    const spanElement = screen.getByText(/no results found/i);
    expect(spanElement).toBeInTheDocument();
  });
});
