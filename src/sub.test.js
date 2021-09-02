const sub = require("./sub");

test("subtract 1 - 2 to be equal -1", () => {
  expect(sub(1, 2)).toBe(-1);
});
