let acaVaLaAPIKey = "ba751b79f4d33c473bf6d1b115cc817d";

let qs = location.search;
let qsObj = new URLSearchParams (qs); 

let id_serie = qsObj.get(`id`); 

let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`;
let urlR = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`

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
let recomendacion = document.querySelector(`.recomendacion`);
let seccionReco = document.querySelector(".escondido");


imgSerie.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
nombreSerie.innerText = data.name;
calificacion.innerText = "Rating: " +  data.vote_average;
fecha.innerText = "Fecha de estreno: " + data.first_air_date;
sinopsis.innerText = data.overview;
for (let i = 0; i < data.genres.length; i++) {
    genero.innerHTML += `
                          <p><a class= "hCuatro" href="./detalle-genero.html?id=${data.genres[i].id}">${data.genres[i].name}</a></p>`;
}
recomendacion.innerText = "Ver Recomendaciones"
recomendacion.addEventListener(`click`, function (e) {

  fetch(urlR)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  let datos = data.results
  let contenido = "";
  for (let i = 0; i < 3; i++) {
      console.log(datos[i]);
      seccionReco.innerHTML += ` <article class="padrePeli">
                          <a href="./detalle-series.html?id=${datos[i].id}"><img class="tamaño" src="https://image.tmdb.org/t/p/w500/${datos[i].poster_path}" alt=""></a>
                     </article>`

  }
  seccionReco.style.display = "flex";

})

  
.catch(function(error) {
  console.log("Error: " + error);
})

})




})
.catch(function(error) {
  console.log("Error: " + error);
});

