
function cipher () {
  let myStringCipher = ''; //guardara el mensaje cifrado
  let myString = message.value;
  let offset = position.value; 

 for (let i=0; i < myString.length; i++){//Recorrerá el string
 let codeAscii = myString.charCodeAt(i);//numero de letra Ascci ----->>ERROR 
 let cipherFormula; //almacena formula
 let theNewLetter; //almacena el valor de nueva letra cifrada

   if (codeAscci >= 65 && codeAscii <= 90){ //Valor en Ascci
    cipherFormula = ((codeAscci - 65) + parseInt (offset) % 26) + 65; //La formula obtiene nuevo numero de letra
    theNewLetter = String.fromCharCode(cipherFormula); //obtiene el valor de letra cifrada
    myStringCipher += theNewLetter; //Con la suma forma el string cifrado

   }
  }

  return myStringCipher; //Retorna el valor de la cadena
};

export default cipher; 
