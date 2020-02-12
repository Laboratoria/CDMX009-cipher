//este es el cambio de pantalla
 function pantalla2() {
   let pantallas = document.getElementById('pantalla1')
   pantallas.style = "display:none";
   document.getElementById('pantalla2').style.display = "block";}

document.getElementById('ir').addEventListener('click',pantalla2);







//esto es lo que ya estaba
//import cipher from './cipher.js'
//console.log(cipher);
