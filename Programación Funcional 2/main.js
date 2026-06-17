//===============================================================
// Consigna: Programacion Funcional 2
// Alumno/a: Tiziano Pirez
// Fecha: 10/06/2026
//===============================================================
// PARTE A:
// Una funcion pura es cuando das el mismo argumento y te tiene q dar siempre el mismo resultado
// Un dato inmutable significa que el valor no puede ser modificado
// Orden superior: Puede devolver o recibe una funcion
// PARTE B: F1 no es pura ya que tiene efectos secundarios con contador, f2 es pura ya que si le das un valor siempre dara el mismo resultado, f3  no es pura ya que modifica lista, f4 no es pura ya que siempre da un valor distinto.
//PARTE C:
const f1 = (x, contador) => ({ 
  resultado: x * 2, 
  nuevoContador: contador + 1 
});
const f3 = (lista) => [...lista, 99]; 
//PARTE B.2
const precios = [1200, 800, 3500, 450, 2100, 990];
const preciosConIVA = precios.map(x => {
  const resultado = x * 1.21;
  return resultado; 
});
console.log(preciosConIVA);
const preciosConDescuento = precios.map(x => {
  const resultado = x * 0.8;
  return resultado; 
});
console.log(preciosConDescuento);
const preciosRedondeados = precios.map(x =>  {
const resultado = Math.round(x)
return resultado;
});
console.log(preciosRedondeados);
const etiquetas = precios.map(x => "$" + x);
console.log(etiquetas);
const preciosBaratos = precios.map (x => {
const barato = NaN;
if ( x < 100 ) {
    barato = true;
}
});
console.log(barato);
console.log(precios);
//PARTE B.3
const productos = [
  { nombre: 'Guitarra', categoria: 'Instrumento', precio: 15000 },
  { nombre: 'Auriculares', categoria: 'Accesorio', precio: 3200 },
  { nombre: 'Piano digital', categoria: 'Instrumento', precio: 42000 },
  { nombre: 'Cable XLR', categoria: 'Accesorio', precio: 850 },
  { nombre: 'Batería', categoria: 'Instrumento', precio: 68000 },
  { nombre: 'Micrófono', categoria: 'Accesorio', precio: 7500 },
];
const soloInstrumentos = productos.filter(producto => producto.categoria === 'Instrumento');
console.log("cantidad de instrumentos:", soloInstrumentos.length);
console.log(soloInstrumentos);
const precioInstrumento = productos.filter(producto => producto.precio < 5000 );
console.log("cantidad de instrumentos:", precioInstrumento.length);
console.log(precioInstrumento);
const accesoriosBaratos = productos.filter(producto => producto.categoria === 'Accesorio' && producto.precio < 5000);
console.log("cantidad de instrumentos:", accesoriosBaratos.length);
console.log(accesoriosBaratos);
const nombresLargos = productos.filter(producto => producto.nombre.length > 7 );
console.log("cantidad de instrumentos:", nombresLargos.length);
console.log(nombresLargos);
//PUNTO B.4
const precioTotal = productos.reduce((acc, item) => acc + item.precio, 0);
console.log('Precio total:', precioTotal);
const precioPromedio = productos.reduce((acc, item, _, arr) => acc + item.precio / arr.length, 0);
console.log('Precio promedio:', precioPromedio);
const precioMaximo = productos.reduce((acc, item) => (item.precio > acc ? item.precio : acc), 0);
console.log('Precio máximo:', precioMaximo);
const listaNombres = productos.reduce((acc, item) => [...acc, item.nombre], []);
console.log('Lista de nombres:', listaNombres);
const contadorAccesorios = productos.reduce((acc, item) => (item.categoria === 'Accesorio' ? acc + 1 : acc), 0);
console.log('Contador de accesorios:', contadorAccesorios);
// PUNTO B.5
const cuadrado = (n) => n * n;
const esPar = (n) => n % 2 === 0;
const mayuscula = (texto) => texto.toUpperCase();
const formatearPrecio = (precio) => '$' + precio;
console.log(cuadrado(5));        // 25
console.log(esPar(4));           // true
console.log(mayuscula('hola'));  // Hola
console.log(formatearPrecio(500)); // $500
// PARTE B
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cuadrados = numeros.map(cuadrado);
const preciosFormateados = numeros.map(formatearPrecio);
const soloPares = numeros.filter(esPar);
console.log('Cuadrados:', cuadrados);
console.log('Precios:', preciosFormateados);
console.log('Solo pares:', soloPares)
// PARTE B.6
const album = {
  id: 1,
  titulo: 'Abbey Road',
  precio: 1200,
  disponible: true
};
const albumConDescuento = { ...album, precio: album.precio * 0.9 };
const albumAgotado = { ...album, disponible: false };
const albumCompleto = { ...album, anio: 1969 };
console.log('Original:', album);
console.log('Con Descuento:', albumConDescuento);
console.log('Agotado:', albumAgotado);
console.log('Completo:', albumCompleto);
console.log('¿El original cambió?:', album); 
