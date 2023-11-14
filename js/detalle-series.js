let acaVaLaAPIKey = "ba751b79f4d33c473bf6d1b115cc817d";

let qs = location.search;
let qsObj = new URLSearchParams (qs); 

let id_serie = qsObj.get(`id`); 

let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`;

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
console.log(data);  

let imgSerie = document.querySelector(".imagenpeli");
let nombreSerie = document.querySelector(`.hacheuno`);
let calificacion = document.querySelector(`.rating`);
let fecha = document.querySelector(`.fecha`);
let sinopsis = document.querySelector(`.sinopsis`);
let genero = document.querySelector(`.generos`);



imgSerie.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
nombreSerie.innerText = data.name;
calificacion.innerText = "Rating: " +  data.vote_average;
fecha.innerText = "Fecha de estreno: " + data.first_air_date;
sinopsis.innerText = data.overview;

for (let i = 0; i < data.genres.length; i++) {
    genero.innerHTML += `<p><a class= "hCuatro" href="./detalle-genero.html?id=${data.genres[i].id}">${data.genres[i].name}</a></p>`;
        
}




})
.catch(function(error) {
  console.log("Error: " + error);
});

