/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
*/

class Auto{
    #color;
    #marca;
    #modelo;
    constructor(color,marca,modelo){
        this.#color=color;
        this.#marca=marca;
        this.#modelo=modelo;
    }

    //getter
    get getColor(){return this.#color};
    get getMarca(){return this.#marca};
    get getModelo(){return this.#modelo};
   //setter
    set setColor(color){this.#color=color};
    set setMarca(marca){this.#marca=marca};
    set setModelo(modelo){this.#modelo=modelo;};
    
    //metod
    encender (){
        console.log("vehiculo encendido")
    }
    apagar (){
        console.log("vehiculo apagado")
    }
}


let ka = new Auto("rojo","ford","ka");
document.write(`<p>${ka.getColor}</p>`);
document.write(`<p>${ka.getMarca}</p>`);
document.write(`<p>${ka.getModelo}</p>`);
ka.encender();
ka.apagar();