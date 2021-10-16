function showMeal() {
    fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=754f98fa53a74d959067224d575dc742&Type=json&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8531006&MLSV_YMD=20211013`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json);
  });
}


function init() {
    showMeal();
};

init();