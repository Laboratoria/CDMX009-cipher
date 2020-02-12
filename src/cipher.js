//variable que guarda el elemento textarea
let textToCipher = document.getElementById('textoACifrar');
//variable que guarda el elemento number de las posiciones
let numOfPositions = document.getElementById('numDePosiciones');
//variable que va a guardar el texto ingresado en textoACifrar
let text = '';
//variable que va a guardar el numero de posiciones ingresadas
let number = '';
//guarda el texto convertido a ascii
let textToAscii='';

//funcion para realizar el cifrado
function cifrado () {
  text = (document.getElementById('textoACifrar').value).toUpperCase();
  number = (document.getElementById('numDePosiciones').value);
  
  //para convertir a ascii y a mayusculas
    for(i=0; i < text.length; i++) {
      //texto convertido en ascii
      textToAscii = text.charCodeAt(i);
      //formula para conseguir ascii
      let temporal = (textToAscii-65+number)%26+65;
      //alert(temporal);
      //convertir a letra
      let cipher = String.fromCharCode(temporal);
      document.write (cipher);
      
      //let positions = (textToAscii+number)%26;
      //let cipherMessage = String.fromCharCode(positions)
      //alert(positions);
      
      //alert(textToAscii);
      //let cipher = String.fromCharCode(i);
      //alert(cipher);
    };

};


/*const cipher = {
  // ...
};

export default cipher;
*/