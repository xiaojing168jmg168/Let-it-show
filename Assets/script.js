var APIKey = "adf46be5146fd6c70576939f90013837";
var searchForm = document.querySelector("#user-form");
var searchBtn = document.querySelector("#search-btn");
var searchCity = document.querySelector("#search-city");
var currWeather = document.querySelector(".current-weather");
var cardHead = document.querySelector(".card-header");
var showMovieTheater = document.querySelector(".show-movie-theater");
var container = document.querySelector(".container");
var footer = document.querySelector(".card-footer");



function saveToLocalAndHandleSubmit(event){


  event.preventDefault();

var city = searchCity.value.trim();
//save city data to local storage
localStorage.setItem('searchedCity', JSON.stringify(city));

  $('body').css('background', '#758798');
cardHead.innerHTML="";
showMovieTheater.innerHTML = "Show Movie Theater";
container.innerHTML="";
var goBackButton = document.createElement("button");
goBackButton.id="go-back";
goBackButton.className="btn";
goBackButton.innerHTML="Go Back";
// //Go back button
// goBackButton.addEventListener("click",function(){
//   booleanValue = false;
// })
footer.appendChild(goBackButton);

//get data from local storage
var searchedCity = JSON.parse(localStorage.getItem('searchedCity'));
  //get city name for weather API
const cityForWeather = searchedCity.split(',')[0];
console.log(cityForWeather);
  getWeather(cityForWeather);

// console.log(getWeather("cleveland"));
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




 function movieAddress(lat,lon){
  var myHeaders = new Headers();
  myHeaders.append("client", "CASE");
  myHeaders.append("x-api-key", "j25XOEFpKu6Tfx1iQWGZb4NqNhB88bwa8mJYCrYy");
  myHeaders.append("authorization", "Basic Q0FTRTpKblNFeWVodFIzazA=");
  myHeaders.append("territory", "US");
  myHeaders.append("api-version", "v200");
  myHeaders.append("geolocation", `${lat};${lon}`);
  myHeaders.append("device-datetime", "2022-09-25T14:06:21.449Z");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api-gate2.movieglu.com/cinemasNearby/?n=5", requestOptions)
    .then(response => response.text())
    .then(function(data){
      console.log(JSON.stringify(data));
      //display the data
      
      for(let i=0; i<5;i++){

      var cinemaInfo = {
      cinemaName: data.cinemas[i].cinema_name,
      cinemaAddress: data.cinemas[i].address
  };
      
      var cinemas = document.createElement("ul");
      var cinema = document.createElement("li");
      cinema[0].setAttribute("style","font-size:20px;color:blue;");
      cinema.innerHTML = cinemaInfo;
  
      cinemas.appendChild(cinema);
      container.appendChild(cinemas);
      
}
})
  .catch(error => console.log('error', error));
}

movieAddress(41.4995,-81.6954);
