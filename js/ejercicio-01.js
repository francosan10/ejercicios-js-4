// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    marca: 'fiat',
    modelo: 'punto',
    color: 'blanco',
    anio: 2016,
    // metodos
    encendido: function() {
        document.write('<p>Auto encendido</p><br>');
    },
    apagado: function() {
        document.write('<p>Auto apagado</p><br>');
    }
}
auto.encendido();
auto.apagado();
