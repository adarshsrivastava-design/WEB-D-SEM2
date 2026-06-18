const heading = document.querySelector('h2');
const input = document.querySelector('input');
const body = document.querySelector('body');
function changeheading() {
    if (input.value !== "") {
        heading.innerText = input.value;
        input.value = ""; 
    }
}
function changebackground() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor; 
}
let currentSize = 24; 
function Increasefontsize() {
    currentSize += 5;
    heading.style.fontSize = currentSize + "px";
}

function paragraph() {
    if (heading.style.display === "none") {
        heading.style.display = "block";
    } else {
        heading.style.display = "none";
    }
}
function reset() {
    heading.innerText = "Welcome to javascript";
    heading.style.fontSize = "24px";
    heading.style.display = "block";
    container.style.backgroundColor = "white";
    input.value = "";
    currentSize = 24;
}