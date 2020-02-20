import cipher from './cipher.js';

//Check de funcionalidad de botones
const cipherButton = document.getElementById("cifrar");
const decipherButton  = document.getElementById ("descifrar");

//la función empieza a llamar la operación y valores asignados en cipher de cada botón

cipherButton.addEventListener ("click", () => {
  let pass = document.getElementById ("password").value;
  let offset = document.getElementById ("movements").value;
  let ciPass = cipher.encode (pass, offset);
  document.getElementById("passDecode").innerHTML = ciPass;
})

//valores y funciones asignadas al botón descifrar

decipherButton.addEventListener ("click", () => {
  let pass1 = document.getElementById ("password").value;
  let offset1 = document.getElementById ("movements").value;
  let ciPass1 = cipher.decode (pass1, offset1);
  document.getElementById ("passDecode").innerHTML = ciPass1
})
//console.log(cipher);