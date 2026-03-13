let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número (divisor):"));
if (num2 === 0) {
  console.log("Los datos ingresados no son válidos");
} else {
  let resultado = num1 / num2;
  console.log("El resultado de la división es: " + resultado);
}



parseFloat() ------------->  convierte el texto ingresado en número decimal por eso lo use ( lo busque en chatgpt)
