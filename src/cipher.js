const cipher = {encode,decode};

export default cipher;

function encode(offset,myString){
  var myStringCipher = '';
  //if(typeof(myString)!='string'){
  //  throw new TypeError('');
  //}
  for (var i = 0 ; i < myString.length ; i++){
   var numberOfTheLetter = myString.charCodeAt(i);
   var cipherFormula;
   var theNewLetter;
   if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {
     cipherFormula = ( numberOfTheLetter - 65 + parseInt(offset)) % 26 + 65;
     theNewLetter =  String.fromCharCode(cipherFormula);
     myStringCipher +=theNewLetter;
   } else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122) {
     cipherFormula = ( numberOfTheLetter - 97 + parseInt(offset)) % 26 + 97;
     theNewLetter = String.fromCharCode(cipherFormula);
     myStringCipher +=theNewLetter;
   }else if(numberOfTheLetter === 32){
     myStringCipher += ' ';
   }
   else {
    //return throw new TypeError('');
    }
  }
  return myStringCipher;
}

//funcion para descifrar una cadena de texto
function decode(offset1,myString1){
  var myStringDechiper ='';
  for(var i = 0; i< myString1.length ; i++){
     var numberOfTheLetter = myString1.charCodeAt(i);
     var decipherFormula;
     var theNewLetter;
     if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90){
       decipherFormula = ( numberOfTheLetter -13 - parseInt(offset1)) % 26 + 65;
       theNewLetter = String.fromCharCode(decipherFormula);
       myStringDechiper +=theNewLetter;
     }else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122){
       decipherFormula = ( numberOfTheLetter - 45 - parseInt(offset1)) % 26 + 97;
       theNewLetter = String.fromCharCode(decipherFormula);
       myStringDechiper +=theNewLetter;
     } else if(numberOfTheLetter === 32){
       myStringDechiper += ' ';
     } else {
       //throw new TypeError('');
     }
  }
  return myStringDechiper;
}
