let textToCipher = document.getElementById('textoACifrar');
let numOfPositions = document.getElementById('numDePosiciones');
let text = '';
let number = '';
let textToAscii='';

function cifrado () {
  text = (document.getElementById('textoACifrar').value);
  number = (document.getElementById('numDePosiciones').value);
  
    for(i=0; i <= text.length; i++) {
      textToAscii = text.charCodeAt(i);
      alert(textToAscii);
    };

};



/*const cipher = {
  // ...
};

export default cipher;
*/