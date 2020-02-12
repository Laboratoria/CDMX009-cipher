//import cipher from './cipher.js';
//
//console.log(cipher);//no mover 

//CAMBIO DE PANTALLAS 
//pantalla 1

function pantalla2() {
	
document.getElementById("section1").style.display = "none";
document.getElementById("section2").style.display = "block";
}

document.getElementById("boton1").onclick = function () {pantalla2(); };


function pantalla3(){
	document.getElementById("section1").style.display = "none";
	document.getElementById("section3").style.display = "block";
}

document.getElementById("boton2").onclick = function() {pantalla3(); };

//volver pantalla 2

function volver1