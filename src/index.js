import cipher from './cipher.js';

//variables que van a guardar los botones
//let encodeButton = document.getElementById('encodeButton');
//encodeButton.addEventListener ('click',
//funcion para el boton de cifrado e imprimir resultado
function eButton () {
    let encodeButton = document.querySelector('#encodeButton');
    let num = document.getElementById('offsetEncode');
    let offset = (num.value); 
    let string = document.querySelector('textToEncode');
    let text = (string.value);
    let cifText = cipher.encode(offset, text);
    //let encodeText = document.getElementById('encodeText');
    //encodeText.innerHTML = cifText;
    document.querySelector('#encodeText').value=cifText;
    encodeButton.addEventListener('click',eButton);
};

//variables que van a guardar los botones
//let decodeButton = document.getElementById('decodeButton');
//decodeButton.addEventListener ('click',
//funcion para el boton de descifrado e imprimir resultado
function dButton () {
    let decodeButton = document.querySelector('decodeButton');
    let num = document.getElementById('offsetDecode');
    let offset = (num.value); 
    let string = document.getElementById('textToDecode').value;
    let text = (string.value);
    let decText = cipher.decode(offset, text);
    //let decodeText = document.getElementById('decodeText').value;
    //decodeText.innerHTML = decText;
    document.querySelector('decodeText').value=decText;
    decodeButton.addEventListener('click',dButton);
};
///////////////////////////////////////
//encodeButton.onclick= function pressEncode () {
//    let text = document.getElementById('textToEncode').value;
//    let offset = document.getElementById('offsetEncode').value;
//    document.getElementById('encodeButton').addEventListener('click',pressEncode);
//    cipher.encode(offset.text);
//}


console.log(cipher);
