const evaluateGuess = require("./pureFunction.js");

test("guess the number if its greater", () => {
  expect(evaluateGuess(4, 5)).toBe("YOUR GUESS IS TOO BIG");
});

test("guess the number if its less", () => {
  expect(evaluateGuess(4, 3)).toBe("YOUR GUESS IS TOO SMALL");
});

test("guess the number if its equal", () => {
  expect(evaluateGuess(4, 4)).toBe("YOU DID IT! 🎉");
});
