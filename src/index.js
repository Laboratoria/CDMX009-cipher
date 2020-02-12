function startApp(){
  document.getElementById("home").style.display = "none";
  document.getElementById("number").style.display = "block";
  }

function getOffsetNo(){
  let offsetNo = document.getElementById('dayNo').value;
  if (offsetNo <32 && offsetNo >0) {
    document.getElementById('number').style.display = "none";
    document.getElementById('user').style.display = "block";
  }
  else {
    alert('Ingresa un número del 1 al 31');
  }
  }

function getUser(){
  let userName = document.getElementById('name').value;
  document.getElementById('test').innerHTML = userName + ' chan';
}

function NoSpace(event) {
    let space = event ? event.which : window.event.keyCode;
    if (space < 64  && space > 91) return false;
  }

let cipheredUser = 'ciphered user';
document.getElementById("ciphered").value = cipheredUser;

let decipheredKeyword = 'deciphered keyword';
document.getElementById("deciphered").value = decipheredKeyword;

//import cipher from './cipher.js';

//console.log(cipher);
