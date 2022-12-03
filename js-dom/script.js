const container = document.querySelector('#container');
console.dir(container.firstElementChild);

const controls = document.querySelector('.controls');
console.dir(controls.previousElementSibling);

const containerLastElement = document.querySelector('container');
console.dir(container.lastElementChild);

const allSelectors = document.querySelectorAll('container');
console.dir(container); // Contains a nodelist

const div = document.createElement('div');
const textDiv =document.createTextNode('This was created using JavaScript');
div.appendChild(textDiv);
container.appendChild(div);

const div2 = document.createElement('div');
const textDiv2 =document.createTextNode('This was created using JavaScript2');
div2.appendChild(textDiv2);
const firstDiv = document.querySelector('.display')
container.insertBefore(div2, firstDiv)

