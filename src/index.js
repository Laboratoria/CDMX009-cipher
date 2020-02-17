import cipher from './cipher.js';

console.log(cipher);

// refs
let cifrarButton = document.getElementById('cifrar');
let decifrarButton = document.getElementById('decifrar');

function convert(){
  let tex= document.getElementById("text").value;
  let offset= document.getElementById("desplazamiento").value;
  let result = cipher.code(tex,offset);
  document.getElementById("textarea").innerHTML = result;
 
}

function show() {
  let tex= document.getElementById("text").value;
  let offset= document.getElementById("desplazamiento").value;
  let resultD = cipher.decode(tex,offset);
  document.getElementById("textarea").innerHTML = resultD;

 }

// observadores
cifrarButton.addEventListener('click', convert);
decifrarButton.addEventListener('click', show);
