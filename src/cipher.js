const cipher = {
  encode,
  decode
};

export default cipher;

function encode(offset,inputText){
  let outputText = [];
  if (offset < 0){
    offset = -1*offset;
    return decode(offset,inputText);
  }else{
    for (let i in inputText){
      let letterOriginal= inputText.charAt(i);
      let letter = letterOriginal; 
      let letterCode = letter.charCodeAt();
      let letterCodeNumber = parseInt(letterCode);
      let codeNumberCiphered;
      if(48 <= letterCodeNumber &&  letterCodeNumber < 58){
        codeNumberCiphered = (letterCodeNumber-48+offset)%10+48;
      }else if(65 <= letterCodeNumber && letterCodeNumber < 91){
        codeNumberCiphered = (letterCodeNumber-65+offset)%26+65;        
      }else if(97 <= letterCodeNumber &&  letterCodeNumber < 123){
        codeNumberCiphered = (letterCodeNumber-97+offset)%26+97;
      }else{
        console.log("algo raro")
        codeNumberCiphered = letterCodeNumber;
      }
      let cipheredLetter = String.fromCharCode(codeNumberCiphered);
      console.log(letter+" "+letterCode+" "+codeNumberCiphered+" "+cipheredLetter);
      outputText.push(cipheredLetter);
    }
  } 
  return outputText.join("");
}

function decode(offset,inputText){
  let outputText = [];
  if(offset < 0){
    offset = -1*offset;
    return encode(offset,inputText);
  }else{
    for (let i in inputText){
      let letterOriginal= inputText.charAt(i);
      let letter = letterOriginal;
      let letterCode = letter.charCodeAt();
      let letterCodeNumber = parseInt(letterCode);
      let codeNumberCiphered;
      if(48 <= letterCodeNumber &&  letterCodeNumber < 58){
        codeNumberCiphered = (letterCodeNumber-48-9-offset)%10+48+9;
      }else if(65 <= letterCodeNumber && letterCodeNumber < 91){
        codeNumberCiphered = (letterCodeNumber+65-offset)%26+65;        
      }else if(97 <= letterCodeNumber &&  letterCodeNumber < 123){
        codeNumberCiphered = ((letterCodeNumber-32)+65-offset)%26+97;
      }else{
        console.log("algo raro")
        codeNumberCiphered = letterCodeNumber;
      }  
      let cipheredLetter = String.fromCharCode(codeNumberCiphered);
      console.log(letter+" "+letterCode+" "+codeNumberCiphered+" "+cipheredLetter);
      outputText.push(cipheredLetter);
    }
  } 
  return outputText.join("");
}
