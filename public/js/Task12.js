$(document).ready(function () {

var time = document.getElementById("task-12-time");
var newDateObj = new Date(new Date().getTime() + 20*60000);

time.min = (newDateObj.getHours()<10?'0':'') + newDateObj.getHours() + ":" +  (newDateObj.getMinutes()<10?'0':'') + newDateObj.getMinutes()

time.value =  (newDateObj.getHours()<10?'0':'') + newDateObj.getHours() + ":" +  (newDateObj.getMinutes()<10?'0':'') + newDateObj.getMinutes();

var modal = document.getElementById("task-12-form");

var btn = document.getElementById("task12-btn");

var span = document.getElementById("task12-close");

document.getElementById("task-11-1-input").innerHTML = "Hello World!"; 

console.log("55-111.Аа".match("/[2-6]{1,}-\d{3}\.[а-я]+/i"))

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
update()
$(".task12-input").change(function(){
    update();
});

$("#task-12-drink-val").change(function(){
  let tem = document.getElementById("task-12-drink-val").value;
  document.getElementById("task-12-drink-val").value = tem.replace(",",".");
})

function update() {
    let sum = 0;
    sum += Number(document.getElementById("task-12-city").value);

    if(document.getElementById("task-12-pod").checked){
        sum+=30;
    }
    if(document.getElementById("task-12-kvat").checked){
        sum+=35;
    }

    if(document.getElementById("task-12-s1").checked){
        sum+=40;
    }
    if(document.getElementById("task-12-s2").checked){
        sum+=50;
    }
    if(document.getElementById("task-12-s3").checked){
        sum+=60;
    }
    if(document.getElementById("task-12-s4").checked){
        sum+=70;
    }
    if(document.getElementById("task-12-s5").checked){
        sum+=80;
    }
    if(document.getElementById("task-12-kk").checked){
      sum*=0.95;
  }
    sum*=Number(document.getElementById("task-12-oplata").value);
    sum+= parseFloat(document.getElementById("task-12-drink-val").value.replace(",","."))*20;
    document.getElementById("task-12-sum").innerHTML = "Сумма:$" + sum 
  }

});