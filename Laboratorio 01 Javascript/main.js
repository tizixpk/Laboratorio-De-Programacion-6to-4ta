// Ejercicio 1:

console.log("hola");

// Ejercicio 2:

let numero = 15;
let booleano = true;
let underfined;
let null1 = null;
let texto = "hola";
console.log("hola"/2);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof underfined);
console.log(typeof null1);
console.log(typeof texto);

//Ejercicio 3:

function sumar (a,b) {
return a + b;
}
console.log(typeof sumar)

//Ejercicio 4:

function sumar (a) {
if (typeof(a) == "number" ) {
     return true;
}
else  {
    return false;
}
}
let a = 5;
sumar(a);

//Ejercicio 5:

function mayuscula(texto) {
  return texto.toUpperCase();
}
const resultado = mayuscula("hola mundo");
console.log(resultado);

//Ejercicio 6:

function  vec(arr) {
  return arr[0];
}
let v = [1, 2, 3];
console.log(vec(v)); 

//Ejercicio 7:

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
function tipodedato(dato) {
    return typeof dato;
}
let booleano = true;
console.log(tipodedato(booleano)); 

// ejercicio 11
function ejercicio11(dato2) {
    if (dato2 === null || dato2 === undefined) {
        return false;
    } else {
        return true;
    }
}
console.log(ejercicio11(null));

// ejercicio 12: 

function  ejercicio12(array2) {
  let temp = array2;
  return console.log(typeof(temp.length));
}
let vector12 = [ 1,2,3,4,"hola"];
ejercicio12(vector12);  

// ejercicio 13:

let dia_actual = parseInt(prompt("día actual"));
let mes_actual = parseInt(prompt("mes actual"));
let año_actual = parseInt(prompt("año actual"));
let repetir = "si";
while (repetir === "si") {
    let usuario = prompt("Nombre");
    let dia_cumple = parseInt(prompt("día nacimiento"));
    let mes_cumple = parseInt(prompt("mes nacimiento"));
    let año_cumple = parseInt(prompt("año nacimiento"));
    let edad = año_actual - año_cumple;
    if (mes_actual < mes_cumple || (mes_actual === mes_cumple && dia_actual < dia_cumple)) {
        edad--;
    }
    alert(usuario + " tiene " + edad + " años");
    repetir = prompt("desea continuar???");
}


// ejercicio 14: 

let contraseña = "";
function validacion() {
  let intentos = 0;
  while (intentos < 4) {
    let clave = prompt("ingrese una contraseña de 4 dígitos:");
    if (clave.length == 4 && !isNaN(clave)) {       // -------> !isNaN(clave) = “ES un número” -> true , si no es, false
      contraseña = clave;
      alert("guardada");
      return;
    } else {
      intentos++;
      alert("error, Intento " + intentos);
    }
  }
  alert("sin intentos");
}
function login() {
  let intentos = 0;
  while (intentos < 4) {
    let ingreso = prompt("Ingrese la contraseña:");
    if (ingreso === contraseña) {
      alert("Acceso exitoso");
      return;
    } else {
      intentos++;
      alert("Incorrecta. Intento " + intentos);
    }
  }

  alert("Acceso bloqueado");
}
validacion();
login();
