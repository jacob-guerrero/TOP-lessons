/* Module Pattern */
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476

// IIFE Immediately invoked function expression
// Anything within the parentheses is part of an expression
(function () {
  /* logic here */
});

// IIFE has a couple of parentheses on the end.
(function () {
  const foo = "bar";

  // Outputs: "bar"
  console.log(foo);
})();
console.log(foo); // ReferenceError: foo is not defined
