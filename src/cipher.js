const cipher = {
  encode: (offset, word) => {
    let oldCharNumber;
    let newCharNumber;
    let letter;
    let encoded = '';
      if (typeof word === "string"){
        for (let i=0; i < word.length; i++){
          oldCharNumber = word.charCodeAt(i);
          newCharNumber = (oldCharNumber - 65 + offset) % 26 + 65;
          letter = String.fromCharCode(newCharNumber);
          encoded = encoded.concat(letter);
        }
      return encoded;
      }
      else {
        throw TypeError('¡Alerta! Valor ingresado invalido');
      }
  },
  decode: (offset, word) => {
    let oldCharNumber;
    let newCharNumber;
    let letter;
    let decoded = '';
      for (let i=0; i < word.length; i++){
        oldCharNumber = word.charCodeAt(i);
        newCharNumber = (oldCharNumber + 65 - offset) % 26 + 65;
        letter = String.fromCharCode(newCharNumber);
        decoded = decoded.concat(letter);
      }
    return decoded;
  }
}
export default cipher;
