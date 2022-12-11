// Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert ("Hello World");

// Method 3
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

// Methods using named functions
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// Method in "Click me Again3"
btn3.onclick = alertFunction;

// Method in "click me too2"
btn2.addEventListener('click', alertFunction);

//
btn.addEventListener('click', function (e) {
    console.log(e.target);
});
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

