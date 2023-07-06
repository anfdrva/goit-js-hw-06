const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const li = ingredients.map((product) => {
  const liProduct = document.createElement("li");
  liProduct.classList.add("item");
  liProduct.textContent = product;
  return liProduct;
})

list.append(...li);

