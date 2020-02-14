function pantalla2() {
	
document.getElementById("section1").style.display = "none";
document.getElementById("section2").style.display = "block";
}

document.getElementById("boton1").onclick = function () {pantalla2(); };


function pantalla3() {
	document.getElementById("section1").style.display = "none";
	document.getElementById("section3").style.display = "block";
}

document.getElementById("boton2").onclick = function () {pantalla3(); };

function codificar(){ //esta es la funcion que dispara lo que hice en js
	let textEncode = document.getElementById("texto1").value;//traes el valor de la caja de texto
        textEncode = textEncode.toUpperCase(); //pasa a mayusculas todo el texto
        let number_offset = document.getElementById("offset").value;//guarda el numero de lugares recorridos
        document.getElementById("cifrado1").innerHTML = window.cipher.encode(textEncode, number_offset);//manda llamar al objeto al archivo
}


function decodificar(){
	
	let textDecode = document.getElementById("text1").value;
        textDecode = textDecode.toUpperCase();
       let number_offset = document.getElementById("offset1").value;
       document.getElementById("cifrado").innerHTML = window.cipher.decode(textDecode, number_offset);
}