/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/


class Rectangulos{
    #alto;
    #ancho;
    constructor(alto,ancho){
        this.#alto=alto;
        this.#ancho=ancho;
        
    }

    //getter
    get getAlto(){return this.#alto};
    get getAncho(){return this.#ancho};
    //setter
    set setAlto(alto){this.#alto=alto};
    set setAncho(ancho){this.#ancho=ancho};

   
    //metod

    modificar(alto, ancho){
        this.#alto=alto;
        this.#ancho=ancho;
    }

    perimetro(){
        let p = 2*this.#alto+2*this.#ancho;
        return p;
    }
    area(){
        let a = this.#alto*this.#ancho;
        return a;
    }

}

let rectangulo = new Rectangulos (5,10);

console.log(rectangulo.getAlto);
console.log(rectangulo.getAncho);

rectangulo.modificar(2,5);

console.log(rectangulo.getAlto);
console.log(rectangulo.getAncho);

console.log("perimetro  "+rectangulo.perimetro());
console.log("area  "+rectangulo.area());