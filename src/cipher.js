const cipher = {
  encode,
  decode
};
export default cipher;

<<<<<<< HEAD
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
=======
function encode(txtToEncode, offset) {
  let txtEncoded = "";
  for (let i = 0; i < txtToEncode.length; i++) {
    let asciiNum = txtToEncode.charCodeAt(i);
    if (asciiNum >= 65 && asciiNum <= 90){
      let asciiNumEncoded = (asciiNum-65+parseInt(offset))%26+65;
      txtEncoded += String.fromCharCode(asciiNumEncoded); 
    } else {
      console.log("Error: Sólo se aceptan mayúsculas");
      throw new TypeError;
    }
  }

  return(txtEncoded);
}

function decode(txtToDecode, offset) {
  let txtDecoded = "";
  for (let i = 0; i < txtToDecode.length; i++){
    let asciiNum = txtToDecode.charCodeAt(i);
    if (asciiNum >= 65 && asciiNum <= 90){
      let asciiNumDecoded = (asciiNum-65+parseInt(offset))%26+65;
      txtDecoded += String.fromCharCode(asciiNumDecoded); 
    } else {
      console.log("Error: Sólo se aceptan mayúsculas");
      throw new TypeError;
    }
  }

  return(txtDecoded);
}
>>>>>>> 811bba86ab34348dd6601ba767648281b1f87446
