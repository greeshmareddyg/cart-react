import savings from "../../src/reducers/savings";


describe("todos reducer", () => {
  it("should return the default discount", () => {
    expect(savings(undefined, {})).toEqual(1.12);
  });
});
