// Import new Function
import myName from "./myName";
import { functionOne, functionTwo } from "./myModule";
import './style.css';
/* import Icon from './icon.png'; */
import BackG from './bg.png';
import Data from './data.xml';
import Notes from './data.csv';

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