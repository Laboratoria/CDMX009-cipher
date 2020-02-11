
//var inputText= "Este es un texto de prueba.";
var inputText= "FTUF FT VO UFYUP EF QSVFCB";
var offset = -1; 
//var outputText = [];

//console.log("texto:"+inputText+" - "+"offset:"+offset);
//cipher(inputText, offset, outputText);
cipher(inputText, offset);
//console.log(cipheredLetter);
//console.log(cipher(inputText,offset).join(""));
console.log(cipher(inputText,offset));

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
        //return cipheredLetter;
        outputText.push(cipheredLetter);
    }
    return outputText.join("");
    //console.log("texto cifrado:"+outputText.join(""));
   /* var outputText = ["Que"];
    var outputText = outputText.push(cipheredLetter);
    console.log("texto cifrado:"+outputText);*/
}

//Prueba sobre uso de objeto
const objeto = (x,y) => {
    return x+y;
};
console.log(objeto(5,5));