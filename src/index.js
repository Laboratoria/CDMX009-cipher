import cipher from './cipher.js';

//console.log(cipher);
// console.log(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));

function contribution() {
  document.querySelector("#ingresar-datos").style.display = "block";
  document.querySelector("#pagina-de-inicio").style.display = "none";
}

function goBack() {
  document.querySelector("#pagina-de-inicio").style.display = "block";
  document.querySelector("#ingresar-datos").style.display = "none";
}

function processUser() {
  const inputUser = document.getElementById("txt-usuario");
  const output = document.getElementById("usuario-cifrado");
  let userName = inputUser.value.toUpperCase();
  let offset = userName.length;
  if (offset == 0) {
    output.textContent = "usuario";
  } else {
    let nombreCifrado = cipher.encode(offset, userName);
    let nombreDescifrado = cipher.decode(offset, nombreCifrado);
    output.textContent = nombreCifrado + " (" + nombreDescifrado + ")";
  }
}

function ingresarColab() {
  document.querySelector("#ingresar-colaboracion").style.display = "block";
  document.querySelector("#ingresar-datos").style.display = "none";
}


function rIngresarDatos() {
  document.querySelector("#ingresar-colaboracion").style.display = "none";
  document.querySelector("#ingresar-datos").style.display = "block";
}

document.getElementById("btn-contr").addEventListener("click", contribution);
document.getElementById("btn-go-back").addEventListener("click", goBack);
document.getElementById("txt-usuario").addEventListener("input", processUser);
document.getElementById("btn-ingresar-colaboracion").addEventListener("click", ingresarColab);

document.getElementById("btn-r-ingresar-datos").addEventListener("click", rIngresarDatos);
