
var APIKey = "adf46be5146fd6c70576939f90013837";
var searchForm = document.querySelector("#user-form");
var searchBtn = document.querySelector("#search-btn");
var goBackBtn = document.querySelector("#go-back");
var searchCity = document.querySelector("#search-city");
var currWeather = document.querySelector(".current-weather");


if(location.pathname === "index.html"){
saveToLocalAndSwitchPage();
getCityFromLocal();
}


function saveToLocalAndSwitchPage(event){
  event.preventDefault();
//click search button to second page
  location.href = "index.html";
//save input data to local when pathname is index.html
var city = searchCity.value.trim();

localStorage.setItem('searchedCity', JSON.stringify(city));
   //clear input after search
    form.reset(); 
}

//get data from local storage
function getCityFromLocal(){
var searchedCity = JSON.parse(localStorage.getItem('searchedCity'));
//get city name for weather API
const cityForWeather = searchedCity.split(',')[0].join();
 getWeather(cityForWeather);
console.log(cityForWeather);
}


if(searchForm){
 searchForm.addEventListener("submit", saveToLocalAndSwitchPage);
}

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
     nameEl.innerHTML= data.name + " (" + currentDay + ")";
     currWeather.appendChild(nameEl);
    
     var currPic = document.createElement("div");
     let weatherIcon = data.weather[0].icon;
     currPic.setAttribute("src",`https://openweathermap.org/img/wn/" ${weatherIcon}"@2x.png`)
     currPic.setAttribute("alt", data.weather[0].description);
     currWeather.appendChild(currPic);
     
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

console.log(getWeather("cleveland"));
//temp from Default: Kelvin to Fahrenheit.
  function kToF(K) {
        return Math.floor((K - 273.15) * 1.8 + 32);
    }