// Seleccionamos los elementos del HTML.
const inputNombre = document.getElementById("nombre");
const inputNumero = document.getElementById("text");
const botonBuscar = document.getElementById("bnombre");
const contenedorImagen = document.querySelector(".img");
const contenedorDatos = document.querySelector(".elementos");

let listaPokemon = [];

// Obtenemos la lista de los primeros 151 Pokémon con fetch(),
// tal como aparece en la actividad.
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(respuesta => respuesta.json())
    .then(datos => {
        listaPokemon = datos.results;
    })
    .catch(error => {
        contenedorDatos.innerHTML = "<p>Error al cargar los Pokémon.</p>";
        console.log(error);
    });

// Mostramos la imagen, el nombre, el número y los tipos.
function mostrarPokemon(datos) {
    contenedorImagen.innerHTML = `
        <img src="${datos.sprites.front_default}" alt="${datos.name}">
    `;

    const tipos = datos.types.map(tipo => tipo.type.name).join(" / ");

    contenedorDatos.innerHTML = `
        <h2>${datos.name}</h2>
        <p>N° ${datos.id}</p>
        <p>Tipo: ${tipos}</p>
    `;
}

// Buscamos por nombre o por número dentro de los primeros 151 Pokémon.
function buscarPokemon(busqueda) {
    busqueda = busqueda.trim().toLowerCase();

    if (busqueda === "") {
        contenedorImagen.innerHTML = "";
        contenedorDatos.innerHTML = "<p>Escribí un nombre o un número.</p>";
        return;
    }

    if (listaPokemon.length === 0) {
        contenedorDatos.innerHTML = "<p>La lista se está cargando. Intentá de nuevo.</p>";
        return;
    }

    let pokemon;

    if (/^\d+$/.test(busqueda)) {
        pokemon = listaPokemon[Number(busqueda) - 1];
    } else {
        pokemon = listaPokemon.find(elemento => elemento.name === busqueda);
    }

    if (!pokemon) {
        contenedorImagen.innerHTML = "";
        contenedorDatos.innerHTML = "<p>No se encontró ese Pokémon entre los primeros 151.</p>";
        return;
    }

    // Hacemos otra consulta para obtener la imagen, el número y los tipos.
    fetch(pokemon.url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            mostrarPokemon(datos);
        })
        .catch(error => {
            contenedorImagen.innerHTML = "";
            contenedorDatos.innerHTML = "<p>No se pudo consultar ese Pokémon.</p>";
            console.log(error);
        });
}

// El botón permite buscar usando cualquiera de los dos campos.
botonBuscar.addEventListener("click", () => {
    buscarPokemon(inputNombre.value || inputNumero.value);
});

// También se puede buscar presionando Enter.
inputNombre.addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        buscarPokemon(inputNombre.value);
    }
});

inputNumero.addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        buscarPokemon(inputNumero.value);
    }
});

// Al escribir en un campo, limpiamos el otro para evitar confusiones.
inputNombre.addEventListener("input", () => {
    inputNumero.value = "";
});

inputNumero.addEventListener("input", () => {
    inputNombre.value = "";
});
