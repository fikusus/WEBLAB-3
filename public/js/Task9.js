let risnull = $("#R-is-null");
let rsmnull = $("#R-smaller-null");
let lisnull = $("#l-is-null");
let lsmnull = $("#l-smaller-null");
reset();
$("#info").hide();
document
  .getElementById("calculateBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let isAllOk = true;
    reset();


    let Rp = document.getElementById("Rk");
    let Lp = document.getElementById("lk");

    let R = Rp.value;
    let L = Lp.value;
    console.log(R + " " + L);

    if (R === "") {
      risnull.toggle();
      Rp.style = "border-color:red";
      isAllOk = false;
    } else {
      if (R <= 0) {
        isAllOk = false;
        Rp.style = "border-color:red";
        rsmnull.toggle();
      }
    }

    if (L === "") {
      isAllOk = false;
      lisnull.toggle();
      Lp.style = "border-color:red";
    } else {
      if (L <= 0) {
        isAllOk = false;
        Lp.style = "border-color:red";
        lsmnull.toggle();
      }
    }

    console.log(isAllOk);
    if (isAllOk) {
      let result = 3.14 * R * L + 3.14 * R * R;
      reset();
      alert("Площа конусу:" + result);
    }
  });

document
  .getElementById("calculateBtnClear")
  .addEventListener("click", function (event) {
    reset();
  });


  document
  .getElementById("added-info")
  .addEventListener("click", function (event) {
    $("#info").toggle();
  });


function reset() {
  risnull.hide();
  rsmnull.hide();
  lisnull.hide();
  lsmnull.hide();

  let Rp = document.getElementById("Rk");
  let Lp = document.getElementById("lk");

  Rp.style = "";
  Lp.style = "";
}
