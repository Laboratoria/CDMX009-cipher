const cipher = {

encode (text, offset) {
//ciclo para asignar el numero de letras
  for (let i=0; i < text.length; i++) {
    let textToAscii = text.charCodeAt (i);
//ciclo que va a limitar ascii a mayusculas y dar texto cifrado
    if (textToAscii >= 65 && textToAscii <= 90) {
      let formula = (textToAscii-65+offset)%26+65;
      let cipherText = String.fromCharCode(formula);
      //document.write (cipherText);
    }
 //ciclo que va a dar los espacios donde corresponden   
    else if (textToAscii === 32) {
      let space = String.fromCharCode(textToAscii);
      //document.write(space);
    }
    if (textToAscii >= 97 && textToAscii <= 122) {
      let formula = (textToAscii-97+offset)%26+97;
      let cipherText = String.fromCharCode(formula);
      //document.write (cipherText);
    }
  }
   return cipherText;
}

,decode () {
  //variables donde se guardan los datos del formulario
  let text = (document.getElementById('textToDecode').value)/*.toUpperCase()*/;
  let offset = parseInt(document.getElementById('offsetDecode').value);
  //ciclo para asignar el numero de letras
    for (let i=0; i < text.length; i++) {
      let textToAscii = text.charCodeAt (i);
  //ciclo que va a limitar ascii a mayusculas y dar texto descifrado
      if (textToAscii >= 65 && textToAscii <= 90) {
        let formula = (textToAscii+65-offset)%26+65;
        let cipherText = String.fromCharCode(formula);
        document.write (cipherText);
      }
   //ciclo que va a dar los espacios donde corresponden   
      else if (textToAscii === 32) {
        let space = String.fromCharCode(textToAscii);
        document.write(space);
      }
      if (textToAscii >= 97 && textToAscii <= 122) {
        let formula = (textToAscii-97-offset)%26+97;
        let cipherText = String.fromCharCode(formula);
        document.write (cipherText);
      }
    }
    cipher.decode(text,offset);
}

};
export default cipher;
