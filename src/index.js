var str= document.getElementById(inputString).value;
var offset= document.getElementById(offset);

import cipher from './cipher.js';

console.log(cipher);

function segundapantalla(){
  var pantallaMostrada= document.getElementById("pantallaUno");
  pantallaMostrada.style= "display:none";
  document.getElementById("pantallaDos").style.display="block";
};

function tercerapantalla(){
  pantallaMostrada= document.getElementById("pantallaUno");
  pantallaMostrada.style= "display:none";
  document.getElementById("pantallaTres").style.display="block";
};

function pantallaUno(){
    pantallaMostrada=document.getElementById("pantallaTres");
    pantallaMostrada.style="display:none";
    document.getElementById("pantallaUno").style.display="block";
};

document.getElementById("Cifrar").addEventListener("click", cipher.encode(str, offset));
;
document.getElementById("Descifrar").addEventListener("click", cipher.decode(str, offset));
document.getElementById("Entrar").addEventListener("click", segundapantalla);
document.getElementById("Volver").addEventListener("click", primerapantalla);
