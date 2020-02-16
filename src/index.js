import cipher from './cipher.js';


let getBoton = document.getElementById('getBoton');
getBoton.onclick = encode;

function encode() {
    let mensaje = document.getElementById('textBox').value;
    let keyNumber = document.getElementById('numBox').value;
    let texto = cipher.encode(keyNumber, mensaje); 
    document.getElementById('demo').innerHTML = texto;
}

let letBoton = document.getElementById('letBoton');
letBoton.onclick = decode;

function decode() {
    let mensaje = document.getElementById('decodeBox').value;
    let keyNumber = document.getElementById('numDeBox').value;
    let texto = cipher.decode(keyNumber, mensaje); 
    document.getElementById('decodeDemo').innerHTML = texto;
}

let copyBoton = document.getElementById('copyBoton');
copyBoton.onclick = copy;

function copy() {
    document.getElementById("demo").select();
    document.execCommand("copy");
}

let refresh = document.getElementById('specsLogo');
refresh.onclick = refreshPage;

let home = document.getElementById('homeLogo');
home.onclick = refreshPage;

function refreshPage(){
    window.location.reload();
} 
