const saveButton = document.querySelector(".save"),
    school = document.getElementById("shcoolName"),
    province = document.getElementById("province-select"),
    classNumber = document.getElementById("classNumber"),
    gradeNumber = document.getElementById("gradeNumber"),
    API_KEY = "9ebbd5bf03a048919172eb49571e6131";

let 
    provinceCode = "0",
    SCHOOL_NAME = "0",
    sdSchoolCode = "0",
    stGrade = "0",
    claNumber = "0";

function save(){
    provinceCode = province.options[province.selectedIndex].value;
    claNumber = classNumber.value;
    stGrade = gradeNumber.value;
    console.log("It's working now!");
    console.log(provinceCode);
    SCHOOL_NAME = school.value;
    localStorage.setItem("krScName", SCHOOL_NAME);
    localStorage.setItem("key", provinceCode);
    localStorage.setItem("CLANUM",claNumber);
    localStorage.setItem("GRADENUM", stGrade);
    getSchoolCode();
    
    //alert("학교 정보가 저장되었을까요 :D");
}




function getSchoolCode(){
    console.log(SCHOOL_NAME);
    fetch(`https://open.neis.go.kr/hub/schoolInfo?KEY=${API_KEY}&TYPE=json&ATPT_OFCDC_SC_CODE=${localStorage.getItem("key")}&SCHUL_NM=${SCHOOL_NAME}`)
    .then(function(response){
        return response.json();
      })
      .then(function(json){
          try {
            console.log(json.RESULT.MESSAGE);
              alert("학교 정보가 저장되지 않았어요");
          } catch (err) {
         
        console.log(json);
         sdSchoolCode = json.schoolInfo[1].row[0].SD_SCHUL_CODE;
         localStorage.setItem("SDCODE", sdSchoolCode);
         console.log(sdSchoolCode);
         SCHOOL_NAME = "음";
         console.log(sdSchoolCode);
         saveAlert();
      };
    }
      );
}

function saveAlert(){
    if ((sdSchoolCode === 0)) {
        alert("학교 정보가 저장되지 않았어요 :(");
        sdSchoolCode = "0";
    } else if((sdSchoolCode == 7010057)) {
        alert("학교 정보가 저장되지 않았어요 :(");
    } else {
        alert("학교 정보가 저장되었어요 :D");
        sdSchoolCode = "0";
    }
}

function init(){
    console.log("hello");
    saveButton.addEventListener("click", save);
}



init();