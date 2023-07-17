import "./style.css";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passConfirmation = document.querySelector("#pass-confirmation");

/* Validation */
email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Type a correct email");
  } else {
    email.setCustomValidity("");
  }
});

function checkZIP() {
    const constraints = {
      ch: [
        "^(CH-)?\\d{4}$",
        "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
      ],
      fr: [
        "^(F-)?\\d{5}$",
        "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
      ],
      de: [
        "^(D-)?\\d{5}$",
        "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
      ],
      nl: [
        "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
        "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
      ],
    };

    // Get the values
    const country = document.querySelector("#country").value;
    const zip = document.querySelector("#zip");

    // Build the constraint checker
    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);
  
    // Check it!
    if (constraint.test(zip.value)) {
      // The ZIP follows the constraint, we use the ConstraintAPI to tell it
      zip.setCustomValidity("");
    } else {
      // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
      // give a message about the format required for this country
      zip.setCustomValidity(constraints[country][1]);
    }
}

window.onload = () => {
    document.getElementById("country").onchange = checkZIP;
    document.getElementById("zip").oninput = checkZIP;
};