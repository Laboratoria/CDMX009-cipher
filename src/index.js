import cipher from './cipher.js';
//console.log(cipher);

function pantalla2(){
document.getElementById("screen1").style.display="none";
document.getElementById("screen2").style.display= "block";
let parrafo1 = document.getElementById("resultado1");
let string = document.getElementById("text").value;
let texto = string.toUpperCase();
let offset= document.getElementById('offsetnum').value;
let result= cipher.encode(offset,texto);
console.log(result);
parrafo1.innerHTML=result;
}
document.getElementById("button1").addEventListener("click",pantalla2);

function pantallaInicio(){
document.getElementById("screen2").style.display="none";
document.getElementById('screen1').style.display="block";
}
document.getElementById("volver1").addEventListener("click",pantallaInicio);

function pantalla3(){
document.getElementById("screen1").style.display="none";
document.getElementById("screen3").style.display= "block";
let parrafo2 = document.getElementById("resultado2");
let string2 = document.getElementById("text").value;
let texto2 = string2.toUpperCase();
let offset2= document.getElementById('offsetnum').value;
let result2= cipher.decode(offset2,texto2);
console.log(result2);
parrafo2.innerHTML=result2;
}
document.getElementById("button2").addEventListener("click",pantalla3);

function pantallaInicio1(){
document.getElementById("screen3").style.display ="none";
document.getElementById('screen1').style.display="block";
}
document.getElementById("volver2").addEventListener("click",pantallaInicio1);
