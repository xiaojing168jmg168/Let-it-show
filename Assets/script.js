var currWeather = document.querySelector(".current-weather");
var weatherAPIKey = "adf46be5146fd6c70576939f90013837";
var searchForm = document.querySelector("#user-form");
var searchBtn = document.querySelector("#search-btn");


function handleSubmit(event){
    event.preventDefault();
    location.href = "index.html";
    
      
}
searchForm.addEventListener("submit", handleSubmit);
        
