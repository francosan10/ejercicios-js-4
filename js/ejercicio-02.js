/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

let cuenta = {
    titular: 'Alex',
    saldo: 0,
    // metodos
    ingresar: function(cantidad) {
    
        if(cantidad > 0) {
            this.saldo += parseInt(cantidad);
        } else {
            alert('El monto ingresado debe ser mayor que $0');
        }
    },
    extraer: function(cantidad) {
        
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= parseInt(cantidad);
        } else {
            alert('No tines saldo disponible');
        }
    },
    informar: function() {
        alert(`Titular: ${this.titular}, Saldo actual: ${this.saldo} pesos.`);
    }
}
cuenta.informar();

cuenta.ingresar(prompt('Cuanto dinero desea ingresar?'));

cuenta.informar();

cuenta.extraer(prompt('Cuanto dinero dessea extraer?'));

cuenta.informar();
