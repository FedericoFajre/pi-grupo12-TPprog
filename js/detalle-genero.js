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
/* GEN PELICULA */
let queryString = location.search;
console.log(queryString)
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let tipo = queryStringObj.get('tipo')
console.log(id);

let urlPelisg = `https://api.themoviedb.org/3/discover/${tipo}?api_key=ba751b79f4d33c473bf6d1b115cc817d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
    fetch(urlPelisg)
    .then(function(response){
        return response.json()

        })

    .then (function(data){
        console.log(data);
        let datos = data.results
        let bContainer= document.querySelector('.padrePeli');
        let contenidoT= ''
        for (let i =0 ; i<5; i++){
            if (tipo == 'tv'){
            contenidoT +=
            ` <article class="hijoPeli">
                            <a href="./detalle-series.html?id=${datos[i].id}"><img class="tamaño" src="https://image.tmdb.org/t/p/w500/${datos[i].poster_path}" alt=""></a>
                            <h3><a class="letrasIndex" href="./detalle-genero.html?id=${datos[i].id}">${datos[i].name}</a></h3>
                            <p class="estreno"><a href="./detalle-genero.html?id=${datos[i].id}">Fecha de estreno: ${datos[i].first_air_date}</a></p>
                        </article>`
            }else{
             contenidoT +=
                ` <article class="hijoPeli">
                                <a href="./detalle-peliculas.html?id=${datos[i].id}"><img class="tamaño" src="https://image.tmdb.org/t/p/w500/${datos[i].poster_path}" alt=""></a>
                                <h3><a class="letrasIndex" href="./detalle-genero.html?id=${datos[i].id}">${datos[i].title}</a></h3>
                                <p class="estreno"><a href="./detalle-genero.html?id=${datos[i].id}">Fecha de estreno: ${datos[i].release_date}</a></p>
                            </article>`
            }
            
        }
        console.log(contenidoT);
        bContainer.innerHTML = contenidoT
    
    })
        
    
    .catch(function(error){
        console.log(error);
    })  

    