/* First task */
/* let i = 3;
while (i) {
  alert( i-- ); // Last value alerted is 1
} */


/* Second task */
/* let i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4

let j = 0;
while (j++ < 5) alert( j ); // 1, 2, 3, 4, 5
 */


/* Third task */
/* for (let i = 0; i < 5; i++) alert( i );
// 0, 1, 2, 3, 4

for (let j = 0; j < 5; ++j) alert( j );
// 0, 1, 2, 3, 4
 */


/* Fourth task */
/* for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    alert (i);
  }
}
 */


/* Fifth task */
/* let i=0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
 */


/* Sixth task */
/* let number = prompt("Type a number grater than 100");
while (number < 100) {
  if (number == "" || number == null) break;
  number = prompt("Type a number grater than 100");
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
*/


/* Final task */
let n = 10;
let j = 0;

for (let i = 1; i < n; i++) {
  if (n % i == 0) {
    j++;
    console.log(i);
  }
  if (i % i == 0 && j < 2) {
    console.log(i)
  }
}
