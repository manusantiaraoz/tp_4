/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto{
    #codigo;
    #nombre;
    #precio;
    constructor(codigo,nombre,precio){
        this.#codigo=codigo;
        this.#nombre=nombre;
        this.#precio=precio
    }

    get getCodigo(){return this.#codigo};
    get getNombre(){return this.#nombre};
    get getPrecio(){return this.#precio};

    mostrarinfo(){
        return document.write(`<P>codigo: ${this.getCodigo}, nombre: ${this.getNombre}, precio: ${this.getPrecio}</P>`);
        
    }
}

let productos = [];
    
    let p1= new Producto(2203,"teclado",30);
    let p2= new Producto(2211,"mause",20);
    let p3= new Producto(2233,"monitor",100);

    productos[0]=p1;
    productos[1]=p2;
    productos[2]=p3;

    productos.forEach(element => {
        element.mostrarinfo();
    });