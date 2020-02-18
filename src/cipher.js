// defined variable cipher object
let cipher = { 
  // defined first propertie function with two parameters
  encryptPassword: function(stringPassword, scrollNumber) {
    // created a string variable for save the result 
    let encryptResult = '';
    // init a loop to know the string password length
    for (let i = 0; i < stringPassword.length; i++) {
      // get the code (ASCII) for each letter 
      let codeCharacter = stringPassword.charCodeAt(i);
      // defined variables for initialization (A) and final (Z)
      let firstUppercaseNumberCode = 65;
      let lastUppercaseNumberCode = 90;
      let totalCharacterAlphabetNumber = 26;
      // created a conditional to set a range 
      if(codeCharacter >= firstUppercaseNumberCode && codeCharacter <= lastUppercaseNumberCode){
          // increases the result in variable 
          /* letter code in ASCCI - number of the letter in ASCII + scroll number
              the total module of letters in alphabet + ASCII number of letter A in result 0 */ 
          encryptResult += String.fromCharCode((codeCharacter - firstUppercaseNumberCode + scrollNumber) % totalCharacterAlphabetNumber + firstUppercaseNumberCode);
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