import cipher from './cipher.js';

let ButtonEncode = document.getElementById("encode");
let ButtonDecode = document.getElementById("decode");
let text ='';
let displace = 0;

function actionData(){
    text =document.getElementById("text").value;
    displace =parseInt(document.getElementById("displace").value);
    }

ButtonEncode.onclick = function () {
    actionData();
    document.getElementById("result").value = cipher.encode(text, displace);
      };
  
  ButtonDecode.onclick = function () {
    actionData();
    document.getElementById("result").value = cipher.decode(text, displace);
       };
