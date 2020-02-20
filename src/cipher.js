const cipher = {encode, decode};
  // ...
function encode (offset,texto) {
  //if (typeof texto =="string"){
let solved="";
let letters = /^[A-Z]+$/;
if (texto.match(letters)) {
for (let i=0; i<texto.length; i++){
let ascciNum;
let cipherFormula;
ascciNum = texto.charCodeAt(i);
if (ascciNum>=65 && ascciNum<=90);
cipherFormula = (((ascciNum-65 + parseInt(offset))%26)+65);
let letter= String.fromCharCode(cipherFormula);
solved+= letter;
}
}
return solved;
}
//} else{
//throw new TypeError ("No Valido")


function decode (offset,texto) {
let solved="";
var letters = /^[A-Z]+$/;
if (texto.match(letters)) {
for (let i=0; i<texto.length; i++){
let ascciNum;
let cipherFormula;
ascciNum = texto.charCodeAt(i);
if (ascciNum>=65 && ascciNum<=90);
cipherFormula = ((ascciNum+65 - parseInt(offset))%26)+65;
let letter= String.fromCharCode(cipherFormula);
solved+= letter;
}
return solved;
}
}

export default cipher;
