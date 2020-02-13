import cipher from './cipher.js';

let textOrigen = "";
let offset = 0;
let result = "";
// console.log(cipher.encode(2, "ABC"));

function encode() {
    textOrigen = (document.getElementById("ingresaTexto").value).toUpperCase();
    offset = Number.parseInt(document.getElementById("seleccionOffset").value);
    if (textOrigen == "") {
        alert("Por favor ingrese un texto valido.");
    } else if (offset <= 0 || offset == undefined || isNaN(offset)) {
        alert("Por favor ingrese un número valido");

    } else {
        result = cipher.encode(offset, textOrigen);

        document.getElementById("result").value = result;

        document.getElementById("ingresaTexto").value = "";
        document.getElementById("seleccionOffset").value = "";
    }
}

function decode() {
    textOrigen = document.getElementById("ingresaTexto").value;
    offset = Number.parseInt(document.getElementById("seleccionOffset").value);

    result = cipher.decode(offset, textOrigen);

    document.getElementById("result").value = result;

    document.getElementById("ingresaTexto").value = "";
    document.getElementById("seleccionOffset").value = "";
}

window.encode = encode;
window.decode = decode;