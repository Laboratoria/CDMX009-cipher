import cipher from './cipher.js';


let getBoton = document.getElementById("getBoton");
getBoton.onclick = encode;

function encode() {
    let mensaje = document.getElementById("textBox").value;
    let keyNumber = document.getElementById("numBox").value;
    let newText = cipher.encode(keyNumber, mensaje); 
    document.getElementById("demo").innerHTML = newText;
}

let letBoton = document.getElementById("letBoton");
letBoton.onclick = decode;

function decode() {
    let mensaje = document.getElementById("textBox").value;
    let keyNumber = document.getElementById("numBox").value;
    let texto = cipher.decode(keyNumber, mensaje); 
    document.getElementById("demo").innerHTML = texto;
}
