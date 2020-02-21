import cipher from './cipher.js';
let string = document.getElementById("name").value;
let offset = string.length;

console.log(cipher);
console.log(cipher.encode);
console.log(cipher.decode);

function changePag(){ // Cambio de pantalla
  let page= document.getElementById("principalPage")
 page.style = "display:none"
 document.getElementById("print").style.display = "block";
}
document.getElementById("siguiente").addEventListener ('click',changePag);

function encode (){
  let textEncode = (cipher.encode(string,offset))
  document.getElementById("cipherName").innerHTML= textEncode;
}
document.getElementById("siguiente").addEventListener("click", encode);

function printExpierence(){
  let experience = document.getElementById("textarea").value
 document.getElementById("textareaPrint").innerText = experience;
}
document.getElementById("siguiente").addEventListener('click', printExpierence)
