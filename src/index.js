//import cipher from './cipher.js';
let offset = 0
function saveNumber(){
  offset = parseInt(document.getElementById('posiciones').value); //localStorage
  alert("Hola " + offset);
}


function cifrar(){
  let string = document.getElementById('cadenacif').value;
  string = string.toUpperCase();
  for (var i = 0; i < string.length; i++) {
    let letterCode = string[i].charCodeAt(0);
    //console.log(letterCode)
    //document.getElementById('resultadocif').innerHTML += letterCode;//Se obtuvo el código Ascii de la cadena ingeresada y se imprimieron
    let newCode = (letterCode - 65 + offset) %26 + 65
    //console.log(newCode)
    console.log(offset)
    let newLetter = String.fromCharCode(newCode)
    document.getElementById('resultadocif').innerHTML += newLetter;
  }
}

 function descifrar(){
  
    let string = document.getElementById('cadenacif').value;
    string = string.toUpperCase();
    for (var i = 0; i < string.length; i++) {
      let letterCode = string[i].charCodeAt(0);
      //console.log(letterCode)
      //document.getElementById('resultadocif').innerHTML += letterCode;//Se obtuvo el código Ascii de la cadena ingeresada y se imprimieron
      let newCode = (letterCode + 65 - offset) %26 + 65
      //console.log(newCode);
      console.log(offset);
      let newLetter = String.fromCharCode(newCode);
      document.getElementById('resultadodes').innerHTML += newLetter;
    }
}
//console.log(cipher);

