import cipher from './cipher.js';

console.log(cipher);

// refs
let cifrarButton = document.getElementById('cifrar')

function convert(){
  let tex= document.getElementById("text").value;
  let offset= document.getElementById("desplazamiento").value;
  let result = cipher.decode(tex,offset);
  document.getElementById("textarea").innerHTML = result;
  console.log(result);
  // colocarla en el html

}

// function show() {
//   let insert= document.getElementById("textarea").value;
  
// }

// observadores
cifrarButton.addEventListener('click', convert)