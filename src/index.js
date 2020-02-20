import cipher from './cipher.js';

// Variables
// Variables pantallas
let firstScreen = document.getElementById("inicio-menu");
let secondScreen = document.getElementById("aportaciones");
let thirdScreen = document.getElementById("elegir-aport");
let quarterScreen = document.getElementById("alert-confirm-aport");
let fifthScreen = document.getElementById("cupones-disp");
let sixthScreen = document.getElementById("alert-confirm-cupon");

// Funciones para el cambio de pantallas
function segundaPantalla() {
    firstScreen.style="display:none";
    secondScreen.style="display:block";
    thirdScreen.style="display:none";
}

function terceraPantalla() {
    firstScreen.style="display:none";
    secondScreen.style="display:none";
    thirdScreen.style="display:block";
} 

console.log(cipher);
