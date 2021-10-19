const API_KEY_Weather = "7430ba61efe6cd31509dcf372652c131",
CITY_NAME = "naju",
Atemp = document.querySelector(".temp"),
HTMLWeather = document.querySelector(".JSweather");


let weatherJson = 0,
currentWeather = 0,
temp = 0,
wind = 0,
nTemp = 0;

function getWeatherData(){
    console.log("weather");
    console.log(API_KEY_Weather);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY_Weather}&lang=kr&units=metric`)
    .then(function(response){
        return response.json();
      })
      .then(function(json){
        console.log(json);
       currentWeather = json.weather[0].description;
       nTemp = json.main.temp;
       console.log(nTemp);
       Atemp.innerHTML = nTemp +' °C';
        console.log(currentWeather);
        HTMLWeather.innerHTML = currentWeather;
      });
}

function init(){
    getWeatherData();
}

init();