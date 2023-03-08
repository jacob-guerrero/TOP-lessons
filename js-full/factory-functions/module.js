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

/* Creating a Module */
const myModule = (function () {
  return {
    publicMethod: function () {
      console.log("Hello World!");
    },
  };
})();

myModule.publicMethod(); // outputs 'Hello World'

// Private methods and properties
const myModule2 = (function () {
  const _privateProperty = "Hello World";

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod: function () {
      _privateMethod();
    },
  };
})();

myModule2.publicMethod(); // outputs 'Hello World'
// console.log(myModule2._privateProperty); // is undefined protected by the module closure
// myModule2._privateMethod(); // is TypeError protected by the module closure

/* Revealing Module Pattern */
// This reveals only methods or properties we want to be publicly
const myModule3 = (function () {
  const _privateProperty = "Hello World";
  const publicProperty = "I am a public property";

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty,
  };
})();

myModule3.publicMethod(); // outputs 'Hello World'
console.log(myModule3.publicProperty); // outputs 'I am a public property'
// console.log(myModule3._privateProperty); // is undefined protected by the module closure
// myModule3._privateMethod(); // is TypeError protected by the module closure
