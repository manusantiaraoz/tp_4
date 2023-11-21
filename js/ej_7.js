/*
 7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */
class Contacto{
    #nombre;
    #telefono;
    constructor(nombre, telefono){
        this.#nombre=nombre;
        this.#telefono=telefono;
    }

    get getNombre (){
        return this.#nombre;
    }
    get getTelefono (){
        return this.#telefono;
    }

    mostrarContacto(){
       let nombre= this.getNombre;
        let telefono=this.getTelefono;
        let cadena= `nombre: ${nombre}, telefono: ${telefono}`;
        return cadena;
    }

}
let agenda=[];
let cantidadContactos =parseInt(prompt("cuantos contactos te gustaria que tenga tu agenda?")) 


alert (agenda.length)

let aniadirContacto =()=>{
  if(agenda.length<= cantidadContactos){
     let nombre=prompt("ingresa el nombre del nuevo contacto");
     let telefono=prompt("ingresa el telefono del nuevo contacto");
    let contacto=new Contacto(nombre,telefono);
      agenda.push(contacto);
      alert("contacto agregado");
    }else{
      alert("agenda completa")
    }
}

let existeContacto=(nombre)=>{
   let dato = agenda.findIndex(contacto=> contacto.getNombre == nombre)>-1;
   if(dato){
       alert("el contacto existe");
    }else{
        alert("el contacto no existe");
    }
}

let listarContactos=()=>{
    console.log("listacon");
    let salida = "";
  agenda.forEach(element => {
    salida += element.mostrarContacto() + " \n";
  }) 
  
  alert(salida)
}

let buscarContacto =(n)=>{
    let dato = agenda.findIndex(contacto=> contacto.getNombre == n);
   if(dato !== null){

       alert(agenda[dato].getTelefono);
    }else{
        alert("el contacto no existe");
    }
}

let eliminarContacto=(n)=>{
    let dato = agenda.findIndex(contacto=> contacto.getNombre == n);
    if(dato !== null){
        let nom = agenda[dato].getNombre;
        console.log(nom);
        console.log(agenda.length)
        agenda.splice(dato,1)
        alert("el dato fue eliminado");
        console.log(agenda.length);
     }else{
         alert("el contacto no existe");
     }
};

let agendaLlena=()=>{
    if(agenda.length <= cantidadContactos){

      alert(`su agenda aun tiene lugares disponibles`)
    };
}

let huecosLibres=()=>{
  let espacios= cantidadContactos-agenda.length + 1;
  alert(`quedan ${espacios} disponibles en la agenda`)
}


let menu =(opcion)=>{
    switch(opcion) {
        case 1:
          aniadirContacto();
          break;
        case 2:
            let nombre = prompt("ingresa el nombre del contacto");
          existeContacto(nombre);
          break;
        case 3:
          listarContactos();
          break;
        case 4:
            let n = prompt("ingresa el nombre del contacto");
          buscarContacto(n);
          break;
        case 5:
            let n1 = prompt("ingresa el nombre del contacto a eliminar");
          eliminarContacto(n1);
          break;
        case 6:
          agendaLlena();
          break;
        case 7:
          huecosLibres();
          break;
      }
}
let opcion = 0;



do{
opcion = parseInt(prompt("Selecciona una opción:\n1. Añadir contacto\n2. Verificar si un contacto existe\n3. Listar todos los contactos\n4. Buscar un contacto por su nombre y mostrar su teléfono\n5. Eliminar un contacto\n6. Verificar si la agenda está llena\n7. Verificar cuántos contactos más puedes ingresar\n0.para salir "));
    menu(opcion);
}while(opcion !== 0)

