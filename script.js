const API_KEY = "4fc5c967cc2d4ee0943aa17e3a78d7a7",
  API_EDUCODE = localStorage.getItem("key"),
  API_SCHOOLCODE = "8531070",
  menuabc = document.querySelector(".menu"),
  menuabc2 = document.querySelector(".menua"),
  date = new Date();
  dayOfWeek = date.getDay();
  
let API_DATE = "20210319",  
  API_DATE2 = "1",
  menuInfo = 0,
  menuInfo2 = 0;



function getDateInfo(){
  API_DATE =`${date.getFullYear()}${date.getMonth()+1 > 9 ? date.getMonth()+1 : `0${date.getMonth()+1}`}${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() }`;//간소화?
  API_DATE = API_DATE*1;
  API_DATE2 = API_DATE+1;
  console.log(API_DATE2);
  console.log(API_DATE);
  //console.log(dayOfWeek);
  
}

function getMenuAPI(){
  fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${API_KEY}&Type=json&ATPT_OFCDC_SC_CODE=${API_EDUCODE}&SD_SCHUL_CODE=${API_SCHOOLCODE}&MLSV_YMD=${API_DATE}`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    //console.log(json);
    menuInfo = json.mealServiceDietInfo[1].row[0].DDISH_NM;
    console.log(menuInfo);
    
    if (dayOfWeek == 0 || dayOfWeek == 6){
    menuabc.innerHTML = "오늘은 학교 안 가는 날!";
  } else {
    menuabc.innerHTML = menuInfo;
  }
  });
  
}

function getMenuAPI2(){
  
  fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${API_KEY}&Type=json&ATPT_OFCDC_SC_CODE=${API_EDUCODE}&SD_SCHUL_CODE=${API_SCHOOLCODE}&MLSV_YMD=${API_DATE2}`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    //console.log(json);
    menuInfo2 = json.mealServiceDietInfo[1].row[0].DDISH_NM;
    console.log(menuInfo2);
    menuabc2.innerHTML = menuInfo2;
});
}


function init(){
  getDateInfo();
 getMenuAPI();
 getMenuAPI2();
  // //이건 오늘 급식이 없어서...
}


init();



