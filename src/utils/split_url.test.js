import splitUrl from "./split_url";

describe("splitUrl function", () => {
  it("should return an array of string(s) when a string is split by a character", () => {
    //Assert
    expect(splitUrl("this is a test", { splitBy: " " })).toEqual([
      "this",
      "is",
      "a",
      "test",
    ]);
  });

  it("should return an array whose length is equal to 1 when a string cannot be split by a character", () => {
    //Assert
    expect(splitUrl("this is a test", { splitBy: "-" })).toHaveLength(1);
  });

  it("should return 'undefined' if type of first argument is NOT 'string'", () => {
    //Assert
    expect(splitUrl(123, { splitBy: "-" })).toBeUndefined();
  });
});
