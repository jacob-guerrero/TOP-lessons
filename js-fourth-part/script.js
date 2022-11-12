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
