
    function cifrar(){
    let cipherText = document.getElementById("cipherText");
    let texto = cipherText.value;
                 
    let cipherKey = document.getElementById("cipherKey");
    let numero = cipherKey.value;

    let caracteres = [];
    let formula=[];
    let concatenarCaracteres=""
    let charnum=0
    let varnumber=0
  
    for (let i = 0; i < texto.length; i++){
                                            charnum = texto.charAt(i).charCodeAt(0)
                                            varnumber = parseInt(numero)
                                            charnum = (charnum -65 + varnumber)%26+65
                                            caracteres[i]=String.fromCharCode(charnum)
                                            concatenarCaracteres += caracteres[i]+""
                                        }          
    let element = document.getElementById("resultado");
    element.innerHTML=concatenarCaracteres.toString();
}

function descifrar() {
    let cipherText = document.getElementById("cipherText");
    let cipherKey=document.getElementById("cipherKey");
    let numero = cipherKey.value;
    let texto = cipherText.value;
    let caracteres = [];
    let formula=[];
    let charnum=0;
    let varnumber=0;
    let concatenarCaracteres="";
    
    for (let i = 0; i < texto.length; i++){
                                            charnum=       texto.charAt(i).charCodeAt(0);
                                            varnumber=parseInt(numero)
                                            charnum = (charnum + 65 - varnumber)%26+65;
                                            caracteres[i]=String.fromCharCode(charnum)
                                            concatenarCaracteres += caracteres[i]+"";
                                        }
                  
    let element = document.getElementById("resultado");
    element.innerHTML = concatenarCaracteres.toString();
    
}

let limpiar = document.getElementById("limpiar");