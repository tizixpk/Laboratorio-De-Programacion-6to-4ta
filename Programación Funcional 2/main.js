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
const soloInstrumentos = Productos.filter((productos2) => productos2.length > 6);
