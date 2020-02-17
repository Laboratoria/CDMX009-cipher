const cipherFunction = document.getElementById('cipher');
const decipherFunction = document.getElementById('decipher');
const elTxt = document.getElementById('nText');
const elNumber = document.getElementById("offNumber");
const showResult = document.getElementById("showResult");

if(cipherFunction){
  cipherFunction.addEventListener("click", cipher);
}
if (decipherFunction) {
  decipherFunction.addEventListener("click", decipher);
}

function cipher(offNum, nTxt) {
  var nTxt = elTxt.value;
  var offNum = parseInt(elNumber.value);
  var i = 0;
  var finalTxt = "";

for (i = 0; i < nTxt.length; i++) {
  r = (nTxt.charCodeAt(i) - 65 + offNum) % 26 + 65;
  finalTxt += String.fromCharCode(r);
}
showResult.textContent += finalTxt;
}

function decipher() {
  var nTxt = elTxt.value;
  var offNum = parseInt(elNumber.value);
  var i = 0;
  var finalTxt = "";

for (i = 0; i < nTxt.length; i++) {
  r = (nTxt.charCodeAt(i) - 65 - offNum) % 26 + 65;
  finalTxt += String.fromCharCode(r);
}
showResult.textContent += finalTxt;
}



// export default cipher;
