// Singleton     patron de creación
// Previene a que se creen multip`les instancias del mismo objeto 
// O que la clase no sea instanciada mas de una vez

// No permite crear multiples Instancias de una misma clase 
// Siempre retorna el objeto instanciado

let instancia = null;


class Persona {
    constructor(nombre, email){

        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('manu', 'manu@gmail.com');
console.log(persona);

// Esta instancioa no se podrá ejecutar
const persona2 = new Persona('bubba', 'bubba@gmail.com');
console.log(persona2);