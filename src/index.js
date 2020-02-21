
import cipher from './cipher.js';
console.log(cipher);

//observador
document.getElementById("FirstButton").addEventListener('click',cipherOne);
document.getElementById("secondButton").addEventListener('click',unCipher_one);
document.getElementById('BackToTheTop1').addEventListener('click', Back_one);
document.getElementById('BackToTheTop1SP').addEventListener('click', Back_oneSP);

function cipherOne() {
document.getElementById("FirstPage").style.display= "none";
document.getElementById("SecondPage").style.display= "block";

let boxInput= document.getElementById('result_cipher');//mando a llamar a mi id "result_cipher", es la caja donde quiero poner mi resultado y le pongo el nombre boxInput
let string = document.getElementById('texto').value; //lo que se quiere cifrar

let stringUpperCase1= string.toUpperCase();// Lo que se quiere cifrar a mayúsculas
//console.log(stringUpperCase1)
let space =document.getElementById('espacios').value;// el número de espacios

// le pido a cifer que haga su chamba
let password =cipher.encode(space, stringUpperCase1); // se manda llamar a cipher , para que haga la función de encode con esos datos
//console.log(password); //que me enseñe el resultado en la consola

boxInput.innerHTML= password; // que me ponga el resultado codificado en el boxInput

}


function unCipher_one() {

document.getElementById("FirstPage").style.display= "none";
document.getElementById("ThirdPage").style.display= "block";

let boxInput2= document.getElementById('Result');
let string = document.getElementById('texto').value;

let stringUpperCase= string.toUpperCase();

let space =document.getElementById('espacios').value;


let meaning =cipher.decode(space, stringUpperCase);
//console.log(meaning);
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
