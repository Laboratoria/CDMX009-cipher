// alias for import
import Cipher from './cipher.js';
// let inputPassword = ""
// if (inputPassword.length == 0 || inputPassword.length == " ") {
//   alert("No ingresaste tu contraseña");
// }

function showEncryptPage(str, num) {
    console.log( Cipher.encryptPassword(str,num) );
    document.getElementById("logins-second-page").style.display = "block";
    document.getElementById("logins-main-page").style.display = "none";
    document.getElementById("logins-third-page").style.display = "none";
}

function showDesencryptPage(str, num) {
    console.log( Cipher.desencryptPassword(str, num) );
    document.getElementById("logins-main-page").style.display = "none";
    document.getElementById("logins-second-page").style.display = "none";
    document.getElementById("logins-third-page").style.display = "block";
}

window.pageEncrypt = showEncryptPage;
window.pageDesencrypt = showDesencryptPage;