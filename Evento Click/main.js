//EJERCICIO 1
const boton = document.querySelector(".Boton");

boton.addEventListener("click", () => {
    boton.style.color = "red";
});

// EJERCICIO 2
const boton2 = document.querySelector(".Boton2");

boton2.addEventListener("click", () => {
    boton.style.display = "none";
});

//EJERCICIO 3
const boton3 = document.querySelector(".Boton3");
const textoboton3 = document.querySelector(".textoboton3");

boton3.addEventListener("click", () => {
    textoboton3.textContent = "hola mundo";
});

//EJERCICIO 4
const boton4 = document.querySelector(".Boton4");
const body = document.querySelector("body");

boton4.addEventListener("click", () => { 
    const p = document.createElement("p");
    p.textContent = "Hola mundo";
    body.appendChild(p);
});

//EJERCICIO 5
const boton5 = document.querySelector(".Boton5");
const elemento5 = document.querySelector(".ej5");

boton5.addEventListener("click", () => {
    body.removeChild(elemento5);
});

//EJERCICIO 6
const boton6 = document.querySelector(".Boton6");

boton6.addEventListener("mouseover", () => {
    boton6.style.backgroundColor = "red";
});

//EJERCICIO 7
const boton7 = document.querySelector(".Boton7");

boton7.addEventListener("click", () => {
    boton7.style.width = "200px";
});

//EJERCICIO 8
const boton8 = document.querySelector(".Boton8");
let conta = 0;
 
boton8.addEventListener("click", () => {
    boton8.style.marginLeft = `${conta}px`;
    conta = conta + 10;
});

//EJERCICIO 9
const boton9 = document.querySelector(".Boton9");
let contador = 1
boton9.addEventListener("dblclick", () => {
; 
  if (contador === 1 ) {
          boton9.style.width = "200px";
          contador = 0;
    }else if ( contador === 0) {
        boton9.style.width = "100px";
        contador = 1;
    }
console.log(contador);
});
