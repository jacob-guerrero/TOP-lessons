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
console.log(france.traveled);
console.log(unitedKingdom.traveled);

// Using this
function Foo() {
  // this is fooInstance
  this.property = "Default Value";
}
// Constructor invocation
const fooInstance = new Foo();
fooInstance.property; // => 'Default Value'
console.log(fooInstance.property);

// -------

/* Indirect Invocation */
// It uses call or apply methods to call functions
// First arg = context, next args = passed as args to the called function
function sum(number1, number2) {
  return number1 + number2;
}
console.log(sum.call(undefined, 10, 2)); // => 12
console.log(sum.apply(undefined, [10, 2])); // => 12

// Using this
function Runner(name) {
  console.log(this instanceof Rabbit); // => true
  this.name = name;
}
function Rabbit(name, countLegs) {
  console.log(this instanceof Rabbit); // => true
  // Indirect invocation. Call parent constructor.
  Runner.call(this, name);
  this.countLegs = countLegs;
}
const myRabbit = new Rabbit("White Rabbit", 4);
console.log(myRabbit); // { name: 'White Rabbit', countLegs: 4 }

// -------

/* Bound Function */
// It uses bind method = original and bound fun share same code and scope
// First arg = context, then we've an optional list of arguments
function multiply(number) {
  "use strict";
  return this * number;
}
// create a bound function with context
const double = multiply.bind(2);
// invoke the bound function
console.log(double(3)); // => 6
console.log(double(10)); // => 20

// Using this
const numbers = {
  array: [3, 5, 10],
  getNumbers() {
    return this.array;
  },
};
// Create a bound function
const boundGetNumbers = numbers.getNumbers.bind(numbers);
console.log(boundGetNumbers()); // => [3, 5, 10]
// Extract method from object
const simpleGetNumbers = numbers.getNumbers;
console.log(simpleGetNumbers()); // => undefined or throws an error in strict mode

// ----------------

/* Arrow Functions and This */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  log() {
    console.log(this === myPoint); // => true
    setTimeout(() => {
      console.log(this === myPoint); // => true
      console.log(this.x + ":" + this.y); // => '95:165'
    }, 1000);
  }
}
const myPoint = new Point(95, 165);
myPoint.log();

// Note: don't define methods with an arrow function bc context (= window):
function Period(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}
Period.prototype.format = function () {
  console.log(this === walkPeriod); // => true
  return this.hours + " hours and " + this.minutes + " minutes";
};
const walkPeriod = new Period(2, 30);
walkPeriod.format(); // => '2 hours and 30 minutes'
