let secretkey3 = document.getElementById('secretkey1');// almacena valor offset
let textarea4 = document.getElementById('textarea'); // almacena texto cifrado
let textarea5 = document.getElementById('textarea2');//almacena texto a Cifrar

document.getElementById("blissito").onclick = function() {cipher()};
document.getElementById("blissito1").onclick = function() {decipher()};

/*FUNCION CIPHER*/

function cipher(){

  let myStringCipher = ''; // almacenar el valor del string Cifrado
  let myString = textarea5.value;
  let key = secretkey3.value;

  for (let i = 0 ; i < myString.length ; i++){  // recorrer el string del usuario

   let numberOfTheLetter = myString.charCodeAt(i); //numero de la letra en el codigo ASCII
   let cipherFormula; //almacena fórmula de cifrado que se utiliza
   let theNewLetter; // alamacena valor de la nueva letra cifrada
   if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) { // valor UNICODE de letras mayúsculas en ASCII
     cipherFormula = ( numberOfTheLetter - 65 + key) % 26 + 65; // formula de Cifrado Cesar: obtener nuevo numero de letra  en el codigo ASCII
     theNewLetter =  String.fromCharCode(cipherFormula); // obtener el valor de la letra cifrada
     myStringCipher +=theNewLetter; // formar el string cifrado
     textarea4.innerHTML =  myStringCipher;
 }  else
if (numberOfTheLetter >= 97 && numberOfTheLetter <=122) { // valor UNICODE de letras minúsculas en ASCII
     cipherFormula = ( numberOfTheLetter - 97 + key) % 26 + 97; // fórmula de cifrado Cesar
     theNewLetter = String.fromCharCode(cipherFormula); // valor de letra cifrada
     myStringCipher +=theNewLetter; // formar el string cifrado
     textarea4.innerHTML =  myStringCipher;
   }else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
     myStringCipher += ' ';  // añadir espacio en string cifrado
     textarea4.innerHTML =  myStringCipher;
   }
   else {
     break; // Si no es una letra detente
    }
  }
  return myStringCipher;   // Retorna el valor de la cadena cifrada
}

/*FUNCION DECIPHER*/
//funcion para descifrar una cadena de texto
function decipher(){
  let myStringDechiper = ''; // almacenar el valor del string Cifrado
  let myString2 = textarea5.value;
  let key2 = secretkey3.value;

  for(var i = 0; i< myString2.length ; i++){   //recorrer el string del usuario
     let numberOfTheLetter = myString2.charCodeAt(i);  //valor UNICODE de la letra en el código ASCII
     let decipherFormula; //almacena fórmula de decifrado
     let theNewLetter; // almacena el nuevo valor de la letra decifrada
     if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90){  //saber si la letra está en mayúscula
       decipherFormula = ( numberOfTheLetter -13 - key2) % 26 + 65; // formula para descifrar
       theNewLetter = String.fromCharCode(decipherFormula); // obtener el valor de la letra descifrada
       myStringDechiper +=theNewLetter; // formar la cadena descifrada
       textarea4.innerHTML =  myStringDechiper;
     }else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122){ // saber si la letra está en minúscula
       decipherFormula = ( numberOfTheLetter - 45 - key2) % 26 + 97; // formula para descifrar
       theNewLetter = String.fromCharCode(decipherFormula); // obtener el valor de la letra descifrada
       myStringDechiper +=theNewLetter; // formar la cadena descifrada
       textarea4.innerHTML =  myStringDechiper;
     } else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
       myStringDechiper += ' '; // añadir un espacio en string decifrado
       textarea4.innerHTML =  myStringDechiper;
     } else {
       break;
     }
  }
  return myStringDechiper;  // retornar el valor de la cadena decifrada
}
