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
colors[colors.length] = "cyan"; // Adds a new element using length

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3); // Concatenate arrays without changing them. Also It could work with values "concat('Peter')"
myChildren.splice(2, 1, "Will", "Smith"); // Splice can be used to add new items, 2 defines the position where new elements should be added, 1 defines how many elements should me removes, ("Will", "Smith") define the new elements to be added
myChildren.splice(1,2);
console.log(myChildren);

const lightColor = colors.slice(1); // Slice out a piece of an array into a new one, being (1) the starting index
console.log(lightColor);