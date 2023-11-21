/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona{
    #nombre
    #edad
    #profesion
    constructor(nombre, edad, profesion){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#profesion=profesion;
    }

    saludar(){
        alert(`hola ${this.#nombre} :D`)
    }
    despedirse(){
        alert(`chau ${this.#nombre} :D`)
    }
}
let p1 = new Persona("pepe",25,"programador"); 
let p2 = new Persona("papa",22,"diseñador"); 

p1.saludar();
p1.despedirse();
p2.saludar();
p2.despedirse();