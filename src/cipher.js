const cipher = {
  // ...
};

export default cipher;

const cipher = {
  // ...
};

export default cipher;
const cipher ={code,decode};

function encode() {
  let usuario = document.getElementById("nombre-example").value;
  console.log (usuario.length);//es el valor de offset para mi variable//
let cifrada ="";

for (var i = 0 ; i < usuario.length ; i++){
let asciiNum = str.charCodeAt(i);

cipherWord = (asciiNum-65+parseInt(usuario))%26+65;

cifrada += String.fromCharCode(cipherWord)

}
  return solved;

function decode(){
let descifrar ='';  //alamacenar el valor del string decifrado

for (let i=0; i < usuario.length; i++) {

let asciiNum = str.charCodeAt(i);

decipherWord = (asciiNum +65 - parseInt(usuario))%26+ 65;

descifrada += String.fromCharCode(decipherWord)

 }
return(solved);
