import cipher from './cipher.js';

/* DEFINIENDO LAS VARIABLES */
let offset = 0;
let string = '';
let cifrar = document.getElementById('botonCifrar');
let desCifrar = document.getElementById('botonDesCifrar');

/* FUNCION PARA OBTENER LOS DATOS DEL USUARIO */
function obtenerDatos() {
    offset = parseInt(document.getElementById('movimientos', 10).value);
    string = document.getElementById('cifrarlo').value;
}

/* FUNCIONES DE CIFRAR Y DESCIFRAR */
cifrar.onclick = function() {
    obtenerDatos(offset, string);
    document.getElementById('resultadoCifrado').value = cipher.encode(offset, string);

    document.getElementById('resultadoCifrado').innerHTML = cipher.encode(offset, string);
};

desCifrar.onclick = function() {
    obtenerDatos(offset, string);
    document.getElementById('resultadoDesCifrado').value = cipher.decode(offset, string);

    document.getElementById('resultadoDesCifrado').innerHTML = cipher.decode(offset, string);
};

console.log(cipher);

