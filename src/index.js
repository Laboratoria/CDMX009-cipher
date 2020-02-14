import cipher from "./cipher.js"
let cifBoton = document.getElementById('cifrar');
cifBoton.addEventListener("click",() => {
  let msjusuario = document.getElementById("ingresoMensaje").value;
  let despderecha = document.getElementById("nOffsetD").value;
  let resultado = cipher.encode(despderecha, msjusuario);
  document.getElementById("resultadoCif").innerHTML = resultado;
})

let desBoton =document.getElementById("decifrado");
desBoton.addEventListener("click",() => {
  let msjusuario2=document.getElementById("ingresoMensaje").value;
  let despizquierda=document.getElementById("n_offset_d").value;
  let resultado2=cipher.decode(despizquierda,msjusuario2);
  document.getElementById("resultadoCif").innerHTML=resultado2;
})
