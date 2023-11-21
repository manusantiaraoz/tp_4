/**
 * 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

 */

class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      const avion = this.listaAviones.find((avion) => avion.nombre === nombreAvion);
      if (avion) {
        return avion;
      } else {
        return "No se encontró el avión.";
      }
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        return `El pasajero ${pasajero} abordó el avión ${this.nombre}.`;
      } else {
        return `El avión ${this.nombre} está lleno.`;
      }
    }
  }
  
  const aeropuerto = new Aeropuerto("Aeropuerto Internacional");
  
  const avion1 = new Avion("Avión 1", 100, "Buenos Aires");
  const avion2 = new Avion("Avión 2", 150, "Córdoba");
  const avion3 = new Avion("Avión 3", 200, "Mendoza");
  
  aeropuerto.agregarAvion(avion1);
  aeropuerto.agregarAvion(avion2);
  aeropuerto.agregarAvion(avion3);
  
  console.log(aeropuerto.buscarAvion("Avión 1").abordar("Juan"));
  