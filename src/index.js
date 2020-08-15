import cipher from './cipher.js';

let dayNumber;
let offsetNo;
let pressed;
let userName;
let key;
let ciphedUser;
let deciphKey;
//Homescreen event to start and go to the offset input screen
document.getElementById('homeImage').addEventListener('click', startApp);
function startApp(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('offsetNumber').style.display = 'block';
}
//Function to get offset number and continue to user name
document.getElementById('getOffset').addEventListener('click', getOffsetNo);
function getOffsetNo(){
  offsetNo = parseInt(document.getElementById('dayNumber').value);
  if (offsetNo <32 && offsetNo >0) {
    document.getElementById('offsetNumber').style.display = 'none';
    document.getElementById('inputUser').style.display = 'block';
  }
  else {
    alert('Solo del 1 al 31');
  }
}
//Function to forbid the user from writing anything but letters
document.getElementById('name').addEventListener('keypress', lettersOnly);
document.getElementById('pass').addEventListener('keypress', lettersOnly);
function lettersOnly(event) {
    pressed = event.which;
    if (pressed < 65 || pressed > 90) {
      event.preventDefault();
    }
}
//Function to get user name and continue to password
document.getElementById('getName').addEventListener('click', getUser);
function getUser(){
  userName = document.getElementById('name').value;
  if (userName != ''){
    document.getElementById('inputUser').style.display = 'none';
    document.getElementById('inputKeyword').style.display = 'block';
  }
  else {
    alert('Escribe tu usuario')
  }
}
//Function to get password and continue to results and encoding and decoding Function
document.getElementById('getPass').addEventListener('click', getKey);
function getKey(){
  key = document.getElementById('pass').value;
  if (key != '') {
    ciphedUser = cipher.encode(offsetNo, userName);
    deciphKey = cipher.decode(offsetNo, key);
    document.getElementById('ciphered').value = ciphedUser;
    document.getElementById('deciphered').value = deciphKey;
    document.getElementById('inputKeyword').style.display = 'none';
    document.getElementById('results').style.display = 'block';
  }
  else {
    alert('Escribe la palabra clave')
  }
}
//Function to reset values and go back to homescreen
document.getElementById('backhome').addEventListener('click', reStart);
function reStart(){
  document.getElementById('dayNumber').value = '';
  document.getElementById('name').value = '';
  document.getElementById('pass').value = '';
  document.getElementById('results').style.display = 'none';
  document.getElementById('home').style.display = 'block';
}
