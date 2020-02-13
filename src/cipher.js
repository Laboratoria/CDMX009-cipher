const cipher = {
  encode,
  decode
  };

export default cipher;

//función: encode, argumentos: offset y mensaje  
function encode(numero, mensaje) { 
//pasamos el mensaje a mayusculas
let mensajeMay = mensaje.toUpperCase();
//pasamos el numero a valor numérico
let numero = Number(elNumero);
/* creamos la variable i y pedimos que se siga ejecutando
hasta que termine con el largo del argumento mensaje.*/
  for(let i = 0; i<=mensajeMay.length; i++){
//pedimos el valor ASCII de la letra
    let mensajeAscii = mensajeMay.charCodeAt(i);
/*aplicamos el valor del argumento offset al valor ASCII
con la formula de cifrado cesar*/
    let moverLetras = parseInt((mensajeAscii - 65 + numero) % 26 + 65);
/* creamos una variable que convierta de ASCII a letras
y las una en una sola string */
    let nuevoMensaje = String.fromCharCode(moverLetras);
    console.log encode(nuevoMensaje);
  }
}

//función: encode, argumentos: offset y mensaje  
function decode(numero, mensaje) { 
  //pasamos el mensaje a mayusculas
  let mensajeMay = mensaje.toUpperCase();
  //pasamos el numero a valor numérico
  let numero = Number(elNumero);
  /* creamos la variable i y pedimos que se siga ejecutando
  hasta que termine con el largo del argumento mensaje.*/
    for(let i = 0; i<=mensajeMay.length; i++){
  //pedimos el valor ASCII de la letra
      let mensajeAscii = mensajeMay.charCodeAt(i);
  /*aplicamos el valor del argumento offset al valor ASCII
  con la formula de cifrado cesar*/
      let moverLetras = parseInt((mensajeAscii - 65 - numero) % 26 + 65);
  /* creamos una variable que convierta de ASCII a letras
  y las una en una sola string */
      let nuevoMensaje = String.fromCharCode(moverLetras);
      console.log decode(nuevoMensaje);
    }
  }