var APIKey = "adf46be5146fd6c70576939f90013837";
var searchForm = document.querySelector("#user-form");
var searchBtn = document.querySelector("#search-btn");
var searchCity = document.querySelector("#search-city");
var currWeather = document.querySelector(".current-weather");
var cardHead = document.querySelector(".card-header");
var showMovieTheater = document.querySelector(".show-movie-theater");
var movieForm=document.querySelector("#movie-form");

var footer = document.querySelector(".card-footer");

var moviesApiKey = "974257a59529a643b1516d5cebdd63c2";
var container = document.querySelector(".container");

var search = document.querySelector("#search");




//click search city button
function saveToLocalAndHandleSubmit(event){

  event.preventDefault();

var city = searchCity.value.trim();
//save city data to local storage
localStorage.setItem('searchedCity', JSON.stringify(city));

  $('body').css('background', '#758798');
cardHead.innerHTML="";
showMovieTheater.innerHTML = "Search Movies";
 $('#hideform').show();
searchForm.innerHTML=""
// container.innerHTML="";

showMovies(apiUrl);
//get data from local storage
var searchedCity = JSON.parse(localStorage.getItem('searchedCity'));
  //get city name for weather API
const cityForWeather = searchedCity.split(',')[0];
console.log(cityForWeather);
  getWeather(cityForWeather);

// scrollToBottom();
// scrollToTop();

}


searchForm.addEventListener("submit", saveToLocalAndHandleSubmit);




//get weather function

function getWeather(searchValue){


 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${APIKey}&cnt=5`) 

  .then(function(response){
    return response.json();
    })
    .then(function(data){
    console.log(JSON.stringify(data));
   

    var currentDay = moment().format('L');
    console.log(currentDay);
    
    //displya current date weather
     var nameEl = document.createElement("div");
     nameEl.className="name-date";
     nameEl.innerHTML= data.name + " " + currentDay;
     currWeather.appendChild(nameEl);
    
     var img = document.createElement("img");
     img.id="curr-pic"
     let weatherIcon = data.weather[0].icon;
     img.setAttribute("src","https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png")
     img.setAttribute("alt", data.weather[0].description);
     currWeather.appendChild(img);
     
     var currTempEl = document.createElement("div");
     currTempEl.innerHTML = `Temperature: ${kToF(data.main.temp)}°F`;
     currWeather.appendChild(currTempEl);
     
     var currHumEl = document.createElement("div");
     currHumEl.innerHTML = `Humidity: ${data.main.humidity}%`;
    currWeather.appendChild(currHumEl);

      var currWindEl = document.createElement("div");
     currWindEl.innerHTML = `Wind Speed: ${data.wind.speed}MPH`;
     currWeather.appendChild(currWindEl);

    })
}


//temp from Default: Kelvin to Fahrenheit.
  function kToF(K) {
        return Math.floor((K - 273.15) * 1.8 + 32);
    }


// movie API information.
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=974257a59529a643b1516d5cebdd63c2';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=974257a59529a643b1516d5cebdd63c2&query=";

function showMovies(apiUrl){
    fetch(apiUrl).then(res => res.json())
    .then(function(data){
console.log(data);
    data.results.forEach(element => {
      // Creating elemnts for our data inside the container  
     
        const el = document.createElement('div');
        el.id = "movie-item";
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
    
        container.appendChild(el);
    }); 
});
}

//submit search input
movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
     
    const searchTerm = search.value.trim();

    if (searchTerm) {
        container.innerHTML="";
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});


