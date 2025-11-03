
class Computer{
    
    constructor(marca, modelo, gbRam = 4, gbDisco = 512, pulgadasPantalla = 17){
        this.marca = marca;
        this.modelo = modelo;
        this.gbRam = gbRam;
        this.gbDisco = gbDisco;
        this.pulgadasPantalla = pulgadasPantalla;
    }

    toString(){
        return `Computer{marca=${this.marca}, modelo=${this.modelo}, gbRam=${this.gbRam}, gbDisco=${this.gbDisco}, pulgadasPantalla=${this.pulgadasPantalla}}`;
    }

}