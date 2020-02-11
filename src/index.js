import cipher from './cipher.js';

console.log(cipher);

function getName() {
    let name=document .getElementById ("name").value;
    let pat=document.getElementById ("pat").value;
    let mat= document.getElementById ("mat").value;
    console.log (name+ "" +pat+ "" +mat); 
}

//listener u observador
document.querySelector('#lac').addEventListener('click', getName)

