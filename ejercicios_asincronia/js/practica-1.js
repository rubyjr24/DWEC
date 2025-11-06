
const logger = new Logger();

const form = document.getElementById("form");
const productName = document.getElementById("product-name");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    procesarPago(productName.value)
        .then((product) => {

            logger.appendLine(`Pago procesado correctamente para ${product}`);

            enviarPedido()
                .then((address) => logger.appendLine(address))
                .catch((error) => logger.appendLine(error));
        })
        .catch(() => logger.appendLine('No se puede procesar el pago sin producto'));
});

function procesarPago(product){
    return new Promise((onResult, onError) => {
        setTimeout(() => {
            if (product !== undefined && product.trim() !== '') onResult(product);
            else onError();
        }, 1500);
    });
}

function enviarPedido(){
    return new Promise((onResult, onError) => {

        const address = document.getElementById('client-address').value;
        
        if (address === undefined || address.trim() === ''){
            onError('Dirección de envío no válida');
            return;
        }

        setTimeout(() => {

            if (Math.random() <= .2){
                onError('Error durante el envío, intente de nuevo');
                return;
            }

            onResult(`Pedido enviado correctamente a ${address}`);
        }, 2000);

    });
}