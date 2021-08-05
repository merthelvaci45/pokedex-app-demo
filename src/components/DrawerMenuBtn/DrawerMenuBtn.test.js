import { render, screen } from "@testing-library/react";

import DrawerMenuBtn from "./DrawerMenuBtn";

describe("DrawerMenuBtn component", () => {
  it("should return a <button> element", () => {
    //Arrange
    render(<DrawerMenuBtn onToggleMenu={() => {}} />);

    //Act

    //Assert
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
