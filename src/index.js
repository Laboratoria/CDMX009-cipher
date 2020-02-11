import cipher from './cipher.js';

console.log(cipher);




   
// function getText() {
//     var x = document.getElementById("text").value;
//     document.getElementById("demo").innerHTML = x;
//   }
// function getText() {
//   var getUnicode= "ABC".charCodeAt(0);
//   document.getElementById("demo").innerHTML = getUnicode;
// }

//   function getDesp() {
//     var y = document.getElementById("text").value;
//     document.getElementById("demo1").innerHTML = x;
//   }
    
function getText() {
  var x = document.getElementById("text").value;
  document.getElementById("demo").innerHTML = x;
}
function despN() {    
for (let x = 1; x < 26; x++) {
  document.write("<option>" + x + "<option>");
}
}
function myFunctionTest() {
  let tex= document.getElementById("text").value;
let conv= tex.charCodeAt();
document.write(conv);
}
