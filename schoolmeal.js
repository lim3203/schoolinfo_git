const API_KEY = "4fc5c967cc2d4ee0943aa17e3a78d7a7",
  API_EDUCODE = localStorage.getItem("key"),
  API_SCHOOLCODE = localStorage.getItem("SDCODE"),
  stGrade = localStorage.getItem("GRADENUM"),
  claNumber = localStorage.getItem("CLANUM"),
  subTitle =  document.querySelector(".subTitle"),
  HTMLschoolmeal = document.querySelector(".schoolmeal"),
  date = new Date(),
  leftButton = document.querySelector(".left"),
  rightButton = document.querySelector(".right");
  
let API_DATE = "20210319",
  schoolmealInfo = 0,
  koScName = '0',
  dayOfWeek = ''

function getDateInfo(){
  API_DATE =`${date.getFullYear()}${date.getMonth()+1 > 9 ? date.getMonth()+1 : `0${date.getMonth()+1}`}${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() }`;
}

function to_date(date_str)
{
    var yyyyMMdd = String(date_str);
    var sYear = yyyyMMdd.substring(0,4);
    var sMonth = yyyyMMdd.substring(4,6);
    var sDate = yyyyMMdd.substring(6,8);

    return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
}

function weekendCheck(date){
  console.log(to_date(date))
  const day = to_date(date).getDay()
  if  (day == 0 || day == 6){
    return true;
  } else {
    console.log(day)
    return false;
  }
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
      if (weekendCheck(API_DATE)) {
        HTMLschoolmeal.innerHTML = '주말입니다!'
      } else {
        HTMLschoolmeal.innerHTML = `${e.name}:<br>급식 정보를 불러오지 못했습니다 :(`;
      }
    }
  });
}

function leftBottonClickHandle() {
  API_DATE = Number(API_DATE) - 1
  console.log(`date = ${API_DATE}`);
  getMenuAPI();
}

function rightBottonClickHandle() {
  API_DATE = Number(API_DATE) + 1
  console.log(`date = ${API_DATE}`);
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
