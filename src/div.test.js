const div = require("./div");

test("divide 1 / 2 to be equal 0.5", () => {
  expect(div(1, 2)).toBe(0.5);
});
