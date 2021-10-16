const dateabc = new Date(),
  dateA = document.querySelector(".datea");
  dateB = document.querySelector(".dateb");
  dateC = document.querySelector(".datec");

function getDate(){
  console.log(dateabc);
  dateA.innerHTML =`${date.getMonth()+1}월 ${date.getDate()}일`;
  dateC.innerHTML =`${date.getMonth()+1}월 ${date.getDate()}일`;
  dateB.innerHTML =`${date.getMonth()+1}월 ${date.getDate()+1}일`;
}

function init(){
  getDate();  
}

init();