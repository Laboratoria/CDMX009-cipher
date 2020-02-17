//import cipher from './cipher.js';
let offset = 0
 
let saveNum = document.querySelector('#botnumber')
let buttonNumber = saveNum.addEventListener('click',saveNumber)

function saveNumber(){
  offset = parseInt(document.getElementById('posiciones').value); //localStorage
  alert("Hola " + offset);
}
 let shootcif = document.querySelector('#botcifrar')
 let buttonEncode = shootcif.addEventListener('click', cifrar)

 let shootdes = document.querySelector('#botdescifrar')
 let buttonDecode = shootdes.addEventListener('click', descifrar)

function cifrar(){
  let string = document.getElementById('cadenacif').value;
  string = string.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    let letterCode = string[i].charCodeAt(0);
    let space = letterCode == 32
    if (letterCode >= 65 && letterCode <= 90) {
    //console.log(letterCode)
    //document.getElementById('resultadocif').innerHTML += letterCode;//Se obtuvo el código Ascii de la cadena ingeresada y se imprimieron
    let newCode = (letterCode - 65 + offset) %26 + 65
    //console.log(newCode)
    console.log(offset)
    let newLetter = String.fromCharCode(newCode)
    document.getElementById('resultadocif').innerHTML += newLetter;
      
    }
    if (space) {
      newCode = (32) %65
      let newLetter = String.fromCharCode(newCode)
      document.getElementById('resultadocif').innerHTML += newLetter;
      
    }

  }
}


 function descifrar(){
  
    let string = document.getElementById('cadenacif').value;
    string = string.toUpperCase();
    for (let i = 0; i < string.length; i++) {
      let letterCode = string[i].charCodeAt(0);
      let space = letterCode == 32
      if (letterCode >= 65 && letterCode <= 90) {
        let newCode = (letterCode + 65 - offset) %26 + 65
      //console.log(newCode);
      console.log(offset);
      let newLetter = String.fromCharCode(newCode);
      document.getElementById('resultadodes').innerHTML += newLetter;
      //console.log(letterCode)
      //document.getElementById('resultadocif').innerHTML += letterCode;//Se obtuvo el código Ascii de la cadena ingeresada y se imprimieron
      }
      if (space) {
      newCode = (32) %65
      let newLetter = String.fromCharCode(newCode);
      document.getElementById('resultadodes').innerHTML += newLetter;
        
      }
      

      
    }
}
//console.log(cipher);

