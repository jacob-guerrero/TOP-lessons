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

const func = x => {
  let a = x;
  return a;
};

console.log(func(99)); // 99 Prints the value of a inside the function
console.log(a); // 17 Prints the global value of a
// Changing example above:
const funcTwo = x => {
  a = x
  return a;
}
console.log(funcTwo(98)) // 98 Change and prints the new value of a
console.log(a) // 98 Bc we changed the global value of a