
import   cipher from "./cipher.js" ;

let encodeButton = document.getElementById("encodeButton");
encodeButton.onclick = encode1;

let decodeButton = document.getElementById("decodeButton");
decodeButton.onclick = decode1;

let cleanButton = document.getElementById("clean");
cleanButton.onclick = clean;


function encode1(){
let cipherText = document.getElementById("cipherText");
let text = cipherText.value;
    
let cipherKey = document.getElementById("cipherKey");
let offset = parseInt(cipherKey.value);

let concatenarCharacters = cipher.encode(offset,text);

let element = document.getElementById("resultado");
element.innerHTML = concatenarCharacters.toString();
}

function decode1(){
    let cipherText = document.getElementById("cipherText");
    let text = cipherText.value;
        
    let cipherKey = document.getElementById("cipherKey");
    let offset = parseInt(cipherKey.value);
    
    let concatenarCharacters = cipher.decode(offset,text);
    
    let element = document.getElementById("resultado");
    element.innerHTML = concatenarCharacters.toString();
    }

    function clean (){
        document.getElementById("resultado").innerText="";
    }

console.log(cipher);

/*
let clean=document.getElementsByClassName("clean");
clean(clean);
clean.addEventListener("click",clean);

function clean (){
    document.getElementById("resultado").innerText="";

  }
export default cipher;*/

