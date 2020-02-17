import cipher from "./cipher.js"; 


document.querySelector("#encryptButton").addEventListener("click", encode);
document.querySelector("#decodeButton").addEventListener("click", decode);

let cifButton = document.querySelector("#encryptButton");
function encode () {
    let nameAlias = document.getElementById("alias").value;
    let letterOffset = document.getElementById("number").value;
    let result=" ";
    let alias= cipher.encode(nameAlias,letterOffset);
    document.querySelector("#resultBox").innerHTML= alias;      
}
cifButton.addEventListener("click", encode)

let codeButton = document.querySelector("#decodeButton");
function decode () {
    let nameAlias = document.getElementById("alias").value;
    let letterOffset = document.getElementById("number").value;
    let result=" ";
    let name= cipher.decode(nameAlias,letterOffset);
    document.querySelector("#resultBox").innerHTML= name;      
}
codeButton.addEventListener("click", decode)