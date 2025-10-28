

const result = document.getElementById("result");
const select = document.getElementById("select");
const reset = document.getElementById("reset");

select.addEventListener("change", (e) => {

    switch(e.target.value){

        case "saludar":
            result.innerHTML = `<div>Hola, ¿como estás?</div>`;
            break;
        
        case "crear-caja":
            result.innerHTML = `<div class="caja">nueva caja</div>`;
            break;
        
        case "generar-numero-aleatorio":
            result.innerHTML = `<div>${Math.floor(Math.random() * 100) + 1}</div>`;
            break;
    }

});

reset.addEventListener("click", (e) => {
    result.innerHTML = "";
    select.value = "blank";
}); 