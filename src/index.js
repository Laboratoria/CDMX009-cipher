import cipher from './cipher.js';

/* DEFINIENDO LAS VARIABLES */
let paterno = '';
let mes = 0;
let cifrar = document.getElementById('botonCifrar');
let desCifrar = document.getElementById('botonDesCifrar');

/* FUNCION PARA OBTENER LOS DATOS DEL USUARIO */
function obtenerDatos() {
    paterno = document.getElementById('cifrarlo').value;
    mes = parseInt(document.getElementById('movimientos').value);
}

/* FUNCIONES DE CIFRAR Y DESCIFRAR */
cifrar.onclick = function() {
    obtenerDatos(paterno, mes);
    document.getElementById('resultadoCifrado').value = cipher.cifrado(paterno, mes);

    document.getElementById('resultadoCifrado').innerHTML = cipher.cifrado(paterno, mes);
};

desCifrar.onclick = function() {
    obtenerDatos(paterno, mes);
    document.getElementById('resultadoDesCifrado').value = cipher.desCifrado(paterno, mes);

    document.getElementById('resultadoDesCifrado').innerHTML = cipher.desCifrado(paterno, mes);
} 

console.log(cipher);

