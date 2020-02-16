//aquí los botones del html
document.getElementById('ir').addEventListener('click',pantalla2)
document.getElementById('limpiar').addEventListener('click',limpia)
document.getElementById('bcifrar').addEventListener('click',cifraMensaje)
document.getElementById('bdescifrar').addEventListener('click',descifraMensaje)

//función avance de pantalla
function pantalla2() {
  let pantallas = document.getElementById('pantalla1')
  pantallas.style = 'display:none';
  document.getElementById('pantalla2').style.display = 'block';
}

//función cifraMensaje
function cifraMensaje() {
  let desplazamiento = document.getElementById('desplaza').value;
  let mensajeOriginal = document.getElementById('mensajeor').value;
  let ciframiento = cipher.encode(desplazamiento, mensajeOriginal);
  document.getElementById('resultado').innerHTML = ciframiento;
}

//función descifraMensaje
function descifraMensaje() {
  let desplazamientoC = document.getElementById('desplaza').value;
  let mensajeOriginalC = document.getElementById('mensajeor').value;
  let desciframiento = cipher.decode(desplazamientoC, mensajeOriginalC);
  document.getElementById('resultado').innerHTML = desciframiento;
}

//función limpiar texto
function limpia() {
  document.getElementById('desplaza').value = '';
  document.getElementById('mensajeor').value = '';
  document.getElementById('resultado').value = '';
}
