/* const cars = [
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
console.log(lightColor); */



// Looping 
/* function toLower(string) {
    return string.toLowerCase();
}
const cats = [
    "LeOparD",
    "ServAl",
    "jaGUar",
    "tIgER",
    "LiOn"
];
const catsLower = cats.map(toLower); // Map() does something to each item and create a new collection containing the changed items
document.getElementById("map-example").innerHTML = catsLower;

function getFilterCat(cat) {
    return cat.startsWith("l");
}
const catsFilter = catsLower.filter(getFilterCat); // Filter() test each item and create a new collection containing only items that match
document.getElementById("filter-example").innerHTML = catsFilter;

const dogs = [
    "big",
    "small",
    "super big",
    "medium"
]
for (const dog of dogs) {
    console.log(dog); // The typeof "dog" is string
} */


/* let i = 10;
let output = document.querySelector('.output');
output.innerHTML = '';
while (i >= 0) {
    
    const para = document.createElement('p');
    if(i === 10) {
        para.textContent = `Countdown ${i}`;
    } else if (i === 0){
        para.textContent = "Blast off!";
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
    i--;
} */


const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
let i = 0;
while (i<people.length) {
    if (people[i] == "Phil" || people[i] == "Lola" ) {
        refused.textContent += `${people[i]}, `;
    } else {
        admitted.textContent += `${people[i]}, `;
    }
    
    i++;
}
admitted.textContent = `${admitted.textContent.slice(0,admitted.textContent.length-2)}.`;
refused.textContent = `${refused.textContent.slice(0,refused.textContent.length-2)}.`;
// refused.textContent += ;
// admitted.textContent += ;