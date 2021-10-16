const saveButton = document.querySelector(".save"),
lsTest = document.querySelector(".lsTest"),
school = document.getElementById("shcoolName"),
province = document.getElementById("province-select");
API_KEY = "9ebbd5bf03a048919172eb49571e6131";

let provinceCode = province.options[province.selectedIndex].text,
lsTest_data = "0";

function save(){
    let provinceCode = province.options[province.selectedIndex].value;
    console.log("It's working now!");
    console.log(provinceCode);
    localStorage.setItem("key", provinceCode);

}

function showLS(){
    lsTest_data = localStorage.getItem("key");
    console.log(lsTest_data);
}

function getWeatherData(){
    console.log("weather");
    console.log(API_KEY_W);
    fetch(`https://open.neis.go.kr/hub/schoolInfo?KEY=${API_KEY}TYPE=`)
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
    console.log("hello");
    saveButton.addEventListener("click", save);
    lsTest.addEventListener("click", showLS)

}



init();