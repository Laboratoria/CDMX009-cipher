//import cipher from './cipher.js';
//console.log(cipher);

//aquí los botones del html
document.getElementById('ir').addEventListener('click',pantalla2)
document.getElementById('bcifrar').addEventListener('click',paraCifrar)
document.getElementById('bdescifrar').addEventListener('click',paraDescifrar)
//función avance de pantalla
function pantalla2() {
  let pantallas = document.getElementById('pantalla1')
  pantallas.style = 'display:none';
  document.getElementById('pantalla2').style.display = 'block';}

//función llamar texto
