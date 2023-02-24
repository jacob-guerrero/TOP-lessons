/* Function Invocation */
function hello(name) {
  return "Hello " + name + "!";
}

// Another one

const message = hello("World");
console.log(message);

function sum(a, b) {
  this.myNumber = 20; // add 'myNumber' property to global object
  return a + b;
}
// sum() is invoked as a function
// this in sum() is a global object (window)
console.log(sum(15, 16)); // => 31

// if 'use strict', this = undefined

const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(this === numbers); // => true
    const calculate = () => {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    };
    return calculate();
  },
};
console.log(numbers.sum()); // => 15
