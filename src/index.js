import cipher from './cipher.js';

//
let firstScreen = document.getElementById("first-screen");
let secondScreen = document.getElementById("second-screen");
let thirdScreen = document.getElementById("third-screen");
let hortaliza = document.getElementById("hortaliza");
/*
let bolsa = document.getElementById("bolsa");
let botellas = document.getElementById("botellas");
let chinampa = document.getElementById("chinampa");
let finalWord = document.getElementById("finalWord");
*/


// Funciones para el cambio de pantallas

function segundaPantalla() {
    firstScreen.style="display:none";
    secondScreen.style="display:block";
    thirdScreen.style="display:none";
}

function terceraPantalla() {
    firstScreen.style="display:none";
    secondScreen.style="display:none";
    thirdScreen.style="display:block";
} 

function primeraPantalla() {
    firstScreen.style="display:block";
    secondScreen.style="display:none";
    thirdScreen.style="display:none";
} 

function hortalizaEn () {
    let str = document.getElementById("inputString").value;
    let offset = document.getElementById("hortaliza").value;
    let finalWord = cipher.encode (str,offset); 
    document.getElementById ("solved").innerHTML = finalWord;
}


//Listeners
document.getElementById("change").addEventListener("click", segundaPantalla);
document.getElementById("change2").addEventListener("click", terceraPantalla);
document.getElementById("chinampalogo").addEventListener("click", primeraPantalla);
document.getElementById("chinampalogo2").addEventListener("click", primeraPantalla);
document.getElementById("buttonEncode").addEventListener("click", hortalizaEn);


console.log (offset);


console.log(cipher);