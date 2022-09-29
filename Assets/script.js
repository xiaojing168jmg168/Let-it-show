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

scrollToBottom();
scrollToTop();

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

     //get latitude and longitude
     var lon = data.coord.lon;
console.log(lon);
     var lat = data.coord.lat;
console.log(lat);

// movieAddress(lat,lon);
    })
}


//temp from Default: Kelvin to Fahrenheit.
  function kToF(K) {
        return Math.floor((K - 273.15) * 1.8 + 32);
    }
 // construct the url with parameter values
 
 var apikey = "8q66bc7bcvegg9xr7ed7xg6u";

 var baseUrl = "http://data.tmsapi.com/v1.1";

<<<<<<< HEAD
 var showtimesUrl = baseUrl + '/movies/showings';

 var zipCode = `${lat};${lon}`;

 var d = new Date();

 var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();

  

 $(document).ready(function() {

  

   // send off the query

   $.ajax({

    url: showtimesUrl,

        data: { startDate: today,

            zip: zipCode,

            jsonp: "dataHandler",

            api_key: apikey

           },          

    dataType: "jsonp",

   });

 });

  

 // callback to handle the results

 function dataHandler(data) {

  $(document.body).append('<p>Found ' + data.length + ' movies showing within 5 miles of ' + zipCode+':</p>');

  var movies = data.hits;

  $.each(data, function(index, movie) {

    var movieData = '<div class="tile"><img src="http://developer.tmsimg.com/' + movie.preferredImage.uri + '?api_key='+apikey+'"><br/>';

    movieData += movie.title;

    if (movie.ratings) { movieData += ' (' + movie.ratings[0].code + ') </div>' };

    $(document.body).append(movieData);
  });
 };




//  function movieAddress(lat,lon){
//   var myHeaders = new Headers();
//   myHeaders.append("client", "CASE");
//   myHeaders.append("x-api-key", "j25XOEFpKu6Tfx1iQWGZb4NqNhB88bwa8mJYCrYy");
//   myHeaders.append("authorization", "Basic Q0FTRTpKblNFeWVodFIzazA=");
//   myHeaders.append("territory", "US");
//   myHeaders.append("api-version", "v200");
//   myHeaders.append("geolocation", `${lat};${lon}`);
//   myHeaders.append("device-datetime", "2022-09-25T14:06:21.449Z");

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   fetch("https://api-gate2.movieglu.com/cinemasNearby/?n=5", requestOptions)
//     .then(response => response.text())
//     .then(function(data){
//       console.log(JSON.stringify(data));
//       //display the data
      
//       for(let i=0; i<5;i++){

//       var cinemaInfo = {
//       cinemaName: data.cinemas[i].cinema_name,
//       cinemaAddress: data.cinemas[i].address
//   };
      
//       var cinemas = document.createElement("ul");
//       var cinema = document.createElement("li");
//       cinema[0].setAttribute("style","font-size:20px;color:blue;");
//       cinema.innerHTML = cinemaInfo;
  
//       cinemas.appendChild(cinema);
//       container.appendChild(cinemas);
      
// }
// })
//   .catch(error => console.log('error', error));
// }

// movieAddress(41.4995,-81.6954);
=======
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
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});

//scroll down page function
 const element = document.getElementsByTagName("html")
const scrollToBottom = (element) => {
	
   element.scrollTop = element.scrollHeight;
}

const scrollToTop = (element) => {
  
   element.scrollTop = 0;
}
>>>>>>> e4ebcd8205d3130ee3e20c5f3087e820124110fb
