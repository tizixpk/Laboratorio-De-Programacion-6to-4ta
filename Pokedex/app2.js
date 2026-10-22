const botonNombre = document.getElementById("bnombre");
const elemento = document.getElementById("bb");
let audio = document.createElement("audio");

function buscarPokemon(busqueda) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Pokémon no encontrado");
            }
            return respuesta.json();
        })
        .then(datos => {
            audio.src = datos.cries.legacy || datos.cries.latest;

            elemento.innerHTML = `
                <h1>${datos.name}</h1>
                <br>
                <div style="text-align:center">
                    Número de Pokémon: ${datos.id}
                </div>
                <br>
                <div style="text-align:center">
                    Tipo de Pokémon: ${datos.types[0].type.name}
                </div>
                <br>
                <img
                    src="${datos.sprites.versions['generation-v'].icons.front_default || datos.sprites.front_default}"
                    alt="${datos.name}"
                >
                <p>Altura: ${datos.height / 10} m</p>
                <p>Peso: ${datos.weight / 10} kg</p>
            `;

            if (audio.src) {
                audio.play().catch(error => {
                    console.log("No se pudo reproducir el audio:", error);
                });
            }
        })
        .catch(error => {
            elemento.innerHTML = `
                <p>No se encontró ese Pokémon.</p>
            `;
            console.error(error);
        });
}

// Buscar por nombre o número con un solo botón
botonNombre.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim().toLowerCase();
    const valor = document.getElementById("text").value.trim();

    // Comprobar que no estén vacíos los dos campos
    if (nombre === "" && valor === "") {
        elemento.innerHTML = `
            <p>Ingresá un nombre o número de Pokémon.</p>
        `;
        return;
    }

    // No permitir completar ambos campos
    if (nombre !== "" && valor !== "") {
        elemento.innerHTML = `
            <p>Completá solamente el nombre o el número.</p>
        `;
        return;
    }

    // buscar por nombre
    if (nombre !== "") {
        buscarPokemon(nombre);
        return;
    }

    //buscar por num
    const numero = Number(valor);
    if (!Number.isInteger(numero) || numero < 1 || numero > 151) {
        elemento.innerHTML = `
            <p>Ingresá un número entero entre 1 y 151.</p>
        `;
        return;
    }
    buscarPokemon(numero);
});
