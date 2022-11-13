const cars = [
    "Saab",
    "Volvo",
    "BMW"
]; //Arrays are declared with 'const'

let car = cars[1]; // Accessing array
cars [0] = "Lamborghini"; // Changing Array Element
document.getElementById("demo").innerHTML = cars; //Access the full array

const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango"
]; // For loop on arrays
let fruitsLength = fruits.length;
let fruitList = "<ul>";
for (let i=0; i<fruitsLength; i++) {
    fruitList += "<li>" + fruits[i] + "</li>";
}
fruitList += "</ul>";
document.getElementById("demo-list").innerHTML = fruitList;

console.log(car);
console.log(cars[0]);


// METHODS
const colors = [
    "red",
    "blue",
    "purple",
    "black"
];
console.log (colors.toString());  // From Array to string
colors.pop(); // Removes the last element
colors.push("white"); // Adds a new element (at the end)
colors.shift(); // Removes the first array element
colors.unshift("green"); // Adds a new element (at the beginning);
colors[colors.length] = "cyan"; //Adds a new element using length
