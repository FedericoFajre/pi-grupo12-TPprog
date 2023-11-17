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

let qs = location.search
let qsObjLit = new URLSearchParams(qs);
let buscar = qsObjLit.get('Buscador');
console.log(buscar);


let url_searchPelis = `https://api.themoviedb.org/3/search/movie/${buscar}?api_key=${acaVaLaAPIKey}`;
fetch(url_searchPelis)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        
       