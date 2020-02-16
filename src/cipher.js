window.cipher = {
  encode: (desplazamiento, mensajeOriginal) => {
    let mensajeCifrado = "";
    for (let i = 0; i < mensajeOriginal.length; i++) {
      let mensajeMayuscula = mensajeOriginal.toUpperCase();
      let textoCifrado = (mensajeMayuscula.charCodeAt(i) - 65 + parseInt(desplazamiento)) % 26 + 65;
      let resultado = String.fromCharCode(textoCifrado);
      mensajeCifrado += resultado;
    }
    return mensajeCifrado;
  },

  decode: (desplazamiento, mensajeOriginal) => {
    let mensajeDescifrado = "";
    for (let i = 0; i < mensajeOriginal.length; i++) {
      let textoDescifrado = (mensajeMayuscula.charCodeAt(i) + 65 - parseInt(desplazamiento)) % 26 + 65;
      let resultado = String.fromCharCode(textoDescifrado);
      mensajeDescifrado += resultado;
    }
    return mensajeDescifrado;
  }
}

/*caesarCipher:(desplazamiento, mensajeOriginal) => {
	let mensajeCifrado = "";
	for (var i = 0; i < mensajeOriginal.length; i++) {
		var c = mensajeor.charCodeAt(i);
		if      (65 <= c && c <=  90) resultado += String.fromCharCode((c - 65 + desplaza) % 26 + 65);  // Uppercase
		else if (97 <= c && c <= 122) resultado += String.fromCharCode((c - 97 + desplaza) % 26 + 97);  // Lowercase
		else                          resultado += mensajeCifrado.charAt(i);  // Copy
	}
	return resultado;
}
}*/
