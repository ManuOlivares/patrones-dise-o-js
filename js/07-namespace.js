// Namespace
// Ayuda a evitar la duplicidad de nombres en el scoope global de JS
//La idea es Crear un Objeto global alrededor de tu app 
// Add todas las funciones dentro en lugar de crear multiples funciones y objetos que se puedan acceder de forma global
// Recomendado para proyectos grandes 
const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizaa',
        precio: 2500
    },
    {
        platillo: 'Hamburguesa',
        precio: 5000
    },
    {
        platillo: 'Completo',
        precio: 2000
    }
];

restaurantApp.funciones = {
    mostrarMenu: () => {
        console.log(`Bienvenidos a nuestro menú`);

        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu Platillo: ${restaurantApp.platillos[id].platillo} se está preparando`)
    },
    agregarPlatillo : (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantApp.platillos.push(nuevo);
    }
}

restaurantApp.funciones.ordenar(2);
restaurantApp.funciones.agregarPlatillo('Taco', 3000);

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);

