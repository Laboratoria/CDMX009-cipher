import cipher from './cipher.js';

// Funciones para el cambio de pantallas

document.getElementById("change").addEventListener("click", segundapantalla);

function segundapantalla() {
    let pantallas = document.getElementById("first-screen");
    pantallas.style = "display:none"; //El valor display: none le dice al navegador que no lo represente; el resultado es que el elemento queda escondido 
    document.getElementById("third-screen").style.display = "block";
}
/*
function segundapantalla () {
    document.querySelector ("#second-screen").style.display = "block";
    document.querySelector ("#first-screen").style.display = "none";

};
*/
// Funciones para botones
let buttonEncode = document.getElementById ("buttonEncode");
let buttonDecode = document.getElementById("buttonDecode");

buttonEncode.addEventListener("click", function(){
    let str = document.getElementById("inputString").value;
    let offset = document.getElementById("productos").value;
    let codeWord = cipher.encode (str,offset);
    document.getElementById ("solved").innerHTML = codeWord;

buttonDecode.addEventListener("click", function(){
    let str = document.getElementById("inputString").value;
    let offset = document.getElementById("productos").value;
    let codeWord = cipher.encode (str,offset);
    document.getElementById ("solved").innerHTML = codeWord;


//globales let offset

// refs
let productos = document.querySelectorAll('.productos')

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