const botonNombre = document.getElementById("bnombre");
const elemento = document.getElementById("bb");
let audio = document.createElement("audio");
let audio2 = document.createElement("audio");
let voz;
function buscarPokemon(busqueda) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Pokémon no encontrado");
            }

            return respuesta.json();
        })
        .then(datos => {
            audio.src = `${datos.cries['legacy']}`
            elemento.innerHTML = `
                <h1>Pokémon: ${datos.name}</h1>
                <p>Número: ${datos.id}</p>
                <img
                    src="${datos.sprites.front_default}"
                    alt="${datos.name}"
                >
                <p>Altura: ${datos.height / 10} m</p>
                <p>Peso: ${datos.weight / 10} kg</p>
                <audio src="${audio}"></audio> 
            `;
            audio.play();
        })
        .catch(error => {
            elemento.innerHTML = `
                <p>No se encontró ese Pokémon.</p>
            `;
            console.error(error);
        });
}
// por nombre
botonNombre.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim().toLowerCase();
    console.log(nombre)
    buscarPokemon(nombre);
});

//  por num
botonNombre.addEventListener("click", () => {
    const numero = Number(document.getElementById("text").value.trim());

    if (numero === "" || Number(numero) < 1 || Number(numero) > 151) {
        elemento.innerHTML = `
            <p>Ingresa un número entre 1 y 151.</p>
        `;
        return;
    }
    console.log(numero)
    buscarPokemon(numero);
});
