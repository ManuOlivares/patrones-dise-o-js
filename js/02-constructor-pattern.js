// Constructor Pattern    es de creación

// Sirve de clase base para que las demas clases hereden sobre esta
// En otros lenguajes de programación  se conocen como clases Abstractas no se pueden instanciar (no se pueden extender y heredar)
// Js no tiene Soporte para clases Abstractar asi q se debe definir la clase Padre y Heredar sobre ella
class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

// Heredamos los atributos de la clase padre (nombre y email) y agregar un nuevo atributo(empresa)
class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Manu', 'manu@gmail.com', 'Tesla');
console.log(cliente);