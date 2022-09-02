var APIkey = "52b2630cb77a5b300aa52ef84d773ad4";
var city = "houston";


function getWeatherByCity(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    fetch(queryURL)
        .then(function (response) {
            if (!response.ok) {
                throw console.error();
            }
            return response.json();
        })
        .then(function(weather){
            
        })
}

getWeatherByCity(city);