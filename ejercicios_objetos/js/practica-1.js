class Rectangulo{

    constructor(width, height){
        this.width = width <= 0 ? 1 : width;
        this.height = height <= 0 ? 1 : height;
    }

    cambiarDimensiones(width, height){
        this.width = width <= 0 ? 1 : width;
        this.height = height <= 0 ? 1 : height;
    }

    calcularArea(){
        return this.width * this.height;
    }

    copia(){
        return {...this};
    }

    comparar(rect){
        
        const areaThis = this.calcularArea();
        const areaRect = rect.calcularArea();

        if (areaThis == areaRect) return "igual";
        else if (areaThis < areaRect) return "menor";
        else return "mayor";

    }

}

const rect1 = new Rectangulo(10, 20);
const rect2 = new Rectangulo(20, 10);
const rect3 = new Rectangulo(20, 20);
const rect4 = new Rectangulo(10, 10);

const logger = new Logger();

logger.appendObjectPrittier(rect1, "rect1");
logger.appendLine(`Area del rect1: ${rect1.calcularArea()}`);

logger.appendObjectPrittier(rect2, "rect2");
logger.appendLine(`Area del rect2: ${rect2.calcularArea()}`);

logger.appendObjectPrittier(rect3, "rect3");
logger.appendLine(`Area del rect3: ${rect3.calcularArea()}`);

logger.appendObjectPrittier(rect4, "rect4");
logger.appendLine(`Area del rect4: ${rect4.calcularArea()}`);

logger.appendLine(`Comparamos rect1 vs rect2: ${rect1.comparar(rect2)}`);
logger.appendLine(`Comparamos rect2 vs rect3: ${rect2.comparar(rect3)}`);
logger.appendLine(`Comparamos rect3 vs rect4: ${rect3.comparar(rect4)}`);
logger.appendLine(`Comparamos rect4 vs rect1: ${rect4.comparar(rect1)}`);

rect1.cambiarDimensiones(100,100);
logger.appendLine(`Cambiamos las dimensiones del rect1. Area: ${rect1.calcularArea()}`);
logger.appendObjectPrittier(rect1, "rect1");


const rect5 = rect1.copia();
logger.appendLine(`Copiamos rect1 en rect5. Area de rect5: ${rect1.calcularArea()}`);
logger.appendObjectPrittier(rect5, "rect5");