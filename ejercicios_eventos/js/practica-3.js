const div = document.getElementById("capa1");
const target = document.getElementById("capa2");
var initalColor;

div.addEventListener("drag", (e) => {
    e.preventDefault();
    e.target.style.opacity = .5;
});

div.addEventListener("dragend", (e) => {
    e.preventDefault();
    e.target.style.opacity = 1;
});


target.addEventListener("dragenter", (e) => {
    e.preventDefault();
    initalColor = e.target.style.backgroundColor;
    e.target.style.backgroundColor = "red";

});

target.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = initalColor;
});

target.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Drop");
    div.remove();
    e.target.textContent = "Lo has logrado";
});
