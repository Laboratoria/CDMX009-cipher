

function segundapantalla(){
  let pantallas = document.getElementById("página-de-inicio");
  pantallas.style = "display:none";
  document.getElementById("ingresar-datos").style.display = "block";
  document.getElementById("Next").addEventListener("click",segundapantalla);

}
