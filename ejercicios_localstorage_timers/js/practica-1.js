
const nameUser = localStorage.getItem("name");
const form = document.getElementById("form");

if (nameUser !== null){
    form.style.display = "none";
    const logger = new Logger();
    logger.appendLine(`¡Bienvenido ${nameUser}!`);
}else{

    const inputName = document.getElementById("name");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = inputName.value;
        localStorage.setItem("name", name);
        location.reload();

    });
}