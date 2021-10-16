const saveButton = document.querySelector(".save"),
lsTest = document.querySelector(".lsTest"),
school = document.getElementById("shcoolName"),
province = document.getElementById("province-select");
API_KEY = "9ebbd5bf03a048919172eb49571e6131";

let provinceCode = province.options[province.selectedIndex].text,
lsTest_data = "0";

function init(){
    console.log("hello");
    saveButton.addEventListener("click", save);
    lsTest.addEventListener("click", showLS)

}

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



init();