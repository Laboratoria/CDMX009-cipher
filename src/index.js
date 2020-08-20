import cipher from './cipher.js';

let buttoncifrar = document.getElementById("cifrar");
let buttondescifrar = document.getElementById("descifrar");
let buttoncomprar = document.getElementById("comprar");

buttoncifrar.onclick = function() {
    cipher.encode();
}
buttondescifrar.onclick = function() {
    cipher.decode();
}
buttoncomprar.onclick = function() {
    alert("No hay entradas disponibles");
}