/*
https://profeleguizanicolas.github.io/JavaScript---Introduccion/
Ejercicio 1:
console.log("hola");

Ejercicio 2:
let numero = 15;
let booleano = true;
let underfined;
let null1 = null;
console.log("hola"/2);
String(100);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof underfined);
console.log(typeof null1);
console.log(typeof String);

Ejercicio 3:
function sumar (a,b) {
return a + b;
}
console.log(typeof sumar)

Ejercicio 4:
function sumar (a) {
if (typeof(a) == "number" ) {
     console.log(true);
}
else  {
    console.log(false);
}
}
let a = 5;
sumar(a);

Ejercicio 5:
function mayuscula(texto) {
  return texto.toUpperCase();
}
const resultado = mayuscula("hola mundo");
console.log(resultado);

Ejercicio 6:
function  vec(arr) {
  return arr[0];
}
let v = [1, 2, 3];
console.log(vec(v)); 

Ejercicio 7:
function convertirStringANumero(valor) { return Number(valor) }
function convertirNumeroAString(valor) { return String(valor) }
function convertirBooleanoAString(valor) { return String(valor) }
function convertirStringABooleano(valor) { return valor.toLowerCase() === "true" }
let string_ej = "123";
let numero_ej = 456;
let booleano_ej = true;
let stringBooleano_ej = "true";
let resultado1 = convertirStringANumero(string_ej);
console.log("valor original:", string_ej);
console.log("tipo original:", typeof string_ej);
console.log("valor convertido:", resultado1);
console.log("tipo convertido:", typeof resultado1);
let resultado2 = convertirNumeroAString(numero_ej);
console.log("valor original:", numero_ej);
console.log("tipo original:", typeof numero_ej);
console.log("valor convertido:", resultado2);
console.log("tipo convertido:", typeof resultado2);
let resultado3 = convertirBooleanoAString(booleano_ej);
console.log("Valor original:", booleano_ej);
console.log("Tipo original:", typeof booleano_ej);
console.log("Valor convertido:", resultado3);
console.log("Tipo convertido:", typeof resultado3);
let resultado4 = convertirStringABooleano(stringBooleano_ej);
console.log("Valor original:", stringBooleano_ej);
console.log("Tipo original:", typeof stringBooleano_ej);
console.log("Valor convertido:", resultado4);
console.log("Tipo convertido:", typeof resultado4);

//ejercicio 8
function  Elementosdelvector(arr) {
  return arr.length;
}
let vector = [4,5,67,8,65,4,5];
console.log(Elementosdelvector(vector));   

// ejercicio 9
function  convertibilidad(cadena1, cadena2) {
  return cadena1 + cadena2;
}
console.log(convertibilidad("Hola ", "Mundo"));   

 // ejercicio 10
function  tipodedato(dato) {
  return console.log(typeof(dato));
}
let booleano = true;
tipodedato(booleano);    

// ejercicio 11
function  ejercicio11(dato2) {
let booleano2 = true;
typeof(dato2);
 if (dato2 ==  null || dato2 == undefined ) {
    booleano2 = false;
    return console.log(booleano2);
 }else {
    return booleano2;
 }
}
ejercicio11(null);  

// ejercicio 12: 
function  ejercicio12(array2) {
  let temp = array2;
  return console.log(typeof(temp.length));
}
let vector12 = [ 1,2,3,4,"hola"];
ejercicio12(vector12);  

// ejercicio 13:
dia_actual = prompt ( " ingresa la fecha actual : (día)");
mes_actual = prompt ( " ingresa la fecha actual : (mes)");
año_actual = prompt ( " ingresa la fecha actual : (año)");
usuario = prompt("ahora ingresa su nombre");
dia_cumple = prompt ( " ahora ingresa su fecha d nacimiento: (dia) ");
mes_cumple = prompt ( " ahora ingresa su fecha d nacimiento: (mes) ");
año_cumple = prompt ( " ahora ingresa su fecha d nacimiento: (año) ");
edad = ( año_actual - año_cumple);
if ( mes_actual < mes_cumple || mes_actual && dia_actual < dia_cumple ) {
    edad = edad - 1;
}
alert(usuario && edad);
repetir = prompt ( "pon 1 para repetir o 2 para finalizar");
if ( repetir == 1 ) {
usuario = prompt("ok ingresa su nombre");
dia_cumple = prompt ( " ahora ingresa su fecha d nacimiento: (dia) ");
mes_cumple = prompt ( " ahora ingresa su fecha d nacimiento: (mes) ");
año_cumple = prompt ( " ahora ingresa su fecha d nacimiento: (año) ");
edad = ( año_actual - año_cumple);
alert(usuario && edad);
} 

*/
