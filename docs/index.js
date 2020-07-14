import cipher from './cipher.js';
let offset = 0
 
let inicio = document.querySelector('#comenzar')
inicio.addEventListener('click', comenzar)

function comenzar(){
  document.getElementById('inicio').classList.add('hide');
  document.getElementById('paso1').classList.remove('hide');

}

let saveNum = document.querySelector('#botnumber')//Se agregó id en el boton de ingresar (botnumber)
saveNum.addEventListener('click',saveNumber) //Al dar click en el boton se ejecuta la func saveNumber

function saveNumber(){
  offset = parseInt(document.getElementById('posiciones').value);
  document.getElementById('paso1').classList.add('hide');
  document.getElementById('paso2').classList.remove('hide');

  //alert("Hola " + offset);
}
 let shootcif = document.querySelector('#botcifrar')
 shootcif.addEventListener('click', cifrar)

 let shootdes = document.querySelector('#botdescifrar')
 shootdes.addEventListener('click', descifrar)

function cifrar(){
  let string = document.getElementById('cadenacif').value;
  string = string.toUpperCase();
  let resultado = cipher.cifrar(string, offset); //Para traer el resultado de la función en cipher.js
  //console.log(resultado)
  document.getElementById('resultadocif').innerHTML += resultado;
  document.getElementById('paso2').classList.add('hide');
  document.getElementById('paso3').classList.remove('hide');
      
}
    

function descifrar(){
  let string = document.getElementById('cadenacif').value;
  string = string.toUpperCase();
  let resultado = cipher.descifrar(string, offset)
  //console.log(resultado)
  document.getElementById('resultadocif').innerHTML += resultado;
  document.getElementById('paso2').classList.add('hide');
  document.getElementById('paso3').classList.remove('hide');
  
}
//console.log(cipher);

