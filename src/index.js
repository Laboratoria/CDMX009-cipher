import cipher from './cipher.js';

encodeButton.onclick= function () {
    let text = document.getElementById('textToEncode').value;
    let offset = document.getElementById('offsetEncode').value;
    let encodeText = cipher.encode(text,offset);
    document.getElementById('encodeText').value.innerHTML=encodeText;
}


console.log(cipher);
