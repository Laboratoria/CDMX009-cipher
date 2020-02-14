import cipher from './cipher.js';
console.log(cipher);

function pantalla2(){

document.getElementById("screen1").style.display="none";
document.getElementById("screen2").style.display= "block";
}
document.getElementById("button1").addEventListener("click",pantalla2);

function pantallaInicio(){

  let screen= document.getElementById("screen2");
  screen.style="display:none";
  document.getElementById('screen1').style.display="block";
}
function pantalla3(){

let screen= document.getElementById("screen1");
screen.style="display:none";
document.getElementById("screen3").style.display= "block";
}
function pantallaInicio1(){
let screen= document.getElementById("screen3");
  screen.style="display:none";
document.getElementById('screen1').style.display="block";
}
