
const selectors = {
    input: document.querySelector('#name-input'),
    call: document.querySelector('#name-output'),
}

selectors.input.addEventListener('change', handlerName);

function handlerName(event) {
    selectors.call.textContent = event.currentTarget.value;

    if (selectors.call.textContent == "")
        selectors.call.textContent = "Anonymous"
};