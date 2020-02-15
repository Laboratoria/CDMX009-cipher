
import cipher from './cipher.js';

let offset = document.querySelector('#secretkey1');// almacena valor offset encode
let offset1 = document.querySelector('#secretkey2');// almacena valor offset decode
let myString = document.querySelector('#textarea2');//almacena texto a Cifrar
let myString1 = document.querySelector('#textarea8');//almacena texto a descifrar



//CLICK CIFRADO
function clickCifrado(){
  let word = cipher.encode(myString.value, offset.value);
  document.getElementById("textarea").innerText= word;

}
document.getElementById("blissito").onclick=function() {clickCifrado()};

//CLICK DESCIFRADO

function clickDescifrado(){
  let word1 = cipher.decode(myString1.value, offset1.value);
  document.getElementById("textarea7").innerText= word1;

}
document.getElementById("blissito1").onclick=function() {clickDescifrado()};

//FUNCIONES DE PANTALLA 1

function showAndHide (){

  let screen = document.getElementById("quiz_wrapper");
  screen.style = "display:none";
  document.getElementById('quiz_wrapper2').style.display ="block";
}

document.getElementById("boton").onclick = function() {showAndHide()};

//FUNCIONES DE PANTALLA 2

function showAndHide1 (){

  let screen = document.getElementById("quiz_wrapper");
  screen.style = "display:none";
  document.getElementById('quiz_wrapper1').style.display ="block";
}

document.getElementById("boton1").onclick = function() {showAndHide1()};
