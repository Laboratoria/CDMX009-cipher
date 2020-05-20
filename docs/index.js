import cipher from './cipher.js';

const buttonEncode = document.getElementById("encodebutton");
const buttonDecode = document.getElementById("decodebutton");
document.getElementById("startButton").addEventListener("click", screen);
document.getElementById("clean").addEventListener("click", cleanScreen)
buttonEncode.addEventListener("click", encode);
buttonDecode.addEventListener("click", decode);

//función que sirve para cambiar pantallas
function screen(){ 
    let screens = document.getElementById("firstPage")
    screens.style = "display:none";
    document.getElementById("secondPage").style.display = "block";
}


//función para limpiar página
function cleanScreen() {
  document.getElementById("textleft").value = " ";
  document.getElementById("textright").innerHTML = " ";
  document.getElementById("offset").value = " ";
}


// función donde se definen variables para cipher.js
function encode(){ 
    const cipherFunct = cipher;
    let message = document.getElementById("textleft").value;
    let offsetNumber = document.getElementById("offset").value;
    let finalResult = cipherFunct.encode (offsetNumber, message);
    document.getElementById("textright").innerHTML = finalResult;
  }

function decode(){
   const cipherFunct = cipher;
   let messageD = document.getElementById("textleft").value;
   let offsetNumberD = document.getElementById("offset").value;
   let finalResultD = cipherFunct.decode(offsetNumberD, messageD);
   document.getElementById("textright").innerHTML = finalResultD;
}
