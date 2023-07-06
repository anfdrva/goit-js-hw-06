

const counter = document.querySelector("#counter");
const minus = counter.firstElementChild;
const plus = counter.lastElementChild;
const number = plus.previousElementSibling;

let counterValue = 0;


minus.addEventListener('click', handlerRemove);
plus.addEventListener('click', handlerAdd);

function handlerRemove() {
    counterValue -= 1;
    number.textContent = `${counterValue}`;
    
}

function handlerAdd() {
    counterValue += 1;
    number.textContent = `${counterValue}`;
}

// const selectors = {
//     counter: document.querySelector("#counter"),
//     plus: document.querySelector("decrement"),
//     minus: document.querySelector("increment"),
// }



