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
function productosxcategoria(listaproductos, categoria) {
    let productoss = [];
    let j = 0;
    for (let i = 0; i < listaproductos.length; i++) {
        if (listaproductos[i].categoria === categoria) {
            productoss[j] = listaproductos[i];
            j++; 
        }
    }
    return productoss;
}
console.log(productosxcategoria(productos, "tecnologia"));

//Crear una función que retorne los productos cuyo stock sea igual a 0.
function productossinvalor(productosss) {
    let producto_sinstock = [];
    let j = 0;
    for (let i = 0; i < productos.length; i++) {
        if (productosss[i].stock === 0) {
            productos_sinstock[i] = productosss[i];
            j++; 
        }
    }
console.log(productossinvalor(productos));

//Calcular el valor total del inventario usando la fórmula : precio * stock
function valor_inventario(productosss2) {
  productosss2 = [
    { nombre: "Mouse", categoria: "tecnologia", precio: 1000, stock: 10 },  { nombre: "Teclado", categoria: "tecnologia", precio: 2000, stock: 5 } ];
    let valor_inventario = 0;
  for (let i = 0; i < productosss2.length; i++) {
        valor_inventario+= (productosss[i].stock * productosss[i].precio)
        }
    return valor_inventario;
    }
console.log("valor inventario:", valor_inventario(productosss2));
    
//Crear una función que retorne el objeto correspondiente al producto más caro.
function producto_caro(productosss3) {

    }
