window.cipher = {
  encode: (displace, originalMsg) => {
    let encodeMsg = '';
    //Ciclo for para realizar una acción mientras la condición se cumpla
    for (let i = 0; i < originalMsg.length; i++) {
      let txtCode = originalMsg.charCodeAt(i);
      // se establece un límite para la condición numérica de mayúsculas y minúsculas
      if (txtCode >= 97 && txtCode <= 122) {
        let encodeTxt = (txtCode - 97 + parseInt(displace)) % 26 + 97;
        encodeMsg += String.fromCharCode(encodeTxt);
      } else if (txtCode >= 65 && originalMsg.charCodeAt(i) <= 90) {
        let encodeTxt = (txtCode - 65 + parseInt(displace)) % 26 + 65;
        encodeMsg += String.fromCharCode(encodeTxt);
        // Para respetar espacios y otros caracteres
      } else {
        encodeMsg += originalMsg[i];
      }
    }
    return encodeMsg;
  },

  decode: (displace, originalMsg) => {
    let decodeMsg = '';

    for (let i = 0; i < originalMsg.length; i++) {
      let txtCode = originalMsg.charCodeAt(i);

      if (txtCode >= 65 && txtCode <= 90) {
        let decodeTxt = (txtCode + 65 - parseInt(displace)) % 26 + 65;
        decodeMsg += String.fromCharCode(decodeTxt);
    } else if (txtCode>= 97 && txtCode<= 122) {
        let decodeTxt = (txtCode - 97 - parseInt(displace) + 26) % 26 + 97;
        decodeMsg += String.fromCharCode(decodeTxt);

      } else {
        decodeMsg += originalMsg[i];
      }
    }
    return decodeMsg;
  }
};
