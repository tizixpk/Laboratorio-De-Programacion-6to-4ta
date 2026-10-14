const inputPokemon = document.getElementById("pokemon-input");
const btnBuscar = document.getElementById("search-btn");
const contenedorPokemon = document.getElementById("pokemon");

btnBuscar.addEventListener("click", () => {
    const busqueda = inputPokemon.value.toLowerCase().trim();
    
    if (busqueda !== "") {
        obtenerPokemon(busqueda);
    }
});

async function obtenerPokemon(pokemon) {
    try {
        contenedorPokemon.innerHTML = `<p>Buscando...</p>`;

        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!respuesta.ok) {
            throw new Error("Pokémon no encontrado");
        }

        const datos = await respuesta.json();
        const tipos = datos.types.map(tipoInfo => tipoInfo.type.name).join(', ');
        contenedorPokemon.innerHTML = `
            <div class="pokemon-card">
                <h2>${datos.name.toUpperCase()}</h2>
                <p><strong>Número:</strong> #${datos.id}</p>
                <img src="${datos.sprites.front_default}" alt="Imagen de ${datos.name}">
                <p><strong>Tipo(s):</strong> ${tipos}</p>
            </div>
        `;
    } catch (error) {
        contenedorPokemon.innerHTML = `
            <p style="color: red;">No se encontró el Pokémon. Revisa el nombre o número e intenta nuevamente.</p>
        `;
    }
}
