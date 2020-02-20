import cipher from'./cipher.js';

function pantalla2() {
	
document.getElementById('section1').style.display = "none";
document.getElementById('section2').style.display = "block";
}

document.getElementById("boton1").onclick = function () {pantalla2(); };


function pantalla3() {
	document.getElementById("section1").style.display = "none";
	document.getElementById("section3").style.display = "block";
}

document.getElementById("boton2").onclick = function () {pantalla3(); };

//
//
//
//

function codificar(){ //esta es la funcion que dispara lo que hice en js
	let textEncode = document.getElementById("texto1").value;//traes el valor de la caja de texto
        textEncode = textEncode.toUpperCase(); //pasa a mayusculas todo el texto
        let number_offset = document.getElementById("offset").value;//guarda el numero de lugares recorridos
        document.getElementById("cifrado1").innerHTML = cipher.encode(number_offset,textEncode);//manda llamar al objeto al archivo
}

document.getElementById("enter1").addEventListener('click', codificar);
//mandando llamar la funcion con el addEventListener se queda pendiente del evento y no depende del html

function decodificar(){
	
	let textDecode = document.getElementById("text1").value;
        textDecode = textDecode.toUpperCase();
       let number_offset = document.getElementById("offset1").value;
       document.getElementById("cifrado").innerHTML = cipher.decode(number_offset,textDecode);
}

document.getElementById("enter2").addEventListener('click', decodificar);