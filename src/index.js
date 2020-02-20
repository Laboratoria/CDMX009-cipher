import cipher from './cipher.js';


let encButton = document.getElementById('encodeButton');
function encodeButton() {
    let text = document.getElementById('text').value;
    let offset = document.getElementById('offset').value;
    let result = cipher.encode(offset,text);
    document.getElementById('resultText').innerText = result;
}
encButton.addEventListener('click', encodeButton)

let decButton = document.getElementById('decodeButton');
function decodeButton() {
    let text = document.getElementById('text').value;
    let offset = document.getElementById('offset').value;
    let result2 = cipher.decode(offset,text);
    document.getElementById('resultText').innerText = result2;    
}
decButton.addEventListener('click', decodeButton)