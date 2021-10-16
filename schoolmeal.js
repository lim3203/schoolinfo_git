const API_KEY = "4fc5c967cc2d4ee0943aa17e3a78d7a7",
  API_EDUCODE = localStorage.getItem("key"),
  API_SCHOOLCODE = "8531070",
  HTMLschoolmeal = document.querySelector(".schoolmeal"),
  date = new Date(),
  dayOfWeek = date.getDay(),
  leftBotton = document.querySelector(".left"),
  rightBotton = document.querySelector(".right");
  
let API_DATE = "20210319",
  schoolmealInfo = 0



function getDateInfo(){
  API_DATE =`${date.getFullYear()}${date.getMonth()+1 > 9 ? date.getMonth()+1 : `0${date.getMonth()+1}`}${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() }`;//간소화?
  API_DATE = API_DATE*1;
  console.log(API_DATE);  
}

function getMenuAPI(){
  fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${API_KEY}&Type=json&ATPT_OFCDC_SC_CODE=${API_EDUCODE}&SD_SCHUL_CODE=${API_SCHOOLCODE}&MLSV_YMD=${API_DATE}`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    //console.log(json);
    schoolmealInfo = json.mealServiceDietInfo[1].row[0].DDISH_NM;
    console.log(schoolmealInfo);
    
    if (dayOfWeek == 0 || dayOfWeek == 6){
    HTMLschoolmeal.innerHTML = "오늘은 학교 안 가는 날!";
  } else {
    HTMLschoolmeal.innerHTML = schoolmealInfo;
  }
  });
}

function leftBottonClickHandle() {
  API_DATE -= 1
  console.log(API_DATE);
  getMenuAPI();
}

function rightBottonClickHandle() {
  API_DATE += 1
  console.log(API_DATE);
  getMenuAPI();
}

function init(){
 getDateInfo();
 leftBotton.addEventListener('click', leftBottonClickHandle);
 rightBotton.addEventListener('click', rightBottonClickHandle);
 getMenuAPI();
 
}

init();