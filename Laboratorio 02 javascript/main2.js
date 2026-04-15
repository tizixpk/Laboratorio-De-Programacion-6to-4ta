// Vector por defecto:
const productos = [
    { nombre: "Mouse", categoria: "tecnologia", precio: 1000, stock: 10 },
    { nombre: "Teclado", categoria: "tecnologia", precio: 2000, stock: 5 },
    { nombre: "Monitor", categoria: "tecnologia", precio: 50000, stock: 0 },
    { nombre: "Silla", categoria: "hogar", precio: 15000, stock: 2 }
];


//Crear una función que reciba un array de productos y devuelva un nuevo array con solo nombres.
function nombresProductos(lista_de_productos_ejemplo) {
    let nombres = []; 
    for (let i = 0; i < lista_de_productos_ejemplo.length; i++) {
        nombres[i] = lista_de_productos_ejemplo[i].nombre;
    }
    return nombres;
}
console.log(nombresProductos(productos));

//Crear una función que retorne los productos de una categoría dada.
function obtenerProductosPorCategoria(listaDeProductos, categoria) {
    let productoss = [];
    let j = 0;
    for (let i = 0; i < listaDeProductos.length; i++) {
        if (listaDeProductos[i].categoria === categoria) {
            productoss[j] = listaDeProductos[i];
            j++; 
        }
    }
    return productoss;
}
console.log(obtenerProductosPorCategoria(productos, "tecnologia"));
