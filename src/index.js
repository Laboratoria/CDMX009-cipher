//Ingresar argumentos de Cipher NODOSSS
let str= document.getElementById('inputString');
let offset= document.getElementById('offset');
let pantallaInicial= document.getElementById("pantallaUno");
let pantallaSegunda=document.getElementById("pantallaDos");
let pantallaTres=document.getElementById('pantallaTres');
//Cipher
import cipher from './cipher.js';

console.log(cipher);


// functions !!
//Función del botón Cifrar
function clickCifrar(){
  let word = cipher.encode(offset.value, str.value);
  document.getElementById("output").innerText=word;
  pantallaInicial.style="display:none";
  pantallaSegunda.style="display:none";
  pantallaTres.style="display:block";
}
//Función del Botón Descifrar
function clickDescifrar(){
  let word = cipher.decode(offset.value, str.value);
  document.getElementById("output").innerText=word;
  pantallaInicial.style="display:none";
  pantallaSegunda.style="display:none";
  pantallaTres.style="display:block";
}

//Función cambiar de pantalla 1 a 2
function entrar(){
      pantallaInicial.style="display:none";
      pantallaSegunda.style="display:block";
      pantallaTres.style="display:none";
    }

//Función cambiar de pantalla 3 a 2
function volver(){
      document.location.reload(true);
    }

/// listeners
//Botones Cifrar y Descifrar
document.getElementById("Entrar").addEventListener("click", entrar);
document.getElementById("Cifrar").addEventListener("click", clickCifrar);
document.getElementById("Descifrar").addEventListener("click", clickDescifrar);
document.getElementById("Volver").addEventListener("click", volver);
//document.getElementById("Copiar").addEventListener("click", copiar);
