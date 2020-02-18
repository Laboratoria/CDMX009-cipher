import cipher from "./cipher.js"; 


let cifButton = document.querySelector("#encryptButton");
cifButton.addEventListener("click", encode)
function encode () {
    let nameAlias = document.getElementById("aliasName").value;
    let letterOffset = document.getElementById("offset").value;
    let result= cipher.encode(nameAlias,letterOffset);
    document.getElementById("resultBox").value= result;      
}


let codeButton = document.querySelector("#decodeButton");
codeButton.addEventListener("click", decode)
function decode () {
    let nameAlias = document.getElementById("aliasName").value;
    let letterOffset = document.getElementById("offset").value;
    let resultTwo= cipher.decode(nameAlias,letterOffset);
    document.getElementById("resultBox").value=resultTwo;      
}
