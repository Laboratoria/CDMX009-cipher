const cipher = {
  encode,
  decode
  };

export default cipher;

//función: encode, argumentos: offset y mensaje  
function encode(keyNumber, mensaje) { 
//pasamos el mensaje a mayusculas
let textUp = mensaje.toUpperCase();
//pasamos el numero a valor numérico
let steps = Number(keyNumber);
/* creamos la variable i y pedimos que se siga ejecutando
hasta que termine con el largo del argumento mensaje.*/
  for(let i = 0; i<=textUp.length; i++){
//pedimos el valor ASCII de la letra
    let textAscii = textUp.charCodeAt(i);
/*aplicamos el valor del argumento offset al valor ASCII
con la formula de cifrado cesar*/
    let switchText = parseInt((textAscii - 65 + steps) % 26 + 65);
/* creamos una variable que convierta de ASCII a letras
y las una en una sola string */
    let secretText = String.fromCharCode(switchText);
    console.log encode(secretText);
  }
}

//función: encode, argumentos: offset y mensaje  
function decode(keyNumber, mensaje) { 
  //pasamos el mensaje a mayusculas
  let textUp = mensaje.toUpperCase();
  //pasamos el numero a valor numérico
  let steps = Number(keyNumber);
  /* creamos la variable i y pedimos que se siga ejecutando
  hasta que termine con el largo del argumento mensaje.*/
    for(let i = 0; i<=textUp.length; i++){
  //pedimos el valor ASCII de la letra
      let textAscii = textUp.charCodeAt(i);
  /*aplicamos el valor del argumento offset al valor ASCII
  con la formula de cifrado cesar*/
      let switchText = parseInt((textAscii - 65 + steps) % 26 + 65);
  /* creamos una variable que convierta de ASCII a letras
  y las una en una sola string */
      let secretText = String.fromCharCode(switchText);
      console.log decode(secretText);
    }
  }
  
  