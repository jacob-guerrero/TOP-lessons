import './style.css';

const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const passConfirmation = document.querySelector("#pass-confirmation");

/* Validation */
email.addEventListener("input", (e) => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("Type a correct email");
    } else {
        email.setCustomValidity("");
    }
})