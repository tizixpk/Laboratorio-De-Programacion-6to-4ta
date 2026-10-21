let busqueda = document.querySelector("input");
let bbusqueda = document.querySelector("button");
let nbusqueda = document.querySelector("#nombre");

let nbbusqueda = document.querySelector("#bnombre");
let valor = 0;
let descripcion = ``;

let valorT = "";
let body = document.querySelector(".img");
let audio = document.createElement("audio");
let audio2 = document.createElement("audio");
let voz;
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(respuesta => respuesta.json())
    .then(datos => {
        
        console.log(datos)
    bbusqueda.addEventListener("click",()=>{
    
   
    })
    nbbusqueda.addEventListener("click",()=>{
        valor = Number(document.querySelector("#text").value);
        valorT = nbusqueda.value
      console.log(typeof valor)
      console.log(valor)
        for(let i = 0 ; i < datos.results.length  ; i++){
            if(valorT === datos.results[i].name || valor === i+1)
            {
                
                fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
                .then(respuesta2 => respuesta2.json() )
                .then(datos2 =>{
                    
                    console.log(datos2)
                    audio.src = `${datos2.cries['legacy']}`
                  
                    console.log(datos2)
                    body.innerHTML = `
                    <div class="img">
                        <h1>${datos2.name}</h1><br>
                        <div style="text-align:center">Numero de pokemon: ${datos2.id} </div> <br>
                        <div style="text-align:center">Tipo de pokemon: ${datos2.types[0].type.name} </div>
                        <img src="${datos2.sprites.versions['generation-v'].icons.animated.front_default}" alt="${datos2.sprites.versions['generation-v'].icons.animated.front_default}">
                        <audio src="${audio}"></audio>
                    </div>`; 
                    audio.play();
               
                    console.log(datos2)
                })
            }
        }
    })

    });


