//Ingresar argumentos de Cipher
var str= document.getElementById(inputString).value;
var offset= document.getElementById(offset);

//Cipher
import cipher from './cipher.js';

console.log(cipher);

//Pantallas

//Cambio de pantalla 1 a 2
  function Entrar(){
       document.getElementById("pantallaUno").style.display="none";
       document.getElementById("pantallaDos").style.display="block";
  };
document.getElementById("entrar").addEventListener("click", Entrar());

//Cambio de pantalla 1 a 2
function segundapantalla(){
  var pantallaMostrada= document.getElementById("pantallaUno");
  pantallaMostrada.style= "display:none";
  document.getElementById("pantallaDos").style.display="block";
  };

document.getElementById("entrar").addEventListener("click", segundapantalla());

//Cambio de pantalla 2 a 3
function tercerapantalla(){
  pantallaMostrada= document.getElementById("pantallaDos");
  pantallaMostrada.style= "display:none";
  document.getElementById("pantallaTres").style.display="block";
  };


//Regresar de pantalla 3 a 2
function pantallaUno(){
    pantallaMostrada=document.getElementById("pantallaTres");
    pantallaMostrada.style="display:none";
    document.getElementById("pantallaDos").style.display="block";
  };
document.getElementById("Volver").addEventListener("click", pantallaUno());


//Botones Cifrar y Descifrar
document.getElementById("Cifrar").addEventListener("click", cipher.encode(str, offset));
document.getElementById("Descifrar").addEventListener("click", cipher.decode(str, offset));

//prueba
function Entrar() {
  alert("¡Acá probando!");
}
