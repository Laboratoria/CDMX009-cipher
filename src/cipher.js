const cipher = {
  encode,
  decode,
}

function encode (offset, text) {
  //variables
  let textToAscii = 0;
  let cipherText = [];
  let formula = 0;
  let result = 0;
//ciclo para asignar el numero de letras
  for (let i=0; i < text.length; i++) {
    textToAscii = parseInt(text.charAt(i).charCodeAt (0));
//ciclo que va a limitar ascii a mayusculas y dar texto cifrado
    if (textToAscii >= 65 && textToAscii <= 90) {
      formula = (textToAscii-65+offset)%26+65;
      cipherText[i] = String.fromCharCode(formula);
      result += cipherText[i]+'';
      //document.write (cipherText);
    }
 //ciclo que va a dar los espacios donde corresponden   
    //else if (textToAscii === 32) {
      //let space = String.fromCharCode(textToAscii);
      //document.write(space);
    //}
    //if (textToAscii >= 97 && textToAscii <= 122) {
    //  let formula = (textToAscii-97+offset)%26+97;
    //  let cipherText = String.fromCharCode(formula);
    //  //document.write (cipherText);
    //}
  }
  return result;

}


function decode (offset, text) {
  //variables
  let textToAscii = 0;
  let cipherText = [];
  let formula = 0;
  let result = 0;
  //ciclo para asignar el numero de letras
    for (let i=0; i < text.length; i++) {
      textToAscii = parseInt(text.charAt(i).charCodeAt (0));
  //ciclo que va a limitar ascii a mayusculas y dar texto descifrado
      if (textToAscii >= 65 && textToAscii <= 90) {
        formula = (textToAscii+65-offset)%26+65;
        cipherText = String.fromCharCode(formula);
        result += cipherText[i]+'';
      }
   //ciclo que va a dar los espacios donde corresponden   
      //else if (textToAscii === 32) {
      //  let space = String.fromCharCode(textToAscii);
      //  document.write(space);
      //}
      //if (textToAscii >= 97 && textToAscii <= 122) {
      //  let formula = (textToAscii-97-offset)%26+97;
      //  let cipherText = String.fromCharCode(formula);
      //  document.write (cipherText);
      //}
    }
    return result;
}


export default cipher;

////////////////////////////////////////////////////////////////77
// //variable que guarda el elemento textarea
// let textToCipher = document.getElementById('textoACifrar');
// //variable que guarda el elemento number de las posiciones
// let numOfPositions = document.getElementById('numDePosiciones');
// //variable que va a guardar el texto ingresado en textoACifrar
// let text = '';
// //variable que va a guardar el numero de posiciones ingresadas
// let number = '';
// //guarda el texto convertido a ascii
// let textToAscii='';

// //funcion para realizar el cifrado
// function cifrado () {
//   text = (document.getElementById('textoACifrar').value).toUpperCase();
//   number = (document.getElementById('numDePosiciones').value);

// function encode () {
//   //variables donde se guardan los datos del formulario
// let text = (document.getElementById('textoACifrar').value).toUpperCase();
// let offset = parseInt(document.getElementById('numDePosiciones').value);
// //ciclo para asignar el numero de letras
//   for (let i=0; i < text.length; i++) {
//     let textToAscii = text.charCodeAt (i);
// //ciclo que va a limitar ascii a mayusculas y dar texto cifrado
//     if (textToAscii >= 65 && textToAscii <= 90) {
//       let formula = (textToAscii-65+offset)%26+65;
//       let cipherText = String.fromCharCode(formula);
//       document.write (cipherText);
//     }
//  //ciclo que va a dar los espacios donde corresponden   
//     else if (textToAscii === 32) {
//       let space = String.fromCharCode(textToAscii);
//       document.write(space);
//     }
//   }
// }

// function decode () {
//   //variables donde se guardan los datos del formulario
//   let text = (document.getElementById('textoADescifrar').value).toUpperCase();
//   let offset = parseInt(document.getElementById('numDePosicionesDes').value);
//   //ciclo para asignar el numero de letras
//     for (let i=0; i < text.length; i++) {
//       let textToAscii = text.charCodeAt (i);
//   //ciclo que va a limitar ascii a mayusculas y dar texto descifrado
//       if (textToAscii >= 65 && textToAscii <= 90) {
//         let formula = (textToAscii+65-offset)%26+65;
//         let cipherText = String.fromCharCode(formula);
//         document.write (cipherText);
//       }
//    //ciclo que va a dar los espacios donde corresponden   
//       else if (textToAscii === 32) {
//         let space = String.fromCharCode(textToAscii);
//         document.write(space);
//       }
//     }
// }