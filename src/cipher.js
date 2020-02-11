const cipher = (inputText,offset) => {
  function cipher(){
    let outputText = [];
    for (i in inputText){
      let letterOriginal= inputText.charAt(i);
      let letter = letterOriginal.toUpperCase();
      let letterCode = letter.charCodeAt();
      let letterCodeNumber = parseInt(letterCode);
      if(letterCodeNumber == 32){
        codeNumberCiphered = letterCodeNumber;
        }else{
          codeNumberCiphered = (letterCodeNumber-65+offset)%26+65;
        }
      let cipheredLetter = String.fromCharCode(codeNumberCiphered);
      console.log(letter+" "+letterCode+" "+codeNumberCiphered+" "+cipheredLetter);
      outputText.push(cipheredLetter);
    }
    return outputText.join("");
  }
};

export default cipher;

/*const cipher = {
  decode,
  code
};

export default cipher;

function code(text,offset){
  let code = text[0].charCodeAt(0)
  let newCode = code+offset
  let newLetter = charFromcodeAt(newCode)
}

function decode(){}*/
