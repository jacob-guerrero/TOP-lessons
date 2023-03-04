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
const myFunction = function () {
  // Scope B
  let name = "Todd"; // defined in Scope B
  let myOtherFunction = function () {
    // Scope C: `name` is accessible here!
  };
};
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
