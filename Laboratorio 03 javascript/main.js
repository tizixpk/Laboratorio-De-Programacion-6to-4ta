
const productos = [
{nombre: "Mouse", categoria: "tecnologia", precio: 1000, stock: 10 },
{nombre: "Teclado", categoria: "tecnologia", precio: 2000, stock: 5 },
{nombre: "Monitor", categoria: "tecnologia", precio: 50000, stock: 0 },
{nombre: "Silla", categoria: "hogar", precio: 15000, stock: 2 }
];

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

    function mostrarProducto(temp) {
        for (let i = 0; i < temp.length; i++) {
            console.table(temp[i]);
        } 
        return 0;
    }
    let op; 
do {
    op = prompt("Elige una opción:\n1-Agregar producto\n2-Eliminar producto\n3-Modificar producto\n4-Mostrar productos y salir");
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
            alert("ingresa una op");
            break;
    }

} while (op !== "4");
console.log("Lista final de productos:");
console.table(productos);
