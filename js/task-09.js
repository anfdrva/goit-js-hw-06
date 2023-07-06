function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
}

selectors.button.addEventListener('click', handlerColor);

function handlerColor() {
  
  let colors = getRandomHexColor();
  console.log(colors);

  selectors.span.textContent = `${colors}`;

  selectors.body.style.backgroundColor = `${colors}`;

}



