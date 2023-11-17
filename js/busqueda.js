let form = document.querySelector("form");
let input = document.querySelector("input");
            
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

let querystring = location.search
let qsToObject = new URLSearchParams(querystring)
let datoAb = qsToObject.get("buscar")

let busqueda = document.querySelector(".titulos")
busqueda.innerHTML += `<h2>Search results for <i>${datoAb}</i></h2>`

let titulos = document.querySelector (".titulos")
let pelis = document.querySelector (".PadrePeli")
let imagen = document.querySelector (".tamaño")

let url = `https://api.themoviedb.org/3/search/movie?query=${datoAb}&${acaVaLaAPIKey}&include_adult=false&language=en-US&page=1`;

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        
        let seccionBuscador= document.querySelector(".oculto");
        let mensaje = document.querySelector(".mensaje")

        if(data.results.length == 0){
            mensaje.innerHTML = `No se ha encontrado resultado de busqueda para:  <span> ${datoAb}</span>`
        }
        else{
            mensaje.innerHTML = `Resultado de busqueda para:  <span>${datoAb}</span>`
            for(let i=0; i<2; i++){    //Mostramos 2 pelis
                seccionBuscador.innerHTML += `<article class="popu">
                    <a href="./detalles-peliculas.html?id=${data.results[i].id}"><img class="pelis" 