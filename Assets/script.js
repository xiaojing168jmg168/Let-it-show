var currWeather = document.querySelector(".current-weather");
var weatherAPIKey = "adf46be5146fd6c70576939f90013837";
var searchForm = document.querySelector("#user-form");
var searchBtn = document.querySelector("#search-btn");


function handleSubmit(event){
    event.preventDefault();
    location.href = "index.html";
    
      
}
searchForm.addEventListener("submit", handleSubmit);
        
// var myHeaders = new Headers();
// myHeaders.append("client", "CASE");
// myHeaders.append("x-api-key", "	j25XOEFpKu6Tfx1iQWGZb4NqNhB88bwa8mJYCrYy");
// myHeaders.append("authorization", "Basic Q0FTRTpKblNFeWVodFIzazA=");
// myHeaders.append("territory", "US");
// myHeaders.append("api-version", "v200");
// myHeaders.append("geolocation", "33.7625933;-88.1789098");
// myHeaders.append("device-datetime", "2022-09-25T14:06:21.449Z");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api-gate2.movieglu.com/cinemasNearby/?n=5", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function getLocation(location) {
    fetch(`http://api.positionstack.com/v1/forward?access_key=9f08f8d22fa6d0f7ccebc2af0aee748b&query=${location}&fields=results.latitude,results.longitude`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))};

    console.log(getLocation('vernon,al'))