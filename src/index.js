
import cipher from './cipher.js';

document.getElementById("blissito").onclick=function() {cipher()};

//console.log(cipher);*/
/*
import cipher from './cipher.js';
import decipher from './cipher.js';*/

function showAndHide (){

  let screen = document.getElementById("quiz_wrapper");
  screen.style = "display:none";
  document.getElementById('quiz_wrapper2').style.display ="block";
}

document.getElementById("boton").onclick = function() {showAndHide()};


function showAndHide1 (){

  let screen = document.getElementById("quiz_wrapper");
  screen.style = "display:none";
  document.getElementById('quiz_wrapper1').style.display ="block";
}

document.getElementById("boton1").onclick = function() {showAndHide1()};
