// alias for import
import Cipher from './cipher.js';

function showEncryptPage () {
    document.getElementById("page-for-encrypt").style.display = "block";
    document.getElementById("logins-main-page").style.display = "none";
    document.getElementById("page-for-desencrypt").style.display = "none";
    document.getElementById("faqs_page").style.display = "none";
}
function showDesencryptPage () {
    document.getElementById("logins-main-page").style.display = "none";
    document.getElementById("page-for-encrypt").style.display = "none";
    document.getElementById("page-for-desencrypt").style.display = "block";
    document.getElementById("faqs_page").style.display = "none";
}
function showFaqsPage () {
    document.getElementById("logins-main-page").style.display = "none";
    document.getElementById("page-for-encrypt").style.display = "none";
    document.getElementById("page-for-desencrypt").style.display = "none";
    document.getElementById("faqs_page").style.display = "block";
}
function returnMainPage () {
    document.getElementById("logins-main-page").style.display = "block";
    document.getElementById("page-for-encrypt").style.display = "none";
    document.getElementById("page-for-desencrypt").style.display = "none";
    document.getElementById("faqs_page").style.display = "none";
}
function valueToEncrypt () {
    var scrollNumber = parseInt(document.getElementById("scroll-number-encrypt").value);
    var stringPassword = document.getElementById('input-password-encrypt').value;
    if (scrollNumber == 0 || stringPassword == "") {
        alert("No ingresaste contraseña o desplazamiento");
    } else {
        var result = Cipher.encryptPassword(stringPassword, scrollNumber);
        document.getElementById("input-password-encrypt-result").innerText = result;
    }
  }
  function valueToDesencrypt () {
    var scrollNumber = parseInt(document.getElementById("scroll-number-desencrypt").value);
    var stringPassword = document.getElementById('input-password-desencrypt').value;
    if (scrollNumber == 0 || stringPassword == "") {
        alert("No ingresaste contraseña o desplazamiento");
    } else {
        var result = Cipher.desencryptPassword(stringPassword, scrollNumber);
        document.getElementById("input-password-desencrypt-result").innerText = result;
        console.log("hola")
    }
  }
window.pageEncrypt = showEncryptPage;
window.pageDesencrypt = showDesencryptPage;
window.faqsPage = showFaqsPage;
window.returnMainPage = returnMainPage;
window.valueToEncrypt= valueToEncrypt;
window.valueToDesencrypt= valueToDesencrypt;