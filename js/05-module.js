// Modukle Pattern

// Sintaxis Antigua, Antes de ES6 la actual es con export default
const modulo1 = (function() {
    const nombre = 'Manu';

    function hola(){
        console.log('hola')
    }

    return {
        nombre,
        hola
    }
})();



// La version actual desde ES6

const mostrarCliente = nombre => {
    console.log(nombre);
}

export default mostrarCliente;