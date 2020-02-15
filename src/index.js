
import cipher from './cipher.js';
console.log(cipher);

function cipherOne() {
document.getElementById("FirstPage").style.display= "none";
document.getElementById("SecondPage").style.display= "block";
// me traigo el contenido de las cajas (string y offset)
//let string = document.getElementById('texto').value;
//console.log(string);
//let space =document.getElementById('espacios').value;
//console.log(space);
let boxInput= document.getElementById('result_cipher');
let string = document.getElementById('texto').value;
console.log(string);
let stringUpperCase1= string.toUpperCase();
let space =document.getElementById('espacios').value;
console.log(space);
// le pido a cifer que haga su chamba
let password =cipher.encode(stringUpperCase1, space);
console.log(password);

// lo coloco enm la nueva pantalla
//document.getElementById("result_cipher").inner.HTML= password;
boxInput.innerHTML= password;

}


function unCipher_one() {

document.getElementById("FirstPage").style.display= "none";
document.getElementById("ThirdPage").style.display= "block";

let boxInput2= document.getElementById('Result');
let string = document.getElementById('texto').value;
console.log(string);
let stringUpperCase= string.toUpperCase();

let space =document.getElementById('espacios').value;
console.log(space);

let meaning =cipher.decode(stringUpperCase, space);
console.log(meaning);
boxInput2.innerHTML= meaning;
 }

function Back_one() {
document.getElementById("FirstPage").style.display= "block";
document.getElementById("SecondPage").style.display= "none";


}
function Back_oneSP() {
document.getElementById("FirstPage").style.display= "block";
document.getElementById("ThirdPage").style.display="none";
}

//let inPuttext= document.getElementById("texto");
//let slicers= document.getElementById("espacios");
//let inPuttextBox = inPuttext.value;
//let slicersBox= slicers.value;

//document.getElementById("result_cipher").innerHTML = cipher.encode(inPuttextBox, slicersBox);
//document.getElementById("result_cipher").innerHTML = cipher.decode(inPuttextBox, slicersBox);

//observador

document.getElementById("FirstButton").addEventListener('click',cipherOne);
document.getElementById("secondButton").addEventListener('click',unCipher_one);
document.getElementById('BackToTheTop1').addEventListener('click', Back_one);
document.getElementById('BackToTheTop1SP').addEventListener('click', Back_oneSP);



////
//document.getElementById("FirstButton").addEventListener("click", cipher.encode(inPuttextBox, slicersBox));
//let inPuttext= document.getElementById("texto");
//let slicers= document.getElementById("espacios");
//
//
//document.getElementById("FirstButton").addEventListener("click", cipher());

//document.getElementById("result_cipher").inner.HTML= cipher.results;
