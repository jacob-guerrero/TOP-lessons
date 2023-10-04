/* Sum all numbers till the given one */

// Using a for loop
function sumToFor(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(sumToFor(1));
