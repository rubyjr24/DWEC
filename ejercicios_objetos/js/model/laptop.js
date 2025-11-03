

class Laptop extends Computer{

    constructor(marca, modelo, autonomia = 4, gbRam = 4, gbDisco = 256, pulgadasPantalla = 12){
        super(marca, modelo, gbRam, gbDisco, pulgadasPantalla);
        this.autonomia = autonomia;
    }

    toString(){
        // No llamo a super.toString() porque no me conviene
        return `Laptop{marca=${this.marca}, modelo=${this.modelo}, autonomia=${this.autonomia}, gbRam=${this.gbRam}, gbDisco=${this.gbDisco}, pulgadasPantalla=${this.pulgadasPantalla}}`;
    }

}