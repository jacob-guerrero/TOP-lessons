/* Function Invocation */
/* function hello(name) {
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
console.log(numbers.sum()); // => 15 */

// -----------

/* Method invocation */
const myObject = {
  // helloMethod is a method
  helloMethod: function () {
    return "Hello World!";
  },
};
const message = myObject.helloMethod();
console.log(message);

// Using this
const calc = {
  num: 0,
  increment() {
    console.log(this === calc); // => true
    this.num += 1;
    return this.num;
  },
};
// method invocation. this is calc
console.log(calc.increment()); // => 1
console.log(calc.increment()); // => 2

// Inherits prototype
const myDog = Object.create({
  sayName() {
    console.log(this === myDog); // => true
    return this.name;
  },
});
myDog.name = "Milo";
// method invocation. this is myDog
console.log(myDog.sayName()); // => 'Milo'

// Using arrow function
function Pet(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = () => {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat = new Pet("Cat", 4);
// logs "The Cat has 4 legs"
setTimeout(myCat.logInfo, 1000);
// myCat.logInfo returns a new function that executes exactly like logInfo, but has this as myCat, even in a function invocation.

// -----------

/* Constructor Invocation */
function Country(name, traveled) {
  this.name = name ? name : "United Kingdom";
  this.traveled = Boolean(traveled); // transform to a boolean
}
Country.prototype.travel = function () {
  this.traveled = true;
};
// Constructor invocation
const france = new Country("France", false);
// Constructor invocation
const unitedKingdom = new Country();
france.travel(); // Travel to France
console.log(france);
console.log(unitedKingdom);

// Using this
function Foo() {
  // this is fooInstance
  this.property = "Default Value";
}
// Constructor invocation
const fooInstance = new Foo();
fooInstance.property; // => 'Default Value'
console.log(fooInstance)