
import   cipher from "./cipher.js" ;

let encodeButton = document.getElementById("encodeButton");//llamando a encodeButton
encodeButton.onclick = encode1;//llamando a encodeButton

let decodeButton = document.getElementById("decodeButton");//llamando a decodeButton
decodeButton.onclick = decode1;//llamando a decodeButton

let cleanButton = document.getElementById("clean");//llamando a cleanButton
cleanButton.onclick = clean;//llamando a cleanButton

function encode1(){//funcion para cuando se presione el boton encode1 se realicen estas operaciones
let cipherText = document.getElementById("cipherText");//llamar el texto del input
let text = cipherText.value;//guardar el valor del texto en una variable
    
let cipherKey = document.getElementById("cipherKey");//llamar el numero del input
let offset = parseInt(cipherKey.value);//guardar el valor del numero en una variable

let concatenarCharacters = cipher.encode(offset,text);//llamar la funcion de encode 

let element = document.getElementById("result");//llamar el div de resultado
element.innerHTML = concatenarCharacters.toString();//poner en el div el resultado final 
}

function decode1(){//funcion para cuando se presione el boton decode1 se realicen estas operaciones
    let cipherText = document.getElementById("cipherText");//llamar el texto del input
    let text = cipherText.value;//guardar el valor del texto en una variable
        
    let cipherKey = document.getElementById("cipherKey");//llamar el numero del input
    let offset = parseInt(cipherKey.value);//guardar el valor del numero en una variable
    
    let concatenarCharacters = cipher.decode(offset,text);//llamar la funcion de decode 
    
    let element = document.getElementById("result");//llamar el div de resultado
    element.innerHTML = concatenarCharacters.toString();//poner en el div el resultado final 
    }

function clean (){//funcion para cuando se presione el boton limpiar se limpie el div de resultado 
    document.getElementById("result").innerText="";//se pone un div vacio 
    }

console.log(cipher);

