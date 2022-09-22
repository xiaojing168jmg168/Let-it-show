fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


  var settings = {
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
    "method": "GET",
    "timeout": 0,
    "headers": {
    "api-version": "v200",
    "Authorization": "Basic A1B2c3D4E5f6H7I8j911M12=",
    "client": "ABCD",
    "x-api-key": "IyrBUDT7CuTTc6LH45mI5aAoG8",
    "device-datetime": "2020-06-18T12:07:57.296Z",
    "territory": "UK",
    },
    };
    
    $.ajax(settings).done(function (response) {
    console.log(response);
    });