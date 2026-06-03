const productos = [
    { nombre: "Mouse", categoria: "tecnologia", precio: 1000, stock: 10 },
    { nombre: "Teclado", categoria: "tecnologia", precio: 2000, stock: 5 },
    { nombre: "Monitor", categoria: "tecnologia", precio: 50000, stock: 0 },
    { nombre: "Silla", categoria: "hogar", precio: 15000, stock: 2 }
];

function agregarProducto(temp) {
    let nombreProducto = prompt("Nombre del producto?");
    let categoriaProducto = prompt("Categoría?");
    let precioProducto = Number(prompt("Precio?"));
    let stockProducto = Number(prompt("Stock?"));

    temp[temp.length] = {};

    temp[temp.length - 1].nombre = nombreProducto;
    temp[temp.length - 1].categoria = categoriaProducto;
    temp[temp.length - 1].precio = precioProducto;
    temp[temp.length - 1].stock = stockProducto;

    console.log("Producto agregado");
}

function eliminarProducto(temp) {
    let indice = Number(prompt("Ingrese el índice del producto a eliminar"));

    if (indice >= 0 && indice < temp.length) {
        temp.splice(indice, 1);
        console.log("Producto eliminado");
    } else {
        console.log("Índice inválido");
    }
}

function modificarProducto(temp) {
    let indice = Number(prompt("Ingrese el índice del producto a modificar"));

    if (indice >= 0 && indice < temp.length) {
        console.log("Datos actuales:");
        console.table([temp[indice]]);

        let nombre = prompt("Nuevo nombre:");
        let categoria = prompt("Nueva categoría:");
        let precio = Number(prompt("Nuevo precio:"));
        let stock = Number(prompt("Nuevo stock:"));

        temp[indice] = {
            nombre,
            categoria,
            precio,
            stock
        };

        console.log("Producto modificado");
    } else {
        console.log("Índice inválido");
    }
}

function mostrarProducto(temp) {
    console.table(temp);
}

let op;

do {
    op = prompt(
        "Elige una opción:\n" +
        "1- Agregar producto\n" +
        "2- Eliminar producto\n" +
        "3- Modificar producto\n" +
        "4- Mostrar productos y salir"
    );

    switch (op) {
        case "1":
            agregarProducto(productos);
            break;

        case "2":
            eliminarProducto(productos);
            break;

        case "3":
            modificarProducto(productos);
            break;

        case "4":
            mostrarProducto(productos);
            break;

        default:
            alert("Ingrese una opción válida");
    }

} while (op !== "4");

console.log("Lista final de productos:");
console.table(productos);
