//import cipher from './cipher.js';

function saveNumber(){
  offset = parseInt(document.getElementById('posiciones').value); //localStorage
  alert("Hola " + offset);


}

function cifrar(){
  var string = document.getElementById('cadenacif').value;

  //let newString = code(string,offset)


  string = string.toUpperCase();
  var posAscii = string.charCodeAt(0);
  
  //var formula = (posAscii - 65 + offset) %26 + 65;
  document.getElementById('resultadocif').innerHTML = posAscii;

}
//console.log(cipher);



  