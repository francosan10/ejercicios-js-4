// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    get verIsbn() {
        return this.isbn;
    }
    set cambiarIsbn(nuevoIsbn) {
        this.isbn = nuevoIsbn;
    }

    get verTitulo() {
        return this.titulo;
    }
    set cambiarTitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }

    get verAutor() {
        return this.autor;
    }
    set cambiarAutor(nuevoAutor) {
        this.autor = nuevoAutor;
    }

    get verNumPaginas() {
        return this.numPaginas;
    }
    set cambiarNumPaginas(nuevoNumPaginas) {
        this.numPaginas = nuevoNumPaginas;
    }
    // metodo
    mostrarLibro() {
        document.write(`<p>El libro ${this.verTitulo} con ISBN ${this.verIsbn} creado por el autor ${this.verAutor} tiene ${this.verNumPaginas} páginas</p>`);
    }
}

const libro1 = new Libro (6077476714, 'Hábitos atómicos', 'James Clear', 328);
const libro2 = new Libro (6079495058, 'La semana laboral de 4 horas', 'Tim Ferriss', 480);

libro1.mostrarLibro();
libro2.mostrarLibro();

    if (libro1.verNumPaginas > libro2.verNumPaginas) {
        document.write(`<p>El libro ${libro1.verTitulo} tiene mas páginas que ${libro2.verTitulo}`);
    } else {
        document.write(`<p>El libro ${libro2.verTitulo} tiene mas páginas que ${libro1.verTitulo}`);
    }
