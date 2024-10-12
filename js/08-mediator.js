// Mediator
// Es una forma de comunicar diferentes objetos 


function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null; // subasta 
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`)
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);

    }

}


function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
  
}
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta(){
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sale = this;
        }
    }

}



// Crear Objetos 
const manu = new Comprador('Manu');
const bubba = new Comprador('Bubba');
const vendedor = new Vendedor('Vendedor de Autos')
const subasta = new Subasta();


vendedor.oferta('Mustang 66', 300);

bubba.oferta(350, bubba);
manu.oferta(450, manu);
bubba.oferta(500, bubba);
manu.oferta(550, manu);

vendedor.vendido('Bubba');