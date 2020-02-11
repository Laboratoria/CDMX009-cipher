


//trayendo variables de DOM
//let secretkey1 = document.querySelector('#secretkey1');//texto a cifrar

let secretkey3 = document.getElementById('secretkey1');// almacena valor offset
let textarea4 = document.getElementById('textarea'); // almacena texto cifrado
let textarea5 = document.getElementById('textarea2');//almacena texto a Cifrar
//let myString1 = document.getElementById('textarea2');


//document.getElementById("demo").onclick = function() {myFunction()};
//document.getElementById("blissito").onclick = function() {cipher()};
//let button = document.getElementById('blissito');
/*
button.onclick = function(){

}*/
document.getElementById("blissito").onclick = function() {cipher()};




//document.getElementById('blissito').addEventListener('click',cipher(myString1));
/*
button.onclick = function(){
document.getElementById('textarea') = document.getElementById("blissito").onclick = function() {cipher()};
}

*/
function cipher(){
  let myStringCipher = ''; // almacenar el valor del string Cifrado
  let myString = textarea5.value;
  let key = secretkey3.value;
//let secretkey1='3';

  for (let i = 0 ; i < myString.length ; i++){  // recorrer el string del usuario

   let numberOfTheLetter = myString.charCodeAt(i); //numero de la letra en el codigo ASCII
   let cipherFormula; //almacena fórmula de cifrado que se utiliza
   let theNewLetter; // alamacena valor de la nueva letra cifrada
   if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) { // valor UNICODE de letras mayúsculas en ASCII
     cipherFormula = ( numberOfTheLetter - 65 + key) % 26 + 65; // formula de Cifrado Cesar: obtener nuevo numero de letra  en el codigo ASCII
     theNewLetter =  String.fromCharCode(cipherFormula); // obtener el valor de la letra cifrada
     myStringCipher +=theNewLetter; // formar el string cifrado


console.log("Texto cifrado es:",myStringCipher);

	textarea4.innerHTML =  myStringCipher;
//	document.getElementById("textarea").innerHTML =  myStringCipher;
console.log ("offset",key);
console.log ("numero",numberOfTheLetter);
console.log ("ciphergfor",cipherFormula);
console.log("letra nueva",theNewLetter);
console.log("LEtra a cifrar:",myString);
//	document.getElementById("textarea").innerHTML =  myStringCipher;

}  else
if (numberOfTheLetter >= 97 && numberOfTheLetter <=122) { // valor UNICODE de letras minúsculas en ASCII
     cipherFormula = ( numberOfTheLetter - 97 + key) % 26 + 97; // fórmula de cifrado Cesar
     theNewLetter = String.fromCharCode(cipherFormula); // valor de letra cifrada
     myStringCipher +=theNewLetter; // formar el string cifrado
   }else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
     myStringCipher += ' ';  // añadir espacio en string cifrado

   }
   else {
     break; // Si no es una letra detente
    }
  }
  return myStringCipher;   // Retorna el valor de la cadena cifrada

}
