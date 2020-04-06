//función avance de pantalla
function screen2() {
  let pantallas = document.getElementById('1screen')
  pantallas.style = 'display:none';
  document.getElementById('2screen').style.display = 'block';
}

//función encodeMsg
function encodeMsg() {
  let displace = document.getElementById('displace').value;
  let originalMsg = document.getElementById('msgOr').value;
  let encryptMsg = window.cipher.encode(displace, originalMsg);
  document.getElementById('result').innerHTML = encryptMsg;
}

//función dencodeMsg
function decodeMsg() {
  let displaceC = document.getElementById('displace').value;
  let originalMsgC = document.getElementById('msgOr').value;
  let decryptMsg = window.cipher.decode(displaceC, originalMsgC);
  document.getElementById('result').innerHTML = decryptMsg;
}

//función clean texto
function clean() {
  document.getElementById('displace').value = '';
  document.getElementById('msgOr').value = '';
  document.getElementById('result').innerHTML = '';
}

//aquí los botones del html
document.getElementById('go').addEventListener('click',screen2)
document.getElementById('clean').addEventListener('click',clean)
document.getElementById('bencrypt').addEventListener('click',encodeMsg)
document.getElementById('bdecrypt').addEventListener('click',decodeMsg)