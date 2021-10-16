const saveButton = document.querySelector(".save"),
lsTest = document.querySelector(".lsTest"),
school = document.getElementById("shcoolName"),
province = document.getElementById("province-select");
API_KEY = "9ebbd5bf03a048919172eb49571e6131";

let provinceCode = province.options[province.selectedIndex].text,
SCHOOL_NAME = "0",
sdSchoolCode = "0",
lsTest_data = "0";

function save(){
    let provinceCode = province.options[province.selectedIndex].value;
    console.log("It's working now!");
    console.log(provinceCode);
    SCHOOL_NAME = school.value;
    localStorage.setItem("key", provinceCode);
    getSchoolCode();
}

function showLS(){
    lsTest_data = localStorage.getItem("key");
}

function getSchoolCode(){
    console.log(lsTest_data);
    console.log(SCHOOL_NAME);
    fetch(`https://open.neis.go.kr/hub/schoolInfo?KEY=${API_KEY}&TYPE=json&ATPT_OFCDC_SC_CODE=${localStorage.getItem("key")}&SCHUL_NM=${SCHOOL_NAME}`)
    .then(function(response){
        return response.json();
      })
      .then(function(json){
        console.log(json);
         sdSchoolCode = json.schoolInfo[1].row[0].SD_SCHUL_CODE;
         localStorage.setItem("SDCODE", sdSchoolCode);
         console.log(sdSchoolCode);
      });
}


function init(){
    console.log("hello");
    saveButton.addEventListener("click", save);
    lsTest.addEventListener("click", showLS)

}



init();