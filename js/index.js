let acaVaLaAPIKey = "ba751b79f4d33c473bf6d1b115cc817d";

let urlP = `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`;


let seccionPeliculas = document.querySelector("#seccionPeliculas");

fetch(urlP)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let datos = data.results
    let contenido = "";
    for (let i = 0; i < 5; i++) {
        console.log(datos[i]);
        contenido += ` <article class="hijoPeli">
                            <a href="./detalle-peliculas.html?id=${datos[i].id}"><img class="tamaño" src="https://image.tmdb.org/t/p/w500/${datos[i].poster_path}" alt=""></a>
                            <h3><a class="letrasIndex" href="./detalle-peliculas.html?id=${datos[i].id}">${datos[i].title}</a></h3>
                            <p class="estreno"><a href="./detalle-peliculas.html?id=${datos[i].id}">Fecha de estreno: ${datos[i].release_date}</a></p>
                        </article>`

    }

    seccionPeliculas.innerHTML = contenido;

})
.catch(function(error) {
  console.log("Error: " + error);
});




/*              FETCH SERIES                        */


let urlS = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`;


let seccionSeries = document.querySelector("#seccionSeries");

fetch(urlS)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let datos = data.results
    let contenido = "";
    for (let i = 0; i < 5; i++) {
        console.log(datos[i]);
        contenido += ` <article class="hijoPeli">
                            <a href="./detalle-series.html?id=${datos[i].id}"><img class="tamaño" src="https://image.tmdb.org/t/p/w500/${datos[i].poster_path}" alt=""></a>
                            <h3><a class="letrasIndex" href="./detalle-series.html?id=${datos[i].id}">${datos[i].name}</a></h3>
                            <p class="estreno"><a href="./detalle-series.htm?id=${datos[i].id}">Fecha de estreno: ${datos[i].first_air_date}</a></p>
                        </article>`

    }

    seccionSeries.innerHTML = contenido;

})
.catch(function(error) {
  console.log("Error: " + error);
});



/*              FETCH SERIES MAS VALORADAS                        */


let urlSV = `https://api.themoviedb.org/3/tv/top_rated?api_key=${acaVaLaAPIKey}`;


let seccionSeriesValoradas = document.querySelector("#seccionSeriesValoradas");

fetch(urlSV)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let datos = data.results
    let contenido = "";
    for (let i = 0; i < 5; i++) {
        console.log(datos[i]);
        contenido += ` <article class="hijoPeli">
                            <a href="./detalle-series.html?id=${datos[i].id}"><img class="tamaño" src="https://image.tmdb.org/t/p/w500/${datos[i].poster_path}" alt=""></a>
                            <h3><a class="letrasIndex" href="./detalle-series.html?id=${datos[i].id}">${datos[i].name}</a></h3>
                            <p class="estreno"><a href="./detalle-series.htm?id=${datos[i].id}">Fecha de estreno: ${datos[i].first_air_date}</a></p>
                        </article>`

    }

    seccionSeriesValoradas.innerHTML = contenido;

})
.catch(function(error) {
  console.log("Error: " + error);
});



