let cipher = {
  encryptPassword: function(stringPassword, scrollNumber) {
    let encryptResult = '';
    for (let i = 0; i < stringPassword.length; i++) {
      let codeCharacter = stringPassword.charCodeAt(i);
      let firstUppercaseNumberCode = 65;
      let lastUppercaseNumberCode = 90;
      let totalCharacterAlphabetNumber = 26;
      if(codeCharacter >= firstUppercaseNumberCode && codeCharacter <= lastUppercaseNumberCode){
          encryptResult += String.fromCharCode((codeCharacter - firstUppercaseNumberCode + scrollNumber) % totalCharacterAlphabetNumber + firstUppercaseNumberCode);
      }
    }
    return encryptResult;

  },
  desencryptPassword: function(stringPassword, scrollNumber) {
    var totalCharacterAlphabetNumber = 26;
    scrollNumber = (totalCharacterAlphabetNumber - scrollNumber) % totalCharacterAlphabetNumber;
    let result = cipher.encryptPassword(stringPassword, scrollNumber);
    return result;
  }
};
export default cipher;