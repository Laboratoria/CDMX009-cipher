import {cipher} from './cipher';

function screen(){
  document.getElementById("root").style.display = "none";
  document.getElementById("root2").style.display = "block";
}
function screennext(){
  document.getElementById("root2").style.display = "none";
  document.getElementById("root3").style.display = "block";
}

function next(){
  document.getElementById("root3").style.display = "none";
  document.getElementById("root4").style.display = "block";
}

function valuencode(){
  let offset = parseInt(document.getElementById("Age").value);
  let string = document.getElementById("name").value;
 let strings = string.toUpperCase();
 let txt = cipher.encode(offset, strings);
 document.getElementById("result").value = txt;
  }


function valuedecode(){
  let age = parseInt(document.getElementById("Age").value);
  let codepromo = document.getElementById("code").value;
if(age, codepromo)
{
  let dateUser = cipher.decode(age,codepromo);
  document.getElementById("nameUser").innerHTML = dateUser;
  document.getElementById("AgeUser").innerHTML = age;
}
}
window.encrypt = screen;
window.desencrypt = screennext;
window.page = next;
window.value = valuencode;
window.decode = valuedecode;