const cipher = {encode, decode};

   function encode (number, text){

       let newText;
       let result = ""; 
       let toCipher;
       let textEncode = "";
       //console.log (number,text);

    for ( let i = 0; i < text.length; i++) {
     newText = text.charCodeAt (i);
    if (newText >= 65 && newText <= 90) { 
        toCipher = (newText - 65 + parseInt (number)) % 26 + 65;
         textEncode = (String.fromCharCode (toCipher));
         result += textEncode;
      }
    }
      return result;
   }

     function decode (number, text) {
    let newText;
    let result = "";
    let toDicipher; 
    let textDecode = "";

     for (let i = 0; i < text.length; i++) { 
   newText = text.charCodeAt (i);
      if (newText >= 65 && newText <= 90) { 
     toDicipher = (newText + 65 - parseInt (number)) % 26 + 65;
     textDecode = (String.fromCharCode (toDicipher));
     result += textDecode;
       }
      }
         return result;
     }
     export default cipher;