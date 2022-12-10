// Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert ("Hello World");

// Method 3
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

