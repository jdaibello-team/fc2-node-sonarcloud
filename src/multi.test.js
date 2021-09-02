const multi = require("./multi");

test("multiply 1 * 2 to be equal 2", () => {
  expect(multi(1, 2)).toBe(2);
});
