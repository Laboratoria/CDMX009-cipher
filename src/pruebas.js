
//let inputText= "Este es un texto de prueba.";
let inputText= "FTUF FT VO UFYUP EF QSVFCB";
let offset = -1; 
//let outputText = [];

//console.log("texto:"+inputText+" - "+"offset:"+offset);
//cipher(inputText, offset, outputText);
cipher(inputText, offset);
//console.log(cipheredLetter);
//console.log(cipher(inputText,offset).join(""));
console.log(cipher(inputText,offset));

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
        //return cipheredLetter;
        outputText.push(cipheredLetter);
    }
    return outputText.join("");
    //console.log("texto cifrado:"+outputText.join(""));
   /* let outputText = ["Que"];
    let outputText = outputText.push(cipheredLetter);
    console.log("texto cifrado:"+outputText);*/
}

//Prueba sobre uso de objeto
const objeto = (x,y) => {
    return x+y;
};
console.log(objeto(5,5));