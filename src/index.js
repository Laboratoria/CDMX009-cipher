import cipher from './cipher.js';

let submitButton = document.getElementById("submitButton");
submitButton.onclick = botonCif;

let decipherButton = document.getElementById("decipherButton");
decipherButton.onclick = botonDesci;



function botonCif(){
    
    let num = document.getElementById("OffsetU");
    let ncc=parseInt(num.value);
    let texto= document.getElementById("textarea");
    let str=texto.value;
    console.log(str);
    let cadena= cipher.encode(str,ncc);
    let element = document.getElementById("resultado");
    element.innerHTML=cadena;
}

function botonDesci(){
    let num = document.getElementById("OffsetU");
    let ncc=parseInt(num.value);
    let texto= document.getElementById("textarea");
    let str=texto.value;
    let cadena= cipher.decode(str,ncc);
    let element = document.getElementById("resultado");
    element.innerHTML=cadena.toString();
}
console.log(cipher);















/*let ncc = document.getElementById("OffsetU");
let text = document.getElementById("textArea");
let botonCif= document.getElementById("submitButton")
botonCif.onclick = botonCif; 
let botonDesci= document.getElementById("decipherButton");
botonDesci.onclick = botonDesci;
let resultP = document.getElementById("resultado");

let finalC = new Array();
let finalD= new Array();


botonCif.addEventListener('click', () => {
    
    let textValue = text.value;
    let nccValue = (parseInt(ncc.value));
    finalC.toString;
    cipher.encode(nccValue,nccValue); 
    resultP.innerHTML = finalC.join("");
} );   

botonDesci.addEventListener('click', () => {
    let nccValue = parseInt(ncc.value);
    finalC.toString;
    cipher.decode(nccValue, nccValue); 
    resultP.innerHTML = finalD.join("");
} );   
*/


