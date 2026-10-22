const botonNombre = document.getElementById("bnombre");
const elemento = document.getElementById("bb");
let audio = document.createElement("audio");

function buscarPokemon(busqueda) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
        .then(respuesta => respuesta.json())
        .then(datos => {
            audio.src = datos.cries.legacy;
            elemento.innerHTML = `
                <h1>${datos.name}</h1>
                <br>
                <div style="text-align:center">
                    Numero de pokemon: ${datos.id}
                </div>
                <br>
                <div style="text-align:center">
                    Tipo de pokemon: ${datos.types[0].type.name}
                </div>
                <img
                    src="${datos.sprites.versions['generation-v'].icons.front_default}"
                    alt="${datos.name}"
                >
                <p>Altura: ${datos.height / 10} m</p>
                <p>Peso: ${datos.weight / 10} kg</p>
            `;
            audio.play();
        });
}

botonNombre.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim().toLowerCase();
    const numero = document.getElementById("text").value.trim();
    if (nombre !== "") {
        buscarPokemon(nombre);
    } else {
        buscarPokemon(numero);
    }
});
