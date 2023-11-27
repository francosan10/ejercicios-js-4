// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

class Rectangulo {
  #alto;
  #ancho;
  constructor(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
  }

  get alto() {
    return this.#alto;
  }
  set alto(nuevoAlto) {
    this.#alto = nuevoAlto;
  }

   get ancho() {
    return this.#ancho;
   }
   set ancho(nuevoAncho) {
     this.#ancho = nuevoAncho;
   }

  // mostrar propiedades
  mostrarPropiedades() {
    document.write(
      `<p>Rectángulo - Alto: ${this.#alto}, Ancho: ${this.#ancho}</p>`
    );
  }

  // calcular perímetro
  perimetro() {
    document.write(`<p>El perímetro del rectángulo es: ${(2 * (this.#alto + this.#ancho))}</p><br>`);
  }

  // calcular área
  area() {
    document.write(`<p>El área del rectángulo es: ${(this.#alto * this.#ancho)}</p><br>`);
  }

}

let altoUsuario = parseInt(prompt('Ingrese alto'));
let anchoUsuario = parseInt(prompt('Ingrese ancho'));

let miRectangulo = new Rectangulo(altoUsuario, anchoUsuario);

miRectangulo.mostrarPropiedades();
miRectangulo.perimetro();
miRectangulo.area();