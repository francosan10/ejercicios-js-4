/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    //metodo
    imprimeDatos() {
        document.write(
        `<ul>
            <li>Codigo: ${this.codigo}</li>
            <li>Producto: ${this.nombre}</li>
            <li>Precio: $${this.precio}</li>
        </ul>`);
    }
}

let productos = [];

let producto1 = new Producto(01, 'fideos', 200);
let producto2 = new Producto(02, 'cereales', 700);
let producto3 = new Producto(03, 'leche', 500);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
console.log(productos)

for (let i = 0; i < productos.length; i++) {
    productos[i].imprimeDatos();
}