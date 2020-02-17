let buttoncifrar = document.getElementById("cifrar");
let buttondescifrar = document.getElementById("descifrar");
let buttoncomprar = document.getElementById("comprar");

buttoncifrar.onclick = function() {
    cifrar();
}
buttondescifrar.onclick = function() {
    descifrar();
}
buttoncomprar.onclick = function() {
    alert("No hay entradas disponibles");
}