//===============================================================
// Consigna: Sistema de Gestión de Productos
// Alumno/a: Tiziano Pirez
// Fecha: 03/06/2026
// Descripción: menu con sub menu
//===============================================================

// array inicial 
const productos = [
    { nombre: "Mouse", categoria: "tecnologia", precio: 1000, stock: 10 },
    { nombre: "Teclado", categoria: "tecnologia", precio: 2000, stock: 5 },
    { nombre: "Monitor", categoria: "tecnologia", precio: 50000, stock: 0 },
    { nombre: "Silla", categoria: "hogar", precio: 15000, stock: 2 }
];

// variable  q tendra la versión actualizada de los productos
let productosActuales = productos;
// variable para finalizar el programa
let salirPrograma = false;

/*
agrega un nuevo producto al array.
Retorno: devuelve un nuevo array con el producto agregado.
*/
function agregarProducto(temp) {
    let nombreProducto = prompt("Nombre del producto");
    let categoriaProducto = prompt("Categoría");
    let precioProducto = Number(prompt("Precio"));
    let stockProducto = Number(prompt("Stock"));
    let nuevoArray = [];
    temp.forEach(function (producto) {
        nuevoArray[nuevoArray.length] = {
            nombre: producto.nombre,
            categoria: producto.categoria,
            precio: producto.precio,
            stock: producto.stock
        };
    });
    nuevoArray[nuevoArray.length] = {};
    nuevoArray[nuevoArray.length - 1].nombre = nombreProducto;
    nuevoArray[nuevoArray.length - 1].categoria = categoriaProducto;
    nuevoArray[nuevoArray.length - 1].precio = precioProducto;
    nuevoArray[nuevoArray.length - 1].stock = stockProducto;
    console.log("producto agregado");
    return nuevoArray;
}

/*
elimina un producto según el índice ingresado.
Retorno: devuelve un nuevo array sin el producto eliminado.
*/
function eliminarProducto(temp) {
    let indice = Number(
        prompt("Ingrese el índice del producto a eliminar")
    );
    let nuevoArray = [];
    temp.forEach(function (producto, posicion) {
        if (posicion !== indice) {
            nuevoArray[nuevoArray.length] = producto;
        }
    });
    console.log("pproducto eliminado");
    return nuevoArray;
}

/*
modifica un producto según el indice  puesto.
retorno: devuelve el nuevo array actualizado.
*/
function modificarProducto(temp) {
    let indice = Number(
        prompt("Ingrese el índice del producto a modificar")
    );
    let nuevoArray = [];
    temp.forEach(function (producto, posicion) {
        if (posicion === indice) {
            console.table([producto]);
            nuevoArray[nuevoArray.length] = {
                nombre: prompt("Nuevo nombre"),
                categoria: prompt("Nueva categoría"),
                precio: Number(prompt("Nuevo precio")),
                stock: Number(prompt("Nuevo stock"))
            };
        } else {
            nuevoArray[nuevoArray.length] = {
                nombre: producto.nombre,
                categoria: producto.categoria,
                precio: producto.precio,
                stock: producto.stock
            };
        }
    });
    console.log("Producto modificado");
    return nuevoArray;
}

/*
muestra todos los productos con stock igual a cero.
no retorna valor.
*/
function mostrarSinStock(temp) {
    let sinStock = [];
    temp.forEach(function (producto) {
        if (producto.stock === 0) {
            sinStock[sinStock.length] = producto;
        }
    });
    console.table(sinStock);
}

/*
busca productos según la categoría ingresada.
retorno: no retorna valor.
*/
function buscarPorCategoria(temp) {
    let categoriaBuscada = prompt(
        "ingrese una categoría"
    );
    let encontrados = [];
    temp.forEach(function (producto) {
        if (producto.categoria === categoriaBuscada) {
            encontrados[encontrados.length] = producto;
        }
    });
    console.table(encontrados);
}

/*
genera un nuevo array con el precio actualizado
de un producto específico.
retorno: devuelve un nuevo array.
*/
function aplicarAumento(temp) {
    let nombreBuscado = prompt(
        "Ingrese el nombre del producto"
    );
    let porcentaje = Number(
        prompt("Ingrese porcentaje de aumento")
    );
    let nuevoArray = [];
    temp.forEach(function (producto) {
        if (producto.nombre === nombreBuscado) {
            nuevoArray[nuevoArray.length] = {
                nombre: producto.nombre,
                categoria: producto.categoria,
                precio:
                producto.precio + (producto.precio * porcentaje / 100),
                stock: producto.stock
            };

        } else {
            nuevoArray[nuevoArray.length] = {
                nombre: producto.nombre,
                categoria: producto.categoria,
                precio: producto.precio,
                stock: producto.stock
            };
        }
    });
    console.log("Aumento aplicado");
    return nuevoArray;
}

/*
muestra el producto con el mayor precio
retorno: no retorna  nada
*/
function productoMasCaro(temp) {
    let masCaro = temp[0];
    temp.forEach(function (producto) {
        if (producto.precio > masCaro.precio) {
            masCaro = producto;
        }
    });
    console.table([masCaro]);
}

/*
muestra todos los productos
retorno: no retorna valor
*/
function mostrarProductos(temp) {
    console.table(temp);
}

/*
muestra el submenu con mas opciones
retorno: devuelve el array actualizado.
*/
function menuExtra(temp) {
    let opcionExtra;
    do {
        opcionExtra = prompt(
            "SUBMENUU\n\n" +
            "1-mostrar productos sin stock\n" +
            "2-buscar productos x categoría\n" +
            "3-aplicar aumento de precio x nombre\n" +
            "4-mostrar producto mas caro\n" +
            "5-volver al menu anterior"
        );

        switch (opcionExtra) {
            case "1":
                mostrarSinStock(temp);
                salirPrograma = true;
                break;

            case "2":
                buscarPorCategoria(temp);
                salirPrograma = true;
                break;

            case "3":
                temp = aplicarAumento(temp);
                break;
            case "4":
                productoMasCaro(temp);
                break;

            case "5":
                console.log("Volviendo al menú principal");
                break;

            default:
                console.log("Opción inválida");
        }

    } while (opcionExtra !== "5" && !salirPrograma);
    return temp;
}

// MENU PRINCIPAL
let opcion;
do {
    opcion = prompt(
        "MENU PRINCIPAL\n\n" +
        "1-agregar producto\n" +
        "2-eliminar producto\n" +
        "3-modificar producto\n" +
        "4-mas opciones\n" +
        "5-mostrar productos y salir"
    );

    switch (opcion) {
        case "1":
            productosActuales = agregarProducto(productosActuales);
            break;

        case "2":
            productosActuales = eliminarProducto(productosActuales);
            break;

        case "3":
            productosActuales = modificarProducto(productosActuales);
            break;

        case "4":
            productosActuales = menuExtra(productosActuales);
            break;

        case "5":
            mostrarProductos(productosActuales);
            break;

        default:

            console.log("Ingrese una opción");
    }

} while (opcion !== "5" && !salirPrograma);

console.log("Programa finalizadooo");

// Preguntas teoricas:

// ¿Qué es la programación funcional?
// Es un paradigma de programación basado en el uso de funciones 
// matemáticas puras, evitando cambiar estados compartidos o mutar datos, 
// centrándose en el "qué" hacer y no en el "cómo".

// ¿Qué significa inmutabilidad en programación?
// Significa que una vez que un dato (como una variable o un array)
//  es creado, su valor o estado no puede ser modificado; 
// para hacer un cambio, se debe crear una copia nueva.

// ¿Como funciona forEach() en JavaScript?
// Es un método de los arrays que ejecuta 
// una función (callback) una vez por cada elemento 
// que contiene el array, siendo útil para iterar pero 
// sin devolver un array nuevo.

// ¿Qué diferencia existe entre modificar un array original y crear uno nuevo ? 
// Modificar el original (mutar) altera los datos en memoria,
//  lo que puede causar errores inesperados en otras partes del código; 
// crear uno nuevo (inmutabilidad) deja el original intacto, haciendo el 
// código más seguro y predecible.
+
