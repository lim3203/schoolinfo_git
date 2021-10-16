const API_KEY_W = "7430ba61efe6cd31509dcf372652c131",
CITY_NAME = "naju",
cuWeaText = document.querySelector(".weathertext");


let weatherJson = 0,
currentWeather = 0,
temp = 0,
wind = 0,
fTemp = 0;

function getWeatherData(){
    console.log("weather");
    console.log(API_KEY_W);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY_W}&lang=kr&units=metric`)
    .then(function(response){
        return response.json();
      })
      .then(function(json){
        console.log(json);
       currentWeather = json.weather[0].description;
        console.log(currentWeather);
        cuWeaText.innerHTML = currentWeather;
      });
}

function init(){
    getWeatherData();
}

init();