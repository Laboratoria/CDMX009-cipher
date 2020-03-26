

const cipher = {
  encode,
  decode
  };

export default cipher;

function encode(keyNumber, mensaje) { 
let textUp = mensaje.toUpperCase();
let steps = Number(keyNumber);
let texto = '';
  for(let i = 0; i<textUp.length; i++){
    let textAscii = textUp.charCodeAt(i);
    let switchText = parseInt(((textAscii + 65 + steps) % 26 )+ 65);
    texto += String.fromCharCode(switchText);
  }
  return texto;
}

function decode(keyNumber, mensaje) { 
  let textUp = mensaje.toUpperCase();
  let steps = Number(keyNumber);
  let texto = '';
    for(let i = 0; i<textUp.length; i++){
      let textAscii = textUp.charCodeAt(i);
      let switchText = parseInt(((textAscii + 65 - steps) % 26 )+ 65);
      texto += String.fromCharCode(switchText);
    }
    return texto;
  }