// Vector por defecto:
const productos = [
    { nombre: "Mouse", categoria: "tecnologia", precio: 1000, stock: 10 },
    { nombre: "Teclado", categoria: "tecnologia", precio: 2000, stock: 5 },
    { nombre: "Monitor", categoria: "tecnologia", precio: 50000, stock: 0 },
    { nombre: "Silla", categoria: "hogar", precio: 15000, stock: 2 }
];

// Crear una función que reciba un array de productos y devuelva un nuevo array con solo nombres.
function nombresproductos(lista) {
    let nombres = []; 
    for (let i = 0; i < lista.length; i++) {
        nombres[i] = lista[i].nombre;
    }
    return nombres;
}
console.log(nombresproductos(productos));

//Crear una función que retorne los productos de una categoría dada.
function productosxcategoria(lista, categoria) {
    let resultado = [];
    let j = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria === categoria) {
            resultado[j] = lista[i];
            j++;
        }
    }
    return resultado;
}
console.log(productosxcategoria(productos, "tecnologia"));

//Crear una función que retorne los productos cuyo stock sea igual a 0.
function productossinvalor(lista) {
    let resultado = [];
    let j = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].stock === 0) {
            resultado[j] = lista[i];
            j++;
        }
    }
    return resultado;
}
console.log(productossinvalor(productos));

// Calcular el valor total del inventario usando la fórmula : precio * stock
function valor_inventario(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].stock * lista[i].precio;
    }
    return total;
}
console.log("valor inventario:", valor_inventario(productos));

//Crear una función que retorne el objeto correspondiente al producto más caro.
function producto_caro(lista) {
    if (lista.length === 0) return null;

    let masCaro = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].precio > masCaro.precio) {
            masCaro = lista[i];
        }
    }
    return masCaro;
}
console.log("producto mas caro:", producto_caro(productos));
