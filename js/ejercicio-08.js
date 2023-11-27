// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    #nombre;
    #edad;
    #profesion;
    constructor(nombre, edad, profesion) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get edad() {
        return this.#edad;
    }
    set nombre(nuevaEdad) {
        this.#edad = nuevaEdad;
    }

    get profesion() {
        return this.#profesion;
    }
    set profesion(nuevaProfesion) {
        this.#profesion = nuevaProfesion;
    }
    // metodos
    saludar() {
        document.write(`<p>¡Hola! Soy ${this.#nombre}, tengo ${this.#edad} años y soy ${this.#profesion}.</p><br>`);
    }
    despedirse() {
        document.write(`<p>Me despido como ${this.#profesion}. Hasta luego.</p><br>`);
    }
}

const persona1 = new Persona('Juan', 28, 'Ingeniero');
let persona2 = new Persona("Pedro", 25, "Médico");

persona1.saludar();
persona1.despedirse();
persona2.saludar();
persona2.despedirse();