import cipher from './cipher.js';

console.log(cipher);

// refs
let cifrarButton = document.getElementById('cifrar')

function convert(){
  let tex= document.getElementById("text").value;
  let offset= document.getElementById("desplazamiento").value;
  let result = cipher.decode(tex,offset)
  console.log(result)
  // colocarla en el html

}
 

// observadores
cifrarButton.addEventListener('click', convert)