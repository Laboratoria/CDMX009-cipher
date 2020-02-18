const cipher = {
  // ...
};

export default cipher;


function codigoCifrado (mensaje,desplazamiento) {
  let resultado = " ";
let mensaje = "ANA";
let desplazamiento= "5";
for (let i = 0; i < mensaje.length; i++) {
  let textoMayuscula= mensaje.toUpperCase();
  let codigoAsc= (textoMayuscula.charCodeAt(i) - 65 + parseInt(desplazamiento)) % 26 + 65;
  resultado += String.fromCharCode(codigoAsc);
  console.log(resultado);
}
}
