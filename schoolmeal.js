const API_KEY = "4fc5c967cc2d4ee0943aa17e3a78d7a7",
  API_EDUCODE = localStorage.getItem("key"),
  API_SCHOOLCODE = localStorage.getItem("SDCODE"),
  stNumber = localStorage.getItem("STNUM"),
  stGrade = localStorage.getItem("GRADENUM"),
  claNumber = localStorage.getItem("CLANUM"),
  subTitle =  document.querySelector(".subTitle"),
  HTMLschoolmeal = document.querySelector(".schoolmeal"),
  date = new Date(),
  dayOfWeek = date.getDay(),
  leftButton = document.querySelector(".left"),
  rightButton = document.querySelector(".right");
  
let API_DATE = "20210319",
  schoolmealInfo = 0,
  koScName = '0',
  menuInfo2 = 0;




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
    try {
      schoolmealInfo = json.mealServiceDietInfo[1].row[0].DDISH_NM;
      console.log(schoolmealInfo);
      HTMLschoolmeal.innerHTML = schoolmealInfo;
    } catch (e) {
      HTMLschoolmeal.innerHTML = `${e.name}: 급식 정보를 불러오지 못했습니다 :(`;
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
 leftButton.addEventListener('click', leftBottonClickHandle);
 rightButton.addEventListener('click', rightBottonClickHandle);
 getMenuAPI();
 koScName = localStorage.getItem("krScName");
 subTitle.innerHTML = koScName;
 console.log(koScName);
}

init();
