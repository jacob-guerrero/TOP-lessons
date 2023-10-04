/* Sum all numbers till the given one */

// Using a for loop
function sumToFor(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(num) {
  if (num === 1) {
    return num;
  } else {
    return (num += sumToRecursion(num - 1));
  }
}

console.log(sumToFor(1));
console.log(sumToRecursion(1))
