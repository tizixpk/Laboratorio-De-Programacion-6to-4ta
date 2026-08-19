// EJ 1
const parrafo = document.getElementById("parrafo1");
console.log(parrafo.textContent);


// EJ 2
const elementos = document.getElementsByClassName("clase1");
for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].textContent);
}


// EJ 3
const imagen = document.querySelector(".imagen");
console.log("src:", imagen.src);
console.log("alt:", imagen.alt);


// EJ 4
const container = document.getElementById("container");
const parrafo1 = document.createElement("p");
parrafo1.textContent = "este es el primer parrafo.";
const parrafo2 = document.createElement("p");
parrafo2.textContent = "Este es el segundo parrafo.";
const parrafo3 = document.createElement("p");
parrafo3.textContent = "Este es el tercer parrafo.";
container.appendChild(parrafo1);
container.appendChild(parrafo2);
container.appendChild(parrafo3);


// EJ 5
container.style.backgroundColor = "lightblue";
const parrafos = container.querySelectorAll("p");
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "white";
}


// EJ 6
const lista = document.createElement("ol");
for (let i = 1; i <= 5; i++) {
    const elemento = document.createElement("li");
    elemento.textContent = i;
    lista.appendChild(elemento);
}
document.body.appendChild(lista);


// EJ 7
const gallery = document.createElement("div");
gallery.id = "gallery";
for (let i = 1; i <= 3; i++) {
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    const titulo = document.createElement("h3");
    titulo.textContent = "Imagen " + i;
    const img = document.createElement("img");
    img.src = "https://mccormick.widen.net/content/vqtq5a0u1v/png/MOSTAZA%20AMARILLA%20CLA%CC%81SICA%20FRENCH_S_8oz.png?crop=true&anchor=0,0&color=ffffff00&u=u0bb0o&w=2000&h=2000";
    img.alt = "Imagen " + i;
    imageContainer.appendChild(titulo);
    imageContainer.appendChild(img);
    gallery.appendChild(imageContainer);
}
document.body.appendChild(gallery);


// EJ 8
const tabla = document.createElement("table");
tabla.id = "myTable";


// CABECERA
const thead = document.createElement("thead");
const filaCabecera = document.createElement("tr");
const nombreCabecera = document.createElement("th");
nombreCabecera.textContent = "Nombre";
const edadCabecera = document.createElement("th");
edadCabecera.textContent = "Edad";
filaCabecera.appendChild(nombreCabecera);
filaCabecera.appendChild(edadCabecera);
thead.appendChild(filaCabecera);
tabla.appendChild(thead);


// CUERPO
const tbody = document.createElement("tbody");
const personas = [
    ["Juan", 25],
    ["Ana", 30],
    ["Luis", 28]
];
for (let i = 0; i < personas.length; i++) {
    const fila = document.createElement("tr");
    const nombre = document.createElement("td");
    nombre.textContent = personas[i][0];
    const edad = document.createElement("td");
    edad.textContent = personas[i][1];
    fila.appendChild(nombre);
    fila.appendChild(edad);
    tbody.appendChild(fila);
}
tabla.appendChild(tbody);
document.body.appendChild(tabla);
