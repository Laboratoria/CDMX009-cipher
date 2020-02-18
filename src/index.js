import cipher from './cipher.js';

//
let firstScreen = document.getElementById("first-screen");
let secondScreen = document.getElementById("second-screen");
let thirdScreen = document.getElementById("third-screen");
let str = document.getElementById("inputString");

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

/*
function clickCifrar () {
 let resultado = cipher.encode (str.value, 2)
}
 */

//Listeners
document.getElementById("change").addEventListener("click", segundaPantalla);
document.getElementById("change2").addEventListener("click", terceraPantalla);
document.getElementById("chinampalogo").addEventListener("click", primeraPantalla);

//document.getElementById("2").addEventListener("click", clickCifrar);


console.log (offset);

/*
function segundapantalla () {
    document.querySelector ("#second-screen").style.display = "block";
    document.querySelector ("#first-screen").style.display = "none";

};

Funciones para botones
let productos = document.querySelectorAll(".productos");
let buttonEncode = document.getElementById ("buttonEncode");
let buttonDecode = document.getElementById("buttonDecode");

buttonEncode.addEventListener("click", () =>{
    let str = document.getElementById("inputString").value;
    let offset = document.getElementById("productos").value;
    let codeWord = cipher.encode (str,offset);
    document.getElementById ("solved").innerHTML = codeWord;

buttonDecode.addEventListener("click", () =>{
    let str = document.getElementById("inputString").value;
    let offset = document.getElementById("offset").value;
    let codeWord = cipher.encode (str,offset);
    document.getElementById ("solved").innerHTML = codeWord;


// refs

// funciones
function recibeClick(evento){
     // for que recorra productos y les quite la clase active (classList.remove("active"))
    evento.target.classList.add("active")
    offset = evento.target.id
   
}

// funcion para el clic de la palabra


// observadores
productos[0].addEventListener('click',recibeClick)
productos[1].addEventListener('click',recibeClick)
productos[2].addEventListener('click',recibeClick)
productos[3].addEventListener('click',recibeClick)

console.log(cipher);
*/