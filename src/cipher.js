let cipher = {
  encryptPassword: function(stringPassword, scrollNumber) {
    let encryptResult = '';
    for (let i = 0; i < stringPassword.length; i++) {
      let codeCharacter = stringPassword.charCodeAt(i);
      let firstUppercaseNumberCode = 65;
      let lastUppercaseNumberCode = 90;
      let totalCharacterAlphabetNumber = 26;
      if(codeCharacter >= firstUppercaseNumberCode && codeCharacter <= lastUppercaseNumberCode) {
          encryptResult += String.fromCharCode((codeCharacter - firstUppercaseNumberCode + scrollNumber) % totalCharacterAlphabetNumber + firstUppercaseNumberCode);
      } else if (codeCharacter >= 97 && codeCharacter <= 122) {
        encryptResult += String.fromCharCode((codeCharacter - 97 + scrollNumber) % totalCharacterAlphabetNumber + 97);
      } else {
        encryptResult += stringPassword.charCodeAt(i);
      }
    }
    return encryptResult;
  },
  desencryptPassword: function(stringPassword, scrollNumber) {
      let desencryptResult = '';
      for (let i = 0; i < stringPassword.length; i++) {
      let decodeCharacter = stringPassword.charCodeAt(i);
      let firstUppercaseNumberCode = 65;
      let lastUppercaseNumberCode = 90;
      let totalCharacterAlphabetNumber = 26;
      if(firstUppercaseNumberCode <= decodeCharacter && decodeCharacter <= lastUppercaseNumberCode) {
        desencryptResult += String.fromCharCode((decodeCharacter + firstUppercaseNumberCode - scrollNumber) % totalCharacterAlphabetNumber + firstUppercaseNumberCode);
      }
    }
    return desencryptResult;
  },
};

export default cipher;