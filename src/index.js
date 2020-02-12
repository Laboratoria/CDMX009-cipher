//import cipher from './cipher.js';

console.log(cipher);

function startApp(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('number').style.display = 'block';
  }

function getOffsetNo(){
  let offsetNo = document.getElementById('dayNo').value;
  if (offsetNo <32 && offsetNo >0) {
    document.getElementById('number').style.display = 'none';
    document.getElementById('user').style.display = 'block';
  }
  else {
    alert('Solo del 1 al 31');
  }
  }

function getUser(){
  let userName = document.getElementById('name').value;
  if (userName != ''){
  document.getElementById('user').style.display = 'none';
  document.getElementById('keyword').style.display = 'block';
  }
  else {
  alert('Escribe tu usuario')
  }
}

function capsOnly(event) {
    let pressed = event.which;
    if (pressed < 64) return false;
    if (pressed > 91) return false;
  }

  function getKey(){
    let key = document.getElementById('pass').value;
    if (key != '') {
    document.getElementById('keyword').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    }
    else {
    alert('Escribe la palabra clave')
    }
  }

function reStart(){
  document.getElementById('results').style.display = 'none';
  document.getElementById('home').style.display = 'block';
  
}


let cipheredUser = 'ciphered user';
document.getElementById('ciphered').value = cipheredUser;

let decipheredKeyword = 'deciphered keyword';
document.getElementById('deciphered').value = decipheredKeyword;
