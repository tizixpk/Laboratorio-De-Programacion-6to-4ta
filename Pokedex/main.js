let buscador = document.querySelector("input");
let botonBuscar = document.querySelector("button");
let nombrePokemon = document.querySelector("#nombre");

let botonNombre = document.querySelector("#bnombre");
let numeroPokemon = 0;
let descripcionPokemon = ``;

let textoPokemon = "";
let contenedor = document.querySelector(".img");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(res => res.json())
    .then(listaPokemon => {

        console.log(listaPokemon);

        botonBuscar.addEventListener("click", () => {

        });

        botonNombre.addEventListener("click", () => {
            numeroPokemon = Number(document.querySelector("#text").value);
            textoPokemon = nombrePokemon.value;

            console.log(typeof numeroPokemon);
            console.log(numeroPokemon);

            for (let posicion = 0; posicion < listaPokemon.results.length; posicion++) {

                if (textoPokemon === listaPokemon.results[posicion].name || numeroPokemon === posicion + 1) {

                    fetch(`https://pokeapi.co/api/v2/pokemon/${posicion + 1}`)
                        .then(resPokemon => resPokemon.json())
                        .then(infoPokemon => {

                            console.log(infoPokemon);

                            contenedor.innerHTML = `
                            <div class="img">
                                <h1>${infoPokemon.name}</h1><br>
                                <div style="text-align:center">Numero de pokemon: ${infoPokemon.id}</div><br>
                                <div style="text-align:center">Tipo de pokemon: ${infoPokemon.types[0].type.name}</div>
                                <img src="${infoPokemon.sprites.versions['generation-v'].icons.animated.front_default}" alt="${infoPokemon.name}">
                            </div>`;

                            console.log(infoPokemon);
                        });
                }
            }
        });
    });
