//===============================================================
// Consigna: [El programa debe ejecutarse dentro de un ciclo (do-while) que muestre un menú de opciones.]
// Alumno/a: [Tiziano Yamil Pirez]
// Fecha: [27/05/2026]
// Descripción: [hace lo pedido]
//===============================================================

const productos = [
      {nombre: "Mouse", categoria: "tecnologia", precio: 1000, stock: 10 },
      {nombre: "Teclado", categoria: "tecnologia", precio: 2000, stock: 5 },
      {nombre: "Monitor", categoria: "tecnologia", precio: 50000, stock: 0 },
     {nombre: "Silla", categoria: "hogar", precio: 15000, stock: 2 }
       ];

function mostrarSinStock(temp) {
temp.forEach( productos2 => {
    if (productos2.stock === 0) {
        console.table (productos2);
    }
});

function buscarPorCategoria(temp) {
const categoria = prompt("di el nombre de la categoria");
temp.forEach( productos2 => {
    if (productos2.categoria === categoria) {
        console.table (productos2.categoria);
    }
});

function aplicarAumento(temp) {
    const nombre = prompt("Di el nombre del producto"); 
    const porcentaje = Number(prompt("Di el porcentaje de aumento en número"));
    const productosActualizados = [];
    temp.forEach(producto => {
        if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
            const productoActualizado = {
                ...producto,
                precio: producto.precio * (1 + porcentaje / 100)
            };
            productosActualizados.push(productoActualizado);
        } else {
            productosActualizados.push(producto);
        }
    });

    return productosActualizados; 
}


}

 function agregarProducto(temp) {
    let nombreProducto = prompt("nombre del producto?");
    let categoriaProducto = prompt("categoría?");
    let precioProducto = Number(prompt("precio?"));
    let stockProducto = Number(prompt("stock?"));
    temp[temp.length] = {};
    temp[temp.length - 1].nombre = nombreProducto;
    temp[temp.length - 1].categoria = categoriaProducto;
    temp[temp.length - 1].precio = precioProducto;
    temp[temp.length - 1].stock = stockProducto;
    return console.log("producto agregado");
}

    function eliminarProducto(temp) {
        let indice = Number(prompt("ingresa el indice del producto a eliminar"));
        delete temp[indice];
    }

    function modificarProducto(temp) {
        let indice = Number(prompt("ingresa el indice del producto a modificar"));
        console.log(temp[indice]);
        let si = prompt ("deseas modificarlo?");
        if ( si === "si") {
            let nombreProductomod = prompt("nombre del producto?");
            let categoriaProductomod = prompt("categoría?");
            let precioProductomod = Number(prompt("precio?"));
            let stockProductomod = Number(prompt("stock?"));
            temp[indice] = {
                nombre: nombreProductomod, 
                categoria: categoriaProductomod, 
                precio: precioProductomod, 
                stock: stockProductomod,
            };
        }
        return console.log ("listo");
    }

function masopciones() {
let opcion;
    do {
        console.log('\n--- SUBMENÚ ---');
        console.log('1. Mostrar productos sin stock');
        console.log('2. Buscar productos por categoría');
        console.log('3. Aplicar aumento de precio por nombre');
        console.log('4. Mostrar producto más caro');
        console.log('5. Volver al menú anterior');
        opcion = readlineSync.question('Seleccione una opción: ');

        switch(opcion) {
            case '1':
                mostrarSinStock(productos);
                break;
            case '2':
                buscarPorCategoria(productos);
                break;
            case '3':
                aplicarAumento(productos);
                break;
            case '4':
                productoMasCaro(productos);
                break;
            case '5':
                console.log('Regresando al menú principal...');
                break;
            default:
                console.log('Opción no válida');
        }
    } while(opcion !== '5');
}

function menu() {
do {
    op = prompt("Elige una opción:\n1-Agregar producto\n2-Eliminar producto\n3-Modificar producto\n4-Mas opciones\n5- salir");
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
            masopciones();
        break;
    
        default:
            alert("ingresa una op");
            break;
    }

} while (op !== "5");
console.log("Lista final de productos:");
console.table(productos);}

function(menu());
