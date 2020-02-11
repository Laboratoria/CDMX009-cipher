const cipher = {
  encode,
  decode
  };

export default cipher;

function encode(offset, mensaje) { 
    let nuevoMensaje = "";
    for(i = 0; i<mensaje.length; i++){
      let mensajeCifrar = mensaje.charAt(i);
      let mensajeAscii = mensajeCifrar.charCodeAt(0);
      let slicedText = ((mensajeAscii - 65 + offset) % 26 + 65);
      let nuevoMensaje += String.fromCharCode(slicedText);
    }

return nuevoMensaje; 
};

function decode(offset, mensaje) { 
  let nuevoMensaje = "";
  for(i = 0; i<mensaje.length; i++){
   let mensajeCifrar = mensaje.charAt(i);
   let mensajeAscii = mensajeCifrar.charCodeAt(0);
   let slicedText = ((mensajeAscii - 65 - offset) % 26 + 65);
   let nuevoMensaje += String.fromCharCode(slicedText);
 }
 
 return nuevoMensaje;
 };
 