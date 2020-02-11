function showAndHide (){
  console.log("entre");
  let screen = document.getElementById("quiz_wrapper");
  screen.style = "display:none";
  document.getElementById('quiz_wrapper2').style.display ="block";


}
document.getElementById("boton").onclick = function() {showAndHide()};


function showAndHide1 (){
  console.log("entre");
  let screen = document.getElementById("quiz_wrapper");
  screen.style = "display:none";
  document.getElementById('quiz_wrapper1').style.display ="block";


}
document.getElementById("boton1").onclick = function() {showAndHide1()};
