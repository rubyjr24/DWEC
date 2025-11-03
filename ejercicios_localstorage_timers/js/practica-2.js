

const priceSpan = document.getElementById("price");
var price = 100;

priceSpan.textContent = `${price}`;

const interval = setInterval(() => {

    price += getNum();
    priceSpan.textContent = `${price}`;

    if (price >= 120){
        priceSpan.parentElement.textContent = "¡Máximo alcanzado!";
        clearInterval(interval);

    }else if (price < 80){
        priceSpan.parentElement.textContent = "¡Mínimo alcanzado!";
        clearInterval(interval);
    }


}, 1000);

function getNum(){
    return (Math.floor(Math.random() * 10) + 1) - 5;
}