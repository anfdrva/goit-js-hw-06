const list = document.querySelector("#categories");
let num = [...list.children].length;
console.log(`Number of categories: ${num}`);

[...list.children].forEach(item => {
    let title = item.firstElementChild.textContent;
    let ch = [...item.lastElementChild.children].length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${ch}`);
});

