document.getElementById("startButton").addEventListener("click", screen)
document.getElementById("startButton").addEventListener("click",function() { changeBackground('#BF52FF') })

//función que sirve para cambiar pantallas
function screen() { 
    let screens = document.getElementById("firstPage")
    screens.style = "display:none";
    document.getElementById("secondPage").style.display = "block";
}

//Función que sirve para cambiar de color la pantalla 
function changeBackground(color) {
   document.body.style.background = color;
}

// función donde se definen variables para cipher.js
const buttonEncode = document.getElementById("encodebutton");
  buttonEncode.addEventListener("click", () => {
    let message = document.getElementById("textleft").value;
    let offsetNumber = document.getElementById("offset").value;
    let finalResult = cipher.encode (message, offsetNumber);
    document.getElementById("textright").innerHTML = finalResult;
  })

const buttonDecode = document.getElementById("decodebutton");
  buttonDecode.addEventListener("click", () => {
   let messageD = document.getElementById("textleft").value;
   let offsetNumberD = document.getElementById("offset").value;
   let finalResultD = cipher.decode(messageD, offsetNumberD);
   document.getElementById("textright").innerHTML = finalResultD;
  })


