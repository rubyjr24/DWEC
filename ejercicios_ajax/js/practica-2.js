
const form = document.getElementById('form');
const input = document.getElementById('input-id');
const logger = new Logger();
var statusCode;

// El @param sirve para que dar más información del parámetro
// Una de las funciones es indicar al editor que tipo es el parámetro
// Y con ello poder autocompletar
/**
 * @param {RequestInfo | URL} input
 * @param {RequestInit} options
 */
function fetchPromise(input, options){
    return new Promise((resolve, reject) => {
        fetch(input, options)
            .then(response => {
                statusCode = response.status;
                if (!response.ok) throw new Error(response.status);
                return response.json();   
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
}

function logStatus(){
    logger.appendLine(`STATUS`);
    logger.appendLine(` ${statusCode}`);
}

function loadProduct(id){
    return fetchPromise(`https://dummyjson.com/products/${id}`);
}

function sendProduct(product){
    return fetchPromise(`https://httpbin.org/post`, {
        method: 'POST',
        body: JSON.stringify(product)
    });
}

function onLoadProduct(product){

    logger.appendLine('Resultado GET')
    logger.appendLine(`Id: ${product.id}`);
    logger.appendLine(`Título: ${product.title}`);
    logger.appendLine(`Precio: ${product.price}`);

    const productParsed = {
        id: product.id,
        title: product.title,
        price: product.price
    }

    sendProduct(productParsed)
        .then(data => {
            logger.appendLine('Resultado POST')
            logger.appendLine(`Title: ${data.json.title}`)
        })
        .catch(error => console.error(error))
        .finally(() => {
            logStatus();
        });

}

function onSubmit(e){
    e.preventDefault();

    logger.clear();

    loadProduct(input.value)
        .then(product => {
            onLoadProduct(product)
        })
        .catch(error => {
            logStatus();
        })
        
}


form.addEventListener('submit', onSubmit);