let acaVaLaAPIKey = "ba751b79f4d33c473bf6d1b115cc817d";

let urlP = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;

let seccionPeliculas = document.querySelector("#generoP");

fetch(urlP)
.then(function(response) {
  return response.json()
})
.then(function(data) {
   let contenido = `<h1 class="titulogenero">Géneros Películas</h4>`;
   console.log(data);
   for (let i = 0; i < data.genres.length; i++) {
       console.log(data[i]);
       contenido += `

           <ul class="hijoGenero">                
               <li><a class="textogenero" href="./detalle-genero.html?id=${data.genres[i].id}">${data.genres[i].name}</a></li>
           </ul>`

   }

   seccionPeliculas.innerHTML = contenido;

})
.catch(function(error) {
  console.log("Error: " + error);
});



/*          Genero Series               */


let urlS = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;

let seccionSeries = document.querySelector("#generoS");

fetch(urlS)
.then(function(response) {
  return response.json()
})
.then(function(data) {
   let contenido = `<h1 class="titulogenero">Géneros Series</h4>`;
   console.log(data);
   for (let i = 0; i < data.genres.length; i++) {
       console.log(data[i]);
       contenido += `

           <ul class="hijoGenero">                
               <li><a class="textogenero" href="./detalle-genero.html?id=${data.genres[i].id}">${data.genres[i].name}</a></li>
           </ul>`

   }

   seccionSeries.innerHTML = contenido;

})
.catch(function(error) {
  console.log("Error: " + error);
});
