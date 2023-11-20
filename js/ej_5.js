
/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
*/

class Persona{
#nombre
#edad
#DNI
#sexo
#peso
#altura
#anioNacimiento

constructor(nombre,edad,dni,sexo,peso,altura,anio){
this.#nombre=nombre;
this.#edad=edad;
this.#DNI=dni;
this.#sexo=sexo;
this.#peso=peso;
this.#altura=altura;
this.#anioNacimiento=anio;
}
mostrarGeneracion(){
    let decada =this.#anioNacimiento%100;
    if(decada > 29 && decada <= 48){

        document.write(`<p>${decada} tu generación es "Silent Generation" su rasgo caracteristico es: la austeridad</p>`);

    }else if(decada>48 && decada <= 68){
        document.write(`<p>${decada} tu generación es "Baby Boom" su rasgo caracteristico es: la ambición</p>`);

    }else if(decada>68 && decada <= 80){
        
        document.write(`<p>${decada} tu generación es "Generación X" su rasgo caracteristico es: la obsesión por el éxito</p>`);


    }else if(decada>80 && decada <= 93){

        document.write(`<p>${decada} tu generación es "Generación Y, millennials" su rasgo caracteristico es: la Frustración</p>`);
        
    }else if(decada>93){

        document.write(`<p>${decada} tu generación es "Generación Z" su rasgo caracteristico es: la Irreverencia</p>`);
        
    }else{
        document.write(`<p>aún no peseemos informacion de tu generación</p>`);
    }
}
esMayorDeEdad(){
    let anio = new Date(); 
    let edad =  anio.getFullYear() - this.#anioNacimiento ;
if(edad>=18){
    document.write(`<p>${this.#nombre} es mayor de edad</p>`);
}else{
    document.write(`<p>${this.#nombre} es menor de edad</p>`);
}
}
 
mostrarDatos(){
    document.write(`<p>nombre: ${this.#nombre}; edad: ${this.#edad}; dni: ${this.#DNI}; sexo: ${this.#sexo}; peso: ${this.#peso}; altura: ${this.#altura}; año: ${this.#anioNacimiento} </p>`);
}
generaDNI(){
    return this.#DNI = Math.floor(Math.random() * 90000000 );
}

}

let p1 = new Persona("santi", 28, 0, "M", 120, 1.95, 1995);

p1.mostrarDatos();
p1.mostrarGeneracion();
p1.esMayorDeEdad();
p1.generaDNI();
p1.mostrarDatos()
