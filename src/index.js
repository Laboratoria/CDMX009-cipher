//import cipher from './cipher.js';

//console.log(cipher);






function segundapantalla() {
    let pantallas = document.getElementById("pantallaUno")
    pantallas.style = "display:none";
    document.getElementById("pantallaDos").style.display = "block";
}


document.getElementById('ir').addEventListener('click', segundapantalla);

