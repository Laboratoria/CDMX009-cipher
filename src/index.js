import cipher from './cipher.js';

console.log(cipher);

    function cifrar() {
    let cipherText = document.getElementById("cipherText");
    let texto = cipherText.value;
                 
    let cipherKey = document.getElementById("cipherKey");
    let numero = cipherKey.value;

    let caracteres = [];
    let formula=[];
    let concatenarCaracteres="";
    let charnum=0;
    let varnumber=0;
  
    for (let i = 0; i < texto.length; i++){
                                            charnum = texto.charAt(i).charCodeAt(0);
                                            varnumber = parseInt(numero);
                                            charnum = charnum + varnumber;
                                            caracteres[i]=String.fromCharCode(charnum);
                                            concatenarCaracteres += caracteres[i]+"";
                                        }          
    let element = document.getElementById("resultado");
    element.innerHTML = concatenarCaracteres.toString();
}

let limpiar = document.getElementById("limpiar");