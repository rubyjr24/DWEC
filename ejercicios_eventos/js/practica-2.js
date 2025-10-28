
const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("lavel-email");
const buttonSubmit = document.getElementById("button-submit");

const passwordInput = document.getElementById("password");
const passwordLabel = document.getElementById("lavel-password");

const checkEmail = () => {
    return emailInput.value.includes("@");
}

const checkPassword = () => {
    const passwordLength = passwordInput.value.length;
    return passwordLength >= 8 && passwordLength <= 10
}

emailInput.addEventListener('blur', (e) => {
    emailLabel.style.visibility = checkEmail() ? "hidden" : "visible";
    buttonSubmit.disabled = !checkEmail() || !checkPassword();
});

passwordInput.addEventListener('blur', (e) => {    
    passwordLabel.style.visibility = checkPassword() ? "hidden" : "visible";
    buttonSubmit.disabled = !checkEmail() || !checkPassword();
});

buttonSubmit.addEventListener("click", () => {


});