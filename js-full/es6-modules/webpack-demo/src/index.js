// Import new Function
import myName from "./myName";
import { functionOne, functionTwo } from "./myModule";

import _ from "lodash";
function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  const elementName = document.createElement("div");
  elementName.textContent = myName("Cody");

  return { element, elementName };
}

document.body.appendChild(component().element);
document.body.appendChild(component().elementName);
