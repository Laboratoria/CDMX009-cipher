const cipher = {
  encode,
  decode
};
export default cipher;

function encode(offset, txtToEncode) {
  txtToEncode = String(txtToEncode);
  if(txtToEncode.length < 1) {
    throw new TypeError("Texto a cifrar está vacío");
  }
  let txtEncoded = "";
  for (let i = 0; i < txtToEncode.length; i++) {
    let asciiNum = txtToEncode.charCodeAt(i);
    if (asciiNum >= 65 && asciiNum <= 90){
      let asciiNumEncoded = (((asciiNum - 65) + parseInt(offset)) % 26) + 65;
      txtEncoded += String.fromCharCode(asciiNumEncoded);
    } else {
      throw new TypeError("Sólo se aceptan letras mayúsculas");
    }
  }

  return(txtEncoded);
}

function decode(offset, txtToDecode) {
  txtToDecode = String(txtToDecode);
  if(txtToDecode.length < 1) {
    throw new TypeError("Texto a descifrar está vacío");
  }
  let txtDecoded = "";
  for (let i = 0; i < txtToDecode.length; i++){
    let asciiNum = txtToDecode.charCodeAt(i);
    if (asciiNum >= 65 && asciiNum <= 90){
      let asciiNumDecoded = (((asciiNum + 65) - parseInt(offset)) % 26) + 65;
      txtDecoded += String.fromCharCode(asciiNumDecoded);
    } else {
      throw new TypeError("Error: Sólo se aceptan mayúsculas");
    }
  }

  return(txtDecoded);
}
