const cipher = {encode,decode};

function encode (offset, text) {
  let cipherText ='';
  for (let i=0; i < text.length; i++) {
    //let mayus = text.toUpperCase();
    let textToAscii = text.charCodeAt (i);
    let formula=0;

      if (textToAscii >= 65 && textToAscii <= 90) {
        formula = (textToAscii-65+parseInt(offset))%26+65;

      } else if (textToAscii >= 97 && textToAscii <= 122) {
        formula = (textToAscii-97+parseInt(offset))%26+97;

      } else if (textToAscii === 32) {
        formula = ' '; 
      }
      cipherText += String.fromCharCode(formula);
    }
  return cipherText;
}

function decode (offset, text) {
  let decipherText ='';
  for (let i=0; i < text.length; i++) {
    let mayus = text.toUpperCase();
    let textToAscii = text.charCodeAt (i);
    let formula=0;

      if (textToAscii >= 65 && textToAscii <= 90) {
        formula = (textToAscii+65-parseInt(offset))%26+65;

      } else if (textToAscii >= 97 && textToAscii <= 122) {
        formula = (textToAscii+97-parseInt(offset))%26+97;

      } else if (textToAscii === 32) {
        formula = ' '; 
      }
      decipherText += String.fromCharCode(formula);
    }
  return decipherText;
}

export default cipher;