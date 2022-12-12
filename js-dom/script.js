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
const textDiv = document.createTextNode('This was created first using JavaScript');
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

// Adding styles 
divText.style.color = 'blue';
divText.style.cssText = 'color: blue; background: white;';
divText.setAttribute('style', 'color: blue; background: white;');

// Exercise
const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';
container.appendChild(p);

const h3= document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.cssText = 'color: blue;';
container.appendChild(h3);

const divParent = document.createElement('div');
divParent.setAttribute('style', 'border: 1px solid black; background-color: pink');
/* divParent.textContent = "hi"; // Test only */
/* container.appendChild(divParent); */

const h1Div = document.createElement('h1');
h1Div.textContent = "I'm in a div";
divParent.appendChild(h1Div);

pDiv = document.createElement('p');
pDiv.textContent = "ME TOO!";
divParent.appendChild(pDiv);

container.appendChild(divParent); // Hint 3rd exercise


const divDinamic = document.createElement('div');
divDinamic.textContent = 'Change my color';
container.appendChild(divDinamic);

divDinamic.addEventListener('click', changeDivColor);

function changeDivColor () {
    divDinamic.classList.toggle('change');
}