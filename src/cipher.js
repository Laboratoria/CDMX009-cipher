const cipher = {
  encode,
  decode
  };

export default cipher;


function encode(keyNumber, mensaje) { 
let textUp = mensaje.toUpperCase();
let steps = Number(keyNumber);
  for(let i = 0; i<=textUp.length; i++){
    let textAscii = textUp.charCodeAt(i);
    let switchText = parseInt((textAscii - 65 + steps) % 26 + 65);
    let texto = String.fromCharCode(switchText);
    return (texto);
  }
}

function decode(keyNumber, mensaje) { 
  let textUp = mensaje.toUpperCase();
  let steps = Number(keyNumber);
    for(let i = 0; i<=textUp.length; i++){
      let textAscii = textUp.charCodeAt(i);
      let switchText = parseInt((textAscii - 65 - steps) % 26 + 65);
      let secretText = String.fromCharCode(switchText);
      return (secretText);
    }
  }
  
