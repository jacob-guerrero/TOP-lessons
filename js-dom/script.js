// Targeting nodes with selectors
const container = document.querySelector('#container');
console.dir(container.firstElementChild);

const controls = document.querySelector('.controls');
console.dir(controls.previousElementSibling);

const containerLastElement = document.querySelector('container');
console.dir(container.lastElementChild);

const allSelectors = document.querySelectorAll('container');
console.dir(container); // Contains a nodelist


// DOM Methods
const div = document.createElement('div'); // Create Elements
const textDiv =document.createTextNode('This was created first using JavaScript');
div.appendChild(textDiv); // Add text
container.appendChild(div); // Append elements

const div2 = document.createElement('div');
const textDiv2 = document.createTextNode('This was created second using JS');
div2.appendChild(textDiv2);
const firstDiv = document.querySelector('.display');
container.insertBefore(div2, firstDiv);


// Editing attributes
const divAttribute = document.createElement('div');
divAttribute.setAttribute('id', 'theDiv');
container.appendChild(divAttribute);

// Working with classes
const divClass = document.createElement('div');
divClass.classList.add('new');
divClass.classList.remove('new');
divClass.classList.toggle('active'); // if div doesn't have class "active" then add it, or if it does, then remove it.
container.appendChild(divClass);


// Adding text content
const divText = document.createElement('div');
divText.textContent = "Hiii uwu";
container.appendChild(divText);
// It's not recommended to use .innerHTML (it creates security issues)


