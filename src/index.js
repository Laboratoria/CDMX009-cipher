//import cipher from './cipher.js';

function saveNumber(){
  offset = parseInt(document.getElementById('posiciones').value); //localStorage
  alert("Hola " + offset);


}

function cifrar(){
  var string = document.getElementById('cadenacif').value;

  //let newString = code(string,offset)

  string = string.toUpperCase();
  for (var i = 0; i < string.length; i++) {
    var letterCode = string[i].charCodeAt(0);
    //console.log(letterCode)
    document.getElementById('resultadocif').innerHTML += letterCode;
    
  }
  //var posAscii = string.charCodeAt(0); //Cambiar posAscii por letterCode
  
  
  

}
//console.log(cipher);



  