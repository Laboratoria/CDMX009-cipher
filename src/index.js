import cipher from './cipher.js';

console.log(cipher);

function segundapantalla() {
    let pantallas = document.getElementById("first-screen");
    pantallas.style = "display:none";
    document.getElementById("second-screen").style.display = "block";
}

document.getElementById("change").addEventListener("click", segundapantalla)