const cipher = {encode, decode};

   function encode (number, text){

       let newText;
       let result = ""; 
       let toCipher;
       let textEncode = "";
    
   if (typeof text === "string") {
    for ( let i = 0; i < text.length; i++) {
     newText = text.charCodeAt (i);
      if (newText >= 65 && newText <= 90) { 
       toCipher = (newText - 65 + parseInt (number)) % 26 + 65;
        textEncode = (String.fromCharCode (toCipher));
         result += textEncode;
      } //if formula
    } //for
      return result;
   } //if typeof
    else { 
      throw new TypeError ("Valor no valido");
    } //else
     
   } //funcion code

   function decode (number, text) {

       let newText;
       let result = "";
       let toDicipher; 
       let textDecode = "";

    if (typeof text === "string") {
     for (let i = 0; i < text.length; i++) { 
      newText = text.charCodeAt (i);
       if (newText >= 65 && newText <= 90) { 
       toDicipher = (newText + 65 - parseInt (number)) % 26 + 65;
        textDecode = (String.fromCharCode (toDicipher));
         result += textDecode;
       } //if formula
      }// for
         return result;
    } //if typeof
     else { 
    throw new TypeError ("Valor no valido");
     } //else
   } //funcion
     export default cipher;