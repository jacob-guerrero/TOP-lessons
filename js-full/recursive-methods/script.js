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

/* Calculate Fibonacci */

function fib(num) {
  return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

function fibFor(num) {
  let prev = 1;
  let next = 1;
  let out = 0;

  if (num <= 2) {
    return 1;
  } else {
    for (let i = 2; i < num; i++) {
      out = prev + next;
      prev = next;
      next = out;
    }
    return out;
  }
}

// ----------------------------

/* Printing lists */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListLoop(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printListRecursive(list) {
  if (list) {
    console.log(list.value);
    printListRecursive(list.next);
  }
}

// printListLoop(list);
// printListRecursive(list);
