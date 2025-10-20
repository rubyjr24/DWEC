const words = [...new Set(askWords())];
const ul = document.createElement("ul");


words.sort().reverse().forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
})

document.body.appendChild(ul);