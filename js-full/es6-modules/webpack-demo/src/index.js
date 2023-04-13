// Import new Function
import myName from "./myName";
import { functionOne, functionTwo } from "./myModule";
import './style.css';
/* import Icon from './icon.png'; */
import BackG from './bg.png'; // Background
import Data from './data.xml'; // Data
import Notes from './data.csv'; // Data
import toml from './data.toml'; // Custom parser
import yaml from './data.yaml'; // Custom parser
import json from './data.json5'; // Custom parser

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

import _ from "lodash";
function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add('hello');

  const elementName = document.createElement("div");
  elementName.textContent = myName("Cody");
  elementName.classList.add('intro');

  // Add the image to our existing div.
  /* const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon); */
  const myBg = new Image();
  myBg.src = BackG;
  element.appendChild(myBg);

  console.log(Data);
  console.log(Notes);

  return { element, elementName };
}

document.body.appendChild(component().element);
document.body.appendChild(component().elementName);
