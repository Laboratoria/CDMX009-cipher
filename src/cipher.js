const cipher = {
  encode,
  decode
};
export default cipher;

function encode(txtToEncode, offset) {
  let txtEncoded = "";
  for (let i = 0; i < txtToEncode.length; i++) {
    let asciiNum = txtToEncode.charCodeAt(i);
    if (asciiNum >= 65 && asciiNum <= 90){
      let asciiNumEncoded = (asciiNum-65+parseInt(offset))%26+65;
      txtEncoded += String.fromCharCode(asciiNumEncoded); 
    } else {
      console.log("Error: Sólo se aceptan mayúsculas");
      throw new TypeError;
    }
  }

  return(txtEncoded);
}

function decode(txtToDecode, offset) {
  let txtDecoded = "";
  for (let i = 0; i < txtToDecode.length; i++){
    let asciiNum = txtToDecode.charCodeAt(i);
    if (asciiNum >= 65 && asciiNum <= 90){
      let asciiNumDecoded = (asciiNum-65+parseInt(offset))%26+65;
      txtDecoded += String.fromCharCode(asciiNumDecoded); 
    } else {
      console.log("Error: Sólo se aceptan mayúsculas");
      throw new TypeError;
    }
  }

  return(txtDecoded);
}