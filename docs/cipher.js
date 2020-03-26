window.cipher = {
  encode: (desplazamiento, mensajeOriginal) => {
    let mensajeCifrado = '';
    //Ciclo for para realizar una acción mientras la condición se cumpla
    for (let i = 0; i < mensajeOriginal.length; i++) {
      let txtCode = mensajeOriginal.charCodeAt(i);
      // se establece un límite para la condición numérica de mayúsculas y minúsculas
      if (txtCode >= 97 && txtCode <= 122) {
        let textoCifrado = (txtCode - 97 + parseInt(desplazamiento)) % 26 + 97;
        mensajeCifrado += String.fromCharCode(textoCifrado);
      } else if (txtCode >= 65 && mensajeOriginal.charCodeAt(i) <= 90) {
        let textoCifrado = (txtCode - 65 + parseInt(desplazamiento)) % 26 + 65;
        mensajeCifrado += String.fromCharCode(textoCifrado);
        // Para respetar espacios y otros caracteres
      } else {
        mensajeCifrado += mensajeOriginal[i];
      }
    }
    return mensajeCifrado;
  },

  decode: (desplazamiento, mensajeOriginal) => {
    let mensajeDescifrado = '';

    for (let i = 0; i < mensajeOriginal.length; i++) {
      let txtCode = mensajeOriginal.charCodeAt(i);

      if (txtCode >= 65 && txtCode <= 90) {
        let textoDescifrado = (txtCode + 65 - parseInt(desplazamiento)) % 26 + 65;
        mensajeDescifrado += String.fromCharCode(textoDescifrado);
    } else if (txtCode>= 97 && txtCode<= 122) {
        let textoDescifrado = (txtCode - 97 - parseInt(desplazamiento) + 26) % 26 + 97;
        mensajeDescifrado += String.fromCharCode(textoDescifrado);

      } else {
        mensajeDescifrado += mensajeOriginal[i];
      }
    }
    return mensajeDescifrado;
  }
};
