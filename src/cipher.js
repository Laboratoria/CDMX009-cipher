    //variables
let offset = document.getElementById("number"); //no. desplazamiento
let text = document.getElementById("text"); //texto ingresado
let newText = " "; // texto cifrado
let newAscii = " ";//en ascii
//let textEncode = " "; // texto cifrado

    //cifrar

   function cipher () { 
    for (let i = 0; i < text.length; i++) {
        newAscii = text.charCodeAt (i);
    if (newAscii >= 65 && newAscii <=90);
            let toCipher = (text - 65 + number) % 26 + 65;
            newText = String.fromCharCode (toCipher);
            //textEncode = textEncode (newText);
         }
         return newText;
   }
export default cipher; 

