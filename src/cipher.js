/*
export default cipher;
export default decipher;*/

let secretkey3 = document.querySelector('#secretkey1');// almacena valor offset
let secretkey4 = document.querySelector('#secretkey2');// almacena valor offset
let textarea4 = document.querySelector('#textarea'); // almacena texto cifrado
let textarea5 = document.querySelector('#textarea2');//almacena texto a Cifrar
let textarea6 = document.querySelector('#textarea7'); // almacena texto descifrado
let textarea9 = document.querySelector('#textarea8');//almacena texto a descifrar


document.getElementById("blissito").onclick = function() {cipher()};
document.getElementById("blissito1").onclick = function() {encode()};

/*FUNCION CIPHER*/

function cipher(){
  let myStringCipher = ''; // almacenar el valor del string Cifrado
  let myString = textarea5.value;
  let key1 = secretkey3.value;

  for (var i = 0 ; i < myString.length ; i++){  // recorrer el string del usuario
   let numberOfTheLetter = myString.charCodeAt(i); //numero de la letra en el codigo ASCII
   let cipherFormula; //almacena fórmula de cifrado que se utiliza
   let theNewLetter; // alamacena valor de la nueva letra cifrada
   if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) { // valor UNICODE de letras mayúsculas en ASCII
     cipherFormula = (( (numberOfTheLetter - 65) + parseInt(key1)) % 26) + 65; // formula de Cifrado Cesar: obtener nuevo numero de letra  en el codigo ASCII
     theNewLetter =  String.fromCharCode(cipherFormula); // obtener el valor de la letra cifrada
     myStringCipher +=theNewLetter; // formar el string cifrado
     textarea4.innerHTML =  myStringCipher;

    } else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122) { // valor UNICODE de letras minúsculas en ASCII
     cipherFormula = ((( numberOfTheLetter - 97) + parseInt(key1)) % 26) + 97; // fórmula de cifrado Cesar
     theNewLetter = String.fromCharCode(cipherFormula); // valor de letra cifrada
     myStringCipher +=theNewLetter; // formar el string cifrado
     textarea4.innerHTML =  myStringCipher;

    }else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
     myStringCipher += ' ';  // añadir espacio en string cifrado
   }
   else {
     break; // Si no es una letra detente
    }
  }
  return myStringCipher;   // Retorna el valor de la cadena cifrada
}

/*FUNCION DECIPHER*/
//funcion para descifrar una cadena de texto
function encode(){
  let myStringDechiper = '';  //alamacenar el valor del string decifrado
  let myString = textarea9.value;
  let key2 = secretkey4.value;

  for(var i = 0; i< myString.length ; i++){   //recorrer el string del usuario
     let numberOfTheLetter = myString.charCodeAt(i);  //valor UNICODE de la letra en el código ASCII
     let decipherFormula; //almacena fórmula de decifrado
     let theNewLetter; // almacena el nuevo valor de la letra decifrada
     if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90){  //saber si la letra está en mayúscula
       decipherFormula = ((( numberOfTheLetter -13) - parseInt(key2) ) % 26) + 65; // formula para descifrar
       theNewLetter = String.fromCharCode(decipherFormula); // obtener el valor de la letra descifrada
       myStringDechiper +=theNewLetter; // formar la cadena descifrada
       textarea6.innerHTML =  myStringDechiper;

     }else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122){ // saber si la letra está en minúscula
       decipherFormula = (((numberOfTheLetter - 45) - parseInt(key2)) % 26) + 97; // formula para descifrar
       theNewLetter = String.fromCharCode(decipherFormula); // obtener el valor de la letra descifrada
       myStringDechiper +=theNewLetter; // formar la cadena descifrada
       textarea6.innerHTML =  myStringDechiper;

     } else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
       myStringDechiper += ' '; // añadir un espacio en string decifrado
     } else {
       break;
     }
  }
  return myStringDechiper;  // retornar el valor de la cadena decifrada
}
