const saveButton = document.querySelector(".save"),
lsTest = document.querySelector(".lsTest"),
school = document.getElementById("shcoolName"),
province = document.getElementById("province-select"),
classNumber = document.getElementById("classNumber"),
studentNumber = document.getElementById("studentNumber"),
gradeNumber = document.getElementById("gradeNumber"),
API_KEY = "9ebbd5bf03a048919172eb49571e6131";

let 
provinceCode = "0",
SCHOOL_NAME = "0",
sdSchoolCode = "0",
stGrade = "0",
claNumber = "0",
stNumber = "0",
lsTest_data = "0";

function save(){
    provinceCode = province.options[province.selectedIndex].value;
    claNumber = classNumber.value;
    stNumber = studentNumber.value;
    stGrade = gradeNumber.value;
    console.log("It's working now!");
    console.log(provinceCode);
    SCHOOL_NAME = school.value;
    localStorage.setItem("key", provinceCode);
    localStorage.setItem("STNUM", stNumber);
    localStorage.setItem("CLANUM",claNumber);
    localStorage.setItem("GRADENUM", stGrade);
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