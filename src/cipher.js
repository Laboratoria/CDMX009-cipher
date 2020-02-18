const cipher = {
  encode,
  decode
};

// Función para cifrar.
function encode(cupon, offset){
  let cuponCifrado=''; // Almacenar el valor del string Cifrado.
  for (let i = 0 ; i < cupon.length ; i++){  // Recorrer el string del usuario segun los lugares determinados por el offset.
    let obtenerASCII = cupon.charCodeAt(i); //Obtiene los números de las letras en el código ASCII.
    let cifrandoCupon = ((obtenerASCII - 65 + offset)%26)+65; // Fórmula de Cifrado Cesar: Obtener nuevos números de letras en el código ASCII.
    cuponCifrado += String.fromCharCode(cifrandoCupon);
  }
  return cuponCifrado;  
}

// Función para decifrar.
function decode(cuponCifrado, offset){
  let cuponDecifrado=''; // Almacenar el valor del string decifrado.
  for (let i = 0 ; i < cuponCifrado.length ; i++){  // Recorrer el string del usuario segun los lugares determinados por el offset.
    let obtenerASCII = cuponCifrado.charCodeAt(i); //Obtiene los números de las letras en el código ASCII.
    let decifrandoCupon = ((obtenerASCII + 65 - offset)%26)+65; // Fórmula de Cifrado Cesar: Obtener nuevos números de letras en el código ASCII.
    cuponDecifrado += String.fromCharCode(decifrandoCupon);
  }
  return cuponDecifrado;  
}

export default cipher;
