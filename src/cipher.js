const cipher = {encode, decode};

   function encode (number, text ){

       let newText;
       let toCipher;
       let textEncode = " ";
       //console.log (number,text);

    for ( let i = 0; i < text.length; i++) {
    let newText = text.charCodeAt (i);
    if (newText >= 65 && newText <= 90);
       let toCipher = (text - 65 + number) % 26 + 65;
         textEncode = String.fromCharCode (toCipher);
         result += textEncode;
    }
      return result;
   }

   export default cipher;
