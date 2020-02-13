import cipher from "cipher.js"; 
//console.log(cipher);

// boton para cifrar
let textEncode = ( ) => {
let text = document.getElementById ("text").value;
let offset = parseInt (document.getElementById ("number").value);
let result = ciper.encode (text,offset);

document.getElementById('result').innerHTML=result;
}
document.getElementById('encode').addEventListener('click',textoCifrado);






// boton para descifrar
let textDecode = ( ) => {
let text = document.getElementById ("text").value;
let offset = parseInt (document.getElementById ("number").value);
let result = ciper.decode (text,offset);

document.getElementById('result').innerHTML=result;
}
document.getElementById('decode').addEventListener('click',textoCifrado);
