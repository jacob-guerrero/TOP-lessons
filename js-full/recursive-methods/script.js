/* Sum all numbers till the given one */

// Using a for loop
function sumToFor(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

// Using Recursion
function sumToRecursion(num) {
  return num === 1 ? num : (num += sumToRecursion(num - 1));
}

// Using Arithmetic Progression
function sumToArithProg(num) {
  return (num * (1 + num)) / 2;
}

/* console.log(sumToFor(1));
console.log(sumToRecursion(1));
console.log(sumToArithProg(1)); */

// --------------------------

/* Calculate Factorial */

function factorial(num) {
  return num === 1 ? num : (num *= factorial(num - 1));
}
