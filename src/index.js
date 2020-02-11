

function cifrar(){
    let cipherText = document.getElementById("cipherText");
    text = cipherText.value;
             
    let cipherKey = document.getElementById("cipherKey");
    offset = parseInt(cipherKey.value);
    
    let caracteres = [];
    let concatenarCaracteres="";
    let charnum=0;
  
    for (let i = 0; i < text.length; i++){
        charnum = Number.parseInt(text.charAt(i).charCodeAt(0));
        console.log(charnum);

        if ((charnum==32)) {
            charnum=charnum;
            console.log("x");

        }else if(64<charnum<91){
                charnum = (charnum -65 + offset)%26+65;
                console.log("mayusculas");

        }else if((96<charnum<123)){
                charnum=(charnum-97+ offset)%26+97;
                console.log("minusculas");
        }
            caracteres[i]=String.fromCharCode(charnum);
            concatenarCaracteres += caracteres[i]+"";
    }          
    let element = document.getElementById("resultado");
    element.innerHTML=concatenarCaracteres.toString();
}

function descifrar() {
    let cipherText = document.getElementById("cipherText");
    text = cipherText.value;
                
    let cipherKey = document.getElementById("cipherKey");
    offset = parseInt(cipherKey.value);

    let caracteres = [];
    let charnum=0;
    let concatenarCaracteres="";
    
    for (let i = 0; i < text.length; i++){
        charnum= Number.parseInt(text.charAt(i).charCodeAt(0));
        console.log(charnum);
        if ((charnum==32)) {
            charnum=charnum;
            console.log("x");
            
        } else if((64<charnum<91)){
            charnum = (charnum +65 - offset)%26+65;
            console.log("mayusculas");
            
        }else if(96<charnum<123) {
            charnum=(charnum+97- offset)%26+97;
            console.log("minusculas");
           }
    caracteres[i]=String.fromCharCode(charnum);
    concatenarCaracteres += caracteres[i]+"";
    }
                  
    let element = document.getElementById("resultado");
    element.innerHTML = concatenarCaracteres.toString();
    
}

function limpiar() {
    document.getElementById("resultado").innerText="";
  }
