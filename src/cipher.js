let cipher = {
  encryptPassword: function(stringPassword, scrollNumber) {
    let encryptResult = "";
    for (let i = 0; i < stringPassword.lenght; i++) {
      console.log("i", stringPassword[i]);
      let codeCharacter = stringPassword.charCodeAt(i);
      console.log("codeCharacter", codeCharacter)
      let firstUppercaseNumber = 65;
      let lastUppercaseNumber = 90;
      let totalCharacterAlphabetNumber = 26;
      if (codeCharacter >= lastUppercaseNumber && codeCharacter <= lastUppercaseNumber) {
       encryptResult += String.fromCharCode(codeCharacter - firstUppercaseNumber + scrollNumber) % totalCharacterAlphabetNumber + firstUppercaseNumber;
       console.log("encrypt result", encryptResult)
      }
    }
  },
  desencryptPassword: function(stringPassword, scrollNumber) {
    console.log(stringPassword)
    console.log(scrollNumber)
 }
};
export default cipher;