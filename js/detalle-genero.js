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

let queryString = location.search;
console.log(queryString)

let queryStringObj = new URLSearchParams(queryString);

let id = queryStringObj.get('id');
console.log(id);

let acaVaLaAPIKey = "ba751b79f4d33c473bf6d1b115cc817d";

let urlgeneroP = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;

fetch(urlgeneroP)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    

})
.catch(function(error) {
  console.log("Error: " + error);
});
