//import cipher from './cipher.js';

  let botone = document.getElementById("cifrar");
  //Adjunte un evento de clic al documento. Cuando el usuario hace clic en cualquier parte del documento
  botone.addEventListener("click", () => {
    let desplazamiento = document.getElementById("offsetsaltos").value;
    let mensajeUsuario = document.getElementById("datosPersonales").value;
    let ciframiento = window.cipher.encode (desplazamiento, mensajeUsuario); 
    document.getElementById("codigo").innerHTML = ciframiento;
  })
  
  let botono = document.getElementById("descifrar");
  
  botono.addEventListener("click", () => {
    let desplazamientoV = document.getElementById("offsetsaltos").value;
    let mensajeUsuarioV = document.getElementById("datosPersonales").value;
    let desciframiento = window.cipher.decode(desplazamientoV, mensajeUsuarioV);
    document.getElementById("codigo").innerHTML = desciframiento;
  })
  
  
