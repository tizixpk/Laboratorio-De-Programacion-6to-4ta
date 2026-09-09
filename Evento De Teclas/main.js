const body = document.querySelector("body");

// EJERCICIO 1
body.addEventListener("keydown", (event) => {
    console.log("Tecla presionada:", event.key);
});


// EJERCICIO 2
const ejercicio2 = document.createElement("div");
ejercicio2.innerHTML = `
    <h2>Ejercicio 2</h2>
    <p id="tecla">Presioná una tecla...</p>
`;
body.appendChild(ejercicio2);
const tecla = ejercicio2.querySelector("#tecla");
body.addEventListener("keydown", (event) => {
    tecla.textContent = `Tecla presionada: ${event.key}`;
});


// EJERCICIO 3
const ejercicio3 = document.createElement("div");
ejercicio3.innerHTML = `
    <h2>Ejercicio 3</h2>
    <p id="texto">Escribí algo...</p>
`;
body.appendChild(ejercicio3);
const texto = ejercicio3.querySelector("#texto");
let contenido = "";
body.addEventListener("keydown", (event) => {

    if (event.key === "Backspace") {
        contenido = contenido.slice(0, -1);
    } 
    else if (event.key === "Enter") {
        contenido += "\n";
    } 
    else if (event.key.length === 1) {
        contenido += event.key;
    }

    texto.textContent = contenido;
});


// EJERCICIO 4
const ejercicio4 = document.createElement("div");
ejercicio4.innerHTML = `
    <h2>Ejercicio 4</h2>
`;
body.appendChild(ejercicio4);
const cuadrado = document.createElement("div");
cuadrado.style.width = "100px";
cuadrado.style.height = "100px";
cuadrado.style.backgroundColor = "red";
cuadrado.style.position = "relative";
ejercicio4.appendChild(cuadrado);
let x = 0;
let y = 0;
const velocidad = 10;

body.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        x += velocidad;
    }

    if (event.key === "ArrowLeft") {
        x -= velocidad;
    }

    if (event.key === "ArrowDown") {
        y += velocidad;
    }

    if (event.key === "ArrowUp") {
        y -= velocidad;
    }

    cuadrado.style.left = x + "px";
    cuadrado.style.top = y + "px";
});


// EJERCICIO 5
const ejercicio5 = document.createElement("div");
ejercicio5.innerHTML = `
    <h2>Ejercicio 5</h2>
    <p id="contador">Presionaste A: 0 veces</p>
`;
body.appendChild(ejercicio5);
const contador = ejercicio5.querySelector("#contador");
let cantidadA = 0;
body.addEventListener("keydown", (event) => {

    if (event.key.toLowerCase() === "a") {

        cantidadA++;

        contador.textContent = `Presionaste A: ${cantidadA} veces`;
    }
});



// EJERCICIO 6
const ejercicio6 = document.createElement("div");
ejercicio6.innerHTML = `
    <h2 id="titulo6">Ejercicio 6</h2>
    <p id="parrafo6">
        Presioná la tecla B para cambiar entre modo claro y oscuro.
    </p>
`;
body.appendChild(ejercicio6);
const titulo6 = ejercicio6.querySelector("#titulo6");
const parrafo6 = ejercicio6.querySelector("#parrafo6");
let modoOscuro = false;
body.addEventListener("keydown", (event) => {

    if (event.key.toLowerCase() === "b") {

        modoOscuro = !modoOscuro;

        if (modoOscuro) {

            body.style.backgroundColor = "#222";
            body.style.color = "white";

            titulo6.style.color = "white";
            parrafo6.style.color = "white";

        } else {

            body.style.backgroundColor = "white";
            body.style.color = "black";

            titulo6.style.color = "black";
            parrafo6.style.color = "black";
        }
    }
});



// EJERCICIO 7
const ejercicio7 = document.createElement("div");
ejercicio7.innerHTML = `
    <h2>Ejercicio 7</h2>
    <p id="guardar">
        Presioná Ctrl + S
    </p>
`;
body.appendChild(ejercicio7);
const guardar = ejercicio7.querySelector("#guardar");
body.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "s") {

        event.preventDefault();

        guardar.textContent = "Documento Guardado";
    }
});



// EJERCICIO 8
const ejercicio8 = document.createElement("div");
ejercicio8.innerHTML = `
    <h2>Ejercicio 8</h2>
    <p>Presioná un número del 1 al 5.</p>
`;
body.appendChild(ejercicio8);
body.addEventListener("keydown", (event) => {

    switch (event.key) {

        case "1":
            body.style.backgroundColor = "red";
            break;

        case "2":
            body.style.backgroundColor = "blue";
            break;

        case "3":
            body.style.backgroundColor = "green";
            break;

        case "4":
            body.style.backgroundColor = "yellow";
            break;

        case "5":
            body.style.backgroundColor = "purple";
            break;
    }
});



// EJERCICIO 9
const ejercicio9 = document.createElement("div");
ejercicio9.innerHTML = `
    <h2>Ejercicio 9</h2>
    <p>Presioná cualquier tecla para reproducir un sonido.</p>
`;
body.appendChild(ejercicio9);
let audioContext;
body.addEventListener("keydown", () => {

    if (!audioContext) {
        audioContext = new AudioContext();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 440;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(
        0.3,
        audioContext.currentTime
    );

    gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.2
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.2
    );
});

