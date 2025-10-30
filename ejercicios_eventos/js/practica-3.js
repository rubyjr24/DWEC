const div = document.getElementById("capa1");
const target = document.getElementById("capa2");
var initalColor;

div.addEventListener("dragstart", (e) => {
    e.target.style.opacity = .5;
});

div.addEventListener("dragend", (e) => {
    e.target.style.opacity = 1;
});

target.addEventListener("dragover", (e) => {
    e.preventDefault();
});

target.addEventListener("dragenter", (e) => {
    initalColor = e.target.style.backgroundColor;
    e.target.style.backgroundColor = "red";
});

target.addEventListener("dragleave", (e) => {
    e.target.style.backgroundColor = initalColor;
});

target.addEventListener("drop", (e) => {
    e.preventDefault();
    div.remove();
    e.target.textContent = "Lo has logrado";
});
