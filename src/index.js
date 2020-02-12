// alias for import
import Cipher from './cipher.js';

function showEncryptPage() {
    console.log( Cipher.encrypt('my password', 13) );
    document.getElementById("logins-second-page").style.display = "block";
    document.getElementById("logins-first-page").style.display = "none";
    document.getElementById("logins-third-page").style.display = "none";
}

function showDesencryptPage() {
    console.log( Cipher.desencrypt('my password encryptado', 13) );
    document.getElementById("logins-first-page").style.display = "none";
    document.getElementById("logins-second-page").style.display = "none";
    document.getElementById("logins-third-page").style.display = "block";
}

window.pageEncrypt = showEncryptPage;
window.pageDesencrypt = showDesencryptPage;