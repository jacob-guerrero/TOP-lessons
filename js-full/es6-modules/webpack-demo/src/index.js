// Import new Function
import myName from "./myName";
import { functionOne, functionTwo } from "./myModule";
import _ from "lodash";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  const btn = document.createElement('button');

  const elementName = document.createElement("div");
  elementName.textContent = myName("Cody");

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return { element, elementName };
}

document.body.appendChild(component().element);
document.body.appendChild(component().elementName);
