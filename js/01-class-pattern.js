// Class Pattern
// Pertenece a alos patrones de diseño de Creación


class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Manu', 'manu@gmail.com');

console.log(persona);