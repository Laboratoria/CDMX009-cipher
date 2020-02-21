window.cipher = {
  //crear una función de cifrado
  encode: (offset, toEncode) => {
    let result1 = '';
    let toUnicode='';
    let toUnicode1='';
    let toUnicode2='';
    //variable donde estara almacenado el ascii encriptado
  
    for(let i = 0; i< toEncode.length; i++){ //Convertiremos y alamacenamos cada letra de la frase ingresada a código Ascci
    let toAscii = toEncode.charCodeAt(i); //Condicionamos para que la frase almacenada este en el rango de numeros ASCII y no de otros
    
    if (toAscii>=65 && toAscii<=90){
    toUnicode = String.fromCharCode((toAscii- 65 + offset)%26 + 65);  //Si la letra es MAYÚSCULA Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
    result1 += toUnicode; //codAsciiEncrypted: Guardamos el código ascii encriptado
    }else if (toAscii === 32){
    toAscii = ((toAscii- 32 + offset)%1 + 32); //valido si  hay un espacio  en ASCII 
    toUnicode1  = String.fromCharCode(toAscii);
    result1 += toUnicode1;
    }else if (toAscii>=97 && toAscii<=122){
    toUnicode2 = String.fromCharCode((toAscii- 97 + offset)%26 + 97); //Si la letra es minúscula Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
    //codAsciiEncrypted: Guardamos el código ascii encriptado
    result1 += toUnicode2;
   
    // To ascii y to unicode: Estas funciones estan diseñadas para realizar la "traducción" de códigos de teclas virtuales + flags de estas + estado del teclado + configuración regional del teclado, a sus correspondientes teclas, estas proveen un mecanismo de detección de la tecla bastante efectivo y preciso, 
    }
  }
 
  return result1; //Por ultimo retornamos la nueva frase encriptada
  },
  decode: (offset, toDecode) => {
    let result2 = '';
    let toUnicode6='';
    let toUnicode7='';
    let toUnicode8='';
    let toUnicode9='';
    for(let i = 0; i< toDecode.length; i++){
    let toAscii = toDecode.charCodeAt(i);
    
    if (toAscii>=65 && toAscii<=90){
    toUnicode6 = String.fromCharCode((toAscii+ 65 - offset-26)%26 + 65);
    result2 += toUnicode6;
    
    }else if (toAscii === 32){
    toAscii = ((toAscii+ 32 - offset-1)%1 + 32);
    toUnicode7 = String.fromCharCode(toAscii);
    result2 += toUnicode7;
    
    }else if (toAscii>=97 && toAscii<=122){
    toUnicode8 = String.fromCharCode((toAscii+97 - offset-38)%26 + 97);
    result2 += toUnicode8;
    
    }else if (toAscii === 165){
    toAscii = ((toAscii- 165 + offset)%1 + 165);
    toUnicode9 = String.fromCharCode(toAscii);
    result2 += toUnicode9;
    
    }
  }
  
  return result2;
  }
};



