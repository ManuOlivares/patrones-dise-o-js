// Mixin Pattern
// Se puede crear un objeto con multitiples funciones tener alguna clase y si tengo otra,
// puedo añadirle funciones de este objeto para que se combinen

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }

}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`)
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

// Añadir funcionesPersona a la clase de Persona
// Copiar lo que hay en el prototype de Persona
Object.assign(Persona.prototype, funcionesPersona);

Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Manu', 'correo@correo.com');



console.log(cliente);
cliente.mostrarInformacion()
cliente.mostrarNombre()

const cliente2 = new Persona('cliente', 'cliente@correo.com');

console.log(cliente2);
cliente2.mostrarInformacion()
cliente2.mostrarNombre()