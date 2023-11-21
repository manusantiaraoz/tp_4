/**
  9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
 
 */
  class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      alert("-ruido animalito-");
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      alert("Guau guau!");
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      alert("Miau miau!");
    }
  }
  
  let Perro = new Perro("Fido", 3);
  let Gato = new Gato("Mimi", 2);
  
  Perro.emitirSonido(); // Guau guau!
  Gato.emitirSonido(); // Miau miau!
  