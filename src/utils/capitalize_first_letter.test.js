import capitalizeFirstLetter from "./capitalize_first_letter";

describe("capitalizeFirstLetter function", () => {
  it("should return a string with first letter capitalized", () => {
    //Assert
    expect(capitalizeFirstLetter("this is a test")).toBe("This is a test");
  });
});
