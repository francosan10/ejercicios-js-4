// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generarDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  // metodos
  mostrarGeneracion() {
    let generacion, rasgoCaracteristico;
    switch (true) {
        case this.nacimiento >= 1930 && this.nacimiento <= 1948:
          generacion = 'Silent';
          rasgoCaracteristico = 'Austeridad';
          break;
        case this.nacimiento >= 1949 && this.nacimiento <= 1968:
          generacion = 'Baby Boom';
          rasgoCaracteristico = 'Ambición';
          break;
        case this.nacimiento >= 1969 && this.nacimiento <= 1980:
          generacion = 'X';
          rasgoCaracteristico = 'Obseción por el éxito';
          break;
        case this.nacimiento >= 1981 && this.nacimiento <= 1993:
          generacion = 'Y';
          rasgoCaracteristico = 'Frustración';
          break;
        case this.nacimiento >= 1994 && this.nacimiento <= 2010:
          generacion = 'Z';
          rasgoCaracteristico = 'Irreverencia';
          break;
        default:
          generacion = 'Alpha';
          rasgoCaracteristico = 'Nativos digitales';
          break;
      }
  
      console.log(
        `${this.nombre} pertenece a la generación ${generacion}. Rasgo característico: ${rasgoCaracteristico}.`
      );
      document.write(`<p>
        ${this.nombre} pertenece a la Generación ${generacion}. Rasgo característico: ${rasgoCaracteristico}.
     </p>`);
    
  }

  esMayorDeEdad() {
    let mensaje =
      this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    document.write(mensaje);
    console.log(mensaje);
  }

  mostrarDatos() {
    document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Edad: ${this.edad} años</li>
    <li>DNI: ${this.dni}</li>
    <li>Sexo: ${this.sexo}</li>
    <li>Peso: ${this.peso} kg</li>
    <li>Altura: ${this.altura} m</li>
    <li>Año de Nacimiento: ${this.nacimiento}</li>
    </ul>`);
  }

  generarDNI() {
    return parseInt(Math.random() * 99999999);
  }
}

const persona1 = new Persona(
    'Juan Perez',
    30,
    this.dni,
    'M',
    80,
    1.75,
    1993,
  );
  
  persona1.mostrarGeneracion();
  persona1.esMayorDeEdad();
  persona1.mostrarDatos();
