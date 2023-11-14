let acaVaLaAPIKey = "ba751b79f4d33c473bf6d1b115cc817d";

let qs = location.search;
let qsObj = new URLSearchParams (qs); 

let id_pelicula = qsObj.get(`id`); 

let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`;

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
console.log(data);  

let imgPeli = document.querySelector(".imagenpeli");
let nombrePeli = document.querySelector(`.hacheuno`);
let calificacion = document.querySelector(`.rating`);
let fecha = document.querySelector(`.fecha`);
let sinopsis = document.querySelector(`.sinopsis`);
let genero = document.querySelector(`.generos`);
let duracion = document.querySelector(`.duracion`)



imgPeli.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
nombrePeli.innerText = data.original_title;
calificacion.innerText = "Rating: " +  data.vote_average;
fecha.innerText = "Fecha de estreno: " + data.release_date;
sinopsis.innerText = data.overview;
duracion.innerText = "Duración: " + data.runtime + " minutos";


for (let i = 0; i < data.genres.length; i++) {
    genero.innerHTML += `<p><a class= "hCuatro" href="./detalle-genero.html?id=${data.genres[i].id}">${data.genres[i].name}</a></p>`;
        
}



})
.catch(function(error) {
  console.log("Error: " + error);
});
