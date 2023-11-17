let form = document.querySelector(".busda");
let input = document.querySelector(".botonBusqueda");

            
form.addEventListener("submit", function(e){
    e.preventDefault();
            
    if(input.value === ""){
        alert ("Tenes que completar el campo!")
                }  else if (input.value.length < 3){
      alert ("Debe introducir minimo 3 caracteres");
            } else {
        this.submit()
    }
})

/* Resultados de busqueda */
let acaVaLaAPIKey = "ba751b79f4d33c473bf6d1b115cc817d";

let qs = location.search
let qsObjLit = new URLSearchParams(qs);
let datoAb = qsObjLit.get("buscar");
console.log(datoAb);

let url = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${datoAb}`;

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        
        let seccionBuscador= document.querySelector(".seccionBuscador");
        let mensaje = document.querySelector(".mensajeBuscador")

        if(data.results.length == 0){
            mensaje.innerHTML = `No se ha encontrado resultado de busqueda para:  <span> ${datoAb}</span>`
        }
        else{
            mensaje.innerHTML = `Resultado de busqueda para:  <span>${datoAb}</span>`
            for(let i=0; i<4; i++){ 
                if (data.results[i].poster_path !== null) {
                seccionBuscador.innerHTML += `<article class="popu">
                    <a href="./detalle-peliculas.html?id=${data.results[i].id}"><img class="pelis" src= "https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt=""> 
                    </a>
                    <strong>${data.results[i].original_title}</strong>
                    <p>${data.results[i].release_date}</p>
                </article>`;
    
            }
        }
        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    })
                   