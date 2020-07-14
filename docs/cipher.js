const cipher = {

  cifrar : (string,offset) =>{
    let newCode = "";
    let newLetter = "";
    for (let i = 0; i < string.length; i++) {
      let letterCode = string[i].charCodeAt(0);
      let space = letterCode == 32;//Se hizo variable para no cifrar espacios
      if (letterCode >= 65 && letterCode <= 90) {
      //console.log(letterCode)
      //document.getElementById('resultadocif').innerHTML += letterCode;//Se obtuvo el código Ascii de la cadena ingresada y se imprimieron
      newCode = (letterCode - 65 + offset) %26 + 65;
      //console.log(newCode)
      newLetter += String.fromCharCode(newCode);
      //console.log(newLetter)

      }if (space) {
        newCode = (32) %65;
        newLetter += String.fromCharCode(newCode);
        
      }
      if (letterCode >= 48 && letterCode <= 57) {//Para cifrar números
        newCode = (letterCode - 65 + offset) %26 + 65;
        newLetter += String.fromCharCode(newCode);
      }
      if (letterCode == 35) {//Para caracter #
        newCode = (35) %65
        newLetter += String.fromCharCode(newCode);
        
      }
    }
    return newLetter; 
  },

  descifrar : (string,offset) =>{
    let newCode = "";
    let newLetter = "";
    for (let i = 0; i < string.length; i++) {
      let letterCode = string[i].charCodeAt(0);
      let space = letterCode == 32;
      if (letterCode >= 65 && letterCode <= 90) {
        newCode = (letterCode + 65 - offset) %26 + 65;
      //console.log(newCode);
      //console.log(offset);
      newLetter += String.fromCharCode(newCode);
      //console.log(letterCode)
      //document.getElementById('resultadocif').innerHTML += letterCode;//Se obtuvo el código Ascii de la cadena ingeresada y se imprimieron
      }
      if (space) {
      newCode = (32) %65;
      newLetter += String.fromCharCode(newCode);
        
      }
      if (letterCode >= 48 && letterCode <= 57) {//Para descifrar números
        newCode = (letterCode - 65 - offset) %26 + 65;
        newLetter += String.fromCharCode(newCode);
      }
      if (letterCode == 35 ) {//Para caracter #
        newCode = (35) %65
        newLetter += String.fromCharCode(newCode);
        
      }
      
    }
    return newLetter;
  }  
  

};


export default cipher;
