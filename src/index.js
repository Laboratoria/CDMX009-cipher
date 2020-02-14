import cipher from "./cipher.js"; 
console.log(cipher);

// boton para cifrar
document.getElementById("code").addEventListener("click",function (){

//function encode ( ) { 
let textUser = document.getElementById ("text").value;
let textUser1 = textUser.toUpperCase();
let offset = document.getElementById ("number").value;
let newWord = cipher.encode (offset, textUser1);
//document.getElementById ("result").value=document.getElementById ("newWord");
//let resultado = document.getElementById("result");
//resultado.innerHTML= newWord;
document.getElementById ("result").innerHTML= newWord + offset + textUser1;
});



//let resultado = document.getElementById("result");











