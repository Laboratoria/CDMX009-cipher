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
        alert("No ingrsaste contraseña o desplazamiento");
    } else {
        var result = Cipher.encryptPassword(stringPassword, scrollNumber);
        document.getElementById("input-password-encrypt-result").innerText = result;
    }
  }

window.pageEncrypt = showEncryptPage;
window.pageDesencrypt = showDesencryptPage;
window.faqsPage = showFaqsPage;
window.returnMainPage = returnMainPage;
window.valueToEncrypt = valueToEncrypt;

  