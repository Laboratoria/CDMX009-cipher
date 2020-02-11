const cipher = (inputText,offset) => {
  function cipher(){
    var outputText = [];
    for (i in inputText){
      var letterOriginal= inputText.charAt(i);
      var letter = letterOriginal.toUpperCase();
      var letterCode = letter.charCodeAt();
      var letterCodeNumber = parseInt(letterCode);
      if(letterCodeNumber == 32){
        codeNumberCiphered = letterCodeNumber;
        }else{
          codeNumberCiphered = (letterCodeNumber-65+offset)%26+65;
        }
      var cipheredLetter = String.fromCharCode(codeNumberCiphered);
      console.log(letter+" "+letterCode+" "+codeNumberCiphered+" "+cipheredLetter);
      outputText.push(cipheredLetter);
    }
    return outputText.join("");
  }
};

export default cipher;
