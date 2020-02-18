const cipher = {

encode (offset, text) {
  let cipherText;
  let encodeFinal = '';

  for (let i=0; i < text.length; i++) {
    let mayusText = text.toUpperCase();
    let textToAscii = mayusText.charCodeAt(i);
    if (textToAscii >= 65 && textToAscii <= 90) {
        let formula = (textToAscii-65+offset)%26+65;
        cipherText = String.fromCharCode(formula);
        }
       else if (textToAscii === 32) {
       cipherText = String.fromCharCode(textToAscii);
       }
    encodeFinal += String.fromCharCode(cipherText);
  }
  return encodeFinal;
}  
,decode (offset, text) {
  let decText;
  let decodeFinal = '';

  for (let i=0; i < text.length; i++) {
    let mayusText = text.toUpperCase();
    let textToAscii = mayusText.charCodeAt(i);
    if (textToAscii >= 65 && textToAscii <= 90) {
        let formula = (textToAscii-65+offset)%26+65;
        decText = String.fromCharCode(formula);
        }
       else if (textToAscii === 32) {
       decText = String.fromCharCode(textToAscii);
       }
    decodeFinal += String.fromCharCode(decText);
  }
  return decodeFinal;
}  


}; 
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