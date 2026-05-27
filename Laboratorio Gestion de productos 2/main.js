let productos = [
  { nombre: "Mouse", categoria: "tecnologia", precio: 1000, stock: 10 },
  { nombre: "Teclado", categoria: "tecnologia", precio: 2000, stock: 5 },
  { nombre: "Monitor", categoria: "tecnologia", precio: 50000, stock: 0 },
  { nombre: "Silla", categoria: "hogar", precio: 15000, stock: 2 }
];

let productosActualizados = null;

let salir = false;

do {

  let opcion = Number(prompt(`
1 - Agregar producto
2 - Eliminar producto
3 - Modificar producto
4 - Más opciones
5 - Mostrar productos y salir
Ingrese una opción:
`));

  switch (opcion) {

    case 1:

      let nombre = prompt("Ingrese nombre del producto:");
      let categoria = prompt("Ingrese categoría:");
      let precio = Number(prompt("Ingrese precio:"));
      let stock = Number(prompt("Ingrese stock:"));

      productos.push({
        nombre,
        categoria,
        precio,
        stock
      });

      console.log("Producto agregado correctamente.");
      break;

    case 2:

      let eliminar = prompt("Ingrese el nombre del producto a eliminar:");

      productos = productos.filter(producto =>
        producto.nombre.toLowerCase() !== eliminar.toLowerCase()
      );

      console.log("Producto eliminado correctamente.");
      break;


    case 3:

      let modificar = prompt("Ingrese el nombre del producto a modificar:");

      productos.forEach(producto => {

        if (producto.nombre.toLowerCase() === modificar.toLowerCase()) {

          producto.categoria = prompt("Nueva categoría:");
          producto.precio = Number(prompt("Nuevo precio:"));
          producto.stock = Number(prompt("Nuevo stock:"));

          console.log("Producto modificado correctamente.");
        }

      });

      break;


    case 4:

      let volver = false;

      do {

        let subOpcion = Number(prompt(`
===== SUBMENÚ =====

1 - Mostrar productos sin stock
2 - Buscar productos por categoría
3 - Aplicar aumento de precio por nombre
4 - Mostrar producto más caro
5 - Volver al menú anterior

Ingrese una opción:
`));

        switch (subOpcion) {
            
          case 1:

            let sinStock = [];

            productos.forEach(producto => {

              if (producto.stock === 0) {
                sinStock.push(producto);
              }

            });

            console.table(sinStock);

            // Finaliza completamente
            salir = true;
            volver = true;

            break;

          case 2:

            let categoriaBuscada = prompt("Ingrese categoría:");

            let encontrados = [];

            productos.forEach(producto => {

              if (
                producto.categoria.toLowerCase() ===
                categoriaBuscada.toLowerCase()
              ) {
                encontrados.push(producto);
              }

            });

            console.table(encontrados);

            salir = true;
            volver = true;

            break;

          case 3:

            let nombreProducto = prompt("Ingrese nombre del producto:");
            let porcentaje = Number(prompt("Ingrese porcentaje de aumento:"));

            productosActualizados = [];

            productos.forEach(producto => {

              if (
                producto.nombre.toLowerCase() ===
                nombreProducto.toLowerCase()
              ) {

                let nuevoPrecio =
                  producto.precio +
                  (producto.precio * porcentaje / 100);

                productosActualizados.push({
                  ...producto,
                  precio: nuevoPrecio
                });

              } else {

                productosActualizados.push(producto);

              }

            });

            console.table(productosActualizados);

            break;

          case 4:

            let arrayUsado =
              productosActualizados || productos;

            let productoCaro = arrayUsado[0];

            arrayUsado.forEach(producto => {

              if (producto.precio > productoCaro.precio) {
                productoCaro = producto;
              }

            });

            console.table([productoCaro]);

            break;

          case 5:

            volver = true;
            break;

          default:
            console.log("Opción inválida.");

        }

      } while (!volver);

      break;

    case 5:

      console.log("===== LISTADO FINAL =====");

      if (productosActualizados) {
        console.table(productosActualizados);
      } else {
        console.table(productos);
      }

      salir = true;

      break;

    default:
      console.log("Opción inválida.");
  }

} while (!salir);
