import { render, screen } from "@testing-library/react";

import Backdrop from "./Backdrop";

describe("Backdrop component", () => {
  it("should return a <button> element if 'isBackdropActivated' is true", () => {
    //Arrange
    render(<Backdrop isBackdropActivated={true} onDismiss={() => {}} />);

    //Act

    //Assert
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should return nothing if 'isBackdropActivated' is false", () => {
    //Arrange
    render(<Backdrop isBackdropActivated={false} onDismiss={() => {}} />);

    //Act

    //Assert
    const buttonElement = screen.queryByRole("button");
    expect(buttonElement).not.toBeInTheDocument();
  });
});
