
function encode () {
  //variables donde se guardan los datos del formulario
let text = (document.getElementById('textoACifrar').value).toUpperCase();
let offset = parseInt(document.getElementById('numDePosiciones').value);
//ciclo para asignar el numero de letras
  for (let i=0; i < text.length; i++) {
    let textToAscii = text.charCodeAt (i);
//ciclo que va a limitar ascii a mayusculas y dar texto cifrado
    if (textToAscii >= 65 && textToAscii <= 90) {
      let formula = (textToAscii-65+offset)%26+65;
      let cipherText = String.fromCharCode(formula);
      document.write (cipherText);
    }
 //ciclo que va a dar los espacios donde corresponden   
    else if (textToAscii === 32) {
      let space = String.fromCharCode(textToAscii);
      document.write(space);
    }
  }
}

function decode () {
  //variables donde se guardan los datos del formulario
  let text = (document.getElementById('textoADescifrar').value).toUpperCase();
  let offset = parseInt(document.getElementById('numDePosicionesDes').value);
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
    }
}

/*funcion para realizar el cifrado
function cipher () {
  //asigna los datos y convierte a mayusculas
  let text = (document.getElementById('textoACifrar').value).toUpperCase();
  let number = parseInt(document.getElementById('numDePosiciones').value);
  
  //para convertir a ascii 
    for(i=0; i < text.length; i++) {
      //texto convertido en ascii
      let textToAscii = text.charCodeAt(i);


      
        if (textToAscii === 32) {
          let space = String.fromCharCode(getAscii);
        }
      
      //formula para conseguir posiciones en ascii
      let getAscii = (textToAscii-65+number)%26+65;
            //convertir a letra
      let cipherString = String.fromCharCode(getAscii);
      document.write (cipherString);
    };

};


/*const cipher = {
  // ...
};

export default cipher;
*/