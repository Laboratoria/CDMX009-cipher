/*Redirecciona a la pantalla de cifrar*/
function formularioCifrar(){
    location.href= "uno.html";
}
/*Redirecciona a la pantalla de decifrar*/
function formularioDecifrar(){
    location.href= "dos.html";
}
/*Redirecciona a la pantalla de cifrar*/
function inicio(){
    location.href= "index.html";
}
/*Funcio para codificar*/
function enviarCodificado(){
    let number_offset = document.getElementById("number_encode").value;
    let textEncode = document.getElementById("text-encode").value;
        textEncode = textEncode.toUpperCase();
    
    if(textEncode  === "")   {
        alert("Ingresa el texto a cifrar"); 
        document.getElementById("text-encode").focus();
        return false;
    }   
    if(number_offset === "")   {
        alert("El número de recorrido esta vacia"); 
        document.getElementById("number_encode").focus();
        return false;
    }

   if (isNaN(parseInt(number_offset))) {
        alert('El numero de recorrido debe de ser numerico');
        document.getElementById("number_encode").focus();
        return false;
     }    
        document.getElementById("result-encode").innerHTML = window.cipher.encode(textEncode, number_offset);
    }

/*Funcion para decodificar*/
function enviarDecodificado(){
     let textDecode = document.getElementById("text-decode").value;
        textDecode = textDecode.toUpperCase();
    let number_offset = document.getElementById("number-decode").value;
        
     if(textDecode  === "")   {
        alert("Ingresa el texto a decifrar"); 
        document.getElementById("text-decode").focus();
        return false;
    }   
    if(number_offset === "")   {
        alert("El número de recorrido esta vacia"); 
        document.getElementById("number-decode").focus();
        return false;
    }

   if (isNaN(parseInt(number_offset))) {
        alert('El numero de recorrido debe de ser numerico');
        document.getElementById("number_decode").focus();
        return false;
     }   
    document.getElementById("result-decode").innerHTML = window.cipher.decode(textDecode, number_offset);
}