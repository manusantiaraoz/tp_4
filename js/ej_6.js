/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
  #ISBM;
  #titulo;
  #autor;
  #nPaginas;

  constructor(isbm, titulo, autor, nPaginas) {
    this.#ISBM = isbm;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#nPaginas = nPaginas;
  }

  get getIsbm() {
    return this.#ISBM;
  }
  get getTitulo() {
    return this.#titulo;
  }
  get getAutor() {
    return this.#autor;
  }
  get getNpaginas() {
    return this.#nPaginas;
  }

  set setIsbm(isbm) {
    this.#ISBM = isbm;
  }
  set setTitulo(titulo) {
    this.#titulo = titulo;
  }
  set setAutor(autor) {
    this.#autor = autor;
  }
  set setNpaginas(pagina) {
    this.#nPaginas = pagina;
  }

  mostrarLibro(){
    document.write(`<p>El libro "${this.getTitulo}" con ISBN ${this.getIsbm} creado por el autor ${this.getAutor} tiene páginas ${this.getNpaginas}</p>`)
  }
}

function masPagina(l1,l2){
    let page = l1.getNpaginas;
    let page2 = l2.getNpaginas;
    if(page>page2){
        document.write(`<p>${l1.getTitulo} tiene mas paginas</p> `);
    }else{
        document.write(`<p>${l2.getTitulo} tiene mas paginas </p>`);
    }
}

let l1 = new Libro(253356,"Las aventuras de Pinocho","Carlo Collodi",195);
let l2 = new Libro(223566,"Moby Dick","Herman Melville",823);

l1.mostrarLibro();
l2.mostrarLibro();

masPagina(l1,l2);