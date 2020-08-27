import   cipher from "./cipher.js" ;

let cleanButton = document.getElementById("clean");//llamando a cleanButton
cleanButton.onclick = clean;//llamando a cleanButton

let copyButton=document.getElementById("copy");
copyButton.onclick = copy;

document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.querySelector('#switch-label');
    
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {

            document.getElementById("text").addEventListener("input", getValue);

                function getValue() {
                    let cipherText = document.getElementById("text");//llamar el texto del input
                    let text = cipherText.value;//guardar el valor del texto en una variable
                        
                    let cipherKey = document.getElementById("key");//llamar el numero del input
                    let offset = parseInt(cipherKey.value);//guardar el valor del numero en una variable

                    let concatenarCharacters = cipher.decode(offset,text);//llamar la funcion de encode 

                    let element = document.getElementById("result");
                    element.innerHTML =  concatenarCharacters.toString();
                
                }
            
            console.log('Checked');
      } else {
            document.getElementById("text").addEventListener("input", getValue);

                function getValue() {
                    let cipherText = document.getElementById("text");//llamar el texto del input
                    let text = cipherText.value;//guardar el valor del texto en una variable
                        
                    let cipherKey = document.getElementById("key");//llamar el numero del input
                    let offset = parseInt(cipherKey.value);//guardar el valor del numero en una variable

                    let concatenarCharacters = cipher.encode(offset,text);//llamar la funcion de encode 

                    let element = document.getElementById("result");
                    element.innerHTML =  concatenarCharacters.toString();
                
                }
            console.log('Not checked');
      }
    });
  });

function clean (){//funcion para cuando se presione el boton limpiar se limpie el div de resultado 
    document.getElementById("text").value=" ";//se pone un div vacio 

}

function copy(){
    let copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  
}



