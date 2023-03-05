/* Factory Function */
const personFactory = (name, age) => {
  const sayHello = () => console.log("hello!");
  return { name, age, sayHello };
};

const jeff = personFactory("jeff", 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

/* Reviewing Scopes */
let a = 17;

const func = (x) => {
  let a = x;
  return a;
};

console.log(func(99)); // 99 Prints the value of a inside the function
console.log(a); // 17 Prints the global value of a
// Changing example above:
const funcTwo = (x) => {
  a = x;
  return a;
};
console.log(funcTwo(98)); // 98 Change and prints the new value of a
console.log(a); // 98 Bc we changed the global value of a

/* Lexical scope */
// Scope A
/* const myFunction = function () {
  // Scope B
  let name = "Todd"; // defined in Scope B
  let myOtherFunction = function () {
    // Scope C: `name` is accessible here!
  };
}; */
/* Lexical scope doesn't work backwards */
// name = undefined
const scope1 = function () {
  // name = undefined
  const scope2 = function () {
    // name = undefined
    const scope3 = function () {
      let name = "Todd"; // locally scoped
    };
  };
};

/* Closures */
const sayHello = function (name) {
  let text = `Hello, ${name}`;
  return function () {
    console.log(text);
  };
};
// The function returns a function, which means it needs assignment, and then calling, but we can do:
console.log(sayHello("Bob")()); // calls the returned function without assignment

/* Scope and this */
/* const nav = document.querySelector(".nav"); // <nav class="nav">
const toggleNav = function () {
  const that = this;
  console.log(that); // <nav> element
  setTimeout(function () {
    console.log(that); // <nav> element
  }, 1000);
};
nav.addEventListener("click", toggleNav, false); */
// Using "that" we can cache a reference and refer to the lexical binding

/* Changing Scope with call(), apply() and bind() */
/* const links = document.querySelectorAll("nav li");
for (let i = 0; i < links.length; i++) {
  (function () {
    console.log(this);
  }).call(links[i]);
} */
// Without the function and the .call(), 'this' is the object window

/* Private and Public scope */
// Creating Private scope:
(function () {
  const myFunction = function () {
    // My function is a private function
    // do some stuff here
  };
})();
// Module Pattern, it is used to scope functions using private and public scope and an Object:
// define module
const Module = (function () {
  // This is how we can create private scope by not returning functions.
  const _privateMethod = function () {
    // This is a private function
  };
  // These privately scoped functions are things like helpers, addClass, removeClass, Ajax/XHR calls, Arrays, Objects, anything.
  return {
    // The return statement here is what returns public methods
    myMethod: function () {
      console.log("myMethod has been called.");
    },
    someOtherMethod: function () {
      // We can add as many methods as we want
    },
  };
})();
// call module + methods
Module.myMethod();
Module.someOtherMethod();

// Anything ins the same scope has access to anything in the same scope:
const Module2 = (function () {
  let privateMethod = function () {};
  return {
    publicMethod: function () {
      // has access to `privateMethod`, we can call it:
      // privateMethod();
    },
  };
})();

// Returning an Object making use of public and private methods:
const Module3 = (function () {
  const myModule = {};
  const privateMethod = function () {};
  myModule.publicMethod = function () {};
  myModule.anotherPublicMethod = function () {};
  return myModule; // returns the Object with public methods
})();
// usage
Module3.publicMethod();

/* Private variables and functions */
const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction("taco");

// printString(); // ERROR!!
// capitalizeString(); // ERROR!!
// taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"

// Another example:
const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};
const counter = counterCreator();
counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3

/* More Factory Functions (examples)  */
const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    // uh oh
  };
  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

const jimmie = Player("jim", 10);
const badGuy = Player("jeff", 5);
jimmie.attack(badGuy);

/* Inheritance with factories */
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const { sayName } = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return { sayName, doSomethingNerdy };
};

const jef = Nerd("jef");
jef.sayName(); // my name is jef
jef.doSomethingNerdy(); // nerd stuff

// Another way to lump ALL of another object in: (Object.assign)
/* const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return Object.assign({}, prototype, {doSomethingNerdy});
} */
