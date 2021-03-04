$(document).ready(function () {
  $("p").dblclick(function () {
    $(this).hide("slow");
  });

  $("#red-block").click(function () { 
    let pos = 0;

    setTimeout(function run() {
        slideDown(pos);
        resize(pos);
        pos++;
        if(pos < 100)
        setTimeout(run, 20);
      }, 20);
  });

});



function slideDown(i){
    document.getElementById("red-block").style.marginTop = i+"px";
}


function resize(i){
    i = i + 50;
    document.getElementById("red-block").style.width  = i+"px";
    document.getElementById("red-block").style.height  = i+"px";
}



